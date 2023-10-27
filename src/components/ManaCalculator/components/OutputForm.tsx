import React from 'react';
import { fromMicro } from '../utils';

export function OutputForm({
  manaGenerated: manaGeneratedPerEpoch,
  passiveRewards,
  totalTPS,
}: {
  manaGenerated: number;
  passiveRewards: number;
  totalTPS: number;
}) {
  return (
    <div className='table'>
      <div className='row '>
        <div className='col col--6'>Mana generation (by holding)</div>
        <div className='col col--6 align-right'>
          {fromMicro(passiveRewards)}
        </div>
      </div>
      <div className='row '>
        <div className='col col--6'>Mana rewards (delegation/validation)</div>
        <div className='col col--6 align-right'>
          {fromMicro(manaGeneratedPerEpoch)}
        </div>
      </div>

      <div className='row '>
        <div className='col col--6'>Total TPS granted with</div>
        <div className='col col--6 align-right'>{totalTPS}</div>
      </div>
    </div>
  );
}
