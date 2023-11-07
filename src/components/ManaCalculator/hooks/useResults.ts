import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateTPS,
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

  const additionalTPS = calculateTPS(passiveRewards, state.congestionAmount);

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

  const manaGenerated = calculateManaRewards(
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

  const grantedTPS = calculateTPS(manaGenerated, state.congestionAmount);
  const totalTPS = grantedTPS + additionalTPS;

  return {
    manaGenerated,
    passiveRewards,
    totalTPS,
  };
}
