# Interface: ValidatorResponse

Information of a validator.

## Table of contents

### Properties

- [address](ValidatorResponse.md#address)
- [stakingEndEpoch](ValidatorResponse.md#stakingendepoch)
- [poolStake](ValidatorResponse.md#poolstake)
- [validatorStake](ValidatorResponse.md#validatorstake)
- [fixedCost](ValidatorResponse.md#fixedcost)
- [active](ValidatorResponse.md#active)
- [latestSupportedProtocolVersion](ValidatorResponse.md#latestsupportedprotocolversion)
- [latestSupportedProtocolHash](ValidatorResponse.md#latestsupportedprotocolhash)

## Properties

### address

• **address**: `string`

Account address of the validator.

___

### stakingEndEpoch

• **stakingEndEpoch**: `number`

The epoch index until which the validator registered to stake.

___

### poolStake

• **poolStake**: `bigint`

The total stake of the pool, including delegators.

___

### validatorStake

• **validatorStake**: `bigint`

The stake of a validator.

___

### fixedCost

• **fixedCost**: `bigint`

The fixed cost of the validator, which it receives as part of its Mana rewards.

___

### active

• **active**: `boolean`

Shows whether the validator was active recently.

___

### latestSupportedProtocolVersion

• **latestSupportedProtocolVersion**: `number`

The latest protocol version the validator supported.

___

### latestSupportedProtocolHash

• **latestSupportedProtocolHash**: `string`

The latest protocol version the validator supported.
