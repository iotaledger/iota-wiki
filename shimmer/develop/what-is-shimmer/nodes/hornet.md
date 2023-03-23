---
description: 'Hornet is a powerful, Shimmer node software written in Go. It is easy to install and runs on low-end devices.'
image: /img/participate/banner/banner_node_software.png
---

# Hornet

:::tip Free and Open-Sourced

Hornet and the INX plugins are free, open-sourced, and maintained by both the [IOTA Foundation](https://www.iota.org/)
and
the [IOTA Community](https://wiki.iota.org/shimmer/community/the-community/how-to-support/).

:::

[Hornet](https://wiki.iota.org/shimmer/hornet/welcome) is a powerful, Shimmer node software written in Go. It is easy to
install and runs on low-end devices. Hornet is a full-fledged software providing
full node capabilities, including complete support for [Stardust's latest features](../introduction.md).

### INX Plugins

[INX (IOTA Node Extension) plugins](https://github.com/iotaledger/inx) are Node extensions that communicate to the Node
over [gRPC](https://grpc.io). They can track ledger updates, check the node status, and more.

#### Available INX Plugins

- [Indexer](https://wiki.iota.org/shimmer/inx-indexer/welcome/): Maintains its own database of structured, queryable data.
- [MQTT](https://wiki.iota.org/shimmer/inx-mqtt/welcome/): Offers a list of topics clients can subscribe to, to receive the latest blocks and outputs attached on the tangle
- [PoI (Proof of Inclusion)](https://wiki.iota.org/shimmer/inx-poi/welcome/): Generates and verifies Proof-of-Inclusion of blocks in the Tangle
- [Participation](https://wiki.iota.org/shimmer/inx-participation/welcome/): Enables on-tangle voting.
- [Coordinator](https://wiki.iota.org/shimmer/inx-coordinator/welcome/): Coordinates the constant growth of the tangle by issuing milestones.
- [Faucet](https://wiki.iota.org/shimmer/inx-faucet/welcome/): Distributes test tokens to developers.
- [Dashboard](https://wiki.iota.org/shimmer/inx-dashboard/welcome/): Provides an overview of your nodes health and allows you to manage peers and plugins.
- [Spammer](https://wiki.iota.org/shimmer/inx-spammer/welcome/): Generates transactions in the network thereby increasing reference and confirmation rates
- [Wasp](https://wiki.iota.org/shimmer/smart-contracts/guide/chains_and_nodes/running-a-node/): Runs the IOTA Smart Contracts protocol.
- [Chronicle](https://wiki.iota.org/shimmer/chronicle/welcome/): Listens to all blocks in the Tangle referenced by a milestone and stores them in a MongoDB database.
