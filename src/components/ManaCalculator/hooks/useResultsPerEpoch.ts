import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateBPS,
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
    const generatedRewards = calculateManaRewards(
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

    const mana = generatedRewards + passiveRewards;

    const bpsFromPassiveRewards = calculateBPS(
      passiveRewards,
      state.congestionAmount,
    );
    const bpsFromGeneratedMana = calculateBPS(
      generatedRewards,
      state.congestionAmount,
    );
    const totalBps = bpsFromPassiveRewards + bpsFromGeneratedMana;

    results.push({
      epoch: i,
      mana: fromMicro(mana),
      totalBps,
    });
  }

  return results;
}
