# Interface: BeginStakingParams

Options for beginning staking.

## Table of contents

### Properties

- [accountId](BeginStakingParams.md#accountid)
- [stakedAmount](BeginStakingParams.md#stakedamount)
- [fixedCost](BeginStakingParams.md#fixedcost)
- [stakingPeriod](BeginStakingParams.md#stakingperiod)

## Properties

### accountId

• **accountId**: `string`

The account id which will become a validator.

___

### stakedAmount

• **stakedAmount**: `bigint`

The amount of tokens to stake.

___

### fixedCost

• **fixedCost**: `string`

The fixed cost of the validator, which it receives as part of its Mana rewards.

___

### stakingPeriod

• `Optional` **stakingPeriod**: `number`

The staking period (in epochs). Will default to the staking unbonding period.
