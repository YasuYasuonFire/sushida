import { act, renderHook } from '@testing-library/react';
import { useTypingGame } from '../../src/game/useTypingGame';

const mockMathRandom = (value: number) => {
  const spy = vi.spyOn(Math, 'random').mockReturnValue(value);
  return () => spy.mockRestore();
};

describe('useTypingGame', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('advances sushi plate and updates metrics after successful typing', () => {
    const restoreRandom = mockMathRandom(0);

    const { result } = renderHook(() =>
      useTypingGame({ timeLimit: 10, laneSize: 2 })
    );

    expect(result.current.status).toBe('idle');

    act(() => {
      result.current.start();
    });

    expect(result.current.status).toBe('running');
    expect(result.current.activePlate?.reading).toBe('maguro');

    const letters = ['m', 'a', 'g', 'u', 'r', 'o'];
    letters.forEach((letter) => {
      act(() => {
        result.current.handleKeyInput(letter);
      });
    });

    expect(result.current.metrics.correctChars).toBe(6);
    expect(result.current.metrics.combo).toBeGreaterThan(0);
    expect(result.current.metrics.score).toBeGreaterThan(0);
    expect(result.current.activePlate?.remaining).toBe('');

    restoreRandom();
  });

  it('penalises incorrect input by resetting combo', () => {
    const restoreRandom = mockMathRandom(0);

    const { result } = renderHook(() => useTypingGame({ timeLimit: 10 }));

    act(() => {
      result.current.start();
    });

    act(() => {
      result.current.handleKeyInput('x');
    });

    expect(result.current.metrics.combo).toBe(0);
    expect(result.current.metrics.missedChars).toBe(1);

    restoreRandom();
  });

  it('counts down and finishes the game when time expires', () => {
    const restoreRandom = mockMathRandom(0);
    const { result } = renderHook(() => useTypingGame({ timeLimit: 2 }));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(0);
    expect(result.current.status).toBe('finished');

    restoreRandom();
  });
});
