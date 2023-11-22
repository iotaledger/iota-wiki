import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';
import { fromMicro, toMicro, roundMax } from '../utils';

export function DelegatorSettings() {
  const {
    state,
    handleOwnPFChange,
    handleOwnFCChange,
    handleOwnStakeChange,
    handleAttractedNewDelegatedStakeChange,
  } = useManaState();
  return (
    <Details
      summary='Delegator Settings'
      className='mana_calculator__card mana_calculator_inner__card'
    >
      <label className='inlined-long-label'>Delegated amount ({state.network})</label>
      <input
          className='mana_calculator__compact inlined'
          value={fromMicro(state.stakedOrDelegatedTokens)}
          onChange={(e) =>
          handleOwnStakeChange(toMicro(Number(e.target.value)))
          }
      ></input>
      <br />
    </Details>
  );
}
