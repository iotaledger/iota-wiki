# Class: FoundryOutput

A Foundry output.

## Hierarchy

- `ImmutableFeaturesOutput`

  ↳ **`FoundryOutput`**

## Table of contents

### Constructors

- [constructor](FoundryOutput.md#constructor)

### Properties

- [amount](FoundryOutput.md#amount)
- [type](FoundryOutput.md#type)
- [unlockConditions](FoundryOutput.md#unlockconditions)
- [features](FoundryOutput.md#features)
- [immutableFeatures](FoundryOutput.md#immutablefeatures)
- [serialNumber](FoundryOutput.md#serialnumber)
- [tokenScheme](FoundryOutput.md#tokenscheme)

### Methods

- [getAmount](FoundryOutput.md#getamount)
- [parse](FoundryOutput.md#parse)
- [getNativeToken](FoundryOutput.md#getnativetoken)

## Constructors

### constructor

• **new FoundryOutput**(`amount`, `serialNumber`, `unlockConditions`, `tokenScheme`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `serialNumber` | `number` | The serial number of the Foundry with respect to the controlling account. |
| `unlockConditions` | [`UnlockCondition`](UnlockCondition.md)[] | The unlock conditions of the output. |
| `tokenScheme` | [`TokenScheme`](TokenScheme.md) | The token scheme for the Foundry. |

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

### serialNumber

• `Readonly` **serialNumber**: `number`

The serial number of the Foundry with respect to the controlling account.

___

### tokenScheme

• `Readonly` **tokenScheme**: [`TokenScheme`](TokenScheme.md)

The token scheme for the Foundry.

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
