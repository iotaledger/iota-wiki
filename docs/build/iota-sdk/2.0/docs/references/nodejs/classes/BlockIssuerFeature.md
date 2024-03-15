# Class: BlockIssuerFeature

Block Issuer feature.

## Hierarchy

- [`Feature`](Feature.md)

  ↳ **`BlockIssuerFeature`**

## Table of contents

### Constructors

- [constructor](BlockIssuerFeature.md#constructor)

### Properties

- [type](BlockIssuerFeature.md#type)
- [expirySlot](BlockIssuerFeature.md#expiryslot)
- [blockIssuerKeys](BlockIssuerFeature.md#blockissuerkeys)

## Constructors

### constructor

• **new BlockIssuerFeature**(`expirySlot`, `blockIssuerKeys`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expirySlot` | `number` |
| `blockIssuerKeys` | [`BlockIssuerKey`](BlockIssuerKey.md)[] |

#### Overrides

[Feature](Feature.md).[constructor](Feature.md#constructor)

## Properties

### type

• `Readonly` **type**: [`FeatureType`](../enums/FeatureType.md)

#### Inherited from

[Feature](Feature.md).[type](Feature.md#type)

___

### expirySlot

• `Readonly` **expirySlot**: `number`

The slot index at which the Block Issuer Feature expires and can be removed.

___

### blockIssuerKeys

• `Readonly` **blockIssuerKeys**: [`BlockIssuerKey`](BlockIssuerKey.md)[]

The Block Issuer Keys.
