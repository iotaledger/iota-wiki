# Enumeration: TransactionProgressType

All of the transaction progress types.

## Table of contents

### Enumeration Members

- [SelectingInputs](TransactionProgressType.md#selectinginputs)
- [GeneratingRemainderDepositAddress](TransactionProgressType.md#generatingremainderdepositaddress)
- [PreparedTransaction](TransactionProgressType.md#preparedtransaction)
- [PreparedTransactionSigningHash](TransactionProgressType.md#preparedtransactionsigninghash)
- [SigningTransaction](TransactionProgressType.md#signingtransaction)
- [Broadcasting](TransactionProgressType.md#broadcasting)

## Enumeration Members

### SelectingInputs

• **SelectingInputs** = ``0``

Performing input selection.

___

### GeneratingRemainderDepositAddress

• **GeneratingRemainderDepositAddress** = ``1``

Generating remainder value deposit address.

___

### PreparedTransaction

• **PreparedTransaction** = ``2``

Prepared transaction.

___

### PreparedTransactionSigningHash

• **PreparedTransactionSigningHash** = ``3``

Prepared transaction signing hash hex encoded, required for blindsigning with a Ledger Nano.

___

### SigningTransaction

• **SigningTransaction** = ``4``

Signing the transaction.

___

### Broadcasting

• **Broadcasting** = ``5``

Broadcasting.
