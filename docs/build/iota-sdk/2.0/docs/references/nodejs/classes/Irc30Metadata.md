# Class: Irc30Metadata

The IRC30 native token metadata standard schema.

## Table of contents

### Constructors

- [constructor](Irc30Metadata.md#constructor)

### Properties

- [standard](Irc30Metadata.md#standard)
- [name](Irc30Metadata.md#name)
- [symbol](Irc30Metadata.md#symbol)
- [decimals](Irc30Metadata.md#decimals)
- [description](Irc30Metadata.md#description)
- [url](Irc30Metadata.md#url)
- [logoUrl](Irc30Metadata.md#logourl)
- [logo](Irc30Metadata.md#logo)

### Methods

- [withDescription](Irc30Metadata.md#withdescription)
- [withUrl](Irc30Metadata.md#withurl)
- [withLogoUrl](Irc30Metadata.md#withlogourl)
- [withLogo](Irc30Metadata.md#withlogo)
- [asHex](Irc30Metadata.md#ashex)
- [asFeature](Irc30Metadata.md#asfeature)

## Constructors

### constructor

• **new Irc30Metadata**(`name`, `symbol`, `decimals`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The human-readable name of the native token. |
| `symbol` | `string` | The symbol/ticker of the token. |
| `decimals` | `number` | Number of decimals the token uses. |

## Properties

### standard

• `Readonly` **standard**: `string` = `'IRC30'`

The IRC standard

___

### name

• **name**: `string`

The human-readable name of the native token.

___

### symbol

• **symbol**: `string`

The symbol/ticker of the token.

___

### decimals

• **decimals**: `number`

Number of decimals the token uses (divide the token amount by `10^decimals` to get its user representation).

___

### description

• `Optional` **description**: `string`

The human-readable description of the token.

___

### url

• `Optional` **url**: `string`

URL pointing to more resources about the token.

___

### logoUrl

• `Optional` **logoUrl**: `string`

URL pointing to an image resource of the token logo.

___

### logo

• `Optional` **logo**: `string`

The svg logo of the token encoded as a byte string.

## Methods

### withDescription

▸ **withDescription**(`description`): [`Irc30Metadata`](Irc30Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`Irc30Metadata`](Irc30Metadata.md)

___

### withUrl

▸ **withUrl**(`url`): [`Irc30Metadata`](Irc30Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Irc30Metadata`](Irc30Metadata.md)

___

### withLogoUrl

▸ **withLogoUrl**(`logoUrl`): [`Irc30Metadata`](Irc30Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logoUrl` | `string` |

#### Returns

[`Irc30Metadata`](Irc30Metadata.md)

___

### withLogo

▸ **withLogo**(`logo`): [`Irc30Metadata`](Irc30Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logo` | `string` |

#### Returns

[`Irc30Metadata`](Irc30Metadata.md)

___

### asHex

▸ **asHex**(): `string`

#### Returns

`string`

___

### asFeature

▸ **asFeature**(): [`MetadataFeature`](MetadataFeature.md)

#### Returns

[`MetadataFeature`](MetadataFeature.md)
