---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Interface: INftOutput

NFT output.

## Hierarchy

- [`ITypeBase`](ITypeBase.md)<`6`\>

- [`ICommonOutput`](ICommonOutput.md)

  ↳ **`INftOutput`**

## Table of contents

### Properties

- [type](INftOutput.md#type)
- [nativeTokens](INftOutput.md#nativetokens)
- [unlockConditions](INftOutput.md#unlockconditions)
- [features](INftOutput.md#features)
- [amount](INftOutput.md#amount)
- [nftId](INftOutput.md#nftid)
- [immutableFeatures](INftOutput.md#immutablefeatures)

## Properties

### type

• **type**: `6`

The type of the object.

#### Inherited from

[ITypeBase](ITypeBase.md).[type](ITypeBase.md#type)

---

### nativeTokens

• `Optional` **nativeTokens**: [`INativeToken`](INativeToken.md)[]

The native tokens held by the output.

#### Inherited from

[ICommonOutput](ICommonOutput.md).[nativeTokens](ICommonOutput.md#nativetokens)

---

### unlockConditions

• **unlockConditions**: [`UnlockConditionTypes`](../api_ref.md#unlockconditiontypes)[]

The unlock conditions for the output.

#### Inherited from

[ICommonOutput](ICommonOutput.md).[unlockConditions](ICommonOutput.md#unlockconditions)

---

### features

• `Optional` **features**: [`FeatureTypes`](../api_ref.md#featuretypes)[]

Features contained by the output.

#### Inherited from

[ICommonOutput](ICommonOutput.md).[features](ICommonOutput.md#features)

---

### amount

• **amount**: `string`

The amount of IOTA tokens held by the output.

---

### nftId

• **nftId**: `string`

Unique identifier of the NFT, which is the BLAKE2b-160 hash of the Output ID that created it.

---

### immutableFeatures

• `Optional` **immutableFeatures**: [`FeatureTypes`](../api_ref.md#featuretypes)[]

Immutable features contained by the output.
