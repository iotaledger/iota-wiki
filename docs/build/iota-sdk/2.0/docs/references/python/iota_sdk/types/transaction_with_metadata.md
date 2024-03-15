---
sidebar_label: transaction_with_metadata
title: iota_sdk.types.transaction_with_metadata
---

## InclusionState Objects

```python
class InclusionState(str, Enum)
```

Inclusion state variants of a transaction.

**Attributes**:

- `Pending` - The transaction is pending.
- `Accepted` - The transaction is accepted.
- `Confirmed` - The transaction is confirmed.
- `Finalized` - The transaction is finalized.
- `Conflicting` - The transaction is conflicting.
- `UnknownPruned` - The transaction is unknown or already pruned.

## TransactionWithMetadata Objects

```python
@json

@dataclass
class TransactionWithMetadata()
```

A transaction with some metadata.

**Attributes**:

- `payload` - The transaction payload.
- `inclusion_state` - The inclusion state of the transaction.
- `timestamp` - The timestamp of the transaction.
- `transaction_id` - The ID of the corresponding transaction.
- `network_id` - The ID of the network this transaction was issued in.
- `incoming` - Indicates whether the transaction was created by the wallet or whether it was sent by someone else and is incoming.
- `inputs` - The inputs of the transaction.
- `note` - A note attached to the transaction.
- `block_id` - The ID of the block that holds the transaction.

## CreateNativeTokenTransaction Objects

```python
@json

@dataclass
class CreateNativeTokenTransaction()
```

A transaction that created a native token.

**Attributes**:

- `token_id` - The id of the created native token.
- `transaction` - The transaction that created the native token.

## CreateDelegationTransaction Objects

```python
@json

@dataclass
class CreateDelegationTransaction()
```

A transaction that created a delegation.

**Attributes**:

- `delegation_id` - The id of the created delegation.
- `transaction` - The transaction that created the delegation.

