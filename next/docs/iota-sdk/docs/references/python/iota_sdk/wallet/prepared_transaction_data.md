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

#### Parameters

* __account__*: account object*  
    An account object used to continue building this transaction.
* __prepared_transaction_data__*: dict of prepared data*  
    The data of a prepared transaction object

## PreparedCreateTokenTransaction Objects

```python
class PreparedCreateTokenTransaction(PreparedTransactionData)
```

The function returns the token_id as a string.

**Returns**:

The token id of the PreparedCreateTokenTransaction.

