# Class: CommonOutput

Common output properties.

## Hierarchy

- `Output`

  ↳ **`CommonOutput`**

  ↳↳ [`BasicOutput`](BasicOutput.md)

## Table of contents

### Methods

- [getType](CommonOutput.md#gettype)
- [getAmount](CommonOutput.md#getamount)
- [getUnlockConditions](CommonOutput.md#getunlockconditions)
- [getNativeTokens](CommonOutput.md#getnativetokens)
- [getFeatures](CommonOutput.md#getfeatures)

## Methods

### getType

▸ **getType**(): [`OutputType`](../enums/OutputType.md)

The type of output.

#### Returns

[`OutputType`](../enums/OutputType.md)

#### Inherited from

Output.getType

___

### getAmount

▸ **getAmount**(): `string`

The amount of the output.

#### Returns

`string`

#### Inherited from

Output.getAmount

___

### getUnlockConditions

▸ **getUnlockConditions**(): `UnlockCondition`[]

The unlock conditions for the output.

#### Returns

`UnlockCondition`[]

___

### getNativeTokens

▸ **getNativeTokens**(): `undefined` \| `INativeToken`[]

The native tokens held by the output.

#### Returns

`undefined` \| `INativeToken`[]

___

### getFeatures

▸ **getFeatures**(): `undefined` \| `Feature`[]

Features contained by the output.

#### Returns

`undefined` \| `Feature`[]
