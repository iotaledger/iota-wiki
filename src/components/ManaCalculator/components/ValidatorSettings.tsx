import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';
import { fromMicro, toMicro, roundMax } from '../utils';

export function ValidatorSettings() {
  const {
    state,
    handleOwnPFChange,
    handleOwnFCChange,
    handleOwnStakeChange,
    handleAttractedNewDelegatedStakeChange,
  } = useManaState();
  return (
    <Details
      summary='Validator Settings'
      className='mana_calculator__card mana_calculator_inner__card'
    >
      <label className='inlined-long-label'>
        Staked amount ({state.network})
      </label>
      <input
        className='mana_calculator__compact inlined'
        value={fromMicro(state.stakedOrDelegatedTokens)}
        onChange={(e) => handleOwnStakeChange(toMicro(Number(e.target.value)))}
      ></input>
      <br />
      <label className='inlined-long-label'>Performance factor</label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        type='number'
        step='0.01'
        value={state.validator.performanceFactor}
        onChange={(e) => handleOwnPFChange(Number(e.target.value))}
      ></input>
      <br />
      <label className='inlined-long-label'>Fixed costs</label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        type='number'
        step='0.01'
        value={state.validator.fixedCost}
        onChange={(e) => handleOwnFCChange(Number(e.target.value))}
      ></input>
      <label className='inlined-long-label'>
        Attracted new delegated stake ({state.network})
      </label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        value={roundMax(
          fromMicro(state.validator.attractedNewDelegatedStake),
          0,
        )}
        onChange={(e) =>
          handleAttractedNewDelegatedStakeChange(Number(e.target.value))
        }
      ></input>
    </Details>
  );
}
