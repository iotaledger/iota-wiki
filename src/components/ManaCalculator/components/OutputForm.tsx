import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro, roundMax } from '../utils';
import humanizeDuration from 'humanize-duration';

export function OutputForm() {
  const { state } = useManaState();
  const results = useResults(state);
  const passiveRewards = roundMax(fromMicro(results.passiveRewards), 6);
  const manaGenerated = roundMax(fromMicro(results.generatedRewards), 6);
  const totalBPS = roundMax(results.totalBPS, 2);
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
        Total BPS granted: <b className='output-result'>{totalBPS}</b>
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
