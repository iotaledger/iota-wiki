import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro } from '../utils';
import humanizeDuration from 'humanize-duration';

export function OutputForm() {
  const { state } = useManaState();
  const results = useResults(state);
  const passiveRewards = fromMicro(results.passiveRewards).toFixed(2);
  const manaGenerated = fromMicro(results.generatedRewards).toFixed(2);
  const totalTPS = results.totalTPS.toFixed(2);
  const humanizer = humanizeDuration.humanizer({
    units: ['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms'],
    maxDecimalPoints: 3,
  });
  const msToTransaction = humanizer(results.msToTransaction);
  const passiveMsToTransaction = humanizer(results.passiveMsToTransaction);

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
      <div className='col'>
        Time it takes to accumulate enough mana for a standard transaction...
      </div>
      <div className='col'>
        ...as a delegator/validator:{' '}
        <b className='output-result'>{msToTransaction}</b>
      </div>
      <div className='col'>
        ...as a holder:{' '}
        <b className='output-result'>{passiveMsToTransaction}</b>
      </div>
    </div>
  );
}
