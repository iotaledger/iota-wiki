export interface ValidatorProps {
  lockedStake: number;
  delegatedStake: number;
  performanceFactor: number;
  fixedCost: number;
  excluded?: boolean;
}

export interface ValidatorParameters {
  shareOfYourStakeLocked: number;
  attractedNewDelegatedStake: number;
  attractedDelegatedStakeFromOtherPools: number;
  fixedCost: number;
  performanceFactor: number;
}
