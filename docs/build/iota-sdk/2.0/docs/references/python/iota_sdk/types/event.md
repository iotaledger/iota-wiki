---
sidebar_label: event
title: iota_sdk.types.event
---

## WalletEventType Objects

```python
class WalletEventType(IntEnum)
```

Types of wallet events.

**Attributes**:

- `LedgerAddressGeneration` _0_ - Nano Ledger has generated an address.
- `NewOutput` _1_ - A new output was created.
- `SpentOutput` _2_ - An output was spent.
- `TransactionInclusion` _3_ - A transaction was included into the ledger.
- `TransactionProgress` _4_ - A progress update while submitting a transaction.

