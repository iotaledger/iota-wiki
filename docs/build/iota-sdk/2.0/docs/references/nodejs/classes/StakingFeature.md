# Class: StakingFeature

Staking feature.

## Hierarchy

- [`Feature`](Feature.md)

  ↳ **`StakingFeature`**

## Table of contents

### Constructors

- [constructor](StakingFeature.md#constructor)

### Properties

- [type](StakingFeature.md#type)
- [stakedAmount](StakingFeature.md#stakedamount)
- [fixedCost](StakingFeature.md#fixedcost)
- [startEpoch](StakingFeature.md#startepoch)
- [endEpoch](StakingFeature.md#endepoch)

## Constructors

### constructor

• **new StakingFeature**(`stakedAmount`, `fixedCost`, `startEpoch`, `endEpoch`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stakedAmount` | `bigint` |
| `fixedCost` | `bigint` |
| `startEpoch` | `number` |
| `endEpoch` | `number` |

#### Overrides

[Feature](Feature.md).[constructor](Feature.md#constructor)

## Properties

### type

• `Readonly` **type**: [`FeatureType`](../enums/FeatureType.md)

#### Inherited from

[Feature](Feature.md).[type](Feature.md#type)

___

### stakedAmount

• `Readonly` **stakedAmount**: `bigint`

The amount of coins that are locked and staked in the containing account.

___

### fixedCost

• `Readonly` **fixedCost**: `bigint`

The fixed cost of the validator, which it receives as part of its Mana rewards.

___

### startEpoch

• `Readonly` **startEpoch**: `number`

The epoch index in which the staking started.

___

### endEpoch

• `Readonly` **endEpoch**: `number`

The epoch index in which the staking ends.
