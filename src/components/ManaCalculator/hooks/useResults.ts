import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateTPS,
} from '../actions';
import { UserType } from '../enums';
import { ManaCalculatorProps, ValidatorParameters } from '../types';

export function useResults(state: ManaCalculatorProps) {
  const passiveRewards = calculatePassiveRewards(
    state.heldTokens,
    state.initialEpoch,
    state.finalEpoch,
  );

  const additionalTPS = calculateTPS(passiveRewards, state.congestion);

  if (state.userType == UserType.DELEGATOR) {
    const manaGenerated = calculateManaRewards(
      state.stakedOrDelegatedTokens,
      state.delegator.validator,
      null,
      state.validators,
      state.initialEpoch,
      state.finalEpoch,
      state.userType,
      state.network,
    );

    const grantedTPS = calculateTPS(manaGenerated, state.congestion);
    const totalTPS = grantedTPS + additionalTPS;

    return {
      manaGenerated,
      passiveRewards,
      totalTPS,
    };
  } else {
    const manaGenerated = calculateManaRewards(
      state.stakedOrDelegatedTokens,
      state.delegator.validator,
      {
        performanceFactor: state.validator.performanceFactor,
        fixedCost: state.validator.fixedCost,
        shareOfYourStakeLocked: state.validator.shareOfYourStakeLocked,
        attractedNewDelegatedStake: state.validator.attractedNewDelegatedStake,
        attractedDelegatedStakeFromOtherPools:
          state.validator.attractedDelegatedStakeFromOtherPools,
      } as ValidatorParameters,
      state.validators,
      state.initialEpoch,
      state.finalEpoch,
      state.userType,
      state.network,
    );

    const grantedTPS = calculateTPS(manaGenerated, state.congestion);
    const totalTPS = grantedTPS + additionalTPS;

    return {
      manaGenerated,
      passiveRewards,
      totalTPS,
    };
  }
}
