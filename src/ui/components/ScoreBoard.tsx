import { GameMetrics } from '../../game/types';

interface ScoreBoardProps {
  metrics: GameMetrics;
  timeLeft: number;
}

export function ScoreBoard({ metrics, timeLeft }: ScoreBoardProps): JSX.Element {
  const accuracy = metrics.correctChars + metrics.missedChars === 0
    ? 100
    : Math.round((metrics.correctChars / (metrics.correctChars + metrics.missedChars)) * 100);

  return (
    <section className="score-board">
      <div className="score-board__item">
        <span className="score-board__label">スコア</span>
        <strong className="score-board__value">{metrics.score}</strong>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">残り時間</span>
        <strong className="score-board__value">{timeLeft}s</strong>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">コンボ</span>
        <strong className="score-board__value">{metrics.combo}</strong>
        <span className="score-board__sub">最大 {metrics.maxCombo}</span>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">正タイプ</span>
        <strong className="score-board__value">{metrics.correctChars}</strong>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">ミスタイプ</span>
        <strong className="score-board__value">{metrics.missedChars}</strong>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">正確率</span>
        <strong className="score-board__value">{accuracy}%</strong>
      </div>
      <div className="score-board__item">
        <span className="score-board__label">獲得した皿</span>
        <strong className="score-board__value">{metrics.coins} 円</strong>
      </div>
    </section>
  );
}
