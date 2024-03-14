# Class: AccountUnlock

An unlock which must reference a previous unlock which unlocks the account that the input is locked to.

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`AccountUnlock`**

## Table of contents

### Constructors

- [constructor](AccountUnlock.md#constructor)

### Properties

- [type](AccountUnlock.md#type)
- [reference](AccountUnlock.md#reference)

## Constructors

### constructor

• **new AccountUnlock**(`reference`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `number` | An index referencing a previous unlock. |

#### Overrides

[Unlock](Unlock.md).[constructor](Unlock.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockType`](../enums/UnlockType.md)

The type of unlock.

#### Inherited from

[Unlock](Unlock.md).[type](Unlock.md#type)

___

### reference

• `Readonly` **reference**: `number`

The reference.
