# Class: PreparedTransactionData

PreparedTransactionData` is a class that represents prepared transaction data, which
is useful for offline signing. It contains the prepared transaction data and an
`Account` object. It provides methods to retrieve the prepared transaction data, sign
the transaction and sign+submit/send the transaction.

## Table of contents

### Methods

- [preparedTransactionData](PreparedTransactionData.md#preparedtransactiondata)
- [send](PreparedTransactionData.md#send)
- [sign](PreparedTransactionData.md#sign)
- [signAndSubmitTransaction](PreparedTransactionData.md#signandsubmittransaction)

## Methods

### preparedTransactionData

▸ **preparedTransactionData**(): [`IPreparedTransactionData`](../interfaces/IPreparedTransactionData.md)

The function returns the prepared transaction data.

Returns:

The method `preparedTransactionData()` is returning an object of type
`IPreparedTransactionData`.

#### Returns

[`IPreparedTransactionData`](../interfaces/IPreparedTransactionData.md)

___

### send

▸ **send**(): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

The `send` function returns a promise that resolves to a `Transaction` object after signing
and submitting the transaction. Internally just calls `signAndSubmitTransaction`.

Returns:

The `send()` method is returning a `Promise` that resolves to a `Transaction` object after it
has been signed and submitted.

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>

___

### sign

▸ **sign**(): `Promise`<[`SignedTransactionEssence`](../interfaces/SignedTransactionEssence.md)\>

This function signs a prepared transaction essence using the account's private key and returns
the signed transaction essence.

Returns:

A `Promise` that resolves to a `SignedTransactionEssence` object.

#### Returns

`Promise`<[`SignedTransactionEssence`](../interfaces/SignedTransactionEssence.md)\>

___

### signAndSubmitTransaction

▸ **signAndSubmitTransaction**(): `Promise`<[`Transaction`](../interfaces/Transaction.md)\>

This function signs and submits a transaction using prepared transaction data.

Returns:

A Promise that resolves to a Transaction object.

#### Returns

`Promise`<[`Transaction`](../interfaces/Transaction.md)\>
