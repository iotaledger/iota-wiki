import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro } from '../utils';

export function OutputForm() {
  const { state } = useManaState();
  const { manaGenerated, passiveRewards, totalTPS } = useResults(state);
  return (
    <div>
        <div className='col col--6'>Mana generation (by holding):  <b className='output-result'>{fromMicro(passiveRewards)}</b></div>
        <div className='col col--6'>Mana rewards: <b className='output-result'>{fromMicro(manaGenerated)}</b></div>
        <div className='col col--6'>Total TPS granted: <b className='output-result'>{totalTPS}</b></div>
    </div>
  );
}
