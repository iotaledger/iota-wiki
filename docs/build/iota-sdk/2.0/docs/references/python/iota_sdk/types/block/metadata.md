---
sidebar_label: metadata
title: iota_sdk.types.block.metadata
---

## BlockMetadata Objects

```python
@json

@dataclass
class BlockMetadata()
```

Represents the metadata of a block.
Response of GET /api/core/v3/blocks/{blockId}/metadata.

**Attributes**:

- `block_state` - The block state.
- `transaction_state` - The transaction state.
- `block_failure_reason` - The block failure reason.
- `transaction_failure_reason` - The transaction failure reason.

## BlockState Objects

```python
class BlockState(Enum)
```

Describes the state of a block.

**Attributes**:

- `Pending` - Stored but not accepted/confirmed.
- `Accepted` - Valid block referenced by some validators.
- `Confirmed` - Valid block referenced by more than 2/3 of the validators.
- `Finalized` - Accepted/confirmed block and the slot was finalized, can no longer be reverted.
- `Rejected` - Rejected by the node, and user should reissue payload if it contains one.
- `Failed` - Not successfully issued due to failure reason.

## BlockFailureReason Objects

```python
class BlockFailureReason(IntEnum)
```

Describes the reason of a block failure.

**Attributes**:

- `TooOldToIssue` _1_ - The block is too old to issue.
- `ParentTooOld` _2_ - One of the block&#x27;s parents is too old.
- `ParentDoesNotExist` _3_ - One of the block&#x27;s parents does not exist.
- `IssuerAccountNotFound` _4_ - The block&#x27;s issuer account could not be found.
- `ManaCostCalculationFailed` _5_ - The mana cost could not be calculated.
- `BurnedInsufficientMana` _6_ - The block&#x27;s issuer account burned insufficient Mana for a block.
- `AccountLocked` _7_ - The account is locked.
- `AccountExpired` _8_ - The account is expired.
- `SignatureInvalid` _9_ - The block&#x27;s signature is invalid.
- `DroppedDueToCongestion` _10_ - The block is dropped due to congestion.
- `ParentTooOld`0 _11_ - The block payload is invalid.
- `ParentTooOld`1 _255_ - The block is invalid.

