import {
  GENERATION_PER_SLOT,
  first_slot_of_epoch,
  potential_Mana,
  targetReward,
  EPOCH_DURATION,
  decay,
} from './utils';
import { ValidatorParameters, ValidatorProps } from './types';

export function calculateManaRewards(
  stake: number,
  yourPool: number,
  validatorParameters: ValidatorParameters,
  validators: ValidatorProps[],
  initialEpoch: number,
  finalEpoch: number,
  yourRole: 'Validator' | 'Delegator',
  supply: number,
): number {
  let totalTargetReward = 0;
  let epochDiff = finalEpoch - initialEpoch;

  if (finalEpoch) {
    for (let i = 0; i < epochDiff; i++) {
      totalTargetReward += decay(
        targetReward(initialEpoch + i, supply),
        epochDiff - i,
      );
    }
  } else {
    epochDiff = 1;
    finalEpoch = initialEpoch + 1;
    totalTargetReward = targetReward(initialEpoch, supply);
  }

  const lockedStake: number[] = validators.map(
    (validator) => validator.lockedStake,
  );
  const fixedCosts: number[] = validators.map(
    (validator) => validator.fixedCost,
  );
  const performance: number[] = validators.map(
    (validator) => validator.performanceFactor,
  );
  const delegatedStake: number[] = validators.map(
    (validator) => validator.delegatedStake,
  );

  if (yourRole === 'Validator') {
    lockedStake.push(stake * validatorParameters.shareOfYourStakeLocked);
    fixedCosts.push(validatorParameters.fixedCost);
    performance.push(validatorParameters.performanceFactor);
    delegatedStake.push(
      (1 - validatorParameters.shareOfYourStakeLocked) * stake +
        validatorParameters.attractedNewDelegatedStake +
        validatorParameters.attractedDelegatedStakeFromOtherPools *
          delegatedStake.reduce((a, b) => a + b, 0),
    );
    for (let i = 0; i < validators.length; i++) {
      delegatedStake[i] *=
        1 - validatorParameters.attractedDelegatedStakeFromOtherPools;
    }
  }

  if (yourRole === 'Delegator') {
    delegatedStake[yourPool] += stake;
  }

  const totalValidatorsStake = lockedStake.reduce((a, b) => a + b, 0);
  const totalDelegatedStake = delegatedStake.reduce((a, b) => a + b, 0);
  const totalStake = totalDelegatedStake + totalValidatorsStake;
  const restOfTokenHoldings = supply - totalStake;
  if (restOfTokenHoldings < 0) {
    throw new Error('Pools must have (collectively) at most iotaSupply tokens');
  }

  // Calculates profit margin of the epoch (only when there are tokens stake, otherwise, it's set to None)
  let profitMargin: number | null;
  if (totalStake > 0) {
    profitMargin = totalValidatorsStake / (totalValidatorsStake + totalStake);
  } else {
    profitMargin = null;
  }

  // Calculates the total rewards for each pool, already discounting the validator fixed cost
  const poolRewards: number[] = new Array(lockedStake.length).fill(0);
  if (totalStake > 0) {
    if (totalValidatorsStake > 0) {
      for (let i = 0; i < lockedStake.length; i++) {
        poolRewards[i] =
          ((lockedStake[i] + delegatedStake[i]) / totalStake +
            lockedStake[i] / totalValidatorsStake) *
            totalTargetReward *
            (performance[i] / 2.0) -
          epochDiff * fixedCosts[i];
      }
    } else {
      for (let i = 0; i < lockedStake.length; i++) {
        poolRewards[i] =
          ((lockedStake[i] + delegatedStake[i]) / totalStake) *
            totalTargetReward *
            (performance[i] / 2.0) -
          epochDiff * fixedCosts[i];
      }
    }
  }

  // Calculates the rewards for each validator
  const validatorRewards: number[] = new Array(lockedStake.length).fill(0);
  for (let i = 0; i < lockedStake.length; i++) {
    if (poolRewards[i] < 0) {
      validatorRewards[i] = 0;
      poolRewards[i] = 0;
    } else if (poolRewards[i] === 0) {
      validatorRewards[i] = epochDiff * fixedCosts[i];
    } else {
      validatorRewards[i] =
        epochDiff * fixedCosts[i] +
        poolRewards[i] * profitMargin +
        ((1 - profitMargin) * poolRewards[i] * lockedStake[i]) /
          (delegatedStake[i] + lockedStake[i]);
    }
  }

  const delegatorRewards: number[] = new Array(lockedStake.length).fill(0);
  for (let i = 0; i < lockedStake.length; i++) {
    if (poolRewards[i] > 0) {
      delegatorRewards[i] =
        (poolRewards[i] * (1 - profitMargin) * delegatedStake[i]) /
        (delegatedStake[i] + lockedStake[i]);
    }
  }

  let rewards = 0;
  if (yourRole === 'Delegator') {
    if (delegatorRewards[yourPool] > 0) {
      rewards = (delegatorRewards[yourPool] * stake) / delegatedStake[yourPool];
    }
  }

  if (yourRole === 'Validator') {
    rewards = validatorRewards[lockedStake.length - 1];
  }

  return rewards;
}

export function calculatePassiveRewards(
  tokens: number,
  initialEpoch: number,
  finalEpoch: number,
): number {
  return potential_Mana(
    tokens,
    first_slot_of_epoch(initialEpoch) - 1,
    first_slot_of_epoch(finalEpoch) - 1,
    GENERATION_PER_SLOT,
  );
}

export function calculateTPS(mana: number, congestion: number): number {
  return mana / congestion / EPOCH_DURATION;
}
