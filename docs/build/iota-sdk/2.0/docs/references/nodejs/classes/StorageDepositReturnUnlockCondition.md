# Class: StorageDepositReturnUnlockCondition

A Storage Deposit Return Unlock Condition.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`StorageDepositReturnUnlockCondition`**

## Table of contents

### Constructors

- [constructor](StorageDepositReturnUnlockCondition.md#constructor)

### Properties

- [type](StorageDepositReturnUnlockCondition.md#type)
- [amount](StorageDepositReturnUnlockCondition.md#amount)
- [returnAddress](StorageDepositReturnUnlockCondition.md#returnaddress)

### Methods

- [parse](StorageDepositReturnUnlockCondition.md#parse)
- [getAmount](StorageDepositReturnUnlockCondition.md#getamount)

## Constructors

### constructor

• **new StorageDepositReturnUnlockCondition**(`returnAddress`, `amount`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnAddress` | [`Address`](Address.md) | The address to return the amount to. |
| `amount` | `string` \| `bigint` | The amount the consuming transaction must deposit to `returnAddress`. |

#### Overrides

[UnlockCondition](UnlockCondition.md).[constructor](UnlockCondition.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockConditionType`](../enums/UnlockConditionType.md)

The type of unlock condition.

#### Inherited from

[UnlockCondition](UnlockCondition.md).[type](UnlockCondition.md#type)

___

### amount

• `Readonly` **amount**: `string`

The amount the consuming transaction must deposit to `returnAddress`.

___

### returnAddress

• `Readonly` **returnAddress**: [`Address`](Address.md)

The address to return the amount to.

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

___

### getAmount

▸ **getAmount**(): `bigint`

The amount the consuming transaction must deposit to `returnAddress`.

#### Returns

`bigint`
