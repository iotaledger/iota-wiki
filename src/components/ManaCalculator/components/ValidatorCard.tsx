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
    <div className='col col--4'>
      <div className='table'>
        <div className='row'>
          <div className='col col--9'>Validator {id + 1}</div>
          <button
            className=' col col--3 button button--danger  align-right'
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </div>
        <div className='row'>
          <div className='col col--8'>Stake:</div>
          <input
            className='col col--4 align-right'
            value={fromMicro(validator.lockedStake)}
            onChange={(e) =>
              handleStakeChange(toMicro(Number(e.target.value)), id)
            }
          ></input>
        </div>
        <div className='row'>
          <div className='col col--8'>Delegated:</div>
          <input
            className='col col--4 align-right'
            value={fromMicro(validator.delegatedStake)}
            onChange={(e) =>
              handleDelegatedStakeChange(toMicro(Number(e.target.value)), id)
            }
          ></input>
        </div>
        <div className='row'>
          <div className='col col--8'>PF:</div>
          <input
            className='col col--4 align-right'
            type='number'
            step='0.01'
            value={validator.performanceFactor}
            onChange={(e) => handlePFChange(Number(e.target.value), id)}
          ></input>
        </div>
        <div className='row'>
          <div className='col col--8'>FC:</div>
          <input
            className='col col--4 align-right'
            type='number'
            step='0.01'
            value={validator.fixedCost}
            onChange={(e) => handleFCChange(Number(e.target.value), id)}
          ></input>
        </div>
      </div>
    </div>
  );
}
