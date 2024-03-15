# Class: AnchorOutput

An Anchor output.

## Hierarchy

- `ImmutableFeaturesOutput`

  ↳ **`AnchorOutput`**

## Table of contents

### Constructors

- [constructor](AnchorOutput.md#constructor)

### Properties

- [amount](AnchorOutput.md#amount)
- [type](AnchorOutput.md#type)
- [unlockConditions](AnchorOutput.md#unlockconditions)
- [features](AnchorOutput.md#features)
- [immutableFeatures](AnchorOutput.md#immutablefeatures)
- [anchorId](AnchorOutput.md#anchorid)
- [stateIndex](AnchorOutput.md#stateindex)
- [mana](AnchorOutput.md#mana)

### Methods

- [getAmount](AnchorOutput.md#getamount)
- [parse](AnchorOutput.md#parse)
- [getNativeToken](AnchorOutput.md#getnativetoken)

## Constructors

### constructor

• **new AnchorOutput**(`amount`, `mana`, `anchorId`, `stateIndex`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `mana` | `bigint` | The amount of stored mana. |
| `anchorId` | `string` | The anchor ID as hex-encoded string. |
| `stateIndex` | `number` | A counter that must increase by 1 every time the anchor output is state transitioned. |
| `unlockConditions` | [`UnlockCondition`](UnlockCondition.md)[] | The unlock conditions of the output. |

#### Overrides

ImmutableFeaturesOutput.constructor

## Properties

### amount

• `Readonly` **amount**: `string`

#### Inherited from

ImmutableFeaturesOutput.amount

___

### type

• `Readonly` **type**: [`OutputType`](../enums/OutputType.md)

The type of output.

#### Inherited from

ImmutableFeaturesOutput.type

___

### unlockConditions

• `Readonly` **unlockConditions**: [`UnlockCondition`](UnlockCondition.md)[]

The unlock conditions for the output.

#### Inherited from

ImmutableFeaturesOutput.unlockConditions

___

### features

• `Optional` `Readonly` **features**: [`Feature`](Feature.md)[]

The features contained by the output.

#### Inherited from

ImmutableFeaturesOutput.features

___

### immutableFeatures

• `Optional` `Readonly` **immutableFeatures**: [`Feature`](Feature.md)[]

#### Inherited from

ImmutableFeaturesOutput.immutableFeatures

___

### anchorId

• `Readonly` **anchorId**: `string`

Unique identifier of the anchor, which is the BLAKE2b-256 hash of the Output ID that created it.
Unless its a newly created anchor, then the id is zeroed.

___

### stateIndex

• `Readonly` **stateIndex**: `number`

A counter that must increase by 1 every time the anchor output is state transitioned.

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

ImmutableFeaturesOutput.getAmount

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

ImmutableFeaturesOutput.parse

___

### getNativeToken

▸ **getNativeToken**(): `undefined` \| [`NativeToken`](NativeToken.md)

The native token held by the output.

#### Returns

`undefined` \| [`NativeToken`](NativeToken.md)

#### Inherited from

ImmutableFeaturesOutput.getNativeToken
