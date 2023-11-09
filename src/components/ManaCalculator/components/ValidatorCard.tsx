import React from 'react';
import { useManaState } from '../hooks';
import { ValidatorProps } from '../types';
import { fromMicro, toMicro } from '../utils';

export function ValidatorCard({
  validator,
  id,
}: {
  validator: ValidatorProps;
  id: number;
}) {
  const {
    handleDelete,
    handleStakeChange,
    handleDelegatedStakeChange,
    handlePFChange,
    handleFCChange,
  } = useManaState();
  return (
    <>
      <div className='col col--2'>Validator {id + 1}</div>
      <input
        className='col col--2 align-right horizontal-spaced'
        value={fromMicro(validator.lockedStake)}
        onChange={(e) => handleStakeChange(toMicro(Number(e.target.value)), id)}
      ></input>
      <input
        className='col col--2 align-right horizontal-spaced'
        value={fromMicro(validator.delegatedStake)}
        onChange={(e) =>
          handleDelegatedStakeChange(toMicro(Number(e.target.value)), id)
        }
      ></input>
      <input
        className='col col--2 align-right horizontal-spaced'
        type='number'
        step='0.01'
        value={validator.performanceFactor}
        onChange={(e) => handlePFChange(Number(e.target.value), id)}
      ></input>
      <input
        className='col col--2 align-right horizontal-spaced'
        type='number'
        step='0.01'
        value={validator.fixedCost}
        onChange={(e) => handleFCChange(Number(e.target.value), id)}
      ></input>
      <button
        className=' button button--remove mana-calculator__button mana-calculator__transparent-button'
        onClick={() => handleDelete(id)}
      >
        Remove
      </button>
    </>
  );
}
