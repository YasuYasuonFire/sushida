import { CompletedPlate, GameMetrics } from '../../game/types';

interface ResultSummaryProps {
  metrics: GameMetrics;
  completed: CompletedPlate[];
  onRetry: () => void;
}

export function ResultSummary({
  metrics,
  completed,
  onRetry,
}: ResultSummaryProps): JSX.Element {
  const accuracy =
    metrics.correctChars + metrics.missedChars === 0
      ? 100
      : Math.round(
          (metrics.correctChars /
            (metrics.correctChars + metrics.missedChars)) *
            100
        );

  return (
    <section className="result-summary">
      <header className="result-summary__header">
        <h2>お疲れさまでした！</h2>
        <p>今日の握りは {completed.length} 皿でした。</p>
      </header>
      <dl className="result-summary__stats">
        <div>
          <dt>スコア</dt>
          <dd>{metrics.score}</dd>
        </div>
        <div>
          <dt>最大コンボ</dt>
          <dd>{metrics.maxCombo}</dd>
        </div>
        <div>
          <dt>正確率</dt>
          <dd>{accuracy}%</dd>
        </div>
        <div>
          <dt>ミスタイプ</dt>
          <dd>{metrics.missedChars}</dd>
        </div>
        <div>
          <dt>獲得皿</dt>
          <dd>{metrics.coins} 円分</dd>
        </div>
      </dl>
      <button type="button" className="result-summary__retry" onClick={onRetry}>
        もう一度遊ぶ
      </button>
      <ul className="result-summary__list">
        {completed.map((plate) => (
          <li key={`${plate.id}-${plate.typed}`}>
            <span className="result-summary__list-label">{plate.label}</span>
            <span className="result-summary__list-reading">
              {plate.reading}
            </span>
            <span className="result-summary__list-time">
              {(plate.durationMs / 1000).toFixed(1)}s
            </span>
            <span className="result-summary__list-miss">
              ミス {plate.mistakes}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
