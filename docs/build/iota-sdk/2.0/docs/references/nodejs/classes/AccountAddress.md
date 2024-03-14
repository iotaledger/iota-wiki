# Class: AccountAddress

An Account address.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`AccountAddress`**

## Table of contents

### Constructors

- [constructor](AccountAddress.md#constructor)

### Properties

- [type](AccountAddress.md#type)
- [accountId](AccountAddress.md#accountid)

### Methods

- [parse](AccountAddress.md#parse)
- [toString](AccountAddress.md#tostring)

## Constructors

### constructor

• **new AccountAddress**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | An account address as account ID. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

___

### accountId

• `Readonly` **accountId**: `string`

The account ID.

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
