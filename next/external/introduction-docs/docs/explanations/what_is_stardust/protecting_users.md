---
keywords:
- Stardust
- Shimmer
- Upgrades
- Security
- User Protection
- Replay Protection
- Inputs Commitment
- Protocol Improvements
- explanation
description: The Stardust protocol prevents transaction replay and client eclipse attacks.
image: /img/logo/preview.png
---

# Protecting Users

Two main improvements have been added on protocol level in Stardust to protect users or L2 applications.

## Transaction Replay Protection

Stardust introduces a _Network Identifier_ field in the signed part of transactions to prevent replaying transactions
in any other network. Even if a transaction is otherwise correct, a different network than the intended would
immediately reject it based on the mismatching network identifier.

For more information, browse [TIP-20](https://github.com/iotaledger/tips/pull/40) that describes the updated transaction payload.

## Transaction Inputs Commitment

In a UTXO-based ledger, transactions reference the inputs they wish to consume by their unique identifiers. Clients
gather the content of inputs by accessing the inputs' identifiers in the nodes. If you don’t run your own node, your
wallet probably talks to an explorer or indexer application that in turn fetches data from a network node. Do you fully
trust a third party to give you the correct content of the inputs owned by you to construct a transaction? What if
their infrastructure is hacked?

Luckily, with Stardust, you don’t need to trust third parties. Transactions include an _Inputs Commitment_ field that
(as the name suggests) is a cryptographic commitment to the content of the inputs of the transaction. If for any reason
your wallet was supplied with malicious data and constructed a transaction based on that data, the network will realize
that there is a mismatch between what the network thinks your inputs are and what your wallet does.

This mechanism protects not only users but also smart contract chains. An attacker might be able to eclipse the
connection of L2 validators to L1 nodes and start
[replacing request content to steal user funds](https://github.com/iotaledger/tips/discussions/51), but with this
security mechanism, such malicious transactions would be rejected by the base protocol, causing the chain to realize it
was eclipsed because it didn’t produce a valid state update.
