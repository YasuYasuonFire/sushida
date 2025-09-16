import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CHAR_SCORE, DEFAULT_LANE_SIZE, DEFAULT_TIME_LIMIT, MISTAKE_PENALTY, PLATE_BONUS } from './constants';
import { createPlateProgress, pickRandomPlate } from './utils';
import {
  CompletedPlate,
  GameState,
  TypingGameOptions,
  TypingGameValue
} from './types';

const createInitialState = (timeLimit: number, laneSize: number): GameState => {
  const initialUpcoming = Array.from({ length: Math.max(laneSize - 1, 0) }, () => pickRandomPlate());

  return {
    status: 'idle',
    timeLimit,
    timeLeft: timeLimit,
    activePlate: null,
    upcomingPlates: initialUpcoming,
    completedPlates: [],
    metrics: {
      score: 0,
      combo: 0,
      maxCombo: 0,
      correctChars: 0,
      missedChars: 0,
      coins: 0
    },
    startedAt: null
  };
};

const isValidCharacter = (key: string): boolean => /[a-z]/.test(key);

export const useTypingGame = (options?: TypingGameOptions): TypingGameValue => {
  const timeLimit = options?.timeLimit ?? DEFAULT_TIME_LIMIT;
  const laneSize = options?.laneSize ?? DEFAULT_LANE_SIZE;

  const [state, setState] = useState(() => createInitialState(timeLimit, laneSize));
  const intervalRef = useRef<number | null>(null);
  const plateStartedAtRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const finishGame = useCallback(() => {
    stopTimer();
    setState((prev) => ({
      ...prev,
      status: 'finished',
      timeLeft: 0
    }));
  }, [stopTimer]);

  const tick = useCallback(() => {
    setState((prev) => {
      if (prev.status !== 'running') {
        return prev;
      }

      const nextTime = prev.timeLeft - 1;
      if (nextTime <= 0) {
        window.setTimeout(finishGame, 0);
        return {
          ...prev,
          timeLeft: 0
        };
      }

      return {
        ...prev,
        timeLeft: nextTime
      };
    });
  }, [finishGame]);

  const primeLane = useCallback(() => {
    const active = pickRandomPlate();
    const upcoming = Array.from({ length: Math.max(laneSize - 1, 0) }, () => pickRandomPlate(active.id));
    plateStartedAtRef.current = Date.now();

    setState((prev) => ({
      ...prev,
      activePlate: createPlateProgress(active),
      upcomingPlates: upcoming
    }));
  }, [laneSize]);

  const startTimer = useCallback(() => {
    stopTimer();
    intervalRef.current = window.setInterval(tick, 1000);
  }, [stopTimer, tick]);

  const resetState = useCallback(() => {
    stopTimer();
    plateStartedAtRef.current = null;
    setState(createInitialState(timeLimit, laneSize));
  }, [laneSize, stopTimer, timeLimit]);

  const start = useCallback(() => {
    resetState();
    setState((prev) => ({
      ...prev,
      status: 'running',
      timeLeft: prev.timeLimit,
      startedAt: Date.now()
    }));
    primeLane();
    startTimer();
  }, [primeLane, resetState, startTimer]);

  const restart = useCallback(() => {
    start();
  }, [start]);

  const pushCompletedPlate = useCallback((completed: CompletedPlate) => {
    setState((prev) => ({
      ...prev,
      completedPlates: [...prev.completedPlates, completed]
    }));
  }, []);

  const advanceLane = useCallback(() => {
    setState((prev) => {
      const nextActive = prev.upcomingPlates[0] ?? pickRandomPlate(prev.activePlate?.id);
      const replenished = pickRandomPlate(nextActive?.id);
      const newUpcoming = laneSize > 1 ? [...prev.upcomingPlates.slice(1), replenished] : [];
      plateStartedAtRef.current = Date.now();

      return {
        ...prev,
        activePlate: createPlateProgress(nextActive),
        upcomingPlates: newUpcoming
      };
    });
  }, [laneSize]);

  const handleKeyInput = useCallback(
    (rawKey: string) => {
      setState((prev) => {
        if (prev.status !== 'running' || !prev.activePlate) {
          return prev;
        }

        const normalized = rawKey.length === 1 ? rawKey.toLowerCase() : rawKey;
        if (!isValidCharacter(normalized)) {
          return prev;
        }

        const expected = prev.activePlate.remaining.charAt(0);
        if (!expected) {
          return prev;
        }

        if (normalized === expected) {
          const updatedTyped = prev.activePlate.typed + expected;
          const updatedRemaining = prev.activePlate.remaining.slice(1);
          const combo = prev.metrics.combo + 1;
          const newScore = prev.metrics.score + CHAR_SCORE + combo;
          const newMetrics = {
            ...prev.metrics,
            combo,
            maxCombo: Math.max(prev.metrics.maxCombo, combo),
            correctChars: prev.metrics.correctChars + 1,
            score: newScore
          };

          if (updatedRemaining.length === 0) {
            const finishedPlate: CompletedPlate = {
              ...prev.activePlate,
              typed: updatedTyped,
              remaining: '',
              mistakes: prev.activePlate.mistakes,
              completed: true,
              durationMs: plateStartedAtRef.current ? Date.now() - plateStartedAtRef.current : 0
            };

            window.setTimeout(() => {
              pushCompletedPlate(finishedPlate);
              advanceLane();
            }, 0);

            return {
              ...prev,
              activePlate: {
                ...prev.activePlate,
                typed: updatedTyped,
                remaining: '',
                mistakes: prev.activePlate.mistakes
              },
              metrics: {
                ...newMetrics,
                combo,
                score: newScore + PLATE_BONUS,
                coins: prev.metrics.coins + (prev.activePlate?.price ?? 0)
              }
            };
          }

          return {
            ...prev,
            activePlate: {
              ...prev.activePlate,
              typed: updatedTyped,
              remaining: updatedRemaining
            },
            metrics: newMetrics
          };
        }

        return {
          ...prev,
          activePlate: {
            ...prev.activePlate,
            mistakes: prev.activePlate.mistakes + 1
          },
          metrics: {
            ...prev.metrics,
            combo: 0,
            missedChars: prev.metrics.missedChars + 1,
            score: Math.max(0, prev.metrics.score - MISTAKE_PENALTY)
          }
        };
      });
    },
    [advanceLane, pushCompletedPlate]
  );

  useEffect(() => {
    if (state.status !== 'running' || state.timeLeft > 0) {
      return;
    }

    finishGame();
  }, [finishGame, state.status, state.timeLeft]);

  useEffect(() => () => stopTimer(), [stopTimer]);

  return useMemo(
    () => ({
      ...state,
      start,
      restart,
      handleKeyInput
    }),
    [handleKeyInput, restart, start, state]
  );
};
