import React from 'react';
import { useManaState } from '../hooks';
import Select from 'react-select';
import { UserType } from '../enums';
import { fromMicro, toMicro } from '../utils';
import { ValidatorSettings } from './ValidatorSettings';

export function RoleSection() {
  const {
    state,
    handleOwnStakeChange,
    handleUserChange,
    handleValidatorChange,
    handleOwnHoldChange,
  } = useManaState();
  const validatorOptions = state.validators.map((_, i) => {
    return { value: i, label: `Validator ${i + 1}` };
  });

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
        ]}
      />
      <br />
      <label className='inlined-label'>Held amount ({state.network})</label>
      <input
        className='mana_calculator__compact inlined'
        value={fromMicro(state.heldTokens)}
        onChange={(e) => handleOwnHoldChange(toMicro(Number(e.target.value)))}
      ></input>
      <br />
      {state.userType === UserType.VALIDATOR ? (
        <>
          <label className='inlined-label'>Stake ({state.network})</label>
          <input
            className='mana_calculator__compact inlined'
            value={fromMicro(state.stakedOrDelegatedTokens)}
            onChange={(e) =>
              handleOwnStakeChange(toMicro(Number(e.target.value)))
            }
          ></input>
          <br />
          <ValidatorSettings />
        </>
      ) : (
        <>
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
          <input
            className='mana_calculator__compact inlined'
            value={fromMicro(state.stakedOrDelegatedTokens)}
            onChange={(e) =>
              handleOwnStakeChange(toMicro(Number(e.target.value)))
            }
          ></input>
        </>
      )}
    </div>
  );
}
