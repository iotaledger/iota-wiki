---
sidebar_label: prepared_transaction_data
title: iota_sdk.wallet.prepared_transaction_data
---

## PreparedTransactionData Objects

```python
class PreparedTransactionData()
```

### \_\_init\_\_

```python
def __init__(account, prepared_transaction_data)
```

Helper struct for offline signing

Parameters
----------
account : account object
    An account object used to continue building this transaction.
prepared_transaction_data : dict of prepared data
    The data of a prepared transaction object

## PreparedMintTokenTransaction Objects

```python
class PreparedMintTokenTransaction(PreparedTransactionData)
```

The function returns the token_id as a string.

**Returns**:

The token id of the PreparedMintTokenTransaction.

