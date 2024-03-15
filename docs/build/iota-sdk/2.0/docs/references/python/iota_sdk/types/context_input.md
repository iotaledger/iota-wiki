---
sidebar_label: context_input
title: iota_sdk.types.context_input
---

## ContextInputType Objects

```python
class ContextInputType(IntEnum)
```

Context input types.

## CommitmentContextInput Objects

```python
@json

@dataclass
class CommitmentContextInput()
```

A Commitment Context Input allows referencing a commitment to a certain slot.

**Attributes**:

- `type` - The type of context input.
- `commitment_id` - The commitment identifier to reference.

## BlockIssuanceCreditContextInput Objects

```python
@json

@dataclass
class BlockIssuanceCreditContextInput()
```

A Block Issuance Credit (BIC) Context Input provides the VM with context for the value of
the BIC vector of a specific slot.

**Attributes**:

- `type` - The type of context input.
- `account_id` - The ID of the Account for which this input provides the BIC.

## RewardContextInput Objects

```python
@json

@dataclass
class RewardContextInput()
```

A Reward Context Input indicates which transaction Input is claiming Mana rewards.

**Attributes**:

- `type` - The type of context input.
- `index` - The index of the transaction input for which to claim rewards.

### deserialize\_context\_input

```python
def deserialize_context_input(d: Dict[str, Any]) -> ContextInput
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_context\_inputs

```python
def deserialize_context_inputs(
        dicts: List[Dict[str, Any]]) -> List[ContextInput]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

