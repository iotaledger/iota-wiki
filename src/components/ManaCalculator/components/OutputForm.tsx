import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro } from '../utils';

export function OutputForm() {
  const { state } = useManaState();
  const results = useResults(state);
  const passiveRewards = fromMicro(results.passiveRewards).toFixed(2);
  const manaGenerated = fromMicro(results.manaGenerated).toFixed(2);
  const totalTPS = results.totalTPS.toFixed(2);

  return (
    <div>
      <div className='col'>
        Mana generation (by holding):{' '}
        <b className='output-result'>{passiveRewards}</b>
      </div>
      <div className='col'>
        Mana rewards: <b className='output-result'>{manaGenerated}</b>
      </div>
      <div className='col'>
        Total TPS granted: <b className='output-result'>{totalTPS}</b>
      </div>
    </div>
  );
}
