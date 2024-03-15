# Class: AddressUnlockCondition

An address unlock condition.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`AddressUnlockCondition`**

## Table of contents

### Constructors

- [constructor](AddressUnlockCondition.md#constructor)

### Properties

- [type](AddressUnlockCondition.md#type)
- [address](AddressUnlockCondition.md#address)

### Methods

- [parse](AddressUnlockCondition.md#parse)

## Constructors

### constructor

• **new AddressUnlockCondition**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.md) | The address that needs to be unlocked with a private key. |

#### Overrides

[UnlockCondition](UnlockCondition.md).[constructor](UnlockCondition.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockConditionType`](../enums/UnlockConditionType.md)

The type of unlock condition.

#### Inherited from

[UnlockCondition](UnlockCondition.md).[type](UnlockCondition.md#type)

___

### address

• `Readonly` **address**: [`Address`](Address.md)

An address unlocked with a private key.

## Methods

### parse

▸ `Static` **parse**(`data`): [`UnlockCondition`](UnlockCondition.md)

Parse an unlock condition from a plain JS JSON object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UnlockCondition`](UnlockCondition.md)

#### Inherited from

[UnlockCondition](UnlockCondition.md).[parse](UnlockCondition.md#parse)
