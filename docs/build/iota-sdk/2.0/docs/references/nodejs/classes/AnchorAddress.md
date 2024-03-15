# Class: AnchorAddress

An Anchor address.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`AnchorAddress`**

## Table of contents

### Constructors

- [constructor](AnchorAddress.md#constructor)

### Properties

- [type](AnchorAddress.md#type)
- [anchorId](AnchorAddress.md#anchorid)

### Methods

- [parse](AnchorAddress.md#parse)
- [toString](AnchorAddress.md#tostring)

## Constructors

### constructor

• **new AnchorAddress**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | An anchor address as anchor ID. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

___

### anchorId

• `Readonly` **anchorId**: `string`

The anchor ID.

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
