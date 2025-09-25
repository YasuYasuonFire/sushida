import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ResultSummary } from '../../src/ui/components/ResultSummary';
import { CompletedPlate, GameMetrics } from '../../src/game/types';

const baseMetrics: GameMetrics = {
  score: 1000,
  combo: 5,
  maxCombo: 7,
  correctChars: 120,
  missedChars: 3,
  coins: 420,
};

const createCompletedPlate = (overrides?: Partial<CompletedPlate>): CompletedPlate => ({
  id: 'ika',
  label: 'いか',
  reading: 'ika',
  price: 80,
  typed: 'ika',
  remaining: '',
  mistakes: 2,
  durationMs: 29200,
  completed: true,
  ...overrides,
});

describe('ResultSummary', () => {
  it('renders each completed plate only once when data is duplicated', () => {
    const duplicated = [createCompletedPlate(), createCompletedPlate()];

    render(
      <ResultSummary
        metrics={baseMetrics}
        completed={duplicated}
        onRetry={vi.fn()}
      />
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(
      screen.getByText('今日の握りは 1 皿でした。')
    ).toBeInTheDocument();
  });
});
