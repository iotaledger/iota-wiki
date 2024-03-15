# Class: StateControllerAddressUnlockCondition

A State Controller Address Unlock Condition.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`StateControllerAddressUnlockCondition`**

## Table of contents

### Constructors

- [constructor](StateControllerAddressUnlockCondition.md#constructor)

### Properties

- [type](StateControllerAddressUnlockCondition.md#type)
- [address](StateControllerAddressUnlockCondition.md#address)

### Methods

- [parse](StateControllerAddressUnlockCondition.md#parse)

## Constructors

### constructor

• **new StateControllerAddressUnlockCondition**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.md) | The State Controller address that is allowed to do state transitions. |

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

The address.

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
