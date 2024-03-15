# Class: CommonOutput

The base class for common outputs.

## Hierarchy

- [`Output`](Output.md)

  ↳ **`CommonOutput`**

  ↳↳ [`BasicOutput`](BasicOutput.md)

## Table of contents

### Constructors

- [constructor](CommonOutput.md#constructor)

### Properties

- [amount](CommonOutput.md#amount)
- [type](CommonOutput.md#type)
- [unlockConditions](CommonOutput.md#unlockconditions)
- [features](CommonOutput.md#features)

### Methods

- [getAmount](CommonOutput.md#getamount)
- [parse](CommonOutput.md#parse)
- [getNativeToken](CommonOutput.md#getnativetoken)

## Constructors

### constructor

• **new CommonOutput**(`type`, `amount`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`OutputType`](../enums/OutputType.md) | The type of output. |
| `amount` | `bigint` | The amount of the output. |
| `unlockConditions` | [`UnlockCondition`](UnlockCondition.md)[] | Conditions to unlock the output. |

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

### unlockConditions

• `Readonly` **unlockConditions**: [`UnlockCondition`](UnlockCondition.md)[]

The unlock conditions for the output.

___

### features

• `Optional` `Readonly` **features**: [`Feature`](Feature.md)[]

The features contained by the output.

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

___

### getNativeToken

▸ **getNativeToken**(): `undefined` \| [`NativeToken`](NativeToken.md)

The native token held by the output.

#### Returns

`undefined` \| [`NativeToken`](NativeToken.md)
