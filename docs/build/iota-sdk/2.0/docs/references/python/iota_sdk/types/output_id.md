---
sidebar_label: output_id
title: iota_sdk.types.output_id
---

## OutputId Objects

```python
class OutputId(dict)
```

Represents an output ID.

**Attributes**:

- `output_id` - The unique id of an output.
- `transaction_id` - The transaction id associated with the output.
- `output_index` - The index of the output within a transaction.

### \_\_init\_\_

```python
def __init__(transaction_id: TransactionId, output_index: int)
```

Initialize OutputId

### from\_string

```python
@classmethod
def from_string(cls, output_id: HexStr)
```

Creates an `OutputId` instance from a `HexStr`.

**Arguments**:

- `output_id` - The unique id of an output as a hex string.
  

**Returns**:

- `OutputId` - The unique id of an output.

## OutputWithId Objects

```python
@json

@dataclass
class OutputWithId()
```

An Output with its ID.

**Arguments**:

- `output` - Output,
- `output_id` - OutputId,

