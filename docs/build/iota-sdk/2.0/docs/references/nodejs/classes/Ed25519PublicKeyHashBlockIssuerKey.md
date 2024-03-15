# Class: Ed25519PublicKeyHashBlockIssuerKey

Ed25519 public key hash Block Issuer Key.

## Hierarchy

- [`BlockIssuerKey`](BlockIssuerKey.md)

  ↳ **`Ed25519PublicKeyHashBlockIssuerKey`**

## Table of contents

### Constructors

- [constructor](Ed25519PublicKeyHashBlockIssuerKey.md#constructor)

### Properties

- [type](Ed25519PublicKeyHashBlockIssuerKey.md#type)
- [pubKeyHash](Ed25519PublicKeyHashBlockIssuerKey.md#pubkeyhash)

## Constructors

### constructor

• **new Ed25519PublicKeyHashBlockIssuerKey**(`pubKeyHash`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pubKeyHash` | `string` |

#### Overrides

[BlockIssuerKey](BlockIssuerKey.md).[constructor](BlockIssuerKey.md#constructor)

## Properties

### type

• `Readonly` **type**: [`Ed25519PublicKeyHash`](../enums/BlockIssuerKeyType.md#ed25519publickeyhash)

#### Inherited from

[BlockIssuerKey](BlockIssuerKey.md).[type](BlockIssuerKey.md#type)

___

### pubKeyHash

• `Readonly` **pubKeyHash**: `string`

An Ed25519 public key hash.
