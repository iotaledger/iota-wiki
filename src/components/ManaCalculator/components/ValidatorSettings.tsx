import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';
import { fromMicro, roundMax } from '../utils';
import { ValidatedInput } from '../../ValidatedInput/ValidatedInput';

export function ValidatorSettings() {
  const {
    state,
    handleOwnPFChange,
    handleOwnFCChange,
    handleOwnStakeChange,
    handleAttractedNewDelegatedStakeChange,
    maxAvailableSupply,
  } = useManaState();

  const maxAttractedNewDelegatedStake = roundMax(
    fromMicro(maxAvailableSupply + state.validator.attractedNewDelegatedStake),
    0,
  );

  return (
    <Details
      summary='Validator Settings'
      className='mana_calculator__card mana_calculator_inner__card'
    >
      <label className='inlined-long-label'>
        Staked amount ({state.network})
      </label>
      <ValidatedInput
        className='mana_calculator__compact inlined'
        min={0}
        max={fromMicro(state.heldTokens)}
        value={fromMicro(state.stakedOrDelegatedTokens)}
        onChange={handleOwnStakeChange}
      />
      <br />
      <label className='inlined-long-label'>Performance factor</label>
      <ValidatedInput
        className='mana_calculator__compact input--vertical-spaced'
        min={0}
        max={1}
        value={state.validator.performanceFactor}
        onChange={handleOwnPFChange}
      />
      <br />
      <label className='inlined-long-label'>Fixed costs</label>
      <ValidatedInput
        className='mana_calculator__compact input--vertical-spaced'
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        value={state.validator.fixedCost}
        onChange={handleOwnFCChange}
      />
      <label className='inlined-long-label'>
        Attracted new delegated stake ({state.network})
      </label>
      <ValidatedInput
        className='mana_calculator__compact input--vertical-spaced'
        min={0}
        max={maxAttractedNewDelegatedStake}
        value={roundMax(
          fromMicro(state.validator.attractedNewDelegatedStake),
          0,
        )}
        onChange={handleAttractedNewDelegatedStakeChange}
      ></ValidatedInput>
    </Details>
  );
}
