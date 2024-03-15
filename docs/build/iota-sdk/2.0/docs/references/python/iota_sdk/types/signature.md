---
sidebar_label: signature
title: iota_sdk.types.signature
---

## Ed25519Signature Objects

```python
@json

@dataclass
class Ed25519Signature()
```

An Ed25519 signature.

**Attributes**:

- `public_key` - The Ed25519 public key.
- `signature` - The Ed25519 signature of some message.
- `type` - The Ed25519 signature type.

## Bip44 Objects

```python
@json

@dataclass
class Bip44()
```

A BIP44 chain.

**Attributes**:

- `coin_type` - The coin type segment.
- `account` - The account segment.
- `change` - The change segment.
- `address_index` - The address index segment.

