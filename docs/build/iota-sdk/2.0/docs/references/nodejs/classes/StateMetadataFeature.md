# Class: StateMetadataFeature

A Metadata Feature that can only be changed by the State Controller.

## Hierarchy

- [`Feature`](Feature.md)

  ↳ **`StateMetadataFeature`**

## Table of contents

### Constructors

- [constructor](StateMetadataFeature.md#constructor)

### Properties

- [type](StateMetadataFeature.md#type)
- [entries](StateMetadataFeature.md#entries)

## Constructors

### constructor

• **new StateMetadataFeature**(`entries`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Object` | The metadata stored with the feature. |

#### Overrides

[Feature](Feature.md).[constructor](Feature.md#constructor)

## Properties

### type

• `Readonly` **type**: [`FeatureType`](../enums/FeatureType.md)

#### Inherited from

[Feature](Feature.md).[type](Feature.md#type)

___

### entries

• `Readonly` **entries**: `Object`

Defines metadata (arbitrary binary data) that will be stored in the output.

#### Index signature

▪ [key: [`PrintableASCII`](../api_ref.md#printableascii)]: [`HexEncodedString`](../api_ref.md#hexencodedstring)
