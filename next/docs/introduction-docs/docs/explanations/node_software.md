---
description: Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.
image: /img/logo/preview.png
keywords:
- Node
- Hornet
- Bee
- Golang
- Rust
- explanation
---
# Node Software

The node software is the backbone of the IOTA and Shimmer networks. Individual nodes run the software to help maintain the state of the ledger through peer-to-peer communication. Nodes are also entry points to the network for users. The node software implements the core protocol that defines the network rules.

## Hornet

Hornet started out as an EDF-supported community node written in go and matured into the official node software
implementation maintained and developed by the IOTA Foundation. It has already proven itself to be a stable and
performant implementation, furthermore its [IOTA Node Extension (INX)](https://TODO_link_to_INX_page) framework introduced
for Stardust eases the development of application specific node extensions.

- [Official GitHub Repository](https://github.com/iotaledger/hornet)
- [Documentation](https://wiki.iota.org/hornet/develop/welcome)

## Bee

Bee is an IOTA Node implemented by the Foundation and written in Rust.

- [Official GitHub Repository](https://github.com/iotaledger/bee/tree/shimmer-develop)
- [Documentation](https://wiki.iota.org/bee/develop/welcome)

:::info

At this stage, we recommend using Hornet since it has several optional features that are not implemented in Bee so far.

:::

## Node API Specification

- [Core rest-api specification](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-api/tips/TIP-0025/core-rest-api.yaml).
- [UTXO Indexer rest-api specification](https://github.com/iotaledger/tips/blob/main/tips/TIP-0026/tip-0026.md).
- [Event API (MQTT) specification](https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-event-api/tips/TIP-0028/event-api.yml).

