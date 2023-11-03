import { GENERATION_PER_SLOT } from '../constants';
import { getFirstSlotOfEpoch } from '../utils';
import { getPotentialMana } from './getPotentialMana';

export function calculatePassiveRewards(
  tokens: number,
  initialEpoch: number,
  finalEpoch: number,
): number {
  return getPotentialMana(
    tokens,
    getFirstSlotOfEpoch(initialEpoch) - 1,
    getFirstSlotOfEpoch(finalEpoch) - 1,
    GENERATION_PER_SLOT,
  );
}
