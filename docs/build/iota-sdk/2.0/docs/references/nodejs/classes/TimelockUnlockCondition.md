# Class: TimelockUnlockCondition

Defines a slot index until which the output can not be unlocked.

## Hierarchy

- [`UnlockCondition`](UnlockCondition.md)

  ↳ **`TimelockUnlockCondition`**

## Table of contents

### Constructors

- [constructor](TimelockUnlockCondition.md#constructor)

### Properties

- [type](TimelockUnlockCondition.md#type)
- [slotIndex](TimelockUnlockCondition.md#slotindex)

### Methods

- [parse](TimelockUnlockCondition.md#parse)

## Constructors

### constructor

• **new TimelockUnlockCondition**(`slotIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotIndex` | `number` |

#### Overrides

[UnlockCondition](UnlockCondition.md).[constructor](UnlockCondition.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockConditionType`](../enums/UnlockConditionType.md)

The type of unlock condition.

#### Inherited from

[UnlockCondition](UnlockCondition.md).[type](UnlockCondition.md#type)

___

### slotIndex

• `Readonly` **slotIndex**: `number`

Slot index starting from which the output can be consumed.

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
