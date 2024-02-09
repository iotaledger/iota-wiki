---
tags:
  - Stardust
  - Shimmer
  - Upgrades
  - Ledger
  - UTXO
  - Protocol Improvements
  - explanation
description: Extending the UTXO ledger concept with Stardust.
image: /img/logo/preview.png
---

# Rethinking the UTXO Model

Since the Chrysalis upgrade IOTA has been using the [Unspent Transaction Output (UTXO)](https://en.wikipedia.org/wiki/Unspent_transaction_output)
model for ledger accounting. The essential part of this model are outputs that hold user funds. Whenever a user wishes
to transfer tokens, they create a transaction in which unspent transaction outputs are consumed and new ones are created.

Each output defines who is allowed to unlock them via an address. The protocol only allows consumption of outputs in
transactions if the owner can present a valid digital signature corresponding to the owner address recorded in the output
itself.

![The UTXO Model](/img/stardust_explanations/what_is_stardust/rethinking_utxo/utxo.svg)

In Chrysalis an output consists of a `{tokens, address}` pair, therefore all you can do with outputs is define their
owner and who is allowed to unlock them. There is no restrictions whatsoever on what one might do with the funds in
a transaction once the output is unlocked. This is what we call the _cryptocurrency_ application, or in simple words,
digital cash.

Stardust introduces new output types that are more expressive:

- output types define additional fields for outputs,
- output unlocking is configurable via _unlock conditions_, moreover, output types might define additional unlocking constraints based on the context of transaction that tries to unlock them.

At first glance, this might look as just a small improvement, but notice that if we can

- record any state as data in outputs, and
- program how that state can be manipulated in transactions,

we essentially implemented a computer program ran by the protocol itself. The program state is stored in outputs, while
commands to the program are issued via transactions. Could we implement then any program on the UTXO ledger via outputs?

The answer is no. First, we have limited space to store program data in outputs, therefore not any state can be stored.
Second, we have to be overly restrictive about what commands are supported, as their execution takes time and must be
performed on all network nodes. Also, such programs don't have access to the state of other programs present in the
ledger, only to what is in the context of their transaction. This is a deliberate design choice in IOTA which
allows parallel execution and validation of transactions and such programs, unlike the serialized approach in other
protocols such as Ethereum.

As a consequence, Stardust implements a limited set of programs and commands via outputs. The main goal of these
built-in ledger programs is to support second-layer IOTA Smart Contracts, the general, Turing-complete decentralized
application platform on which any smart contract logic can be implemented.

To learn more about the ledger programs and outputs, check out [Anatomy of Stardust Ledger](../ledger/intro.md).
