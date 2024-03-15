---
sidebar_label: prepared_transaction
title: iota_sdk.wallet.prepared_transaction
---

## PreparedTransaction Objects

```python
@dataclass
class PreparedTransaction()
```

A helper class for offline signing.

**Attributes**:

- `wallet` - A wallet object used to continue building this transaction.
- `prepared_transaction_data` - A prepared transaction data object.

### send

```python
def send() -> TransactionWithMetadata
```

Send a transaction. Internally just calls `sign_and_submit_transaction`.

**Returns**:

  The transaction after it has been signed and submitted.

### sign

```python
def sign()
```

Sign a prepared transaction using the wallet&#x27;s private key and returns
the signed transaction.

### sign\_and\_submit\_transaction

```python
def sign_and_submit_transaction() -> TransactionWithMetadata
```

Sign and submit a transaction using prepared transaction data.

**Returns**:

  The transaction after it has been signed and submitted.

## PreparedCreateTokenTransaction Objects

```python
@dataclass
class PreparedCreateTokenTransaction()
```

A helper class for offline signing a create native token transaction.

**Attributes**:

- `wallet` - A wallet object used to continue building this transaction.
- `prepared_transaction_data` - A prepared transaction data object.

### send

```python
def send() -> CreateNativeTokenTransaction
```

Send a transaction. Internally just calls `sign_and_submit_transaction`.

**Returns**:

  The transaction after it has been signed and submitted.

### sign

```python
def sign()
```

Sign a prepared transaction using the wallet&#x27;s private key and returns
the signed transaction.

### sign\_and\_submit\_transaction

```python
def sign_and_submit_transaction() -> CreateNativeTokenTransaction
```

Sign and submit a transaction using prepared transaction data.

**Returns**:

  The transaction after it has been signed and submitted.

## PreparedCreateTokenTransactionData Objects

```python
@json

@dataclass
class PreparedCreateTokenTransactionData()
```

Prepared transaction data for creating a native token.

**Attributes**:

- `token_id` - The token id.
- `transaction` - The transaction that will create the delegation.

## PreparedCreateDelegationTransaction Objects

```python
@dataclass
class PreparedCreateDelegationTransaction()
```

A helper class for offline signing to create a delegation transaction.

**Attributes**:

- `wallet` - A wallet object used to continue building this transaction.
- `prepared_transaction_data` - A prepared transaction data object.

### send

```python
def send() -> CreateDelegationTransaction
```

Send a transaction. Internally just calls `sign_and_submit_transaction`.

**Returns**:

  The transaction after it has been signed and submitted.

### sign

```python
def sign()
```

Sign a prepared transaction using the wallet&#x27;s private key and returns
the signed transaction.

### sign\_and\_submit\_transaction

```python
def sign_and_submit_transaction() -> CreateDelegationTransaction
```

Sign and submit a transaction using prepared transaction data.

**Returns**:

  The transaction after it has been signed and submitted.

## PreparedCreateDelegationTransactionData Objects

```python
@json

@dataclass
class PreparedCreateDelegationTransactionData()
```

Prepared transaction data for creating a delegation.

**Attributes**:

- `delegation_id` - The id of the delegation that will be created.
- `transaction` - The transaction that will create the delegation.

