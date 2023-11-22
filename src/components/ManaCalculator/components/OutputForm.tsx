import React from 'react';
import { useManaState, useResults } from '../hooks';
import { fromMicro, roundMax } from '../utils';
import { UserType } from '../enums';
import humanizeDuration from 'humanize-duration';

export function OutputForm() {
  const { state } = useManaState();
  const results = useResults(state);
  const passiveRewards = roundMax(fromMicro(results.passiveRewards), 6);
  const manaGenerated = roundMax(fromMicro(results.generatedRewards), 6);
  const blockAllowance = roundMax(results.blockAllowance, 2);
  const humanizer = humanizeDuration.humanizer({
    units: ['y', 'mo', 'w', 'd', 'h', 'm', 's', 'ms'],
    maxDecimalPoints: 3,
  });
  const msToTransaction = humanizer(results.msToTransaction);
  const passiveMsToTransaction = humanizer(results.passiveMsToTransaction);

  return (
    <div>
      {state.userType === UserType.VALIDATOR ? (
        <>
          <div className='col'>
            Generation (by just holding) in the input period:{' '}
            <b className='output-result'>{passiveRewards} Mana</b>
          </div>
          <div className='col'>
            Mana rewards from staking in the input period:{' '}
            <b className='output-result'>{manaGenerated} Mana</b>
          </div>
          <div className='col'>
            Total Block Allowance granted after the input period:{' '}
            <b className='output-result'>
              {roundMax(blockAllowance, 3)} standard blocks
            </b>
          </div>
          <div className='col'>
            Time it takes to accumulate enough mana for a standard block...
          </div>
          <div className='col'>
            ...as a holder (owning{' '}
            <b className='output-result'>{fromMicro(state.heldTokens)}</b>{' '}
            tokens and not staking any of them):{' '}
            <b className='output-result'>{passiveMsToTransaction}</b>
          </div>
          <div className='col'>
            ...as a validator (owning{' '}
            <b className='output-result'>{fromMicro(state.heldTokens)}</b>{' '}
            tokens and staking{' '}
            <b className='output-result'>
              {fromMicro(state.stakedOrDelegatedTokens)}
            </b>{' '}
            of them): <b className='output-result'>{msToTransaction}</b>
          </div>
        </>
      ) : state.userType === UserType.DELEGATOR ? (
        <>
          <div className='col'>
            Generation (by just holding) in the input period:{' '}
            <b className='output-result'>{passiveRewards} Mana</b>
          </div>
          <div className='col'>
            Mana rewards from delegating in the input period:{' '}
            <b className='output-result'>{manaGenerated} Mana</b>
          </div>
          <div className='col'>
            Total Block Allowance granted after the input period:{' '}
            <b className='output-result'>
              {roundMax(blockAllowance, 3)} standard blocks
            </b>
          </div>
          <div className='col'>
            Time it takes to accumulate enough mana for a standard block...
          </div>
          <div className='col'>
            ...as a holder (owning{' '}
            <b className='output-result'>{fromMicro(state.heldTokens)}</b>{' '}
            tokens and not delegating any of them):{' '}
            <b className='output-result'>{passiveMsToTransaction}</b>
          </div>
          <div className='col'>
            ...as a delegator (owning{' '}
            <b className='output-result'>{fromMicro(state.heldTokens)}</b>{' '}
            tokens and delegating{' '}
            <b className='output-result'>
              {fromMicro(state.stakedOrDelegatedTokens)}
            </b>{' '}
            of them): <b className='output-result'>{msToTransaction}</b>
          </div>
        </>
      ) : (
        <>
          <div className='col'>
            Generation in the input period:{' '}
            <b className='output-result'>{passiveRewards} Mana</b>
          </div>
          <div className='col'>
            Total Block Allowance granted after the input period:{' '}
            <b className='output-result'>
              {roundMax(blockAllowance, 3)} standard blocks
            </b>
          </div>
          <div className='col'>
            Time it takes to accumulate enough mana for a standard block:{' '}
            <b className='output-result'>{passiveMsToTransaction}</b>
          </div>
        </>
      )}
    </div>
  );
}
