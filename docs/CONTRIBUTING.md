# Contributing Guide

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Basic familiarity with React and TypeScript

### Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YasuYasuonFire/sushida.git
   cd sushida
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## Development Workflow

### Branch Strategy

Follow GitHub Flow:

1. **Create Feature Branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make Changes**
   - Write code following the project conventions
   - Add or update tests as needed
   - Update documentation if applicable

3. **Quality Checks**
   ```bash
   npm run lint    # Check code style
   npm test        # Run test suite
   npm run build   # Verify build works
   ```

4. **Commit Changes**
   Use [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add sound effects to game"
   git commit -m "fix: resolve timer memory leak"
   git commit -m "docs: update API documentation"
   ```

5. **Push and Create PR**
   ```bash
   git push -u origin feat/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## Code Standards

### TypeScript

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Avoid `any` type - use proper typing
- Export types from `src/game/types.ts` for reuse

### React Patterns

- **Hooks**: Use functional components with hooks
- **Custom Hooks**: Encapsulate complex logic in custom hooks
- **Props**: Define explicit prop interfaces
- **State**: Use immutable update patterns

### Code Style

- **ESLint**: Follow configured ESLint rules
- **Prettier**: Auto-format with Prettier
- **Naming**: Use descriptive, camelCase names
- **Comments**: Add JSDoc comments for public APIs

Example:
```typescript
interface SushiPlate {
  id: string;
  label: string;
  reading: string;
  price: number;
}

/**
 * Creates a new plate progress tracking object
 */
const createPlateProgress = (plate: SushiPlate): PlateProgress => {
  return {
    ...plate,
    typed: '',
    remaining: plate.reading,
    mistakes: 0,
  };
};
```

## Testing Guidelines

### Unit Tests

- Test business logic in `src/game/` thoroughly
- Use `@testing-library/react` for component testing
- Mock external dependencies (timers, random numbers)
- Test edge cases and error conditions

### Test Structure

```typescript
describe('useTypingGame', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should handle correct key input', () => {
    // Arrange: Set up initial state
    // Act: Perform action
    // Assert: Check expected outcome
  });
});
```

## Feature Development

### Adding New Game Features

1. **Define Types**: Add interfaces to `src/game/types.ts`
2. **Update State**: Modify game state in `useTypingGame`
3. **Add Logic**: Implement feature logic in the hook
4. **Update UI**: Create or modify components
5. **Add Tests**: Write comprehensive tests
6. **Update Docs**: Document new APIs

### Adding Sushi Plates

Add new items to `src/game/data/plates.ts`:

```typescript
{
  id: 'new-sushi',
  label: '新しい寿司',
  reading: 'atarashiisushi',
  price: 150
}
```

### Customizing Game Rules

Modify constants in `src/game/constants.ts`:

```typescript
export const CHAR_SCORE = 15;        // Increase character points
export const MISTAKE_PENALTY = 10;   // Increase mistake penalty
export const DEFAULT_TIME_LIMIT = 90; // Extend game time
```

## UI Development

### Component Guidelines

- **Single Responsibility**: Each component has one clear purpose
- **Props Interface**: Define explicit prop types
- **Styling**: Use CSS classes, avoid inline styles
- **Accessibility**: Include proper ARIA labels and keyboard support

Example component:
```typescript
interface ScoreBoardProps {
  score: number;
  combo: number;
  timeLeft: number;
}

export function ScoreBoard({ score, combo, timeLeft }: ScoreBoardProps): JSX.Element {
  return (
    <div className="scoreboard" role="region" aria-label="Game Statistics">
      <div className="score">Score: {score}</div>
      <div className="combo">Combo: {combo}</div>
      <div className="time">Time: {timeLeft}s</div>
    </div>
  );
}
```

## Documentation

### API Documentation

- Document all public interfaces in `docs/API.md`
- Include code examples and usage patterns
- Keep documentation synchronized with code changes

### Architecture Documentation

- Update `docs/ARCHITECTURE.md` for structural changes
- Explain design decisions and trade-offs
- Document extension points and customization options

## Pull Request Process

### PR Requirements

- [ ] All tests pass (`npm test`)
- [ ] Code is linted (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Conventional commit messages used

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All existing tests pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No console errors in development
```

## Troubleshooting

### Common Issues

**Build Errors**
- Run `npm run lint -- --fix` to auto-fix style issues
- Check TypeScript errors with `npm run build`

**Test Failures**
- Ensure tests use fake timers for time-dependent logic
- Mock random number generation for deterministic tests

**Performance Issues**
- Check for memory leaks in timer cleanup
- Verify proper cleanup in `useEffect` hooks

### Getting Help

- Check existing [Issues](https://github.com/YasuYasuonFire/sushida/issues)
- Review documentation in `docs/` directory
- Create detailed issue reports with reproduction steps

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on the code, not the person