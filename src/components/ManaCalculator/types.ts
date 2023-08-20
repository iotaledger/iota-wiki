import {
  RMC_EXTREME_CONGESTION,
  RMC_LOW_CONGESTION,
  RMC_STABLE_CONGESTION,
} from './utils';

export interface ValidatorProps {
  lockedStake: number;
  delegatedStake: number;
  performanceFactor: number;
  fixedCost: number;
}

export interface ValiatorParameters {
  shareOfYourStakeLocked: number;
  attractedNewDelegatedStake: number;
  attractedDelegatedStakeFromOtherPools: number;
  yourFixedCost: number;
  yourPerformance: number;
}

export enum UserType {
  DELEGATOR,
  VALIDATOR,
}

export interface ManaCalculatorProps {
  validators: ValidatorProps[];
  userType: UserType;
  congestion: CongestionType;
  delegator: {
    validator: number;
  };
  stake: number;
}

export enum CongestionType {
  LOW = RMC_LOW_CONGESTION,
  MEDIUM = RMC_STABLE_CONGESTION,
  HIGH = RMC_EXTREME_CONGESTION,
}

export type DeleteValidatorEvent = (id: number) => void;
export type ChangeValidatorEvent = (value: number, id: number) => void;
export type ChangeEvent = (value: number) => void;
export type ChangeCongestionEvent = (value: CongestionType) => void;
