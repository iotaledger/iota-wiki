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
  );

  const grantedTPS = calculateTPS(manaGenerated, state.congestion);
  const totalTPS = grantedTPS + additionalTPS;

  const timeToGetEnoughMana = 1 / totalTPS;
  const timeToGetEnoughManaAsHolder = 1 / additionalTPS;

  return {
    manaGenerated,
    passiveRewards,
    totalTPS,
    timeToGetEnoughMana,
    timeToGetEnoughManaAsHolder,
  };
}
