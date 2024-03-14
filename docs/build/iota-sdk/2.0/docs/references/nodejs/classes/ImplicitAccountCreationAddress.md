# Class: ImplicitAccountCreationAddress

An implicit account creation address that can be used to convert a Basic Output to an Account Output.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`ImplicitAccountCreationAddress`**

## Table of contents

### Constructors

- [constructor](ImplicitAccountCreationAddress.md#constructor)

### Properties

- [type](ImplicitAccountCreationAddress.md#type)

### Methods

- [parse](ImplicitAccountCreationAddress.md#parse)
- [address](ImplicitAccountCreationAddress.md#address)
- [toString](ImplicitAccountCreationAddress.md#tostring)

## Constructors

### constructor

• **new ImplicitAccountCreationAddress**(`pubKeyHash`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pubKeyHash` | `string` | BLAKE2b-256 hash of an Ed25519 public key as hex-encoded string. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

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

### address

▸ **address**(): [`Ed25519Address`](Ed25519Address.md)

#### Returns

[`Ed25519Address`](Ed25519Address.md)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Address](Address.md).[toString](Address.md#tostring)
