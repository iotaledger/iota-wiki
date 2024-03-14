---
sidebar_label: transaction_data
title: iota_sdk.types.transaction_data
---

## InputSigningData Objects

```python
@json

@dataclass
class InputSigningData()
```

Data for transaction inputs for signing and ordering of unlock blocks.

**Attributes**:

- `output` - The output.
- `output_metadata` - The output metadata.
- `chain` - The BIP44 chain for the address to unlock the output.

## RemainderData Objects

```python
@json

@dataclass
class RemainderData()
```

Data for a remainder output, used for ledger nano.

**Attributes**:

- `output` - The output.
- `address` - The remainder address.
- `chain` - The BIP44 chain for the remainder address.

## PreparedTransactionData Objects

```python
@json

@dataclass
class PreparedTransactionData()
```

Helper class for offline signing.

**Attributes**:

- `transaction` - The transaction.
- `inputs_data` - Data about the inputs which is required for signing.
- `remainders` - Data about remainder outputs.
- `mana_rewards` - Mana rewards by input.

## SignedTransactionData Objects

```python
@json

@dataclass
class SignedTransactionData()
```

Helper class for offline signing.

**Attributes**:

- `payload` - The transaction payload.
- `inputs_data` - Data about the inputs consumed in the transaction.
- `mana_rewards` - Mana rewards by input.

