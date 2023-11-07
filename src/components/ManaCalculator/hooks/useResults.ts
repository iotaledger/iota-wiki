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

  const passiveTPS = calculateTPS(passiveRewards, state.congestion);

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
  );

  const generatedTPS = calculateTPS(generatedRewards, state.congestion);
  const totalTPS = generatedTPS + passiveTPS;

  const msToTransaction = (1 / totalTPS) * 1_000;
  const passiveMsToTransaction = (1 / passiveTPS) * 1_000;

  return {
    generatedRewards,
    passiveRewards,
    totalTPS,
    msToTransaction,
    passiveMsToTransaction,
  };
}
