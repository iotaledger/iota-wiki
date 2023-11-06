import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateTPS,
} from '../actions';
import { UserType } from '../enums';
import {
  EpochReward,
  ManaCalculatorProps,
  ValidatorParameters,
} from '../types';
import { fromMicro } from '../utils';

export function useResultsPerEpoch(state: ManaCalculatorProps): EpochReward[] {
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
  const results = [];

  for (let i = state.initialEpoch; i <= state.finalEpoch; i++) {
    const manaGenerated = calculateManaRewards(
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
      state.heldTokens,
      state.initialEpoch,
      i,
    );

    const mana = manaGenerated + passiveRewards;

    const tpsFromPassiveRewards = calculateTPS(passiveRewards, state.congestion);
    const tpsFromGeneratedMana = calculateTPS(manaGenerated, state.congestion);
    const totalTps = tpsFromPassiveRewards + tpsFromGeneratedMana;

    results.push({
      epoch: i,
      mana: fromMicro(mana) / 1_000_000,
      totalTps
    });
  }

  return results;
}
