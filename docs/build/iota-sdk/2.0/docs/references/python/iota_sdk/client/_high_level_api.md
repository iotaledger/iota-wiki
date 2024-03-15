---
sidebar_label: _high_level_api
title: iota_sdk.client._high_level_api
---

## Range Objects

```python
@json

@dataclass
class Range()
```

Represents a range of address indexes.

**Attributes**:

- `start` - The start index of the address range.
- `end` - The end index of the address range.

## GenerateAddressOptions Objects

```python
@json

@dataclass
class GenerateAddressOptions()
```

Options for generating an address.

**Attributes**:

- `internal` - Whether to generate an internal address.
- `ledger_nano_prompt` - Whether to display the generated address on Ledger Nano devices.

## GenerateAddressesOptions Objects

```python
@json

@dataclass
class GenerateAddressesOptions()
```

Options for generating addresses.

**Attributes**:

- `coin_type` - The type of coin.
- `range` - The range of addresses to generate.
- `bech32_hrp` - The bech32 HRP (human readable part) to use.
- `account_index` - An account index.
- `options` - An instance of `GenerateAddressOptions`.

## HighLevelAPI Objects

```python
class HighLevelAPI(metaclass=ABCMeta)
```

High level API.

### get\_outputs

```python
def get_outputs(output_ids: List[OutputId]) -> List[OutputWithMetadata]
```

Fetch OutputWithMetadata from provided OutputIds (requests are sent in parallel).

**Arguments**:

- `output_ids` - A list of output ids.
  

**Returns**:

  A list of corresponding `OutputWithMetadata` objects.

### get\_outputs\_ignore\_errors

```python
def get_outputs_ignore_errors(
        output_ids: List[OutputId]) -> List[OutputWithMetadata]
```

Try to get OutputWithMetadata from provided OutputIds.
Requests are sent in parallel and errors are ignored, can be useful for spent outputs.

**Arguments**:

- `output_ids` - A list of output ids.
  

**Returns**:

  A list of corresponding `OutputWithMetadata` objects.

### find\_blocks

```python
def find_blocks(block_ids: List[BlockId]) -> List[Block]
```

Find all blocks by provided block IDs.

**Arguments**:

- `block_ids` - A list of block ids.
  

**Returns**:

  A list of corresponding `Block`s.

### find\_inputs

```python
def find_inputs(addresses: List[str], amount: int)
```

Function to find inputs from addresses for a provided amount(useful for offline signing).

**Arguments**:

- `addresses` - A list of included addresses.
- `amount` - The amount to find inputs for.

