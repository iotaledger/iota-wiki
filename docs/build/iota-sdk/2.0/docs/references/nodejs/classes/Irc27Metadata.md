# Class: Irc27Metadata

The IRC27 NFT standard schema.

## Table of contents

### Constructors

- [constructor](Irc27Metadata.md#constructor)

### Properties

- [standard](Irc27Metadata.md#standard)
- [version](Irc27Metadata.md#version)
- [type](Irc27Metadata.md#type)
- [uri](Irc27Metadata.md#uri)
- [name](Irc27Metadata.md#name)
- [collectionName](Irc27Metadata.md#collectionname)
- [royalties](Irc27Metadata.md#royalties)
- [issuerName](Irc27Metadata.md#issuername)
- [description](Irc27Metadata.md#description)
- [attributes](Irc27Metadata.md#attributes)

### Methods

- [withCollectionName](Irc27Metadata.md#withcollectionname)
- [addRoyalty](Irc27Metadata.md#addroyalty)
- [withRoyalties](Irc27Metadata.md#withroyalties)
- [withIssuerName](Irc27Metadata.md#withissuername)
- [withDescription](Irc27Metadata.md#withdescription)
- [addAttribute](Irc27Metadata.md#addattribute)
- [withAttributes](Irc27Metadata.md#withattributes)
- [asHex](Irc27Metadata.md#ashex)
- [asFeature](Irc27Metadata.md#asfeature)

## Constructors

### constructor

• **new Irc27Metadata**(`type`, `uri`, `name`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The media type (MIME) of the asset. |
| `uri` | `string` | URL pointing to the NFT file location. |
| `name` | `string` | The human-readable name of the native token. |

## Properties

### standard

• `Readonly` **standard**: `string` = `'IRC27'`

The IRC standard

___

### version

• `Readonly` **version**: `string` = `'v1.0'`

The current version.

___

### type

• **type**: `string`

The media type (MIME) of the asset.

## Examples
- Image files: `image/jpeg`, `image/png`, `image/gif`, etc.
- Video files: `video/x-msvideo` (avi), `video/mp4`, `video/mpeg`, etc.
- Audio files: `audio/mpeg`, `audio/wav`, etc.
- 3D Assets: `model/obj`, `model/u3d`, etc.
- Documents: `application/pdf`, `text/plain`, etc.

___

### uri

• **uri**: `string`

URL pointing to the NFT file location.

___

### name

• **name**: `string`

The human-readable name of the native token.

___

### collectionName

• `Optional` **collectionName**: `string`

The human-readable collection name of the native token.

___

### royalties

• **royalties**: `Map`\<`string`, `number`\>

Royalty payment addresses mapped to the payout percentage.

___

### issuerName

• `Optional` **issuerName**: `string`

The human-readable name of the native token creator.

___

### description

• `Optional` **description**: `string`

The human-readable description of the token.

___

### attributes

• **attributes**: [`Attribute`](Attribute.md)[] = `[]`

Additional attributes which follow [OpenSea Metadata standards](https://docs.opensea.io/docs/metadata-standards).

## Methods

### withCollectionName

▸ **withCollectionName**(`collectionName`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionName` | `string` |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### addRoyalty

▸ **addRoyalty**(`address`, `percentage`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `percentage` | `number` |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### withRoyalties

▸ **withRoyalties**(`royalties`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `royalties` | `Map`\<`string`, `number`\> |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### withIssuerName

▸ **withIssuerName**(`issuerName`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerName` | `string` |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### withDescription

▸ **withDescription**(`description`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### addAttribute

▸ **addAttribute**(`attribute`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](Attribute.md) |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

___

### withAttributes

▸ **withAttributes**(`attributes`): [`Irc27Metadata`](Irc27Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`Attribute`](Attribute.md)[] |

#### Returns

[`Irc27Metadata`](Irc27Metadata.md)

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
