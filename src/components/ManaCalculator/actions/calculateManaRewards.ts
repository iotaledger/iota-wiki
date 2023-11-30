import { getNetworkSupply } from '../utils';
import type { ValidatorParameters, ValidatorProps } from '../types';
import { NetworkType, UserType } from '../enums';
import { decay } from './decay';
import { targetReward } from './targetReward';

export function calculateManaRewards(
  stake: number,
  yourPool: number,
  validatorParameters: ValidatorParameters,
  validators: ValidatorProps[],
  initialEpoch: number,
  finalEpoch: number,
  userType: UserType,
  networkType: NetworkType,
  generationPerSlot: number,
): number {
  const supply = getNetworkSupply(networkType);
  let totalTargetReward = 0;
  let epochDiff = finalEpoch - initialEpoch;

  if (finalEpoch) {
    for (let i = 0; i < epochDiff; i++) {
      totalTargetReward += decay(
        targetReward(initialEpoch + i, supply, generationPerSlot),
        epochDiff - i,
      );
    }
  } else {
    epochDiff = 1;
    finalEpoch = initialEpoch + 1;
    totalTargetReward = targetReward(initialEpoch, supply, generationPerSlot);
  }

  const filteredValidators = validators.filter(
    (validator) => !validator.excluded,
  );

  const lockedStake: number[] = filteredValidators.map(
    (validator) => validator.lockedStake,
  );
  const fixedCosts: number[] = filteredValidators.map(
    (validator) => validator.fixedCost,
  );
  const performance: number[] = filteredValidators.map(
    (validator) => validator.performanceFactor,
  );
  const delegatedStake: number[] = filteredValidators.map(
    (validator) => validator.delegatedStake,
  );

  if (userType == UserType.VALIDATOR) {
    lockedStake.push(stake * validatorParameters.shareOfYourStakeLocked);
    fixedCosts.push(validatorParameters.fixedCost);
    performance.push(validatorParameters.performanceFactor);
    delegatedStake.push(
      (1 - validatorParameters.shareOfYourStakeLocked) * stake +
        validatorParameters.attractedNewDelegatedStake +
        validatorParameters.attractedDelegatedStakeFromOtherPools *
          delegatedStake.reduce((a, b) => a + b, 0),
    );
    for (let i = 0; i < filteredValidators.length; i++) {
      delegatedStake[i] *=
        1 - validatorParameters.attractedDelegatedStakeFromOtherPools;
    }
  }

  if (userType == UserType.DELEGATOR) {
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
  if (userType == UserType.DELEGATOR) {
    if (delegatorRewards[yourPool] > 0) {
      rewards = (delegatorRewards[yourPool] * stake) / delegatedStake[yourPool];
    }
  }

  if (userType == UserType.VALIDATOR) {
    rewards = validatorRewards[lockedStake.length - 1];
  }

  return rewards;
}
