---
description: An overview of the IOTA Smart Contracts architecture.
image: /img/multichain.png
keywords:

- smart contracts
- architecture
- Layer 2
- L2
- Layer 1
- L1
- explanation

---

# ISC Architecture

IOTA Smart Contracts work as a _layer 2_ (L2 for short) extension of the [_IOTA Multi-Asset
Ledger_](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md) (Layer 1, or L1 for short, also sometimes
called the UTXO Ledger).

In IOTA Smart Contracts, each L2 chain has its own state and smart contracts that cause this state to change.
As validator nodes execute the smart contracts, they tally these state changes and write them into the chain.
Each time they update the state, they collectively agree on a new state and commit to it by publishing its hash to L1.

Each Layer 2 chain is functionally similar to a traditional blockchain.
However, ISC chains can communicate with Layer 1 and each other, making ISC a more sophisticated protocol.

![IOTA Smart Contacts multichain architecture](/img/multichain.png "Click to see the full-size image.")

*IOTA Smart Contacts multichain architecture.*

You can find the comprehensive overview of architectural design decisions of IOTA Smart Contracts in the
[ISC white paper](https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf).
