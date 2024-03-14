# Class: PreparedCreateDelegationTransaction

PreparedTransaction` is a class that represents prepared transaction data, which
is useful for offline signing. It contains the prepared transaction data and an
`Wallet` object. It provides methods to retrieve the prepared transaction data, sign
the transaction and sign+submit/send the transaction.

## Hierarchy

- [`PreparedTransaction`](PreparedTransaction.md)

  ↳ **`PreparedCreateDelegationTransaction`**

## Table of contents

### Constructors

- [constructor](PreparedCreateDelegationTransaction.md#constructor)

### Properties

- [\_delegationId](PreparedCreateDelegationTransaction.md#_delegationid)
- [\_preparedData](PreparedCreateDelegationTransaction.md#_prepareddata)
- [\_wallet](PreparedCreateDelegationTransaction.md#_wallet)

### Methods

- [delegationId](PreparedCreateDelegationTransaction.md#delegationid)
- [preparedTransactionData](PreparedCreateDelegationTransaction.md#preparedtransactiondata)
- [send](PreparedCreateDelegationTransaction.md#send)
- [sign](PreparedCreateDelegationTransaction.md#sign)
- [signAndSubmitTransaction](PreparedCreateDelegationTransaction.md#signandsubmittransaction)

## Constructors

### constructor

• **new PreparedCreateDelegationTransaction**(`preparedData`, `wallet`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preparedData` | [`PreparedCreateDelegationTransactionData`](PreparedCreateDelegationTransactionData.md) | Prepared data to create a delegation. |
| `wallet` | [`Wallet`](Wallet.md) | A wallet. |

#### Overrides

[PreparedTransaction](PreparedTransaction.md).[constructor](PreparedTransaction.md#constructor)

## Properties

### \_delegationId

• `Readonly` **\_delegationId**: `string`

___

### \_preparedData

• `Readonly` **\_preparedData**: [`PreparedTransactionData`](PreparedTransactionData.md)

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[_preparedData](PreparedTransaction.md#_prepareddata)

___

### \_wallet

• `Readonly` **\_wallet**: [`Wallet`](Wallet.md)

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[_wallet](PreparedTransaction.md#_wallet)

## Methods

### delegationId

▸ **delegationId**(): `string`

The function returns the delegationId.

@returns: The delegation id of the prepared transaction.

#### Returns

`string`

___

### preparedTransactionData

▸ **preparedTransactionData**(): [`PreparedTransactionData`](PreparedTransactionData.md)

The function returns the prepared transaction data.

Returns:

The method `preparedTransactionData()` is returning an object of type
`PreparedTransactionData`.

#### Returns

[`PreparedTransactionData`](PreparedTransactionData.md)

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[preparedTransactionData](PreparedTransaction.md#preparedtransactiondata)

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

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[send](PreparedTransaction.md#send)

___

### sign

▸ **sign**(): `Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

This function signs a prepared transaction using the wallet's private key and returns
the signed transaction.

Returns:

A `Promise` that resolves to a `SignedTransactionData` object.

#### Returns

`Promise`\<[`SignedTransactionData`](SignedTransactionData.md)\>

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[sign](PreparedTransaction.md#sign)

___

### signAndSubmitTransaction

▸ **signAndSubmitTransaction**(): `Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

This function signs and submits a transaction using prepared transaction data.

Returns:

A Promise that resolves to a TransactionWithMetadata object.

#### Returns

`Promise`\<[`TransactionWithMetadata`](TransactionWithMetadata.md)\>

#### Inherited from

[PreparedTransaction](PreparedTransaction.md).[signAndSubmitTransaction](PreparedTransaction.md#signandsubmittransaction)
