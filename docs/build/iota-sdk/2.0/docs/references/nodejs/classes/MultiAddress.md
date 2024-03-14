# Class: MultiAddress

An address that consists of addresses with weights and a threshold value.
The Multi Address can be unlocked if the cumulative weight of all unlocked addresses is equal to or exceeds the
threshold.

## Hierarchy

- [`Address`](Address.md)

  ↳ **`MultiAddress`**

## Table of contents

### Constructors

- [constructor](MultiAddress.md#constructor)

### Properties

- [type](MultiAddress.md#type)
- [addresses](MultiAddress.md#addresses)
- [threshold](MultiAddress.md#threshold)

### Methods

- [parse](MultiAddress.md#parse)
- [toString](MultiAddress.md#tostring)

## Constructors

### constructor

• **new MultiAddress**(`addresses`, `threshold`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addresses` | [`WeightedAddress`](WeightedAddress.md)[] | The weighted unlocked addresses. |
| `threshold` | `number` | The threshold that needs to be reached by the unlocked addresses in order to unlock the multi address. |

#### Overrides

[Address](Address.md).[constructor](Address.md#constructor)

## Properties

### type

• `Readonly` **type**: [`AddressType`](../enums/AddressType.md)

The type of address.

#### Inherited from

[Address](Address.md).[type](Address.md#type)

___

### addresses

• `Readonly` **addresses**: [`WeightedAddress`](WeightedAddress.md)[]

The weighted unlocked addresses.

___

### threshold

• `Readonly` **threshold**: `number`

The threshold that needs to be reached by the unlocked addresses in order to unlock the multi address.

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
