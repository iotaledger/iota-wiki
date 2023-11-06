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
      }
    },
    handleOwnPFChange,
    handleOwnFCChange,
    handleShareOfYourStakeLockedChange,
    handleAttractedNewDelegatedStakeChange,
    handleAttractedDelegatedStakeFromOtherPoolsChange,
  } = useManaState();
  return (
    <Details summary='Validator Settings' className='mana_calculator__card mana_calculator_inner__card'>
       <label className='inlined-label'>Performance factor</label>
       <input
          className='col col--6 align-right'
          type='number'
          step='0.01'
          value={performanceFactor}
          onChange={(e) => handleOwnPFChange(Number(e.target.value))}
        ></input>
      <br />
      <label className='inlined-label'>Fixed costs</label>
      <input
            className='col col--6 align-right'
            type='number'
            step='0.01'
            value={fixedCost}
            onChange={(e) => handleOwnFCChange(Number(e.target.value))}
          ></input>
      <br />
      <label className='inlined-label'>Share of your stake locked</label>
          <input
            className='col col--6 align-right '
            value={shareOfYourStakeLocked}
            onChange={(e) =>
              handleShareOfYourStakeLockedChange(Number(e.target.value))
            }
          ></input>
          <br/>
          <label className='inlined-label'>Attracted new delegated stake</label>
          <input
            className='col col--6 align-right'
            value={attractedNewDelegatedStake}
            onChange={(e) =>
              handleAttractedNewDelegatedStakeChange(Number(e.target.value))
            }
          ></input>
          <br/>
          <label className='inlined-label'> Attracted delegated stake from other pools</label>
          <input
            className='col col--6 align-right'
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
