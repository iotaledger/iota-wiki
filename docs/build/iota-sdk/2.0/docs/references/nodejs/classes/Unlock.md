# Class: Unlock

The base class for unlocks.

## Hierarchy

- **`Unlock`**

  ↳ [`SignatureUnlock`](SignatureUnlock.md)

  ↳ [`ReferenceUnlock`](ReferenceUnlock.md)

  ↳ [`AccountUnlock`](AccountUnlock.md)

  ↳ [`AnchorUnlock`](AnchorUnlock.md)

  ↳ [`NftUnlock`](NftUnlock.md)

  ↳ [`MultiUnlock`](MultiUnlock.md)

  ↳ [`EmptyUnlock`](EmptyUnlock.md)

## Table of contents

### Constructors

- [constructor](Unlock.md#constructor)

### Properties

- [type](Unlock.md#type)

## Constructors

### constructor

• **new Unlock**(`type`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`UnlockType`](../enums/UnlockType.md) | The type of unlock. |

## Properties

### type

• `Readonly` **type**: [`UnlockType`](../enums/UnlockType.md)

The type of unlock.
