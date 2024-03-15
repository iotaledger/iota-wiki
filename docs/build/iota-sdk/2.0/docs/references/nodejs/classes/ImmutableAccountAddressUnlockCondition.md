# Class: ImmutableAccountAddressUnlockCondition

Immutable Account Unlock Condition.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`ImmutableAccountAddressUnlockCondition`**

## Table of contents

### Constructors

- [constructor](ImmutableAccountAddressUnlockCondition.md#constructor)

### Properties

- [type](ImmutableAccountAddressUnlockCondition.md#type)
- [address](ImmutableAccountAddressUnlockCondition.md#address)

### Methods

- [parse](ImmutableAccountAddressUnlockCondition.md#parse)

## Constructors

### constructor

• **new ImmutableAccountAddressUnlockCondition**(`address`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | [`AccountAddress`](AccountAddress.md) | The Immutable Account address that owns the output. |

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

The Immutable Account address.

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
