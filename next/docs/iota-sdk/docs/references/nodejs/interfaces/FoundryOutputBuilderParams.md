# Interface: FoundryOutputBuilderParams

Options for building a Foundry Output

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

## Properties

### amount

• `Optional` **amount**: `string`

If not provided, minimum storage deposit will be used

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[amount](BasicOutputBuilderParams.md#amount)

___

### nativeTokens

• `Optional` **nativeTokens**: `INativeToken`[]

The native tokens to be held by the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[nativeTokens](BasicOutputBuilderParams.md#nativetokens)

___

### unlockConditions

• **unlockConditions**: `UnlockCondition`[]

The unlock conditions for the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[unlockConditions](BasicOutputBuilderParams.md#unlockconditions)

___

### features

• `Optional` **features**: `Feature`[]

Features to be contained by the output.

#### Inherited from

[BasicOutputBuilderParams](BasicOutputBuilderParams.md).[features](BasicOutputBuilderParams.md#features)

___

### serialNumber

• **serialNumber**: `number`

The serial number of the foundry with respect to the controlling alias.
