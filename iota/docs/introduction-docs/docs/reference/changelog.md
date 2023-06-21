---
description: An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - IOTA 1.0
  - IOTA 1.5
  - changes
  - guides
  - migration
  - developer
  - reference
---

# Chrysalis Changelog

- The format of the address was changed, and it is now based on both the `derivation path` and `bech32` standards. For reference, you can read the [IOTA address anatomy](./details.md#iota-15-address-anatomy) guide.
- The concepts of `bundles` and `transactions` were replaced with `messages` and `payloads`. The `message` is a data structure that is actually being broadcast in the network and represents a node (vertex) in the Tangle graph. For reference, you can read both the [messages, payload, and transactions](./details.md#messages-payloads-and-transactions) and [selected message payloads](./details.md#selected-message-payloads) guides.
- The IOTA network is based on a DAG (Directed Acyclic Graph) to store individual `messages` and related `transactions`. However, each `message` can newly reference up to 8 parent messages. For reference, you can read the [messages, payload, and transactions](./details.md#messages-payloads-and-transactions) guide.
- The signature scheme based on `WOTS` was replaced with the `Ed25519` signature scheme. For reference, you can read the [seed and addresses](./details.md#seed-and-addresses) guide.
- Due to the changed signature scheme, IOTA addresses are reusable without any negative security impact. Compared to IOTA 1.0, which was based on ternary, IOTA 1.5 is based on binary and is thus very efficient on all kinds of current hardware devices. In contrast to IOTA 1.0, IOTA 1.5 addresses are perfectly reusable; even if one spends funds from the given address, it can be used again. For reference, you can read the [address/key space](./details.md#addresskey-space) guide.
- Originally, IOTA 1.0 used an `account-based model` for tracking individual iota tokens. Chrysalis embraced the `Unspent Transaction Output` (also known as `UTXO`) model to track tokens and token holders. For reference, you can read the [Unspent Transaction Output](./details.md#unspent-transaction-output-utxo) guide.
- The approach to client libraries was completely reengineered from the ground up. There are new official client libraries that serve as `one-source-code-of-truth` to IOTA users and can be combined in a modular fashion based on particular use cases. All libraries provide a binding to other programming languages. For reference, you can read an overview of [client libraries](../explanations/libraries.md).
- Our official IOTA tools, such as wallet software, use the same libraries under the hood so any developer may work in the same environment as we do.
- The official client libraries embraced an `Hierarchical Deterministic Wallets` approach which is fully `BIP44` compatible. For reference, you can read the [address/key space](./details.md#addresskey-space) guide.
- There is a new official wallet software called Firefly. See [Firefly](https://firefly.iota.org/) and the Repo at: [Firefly Github](https://github.com/iotaledger/firefly)
