---
sidebar_label: transaction_metadata
title: iota_sdk.types.transaction_metadata
---

## TransactionState Objects

```python
class TransactionState(Enum)
```

Describes the state of a transaction.

**Attributes**:

- `Pending` - Not included yet.
- `Accepted` - Included.
- `Confirmed` - Included and its included block is confirmed.
- `Finalized` - Included, its included block is finalized and cannot be reverted anymore.
- `Failed` - Not successfully issued due to failure reason.

## TransactionFailureReason Objects

```python
class TransactionFailureReason(Enum)
```

Represents the possible reasons for a failing transaction.

