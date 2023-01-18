---
title: Node Software
description: "The Shimmer networks consists of interconnected computers, known as nodes, that run the same
Hornet node software."
image: /img/participate/banner/banner_node_software.png
---

# Node Software

![Node Software](/img/participate/banner/banner_node_software.png)

As any DLT, the Shimmer network is consists of interconnected computers, known as nodes which run the
same [Hornet software](#hornet).
This gives nodes read and write access to [the Tangle](https://wiki.iota.org/shimmer/learn/tangle/), allows them to
validate and store transactions issued by themselves or other nodes in the network.

## Hornet

:::tip Free and Open-Sourced

Hornet and the INX plugins are free, open-sourced, and maintained by both the [IOTA Foundation](https://www.iota.org/)
and
the [IOTA Community](https://wiki.iota.org/shimmer/community/the-community/how-to-support/).

:::

[Hornet](https://wiki.iota.org/shimmer/hornet/welcome) is a powerful, Shimmer node software written in Go. It is easy to
install and runs on low-end devices. Hornet is a full-fledged software providing
full node capabilities including complete support for [Stardust's latest features](../introduction.md).

### INX Plugins

[INX (IOTA Node Extension) plugins](https://github.com/iotaledger/inx) are Node extensions which communicate to the Node
over [gRPC](https://grpc.io). They can track ledger updates, check the node status and more.

#### Available INX Plugins

* [Indexer](https://wiki.iota.org/shimmer/inx-indexer/welcome/)
* [MQTT](https://wiki.iota.org/shimmer/inx-mqtt/welcome/)
* [PoI](https://wiki.iota.org/shimmer/inx-poi/welcome/)
* [Participation](https://wiki.iota.org/shimmer/inx-participation/welcome/)
* [Coordinator](https://wiki.iota.org/shimmer/inx-coordinator/welcome/)
* [Faucet](https://wiki.iota.org/shimmer/inx-faucet/welcome/)
* [Dashboard](https://wiki.iota.org/shimmer/inx-dashboard/welcome/)
* [Spammer](https://wiki.iota.org/shimmer/inx-spammer/welcome/)
* [Wasp](https://wiki.iota.org/shimmer/smart-contracts/guide/chains_and_nodes/running-a-node/)
* [Chronicle](https://wiki.iota.org/shimmer/chronicle/welcome/)