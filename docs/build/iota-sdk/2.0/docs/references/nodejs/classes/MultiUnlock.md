# Class: MultiUnlock

Unlocks a MultiAddress with a list of other unlocks.

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`MultiUnlock`**

## Table of contents

### Constructors

- [constructor](MultiUnlock.md#constructor)

### Properties

- [type](MultiUnlock.md#type)
- [unlocks](MultiUnlock.md#unlocks)

## Constructors

### constructor

• **new MultiUnlock**(`unlocks`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unlocks` | [`Unlock`](Unlock.md)[] | The inner unlocks. |

#### Overrides

[Unlock](Unlock.md).[constructor](Unlock.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockType`](../enums/UnlockType.md)

The type of unlock.

#### Inherited from

[Unlock](Unlock.md).[type](Unlock.md#type)

___

### unlocks

• `Readonly` **unlocks**: [`Unlock`](Unlock.md)[]

The inner unlocks.
