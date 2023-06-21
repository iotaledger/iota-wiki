# Interface: Transaction

A Transaction with metadata

## Table of contents

### Properties

- [payload](Transaction.md#payload)
- [blockId](Transaction.md#blockid)
- [inclusionState](Transaction.md#inclusionstate)
- [timestamp](Transaction.md#timestamp)
- [transactionId](Transaction.md#transactionid)
- [networkId](Transaction.md#networkid)
- [incoming](Transaction.md#incoming)
- [note](Transaction.md#note)

## Properties

### payload

• **payload**: `ITransactionPayload`

The transaction payload

---

### blockId

• `Optional` **blockId**: `string`

The block id in which the transaction payload was included

---

### inclusionState

• **inclusionState**: [`InclusionState`](../enums/InclusionState.md)

The inclusion state of the transaction

---

### timestamp

• **timestamp**: `string`

The creation time

---

### transactionId

• **transactionId**: `string`

The transaction id

---

### networkId

• **networkId**: `string`

The network id in which the transaction was sent

---

### incoming

• **incoming**: `boolean`

If the transaction was created by the wallet or someone else

---

### note

• `Optional` **note**: `string`

Note that can be set when sending a transaction and is only stored locally
