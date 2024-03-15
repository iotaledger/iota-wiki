# Class: PreparedTransaction

PreparedTransaction` is a class that represents prepared transaction data, which
is useful for offline signing. It contains the prepared transaction data and an
`Wallet` object. It provides methods to retrieve the prepared transaction data, sign
the transaction and sign+submit/send the transaction.

## Hierarchy

- **`PreparedTransaction`**

  ↳ [`PreparedCreateNativeTokenTransaction`](PreparedCreateNativeTokenTransaction.md)

  ↳ [`PreparedCreateDelegationTransaction`](PreparedCreateDelegationTransaction.md)

## Table of contents

### Constructors

- [constructor](PreparedTransaction.md#constructor)

### Properties

- [\_preparedData](PreparedTransaction.md#_prepareddata)
- [\_wallet](PreparedTransaction.md#_wallet)

### Methods

- [preparedTransactionData](PreparedTransaction.md#preparedtransactiondata)
- [send](PreparedTransaction.md#send)
- [sign](PreparedTransaction.md#sign)
- [signAndSubmitTransaction](PreparedTransaction.md#signandsubmittransaction)

## Constructors

### constructor

• **new PreparedTransaction**(`preparedData`, `wallet`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedData` | [`PreparedTransactionData`](PreparedTransactionData.md) | Prepared data to sign and submit a transaction. |
| `wallet` | [`Wallet`](Wallet.md) | A wallet. |

## Properties

### \_preparedData

• `Readonly` **\_preparedData**: [`PreparedTransactionData`](PreparedTransactionData.md)

___

### \_wallet

• `Readonly` **\_wallet**: [`Wallet`](Wallet.md)

## Methods

### preparedTransactionData

▸ **preparedTransactionData**(): [`PreparedTransactionData`](PreparedTransactionData.md)

The function returns the prepared transaction data.

Returns:

The method `preparedTransactionData()` is returning an object of type
`PreparedTransactionData`.

#### Returns

[`PreparedTransactionData`](PreparedTransactionData.md)

___

### send

▸ **send**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

The `send` function returns a promise that resolves to a `Transaction` object after signing
and submitting the transaction. Internally just calls `signAndSubmitTransaction`.

Returns:

The `send()` method is returning a `Promise` that resolves to a `TransactionWithMetadata` object after it
has been signed and submitted.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

___

### sign

▸ **sign**(): `Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

This function signs a prepared transaction using the wallet's private key and returns
the signed transaction.

Returns:

A `Promise` that resolves to a `SignedTransactionData` object.

#### Returns

`Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

___

### signAndSubmitTransaction

▸ **signAndSubmitTransaction**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

This function signs and submits a transaction using prepared transaction data.

Returns:

A Promise that resolves to a TransactionWithMetadata object.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>
