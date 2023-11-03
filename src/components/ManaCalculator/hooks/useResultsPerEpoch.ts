import {
  calculateManaRewards,
  calculatePassiveRewards,
} from "../actions";
import { UserType } from "../enums";
import { ManaCalculatorProps, ValidatorParameters } from "../types";
import { fromMicro } from "../utils";

interface EpochReward {
  epoch: number;
  mana: number;
}

export function useResultsPerEpoch(state: ManaCalculatorProps): EpochReward[] {
  const validatorParameters = state.userType === UserType.VALIDATOR
    ? {
      performanceFactor: state.validator.performanceFactor,
      fixedCost: state.validator.fixedCost,
      shareOfYourStakeLocked: state.validator.shareOfYourStakeLocked,
      attractedNewDelegatedStake: state.validator.attractedNewDelegatedStake,
      attractedDelegatedStakeFromOtherPools:
        state.validator.attractedDelegatedStakeFromOtherPools,
    } as ValidatorParameters
    : null;
  const results = [];

  for (let i = state.initialEpoch; i <= state.finalEpoch; i++) {
    const generatedMana = calculateManaRewards(
      state.stakedOrDelegatedTokens,
      state.delegator.validator,
      validatorParameters,
      state.validators,
      state.initialEpoch,
      i,
      state.userType,
      state.network,
    );

    const passiveRewards = calculatePassiveRewards(
      state.holdedTokens,
      state.initialEpoch,
      i,
    );

    const mana = generatedMana + passiveRewards;

    results.push({
      epoch: i,
      mana: fromMicro(mana),
    });
  }

  return results;
}
