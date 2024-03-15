# Class: NftUnlock

An unlock which must reference a previous unlock which unlocks the NFT that the input is locked to.

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`NftUnlock`**

## Table of contents

### Constructors

- [constructor](NftUnlock.md#constructor)

### Properties

- [type](NftUnlock.md#type)
- [reference](NftUnlock.md#reference)

## Constructors

### constructor

• **new NftUnlock**(`reference`)

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
