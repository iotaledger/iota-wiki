# Class: BasicOutput

Basic output.

## Hierarchy

- [`CommonOutput`](CommonOutput.md)

  ↳ **`BasicOutput`**

## Table of contents

### Methods

- [getType](BasicOutput.md#gettype)
- [getAmount](BasicOutput.md#getamount)
- [getUnlockConditions](BasicOutput.md#getunlockconditions)
- [getNativeTokens](BasicOutput.md#getnativetokens)
- [getFeatures](BasicOutput.md#getfeatures)

## Methods

### getType

▸ **getType**(): [`OutputType`](../enums/OutputType.md)

The type of output.

#### Returns

[`OutputType`](../enums/OutputType.md)

#### Inherited from

[CommonOutput](CommonOutput.md).[getType](CommonOutput.md#gettype)

___

### getAmount

▸ **getAmount**(): `string`

The amount of the output.

#### Returns

`string`

#### Inherited from

[CommonOutput](CommonOutput.md).[getAmount](CommonOutput.md#getamount)

___

### getUnlockConditions

▸ **getUnlockConditions**(): `UnlockCondition`[]

The unlock conditions for the output.

#### Returns

`UnlockCondition`[]

#### Inherited from

[CommonOutput](CommonOutput.md).[getUnlockConditions](CommonOutput.md#getunlockconditions)

___

### getNativeTokens

▸ **getNativeTokens**(): `undefined` \| `INativeToken`[]

The native tokens held by the output.

#### Returns

`undefined` \| `INativeToken`[]

#### Inherited from

[CommonOutput](CommonOutput.md).[getNativeTokens](CommonOutput.md#getnativetokens)

___

### getFeatures

▸ **getFeatures**(): `undefined` \| `Feature`[]

Features contained by the output.

#### Returns

`undefined` \| `Feature`[]

#### Inherited from

[CommonOutput](CommonOutput.md).[getFeatures](CommonOutput.md#getfeatures)
