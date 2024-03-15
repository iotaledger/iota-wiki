# Class: RestrictedAddress

An address with restricted capabilities.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`RestrictedAddress`**

## Table of contents

### Constructors

- [constructor](RestrictedAddress.md#constructor)

### Properties

- [type](RestrictedAddress.md#type)
- [address](RestrictedAddress.md#address)

### Methods

- [parse](RestrictedAddress.md#parse)
- [setAllowedCapabilities](RestrictedAddress.md#setallowedcapabilities)
- [withAllowedCapabilities](RestrictedAddress.md#withallowedcapabilities)
- [getAllowedCapabilities](RestrictedAddress.md#getallowedcapabilities)
- [toString](RestrictedAddress.md#tostring)

## Constructors

### constructor

• **new RestrictedAddress**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.md) | An address. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

___

### address

• `Readonly` **address**: [`Address`](Address.md)

The inner address.

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

### setAllowedCapabilities

▸ **setAllowedCapabilities**(`allowedCapabilities`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowedCapabilities` | `Uint8Array` |

#### Returns

`void`

___

### withAllowedCapabilities

▸ **withAllowedCapabilities**(`allowedCapabilities`): [`RestrictedAddress`](RestrictedAddress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowedCapabilities` | `Uint8Array` |

#### Returns

[`RestrictedAddress`](RestrictedAddress.md)

___

### getAllowedCapabilities

▸ **getAllowedCapabilities**(): `Uint8Array`

#### Returns

`Uint8Array`

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[Address](Address.md).[toString](Address.md#tostring)
