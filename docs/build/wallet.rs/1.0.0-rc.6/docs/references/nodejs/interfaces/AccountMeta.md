# Interface: AccountMeta

The account object

## Table of contents

### Properties

- [lockedOutputs](AccountMeta.md#lockedoutputs)
- [pendingTransactions](AccountMeta.md#pendingtransactions)
- [incomingTransactions](AccountMeta.md#incomingtransactions)

## Properties

### lockedOutputs

• **lockedOutputs**: `Set`<`string`\>

Output IDs of unspent outputs that are currently used as input for transactions

---

### pendingTransactions

• **pendingTransactions**: `Set`<`string`\>

Transaction IDs of pending transactions

---

### incomingTransactions

• **incomingTransactions**: `Object`

Incoming transactions with their inputs if available and not already pruned

#### Index signature

▪ [transactionId: `string`]: [`ITransactionPayload`, `IOutputResponse`[]]
