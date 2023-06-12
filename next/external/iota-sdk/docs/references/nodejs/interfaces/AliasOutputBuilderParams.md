# Interface: AliasOutputBuilderParams

Options for building an Alias Output

## Hierarchy

- [`BasicOutputBuilderParams`](BasicOutputBuilderParams.md)

  ↳ **`AliasOutputBuilderParams`**

## Table of contents

### Properties

- [amount](AliasOutputBuilderParams.md#amount)
- [nativeTokens](AliasOutputBuilderParams.md#nativetokens)
- [unlockConditions](AliasOutputBuilderParams.md#unlockconditions)
- [features](AliasOutputBuilderParams.md#features)

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
