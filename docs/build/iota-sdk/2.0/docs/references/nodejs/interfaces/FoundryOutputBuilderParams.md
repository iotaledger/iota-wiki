# Interface: FoundryOutputBuilderParams

Options for building a Foundry Output.

## Hierarchy

- [`BasicOutputBuilderParams`](BasicOutputBuilderParams.md)

  ↳ **`FoundryOutputBuilderParams`**

## Table of contents

### Properties

- [amount](FoundryOutputBuilderParams.md#amount)
- [nativeTokens](FoundryOutputBuilderParams.md#nativetokens)
- [unlockConditions](FoundryOutputBuilderParams.md#unlockconditions)
- [features](FoundryOutputBuilderParams.md#features)
- [serialNumber](FoundryOutputBuilderParams.md#serialnumber)
- [tokenScheme](FoundryOutputBuilderParams.md#tokenscheme)
- [immutableFeatures](FoundryOutputBuilderParams.md#immutablefeatures)

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

### serialNumber

• **serialNumber**: `number`

The serial number of the foundry with respect to the controlling account.

___

### tokenScheme

• **tokenScheme**: [`SimpleTokenScheme`](../classes/SimpleTokenScheme.md)

Defines the supply control scheme of the tokens controlled by the foundry.
Currently only a simple scheme is supported.

___

### immutableFeatures

• `Optional` **immutableFeatures**: [`Feature`](../classes/Feature.md)[]

Features that add utility to the output but do not impose unlocking conditions.
These features need to be kept in future transitions of the UTXO state machine.
