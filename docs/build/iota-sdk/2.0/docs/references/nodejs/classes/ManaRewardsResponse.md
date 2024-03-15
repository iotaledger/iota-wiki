# Class: ManaRewardsResponse

The mana rewards of an account or delegation output.

## Table of contents

### Constructors

- [constructor](ManaRewardsResponse.md#constructor)

### Properties

- [startEpoch](ManaRewardsResponse.md#startepoch)
- [endEpoch](ManaRewardsResponse.md#endepoch)
- [rewards](ManaRewardsResponse.md#rewards)
- [latestCommittedEpochPoolRewards](ManaRewardsResponse.md#latestcommittedepochpoolrewards)

## Constructors

### constructor

• **new ManaRewardsResponse**()

## Properties

### startEpoch

• **startEpoch**: `number`

The starting epoch index for which the mana rewards are returned.

___

### endEpoch

• **endEpoch**: `number`

The ending epoch index for which the mana rewards are returned, the decay is applied up to this point
included.

___

### rewards

• **rewards**: `bigint`

The amount of totally available rewards the requested output may claim.

___

### latestCommittedEpochPoolRewards

• **latestCommittedEpochPoolRewards**: `bigint`

The rewards of the latest committed epoch of the staking pool to which this validator or delegator belongs.
The ratio of this value and the maximally possible rewards for the latest committed epoch can be used to
determine how well the validator of this staking pool performed in that epoch. Note that if the pool was not
part of the committee in the latest committed epoch, this value is 0.
