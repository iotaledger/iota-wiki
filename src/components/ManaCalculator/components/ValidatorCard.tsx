import React from 'react';
import { useManaState } from '../hooks';
import { ValidatorProps } from '../types';
import { fromMicro } from '../utils';
import { ValidatedInput } from '../../ValidatedInput/ValidatedInput';

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
    maxAvailableSupply,
  } = useManaState();

  const maxValidatorLockedStake =
    fromMicro(maxAvailableSupply) + fromMicro(validator.lockedStake);

  const maxValidatorDelegatedStake =
    fromMicro(maxAvailableSupply) + fromMicro(validator.delegatedStake);

  return (
    <>
      <div className='col col--2'>Validator {id + 1}</div>
      <div className='validator_card col col--2 align-right horizontal-spaced'>
        <ValidatedInput
          className='w-full'
          min={0}
          max={maxValidatorLockedStake}
          value={fromMicro(validator.lockedStake)}
          onChange={(value: string) => handleStakeChange(value, id)}
        />
      </div>
      <div className='validator_card col col--2 align-right horizontal-spaced'>
        <ValidatedInput
          className='w-full'
          min={0}
          max={maxValidatorDelegatedStake}
          value={fromMicro(validator.delegatedStake)}
          onChange={(value: string) => handleDelegatedStakeChange(value, id)}
        />
      </div>
      <div className='validator_card col col--2 align-right horizontal-spaced'>
        <ValidatedInput
          className='w-full'
          min={0}
          max={1}
          value={validator.performanceFactor}
          onChange={(value: string) => handlePFChange(value, id)}
        />
      </div>
      <div className='validator_card col col--2 align-right horizontal-spaced'>
        <ValidatedInput
          className='w-full'
          min={0}
          max={Number.MAX_SAFE_INTEGER}
          value={validator.fixedCost}
          onChange={(value: string) => handleFCChange(value, id)}
        />
      </div>
      <button
        className=' button button--remove mana-calculator__button mana-calculator__transparent-button'
        onClick={() => handleDelete(id)}
      >
        Remove
      </button>
    </>
  );
}
