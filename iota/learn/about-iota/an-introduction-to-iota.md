---
id: an-introduction-to-iota
title: IOTA
description: IOTA is a distributed ledger technology running on the Tangle instead of a blockchain.
keywords:
  - explanation
image: /img/iota-wiki.png
---

# IOTA

![IOTA Introduction](/img/Banner/banner_iota.svg)

IOTA is a distributed ledger technology, a DLT. With the right approach, DLTs let us control our own [private data](https://wiki.iota.org/identity.rs/introduction), run [programs](https://wiki.iota.org/smart-contracts/overview) that nobody can meddle with, and trade and own assets without intermediaries.

As in the name, a distributed ledger technology maintains a ledger — a tally of token ownership — between multiple nodes. That would be trivial if all nodes were controlled by the same entity, but in DLTs the ledger state has to be agreed on by a collective of independent nodes. There is always a chance that a malicious node joins the network, so any DLT needs a way to protect itself. The way that IOTA takes makes it differ from other protocols.

IOTA runs on [the Tangle](./tangle.md), a structure where newer transactions verify the older ones, and pretty much any other DLT runs on a blockchain instead. To secure its state and history, a blockchain must collect transactions in blocks and chain the blocks one after another. That leads to a natural bottleneck: imagine loading the world's cargo into a single train wagon by wagon. IOTA bypasses it altogether.

The IOTA protocol is still in research. It has two public networks: the IOTA mainnet is the stable network that manages your IOTA tokens, and [Shimmer](https://wiki.iota.org/shimmer/learn/welcome) is the staging network for the latest and greatest protocol updates. When the changes are proven on Shimmer, they come to the mainnet. The next big update is [Stardust](https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/). The future update that concludes the decentralization effort is called [Coordicide](roadmap-to-decentralization.md).
