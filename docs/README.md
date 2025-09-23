# Sushida Clone Documentation

Welcome to the comprehensive documentation for Sushida Clone, a React-based typing game that challenges players to type sushi names in romaji.

## Quick Start

1. **Install Dependencies**: `npm install`
2. **Start Development**: `npm run dev`
3. **Run Tests**: `npm test`
4. **Build for Production**: `npm run build`

## Documentation Structure

This documentation follows the [Diátaxis](https://diataxis.fr/) framework for technical documentation, organizing content by user needs:

### 📚 Learning-Oriented (Tutorials)
- **[README.md](../README.md)** - Getting started guide with basic setup and usage

### 🛠️ Problem-Oriented (How-To Guides)
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Step-by-step guide for contributors
  - Development workflow and branch strategy
  - Code standards and testing guidelines
  - Feature development patterns
  - Pull request process

### 📖 Information-Oriented (Reference)
- **[API.md](./API.md)** - Complete API reference
  - `useTypingGame` hook documentation
  - TypeScript type definitions
  - Game constants and configuration
  - Scoring algorithm details

### 🧠 Understanding-Oriented (Explanation)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and design
  - Project structure and organization
  - Architecture principles and patterns
  - State management flow
  - Performance considerations
  - Extension points for customization

## Key Concepts

### Game Architecture
The game is built with a clear separation between:
- **Game Logic** (`src/game/`): Pure business logic and state management
- **UI Layer** (`src/ui/`): React components for presentation
- **App Layer** (`src/app/`): Application orchestration and event handling

### Core Hook: `useTypingGame`
The central game logic is encapsulated in a custom React hook that provides:
```typescript
const game = useTypingGame({ timeLimit: 60, laneSize: 3 });
// Returns: game state, controls (start/restart), and input handler
```

### Type Safety
The codebase uses comprehensive TypeScript types:
- `GameState` - Complete game state
- `SushiPlate` - Individual sushi data
- `GameMetrics` - Performance tracking
- `PlateProgress` - Real-time typing progress

### Testing Strategy
- **Unit Tests**: Core game logic with mocked timers
- **React Testing**: Component behavior with Testing Library
- **Test Coverage**: Comprehensive coverage of business logic

## Development Workflow

### Local Development
```bash
npm run dev     # Start development server (http://localhost:5173)
npm test        # Run test suite in watch mode
npm run lint    # Check code style and quality
npm run format  # Auto-format code with Prettier
```

### Quality Assurance
```bash
npm run build   # Verify production build
npm test        # Run full test suite
npm run lint    # Check for style/quality issues
```

### GitHub Flow
1. Create feature branch from `main`
2. Implement changes with tests
3. Run quality checks
4. Create Pull Request
5. Code review and merge

## Technology Stack

- **React 18** with modern hooks and patterns
- **TypeScript 5** for type safety and developer experience
- **Vite** for fast development and optimized builds
- **Vitest** for unit testing with great DX
- **ESLint + Prettier** for code quality

## Game Features

### Core Gameplay
- **60-second typing challenges** with countdown timer
- **Randomized sushi selection** from 20+ varieties
- **Real-time feedback** with typing progress visualization
- **Combo system** that rewards consecutive correct typing

### Scoring System
- **Character Points**: 10 points + combo multiplier per correct character
- **Plate Bonus**: 50 points for completing each sushi plate
- **Mistake Penalty**: -5 points and combo reset for wrong keys
- **Coins System**: Earn virtual currency based on plate values

### Performance Tracking
- Real-time score and combo display
- Accuracy statistics (correct vs missed characters)
- Detailed post-game summary with performance breakdown
- Maximum combo achievement tracking

## Customization

### Game Settings
Modify `src/game/constants.ts` to adjust:
- Time limit and lane size
- Scoring parameters
- Penalty values

### Adding Content
Extend `src/game/data/plates.ts` with new sushi varieties:
```typescript
{ id: 'tobiko', label: 'とびこ', reading: 'tobiko', price: 120 }
```

### UI Customization
- Modify CSS in `src/styles/global.css`
- Customize components in `src/ui/components/`
- Add new screens in `src/ui/screens/`

## Browser Compatibility

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+
- **ES2020 Features**: Uses modern JavaScript features
- **React 18**: Requires browsers with React 18 support

## Performance

- **Bundle Size**: Optimized Vite build (~150KB gzipped)
- **Runtime Performance**: 60fps gameplay with smooth animations
- **Memory Management**: Proper cleanup prevents memory leaks
- **Accessibility**: Keyboard-first interaction with ARIA labels

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for:
- Development setup and workflow
- Code standards and best practices
- Testing requirements
- Pull request process

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

> AI-generated content by [Update Docs](https://github.com/YasuYasuonFire/sushida/actions/runs/17941097357) may contain mistakes.