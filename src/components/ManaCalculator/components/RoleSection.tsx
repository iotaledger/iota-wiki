import React from 'react';
import { useManaState } from '../hooks';
import Select from 'react-select';
import { UserType } from '../enums';
import { fromMicro } from '../utils';
import { ValidatorSettings } from './ValidatorSettings';
import { DelegatorSettings } from './DelegatorSettings';
import { ValidatedInput } from '../../ValidatedInput/ValidatedInput';

export function RoleSection() {
  const { state, handleUserChange, handleOwnHoldChange, maxAvailableSupply } =
    useManaState();

  return (
    <div className='mana_calculator__card'>
      <h4>Role configuration</h4>
      <label className='inlined-label'>Your Role</label>
      <Select
        className='mana_calculator__compact inlined'
        defaultValue={{ value: UserType.DELEGATOR, label: `Delegator` }}
        onChange={(e) => {
          handleUserChange(e.value);
        }}
        classNamePrefix='react-select'
        options={[
          { value: UserType.DELEGATOR, label: `Delegator` },
          { value: UserType.VALIDATOR, label: `Validator` },
          { value: UserType.HOLDER, label: `Holder` },
        ]}
      />
      <br />
      <label className='inlined-label'>Owned amount ({state.network})</label>
      <ValidatedInput
        min={0}
        max={fromMicro(maxAvailableSupply + state.heldTokens)}
        className='mana_calculator__compact inlined'
        value={fromMicro(state.heldTokens)}
        onChange={handleOwnHoldChange}
      />
      <br />
      {state.userType === UserType.VALIDATOR ? (
        <ValidatorSettings />
      ) : state.userType === UserType.DELEGATOR ? (
        <DelegatorSettings />
      ) : (
        <></>
      )}
    </div>
  );
}
