# Class: TransactionWithMetadata

A Transaction with metadata

## Table of contents

### Constructors

- [constructor](TransactionWithMetadata.md#constructor)

### Properties

- [payload](TransactionWithMetadata.md#payload)
- [blockId](TransactionWithMetadata.md#blockid)
- [inclusionState](TransactionWithMetadata.md#inclusionstate)
- [timestamp](TransactionWithMetadata.md#timestamp)
- [transactionId](TransactionWithMetadata.md#transactionid)
- [networkId](TransactionWithMetadata.md#networkid)
- [incoming](TransactionWithMetadata.md#incoming)
- [note](TransactionWithMetadata.md#note)
- [inputs](TransactionWithMetadata.md#inputs)

## Constructors

### constructor

• **new TransactionWithMetadata**()

## Properties

### payload

• **payload**: [`SignedTransactionPayload`](SignedTransactionPayload.md)

The transaction payload

___

### blockId

• `Optional` **blockId**: `string`

The block id in which the transaction payload was included

___

### inclusionState

• **inclusionState**: [`InclusionState`](../enums/InclusionState.md)

The inclusion state of the transaction

___

### timestamp

• **timestamp**: `string`

The creation time

___

### transactionId

• **transactionId**: `string`

The transaction id

___

### networkId

• **networkId**: `string`

The network id in which the transaction was sent

___

### incoming

• **incoming**: `boolean`

If the transaction was created by the wallet or someone else

___

### note

• `Optional` **note**: `string`

Note that can be set when sending a transaction and is only stored locally

___

### inputs

• **inputs**: [`OutputResponse`](OutputResponse.md)[]

Outputs that are used as input in the transaction.
May not be all, because some may have already been deleted from the node.
