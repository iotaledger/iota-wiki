---
sidebar_label: block
title: iota_sdk.types.block.block
---

## BlockHeader Objects

```python
@json

@dataclass
class BlockHeader()
```

The block header which holds data that is shared between different block body types.

**Attributes**:

- `protocol_version` - Protocol version of the network to which this block belongs.
- `network_id` - The identifier of the network to which this block belongs.
- `issuing_time` - The time at which the block was issued. It is a Unix timestamp in nanoseconds.
- `slot_commitment_id` - The identifier of the slot to which this block commits.
- `latest_finalized_slot` - The slot index of the latest finalized slot.
- `issuer_id` - The identifier of the account that issued this block.

## UnsignedBlock Objects

```python
@json

@dataclass
class UnsignedBlock()
```

An unsigned block type that can hold either a `BasicBlockBody` or a `ValidationBlockBody`.
Data that is shared between different block body types is stored in the block header.

**Attributes**:

- `header` - The block header.
- `body` - Holds either a `BasicBlockBody` or a `ValidationBlockBody`.

### deserialize\_block\_body

```python
def deserialize_block_body(d: Dict[str, Any]) -> BlockBody
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

## Block Objects

```python
@json

@dataclass
class Block()
```

A signed block that can hold either a `BasicBlockBody` or a `ValidationBlockBody`.
Data that is shared between different block body types is stored in the block header.

**Attributes**:

- `header` - The block header.
- `body` - Holds either a `BasicBlockBody` or a `ValidationBlockBody`.
- `signature` - The Block signature.

### id

```python
def id(params: ProtocolParameters) -> BlockId
```

Returns the block ID as a hexadecimal string.

