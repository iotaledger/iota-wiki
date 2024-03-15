---
sidebar_label: output_id_proof
title: iota_sdk.types.output_id_proof
---

## TreeNodeType Objects

```python
class TreeNodeType(IntEnum)
```

Tree node types.

**Attributes**:

- `HashableNode` _0_ - Denotes a HashableNode.
- `LeafHash` _1_ - Denotes a LeafHash.
- `Valuehash` _2_ - Denotes a Valuehash.

### deserialize\_proof

```python
def deserialize_proof(d: Dict[str, Any]) -> OutputCommitmentProof
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

## HashableNode Objects

```python
@json

@dataclass
class HashableNode()
```

Node contains the hashes of the left and right children of a node in the tree.

## LeafHash Objects

```python
@json

@dataclass
class LeafHash()
```

Leaf Hash contains the hash of a leaf in the tree.

## ValueHash Objects

```python
@json

@dataclass
class ValueHash()
```

Value Hash contains the hash of the value for which the proof is being computed.

## OutputIdProof Objects

```python
@json

@dataclass
class OutputIdProof()
```

The proof of the output identifier.

**Attributes**:

- `slot` - The slot index of the output.
- `output_index` - The index of the output within the corresponding transaction.
- `transaction_commitment` - The commitment of the transaction that created the output. Hex-encoded with 0x prefix.
- `output_commitment_proof` - The proof of the output commitment. Hex-encoded with 0x prefix.

