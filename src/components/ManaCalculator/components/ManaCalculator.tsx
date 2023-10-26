import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";
import {
  calculateManaRewards,
  calculatePassiveRewards,
  calculateTPS,
} from "../calculator";
import {
  ChangeEvent,
  ChangeValidatorEvent,
  CongestionType,
  DeleteValidatorEvent,
  ManaCalculatorProps,
  NetworkType,
  NewValidatorEvent,
  UserType,
  ValidatorParameters,
  ValidatorProps,
} from "../types";
import { Details } from "@docusaurus/theme-common/Details";
import { fromMicro, getNetworkSupply, toMicro } from "../utils";

function getDefaultParameters(network: NetworkType): ManaCalculatorProps {
  return {
    initialEpoch: 0,
    finalEpoch: 100,
    validators: [
      {
        lockedStake: toMicro(100),
        delegatedStake: toMicro(0),
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
      {
        lockedStake: toMicro(100),
        delegatedStake: toMicro(0),
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
      {
        lockedStake: toMicro(100),
        delegatedStake: toMicro(0),
        performanceFactor: 1.0,
        fixedCost: 0.0,
      },
    ],
    userType: UserType.DELEGATOR,
    congestion: CongestionType.LOW,
    stake: toMicro(100),
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
    network,
  } as ManaCalculatorProps;
}

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
    <div className="col col--4">
      <div className="table">
        <div className="row">
          <div className="col col--9">Validator {id + 1}</div>

          <button
            className=" col col--3 button button--danger  align-right"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </div>
        <div className="row">
          <div className="col col--8">Stake:</div>
          <input
            className="col col--4 align-right"
            value={fromMicro(validator.lockedStake)}
            onChange={(e) =>
              handleStakeChange(toMicro(Number(e.target.value)), id)}
          >
          </input>
        </div>
        <div className="row">
          <div className="col col--8">Delegated:</div>
          <input
            className="col col--4 align-right"
            value={fromMicro(validator.delegatedStake)}
            onChange={(e) =>
              handleDelegatedStakeChange(toMicro(Number(e.target.value)), id)}
          >
          </input>
        </div>
        <div className="row">
          <div className="col col--8">PF:</div>
          <input
            className="col col--4 align-right"
            type="number"
            step="0.01"
            value={validator.performanceFactor}
            onChange={(e) => handlePFChange(Number(e.target.value), id)}
          >
          </input>
        </div>
        <div className="row">
          <div className="col col--8">FC:</div>
          <input
            className="col col--4 align-right"
            type="number"
            step="0.01"
            value={validator.fixedCost}
            onChange={(e) => handleFCChange(Number(e.target.value), id)}
          >
          </input>
        </div>
      </div>
    </div>
  );
}

function useResults(state: ManaCalculatorProps) {
  const passiveRewards = calculatePassiveRewards(
    state.stake,
    state.initialEpoch,
    state.finalEpoch,
  );

  let additionalTPS = calculateTPS(passiveRewards, state.congestion);

  if (state.userType == UserType.DELEGATOR) {
    const manaGenerated = calculateManaRewards(
      state.stake,
      state.delegator.validator,
      null,
      state.validators,
      state.initialEpoch,
      state.finalEpoch,
      state.userType,
      getNetworkSupply(state.network),
    );

    let passiveRewards = calculatePassiveRewards(
      state.stake,
      state.initialEpoch,
      state.finalEpoch,
    );

    let grantedTPS = calculateTPS(manaGenerated, state.congestion);

    let totalTPS = grantedTPS + additionalTPS;

    return {
      manaGenerated,
      passiveRewards,
      totalTPS,
    };
  } else {
    const manaGenerated = calculateManaRewards(
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
      state.userType,
      getNetworkSupply(state.network),
    );

    const grantedTPS = calculateTPS(
      manaGenerated,
      state.congestion,
    );

    const totalTPS = grantedTPS + additionalTPS;
    return {
      manaGenerated,
      passiveRewards,
      totalTPS,
    };
  }
}

