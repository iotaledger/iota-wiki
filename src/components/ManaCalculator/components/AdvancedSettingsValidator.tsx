import { Details } from '@docusaurus/theme-common/Details';
import React from 'react';
import { useManaState } from '../hooks';
import { ValidatorCard } from './ValidatorCard';

export function AdvancedSettingsValidator() {
  const {
    handleAddValidator,
    state: { validators },
  } = useManaState();

  function onAddValidator() {
    handleAddValidator({
      lockedStake: 100,
      delegatedStake: 0,
      performanceFactor: 1.0,
      fixedCost: 0.0,
    });
  }

  return (
    <Details summary='Advanced Settings - Validators'>
      <div className='row'>
        {validators.map((validator, i) => (
          <ValidatorCard validator={validator} id={i} key={i} />
        ))}
      </div>
      <div className='row'>
        <button
          className='button button--danger col--4 add-button'
          onClick={onAddValidator}
        >
          +
        </button>
      </div>
    </Details>
  );
}
