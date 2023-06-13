# Class: NftOutput

NFT output.

## Hierarchy

- `StateMetadataOutput`

  ↳ **`NftOutput`**

## Table of contents

### Methods

- [getType](NftOutput.md#gettype)
- [getAmount](NftOutput.md#getamount)
- [getUnlockConditions](NftOutput.md#getunlockconditions)
- [getNativeTokens](NftOutput.md#getnativetokens)
- [getFeatures](NftOutput.md#getfeatures)
- [getImmutableFeatures](NftOutput.md#getimmutablefeatures)
- [getStateMetadata](NftOutput.md#getstatemetadata)
- [getNnftId](NftOutput.md#getnnftid)

## Methods

### getType

▸ **getType**(): [`OutputType`](../enums/OutputType.md)

The type of output.

#### Returns

[`OutputType`](../enums/OutputType.md)

#### Inherited from

StateMetadataOutput.getType

___

### getAmount

▸ **getAmount**(): `string`

The amount of the output.

#### Returns

`string`

#### Inherited from

StateMetadataOutput.getAmount

___

### getUnlockConditions

▸ **getUnlockConditions**(): `UnlockCondition`[]

The unlock conditions for the output.

#### Returns

`UnlockCondition`[]

#### Inherited from

StateMetadataOutput.getUnlockConditions

___

### getNativeTokens

▸ **getNativeTokens**(): `undefined` \| `INativeToken`[]

The native tokens held by the output.

#### Returns

`undefined` \| `INativeToken`[]

#### Inherited from

StateMetadataOutput.getNativeTokens

___

### getFeatures

▸ **getFeatures**(): `undefined` \| `Feature`[]

Features contained by the output.

#### Returns

`undefined` \| `Feature`[]

#### Inherited from

StateMetadataOutput.getFeatures

___

### getImmutableFeatures

▸ **getImmutableFeatures**(): `undefined` \| `Feature`[]

Immutable features contained by the output.

#### Returns

`undefined` \| `Feature`[]

#### Inherited from

StateMetadataOutput.getImmutableFeatures

___

### getStateMetadata

▸ **getStateMetadata**(): `undefined` \| `string`

Metadata that can only be changed by the state controller.

#### Returns

`undefined` \| `string`

#### Inherited from

StateMetadataOutput.getStateMetadata

___

### getNnftId

▸ **getNnftId**(): `string`

Unique identifier of the NFT, which is the BLAKE2b-160 hash of the Output ID that created it.
Unless its newly minted, then the id is zeroed.

#### Returns

`string`
