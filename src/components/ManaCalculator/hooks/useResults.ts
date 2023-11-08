import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateBPS,
} from '../actions';
import { UserType } from '../enums';
import { ManaState, ValidatorParameters } from '../types';

export function useResults(state: ManaState) {
  const passiveRewards = calculatePassiveRewards(
    state.heldTokens,
    state.initialEpoch,
    state.finalEpoch,
    state.generationPerSlot,
  );

  const passiveBPS = calculateBPS(passiveRewards, state.congestionAmount);

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

  const generatedBPS = calculateBPS(generatedRewards, state.congestionAmount);
  const totalBPS = generatedBPS + passiveBPS;

  const msToTransaction = (1 / totalBPS) * 1_000;
  const passiveMsToTransaction = (1 / passiveBPS) * 1_000;

  return {
    generatedRewards,
    passiveRewards,
    totalBPS,
    msToTransaction,
    passiveMsToTransaction,
  };
}