export function ManaCalculator() {
  const [state, setState] = useState(getDefaultParameters(NetworkType.IOTA));

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

  function handleNetworkChange(value: NetworkType) {
    setState({
      ...getDefaultParameters(value),
    });
  }

  function handleUserChange(value: UserType) {
    setState({
      ...state,
      userType: value,
    });
  }

  function handleAddValidator(value: ValidatorProps) {
    state.validators.push(value);
    setState({ ...state });
  }

  const results = useResults(state);

  return (
    <>
      <NetworkSection handleNetworkChange={handleNetworkChange} />
      <RoleSection
        state={state}
        handleAttractedDelegatedStakeFromOtherPoolsChange={handleAttractedDelegatedStakeFromOtherPoolsChange}
        handleAttractedNewDelegatedStakeChange={handleAttractedNewDelegatedStakeChange}
        handleOwnFCChange={handleOwnFCChange}
        handleOwnPFChange={handleOwnPFChange}
        handleOwnStakeChange={handleOwnStakeChange}
        handleShareOfYourStakeLockedChange={handleShareOfYourStakeLockedChange}
        handleUserChange={handleUserChange}
        handleValidatorChange={handleValidatorChange}
      />
      <OtherParametersSection
        state={state}
        handleCongestionChange={handleCongestionChange}
        handleFinalEpochChange={handleFinalEpochChange}
        handleInitialEpochChange={handleInitialEpochChange}
      />
      <AdvancedSettingsValidator
        state={state}
        handleAddValidator={handleAddValidator}
        handleDelegatedStakeChange={handleDelegatedStakeChange}
        handleDelete={handleDelete}
        handleFCChange={handleFCChange}
        handlePFChange={handlePFChange}
        handleStakeChange={handleStakeChange}
      />
      <br />
      <OutputForm
        manaGeneratedPerEpoch={results.manaGenerated}
        passiveRewards={results.passiveRewards}
        totalTPS={results.totalTPS}
      />
    </>
  );
}

function AdvancedSettingsValidator({
  state,
  handleAddValidator,
  handleDelete,
  handleDelegatedStakeChange,
  handleFCChange,
  handlePFChange,
  handleStakeChange,
}: {
  state: ManaCalculatorProps;
  handleAddValidator: NewValidatorEvent;
  handleDelete: DeleteValidatorEvent;
  handleStakeChange: ChangeValidatorEvent;
  handleDelegatedStakeChange: ChangeValidatorEvent;
  handlePFChange: ChangeValidatorEvent;
  handleFCChange: ChangeValidatorEvent;
}) {
  function onAddValidator() {
    handleAddValidator({
      lockedStake: 100,
      delegatedStake: 0,
      performanceFactor: 1.0,
      fixedCost: 0.0,
    });
  }
  return (
    <Details summary="Advanced Settings - Validators">
      <div className="row">
        {state.validators.map((validator, i) => (
          <ValidatorCard
            validator={validator}
            handleDelete={handleDelete}
            handleStakeChange={handleStakeChange}
            handleDelegatedStakeChange={handleDelegatedStakeChange}
            handleFCChange={handleFCChange}
            handlePFChange={handlePFChange}
            id={i}
            key={i}
          />
        ))}
      </div>
      <div className="row">
        <button
          className="button button--danger col--4 add-button"
          onClick={onAddValidator}
        >
          +
        </button>
      </div>
    </Details>
  );
}

function OtherParametersSection({
  state,
  handleCongestionChange,
  handleInitialEpochChange,
  handleFinalEpochChange,
}: {
  state: ManaCalculatorProps;
  handleCongestionChange: ChangeEvent;
  handleInitialEpochChange: ChangeEvent;
  handleFinalEpochChange: ChangeEvent;
}) {
  return (
    <div className="grouped-form">
      <p className="align-center">Other parameters</p>
      <label className="inlined-label">Congestion</label>
      <Select
        className="compact inlined"
        classNamePrefix="react-select"
        onChange={(e) => {
          handleCongestionChange(e.value);
        }}
        defaultValue={{
          value: CongestionType.LOW,
          label: "Low Congestion",
        }}
        options={[
          { value: CongestionType.LOW, label: "Low Congestion" },
          { value: CongestionType.MEDIUM, label: "Stable Price" },
          { value: CongestionType.HIGH, label: "Extreme Congestion" },
        ]}
      />
      <br />
      <label className="inlined-label">Initial epoch</label>
      <input
        className="compact inlined"
        value={state.initialEpoch}
        onChange={(e) => handleInitialEpochChange(Number(e.target.value))}
      >
      </input>
      <br />
      <label className="inlined-label">Final epoch</label>
      <input
        className="compact inlined"
        value={state.finalEpoch}
        onChange={(e) => handleFinalEpochChange(Number(e.target.value))}
      >
      </input>
    </div>
  );
}

