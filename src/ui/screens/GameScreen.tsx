import { ScoreBoard } from '../components/ScoreBoard';
import { SushiLane } from '../components/SushiLane';
import { GameState } from '../../game/types';

interface GameScreenProps {
  state: Pick<GameState, 'timeLeft' | 'activePlate' | 'upcomingPlates' | 'metrics'>;
}

export function GameScreen({ state }: GameScreenProps): JSX.Element {
  return (
    <section className="game-screen">
      <ScoreBoard metrics={state.metrics} timeLeft={state.timeLeft} />
      <SushiLane activePlate={state.activePlate} upcoming={state.upcomingPlates} />
      <p className="game-screen__hint">キーボードでローマ字入力しよう。</p>
    </section>
  );
}
