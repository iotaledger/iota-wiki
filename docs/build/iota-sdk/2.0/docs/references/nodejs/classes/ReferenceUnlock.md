# Class: ReferenceUnlock

An unlock which must reference a previous unlock which unlocks
also the input at the same index as this Reference Unlock.

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`ReferenceUnlock`**

## Table of contents

### Constructors

- [constructor](ReferenceUnlock.md#constructor)

### Properties

- [type](ReferenceUnlock.md#type)
- [reference](ReferenceUnlock.md#reference)

## Constructors

### constructor

• **new ReferenceUnlock**(`reference`)

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
