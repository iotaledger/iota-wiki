# Class: AnchorUnlock

An unlock which must reference a previous unlock which unlocks the anchor that the input is locked to.

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`AnchorUnlock`**

## Table of contents

### Constructors

- [constructor](AnchorUnlock.md#constructor)

### Properties

- [type](AnchorUnlock.md#type)
- [reference](AnchorUnlock.md#reference)

## Constructors

### constructor

• **new AnchorUnlock**(`reference`)

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
