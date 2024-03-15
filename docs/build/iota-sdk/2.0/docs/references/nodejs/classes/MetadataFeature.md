# Class: MetadataFeature

A Metadata feature.

## Hierarchy

- [`Feature`](Feature.md)

  ↳ **`MetadataFeature`**

## Table of contents

### Constructors

- [constructor](MetadataFeature.md#constructor)

### Properties

- [type](MetadataFeature.md#type)
- [entries](MetadataFeature.md#entries)

## Constructors

### constructor

• **new MetadataFeature**(`entries`)

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
