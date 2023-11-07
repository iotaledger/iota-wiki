import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateTPS,
} from '../actions';
import { UserType } from '../enums';
import { EpochReward, ManaState, ValidatorParameters } from '../types';
import { fromMicro } from '../utils';

export function useResultsPerEpoch(state: ManaState): EpochReward[] {
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
      state.generationPerSlot,
    );

    const passiveRewards = calculatePassiveRewards(
      state.heldTokens,
      state.initialEpoch,
      i,
      state.generationPerSlot,
    );

    const mana = manaGenerated + passiveRewards;

    const tpsFromPassiveRewards = calculateTPS(
      passiveRewards,
      state.congestionAmount,
    );
    const tpsFromGeneratedMana = calculateTPS(
      manaGenerated,
      state.congestionAmount,
    );
    const totalTps = tpsFromPassiveRewards + tpsFromGeneratedMana;

    results.push({
      epoch: i,
      mana: fromMicro(mana),
      totalTps,
    });
  }

  return results;
}
