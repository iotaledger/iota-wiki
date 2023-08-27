import React, { useState } from 'react';
import Select from 'react-select';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {
  calculateManaRewards,
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
  ValidatorParameters,
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
    epoch: 1154 + 1,
    initialEpoch: 0,
    finalEpoch: 100,
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
    validator: {
      performanceFactor: 1.0,
      fixedCost: 0.0,
      shareOfYourStakeLocked: 1.0,
      attractedNewDelegatedStake: 0.0,
      attractedDelegatedStakeFromOtherPools: 0.1,
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

  function handleOwnPFChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, performanceFactor: value },
    });
  }

  function handleOwnFCChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, fixedCost: value },
    });
  }

  function handleShareOfYourStakeLockedChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, shareOfYourStakeLocked: value },
    });
  }

  function handleAttractedNewDelegatedStakeChange(value: number) {
    setState({
      ...state,
      validator: { ...state.validator, attractedNewDelegatedStake: value },
    });
  }

  function handleAttractedDelegatedStakeFromOtherPoolsChange(value: number) {
    setState({
      ...state,
      validator: {
        ...state.validator,
        attractedDelegatedStakeFromOtherPools: value,
      },
    });
  }

  function handleEpochChange(value: number) {
    setState({
      ...state,
      epoch: value,
    });
  }

  function handleInitialEpochChange(value: number) {
    setState({
      ...state,
      initialEpoch: value,
    });
  }

  function handleFinalEpochChange(value: number) {
    setState({
      ...state,
      finalEpoch: value,
    });
  }

  // Calulate Mana rewards for delegator and validator
  let delegatorResults = {
    manaGeneratedPerEpoch: 0,
    passiveRewards: 0,
    totalTPS: 0,
  };
  let validatorResults = {
    manaGeneratedPerEpoch: 0,
    passiveRewards: 0,
    totalTPS: 0,
  };
  {
    let manaGeneratedPerEpoch = calculateManaRewards(
      state.stake,
      state.delegator.validator,
      null,
      state.validators,
      state.epoch,
      null,
      'Delegator',
    );
    let passiveRewards = calculatePassiveRewards(
      state.stake,
      state.epoch,
      state.epoch + 1,
    );

    let grantedTPS = calculateTPS(manaGeneratedPerEpoch, state.congestion);
    let additionalTPS = calculateTPS(passiveRewards, state.congestion);
    let totalTPS = grantedTPS + additionalTPS;

    delegatorResults = {
      manaGeneratedPerEpoch: manaGeneratedPerEpoch,
      passiveRewards: passiveRewards,
      totalTPS: totalTPS,
    };

    manaGeneratedPerEpoch = calculateManaRewards(
      state.stake,
      state.delegator.validator,
      {
        performanceFactor: state.validator.performanceFactor,
        fixedCost: state.validator.fixedCost,
        shareOfYourStakeLocked: state.validator.shareOfYourStakeLocked,
        attractedNewDelegatedStake: state.validator.attractedNewDelegatedStake,
        attractedDelegatedStakeFromOtherPools:
          state.validator.attractedDelegatedStakeFromOtherPools,
      } as ValidatorParameters,
      state.validators,
      state.epoch,
      null,
      'Validator',
    );
    grantedTPS = calculateTPS(manaGeneratedPerEpoch, state.congestion);
    totalTPS = grantedTPS + additionalTPS;

    validatorResults.manaGeneratedPerEpoch = manaGeneratedPerEpoch;
    validatorResults.passiveRewards = passiveRewards;
    validatorResults.totalTPS = totalTPS;
  }

  // Calulate Mana rewards for delegator and validator
  let delegatorAccumulateResults = {
    manaGenerated: 0,
    passiveRewards: 0,
    totalTPS: 0,
  };
  let validatorAccumulateResults = {
    manaGenerated: 0,
    passiveRewards: 0,
    totalTPS: 0,
  };
  {
    let manaGenerated = calculateManaRewards(
      state.stake,
      state.delegator.validator,
      null,
      state.validators,
      state.initialEpoch,
      state.finalEpoch,
      'Delegator',
    );
    let passiveRewards = calculatePassiveRewards(
      state.stake,
      state.initialEpoch,
      state.finalEpoch,
    );

    let grantedTPS = calculateTPS(manaGenerated, state.congestion);
    let additionalTPS = calculateTPS(passiveRewards, state.congestion);
    let totalTPS = grantedTPS + additionalTPS;

    delegatorAccumulateResults.manaGenerated = manaGenerated;
    delegatorAccumulateResults.passiveRewards = passiveRewards;
    delegatorAccumulateResults.totalTPS = totalTPS;

    manaGenerated = calculateManaRewards(
      state.stake,
      state.delegator.validator,
      {
        performanceFactor: state.validator.performanceFactor,
        fixedCost: state.validator.fixedCost,
        shareOfYourStakeLocked: state.validator.shareOfYourStakeLocked,
        attractedNewDelegatedStake: state.validator.attractedNewDelegatedStake,
        attractedDelegatedStakeFromOtherPools:
          state.validator.attractedDelegatedStakeFromOtherPools,
      } as ValidatorParameters,
      state.validators,
      state.initialEpoch,
      state.finalEpoch,
      'Validator',
    );
    grantedTPS = calculateTPS(manaGenerated, state.congestion);
    totalTPS = grantedTPS + additionalTPS;

    validatorAccumulateResults.manaGenerated = manaGenerated;
    validatorAccumulateResults.passiveRewards = passiveRewards;
    validatorAccumulateResults.totalTPS = totalTPS;
  }

  return (
    <Tabs>
      <TabItem value='tps' label='TPS'>
        <div className='row'>
          <label className='col col--4'>Epoch:</label>
          <input
            className='col col--4'
            value={state.epoch}
            onChange={(e) => handleEpochChange(Number(e.target.value))}
          ></input>
        </div>
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
              manaGeneratedPerEpoch={delegatorResults.manaGeneratedPerEpoch}
              passiveRewards={delegatorResults.passiveRewards}
              totalTPS={delegatorResults.totalTPS}
              handleCongestionChange={handleCongestionChange}
            />
          </TabItem>
          <TabItem value='Validator' label='Validator'>
            <ValidatorForm
              stake={state.stake}
              performanceFactor={state.validator.performanceFactor}
              fixedCost={state.validator.fixedCost}
              shareOfYourStakeLocked={state.validator.shareOfYourStakeLocked}
              attractedNewDelegatedStake={
                state.validator.attractedNewDelegatedStake
              }
              attractedDelegatedStakeFromOtherPools={
                state.validator.attractedDelegatedStakeFromOtherPools
              }
              handleOwnStakeChange={handleOwnStakeChange}
              handleOwnPFChange={handleOwnPFChange}
              handleOwnFCChange={handleOwnFCChange}
              handleShareOfYourStakeLockedChange={
                handleShareOfYourStakeLockedChange
              }
              handleAttractedNewDelegatedStakeChange={
                handleAttractedNewDelegatedStakeChange
              }
              handleAttractedDelegatedStakeFromOtherPoolsChange={
                handleAttractedDelegatedStakeFromOtherPoolsChange
              }
            />
            <OutputForm
              manaGeneratedPerEpoch={validatorResults.manaGeneratedPerEpoch}
              passiveRewards={validatorResults.passiveRewards}
              totalTPS={validatorResults.totalTPS}
              handleCongestionChange={handleCongestionChange}
            />
          </TabItem>
        </Tabs>
      </TabItem>
      <TabItem value='mana' label='Mana accumulation'>
        <div className='row'>
          <label className='col col--3'>Initial epoch:</label>
          <input
            className='col col--3'
            value={state.initialEpoch}
            onChange={(e) => handleInitialEpochChange(Number(e.target.value))}
          ></input>
          <label className='col col--3'>Final epoch:</label>
          <input
            className='col col--3'
            value={state.finalEpoch}
            onChange={(e) => handleFinalEpochChange(Number(e.target.value))}
          ></input>
        </div>
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
              manaGeneratedPerEpoch={delegatorAccumulateResults.manaGenerated}
              passiveRewards={delegatorAccumulateResults.passiveRewards}
              totalTPS={delegatorAccumulateResults.totalTPS}
              handleCongestionChange={handleCongestionChange}
            />
          </TabItem>
          <TabItem value='Validator' label='Validator'>
            <ValidatorForm
              stake={state.stake}
              performanceFactor={state.validator.performanceFactor}
              fixedCost={state.validator.fixedCost}
              shareOfYourStakeLocked={state.validator.shareOfYourStakeLocked}
              attractedNewDelegatedStake={
                state.validator.attractedNewDelegatedStake
              }
              attractedDelegatedStakeFromOtherPools={
                state.validator.attractedDelegatedStakeFromOtherPools
              }
              handleOwnStakeChange={handleOwnStakeChange}
              handleOwnPFChange={handleOwnPFChange}
              handleOwnFCChange={handleOwnFCChange}
              handleShareOfYourStakeLockedChange={
                handleShareOfYourStakeLockedChange
              }
              handleAttractedNewDelegatedStakeChange={
                handleAttractedNewDelegatedStakeChange
              }
              handleAttractedDelegatedStakeFromOtherPoolsChange={
                handleAttractedDelegatedStakeFromOtherPoolsChange
              }
            />
            <OutputForm
              manaGeneratedPerEpoch={validatorResults.manaGeneratedPerEpoch}
              passiveRewards={validatorResults.passiveRewards}
              totalTPS={validatorResults.totalTPS}
              handleCongestionChange={handleCongestionChange}
            />
          </TabItem>
        </Tabs>
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

function ValidatorForm({
  stake,
  performanceFactor,
  fixedCost,
  shareOfYourStakeLocked,
  attractedNewDelegatedStake,
  attractedDelegatedStakeFromOtherPools,
  handleOwnStakeChange,
  handleOwnPFChange,
  handleOwnFCChange,
  handleShareOfYourStakeLockedChange,
  handleAttractedNewDelegatedStakeChange,
  handleAttractedDelegatedStakeFromOtherPoolsChange,
}: {
  stake: number;
  performanceFactor: number;
  fixedCost: number;
  shareOfYourStakeLocked: number;
  attractedNewDelegatedStake: number;
  attractedDelegatedStakeFromOtherPools: number;
  handleOwnStakeChange: ChangeEvent;
  handleOwnPFChange: ChangeEvent;
  handleOwnFCChange: ChangeEvent;
  handleShareOfYourStakeLockedChange: ChangeEvent;
  handleAttractedNewDelegatedStakeChange: ChangeEvent;
  handleAttractedDelegatedStakeFromOtherPoolsChange: ChangeEvent;
}) {
  return (
    <div>
      <div className='row'>
        <label className='col col--4'>Stake:</label>
        <input
          className='col col--4'
          value={stake}
          onChange={(e) => handleOwnStakeChange(Number(e.target.value))}
        ></input>
      </div>
      <div className='row'>
        <label className='col col--4'>Performance factor:</label>
        <input
          className='col col--4'
          value={performanceFactor}
          onChange={(e) => handleOwnPFChange(Number(e.target.value))}
        ></input>
      </div>
      <div className='row'>
        <label className='col col--4'>Fixed costs:</label>
        <input
          className='col col--4'
          value={fixedCost}
          onChange={(e) => handleOwnFCChange(Number(e.target.value))}
        ></input>
      </div>
      <div className='row'>
        <label className='col col--4'>Share of your stake locked:</label>
        <input
          className='col col--4'
          value={shareOfYourStakeLocked}
          onChange={(e) =>
            handleShareOfYourStakeLockedChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div className='row'>
        <label className='col col--4'>Attracted new delegated stake:</label>
        <input
          className='col col--4'
          value={attractedNewDelegatedStake}
          onChange={(e) =>
            handleAttractedNewDelegatedStakeChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div className='row'>
        <label className='col col--4'>
          Attracted delegated stake from other pools:
        </label>
        <input
          className='col col--4'
          value={attractedDelegatedStakeFromOtherPools}
          onChange={(e) =>
            handleAttractedDelegatedStakeFromOtherPoolsChange(
              Number(e.target.value),
            )
          }
        ></input>
      </div>
    </div>
  );
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
