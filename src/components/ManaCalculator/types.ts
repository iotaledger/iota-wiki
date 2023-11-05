export interface ValidatorProps {
  lockedStake: number;
  delegatedStake: number;
  performanceFactor: number;
  fixedCost: number;
}

export interface ValidatorParameters {
  shareOfYourStakeLocked: number;
  attractedNewDelegatedStake: number;
  attractedDelegatedStakeFromOtherPools: number;
  fixedCost: number;
  performanceFactor: number;
}

export enum UserType {
  DELEGATOR,
  VALIDATOR,
}

export enum NetworkType {
  IOTA,
  SHIMMER,
}

export interface ManaCalculatorProps {
  epoch: number;
  initialEpoch: number;
  finalEpoch: number;
  validators: ValidatorProps[];
  userType: UserType;
  congestion: CongestionType;
  delegator: {
    validator: number;
  };
  validator: {
    shareOfYourStakeLocked: number;
    attractedNewDelegatedStake: number;
    attractedDelegatedStakeFromOtherPools: number;
    fixedCost: number;
    performanceFactor: number;
  };
  stake: number;
  network: NetworkType;
}

export enum CongestionType {
  LOW = 100000,
  MEDIUM = 9000000,
  HIGH = 500000000,
}

export type DeleteValidatorEvent = (id: number) => void;
export type ChangeValidatorEvent = (value: number, id: number) => void;
export type ChangeEvent = (value: number) => void;
export type ChangeCongestionEvent = (value: CongestionType) => void;
export type NewValidatorEvent = (value: ValidatorProps) => void;
