# Interface: BasicOutputBuilderParams

Options for building a Basic Output

## Hierarchy

- **`BasicOutputBuilderParams`**

  ↳ [`AliasOutputBuilderParams`](AliasOutputBuilderParams.md)

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

• `Optional` **amount**: `string`

If not provided, minimum storage deposit will be used

---

### nativeTokens

• `Optional` **nativeTokens**: `INativeToken`[]

The native tokens to be held by the output.

---

### unlockConditions

• **unlockConditions**: `UnlockCondition`[]

The unlock conditions for the output.

---

### features

• `Optional` **features**: `Feature`[]

Features to be contained by the output.
