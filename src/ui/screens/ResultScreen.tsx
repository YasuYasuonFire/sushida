import { ResultSummary } from '../components/ResultSummary';
import { CompletedPlate, GameMetrics } from '../../game/types';

interface ResultScreenProps {
  metrics: GameMetrics;
  completedPlates: CompletedPlate[];
  onRetry: () => void;
}

export function ResultScreen({
  metrics,
  completedPlates,
  onRetry,
}: ResultScreenProps): JSX.Element {
  return (
    <section className="result-screen">
      <ResultSummary
        metrics={metrics}
        completed={completedPlates}
        onRetry={onRetry}
      />
    </section>
  );
}
