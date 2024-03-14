# Class: Ed25519Address

An Ed25519 Address.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`Ed25519Address`**

## Table of contents

### Constructors

- [constructor](Ed25519Address.md#constructor)

### Properties

- [type](Ed25519Address.md#type)
- [pubKeyHash](Ed25519Address.md#pubkeyhash)

### Methods

- [parse](Ed25519Address.md#parse)
- [toString](Ed25519Address.md#tostring)

## Constructors

### constructor

• **new Ed25519Address**(`pubKeyHash`)

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

___

### pubKeyHash

• `Readonly` **pubKeyHash**: `string`

The public key hash.

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
