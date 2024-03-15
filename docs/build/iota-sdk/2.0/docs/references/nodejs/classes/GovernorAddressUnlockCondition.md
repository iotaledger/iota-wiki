# Class: GovernorAddressUnlockCondition

A Governor Address Unlock Condition.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`GovernorAddressUnlockCondition`**

## Table of contents

### Constructors

- [constructor](GovernorAddressUnlockCondition.md#constructor)

### Properties

- [type](GovernorAddressUnlockCondition.md#type)
- [address](GovernorAddressUnlockCondition.md#address)

### Methods

- [parse](GovernorAddressUnlockCondition.md#parse)

## Constructors

### constructor

• **new GovernorAddressUnlockCondition**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`Address`](Address.md) | The governor address that is allowed to do governance transitions. |

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

The Governor address.

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
