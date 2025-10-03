import React, { useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import type { Player, AppState, GameMode, GameState, Room, Session, TileData, AnsweredQuestion, PendingAction, QuizState, CardType } from './types';
import { PLAYER_COLORS, PLAYER_STARTING_KP, TILES, CHARACTERS_LIST, CARD_COSTS, CARDS_INFO } from './constants';
import GameBoard from './components/GameBoard';
import PlayerDashboard from './components/PlayerDashboard';
import GameLog from './components/GameLog';
import GameSetup, { GameSetupConfig } from './components/GameSetup';
import Modal from './components/Modal';
import MainMenu from './components/MainMenu';
import Lobby from './components/Lobby';
import { gameService, LOCAL_ROOM_ID } from './services/gameService';
import ControlPanel from './components/ControlPanel';
import JoinRoom from './components/JoinRoom';
import { getGroupColors } from './utils';
import QuestionModal from './components/QuestionModal';
import CurrentPlayerStats from './components/CurrentPlayerStats';
import SoundManager from './components/SoundManager';

interface PlayerConfig {
    name: string;
    characterImg: string;
    isBot?: boolean;
}

const App: React.FC = () => {
    const [appState, setAppState] = useState<AppState>('main_menu');
    const [gameMode, setGameMode] = useState<GameMode | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [room, setRoom] = useState<Room | null>(null);
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [modal, setModal] = useState<{ title: string; content: string } | null>(null);
    const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
    const [tilePositions, setTilePositions] = useState<{ [key: number]: { top: number; left: number; width: number; height: number; } }>({});
    const boardRef = useRef<HTMLDivElement>(null);
    const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Subscribe to game state updates
    useEffect(() => {
        const handleUpdate = (updatedRoom: Room) => {
            console.log("Received room update:", updatedRoom);
            if (gameMode === 'online') {
                setRoom(updatedRoom);
            }
            if (updatedRoom.gameState) {
                setGameState(updatedRoom.gameState);
                if (appState !== 'playing' && appState !== 'gameover') {
                    setAppState('playing');
                }
                 if (updatedRoom.gameState.winner && appState !== 'gameover') {
                    setAppState('gameover');
                }
            }
        };

        let subscribedRoomId: string | null = null;
        if (gameMode === 'local') {
            subscribedRoomId = LOCAL_ROOM_ID;
        } else if (gameMode === 'online' && room) {
            subscribedRoomId = room.id;
        }

        if (subscribedRoomId) {
            gameService.subscribe(subscribedRoomId, handleUpdate);
            return () => gameService.unsubscribe(subscribedRoomId!, handleUpdate);
        }
    }, [gameMode, room, appState]);
    
    // Attack animation orchestrator
    useEffect(() => {
        if (!gameState?.attackAnimation) return;

        const { stage } = gameState.attackAnimation;
        const roomId = room?.id || LOCAL_ROOM_ID;

        switch(stage) {
            case 'moving_to_target':
                // After 800ms for the piece to travel
                setTimeout(() => gameService.proceedAttackAnimation(roomId), 800);
                break;
            case 'impacting':
                 // After 500ms for the shake animation
                setTimeout(() => gameService.proceedAttackAnimation(roomId), 500);
                break;
            case 'attacker_returning':
                // After 800ms for the piece to return
                setTimeout(() => gameService.proceedAttackAnimation(roomId), 800);
                break;
             // 'target_moving_back' is handled by a callback within the game service
        }

    }, [gameState?.attackAnimation, room?.id, gameMode]);


    useLayoutEffect(() => {
        const calculatePositions = () => {
            if (!boardRef.current) return;

            const boardRect = boardRef.current.getBoundingClientRect();
            const newPositions: { [key: number]: { top: number; left: number; width: number; height: number; } } = {};
            const tileElements = boardRef.current.querySelectorAll('[data-tile-id]');
    
            tileElements.forEach(tileEl => {
                const tileId = parseInt(tileEl.getAttribute('data-tile-id')!, 10);
                const tileRect = tileEl.getBoundingClientRect();
                newPositions[tileId] = {
                    top: tileRect.top - boardRect.top,
                    left: tileRect.left - boardRect.left,
                    width: tileRect.width,
                    height: tileRect.height
                };
            });
            setTilePositions(newPositions);
        };
        
        if (appState === 'playing' || appState === 'gameover') {
            calculatePositions();
            window.addEventListener('resize', calculatePositions);
            return () => window.removeEventListener('resize', calculatePositions);
        }
    }, [appState]);

    const toggleMute = () => setIsMuted(prev => !prev);
    
    const handleStartLocalGame = (config: GameSetupConfig) => {
        const playerConfigs: PlayerConfig[] = [{ name: config.name, characterImg: config.characterImg, isBot: false }];

        const availableBotChars = CHARACTERS_LIST.filter(c => c.img !== config.characterImg);
        // Shuffle to get random bots
        for (let i = availableBotChars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableBotChars[i], availableBotChars[j]] = [availableBotChars[j], availableBotChars[i]];
        }

        const botsToCreate = availableBotChars.slice(0, config.numBots);
        botsToCreate.forEach((botChar, index) => {
            playerConfigs.push({
                name: `Bot ${index + 1}`,
                characterImg: botChar.img,
                isBot: true
            });
        });

        const initialState = gameService.createLocalGame(playerConfigs);
        gameService.registerLocalGame(initialState);
        setGameState(initialState);
        setGameMode('local');
        setAppState('playing');
    };

    const handleCreateRoom = (config: GameSetupConfig) => {
        setGameMode('online');
        const { room, session } = gameService.createRoom(config.name, config.characterImg, config.numBots);
        setRoom(room);
        setSession(session);
        setAppState('lobby');
    };

    const handleJoinSuccess = (room: Room, session: Session) => {
        setGameMode('online');
        setRoom(room);
        setSession(session);
        setAppState('lobby');
    };
    
    const handleStartOnlineGame = () => {
        if (room && session?.id === room.hostId) {
            gameService.startGame(room.id);
        }
    };
    
    const handleClearLog = useCallback(() => {
        const roomId = gameMode === 'local' ? LOCAL_ROOM_ID : room?.id;
        if (roomId) gameService.clearLog(roomId);
    }, [gameMode, room]);

    const handleReset = () => {
        setAppState('main_menu');
        setGameMode(null);
        setSession(null);
        setRoom(null);
        setGameState(null);
        setModal(null);
        setSelectedTile(null);
        setIsEndGameModalOpen(false);
    };
    
    const handleTileClick = (tileData: TileData) => setSelectedTile(tileData);
    
    const handleQuestionAnswer = (answerIndex: number) => {
        const roomId = gameMode === 'local' ? LOCAL_ROOM_ID : room?.id;
        const sessionId = gameMode === 'local' ? gameState?.players[gameState.currentPlayerIndex].sessionId : session?.id;
        if (roomId && sessionId) {
            gameService.handleQuestionAnswer(roomId, sessionId, answerIndex);
        }
    };

    const handleExportHistory = () => {
        if (!gameState?.questionHistory?.length) return;
        const mainPlayer = gameState.players.find(p => !p.isBot) || gameState.players[0];
        const historyForExport = gameState.questionHistory.map(({ playerName, playerId, ...rest }) => rest);
        const exportData = { name: mainPlayer.name, gameSubject: 'MLN111: Triết Học Mác-LeNin', history: historyForExport };
        const jsonData = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `lenin-chess-questions-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // --- Action Handlers for new mechanics ---
    const getRoomAndSessionId = () => {
        const roomId = gameMode === 'local' ? LOCAL_ROOM_ID : room?.id;
        const sessionId = gameMode === 'local' ? gameState?.players[gameState.currentPlayerIndex].sessionId : session?.id;
        return { roomId, sessionId };
    };

    const handleCardPurchase = (cardType: CardType | null) => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.resolveCardPurchase(roomId, sessionId, cardType);
    };
    const handleAttack = (targetPlayerId: number | null) => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.resolveAttackAction(roomId, sessionId, targetPlayerId);
    };
    const handleOpportunityLink = (targetPlayerId: number | null) => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.resolveOpportunityLinkAction(roomId, sessionId, targetPlayerId);
    };
    const handleInvestmentBet = (betAmount: number) => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.resolveInvestmentBetAction(roomId, sessionId, betAmount);
    };
    const handleCloseTileEffectModal = () => {
        const roomId = gameMode === 'local' ? LOCAL_ROOM_ID : room?.id;
        if (roomId) {
            gameService.executePendingTileEffect(roomId);
        }
    };
    
    const handleUseLifeline = (type: 'eliminate' | 'ai_help') => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.requestLifeline(roomId, sessionId, type);
    };

    const handleResolveLifelinePurchase = (confirm: boolean) => {
        const { roomId, sessionId } = getRoomAndSessionId();
        if (roomId && sessionId) gameService.resolveLifelinePurchase(roomId, sessionId, confirm);
    };

    const handleCloseAiHelp = () => {
        const { roomId } = getRoomAndSessionId();
        if (roomId) gameService.clearAiHelp(roomId);
    };


    // --- Render Functions ---

    const renderActionModal = (pendingAction: PendingAction, currentPlayer: Player) => {
        if (!pendingAction) return null;

        switch (pendingAction.type) {
            case 'show_card_shop':
                return (
                    <Modal title="Cửa Hàng Thẻ" onClose={() => handleCardPurchase(null)}>
                        <div className="flex flex-col gap-4 text-left">
                            {Object.values(CARDS_INFO).map(card => {
                                const cost = CARD_COSTS[card.type];
                                const canAfford = currentPlayer.kp >= cost;
                                return (
                                    <div key={card.type} className="bg-white/50 p-3 rounded-lg flex items-center gap-4">
                                        <div className="text-4xl">{card.icon}</div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-stone-800">{card.name}</h4>
                                            <p className="text-xs text-stone-600">{card.description}</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <button onClick={() => handleCardPurchase(card.type)} disabled={!canAfford} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                                Mua
                                            </button>
                                            <span className={`text-sm font-bold mt-1 ${canAfford ? 'text-yellow-800' : 'text-red-600'}`}>{cost} KP</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                         <button onClick={() => handleCardPurchase(null)} className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-700 mt-4">
                            Bỏ qua
                        </button>
                    </Modal>
                );
            
            case 'attack':
            case 'opportunity_link':
                const title = pendingAction.type === 'attack' ? "Phê Bình Đối Thủ" : "Liên Kết Tư Tưởng";
                const buttonText = pendingAction.type === 'attack' ? "Tấn công" : "Liên kết";
                const handler = pendingAction.type === 'attack' ? handleAttack : handleOpportunityLink;
                return (
                     <Modal title={title} onClose={() => handler(null)}>
                        <p className="text-lg mb-4">Chọn một người chơi:</p>
                        <div className="flex flex-col gap-2">
                            {pendingAction.options.map(p => (
                                <button key={p.id} onClick={() => handler(p.id)} className="w-full text-white font-bold py-3 px-4 rounded-lg shadow" style={{backgroundColor: p.color}}>
                                    {p.name}
                                </button>
                            ))}
                             <button onClick={() => handler(null)} className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-700 mt-2">
                                Bỏ qua
                            </button>
                        </div>
                    </Modal>
                );

            case 'investment_bet':
                const betOptions = [100, 200, 300].filter(bet => currentPlayer.kp >= bet * 2); // Player must be able to cover a loss
                return (
                     <Modal title="Đầu Tư Mạo Hiểm" onClose={() => handleInvestmentBet(0)}>
                        <p className="text-lg mb-4">Chọn mức KP để đặt cược. Trả lời đúng sẽ nhân đôi số tiền cược, sai sẽ mất gấp đôi!</p>
                        <div className="flex flex-col gap-2">
                           {betOptions.length > 0 ? betOptions.map(bet => (
                                <button key={bet} onClick={() => handleInvestmentBet(bet)} className="w-full bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-yellow-700">
                                    Cược {bet} KP
                                </button>
                            )) : <p className='text-center font-bold text-red-600'>Không đủ KP để cược!</p>}
                            <button onClick={() => handleInvestmentBet(0)} className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-700 mt-2">
                                Không cược
                            </button>
                        </div>
                    </Modal>
                );

            default: return null;
        }
    };
    
    const renderContent = () => {
        switch (appState) {
            case 'main_menu': return <MainMenu onNavigate={(target) => setAppState(target)} />;
            case 'local_setup': return <GameSetup mode="local" onStart={handleStartLocalGame} onBack={() => setAppState('main_menu')} />;
            case 'create_room': return <GameSetup mode="online" onStart={handleCreateRoom} onBack={() => setAppState('main_menu')} />;
            case 'join_room': return <JoinRoom onJoinSuccess={handleJoinSuccess} onBack={() => setAppState('main_menu')} />;
            case 'lobby': return room && session && <Lobby room={room} session={session} onStartGame={handleStartOnlineGame} onBack={handleReset} />;
            case 'playing':
            case 'gameover':
                if (!gameState?.players) return <div>Đang tải...</div>;

                const { players, currentPlayerIndex, kpChanges, highlightedTile, dice, isRolling, canRoll, log, currentQuestion, pendingAction, quizState, tileEffectResult, pendingLifelinePurchase, lifelineStatus, attackAnimation } = gameState;
                const currentPlayer = players[currentPlayerIndex];
                
                let questionForModal = null;
                if (quizState) {
                    // Make sure not to go out of bounds if quiz is finishing
                    const qIndex = Math.min(quizState.currentIndex, quizState.questions.length - 1);
                    questionForModal = quizState.questions[qIndex];
                } else if (currentQuestion) {
                    questionForModal = currentQuestion;
                }

                return (
                    <main className="h-screen p-4 sm:p-6 md:p-8 flex flex-col font-sans overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-[320px_auto_320px] gap-6 w-full max-w-[1800px] mx-auto flex-grow min-h-0">
                            {/* Left Panel */}
                            <div className="flex flex-col gap-6 min-h-0 overflow-y-auto pr-2">
                                <PlayerDashboard players={players} currentPlayerId={currentPlayer.id} kpChanges={kpChanges} />
                                {currentPlayer && !currentPlayer.isEliminated && <CurrentPlayerStats player={currentPlayer} />}
                                 {appState === 'playing' && (
                                    <button onClick={() => setIsEndGameModalOpen(true)} className="w-full bg-red-800 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-red-900 transition-all">
                                        Kết Thúc Trò Chơi
                                    </button>
                                )}
                            </div>

                            {/* Center Panel (Game Board) */}
                            <div className="flex flex-col items-center justify-center min-h-0">
                                <GameBoard ref={boardRef} highlightedTile={highlightedTile} tilePositions={tilePositions} players={players} currentPlayerId={currentPlayer.id} onTileClick={handleTileClick} attackAnimation={attackAnimation}>
                                     <ControlPanel currentPlayer={currentPlayer} onRollDice={() => gameService.rollDice(room?.id || LOCAL_ROOM_ID, currentPlayer.sessionId)} dice={dice} canRoll={canRoll && !currentPlayer.isEliminated && (gameMode === 'local' || session?.id === currentPlayer.sessionId)} isRolling={isRolling} />
                                </GameBoard>
                            </div>
                            
                            {/* Right Panel */}
                            <div className="flex flex-col gap-6 min-h-0">
                                <GameLog log={log} onClearLog={handleClearLog} />
                            </div>
                        </div>
                        
                        {/* Modals */}
                        {tileEffectResult && (
                            <Modal title={tileEffectResult.tileName.split(' ').slice(0, -1).join(' ')} onClose={handleCloseTileEffectModal}>
                                <div className="text-center flex flex-col items-center">
                                    <div className="text-7xl mb-4">{tileEffectResult.icon}</div>
                                    <p className="text-stone-800 text-lg leading-relaxed" style={{whiteSpace: 'pre-wrap'}}>{tileEffectResult.message}</p>
                                </div>
                            </Modal>
                        )}
                        {questionForModal && (
                            <QuestionModal question={questionForModal} quizState={quizState} onAnswer={handleQuestionAnswer} onUseLifeline={handleUseLifeline} lifelineStatus={lifelineStatus} onCloseAiHelp={handleCloseAiHelp} currentPlayer={currentPlayer} />
                        )}
                        {pendingLifelinePurchase && (() => {
                            const { type } = pendingLifelinePurchase;
                            const cost = type === 'eliminate' ? 200 : 300;
                            const name = type === 'eliminate' ? 'Loại Trừ 2 Đáp Án' : 'Hỏi AI Bot';
                            const canAfford = currentPlayer.kp >= cost;
                            
                            return (
                                <Modal title="Xác Nhận Mua" onClose={() => handleResolveLifelinePurchase(false)} footer={
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => handleResolveLifelinePurchase(true)} disabled={!canAfford} className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                            Mua ({cost} KP)
                                        </button>
                                        <button onClick={() => handleResolveLifelinePurchase(false)} className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-700">
                                            Hủy
                                        </button>
                                    </div>
                                }>
                                    <p>Bạn có muốn dùng <strong>{cost} KP</strong> để mua quyền trợ giúp <strong>"{name}"</strong> không?</p>
                                    {!canAfford && <p className="text-red-600 font-bold mt-2">Bạn không đủ KP!</p>}
                                </Modal>
                            );
                        })()}
                        {renderActionModal(pendingAction, currentPlayer)}
                        {selectedTile && (() => {
                            const nameParts = selectedTile.name.split(' ');
                            const icon = nameParts.pop();
                            const name = nameParts.join(' ');
                            const colors = getGroupColors(selectedTile.group);
                            return (
                                <Modal title={name} onClose={() => setSelectedTile(null)}>
                                    <div className="text-center flex flex-col items-center">
                                        <div className="text-7xl mb-4">{icon}</div>
                                        <div className="mb-4 flex justify-center items-center gap-2 flex-wrap">
                                            <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${colors.tagBg}`}>{selectedTile.group}</span>
                                            <span className="px-3 py-1 text-xs font-bold text-gray-100 bg-gray-600 rounded-full uppercase">{selectedTile.type.replace(/_/g, ' ')}</span>
                                        </div>
                                        <p className="text-stone-800 text-lg leading-relaxed">{selectedTile.description}</p>
                                    </div>
                                </Modal>
                            );
                        })()}
                        {modal && <Modal title={modal.title} onClose={() => setModal(null)}><p>{modal.content}</p></Modal>}
                        {appState === 'gameover' && gameState.winner && (() => {
                            const hasHistory = gameState.questionHistory?.length > 0;
                            return (
                                <Modal title="KẾT THÚC!" onClose={handleReset} footer={
                                    <div className="flex flex-col gap-2">
                                        <button onClick={handleExportHistory} disabled={!hasHistory} title={!hasHistory ? "Không có lịch sử câu hỏi." : "Xuất lịch sử câu hỏi"} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed">Xuất Lịch Sử Câu Hỏi</button>
                                        <button onClick={handleReset} className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-gray-700 transition-all">Chơi Lại</button>
                                    </div>
                                }>
                                    <p className="text-xl text-center">{gameState.winner.name} đã trở thành Nhà Lý Luận Trẻ Toàn Cầu! Chúc mừng!</p>
                                </Modal>
                            );
                        })()}
                        {isEndGameModalOpen && gameState && (() => {
                            const hasHistory = gameState.questionHistory?.length > 0;
                            return (
                                <Modal title="Xác Nhận Kết Thúc" onClose={() => setIsEndGameModalOpen(false)} footer={
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => { handleExportHistory(); handleReset(); }} disabled={!hasHistory} title={!hasHistory ? "Không có lịch sử câu hỏi." : "Xuất lịch sử và thoát"} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition-all disabled:bg-blue-400 disabled:cursor-not-allowed">Xuất Lịch Sử & Thoát</button>
                                        <button onClick={handleReset} className="w-full bg-gray-600 text-white font-bold py-3 px-4 rounded-lg shadow hover:bg-gray-700 transition-all">Thoát Không Xuất</button>
                                    </div>
                                }>
                                    <p className="text-xl text-center">Bạn có muốn xuất lịch sử câu hỏi không?</p>
                                </Modal>
                            );
                        })()}
                    </main>
                );
            default:
                return <div>Trạng thái không xác định</div>;
        }
    };

    const isQuestionVisible = !!gameState?.currentQuestion || !!gameState?.quizState;

    return (
        <div className="min-h-screen">
            <SoundManager
                appState={appState}
                isQuestionVisible={isQuestionVisible}
                isMuted={isMuted}
            />
            {renderContent()}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={toggleMute}
                    className="bg-black/50 text-white rounded-full p-3 hover:bg-black/75 transition-colors shadow-lg"
                    aria-label={isMuted ? "Bật tiếng" : "Tắt tiếng"}
                    title={isMuted ? "Bật tiếng" : "Tắt tiếng"}
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l-4-4m0 4l4-4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default App;
