import { CongestionType, NetworkType, UserType } from '../enums';
import { ValidatorProps } from './validator.type';

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
  stakedTokens: number;
  delegatedTokens: number;
  heldTokens: number;
  network: NetworkType;
}
