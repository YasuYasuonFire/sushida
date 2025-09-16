export type GameStatus = 'idle' | 'running' | 'finished';

export interface SushiPlate {
  id: string;
  label: string;
  reading: string;
  price: number;
}

export interface PlateProgress extends SushiPlate {
  typed: string;
  remaining: string;
  mistakes: number;
}

export interface CompletedPlate extends PlateProgress {
  durationMs: number;
  completed: boolean;
}

export interface GameMetrics {
  score: number;
  combo: number;
  maxCombo: number;
  correctChars: number;
  missedChars: number;
  coins: number;
}

export interface GameState {
  status: GameStatus;
  timeLimit: number;
  timeLeft: number;
  activePlate: PlateProgress | null;
  upcomingPlates: SushiPlate[];
  completedPlates: CompletedPlate[];
  metrics: GameMetrics;
  startedAt: number | null;
}

export interface TypingGameControls {
  start: () => void;
  restart: () => void;
}

export interface TypingGameValue extends GameState, TypingGameControls {
  handleKeyInput: (key: string) => void;
}

export interface TypingGameOptions {
  timeLimit?: number;
  laneSize?: number;
}
