import React, { useState } from 'react';
import Select from 'react-select';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {
  calculateManaGeneratedPerEpoch,
  calculatePassiveRewards,
  calculateTPS,
} from './calculator';
import {
  UserType,
  ValidatorProps,
  DeleteValidatorEvent,
  ChangeValidatorEvent,
  ChangeEvent,
  ChangeCongestionEvent,
  CongestionType,
  ManaCalculatorProps,
} from './types';

function ValidatorCard({
  validator,
  handleDelete,
  handleStakeChange,
  handleDelegatedStakeChange,
  handlePFChange,
  handleFCChange,
  id,
}: {
  validator: ValidatorProps;
  handleDelete: DeleteValidatorEvent;
  handleStakeChange: ChangeValidatorEvent;
  handleDelegatedStakeChange: ChangeValidatorEvent;
  handlePFChange: ChangeValidatorEvent;
  handleFCChange: ChangeValidatorEvent;
  id: number;
}) {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='row'>
          <div className='card__title col'>Validator {id + 1}</div>
          <button
            className='button button--danger col'
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </div>
      </div>
      <div className='card__body'>
        <div className='row'>
          <label className='col'>
            Stake:
            <input
              type='number'
              value={validator.lockedStake}
              onChange={(e) => handleStakeChange(Number(e.target.value), id)}
            ></input>
          </label>
        </div>
        <div className='row'>
          <label className='col'>
            Delegated:
            <input
              value={validator.delegatedStake}
              onChange={(e) =>
                handleDelegatedStakeChange(Number(e.target.value), id)
              }
            ></input>
          </label>
        </div>
      </div>
      <div className='card__footer'>
        <div className='row'>
          <label className='col'>
            PF:
            <input
              value={validator.performanceFactor}
              onChange={(e) => handlePFChange(Number(e.target.value), id)}
            ></input>
          </label>
        </div>
        <div className='row'>
          <label className='col'>
            FC:
            <input
              value={validator.fixedCost}
              onChange={(e) => handleFCChange(Number(e.target.value), id)}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}

