import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';
import { fromMicro } from '../utils';
import Select from 'react-select';
import { ValidatedInput } from '../../ValidatedInput/ValidatedInput';

export function DelegatorSettings() {
  const { state, handleOwnStakeChange, handleValidatorChange } = useManaState();

  const validatorOptions = state.validators.map((_, i) => {
    return { value: i, label: `Validator ${i + 1}` };
  });

  return (
    <Details
      summary='Delegator Settings'
      className='mana_calculator__card mana_calculator_inner__card'
    >
      <label className='inlined-label'>Delegating to</label>
      <Select
        className='mana_calculator__compact inlined'
        defaultValue={{ value: 0, label: `Validator 1` }}
        onChange={(e) => {
          handleValidatorChange(e.value);
        }}
        classNamePrefix='react-select'
        options={validatorOptions}
      />
      <br />
      <label className='inlined-label'>
        Delegated amount ({state.network})
      </label>
      <ValidatedInput
        className='mana_calculator__compact inlined'
        value={fromMicro(state.stakedOrDelegatedTokens)}
        min={0}
        max={fromMicro(state.heldTokens)}
        onChange={handleOwnStakeChange}
      />
    </Details>
  );
}
