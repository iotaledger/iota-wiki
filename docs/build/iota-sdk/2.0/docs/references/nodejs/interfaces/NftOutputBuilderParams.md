# Interface: NftOutputBuilderParams

Options for building an Nft Output

## Hierarchy

- [`BasicOutputBuilderParams`](BasicOutputBuilderParams.md)

  ↳ **`NftOutputBuilderParams`**

## Table of contents

### Properties

- [amount](NftOutputBuilderParams.md#amount)
- [nativeTokens](NftOutputBuilderParams.md#nativetokens)
- [unlockConditions](NftOutputBuilderParams.md#unlockconditions)
- [features](NftOutputBuilderParams.md#features)
- [nftId](NftOutputBuilderParams.md#nftid)
- [immutableFeatures](NftOutputBuilderParams.md#immutablefeatures)

## Properties

### amount

• `Optional` **amount**: `string` \| `bigint`

If not provided, minimum amount will be used

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[amount](BasicOutputBuilderParams.md#amount)

___

### nativeTokens

• `Optional` **nativeTokens**: [`NativeToken`](../classes/NativeToken.md)[]

The native tokens to be held by the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[nativeTokens](BasicOutputBuilderParams.md#nativetokens)

___

### unlockConditions

• **unlockConditions**: [`UnlockCondition`](../classes/UnlockCondition.md)[]

The unlock conditions for the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[unlockConditions](BasicOutputBuilderParams.md#unlockconditions)

___

### features

• `Optional` **features**: [`Feature`](../classes/Feature.md)[]

Features to be contained by the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[features](BasicOutputBuilderParams.md#features)

___

### nftId

• **nftId**: `string`

Unique identifier of an NFT, which is the BLAKE2b-256 hash of the Output ID that created it.

___

### immutableFeatures

• `Optional` **immutableFeatures**: [`Feature`](../classes/Feature.md)[]

Features that add utility to the output but do not impose unlocking conditions.
These features need to be kept in future transitions of the UTXO state machine.
