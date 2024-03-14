# Class: SignatureUnlock

An unlock holding one or more signatures unlocking one or more inputs..

## Hierarchy

- [`Unlock`](Unlock.md)

  ↳ **`SignatureUnlock`**

## Table of contents

### Constructors

- [constructor](SignatureUnlock.md#constructor)

### Properties

- [type](SignatureUnlock.md#type)
- [signature](SignatureUnlock.md#signature)

## Constructors

### constructor

• **new SignatureUnlock**(`signature`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signature` | [`Ed25519Signature`](Ed25519Signature.md) | An Ed25519 signature. |

#### Overrides

[Unlock](Unlock.md).[constructor](Unlock.md#constructor)

## Properties

### type

• `Readonly` **type**: [`UnlockType`](../enums/UnlockType.md)

The type of unlock.

#### Inherited from

[Unlock](Unlock.md).[type](Unlock.md#type)

___

### signature

• `Readonly` **signature**: [`Ed25519Signature`](Ed25519Signature.md)

The signature.
