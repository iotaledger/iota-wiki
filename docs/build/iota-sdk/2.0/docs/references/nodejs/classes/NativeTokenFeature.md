# Class: NativeTokenFeature

Native token feature.

## Hierarchy

- [`Feature`](Feature.md)

  ↳ **`NativeTokenFeature`**

## Table of contents

### Constructors

- [constructor](NativeTokenFeature.md#constructor)

### Properties

- [type](NativeTokenFeature.md#type)
- [id](NativeTokenFeature.md#id)
- [amount](NativeTokenFeature.md#amount)

### Methods

- [asNativeToken](NativeTokenFeature.md#asnativetoken)

## Constructors

### constructor

• **new NativeTokenFeature**(`nativeToken`)

Creates a new `NativeTokenFeature`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nativeToken` | [`NativeToken`](NativeToken.md) | The native token stored with the feature. |

#### Overrides

[Feature](Feature.md).[constructor](Feature.md#constructor)

## Properties

### type

• `Readonly` **type**: [`FeatureType`](../enums/FeatureType.md)

#### Inherited from

[Feature](Feature.md).[type](Feature.md#type)

___

### id

• `Readonly` **id**: `string`

Identifier of the native token.

___

### amount

• `Readonly` **amount**: `bigint`

Amount of native tokens of the given Token ID.

## Methods

### asNativeToken

▸ **asNativeToken**(): [`NativeToken`](NativeToken.md)

Returns the native token contained in this feature.

#### Returns

[`NativeToken`](NativeToken.md)