function RoleSection({
  state,
  handleOwnStakeChange,
  handleUserChange,
  handleOwnPFChange,
  handleShareOfYourStakeLockedChange,
  handleAttractedNewDelegatedStakeChange,
  handleAttractedDelegatedStakeFromOtherPoolsChange,
  handleValidatorChange,
  handleOwnFCChange,
}: {
  state: ManaCalculatorProps;
  handleOwnStakeChange: ChangeEvent;
  handleUserChange: ChangeEvent;
  handleOwnPFChange: ChangeEvent;
  handleShareOfYourStakeLockedChange: ChangeEvent;
  handleAttractedNewDelegatedStakeChange: ChangeEvent;
  handleAttractedDelegatedStakeFromOtherPoolsChange: ChangeEvent;
  handleValidatorChange: ChangeEvent;
  handleOwnFCChange: ChangeEvent;
}) {
  const validatorOptions = state.validators.map((_, i) => {
    return { value: i, label: `Validator ${i + 1}` };
  });

  return (
    <div className="grouped-form">
      <p className="align-center">Role configuration</p>
      <label className="inlined-label">Your Role</label>
      <Select
        className="compact inlined"
        defaultValue={{ value: UserType.DELEGATOR, label: `Delegator` }}
        onChange={(e) => {
          handleUserChange(e.value);
        }}
        classNamePrefix="react-select"
        options={[
          { value: UserType.DELEGATOR, label: `Delegator` },
          { value: UserType.VALIDATOR, label: `Validator` },
        ]}
      />
      <br />
      {state.userType === UserType.VALIDATOR
        ? (
          <>
            <label className="inlined-label">Stake</label>
            <input
              className="compact inlined"
              value={fromMicro(state.stake)}
              onChange={(e) =>
                handleOwnStakeChange(toMicro(Number(e.target.value)))}
            >
            </input>
            <br />
            <ValidatorSettings
              performanceFactor={state.validator.performanceFactor}
              fixedCost={state.validator.fixedCost}
              shareOfYourStakeLocked={state.validator.shareOfYourStakeLocked}
              attractedNewDelegatedStake={state.validator
                .attractedNewDelegatedStake}
              attractedDelegatedStakeFromOtherPools={state.validator
                .attractedDelegatedStakeFromOtherPools}
              handleOwnPFChange={handleOwnPFChange}
              handleOwnFCChange={handleOwnFCChange}
              handleShareOfYourStakeLockedChange={handleShareOfYourStakeLockedChange}
              handleAttractedNewDelegatedStakeChange={handleAttractedNewDelegatedStakeChange}
              handleAttractedDelegatedStakeFromOtherPoolsChange={handleAttractedDelegatedStakeFromOtherPoolsChange}
            />
          </>
        )
        : (
          <>
            <label className="inlined-label">Delegating to</label>
            <Select
              className="compact inlined"
              defaultValue={{ value: 0, label: `Validator 1` }}
              onChange={(e) => {
                handleValidatorChange(e.value);
              }}
              classNamePrefix="react-select"
              options={validatorOptions}
            />
            <br />
            <label className="inlined-label">Delegated amount</label>
            <input
              className="col col--4"
              value={fromMicro(state.stake)}
              onChange={(e) =>
                handleOwnStakeChange(toMicro(Number(e.target.value)))}
            >
            </input>
          </>
        )}
    </div>
  );
}

