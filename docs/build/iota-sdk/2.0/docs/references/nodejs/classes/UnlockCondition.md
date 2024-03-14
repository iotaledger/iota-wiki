# Class: UnlockCondition

## Hierarchy

- **`UnlockCondition`**

  ↳ [`AddressUnlockCondition`](AddressUnlockCondition.md)

  ↳ [`StorageDepositReturnUnlockCondition`](StorageDepositReturnUnlockCondition.md)

  ↳ [`TimelockUnlockCondition`](TimelockUnlockCondition.md)

  ↳ [`ExpirationUnlockCondition`](ExpirationUnlockCondition.md)

  ↳ [`StateControllerAddressUnlockCondition`](StateControllerAddressUnlockCondition.md)

  ↳ [`GovernorAddressUnlockCondition`](GovernorAddressUnlockCondition.md)

  ↳ [`ImmutableAccountAddressUnlockCondition`](ImmutableAccountAddressUnlockCondition.md)

## Table of contents

### Constructors

- [constructor](UnlockCondition.md#constructor)

### Properties

- [type](UnlockCondition.md#type)

### Methods

- [parse](UnlockCondition.md#parse)

## Constructors

### constructor

• **new UnlockCondition**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`UnlockConditionType`](../enums/UnlockConditionType.md) | The type of the unlock condition. |

## Properties

### type

• `Readonly` **type**: [`UnlockConditionType`](../enums/UnlockConditionType.md)

The type of unlock condition.

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
