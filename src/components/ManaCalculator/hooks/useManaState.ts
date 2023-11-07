import { createContext, useContext } from 'react';
import {
  FINAL_EPOCH,
  INITIAL_EPOCH,
  IOTA_HOLD,
  IOTA_STAKED_OR_DELEGATED,
  SHIMMER_HOLD,
  SHIMMER_STAKED_OR_DELEGATED,
} from '../constants';
import { CongestionType, NetworkType, UserType } from '../enums';
import { ManaCalculatorProps, ManaState, ValidatorProps } from '../types';
import {
  getNetworkCongestion,
  getNetworkGenerationPerSlot,
  toMicro,
} from '../utils';

export const ManaStateContext = createContext(null);

export function useManaState() {
  const { setState, state } = useContext<{
    setState: (state: ManaCalculatorProps) => void;
    state: ManaCalculatorProps;
  }>(ManaStateContext);

  return useGivenManaState(state, setState);
}

export function useGivenManaState(
  state: ManaCalculatorProps,
  setState: (state: ManaCalculatorProps) => void,
) {
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
      stakedOrDelegatedTokens: value,
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

  function handleOwnHoldChange(value: number) {
    setState({ ...state, heldTokens: value });
  }

  const congestionAmount = getNetworkCongestion(
    state.network,
    state.congestion,
  );
  const generationPerSlot = getNetworkGenerationPerSlot(state.network);

  return {
    state: {
      ...state,
      congestionAmount,
      generationPerSlot,
    } as ManaState,
    congestionAmount,
    handleDelete,
    handleStakeChange,
    handleAddValidator,
    handleAttractedDelegatedStakeFromOtherPoolsChange,
    handleAttractedNewDelegatedStakeChange,
    handleCongestionChange,
    handleDelegatedStakeChange,
    handleFCChange,
    handleInitialEpochChange,
    handleNetworkChange,
    handleFinalEpochChange,
    handleOwnFCChange,
    handleOwnPFChange,
    handleUserChange,
    handleShareOfYourStakeLockedChange,
    handleOwnStakeChange,
    handlePFChange,
    handleValidatorChange,
    handleOwnHoldChange,
  };
}

export function getDefaultParameters(
  network: NetworkType,
): ManaCalculatorProps {
  const networkParams = {
    [NetworkType.IOTA]: {
      stakedOrDelegatedTokens: toMicro(IOTA_STAKED_OR_DELEGATED),
      heldTokens: toMicro(IOTA_HOLD),
    },
    [NetworkType.SHIMMER]: {
      stakedOrDelegatedTokens: toMicro(SHIMMER_STAKED_OR_DELEGATED),
      heldTokens: toMicro(SHIMMER_HOLD),
    },
  };

  return {
    ...networkParams[network],
    initialEpoch: INITIAL_EPOCH,
    finalEpoch: FINAL_EPOCH,
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
    delegator: {
      validator: 0,
    },
    validator: {
      performanceFactor: 1.0,
      fixedCost: 0.0,
      shareOfYourStakeLocked: 100.0,
      attractedNewDelegatedStake: 0.0, // Should be the 1.5x of the user staked amount
      attractedDelegatedStakeFromOtherPools: 0.1,
    },
    network,
  } as ManaCalculatorProps;
}
