# API Reference

## Core Game Hook: `useTypingGame`

The main game logic is encapsulated in the `useTypingGame` custom React hook.

### Usage

```typescript
import { useTypingGame } from '../game/useTypingGame';

const game = useTypingGame({
  timeLimit: 60,  // Game duration in seconds (default: 60)
  laneSize: 3     // Number of upcoming plates visible (default: 3)
});
```

### Options

```typescript
interface TypingGameOptions {
  timeLimit?: number;  // Game duration in seconds
  laneSize?: number;   // Number of plates in the sushi lane
}
```

### Return Value

The hook returns a `TypingGameValue` object with the following properties:

#### State Properties

- **`status`** (`GameStatus`): Current game state
  - `'idle'`: Game not started
  - `'running'`: Game in progress
  - `'finished'`: Game completed

- **`timeLimit`** (`number`): Total game duration in seconds
- **`timeLeft`** (`number`): Remaining time in seconds
- **`activePlate`** (`PlateProgress | null`): Currently active sushi plate
- **`upcomingPlates`** (`SushiPlate[]`): Queue of upcoming plates
- **`completedPlates`** (`CompletedPlate[]`): Array of finished plates
- **`metrics`** (`GameMetrics`): Current game statistics
- **`startedAt`** (`number | null`): Game start timestamp

#### Control Methods

- **`start()`**: Begin a new game
- **`restart()`**: Reset and start a new game
- **`handleKeyInput(key: string)`**: Process user keyboard input

## Type Definitions

### Core Game Types

```typescript
// Game state enumeration
type GameStatus = 'idle' | 'running' | 'finished';

// Basic sushi plate data
interface SushiPlate {
  id: string;        // Unique identifier
  label: string;     // Japanese display name
  reading: string;   // Romaji reading to type
  price: number;     // Plate value in points
}

// Plate with typing progress
interface PlateProgress extends SushiPlate {
  typed: string;     // Characters already typed
  remaining: string; // Characters left to type
  mistakes: number;  // Wrong key presses for this plate
}

// Completed plate with timing data
interface CompletedPlate extends PlateProgress {
  durationMs: number;  // Time taken to complete (milliseconds)
  completed: boolean;  // Always true for completed plates
}

// Game performance metrics
interface GameMetrics {
  score: number;        // Total points scored
  combo: number;        // Current consecutive correct chars
  maxCombo: number;     // Highest combo achieved
  correctChars: number; // Total correct characters typed
  missedChars: number;  // Total incorrect key presses
  coins: number;        // Total monetary value earned
}

// Complete game state
interface GameState {
  status: GameStatus;
  timeLimit: number;
  timeLeft: number;
  activePlate: PlateProgress | null;
  upcomingPlates: SushiPlate[];
  completedPlates: CompletedPlate[];
  metrics: GameMetrics;
  startedAt: number | null;
}
```

## Game Constants

```typescript
// Default game settings
DEFAULT_TIME_LIMIT = 60;   // seconds
DEFAULT_LANE_SIZE = 3;     // plates

// Scoring system
CHAR_SCORE = 10;          // Points per correct character
PLATE_BONUS = 50;         // Bonus points for completing a plate
MISTAKE_PENALTY = 5;      // Points deducted per mistake
```

## Scoring Algorithm

The game uses a combo-based scoring system:

1. **Character Points**: Each correct character scores `CHAR_SCORE + current_combo` points
2. **Combo System**: Consecutive correct characters increase the combo multiplier
3. **Plate Bonus**: Completing a plate adds `PLATE_BONUS` points
4. **Mistake Penalty**: Wrong keys reset combo to 0 and deduct `MISTAKE_PENALTY` points
5. **Coins**: Completing a plate adds its price value to the coins total

### Example Scoring

For typing "maguro" (6 characters) perfectly:
- Character 1: 10 + 1 = 11 points (combo = 1)
- Character 2: 10 + 2 = 12 points (combo = 2)
- Character 3: 10 + 3 = 13 points (combo = 3)
- Character 4: 10 + 4 = 14 points (combo = 4)
- Character 5: 10 + 5 = 15 points (combo = 5)
- Character 6: 10 + 6 = 16 points (combo = 6)
- Plate completion: 50 bonus points
- **Total**: 131 points + 100 coins (maguro's price)

## Game Flow

1. **Initialization**: Game starts in `'idle'` state with empty metrics
2. **Start**: Calling `start()` sets status to `'running'`, initializes timer and first plate
3. **Gameplay**: Players type characters using `handleKeyInput()`
4. **Plate Completion**: When plate is finished, it moves to `completedPlates` and next plate becomes active
5. **Game End**: When timer reaches 0, status becomes `'finished'`
6. **Restart**: `restart()` resets all state and starts a new game