export default function ManaCalculator() {
  const [state, setState] = useState({
    validators: [
      {
        lockedStake: 100,
        delegatedStake: 0,
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
      {
        lockedStake: 100,
        delegatedStake: 0,
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
      {
        lockedStake: 100,
        delegatedStake: 0,
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
    ],
    userType: UserType.DELEGATOR,
    congestion: CongestionType.LOW,
    stake: 100,
    delegator: {
      validator: 0,
    },
  } as ManaCalculatorProps);

  function handleDelete(id: number) {
    const validators = state.validators.filter((_, i) => i !== id);
    setState({ ...state, validators });
  }

  function handleStakeChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          lockedStake: i === id ? value : validator.lockedStake,
        };
      }),
    });
  }

  function handleDelegatedStakeChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          delegatedStake: i === id ? value : validator.delegatedStake,
        };
      }),
    });
  }

  function handlePFChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          performanceFactor: i === id ? value : validator.performanceFactor,
        };
      }),
    });
  }

  function handleFCChange(value: number, id: number) {
    setState({
      ...state,
      validators: state.validators.map((validator, i) => {
        return {
          ...validator,
          fixedCost: i === id ? value : validator.fixedCost,
        };
      }),
    });
  }

  function handleOwnStakeChange(value: number) {
    setState({
      ...state,
      stake: value,
    });
  }

  function handleValidatorChange(value: number) {
    setState({
      ...state,
      delegator: { ...state.delegator, validator: value },
    });
  }

  function handleCongestionChange(value: CongestionType) {
    setState({
      ...state,
      congestion: value,
    });
  }

  const epoch = 1154 + 1;
  const manaGeneratedPerEpoch = calculateManaGeneratedPerEpoch(
    state.stake,
    state.delegator.validator,
    null,
    state.validators,
    epoch,
    'Delegator',
  );
  const passiveRewards = calculatePassiveRewards(state.stake, epoch);

  const grantedTPS = calculateTPS(manaGeneratedPerEpoch, state.congestion);
  const additionalTPS = calculateTPS(passiveRewards, state.congestion);
  const totalTPS = grantedTPS + additionalTPS;

  return (
    <Tabs>
      <TabItem value='tps' label='TPS'>
        <div className='row'>
          {state.validators.map((validator, i) => (
            <div className='col col--4' key={i}>
              <ValidatorCard
                validator={validator}
                handleDelete={handleDelete}
                handleStakeChange={handleStakeChange}
                handleDelegatedStakeChange={handleDelegatedStakeChange}
                handleFCChange={handleFCChange}
                handlePFChange={handlePFChange}
                id={i}
              />
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col col--2'>You are a:</div>
        </div>
        <Tabs>
          <TabItem value='Delegator' label='Delegator'>
            <DelegatorForm
              stake={state.stake}
              validators={state.validators}
              handleOwnStakeChange={handleOwnStakeChange}
              handleValidatorChange={handleValidatorChange}
            />
            <OutputForm
              manaGeneratedPerEpoch={manaGeneratedPerEpoch}
              passiveRewards={passiveRewards}
              totalTPS={totalTPS}
              handleCongestionChange={handleCongestionChange}
            />
          </TabItem>
          <TabItem value='Validator' label='Validator'>
            <ValidatorForm />
          </TabItem>
        </Tabs>
      </TabItem>
      <TabItem value='mana' label='Mana'>
        <div>Mana</div>
      </TabItem>
    </Tabs>
  );
}

function DelegatorForm({
  stake,
  validators,
  handleOwnStakeChange,
  handleValidatorChange,
}: {
  stake: number;
  validators: ValidatorProps[];
  handleOwnStakeChange: ChangeEvent;
  handleValidatorChange: ChangeEvent;
}) {
  // Create options for validator select from validators array
  const validatorOptions = validators.map((_, i) => {
    return { value: i, label: `Validator ${i + 1}` };
  });

  return (
    <div>
      <div className='row'>
        <div className='col col--4'>Validator you delegate to:</div>
        <Select
          defaultValue={{ value: 0, label: `Validator 1` }}
          onChange={(e) => {
            handleValidatorChange(e.value);
          }}
          className='col col--4'
          options={validatorOptions}
        />
      </div>
      <div className='row'>
        <label className='col col--4'>Amount you delegate:</label>
        <input
          className='col col--4'
          value={stake}
          onChange={(e) => handleOwnStakeChange(Number(e.target.value))}
        ></input>
      </div>
    </div>
  );
}

function ValidatorForm() {
  return <div>Validator</div>;
}

function OutputForm({
  manaGeneratedPerEpoch,
  passiveRewards,
  totalTPS,
  handleCongestionChange,
}: {
  manaGeneratedPerEpoch: number;
  passiveRewards: number;
  totalTPS: number;
  handleCongestionChange: ChangeCongestionEvent;
}) {
  return (
    <div>
      <div className='row'>
        <div className='col col--4'>Mana generation per epoch:</div>
        <div className='col col--4'>{manaGeneratedPerEpoch}</div>
      </div>
      <div className='row'>
        <div className='col col--4'>Additional rewards per epoch:</div>
        <div className='col col--4'>{passiveRewards}</div>
      </div>
      <div className='row'>
        <div className='col col--4'>Total TPS granted with</div>
        <Select
          className='col col--4'
          onChange={(e) => {
            handleCongestionChange(e.value);
          }}
          defaultValue={{ value: CongestionType.LOW, label: 'Low Congestion' }}
          options={[
            { value: CongestionType.LOW, label: 'Low Congestion' },
            { value: CongestionType.MEDIUM, label: 'Stable Price' },
            { value: CongestionType.HIGH, label: 'Extreme Congestion' },
          ]}
        />
        <div className='col col--4'>{totalTPS}</div>
      </div>
    </div>
  );
}
