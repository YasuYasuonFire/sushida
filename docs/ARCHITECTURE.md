# Architecture Guide

## Overview

Sushida Clone is a React-based typing game built with TypeScript, Vite, and modern React patterns. The architecture follows a clean separation between game logic, UI components, and application state.

## Project Structure

```
src/
├── app/              # Application root and main component
│   ├── App.tsx       # Main app component with keyboard handling
│   └── index.ts      # App module exports
├── game/             # Core game logic and state management
│   ├── constants.ts  # Game configuration constants
│   ├── data/
│   │   └── plates.ts # Sushi plate data definitions
│   ├── types.ts      # TypeScript type definitions
│   ├── useTypingGame.ts # Main game logic hook
│   └── utils.ts      # Game utility functions
├── main.tsx          # React application entry point
├── styles/           # Global CSS styles
│   └── global.css
└── ui/               # User interface components
    ├── components/   # Reusable UI components
    │   ├── ResultSummary.tsx
    │   ├── ScoreBoard.tsx
    │   └── SushiLane.tsx
    └── screens/      # Full-screen game states
        ├── GameScreen.tsx    # Active gameplay screen
        ├── ResultScreen.tsx  # Post-game results
        └── TitleScreen.tsx   # Start screen
```

## Architecture Principles

### 1. Separation of Concerns

- **Game Logic** (`src/game/`): Pure game state management and business logic
- **UI Components** (`src/ui/`): Presentation layer with React components
- **App Layer** (`src/app/`): Application orchestration and global event handling

### 2. Single Source of Truth

The `useTypingGame` hook serves as the single source of truth for all game state, using React's `useState` and `useEffect` hooks for state management.

### 3. Immutable State Updates

All game state updates use immutable patterns, ensuring predictable state changes and enabling React's optimization features.

### 4. Type Safety

Comprehensive TypeScript types ensure compile-time safety and better developer experience.

## Core Components

### Game Logic Hook (`useTypingGame`)

The central piece of the architecture that manages:

- **Game State**: Current game status, time, plates, and metrics
- **Game Controls**: Start, restart, and key input handling
- **Timer Management**: Countdown timer with cleanup
- **Plate Progression**: Moving through sushi plates and tracking completion
- **Scoring Logic**: Points, combos, and penalty calculations

Key design patterns:
- Custom React hook for state encapsulation
- `useCallback` for stable function references
- `useRef` for mutable references (timers, timestamps)
- `useMemo` for expensive computations

### Application Component (`App`)

Responsible for:
- Global keyboard event handling
- Screen routing based on game state
- Preventing input conflicts with form elements

### UI Layer Architecture

#### Screens
- **TitleScreen**: Game start interface
- **GameScreen**: Active gameplay with real-time updates
- **ResultScreen**: Post-game statistics and restart option

#### Components
- **ScoreBoard**: Real-time metrics display
- **SushiLane**: Visual representation of current and upcoming plates
- **ResultSummary**: Detailed game performance breakdown

## State Management Flow

```
User Input (Keyboard) → App.tsx → useTypingGame hook → State Update → UI Re-render
```

1. **Input Capture**: `App.tsx` captures keyboard events globally
2. **Input Processing**: Events are passed to `handleKeyInput` from the game hook
3. **State Calculation**: Hook calculates new state based on input
4. **State Update**: React state is updated immutably
5. **UI Update**: Components re-render with new state

## Data Flow

### Game Initialization
1. Hook creates initial state with default values
2. Plate queue is populated with random sushi items
3. Metrics are initialized to zero values

### Active Gameplay
1. Timer decrements every second via `setInterval`
2. User input is validated and processed
3. State updates trigger immediate UI re-renders
4. Plate completion advances the sushi lane

### Game Completion
1. Timer expiration triggers game end
2. Final state is calculated and preserved
3. Results screen displays complete statistics

## Testing Strategy

The architecture supports comprehensive testing through:

### Unit Testing (`tests/game/useTypingGame.test.ts`)
- Game logic testing with `@testing-library/react-hooks`
- Mocked timers using Vitest's fake timer utilities
- Deterministic random number generation for consistent tests

### Testing Patterns
- **Arrange**: Set up initial game state
- **Act**: Simulate user interactions
- **Assert**: Verify expected state changes

## Performance Considerations

### Optimizations
- **Memoization**: `useMemo` and `useCallback` prevent unnecessary re-renders
- **Immutable Updates**: Efficient React reconciliation
- **Timer Cleanup**: Proper cleanup prevents memory leaks

### State Update Patterns
- Functional state updates for consistency
- Batch state updates using `setTimeout` for complex operations
- Minimal re-renders through careful dependency management

## Build and Development

### Technology Stack
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript 5**: Strong typing and developer experience
- **Vite**: Fast development server and optimized builds
- **Vitest**: Fast unit testing framework
- **ESLint + Prettier**: Code quality and formatting

### Development Workflow
1. **Development**: `npm run dev` starts Vite dev server
2. **Testing**: `npm test` runs Vitest test suite
3. **Linting**: `npm run lint` checks code quality
4. **Building**: `npm run build` creates production bundle

## Extension Points

The architecture is designed for easy extension:

### Adding New Sushi Plates
Add items to `src/game/data/plates.ts` with `SushiPlate` interface

### Customizing Game Rules
Modify constants in `src/game/constants.ts`

### Adding New Screens
Create new screen components in `src/ui/screens/` and wire into `App.tsx`

### Enhancing Scoring
Extend the scoring logic in `useTypingGame` hook's `handleKeyInput` method

## Dependencies

### Production Dependencies
- `react` & `react-dom`: Core React library

### Development Dependencies
- `@vitejs/plugin-react`: Vite React integration
- `typescript`: TypeScript compiler
- `@testing-library/*`: Testing utilities
- `vitest`: Test runner
- `eslint` & `prettier`: Code quality tools