# Class: BasicOutput

A Basic output.

## Hierarchy

- [`CommonOutput`](CommonOutput.md)

  ↳ **`BasicOutput`**

## Table of contents

### Constructors

- [constructor](BasicOutput.md#constructor)

### Properties

- [amount](BasicOutput.md#amount)
- [type](BasicOutput.md#type)
- [unlockConditions](BasicOutput.md#unlockconditions)
- [features](BasicOutput.md#features)
- [mana](BasicOutput.md#mana)

### Methods

- [getAmount](BasicOutput.md#getamount)
- [parse](BasicOutput.md#parse)
- [getNativeToken](BasicOutput.md#getnativetoken)

## Constructors

### constructor

• **new BasicOutput**(`amount`, `mana`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `mana` | `bigint` | - |
| `unlockConditions` | [`UnlockCondition`](UnlockCondition.md)[] | The unlock conditions for the output. |

#### Overrides

[CommonOutput](CommonOutput.md).[constructor](CommonOutput.md#constructor)

## Properties

### amount

• `Readonly` **amount**: `string`

#### Inherited from

[CommonOutput](CommonOutput.md).[amount](CommonOutput.md#amount)

___

### type

• `Readonly` **type**: [`OutputType`](../enums/OutputType.md)

The type of output.

#### Inherited from

[CommonOutput](CommonOutput.md).[type](CommonOutput.md#type)

___

### unlockConditions

• `Readonly` **unlockConditions**: [`UnlockCondition`](UnlockCondition.md)[]

The unlock conditions for the output.

#### Inherited from

[CommonOutput](CommonOutput.md).[unlockConditions](CommonOutput.md#unlockconditions)

___

### features

• `Optional` `Readonly` **features**: [`Feature`](Feature.md)[]

The features contained by the output.

#### Inherited from

[CommonOutput](CommonOutput.md).[features](CommonOutput.md#features)

___

### mana

• `Readonly` **mana**: `bigint`

The amount of (stored) Mana held by the output.

## Methods

### getAmount

▸ **getAmount**(): `bigint`

Get the amount of the output.

#### Returns

`bigint`

#### Inherited from

[CommonOutput](CommonOutput.md).[getAmount](CommonOutput.md#getamount)

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

[CommonOutput](CommonOutput.md).[parse](CommonOutput.md#parse)

___

### getNativeToken

▸ **getNativeToken**(): `undefined` \| [`NativeToken`](NativeToken.md)

The native token held by the output.

#### Returns

`undefined` \| [`NativeToken`](NativeToken.md)

#### Inherited from

[CommonOutput](CommonOutput.md).[getNativeToken](CommonOutput.md#getnativetoken)
