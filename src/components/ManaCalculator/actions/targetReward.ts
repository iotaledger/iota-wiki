import {
  BETA_PER_YEAR,
  BOOTSTRAPPING_DURATION,
  EPOCH_DURATION_IN_YEARS,
  REWARDS_MANA_SHARE_COEFFICIENT,
  SLOTS_IN_EPOCH,
} from '../constants';
import { decay } from './decay';

// Returns the target reward for the given epoch
export function targetReward(
  epoch: number,
  supply: number,
  generationPerSlot: number,
): number {
  const finalReward =
    supply *
    REWARDS_MANA_SHARE_COEFFICIENT *
    generationPerSlot *
    SLOTS_IN_EPOCH;
  const decayBalancingConstant =
    Math.exp(1) /
    (BOOTSTRAPPING_DURATION *
      (1 - Math.exp(-EPOCH_DURATION_IN_YEARS * BETA_PER_YEAR)));
  const initialReward = finalReward * decayBalancingConstant;

  let reward = 0;
  if (epoch <= BOOTSTRAPPING_DURATION) {
    reward = decay(initialReward, epoch);
  } else {
    reward = finalReward;
  }
  return reward;
}
