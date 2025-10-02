export interface Player {
  id: number; // In online mode, this is the session ID index
  name: string;
  color: string;
  kp: number; // Knowledge Points
  position: number; // Tile ID from 1-40
  skipTurns: number; // For "Trại Cải Tạo Tư Duy"
  cards: Card[]; // To hold special cards
  hasInvestment: boolean; // For tile 26
  characterImg: string; // URL to the character's image
  sessionId: string; // Links player to a session
  isBot?: boolean;
  laps: number;
  answeredQuestionsCount: number;
  kpHistory: { amount: number; turn: number }[];
  // New properties for advanced mechanics
  linkedPlayerId: number | null; // For Opportunity tiles
  knowledgeFundBuffTurns: number; // For Knowledge Fund buff
  isEliminated?: boolean;
}

export type TileType = 
  | 'start' 
  | 'reward' 
  | 'penalty' 
  | 'buy_card' 
  | 'attack' 
  | 'investment' 
  | 'opportunity' 
  | 'knowledge_fund' 
  | 'midterm_exam' 
  | 'final_exam' 
  | 'prison'
  | 'win'
  | 'special'; // Generic special for non-interactive tiles

export interface TileData {
  id: number;
  name: string;
  group: string;
  type: TileType;
  description: string;
}

export type CardType = 'x2_points' | 'shield' | 'point_save';

export interface Card {
  id: string;
  type: CardType;
  name: string;
  description: string;
}

export type GameMode = 'local';

export type AppState = 'main_menu' | 'local_setup' | 'playing' | 'gameover';

export interface Session {
  id: string;
  name: string;
  characterImg: string;
  isBot?: boolean;
}

export interface GameLogEntry {
  turn: number; 
  message: string; 
  id: number;
}

export type QuestionType = 'singlechoice' | 'dragdrop';

export interface Answer {
  content: string;
  correct: boolean;
}

export interface Question {
  type: QuestionType;
  content: string;
  answers: Answer[];
  explanation?: string;
}

export interface AnsweredQuestion {
  questionContent: string;
  answers: Answer[];
  selectedAnswerIndex: number; // -1 for timeout
  isCorrect: boolean;
  timestamp: string; // ISO string for easy JSON serialization
  playerName: string;
  playerId: number;
}

// --- New states for advanced mechanics ---

export type PendingAction = 
  | { type: 'show_card_shop' }
  | { type: 'attack', options: Player[] } 
  | { type: 'opportunity_link', options: Player[] } 
  | { type: 'investment_bet', tile: TileData }
  | null;

export type QuizType = 'midterm_exam' | 'final_exam' | 'prison';

export interface QuizState {
  type: QuizType;
  questions: Question[];
  currentIndex: number;
  correctCount: number;
}
export interface StandardTileQuestionContext {
  type: 'standard_tile';
  pendingEffect: any;
  tile: TileData;
}
export interface InvestmentQuestionContext {
  type: 'investment';
  betAmount: number;
}

export type QuestionContext = StandardTileQuestionContext | InvestmentQuestionContext | null;


export interface TileEffectResult {
  tileName: string;
  message: string;
  icon: string;
}

export interface AttackAnimationState {
  attackerId: number;
  targetId: number;
  attackerOriginalPosition: number;
  stage: 'moving_to_target' | 'impacting' | 'target_moving_back' | 'attacker_returning' | null;
}

// -----------------------------------------

export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  dice: number;
  log: GameLogEntry[];
  turnNumber: number;
  canRoll: boolean;
  winner?: Player;
  // State for modals and multi-step actions
  currentQuestion: Question | null;
  questionHistory: AnsweredQuestion[];
  pendingAction: PendingAction;
  quizState: QuizState | null;
  questionContext: QuestionContext | null;
  // Animation states
  isRolling: boolean;
  highlightedTile: number | null;
  kpChanges: { [key: number]: number | null };
  attackAnimation: AttackAnimationState | null;
  // New state for tile effect modal
  tileEffectResult: TileEffectResult | null;
  pendingTileEffect: any | null; // Stores the determined action after landing on a tile
  // New states for lifelines
  pendingLifelinePurchase: { type: 'eliminate' | 'ai_help' } | null;
  lifelineStatus: {
    eliminate: number[] | null;
    ai_help: { answer: string; explanation: string; } | null;
  };
}

export interface Room {
  id: string;
  hostId: string;
  sessions: Session[];
  gameState: GameState | null;
}