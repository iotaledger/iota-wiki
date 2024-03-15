# Class: Address

The base class for addresses.

## Hierarchy

- **`Address`**

  ↳ [`Ed25519Address`](Ed25519Address.md)

  ↳ [`AccountAddress`](AccountAddress.md)

  ↳ [`NftAddress`](NftAddress.md)

  ↳ [`AnchorAddress`](AnchorAddress.md)

  ↳ [`ImplicitAccountCreationAddress`](ImplicitAccountCreationAddress.md)

  ↳ [`MultiAddress`](MultiAddress.md)

  ↳ [`RestrictedAddress`](RestrictedAddress.md)

## Table of contents

### Constructors

- [constructor](Address.md#constructor)

### Properties

- [type](Address.md#type)

### Methods

- [toString](Address.md#tostring)
- [parse](Address.md#parse)

## Constructors

### constructor

• **new Address**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`AddressType`](../enums/AddressType.md) | The type of the address. |

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

## Methods

### toString

▸ `Abstract` **toString**(): `string`

#### Returns

`string`

___

### parse

▸ `Static` **parse**(`data`): [`Address`](Address.md)

Parse an address from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Address`](Address.md)
