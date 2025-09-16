import { useEffect } from 'react';
import { useTypingGame } from '../game/useTypingGame';
import { TitleScreen } from '../ui/screens/TitleScreen';
import { GameScreen } from '../ui/screens/GameScreen';
import { ResultScreen } from '../ui/screens/ResultScreen';

const isTypingTarget = (element: EventTarget | null): boolean => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  const tagName = element.tagName;
  return (
    tagName === 'INPUT' || tagName === 'TEXTAREA' || element.isContentEditable
  );
};

export function App(): JSX.Element {
  const {
    status,
    timeLeft,
    activePlate,
    upcomingPlates,
    metrics,
    completedPlates,
    start,
    restart,
    handleKeyInput,
  } = useTypingGame();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      if (status === 'idle' && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        start();
        return;
      }

      if (
        status === 'finished' &&
        (event.key === 'Enter' || event.key === ' ')
      ) {
        event.preventDefault();
        restart();
        return;
      }

      if (status !== 'running') {
        return;
      }

      if (event.key.length === 1) {
        handleKeyInput(event.key);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyInput, restart, start, status]);

  return (
    <div className="app">
      <header className="app__header">
        <h1>寿司打クローン</h1>
        <p>ローマ字タイピングで次々と皿を獲得しよう！</p>
      </header>
      <main className="app__main">
        {status === 'idle' && <TitleScreen onStart={start} />}
        {status === 'running' && (
          <GameScreen
            state={{
              timeLeft,
              activePlate,
              upcomingPlates,
              metrics,
            }}
          />
        )}
        {status === 'finished' && (
          <ResultScreen
            metrics={metrics}
            completedPlates={completedPlates}
            onRetry={restart}
          />
        )}
      </main>
    </div>
  );
}
