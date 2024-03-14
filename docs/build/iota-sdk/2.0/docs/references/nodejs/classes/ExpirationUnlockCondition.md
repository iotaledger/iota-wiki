# Class: ExpirationUnlockCondition

Defines a slot index until which only the Address defined in the Address Unlock Condition is allowed to unlock the output.
After the slot index is reached/passed, only the Return Address can unlock it.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`ExpirationUnlockCondition`**

## Table of contents

### Constructors

- [constructor](ExpirationUnlockCondition.md#constructor)

### Properties

- [type](ExpirationUnlockCondition.md#type)
- [returnAddress](ExpirationUnlockCondition.md#returnaddress)
- [slotIndex](ExpirationUnlockCondition.md#slotindex)

### Methods

- [parse](ExpirationUnlockCondition.md#parse)

## Constructors

### constructor

• **new ExpirationUnlockCondition**(`returnAddress`, `slotIndex`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnAddress` | [`Address`](Address.md) | The address that can unlock the expired output. |
| `slotIndex` | `number` | The slot index timestamp marking the end of the claim period. |

#### Overrides

[UnlockCondition](UnlockCondition.md).[constructor](UnlockCondition.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockConditionType`](../enums/UnlockConditionType.md)

The type of unlock condition.

#### Inherited from

[UnlockCondition](UnlockCondition.md).[type](UnlockCondition.md#type)

___

### returnAddress

• `Readonly` **returnAddress**: [`Address`](Address.md)

The return address.

___

### slotIndex

• `Readonly` **slotIndex**: `number`

Before this slot index, the Address Unlock Condition is allowed to unlock the output, after that only the address defined in Return Address can.

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
