import type { Room, Session, GameState, Player, GameLogEntry, TileData, AnsweredQuestion, Question, Answer, CardType, QuizType, QuestionContext } from '../types';
import { PLAYER_COLORS, PLAYER_STARTING_KP, TILES, CHARACTERS_LIST, CARDS_INFO, CARD_COSTS, PLAYER_ELIMINATION_THRESHOLD } from '../constants';
import { QUESTIONS } from '../questions';


type GameStateListener = (room: Room) => void;

interface PlayerConfig {
    name: string;
    characterImg: string;
}

export const LOCAL_ROOM_ID = 'local_game';

const LIFELINE_COSTS = {
    eliminate: 200,
    ai_help: 300,
};

class GameService {
    private rooms: Map<string, Room> = new Map();
    private listeners: Map<string, GameStateListener[]> = new Map();
    
    // --- Room Management ---
    public createRoom(hostName: string, characterImg: string, numBots: number): { room: Room; session: Session } {
        const roomId = this.generateRoomId();
        const hostSession = this.createSession(hostName, characterImg);
        const newRoom: Room = {
            id: roomId,
            hostId: hostSession.id,
            sessions: [hostSession],
            gameState: null,
        };
        
        let availableChars = CHARACTERS_LIST.filter(c => c.img !== characterImg);

        for(let i=0; i < numBots; i++) {
            if (newRoom.sessions.length >= 4) break;
            if (availableChars.length === 0) break; // No more unique characters

            const botChar = availableChars.splice(Math.floor(Math.random() * availableChars.length), 1)[0];
            const botSession = this.createSession(`Bot ${i + 1}`, botChar.img, true);
            newRoom.sessions.push(botSession);
        }

        this.rooms.set(roomId, newRoom);
        return { room: newRoom, session: hostSession };
    }

    public joinRoom(roomId: string, playerName: string, characterImg: string): { room: Room; session: Session } {
        const room = this.rooms.get(roomId.toUpperCase());
        if (!room) {
            throw new Error("Phòng không tồn tại!");
        }
        if (room.sessions.length >= 4) {
            throw new Error("Phòng đã đầy!");
        }
        if (room.gameState) {
            throw new Error("Ván chơi đã bắt đầu!");
        }
        const newSession = this.createSession(playerName, characterImg);
        room.sessions.push(newSession);
        this.notifyListeners(room.id);
        return { room, session: newSession };
    }

    public addBot(roomId: string, hostSessionId: string) {
        const room = this.rooms.get(roomId);
        if (!room || room.hostId !== hostSessionId || room.sessions.length >= 4) return;
        
        const usedImages = room.sessions.map(s => s.characterImg);
        let availableChars = CHARACTERS_LIST.filter(c => !usedImages.includes(c.img));
        if (availableChars.length === 0) {
            availableChars = CHARACTERS_LIST;
        }
        const botChar = availableChars[Math.floor(Math.random() * availableChars.length)];
        const botNumber = room.sessions.filter(s => s.isBot).length + 1;
    
        const botSession = this.createSession(`Bot ${botNumber}`, botChar.img, true);
        room.sessions.push(botSession);
        this.notifyListeners(roomId);
    }
    
    public removeBot(roomId: string, hostSessionId: string, botSessionId: string) {
        const room = this.rooms.get(roomId);
        if (!room || room.hostId !== hostSessionId) return;

        const botIndex = room.sessions.findIndex(s => s.id === botSessionId && s.isBot);
        if (botIndex > -1) {
            room.sessions.splice(botIndex, 1);
            this.notifyListeners(roomId);
        }
    }
    
    // --- Game Lifecycle ---

    public createLocalGame(playerConfigs: PlayerConfig[]): GameState {
        const sessions = playerConfigs.map(config => this.createSession(config.name, config.characterImg, config.name.startsWith('Bot')));
        return this.initializeGameState(sessions);
    }
    
    public registerLocalGame(gameState: GameState) {
        if (this.rooms.has(LOCAL_ROOM_ID)) {
            this.rooms.delete(LOCAL_ROOM_ID);
            this.listeners.delete(LOCAL_ROOM_ID);
        }

        const room: Room = {
            id: LOCAL_ROOM_ID,
            hostId: gameState.players[0].sessionId,
            sessions: gameState.players.map(p => ({ id: p.sessionId, name: p.name, characterImg: p.characterImg, isBot: p.isBot })),
            gameState: gameState,
        };
        this.rooms.set(LOCAL_ROOM_ID, room);
    }

    public startGame(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room) return;

