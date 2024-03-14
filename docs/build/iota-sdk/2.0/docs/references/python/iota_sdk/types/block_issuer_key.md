---
sidebar_label: block_issuer_key
title: iota_sdk.types.block_issuer_key
---

## BlockIssuerKeyType Objects

```python
class BlockIssuerKeyType(IntEnum)
```

BlockIssuerKey type variants.

**Attributes**:

- `Ed25519PublicKeyHash` _0_ - Ed25519 public key hash block issuer key.

## Ed25519PublicKeyHashBlockIssuerKey Objects

```python
@json

@dataclass
class Ed25519PublicKeyHashBlockIssuerKey()
```

A Block Issuer Key backed by an Ed25519 Public Key Hash.

**Attributes**:

- `pub_key_hash` - The hex encoded Ed25519 public key hash.

### deserialize\_block\_issuer\_key

```python
def deserialize_block_issuer_key(d: Dict[str, Any]) -> BlockIssuerKey
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_block\_issuer\_keys

```python
def deserialize_block_issuer_keys(
        dicts: List[Dict[str, Any]]) -> List[BlockIssuerKey]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

