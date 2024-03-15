# Class: NftOutput

An NFT output.

## Hierarchy

- `ImmutableFeaturesOutput`

  ↳ **`NftOutput`**

## Table of contents

### Constructors

- [constructor](NftOutput.md#constructor)

### Properties

- [amount](NftOutput.md#amount)
- [type](NftOutput.md#type)
- [unlockConditions](NftOutput.md#unlockconditions)
- [features](NftOutput.md#features)
- [immutableFeatures](NftOutput.md#immutablefeatures)
- [nftId](NftOutput.md#nftid)
- [mana](NftOutput.md#mana)

### Methods

- [getAmount](NftOutput.md#getamount)
- [parse](NftOutput.md#parse)
- [getNativeToken](NftOutput.md#getnativetoken)

## Constructors

### constructor

• **new NftOutput**(`amount`, `mana`, `nftId`, `unlockConditions`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `bigint` | The amount of the output. |
| `mana` | `bigint` | The amount of stored mana. |
| `nftId` | `string` | The NFT ID as hex-encoded string. |
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

### nftId

• `Readonly` **nftId**: `string`

Unique identifier of the NFT, which is the BLAKE2b-256 hash of the Output ID that created it.
Unless its newly minted, then the id is zeroed.

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
