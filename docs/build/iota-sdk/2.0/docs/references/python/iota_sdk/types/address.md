---
sidebar_label: address
title: iota_sdk.types.address
---

## AddressType Objects

```python
class AddressType(IntEnum)
```

Address type variants.

**Attributes**:

- `ED25519` _0_ - Ed25519 address.
- `ACCOUNT` _8_ - Account address.
- `NFT` _16_ - Nft address.
- `ANCHOR` _24_ - Anchor address.
- `IMPLICIT_ACCOUNT_CREATION` _32_ - Implicit Account Creation address.
- `MULTI` _40_ - Multi address.
- `RESTRICTED` _48_ - Address with restricted capabilities.

## Ed25519Address Objects

```python
@json

@dataclass
class Ed25519Address()
```

Represents an Ed25519 address.

**Attributes**:

- `pub_key_hash` - The hex encoded Ed25519 public key hash.

## AccountAddress Objects

```python
@json

@dataclass
class AccountAddress()
```

Represents an Account address.

**Attributes**:

- `account_id` - The hex encoded account id.

## NFTAddress Objects

```python
@json

@dataclass
class NFTAddress()
```

Represents an NFT address.

**Attributes**:

- `nft_id` - The hex encoded NFT id.

## AnchorAddress Objects

```python
@json

@dataclass
class AnchorAddress()
```

Represents an Anchor address.

**Attributes**:

- `anchor_id` - The hex encoded anchor id.

## ImplicitAccountCreationAddress Objects

```python
@json

@dataclass
class ImplicitAccountCreationAddress()
```

An implicit account creation address that can be used to convert a Basic Output to an Account Output.

**Attributes**:

- `address` - The hex encoded Ed25519 Address.

### to\_dict

```python
def to_dict() -> dict
```

Converts an implicit account creation address to the dictionary representation.

### from\_dict

```python
@staticmethod
def from_dict(addr_dict: dict)
```

Creates an implicit account creation address from a dictionary representation.

## WeightedAddress Objects

```python
@json

@dataclass
class WeightedAddress()
```

An address with an assigned weight.

**Attributes**:

- `address` - The unlocked address.
- `weight` - The weight of the unlocked address.

## MultiAddress Objects

```python
@json

@dataclass
class MultiAddress()
```

An address that consists of addresses with weights and a threshold value.
The Multi Address can be unlocked if the cumulative weight of all unlocked addresses is equal to or exceeds the
threshold.

**Attributes**:

- `addresses` - The weighted unlocked addresses.
- `threshold` - The threshold that needs to be reached by the unlocked addresses in order to unlock the multi address.

## RestrictedAddress Objects

```python
@json

@dataclass
class RestrictedAddress()
```

Represents an address with restricted capabilities.

**Attributes**:

- `address` - The inner restricted Address.
- `allowed_capabilities` - The allowed capabilities bitflags.

### with\_allowed\_capabilities

```python
def with_allowed_capabilities(capabilities: bytes)
```

Sets the allowed capabilities from a byte array.

**Attributes**:

- `capabilities` - The allowed capabilities bitflags.

### deserialize\_address

```python
def deserialize_address(d: Dict[str, Any]) -> Address
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_addresses

```python
def deserialize_addresses(dicts: List[Dict[str, Any]]) -> List[Address]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

