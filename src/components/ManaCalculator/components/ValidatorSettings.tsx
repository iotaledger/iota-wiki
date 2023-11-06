import React from 'react';
import { Details } from '@docusaurus/theme-common/Details';
import { useManaState } from '../hooks';

export function ValidatorSettings() {
  const {
    state: {
      performanceFactor,
      fixedCost,
      shareOfYourStakeLocked,
      attractedNewDelegatedStake,
      attractedDelegatedStakeFromOtherPools,
    },
    handleOwnPFChange,
    handleOwnFCChange,
    handleShareOfYourStakeLockedChange,
    handleAttractedNewDelegatedStakeChange,
    handleAttractedDelegatedStakeFromOtherPoolsChange,
  } = useManaState();
  return (
    <div className='table'>
      <Details summary='Validator Settings'>
        <div className='row '>
          <div className='col col--6'>Performance factor:</div>
          <input
            className='col col--6 align-right'
            type='number'
            step='0.01'
            value={performanceFactor}
            onChange={(e) => handleOwnPFChange(Number(e.target.value))}
          ></input>
        </div>

        <div className='row '>
          <div className='col col--6'>Fixed costs:</div>
          <input
            className='col col--6 align-right'
            type='number'
            step='0.01'
            value={fixedCost}
            onChange={(e) => handleOwnFCChange(Number(e.target.value))}
          ></input>
        </div>
        <div className='row '>
          <div className='col col--6'>Share of your stake locked:</div>
          <input
            className='col col--6 align-right '
            value={shareOfYourStakeLocked}
            onChange={(e) =>
              handleShareOfYourStakeLockedChange(Number(e.target.value))
            }
          ></input>
        </div>
        <div className='row '>
          <div className='col col--6'>Attracted new delegated stake:</div>
          <input
            className='col col--6 align-right'
            value={attractedNewDelegatedStake}
            onChange={(e) =>
              handleAttractedNewDelegatedStakeChange(Number(e.target.value))
            }
          ></input>
        </div>
        <div className='row '>
          <div className='col col--6'>
            Attracted delegated stake from other pools:
          </div>
          <input
            className='col col--6 align-right'
            value={attractedDelegatedStakeFromOtherPools}
            onChange={(e) =>
              handleAttractedDelegatedStakeFromOtherPoolsChange(
                Number(e.target.value),
              )
            }
          ></input>
        </div>
      </Details>
    </div>
  );
}
