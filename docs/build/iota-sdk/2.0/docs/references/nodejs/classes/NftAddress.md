# Class: NftAddress

An NFT address.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`NftAddress`**

## Table of contents

### Constructors

- [constructor](NftAddress.md#constructor)

### Properties

- [type](NftAddress.md#type)
- [nftId](NftAddress.md#nftid)

### Methods

- [parse](NftAddress.md#parse)
- [toString](NftAddress.md#tostring)

## Constructors

### constructor

• **new NftAddress**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | An NFT address as NFT ID. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

___

### nftId

• `Readonly` **nftId**: `string`

The NFT ID.

## Methods

### parse

▸ `Static` **parse**(`data`): [`Address`](Address.md)

Parse an address from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Address`](Address.md)

#### Inherited from

[Address](Address.md).[parse](Address.md#parse)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Address](Address.md).[toString](Address.md#tostring)
