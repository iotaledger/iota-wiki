---
description: Learn about the switch from account balance models to Unspent Transaction Output (UTXO) in IOTA.
keywords:
  [
    'IOTA',
    'UTXO',
    'Balance Models',
    'Conflicts',
    'Reattachments',
    'Colored Coins',
  ]
---

# Switch to UTXO

UTXO means "unspent transaction output".
This means that instead of tracking the balances of addresses, you also keep track of where balances came from and
where they go when they are spent.

## The Problem with the Balance Mode

Before Chrysalis, IOTA used an account model to track balances.
This meant every address had a single value associated with it, its current balance.
This meant the ledger tracked **Address1**, which was associated with **Balance1**, **Address2** was associated with **Balance2**, and so on.

### Double-spends

The main problem with this model was dealing with double-spends, also known as conflicts.
It took a lot of work to determine which of multiple transactions performed a double spend and which used legitimate funds.

## The UTXO Solution

Since Chrysalis, IOTA switched to the UTXO model to keep track of balances.
This switch significantly improved how we identify conflicts and, therefore, also stops malicious actors from spending
newly received funds by reattaching an old transaction.

### Parallel Validation of Transactions

The UTXO model allows for parallel validation of transactions because it treats each
transaction output as an independent entity.
Instead of tracking account balances, the UTXO model monitors which outputs have been spent and which remain unspent.

### Easier Double-Spend Detection

The UTXO model ensures that each transaction output is used only once by requiring transactions to reference specific
unspent outputs.
If a transaction tries to use an output that's already been spent, it's immediately identifiable as a double-spend
attempt.

### Replay Transactions

With UTXO, if a transaction is replayed in an attempt to reattach it, the protocol will recognize it as a previously applied transaction, and it will have no further effects.

### Support for Ed25519

An additional benefit is that the UTXO model supports [Ed25519 addresses](EdDSA-support.md),
meaning that addresses in Chrysalis are reusable and can be safely used to send funds more than once.

:::tip Learn More

You can learn more about the [switch to UTXO](/tips/tips/TIP-0007) and
[Ed25519](/tips/tips/TIP-0017/) in the [TIPS section](../tips.md).

:::
