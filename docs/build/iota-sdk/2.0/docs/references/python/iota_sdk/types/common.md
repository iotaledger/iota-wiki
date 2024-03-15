---
sidebar_label: common
title: iota_sdk.types.common
---

### json

```python
def json(cls)
```

Decorator to add to_dict and to_json methods to a dataclass.

## CoinType Objects

```python
class CoinType(IntEnum)
```

Coin types.

**Attributes**:

- `IOTA` _4218_ - IOTA
- `SHIMMER` _4219_ - SHIMMER
- `ETHER` _60_ - ETHER

## Node Objects

```python
@json

@dataclass
class Node()
```

Represents a node in the network.

**Attributes**:

- `url` - The node url.
- `jwt` - A JWT token for authentication.
- `username` - A username for basic authentication.
- `password` - A password for basic authentication.
- `disabled` - Whether the node should be used for API requests or not.
- `permanode` - Whether the node is a permanode or not.

### to\_dict

```python
def to_dict() -> dict
```

Custom dict conversion.

### opt\_int\_encoder

```python
def opt_int_encoder(value)
```

Transforms int to string if Optional is not None

**Attributes**:

- `value` - The optional int

### hex\_str\_decoder

```python
def hex_str_decoder(value: str) -> int
```

Parses a given string as a hexadecimal integer.

## AddressAndAmount Objects

```python
@json

@dataclass
class AddressAndAmount()
```

Parameters to send a certain amount of coins to an address.

**Attributes**:

- `amount` - The base coin amount to send.
- `address` - The receive address.

## IdWithSlotIndex Objects

```python
class IdWithSlotIndex(str)
```

Represents an hex encoded ID that contains a slot index at the end.

**Attributes**:

- `id` - The hex encoded ID with a slot index.

### slot\_index

```python
def slot_index()
```

Returns the slot index of the ID.

