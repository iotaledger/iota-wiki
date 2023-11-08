import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';

export function ValidatorSettings() {
  const {
    state: {
      validator: {
        performanceFactor,
        fixedCost,
        shareOfYourStakeLocked,
        attractedNewDelegatedStake,
        attractedDelegatedStakeFromOtherPools,
      },
    },
    handleOwnPFChange,
    handleOwnFCChange,
    handleShareOfYourStakeLockedChange,
    handleAttractedNewDelegatedStakeChange,
    handleAttractedDelegatedStakeFromOtherPoolsChange,
  } = useManaState();
  return (
    <Details
      summary='Validator Settings'
      className='mana_calculator__card mana_calculator_inner__card'
    >
      <label className='inlined-long-label'>Performance factor</label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        type='number'
        step='0.01'
        value={performanceFactor}
        onChange={(e) => handleOwnPFChange(Number(e.target.value))}
      ></input>
      <br />
      <label className='inlined-long-label'>Fixed costs</label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        type='number'
        step='0.01'
        value={fixedCost}
        onChange={(e) => handleOwnFCChange(Number(e.target.value))}
      ></input>
      <br />
      <label className='inlined-long-label'>Share of your stake locked</label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        value={shareOfYourStakeLocked}
        onChange={(e) =>
          handleShareOfYourStakeLockedChange(Number(e.target.value))
        }
      ></input>
      <br />
      <label className='inlined-long-label'>
        Attracted new delegated stake
      </label>
      <input
        className='mana_calculator__compact input--vertical-spaced'
        value={attractedNewDelegatedStake}
        onChange={(e) =>
          handleAttractedNewDelegatedStakeChange(Number(e.target.value))
        }
      ></input>
      <br />
      <label className='inlined-long-label'>
        Attracted delegated stake from other pools
      </label>
      <input
        className='mana_calculator__compact input--vertical-spaced '
        value={attractedDelegatedStakeFromOtherPools}
        onChange={(e) =>
          handleAttractedDelegatedStakeFromOtherPoolsChange(
            Number(e.target.value),
          )
        }
      ></input>
    </Details>
  );
}
