import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateBPS,
} from '../actions';
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

  const yourBlocksPerEpoch = passiveRewards / state.congestionAmount;
  const yourAdditionalBlocksPerEpoch =
    generatedRewards / state.congestionAmount;

  const yourTPS = yourBlocksPerEpoch / EPOCH_DURATION;
  const yourAdditionalTPS = yourAdditionalBlocksPerEpoch / EPOCH_DURATION;
  const totalBPS = yourTPS + yourAdditionalTPS;

  const msToTransaction = (1 / totalBPS) * 1_000;
  const passiveMsToTransaction = (1 / yourTPS) * 1_000;

  return {
    generatedRewards,
    passiveRewards,
    totalBPS,
    msToTransaction,
    passiveMsToTransaction,
  };
}
