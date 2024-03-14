# Class: DelegationOutput

A Delegation output.

## Hierarchy

- [`Output`](Output.md)

  ↳ **`DelegationOutput`**

## Table of contents

### Constructors

- [constructor](DelegationOutput.md#constructor)

### Properties

- [amount](DelegationOutput.md#amount)
- [type](DelegationOutput.md#type)
- [delegatedAmount](DelegationOutput.md#delegatedamount)
- [delegationId](DelegationOutput.md#delegationid)
- [validatorId](DelegationOutput.md#validatorid)
- [startEpoch](DelegationOutput.md#startepoch)
- [endEpoch](DelegationOutput.md#endepoch)
- [unlockConditions](DelegationOutput.md#unlockconditions)

### Methods

- [getAmount](DelegationOutput.md#getamount)
- [parse](DelegationOutput.md#parse)

## Constructors

### constructor

• **new DelegationOutput**(`amount`, `delegatedAmount`, `delegationId`, `validatorId`, `startEpoch`, `endEpoch`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `delegatedAmount` | `bigint` | The amount of delegated coins. |
| `delegationId` | `string` | Unique identifier of the Delegation Output, which is the BLAKE2b-256 hash of the Output ID that created it. |
| `validatorId` | `string` | The Account ID of the validator to which this output is delegating. |
| `startEpoch` | `number` | The index of the first epoch for which this output delegates. |
| `endEpoch` | `number` | The index of the last epoch for which this output delegates. |
| `unlockConditions` | [`UnlockCondition`](UnlockCondition.md)[] | The unlock conditions of the output. |

#### Overrides

[Output](Output.md).[constructor](Output.md#constructor)

## Properties

### amount

• `Readonly` **amount**: `string`

#### Inherited from

[Output](Output.md).[amount](Output.md#amount)

___

### type

• `Readonly` **type**: [`OutputType`](../enums/OutputType.md)

The type of output.

#### Inherited from

[Output](Output.md).[type](Output.md#type)

___

### delegatedAmount

• `Readonly` **delegatedAmount**: `bigint`

The amount of delegated coins.

___

### delegationId

• `Readonly` **delegationId**: `string`

Unique identifier of the Delegation Output, which is the BLAKE2b-256 hash of the Output ID that created it.

___

### validatorId

• `Readonly` **validatorId**: `string`

The Account ID of the validator to which this output is delegating.

___

### startEpoch

• `Readonly` **startEpoch**: `number`

The index of the first epoch for which this output delegates.

___

### endEpoch

• `Readonly` **endEpoch**: `number`

The index of the last epoch for which this output delegates.

___

### unlockConditions

• `Readonly` **unlockConditions**: [`UnlockCondition`](UnlockCondition.md)[]

The unlock conditions for the output.

## Methods

### getAmount

▸ **getAmount**(): `bigint`

Get the amount of the output.

#### Returns

`bigint`

#### Inherited from

[Output](Output.md).[getAmount](Output.md#getamount)

___

### parse

▸ `Static` **parse**(`data`): [`Output`](Output.md)

Parse an output from a plain JS JSON object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Output`](Output.md)

#### Inherited from

[Output](Output.md).[parse](Output.md#parse)
