---
sidebar_label: output_metadata
title: iota_sdk.types.output_metadata
---

## OutputMetadata Objects

```python
@json

@dataclass
class OutputMetadata()
```

Metadata about an output.
Response of GET /api/core/v3/outputs/{output_id}/metadata.

**Attributes**:

- `output_id` - The ID of the output.
- `block_id` - The ID of the block in which the output appeared in.
- `included` - Metadata of the output if it is included in the ledger.
- `latest_commitment_id` - Latest commitment ID of the node.
- `spent` - Metadata of the output if it is marked as spent in the ledger.

## OutputWithMetadata Objects

```python
@json

@dataclass
class OutputWithMetadata()
```

An output with its metadata.

**Attributes**:

- `metadata` - The `OutputMetadata` object that belongs to `output`.
- `output` - An `Output` object.

### from\_dict

```python
@classmethod
def from_dict(cls, data_dict: Dict) -> OutputWithMetadata
```

Creates an output with metadata instance from the dict object.

### as\_dict

```python
def as_dict()
```

Returns a dictionary representation of OutputWithMetadata, with the fields metadata and output.

## OutputInclusionMetadata Objects

```python
@json

@dataclass
class OutputInclusionMetadata()
```

Metadata about a created (unspent) output.

**Attributes**:

- `slot` - Slot in which the output was included.
- `transaction_id` - Transaction ID that created the output.
- `commitment_id` - Commitment ID that includes the creation of the output.

## OutputConsumptionMetadata Objects

```python
@json

@dataclass
class OutputConsumptionMetadata()
```

Metadata about a consumed (spent) output.

**Attributes**:

- `slot` - Slot in which the output was spent.
- `transaction_id` - Transaction ID that spent the output.
- `commitment_id` - Commitment ID that includes the spending of the output.

