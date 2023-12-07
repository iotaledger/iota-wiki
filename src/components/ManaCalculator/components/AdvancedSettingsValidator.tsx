import { Details } from '@docusaurus/theme-common/Details';
import React from 'react';
import { useManaState } from '../hooks';
import { ValidatorCard } from './ValidatorCard';

export function AdvancedSettingsValidator() {
  const { handleAddValidator, state } = useManaState();

  function onAddValidator() {
    handleAddValidator({
      lockedStake: 100,
      delegatedStake: 0,
      performanceFactor: 1.0,
      fixedCost: 0.0,
    });
  }

  return (
    <Details
      summary='Advanced Settings - Validators'
      className='mana_calculator__card mana_calculator_inner__card table'
    >
      <div className='table'>
        <div className='row small-row-head'>
          <div className='col col--2 text--center'>ID</div>
          <div className='col col--2 horizontal-spaced text--center'>
            Stake ({state.network})
          </div>
          <div className='col col--2 horizontal-space  text--center'>
            Delegated ({state.network})
          </div>
          <div className='col col--2 horizontal-spaced text--center'>
            Performance factor
          </div>
          <div className='col col--2 horizontal-spaced text--center'>
            Fixed costs
          </div>
          <div className='col col--1'></div>
        </div>
        {state.validators.map(
          (validator, i) =>
            !validator.excluded && (
              <div className='row row--centered' key={i}>
                <ValidatorCard validator={validator} id={i} />
              </div>
            ),
        )}
      </div>
      <button
        className='button button--block mana-calculator__button '
        onClick={onAddValidator}
      >
        New Validator
      </button>
    </Details>
  );
}