function NetworkSection({ handleNetworkChange }: {
  handleNetworkChange: ChangeEvent;
}) {
  return (
    <div className="grouped-form">
      <p className="align-center">Network configuration</p>
      <label className="inlined-label">Your Network</label>
      <Select
        className="compact inlined"
        defaultValue={{ value: NetworkType.IOTA, label: `IOTA` }}
        onChange={(e) => {
          handleNetworkChange(e.value);
        }}
        classNamePrefix="react-select"
        options={[
          { value: NetworkType.IOTA, label: `IOTA` },
          { value: NetworkType.SHIMMER, label: `Shimmer` },
        ]}
      />
    </div>
  );
}

function ValidatorSettings({
  performanceFactor,
  fixedCost,
  shareOfYourStakeLocked,
  attractedNewDelegatedStake,
  attractedDelegatedStakeFromOtherPools,
  handleOwnPFChange,
  handleOwnFCChange,
  handleShareOfYourStakeLockedChange,
  handleAttractedNewDelegatedStakeChange,
  handleAttractedDelegatedStakeFromOtherPoolsChange,
}: {
  performanceFactor: number;
  fixedCost: number;
  shareOfYourStakeLocked: number;
  attractedNewDelegatedStake: number;
  attractedDelegatedStakeFromOtherPools: number;
  handleOwnPFChange: ChangeEvent;
  handleOwnFCChange: ChangeEvent;
  handleShareOfYourStakeLockedChange: ChangeEvent;
  handleAttractedNewDelegatedStakeChange: ChangeEvent;
  handleAttractedDelegatedStakeFromOtherPoolsChange: ChangeEvent;
}) {
  return (
    <div className="table">
      <Details summary="Validator Settings">
        <div className="row ">
          <div className="col col--6">Performance factor:</div>
          <input
            className="col col--6 align-right"
            type="number"
            step="0.01"
            value={performanceFactor}
            onChange={(e) => handleOwnPFChange(Number(e.target.value))}
          >
          </input>
        </div>

        <div className="row ">
          <div className="col col--6">Fixed costs:</div>
          <input
            className="col col--6 align-right"
            type="number"
            step="0.01"
            value={fixedCost}
            onChange={(e) => handleOwnFCChange(Number(e.target.value))}
          >
          </input>
        </div>
        <div className="row ">
          <div className="col col--6">Share of your stake locked:</div>
          <input
            className="col col--6 align-right "
            value={shareOfYourStakeLocked}
            onChange={(e) =>
              handleShareOfYourStakeLockedChange(Number(e.target.value))}
          >
          </input>
        </div>
        <div className="row ">
          <div className="col col--6">Attracted new delegated stake:</div>
          <input
            className="col col--6 align-right"
            value={attractedNewDelegatedStake}
            onChange={(e) =>
              handleAttractedNewDelegatedStakeChange(Number(e.target.value))}
          >
          </input>
        </div>
        <div className="row ">
          <div className="col col--6">
            Attracted delegated stake from other pools:
          </div>

          <input
            className="col col--6 align-right"
            value={attractedDelegatedStakeFromOtherPools}
            onChange={(e) =>
              handleAttractedDelegatedStakeFromOtherPoolsChange(
                Number(e.target.value),
              )}
          >
          </input>
        </div>
      </Details>
    </div>
  );
}

function OutputForm({
  manaGeneratedPerEpoch,
  passiveRewards,
  totalTPS,
}: {
  manaGeneratedPerEpoch: number;
  passiveRewards: number;
  totalTPS: number;
}) {
  return (
    <div className="table">
      <div className="row ">
        <div className="col col--6">Mana generation (by holding)</div>
        <div className="col col--6 align-right">
          {fromMicro(passiveRewards)}
        </div>
      </div>
      <div className="row ">
        <div className="col col--6">Mana rewards (delegation/validation)</div>
        <div className="col col--6 align-right">
          {fromMicro(manaGeneratedPerEpoch)}
        </div>
      </div>

      <div className="row ">
        <div className="col col--6">Total TPS granted with</div>
        <div className="col col--6 align-right">{totalTPS}</div>
      </div>
    </div>
  );
}
