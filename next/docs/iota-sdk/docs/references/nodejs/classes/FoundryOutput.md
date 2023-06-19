# Class: FoundryOutput

Foundry output.

## Hierarchy

- `ImmutableFeaturesOutput`

  ↳ **`FoundryOutput`**

## Table of contents

### Methods

- [getType](FoundryOutput.md#gettype)
- [getAmount](FoundryOutput.md#getamount)
- [getUnlockConditions](FoundryOutput.md#getunlockconditions)
- [getNativeTokens](FoundryOutput.md#getnativetokens)
- [getFeatures](FoundryOutput.md#getfeatures)
- [getImmutableFeatures](FoundryOutput.md#getimmutablefeatures)
- [getSerialNumber](FoundryOutput.md#getserialnumber)
- [getTokenScheme](FoundryOutput.md#gettokenscheme)

## Methods

### getType

▸ **getType**(): [`OutputType`](../enums/OutputType.md)

The type of output.

#### Returns

[`OutputType`](../enums/OutputType.md)

#### Inherited from

ImmutableFeaturesOutput.getType

___

### getAmount

▸ **getAmount**(): `string`

The amount of the output.

#### Returns

`string`

#### Inherited from

ImmutableFeaturesOutput.getAmount

___

### getUnlockConditions

▸ **getUnlockConditions**(): `UnlockCondition`[]

The unlock conditions for the output.

#### Returns

`UnlockCondition`[]

#### Inherited from

ImmutableFeaturesOutput.getUnlockConditions

___

### getNativeTokens

▸ **getNativeTokens**(): `undefined` \| `INativeToken`[]

The native tokens held by the output.

#### Returns

`undefined` \| `INativeToken`[]

#### Inherited from

ImmutableFeaturesOutput.getNativeTokens

___

### getFeatures

▸ **getFeatures**(): `undefined` \| `Feature`[]

Features contained by the output.

#### Returns

`undefined` \| `Feature`[]

#### Inherited from

ImmutableFeaturesOutput.getFeatures

___

### getImmutableFeatures

▸ **getImmutableFeatures**(): `undefined` \| `Feature`[]

Immutable features contained by the output.

#### Returns

`undefined` \| `Feature`[]

#### Inherited from

ImmutableFeaturesOutput.getImmutableFeatures

___

### getSerialNumber

▸ **getSerialNumber**(): `number`

The serial number of the foundry with respect to the controlling alias.

#### Returns

`number`

___

### getTokenScheme

▸ **getTokenScheme**(): `ISimpleTokenScheme`

The token scheme for the foundry.

#### Returns

`ISimpleTokenScheme`
