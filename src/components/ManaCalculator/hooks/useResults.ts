import { calculateManaRewards, calculatePassiveRewards } from '../actions';
import { EPOCH_DURATION } from '../constants';
import { UserType } from '../enums';
import { ManaState, ValidatorParameters } from '../types';

export function useResults(state: ManaState) {
  const passiveRewards = calculatePassiveRewards(
    state.heldTokens,
    state.initialEpoch,
    state.finalEpoch,
    state.generationPerSlot,
  );

  const validatorParameters =
    state.userType === UserType.VALIDATOR
      ? ({
          performanceFactor: state.validator.performanceFactor,
          fixedCost: state.validator.fixedCost,
          shareOfYourStakeLocked: state.validator.shareOfYourStakeLocked,
          attractedNewDelegatedStake:
            state.validator.attractedNewDelegatedStake,
          attractedDelegatedStakeFromOtherPools:
            state.validator.attractedDelegatedStakeFromOtherPools,
        } as ValidatorParameters)
      : null;

  const generatedRewards = calculateManaRewards(
    state.stakedOrDelegatedTokens,
    state.delegator.validator,
    validatorParameters,
    state.validators,
    state.initialEpoch,
    state.finalEpoch,
    state.userType,
    state.network,
    state.generationPerSlot,
  );

  const passiveRewardsInTheFirstEpoch = calculatePassiveRewards(
    state.heldTokens,
    state.initialEpoch,
    state.initialEpoch + 1,
    state.generationPerSlot,
  );

  const generatedRewardsInTheFirstEpoch = calculateManaRewards(
    state.stakedOrDelegatedTokens,
    state.delegator.validator,
    validatorParameters,
    state.validators,
    state.initialEpoch,
    state.initialEpoch + 1,
    state.userType,
    state.network,
    state.generationPerSlot,
  );

  const yourPassiveBlocksInPeriod = passiveRewards / state.congestionAmount;
  const yourAdditionalBlocksInPeriod =
    generatedRewards / state.congestionAmount;

  const yourPassiveBlocksInTheFirstEpoch =
    passiveRewardsInTheFirstEpoch / state.congestionAmount;
  const yourAdditionalBlocksInTheFirstEpoch =
    generatedRewardsInTheFirstEpoch / state.congestionAmount;

  const yourTotalBlocksInPeriod =
    yourPassiveBlocksInPeriod + yourAdditionalBlocksInPeriod;

  const yourTotalBlocksInTheFirstEpoch =
    yourPassiveBlocksInTheFirstEpoch + yourAdditionalBlocksInTheFirstEpoch;

  const blockAllowance = yourTotalBlocksInPeriod;

  const yourBPSasHolder = yourPassiveBlocksInTheFirstEpoch / EPOCH_DURATION;
  const totalBPS = yourTotalBlocksInTheFirstEpoch / EPOCH_DURATION;

  const msToTransaction = (1 / totalBPS) * 1_000;
  const passiveMsToTransaction = (1 / yourBPSasHolder) * 1_000;

  return {
    generatedRewards,
    passiveRewards,
    totalBPS,
    blockAllowance,
    msToTransaction,
    passiveMsToTransaction,
  };
}
