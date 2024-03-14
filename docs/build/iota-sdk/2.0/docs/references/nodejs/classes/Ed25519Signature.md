# Class: Ed25519Signature

An Ed25519 signature.

## Hierarchy

- [`Signature`](Signature.md)

  ↳ **`Ed25519Signature`**

## Table of contents

### Constructors

- [constructor](Ed25519Signature.md#constructor)

### Properties

- [type](Ed25519Signature.md#type)
- [publicKey](Ed25519Signature.md#publickey)
- [signature](Ed25519Signature.md#signature)

## Constructors

### constructor

• **new Ed25519Signature**(`publicKey`, `signature`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | A Ed25519 public key as hex-encoded string. |
| `signature` | `string` | A Ed25519 signature as hex-encoded string. |

#### Overrides

[Signature](Signature.md).[constructor](Signature.md#constructor)

## Properties

### type

• `Readonly` **type**: [`Ed25519`](../enums/SignatureType.md#ed25519)

The type of signature.

#### Inherited from

[Signature](Signature.md).[type](Signature.md#type)

___

### publicKey

• `Readonly` **publicKey**: `string`

The public key.

___

### signature

• `Readonly` **signature**: `string`

The signature.
