---
sidebar_label: input
title: iota_sdk.types.input
---

## InputType Objects

```python
class InputType(IntEnum)
```

Input types.

**Attributes**:

- `Utxo` - An unspent transaction output.

## UtxoInput Objects

```python
@json

@dataclass
class UtxoInput()
```

Represents an input referencing an output.

**Attributes**:

- `type` - The type of input.
- `transaction_id` - The transaction id that created the output.
- `transaction_output_index` - The output index.

### deserialize\_input

```python
def deserialize_input(d: Dict[str, Any]) -> Input
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_inputs

```python
def deserialize_inputs(dicts: List[Dict[str, Any]]) -> List[Input]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

