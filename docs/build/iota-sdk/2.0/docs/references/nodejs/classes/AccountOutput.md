# Class: AccountOutput

An Account output.

## Hierarchy

- `ImmutableFeaturesOutput`

  ↳ **`AccountOutput`**

## Table of contents

### Constructors

- [constructor](AccountOutput.md#constructor)

### Properties

- [amount](AccountOutput.md#amount)
- [type](AccountOutput.md#type)
- [unlockConditions](AccountOutput.md#unlockconditions)
- [features](AccountOutput.md#features)
- [immutableFeatures](AccountOutput.md#immutablefeatures)
- [accountId](AccountOutput.md#accountid)
- [foundryCounter](AccountOutput.md#foundrycounter)
- [mana](AccountOutput.md#mana)

### Methods

- [getAmount](AccountOutput.md#getamount)
- [parse](AccountOutput.md#parse)
- [getNativeToken](AccountOutput.md#getnativetoken)

## Constructors

### constructor

• **new AccountOutput**(`amount`, `mana`, `accountId`, `foundryCounter`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `mana` | `bigint` | The amount of stored mana. |
| `accountId` | `string` | The account ID as hex-encoded string. |
| `foundryCounter` | `number` | A counter that denotes the number of foundries created by this account output. |
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

### accountId

• `Readonly` **accountId**: `string`

Unique identifier of the account, which is the BLAKE2b-256 hash of the Output ID that created it.
Unless its a newly created account, then the id is zeroed.

___

### foundryCounter

• `Readonly` **foundryCounter**: `number`

A counter that denotes the number of foundries created by this account output.

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
