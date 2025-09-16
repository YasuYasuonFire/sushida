import { sushiPlates } from './data/plates';
import { SushiPlate } from './types';

const randomInt = (max: number): number => Math.floor(Math.random() * max);

export const pickRandomPlate = (excludeId?: string): SushiPlate => {
  const candidates = excludeId
    ? sushiPlates.filter((plate) => plate.id !== excludeId)
    : sushiPlates;
  return candidates[randomInt(candidates.length)];
};

export const createPlateProgress = (plate: SushiPlate) => ({
  ...plate,
  typed: '',
  remaining: plate.reading,
  mistakes: 0,
});
