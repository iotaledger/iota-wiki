# Interface: AccountOutputBuilderParams

Options for building an Account Output

## Hierarchy

- [`BasicOutputBuilderParams`](BasicOutputBuilderParams.md)

  ↳ **`AccountOutputBuilderParams`**

## Table of contents

### Properties

- [accountId](AccountOutputBuilderParams.md#accountid)
- [foundryCounter](AccountOutputBuilderParams.md#foundrycounter)
- [immutableFeatures](AccountOutputBuilderParams.md#immutablefeatures)
- [amount](AccountOutputBuilderParams.md#amount)
- [nativeTokens](AccountOutputBuilderParams.md#nativetokens)
- [unlockConditions](AccountOutputBuilderParams.md#unlockconditions)
- [features](AccountOutputBuilderParams.md#features)

## Properties

### accountId

• **accountId**: `string`

Unique identifier of an account, which is the BLAKE2b-256 hash of the Output ID that created it.

___

### foundryCounter

• `Optional` **foundryCounter**: `number`

A counter that denotes the number of foundries created by this account output.

___

### immutableFeatures

• `Optional` **immutableFeatures**: [`Feature`](../classes/Feature.md)[]

A list of immutable features.

___

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
