# Interface: BasicOutputBuilderParams

Options for building a Basic Output

## Hierarchy

- **`BasicOutputBuilderParams`**

  ↳ [`AccountOutputBuilderParams`](AccountOutputBuilderParams.md)

  ↳ [`FoundryOutputBuilderParams`](FoundryOutputBuilderParams.md)

  ↳ [`NftOutputBuilderParams`](NftOutputBuilderParams.md)

## Table of contents

### Properties

- [amount](BasicOutputBuilderParams.md#amount)
- [nativeTokens](BasicOutputBuilderParams.md#nativetokens)
- [unlockConditions](BasicOutputBuilderParams.md#unlockconditions)
- [features](BasicOutputBuilderParams.md#features)

## Properties

### amount

• `Optional` **amount**: `string` \| `bigint`

If not provided, minimum amount will be used

___

### nativeTokens

• `Optional` **nativeTokens**: [`NativeToken`](../classes/NativeToken.md)[]

The native tokens to be held by the output.

___

### unlockConditions

• **unlockConditions**: [`UnlockCondition`](../classes/UnlockCondition.md)[]

The unlock conditions for the output.

___

### features

• `Optional` **features**: [`Feature`](../classes/Feature.md)[]

Features to be contained by the output.