        room.gameState = this.initializeGameState(room.sessions);
        this.addLog(room.id, `Trò chơi bắt đầu! Lượt của ${room.gameState.players[0].name}.`);
        this.notifyListeners(roomId);
        this.checkBotTurn(roomId);
    }

    // --- Game Actions ---

    public rollDice(roomId: string, sessionId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.canRoll || room.gameState.winner) return;
        const state = room.gameState;
        
        const currentPlayer = state.players[state.currentPlayerIndex];
        if (currentPlayer.sessionId !== sessionId || state.isRolling || currentPlayer.isEliminated) return;
        
        const diceResult = Math.floor(Math.random() * 6) + 1;
        
        state.dice = diceResult;
        state.isRolling = true;
        this.notifyListeners(roomId);
        
        setTimeout(() => {
            const roomAfterTimeout = this.rooms.get(roomId);
            if (!roomAfterTimeout?.gameState) return;
            const stateAfterTimeout = roomAfterTimeout.gameState;

            stateAfterTimeout.isRolling = false;
            stateAfterTimeout.canRoll = false;
            this.addLog(roomId, `${currentPlayer.name} đã gieo được ${diceResult} điểm.`);
            this.notifyListeners(roomId);
            
            setTimeout(() => this.movePlayer(roomId, diceResult), 500);

        }, 1500); 
    }

    public handleQuestionAnswer(roomId: string, sessionId: string, answerIndex: number) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState || (!room.gameState.currentQuestion && !room.gameState.quizState)) return;
    
        const state = room.gameState;
        const player = state.players[state.currentPlayerIndex];
        if (player.sessionId !== sessionId) return;

        const question = state.quizState ? state.quizState.questions[state.quizState.currentIndex] : state.currentQuestion!;
        const isCorrect = answerIndex !== -1 && question.answers[answerIndex]?.correct === true;

        // --- Opportunity Link Logic ---
        const linkingPlayer = state.players.find(p => p.linkedPlayerId === player.id);
        if (linkingPlayer) {
            const kpValues = isCorrect ? [100, 150, 200] : [-100, -150, -200];
            const amount = kpValues[Math.floor(Math.random() * kpValues.length)];
            
            this.addLog(roomId, `Do liên kết tư tưởng, ${linkingPlayer.name} và ${player.name} cùng ${amount > 0 ? 'nhận' : 'mất'} ${Math.abs(amount)} KP!`);
            
            // Use a slight delay to show separate KP animations
            this.updatePlayerKP(roomId, player.id, amount);
            setTimeout(() => this.updatePlayerKP(roomId, linkingPlayer.id, amount), 100);

            linkingPlayer.linkedPlayerId = null; // Reset the link
        }

        // --- Handle Quiz Mode ---
        if (state.quizState) {
            this.handleQuizAnswer(roomId, player, answerIndex, isCorrect, question);
            return;
        }
        
        player.answeredQuestionsCount += 1;
        
        const historyEntry: AnsweredQuestion = {
            questionContent: question.content,
            answers: question.answers,
            selectedAnswerIndex: answerIndex,
            isCorrect: isCorrect,
            timestamp: new Date().toISOString(),
            playerId: player.id,
            playerName: player.name,
        };
        state.questionHistory.push(historyEntry);
        state.lifelineStatus = { eliminate: null, ai_help: null }; // Reset lifelines after answering

        // --- Handle standard tile question ---
        if (state.questionContext?.type === 'standard_tile') {
            const { pendingEffect, tile } = state.questionContext;
            state.currentQuestion = null;
            state.questionContext = null;

            if (tile.type === 'penalty') {
                // On penalty tiles, the effect always happens. A correct answer just gives a consolation prize.
                if (isCorrect) {
                    this.addLog(roomId, `${player.name} đã trả lời đúng, nhận 50 KP an ủi.`);
                    this.updatePlayerKP(roomId, player.id, 50);
                }
                this.triggerTileEffect(roomId, tile, pendingEffect, player, isCorrect ? 'Trả lời đúng! ' : 'Trả lời sai! ');
            } else {
                // For other standard tiles, a correct answer is required.
                if (isCorrect) {
                    this.addLog(roomId, `${player.name} đã trả lời đúng, nhận 50 KP và được sử dụng chức năng của ô!`);
                    this.updatePlayerKP(roomId, player.id, 50); // Add bonus KP
                    this.triggerTileEffect(roomId, tile, pendingEffect, player, 'Trả lời đúng! ');
                } else {
                    const penaltyAmount = -100;
                    this.addLog(roomId, `${player.name} đã trả lời sai và bị trừ ${Math.abs(penaltyAmount)} KP.`);
                    this.updatePlayerKP(roomId, player.id, penaltyAmount);
                    
                    state.tileEffectResult = {
                        tileName: "Trả lời sai!",
                        message: `Bạn đã trả lời sai và bị trừ ${Math.abs(penaltyAmount)} KP.\n\nĐáp án đúng là: ${question.answers.find(a => a.correct)?.content || ''}`,
                        icon: "❌"
                    };
                    state.pendingTileEffect = { type: 'end_turn' };
                    this.notifyListeners(roomId);
                    
                    if (player.isBot) {
                        setTimeout(() => this.executePendingTileEffect(roomId), 2000);
                    }
                }
            }
            return;
        }
        
        // --- Handle Investment Question ---
        if (state.questionContext?.type === 'investment') {
            const betAmount = state.questionContext.betAmount;
            state.currentQuestion = null;
            state.questionContext = null;

            const kpChange = isCorrect ? betAmount * 2 : -betAmount * 2;
            let message = `${player.name} đã trả lời ${isCorrect ? 'đúng' : 'sai'} và ${isCorrect ? 'thắng' : 'thua'} ${Math.abs(kpChange)} KP!`;
            if (!isCorrect) {
                 message += `\nĐáp án đúng: ${question.answers.find(a => a.correct)?.content || ''}`;
            }
            this.addLog(roomId, message);
            
            state.tileEffectResult = {
                tileName: "Kết Quả Đầu Tư",
                message: message,
                icon: isCorrect ? "🎉" : "😭"
            };
            state.pendingTileEffect = { type: 'kp_change_investment', amount: kpChange, playerId: player.id };
            
            this.notifyListeners(roomId);
            if (player.isBot) {
                 setTimeout(() => this.executePendingTileEffect(roomId), 2000);
            }
            return;
        }
    }
    
    // --- Resolution methods for pending actions ---
    
    public resolveCardPurchase(roomId: string, sessionId: string, cardType: CardType | null) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const player = this.getCurrentPlayer(room.gameState);
        if (player.sessionId !== sessionId) return;

        room.gameState.pendingAction = null;

        if (cardType) {
            const cost = CARD_COSTS[cardType];
            if (player.kp >= cost) {
                this.updatePlayerKP(roomId, player.id, -cost, true); // true to skip x2 card
                const newCard = { ...CARDS_INFO[cardType], id: `card_${Date.now()}` };
                player.cards.push(newCard);
                this.addLog(roomId, `${player.name} đã mua '${newCard.name}' với giá ${cost} KP.`);
            } else {
                this.addLog(roomId, `${player.name} không đủ KP để mua thẻ.`);
            }
        } else {
            this.addLog(roomId, `${player.name} đã quyết định không mua thẻ.`);
        }

        this.endTurn(roomId, player.sessionId, true);
    }
    
    public resolveAttackAction(roomId: string, sessionId: string, targetPlayerId: number | null) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const state = room.gameState;
        const attacker = this.getCurrentPlayer(state);
        if (attacker.sessionId !== sessionId) return;

        state.pendingAction = null;

        if (targetPlayerId === null) {
            this.addLog(roomId, `${attacker.name} đã chọn không tấn công.`);
            this.endTurn(roomId, attacker.sessionId, true);
            return;
        }
        
        const targetPlayer = state.players.find(p => p.id === targetPlayerId);

        if (targetPlayer && !targetPlayer.isEliminated) {
            const shieldCardIndex = targetPlayer.cards.findIndex(c => c.type === 'shield');
            if (shieldCardIndex > -1) {
                targetPlayer.cards.splice(shieldCardIndex, 1);
                this.addLog(roomId, `${attacker.name} phê bình ${targetPlayer.name}, nhưng ${targetPlayer.name} đã dùng 'Lá Chắn Biện Chứng' để phòng thủ!`);
                this.endTurn(roomId, attacker.sessionId, true);
            } else {
                this.addLog(roomId, `${attacker.name} đã phê bình trực diện ${targetPlayer.name}!`);
                state.attackAnimation = {
                    attackerId: attacker.id,
                    targetId: targetPlayer.id,
                    attackerOriginalPosition: attacker.position,
                    stage: 'moving_to_target',
                };
                this.notifyListeners(roomId);
            }
        } else {
            this.endTurn(roomId, attacker.sessionId, true);
        }
    }

    public proceedAttackAnimation(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.attackAnimation) return;

        const state = room.gameState;
        const { stage, attackerId, targetId } = state.attackAnimation;

        switch (stage) {
            case 'moving_to_target':
                state.attackAnimation.stage = 'impacting';
                this.notifyListeners(roomId);
                break;
            case 'impacting':
                state.attackAnimation.stage = 'target_moving_back';
                this.notifyListeners(roomId);
                const target = state.players.find(p => p.id === targetId);
                if (target) {
                    this.addLog(roomId, `${target.name} bị đẩy lùi 5 ô!`);
                    this.movePlayerByOffset(roomId, target.id, -5, false, () => {
                        this.proceedAttackAnimation(roomId);
                    });
                }
                break;
            case 'target_moving_back':
                state.attackAnimation.stage = 'attacker_returning';
                this.notifyListeners(roomId);
                break;
            case 'attacker_returning':
                const attacker = state.players.find(p => p.id === attackerId);
                state.attackAnimation = null;
                this.endTurn(roomId, attacker?.sessionId || '', true);
                break;
        }
    }

    public resolveOpportunityLinkAction(roomId: string, sessionId: string, targetPlayerId: number | null) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const player = this.getCurrentPlayer(room.gameState);
        if (player.sessionId !== sessionId) return;
        
        room.gameState.pendingAction = null;
        const targetPlayer = room.gameState.players.find(p => p.id === targetPlayerId);

        if (targetPlayer && !targetPlayer.isEliminated) {
            player.linkedPlayerId = targetPlayer.id;
            this.addLog(roomId, `${player.name} đã liên kết tư tưởng với ${targetPlayer.name} cho lượt tiếp theo!`);
        }
        
        this.endTurn(roomId, player.sessionId, true);
    }

    public resolveInvestmentBetAction(roomId: string, sessionId: string, betAmount: number) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const player = this.getCurrentPlayer(room.gameState);
        if (player.sessionId !== sessionId) return;

        room.gameState.pendingAction = null;

        if (betAmount > 0 && player.kp >= betAmount * 2) {
            room.gameState.questionContext = { type: 'investment', betAmount };
            this.addLog(roomId, `${player.name} đã cược ${betAmount} KP! Giờ là câu hỏi quyết định.`);
            const question = this.getNewQuestion(roomId);
            if (question) {
                room.gameState.currentQuestion = question;
                this.notifyListeners(roomId);
                this.checkBotTurn(roomId);
            } else {
                this.addLog(roomId, `Không tìm thấy câu hỏi, bạn không bị trừ tiền cược.`);
                this.endTurn(roomId, player.sessionId, true);
            }
        } else {
            this.addLog(roomId, `${player.name} đã chọn không đầu tư.`);
            this.endTurn(roomId, player.sessionId, true);
        }
    }

     public executePendingTileEffect(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.pendingTileEffect) return;

        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        const effect = state.pendingTileEffect;

        state.tileEffectResult = null;
        state.pendingTileEffect = null;
        
        if (player.isEliminated) { // If player got eliminated by a penalty, just end turn
            this.endTurn(roomId, player.sessionId, true);
            return;
        }

        let shouldEndTurn = false; 

        switch(effect.type) {
            case 'kp_change':
                this.updatePlayerKP(roomId, player.id, effect.amount);
                shouldEndTurn = true;
                break;
            case 'kp_change_investment':
                this.updatePlayerKP(roomId, effect.playerId, effect.amount, true);
                shouldEndTurn = true;
                break;
            case 'move_offset':
                this.movePlayerByOffset(roomId, player.id, effect.offset, true);
                shouldEndTurn = false; 
                break;
            case 'action':
                const { actionType, ...data } = effect;
                switch(actionType) {
                    case 'show_card_shop':
                        state.pendingAction = { type: 'show_card_shop' };
                        break;
                    case 'attack':
                        state.pendingAction = { type: 'attack', options: data.options };
                        break;
                    case 'investment_bet':
                        state.pendingAction = { type: 'investment_bet', tile: data.tile };
                        break;
                    case 'opportunity_link':
                        state.pendingAction = { type: 'opportunity_link', options: data.options };
                        break;
                }
                shouldEndTurn = false; 
                this.notifyListeners(roomId); 
                this.handleBotPendingAction(roomId); 
                break;
            case 'buff':
                if (effect.buffType === 'knowledge_fund') {
                    player.knowledgeFundBuffTurns = 3; // 2 turns AFTER this one
                    this.addLog(roomId, `${player.name} nhận được trợ giúp từ Quỹ Tri Thức! (2 lượt 50/50 miễn phí)`);
                }
                shouldEndTurn = true;
                break;
            case 'quiz':
                this.startQuiz(roomId, player, effect.quizType);
                shouldEndTurn = false;
                break;
            case 'end_turn':
                shouldEndTurn = true;
                break;
        }
        
        if (shouldEndTurn) {
            this.endTurn(roomId, player.sessionId, true);
        } else {
            this.notifyListeners(roomId);
        }
    }
    
     // --- Lifeline Actions ---
    public requestLifeline(roomId: string, sessionId: string, type: 'eliminate' | 'ai_help') {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        if (player.sessionId !== sessionId) return;

        if (type === 'eliminate' && player.knowledgeFundBuffTurns > 0) {
            player.knowledgeFundBuffTurns--;
            this.applyEliminateLifeline(state);
            this.addLog(roomId, `${player.name} đã dùng quyền trợ giúp 50/50 miễn phí.`);
            this.notifyListeners(roomId);
        } else {
            state.pendingLifelinePurchase = { type };
            this.notifyListeners(roomId);
        }
    }
    
    public resolveLifelinePurchase(roomId: string, sessionId: string, confirm: boolean) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.pendingLifelinePurchase) return;

        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        if (player.sessionId !== sessionId) return;
        
        const purchaseType = state.pendingLifelinePurchase.type;
        state.pendingLifelinePurchase = null;

        if (confirm) {
            const cost = LIFELINE_COSTS[purchaseType];
            if (player.kp < cost) {
                this.addLog(roomId, `${player.name} không đủ KP để mua quyền trợ giúp.`);
                this.notifyListeners(roomId);
                return;
            }

            this.updatePlayerKP(roomId, player.id, -cost, true); // true to skip x2 card
            this.addLog(roomId, `${player.name} đã dùng ${cost} KP để mua quyền trợ giúp.`);

            if (purchaseType === 'eliminate') {
                this.applyEliminateLifeline(state);
            } else if (purchaseType === 'ai_help') {
                this.applyAiHelpLifeline(state);
            }
        }
        
        this.notifyListeners(roomId);
    }
    
    public clearAiHelp(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        room.gameState.lifelineStatus.ai_help = null;
        this.notifyListeners(roomId);
    }

    private applyEliminateLifeline(state: GameState) {
        const question = state.quizState ? state.quizState.questions[state.quizState.currentIndex] : state.currentQuestion;
        if (!question || state.lifelineStatus.eliminate) return;

        const incorrectIndices = question.answers
            .map((ans, index) => ({ ans, index }))
            .filter(item => !item.ans.correct)
            .map(item => item.index);
        
        const shuffled = incorrectIndices.sort(() => 0.5 - Math.random());
        const toEliminate = shuffled.slice(0, 2);

        state.lifelineStatus.eliminate = toEliminate;
    }

    private applyAiHelpLifeline(state: GameState) {
        const question = state.quizState ? state.quizState.questions[state.quizState.currentIndex] : state.currentQuestion;
        if (!question || state.lifelineStatus.ai_help) return;
        
        const correctAnswer = question.answers.find(ans => ans.correct);
        if (correctAnswer) {
            state.lifelineStatus.ai_help = {
                answer: correctAnswer.content,
                explanation: question.explanation || "Không có giải thích chi tiết."
            };
        }
    }


    // --- Private Game Logic ---

    private getCurrentPlayer(state: GameState): Player {
        return state.players[state.currentPlayerIndex];
    }
    
    private triggerTileEffect(roomId: string, tile: TileData, pendingEffect: any, player: Player, prefixMessage: string = '') {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const state = room.gameState;

        const nameParts = tile.name.split(' ');
        const icon = nameParts.pop() || '🎲';
        
        const { message } = this.generateTileEffectMessage(tile, pendingEffect, player);

        state.tileEffectResult = {
            tileName: tile.name,
            message: prefixMessage + message,
            icon: icon
        };
        state.pendingTileEffect = pendingEffect;
        this.notifyListeners(roomId);

        if (player.isBot) {
            setTimeout(() => this.executePendingTileEffect(roomId), 2000);
        }
    }

    private generateTileEffectMessage(tile: TileData, effect: any, player: Player): { message: string } {
        let message = '';
        const name = tile.name.split(' ').slice(0, -1).join(' ');
        switch (effect.type) {
            case 'kp_change':
                message = `Bạn ${effect.amount > 0 ? 'nhận được' : 'bị phạt'} ${Math.abs(effect.amount)} KP!`;
                break;
            case 'move_offset':
                message = `Bạn ${effect.offset > 0 ? 'tiến thêm' : 'lùi lại'} ${Math.abs(effect.offset)} bước!`;
                break;
            case 'action':
                message = tile.description;
                break;
            case 'buff':
                message = tile.description;
                break;
            case 'quiz':
                message = `Bạn đã vào ${name}. Hãy sẵn sàng cho bài kiểm tra!`;
                break;
            case 'end_turn':
                message = "Không có gì xảy ra.";
                break;
            default:
                message = tile.description;
        }
        return { message };
    }
    
     private processLandedOnTile(roomId: string, tileId: number) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState || room.gameState.winner) return;

        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        const tile = TILES.find(t => t.id === tileId)!;
        
        let pendingEffect: any = null;

        switch(tile.type) {
             case 'start':
                pendingEffect = { type: 'kp_change', amount: 200 };
                break;
            case 'reward': {
                const isKp = Math.random() < 0.7;
                if (isKp) {
                    const amount = [100, 150, 200][Math.floor(Math.random() * 3)];
                    pendingEffect = { type: 'kp_change', amount };
                } else {
                    const steps = Math.floor(Math.random() * 3) + 3;
                    pendingEffect = { type: 'move_offset', offset: steps };
                }
                break;
            }
            case 'penalty': {
                const isKp = Math.random() < 0.7;
                if (isKp) {
                    const amount = [100, 150, 200][Math.floor(Math.random() * 3)];
                    pendingEffect = { type: 'kp_change', amount: -amount };
                } else {
                    const steps = Math.floor(Math.random() * 3) + 3;
                    pendingEffect = { type: 'move_offset', offset: -steps };
                }
                break;
            }
            case 'buy_card':
                pendingEffect = { type: 'action', actionType: 'show_card_shop' };
                break;
            case 'attack':
                const otherPlayers = state.players.filter(p => p.id !== player.id && !p.isEliminated);
                if (otherPlayers.length > 0) {
                  pendingEffect = { type: 'action', actionType: 'attack', options: otherPlayers };
                } else {
                  pendingEffect = { type: 'end_turn' };
                }
                break;
            case 'investment':
                pendingEffect = { type: 'action', actionType: 'investment_bet', tile };
                break;
            case 'opportunity':
                const opponents = state.players.filter(p => p.id !== player.id && !p.isEliminated);
                if (opponents.length > 0) {
                  pendingEffect = { type: 'action', actionType: 'opportunity_link', options: opponents };
                } else {
                  pendingEffect = { type: 'end_turn' };
                }
                break;
            case 'knowledge_fund':
                pendingEffect = { type: 'buff', buffType: 'knowledge_fund' };
                break;
            case 'midterm_exam':
            case 'final_exam':
            case 'prison':
                pendingEffect = { type: 'quiz', quizType: tile.type };
                break;
            default:
                this.endTurn(roomId, player.sessionId, true);
                return;
        }
        
        const specialTiles = ['start', 'midterm_exam', 'final_exam', 'prison'];
        if (specialTiles.includes(tile.type)) {
            // Special tiles trigger their effect directly
            this.triggerTileEffect(roomId, tile, pendingEffect, player);
        } else {
            // Normal tiles require a question first
            this.addLog(roomId, `${player.name} phải trả lời câu hỏi để nhận hiệu ứng từ ô ${tile.name}.`);
            const question = this.getNewQuestion(roomId);
            if (question) {
                state.currentQuestion = question;
                state.questionContext = { type: 'standard_tile', pendingEffect: pendingEffect, tile: tile };
                this.notifyListeners(roomId);
                this.checkBotTurn(roomId);
            } else {
                this.addLog(roomId, `Không tìm thấy câu hỏi. Bỏ qua hiệu ứng ô.`);
                this.endTurn(roomId, player.sessionId, true);
            }
        }
    }

    private handleQuizAnswer(roomId: string, player: Player, answerIndex: number, isCorrect: boolean, question: Question) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.quizState) return;
        
        const state = room.gameState;
        const quiz = state.quizState;

        if (isCorrect) {
            quiz.correctCount += 1;
        }
        
        player.answeredQuestionsCount += 1;
        const historyEntry: AnsweredQuestion = {
            questionContent: question.content,
            answers: question.answers,
            selectedAnswerIndex: answerIndex,
            isCorrect: isCorrect,
            timestamp: new Date().toISOString(),
            playerId: player.id,
            playerName: player.name,
        };
        state.questionHistory.push(historyEntry);
        state.lifelineStatus = { eliminate: null, ai_help: null }; // Reset lifelines


        // Move to the next question or end the quiz
        if (quiz.currentIndex < quiz.questions.length - 1) {
            quiz.currentIndex += 1;
            // No need to set currentQuestion here, it will be handled by parent state update
            this.notifyListeners(roomId);
            this.checkBotTurn(roomId); // If it's a bot, auto-answer next question
        } else {
            // End of quiz
            state.quizState.currentIndex += 1; // To show correct final count
            this.notifyListeners(roomId);

            setTimeout(() => { // Delay to let player see the last answer result
                const roomAfterDelay = this.rooms.get(roomId);
                if (!roomAfterDelay?.gameState) return;
                const stateAfterDelay = roomAfterDelay.gameState;

                stateAfterDelay.quizState = null;
                
                this.addLog(roomId, `${player.name} đã hoàn thành bài kiểm tra với ${quiz.correctCount}/${quiz.questions.length} câu đúng.`);
                
                let kpChange = 0;
                switch(quiz.type) {
                    case 'midterm_exam':
                        kpChange = quiz.correctCount >= 7 ? 300 : -200;
                        break;
                    case 'final_exam':
                        kpChange = quiz.correctCount >= 7 ? 500 : -300;
                        break;
                    case 'prison':
                        this.addLog(roomId, `${player.name} đã hoàn thành cải tạo và được quay về Bến Khởi Hành.`);
                        player.position = 1;
                        this.notifyListeners(roomId);
                        break;
                }
                if (kpChange !== 0) {
                     this.addLog(roomId, `${player.name} ${kpChange > 0 ? 'nhận được' : 'bị trừ'} ${Math.abs(kpChange)} KP.`);
                     this.updatePlayerKP(roomId, player.id, kpChange);
                }
                
                this.endTurn(roomId, player.sessionId, true);

            }, 2000);
        }
    }

    private startQuiz(roomId: string, player: Player, type: QuizType) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        
        const state = room.gameState;
        const questionCount = type === 'midterm_exam' ? 10 : (type === 'final_exam' ? 15 : (type === 'prison' ? 30 : 0));
        
        const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
        const quizQuestions = shuffled.slice(0, questionCount);

        if (quizQuestions.length > 0) {
            state.quizState = {
                type,
                questions: quizQuestions,
                currentIndex: 0,
                correctCount: 0
            };
            this.addLog(roomId, `${player.name} bắt đầu bài kiểm tra ${questionCount} câu hỏi!`);
            this.notifyListeners(roomId);
            this.checkBotTurn(roomId);
        } else {
            this.addLog(roomId, `Không có câu hỏi cho bài kiểm tra.`);
            this.endTurn(roomId, player.sessionId, true);
        }
    }
    
    private updatePlayerKP(roomId: string, playerId: number, amount: number, skipX2Card: boolean = false) {
         const room = this.rooms.get(roomId);
         if(!room || !room.gameState) return;
         const player = room.gameState.players.find(p => p.id === playerId);
         if (player && !player.isEliminated) {
             let finalAmount = amount;
             
             // --- Point Save Card Logic ---
            if (finalAmount < 0) {
                const pointSaveCardIndex = player.cards.findIndex(c => c.type === 'point_save');
                if (pointSaveCardIndex > -1) {
                    finalAmount = 0; // Negate the penalty
                    player.cards.splice(pointSaveCardIndex, 1);
                    this.addLog(roomId, `${player.name} đã dùng 'Luận Điểm Vững Chắc' để tránh bị trừ KP!`);
                }
            }

             // --- x2 Points Card Logic ---
             if (finalAmount > 0 && !skipX2Card) {
                 const x2CardIndex = player.cards.findIndex(c => c.type === 'x2_points');
                 if (x2CardIndex > -1) {
                     finalAmount *= 2;
                     player.cards.splice(x2CardIndex, 1);
                     this.addLog(roomId, `${player.name} đã dùng thẻ 'Cảm Hứng Sáng Tạo' và nhân đôi phần thưởng!`);
                 }
             }

             player.kp += finalAmount;
             if (finalAmount !== 0) {
                player.kpHistory.push({ amount: finalAmount, turn: room.gameState.turnNumber });
             }
             room.gameState.kpChanges[playerId] = finalAmount;
             this.notifyListeners(roomId);

             setTimeout(() => {
                 const currentRoom = this.rooms.get(roomId);
                 if(currentRoom?.gameState?.kpChanges) {
                     currentRoom.gameState.kpChanges[playerId] = null;
                     this.notifyListeners(roomId);
                 }
             }, 2000);

             this.checkPlayerElimination(roomId, playerId);
         }
    }

    private checkPlayerElimination(roomId: string, playerId: number) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState || room.gameState.winner) return;
        const state = room.gameState;
        const player = state.players.find(p => p.id === playerId);

        if (player && !player.isEliminated && player.kp <= PLAYER_ELIMINATION_THRESHOLD) {
            player.isEliminated = true;
            this.addLog(roomId, `${player.name} đã bị phá sản và bị loại khỏi cuộc chơi!`);

            const remainingPlayers = state.players.filter(p => !p.isEliminated);
            if (remainingPlayers.length === 1) {
                state.winner = remainingPlayers[0];
                this.addLog(roomId, `Tất cả đối thủ đã bị loại! ${state.winner.name} là người chiến thắng cuối cùng!`);
            } else if (remainingPlayers.length === 0) {
                this.addLog(roomId, `Tất cả người chơi đã bị loại. Trò chơi kết thúc không có người thắng.`);
                state.winner = { name: 'Không có ai' } as Player; // Dummy winner to end game
            }
            this.notifyListeners(roomId);
        }
    }

    private endTurn(roomId: string, sessionId: string, fromService: boolean = false) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState || room.gameState.winner) return;
        const state = room.gameState;
        
        const currentPlayer = this.getCurrentPlayer(state);
        if (!fromService && (currentPlayer.sessionId !== sessionId || state.canRoll || state.isRolling)) return;

        if (currentPlayer.knowledgeFundBuffTurns > 0) {
            currentPlayer.knowledgeFundBuffTurns--;
        }
        
        const activePlayers = state.players.filter(p => !p.isEliminated);
        if (activePlayers.length <= 1) {
            if(!state.winner) {
                state.winner = activePlayers[0] || { name: 'Không có ai' } as Player;
                this.addLog(roomId, `Trò chơi kết thúc! Người chiến thắng là ${state.winner.name}`);
                this.notifyListeners(roomId);
            }
            return;
        }

        const oldIndex = state.currentPlayerIndex;
        let nextPlayerIndex = oldIndex;
        let nextPlayer: Player;

        do {
            nextPlayerIndex = (nextPlayerIndex + 1) % state.players.length;
            nextPlayer = state.players[nextPlayerIndex];
        } while (nextPlayer.isEliminated);

        if (nextPlayerIndex < oldIndex && state.players.some(p => p.id === oldIndex && !p.isEliminated)) {
            state.turnNumber++;
            this.addLog(roomId, `--- Bắt đầu Vòng ${state.turnNumber} ---`);
        }
        
        state.currentPlayerIndex = nextPlayerIndex;
        const nextActivePlayer = state.players[nextPlayerIndex];

        this.addLog(roomId, `--- [Lượt ${state.turnNumber}] Lượt của ${nextActivePlayer.name} ---`);
        state.canRoll = true;
        
        this.notifyListeners(roomId);
        this.checkBotTurn(roomId);
    }
    
    // --- Movement Logic ---
    private movePlayer(roomId: string, steps: number) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const player = this.getCurrentPlayer(room.gameState);
        this.movePlayerByOffset(roomId, player.id, steps, true);
    }
    
    private movePlayerByOffset(roomId: string, playerId: number, offset: number, triggerEvents: boolean = false, onComplete?: () => void) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) {
            if (onComplete) onComplete();
            return;
        }
        const state = room.gameState;
        const player = state.players.find(p => p.id === playerId);
        if (!player || player.isEliminated) {
            if (onComplete) onComplete();
            return;
        }

        const moveOneStep = (stepsRemaining: number, direction: number) => {
            if (state.winner) {
                if (onComplete) onComplete();
                return;
            }
            const totalSteps = Math.abs(offset);
            const currentStep = totalSteps - stepsRemaining;
            
            if (stepsRemaining <= 0) {
                if (triggerEvents) {
                    this.addLog(roomId, `${player.name} đã dừng tại ô ${TILES[player.position - 1].name}.`);
                    setTimeout(() => {
                        if (state) state.highlightedTile = null;
                        this.processLandedOnTile(roomId, player.position);
                    }, 1500);
                }
                if (onComplete) {
                    onComplete();
                }
                return;
            }

            let nextPosition = player.position + direction;
            if (nextPosition > 40) nextPosition = 1;
            if (nextPosition < 1) nextPosition = 40;

            player.position = nextPosition;
            state.highlightedTile = nextPosition;

            if (direction > 0 && nextPosition === 1 && triggerEvents && currentStep > 0) {
                this.handlePassingGo(roomId, player);
                if (state.winner) {
                     if (onComplete) onComplete();
                    return;
                }
            }

            this.notifyListeners(roomId);

            setTimeout(() => {
                const currentRoom = this.rooms.get(roomId);
                if (currentRoom?.gameState && !currentRoom.gameState.winner) {
                     moveOneStep(stepsRemaining - 1, direction);
                } else {
                     if (onComplete) onComplete();
                }
            }, 400); 
        };
        
        moveOneStep(Math.abs(offset), offset > 0 ? 1 : -1);
    }
    
    private handlePassingGo(roomId: string, player: Player) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        
        this.addLog(roomId, `${player.name} đi qua Bến Khởi Hành, nhận 200 KP.`);
        this.updatePlayerKP(roomId, player.id, 200);
        
        player.laps += 1;
        this.addLog(roomId, `${player.name} đã hoàn thành vòng ${player.laps}.`);
        this.notifyListeners(roomId);

        if (player.laps >= 10 && !room.gameState.winner) {
            this.addLog(roomId, `TRÒ CHƠI KẾT THÚC! ${player.name} đã hoàn thành 10 vòng.`);
            const winner = room.gameState.players.reduce((prev, current) => (prev.kp > current.kp) ? prev : current);
            room.gameState.winner = winner;
            this.addLog(roomId, `VINH DANH! ${winner.name} đã chiến thắng với số KP cao nhất!`);
            this.notifyListeners(roomId);
        }
    }
    
    // --- Bot Logic ---
    
    private checkBotTurn(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return;
        const state = room.gameState;
        const player = this.getCurrentPlayer(state);

        if (!player.isBot || player.isEliminated || state.winner) return;

        if (state.quizState) {
            setTimeout(() => this.answerForBot(roomId), 2000 + Math.random() * 2000);
        } else if (state.currentQuestion) {
            setTimeout(() => this.answerForBot(roomId), 2000 + Math.random() * 2000);
        } else if (state.pendingAction) {
            setTimeout(() => this.handleBotPendingAction(roomId), 2000);
        } else if (state.canRoll) {
            setTimeout(() => this.rollDice(roomId, player.sessionId), 2000);
        }
    }
    
    private handleBotPendingAction(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState?.pendingAction) return;
        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        if(!player.isBot) return;

        const action = state.pendingAction;

        switch (action.type) {
            case 'show_card_shop':
                const affordableCards = (Object.keys(CARD_COSTS) as CardType[]).filter(type => player.kp >= CARD_COSTS[type] + 500);
                if (affordableCards.length > 0 && Math.random() < 0.7) {
                    const cardToBuy = affordableCards[Math.floor(Math.random() * affordableCards.length)];
                    this.resolveCardPurchase(roomId, player.sessionId, cardToBuy);
                } else {
                    this.resolveCardPurchase(roomId, player.sessionId, null);
                }
                break;
            case 'attack':
            case 'opportunity_link':
                 // Bot targets the player with the highest score
                const target = action.options.reduce((prev, current) => (prev.kp > current.kp) ? prev : current);
                if (action.type === 'attack') this.resolveAttackAction(roomId, player.sessionId, target.id);
                else this.resolveOpportunityLinkAction(roomId, player.sessionId, target.id);
                break;
            case 'investment_bet':
                const affordableBets = [100, 200, 300].filter(b => player.kp >= b * 2);
                const bet = affordableBets.length > 0 && Math.random() < 0.5 ? affordableBets[Math.floor(Math.random() * affordableBets.length)] : 0;
                this.resolveInvestmentBetAction(roomId, player.sessionId, bet);
                break;
        }
    }

    private answerForBot(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room?.gameState || (!room.gameState.currentQuestion && !room.gameState.quizState)) return;
        
        const state = room.gameState;
        const player = this.getCurrentPlayer(state);
        const question = state.quizState ? state.quizState.questions[state.quizState.currentIndex] : state.currentQuestion;

        if (!player.isBot || !question) return;
        
        const correctChance = 0.75;
        const isCorrect = Math.random() < correctChance;
        
        let targetAnswers = question.answers.map((ans, i) => ({...ans, index: i})).filter(ans => ans.correct === isCorrect);
        
        if(targetAnswers.length === 0) {
            targetAnswers = question.answers.map((ans, i) => ({...ans, index: i}));
        }
        
        const chosenAnswer = targetAnswers[Math.floor(Math.random() * targetAnswers.length)];
        
        this.handleQuestionAnswer(roomId, player.sessionId, chosenAnswer.index);
    }
    
    // --- Utility Methods ---
    private getNewQuestion(roomId: string): Question | null {
        const room = this.rooms.get(roomId);
        if (!room?.gameState) return null;
        
        const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        return question || null;
    }

    public clearLog(roomId: string) {
        const room = this.rooms.get(roomId);
        if (!room || !room.gameState) return;
        
        room.gameState.log = [];
        this.addLog(roomId, 'Nhật ký đã được xóa.');
        this.notifyListeners(roomId);
    }
    
    private initializeGameState(sessions: Session[]): GameState {
        const players: Player[] = sessions.map((session, index) => ({
            id: index,
            name: session.name,
            sessionId: session.id,
            color: PLAYER_COLORS[index % PLAYER_COLORS.length],
            kp: PLAYER_STARTING_KP,
            position: 1,
            skipTurns: 0,
            cards: [],
            hasInvestment: false,
            characterImg: session.characterImg,
            isBot: session.isBot,
            laps: 0,
            answeredQuestionsCount: 0,
            kpHistory: [],
            linkedPlayerId: null,
            knowledgeFundBuffTurns: 0,
            isEliminated: false,
        }));

        return {
            players,
            currentPlayerIndex: 0,
            dice: 1,
            log: [],
            turnNumber: 1,
            canRoll: true,
            winner: undefined,
            currentQuestion: null,
            questionHistory: [],
            pendingAction: null,
            quizState: null,
            questionContext: null,
            isRolling: false,
            highlightedTile: null,
            kpChanges: {},
            attackAnimation: null,
            tileEffectResult: null,
            pendingTileEffect: null,
            pendingLifelinePurchase: null,
            lifelineStatus: { eliminate: null, ai_help: null },
        };
    }
    
    private addLog(roomId: string, message: string) {
        const room = this.rooms.get(roomId);
        if(!room || !room.gameState) return;
        
        const newLogEntry: GameLogEntry = {
            turn: room.gameState.turnNumber,
            message,
            id: Date.now() + Math.random()
        };
        room.gameState.log.push(newLogEntry);
        if (room.gameState.log.length > 100) {
            room.gameState.log.splice(0, room.gameState.log.length - 100);
        }
    }
    
    private createSession(name: string, characterImg: string, isBot: boolean = false): Session {
        return { id: `session_${Date.now()}_${Math.random()}`, name, characterImg, isBot };
    }

    private generateRoomId(): string {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
    
    // --- Listener System ---
    public subscribe(roomId: string, listener: GameStateListener) {
        if (!this.listeners.has(roomId)) {
            this.listeners.set(roomId, []);
        }
        this.listeners.get(roomId)!.push(listener);
    }

    public unsubscribe(roomId: string, listener: GameStateListener) {
        const roomListeners = this.listeners.get(roomId);
        if (roomListeners) {
            this.listeners.set(roomId, roomListeners.filter(l => l !== listener));
        }
    }

    private notifyListeners(roomId: string) {
        const room = this.rooms.get(roomId);
        const roomListeners = this.listeners.get(roomId);
        if (room && roomListeners) {
            const roomCopy = JSON.parse(JSON.stringify(room));
            roomListeners.forEach(listener => listener(roomCopy));
        }
    }
}

export const gameService = new GameService();