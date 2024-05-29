---
description: 'Learn about the role of subgraphs in smart contracts and how they can provide indexed blockchain data to your smart contracts.'
image: /img/logo/WASP_logo_dark.png
tags:
  - Blockchain subgraphs
  - Smart Contracts
  - Shimmer EVM
  - IOTA EVM 
---

# Subgraphs

:::info tl;dr;

Subgraphs provide a streamlined way for developers to access blockchain data relevant to their applications,
significantly enhancing developer efficiency and user experience.

:::

Subgraphs collect and organize blockchain data by application needs, making it readily accessible for developers. Unlike
blockchains that store data without application context, subgraphs allow you to quickly retrieve information pertinent
to your application and simplify real-time data access, facilitating the creation of
dynamic user interfaces and interactions in your applications.

## Subgraph Components and Operations

Subgraphs are built on [GraphQL](https://graphql.org/) APIs, enabling you to query on-chain transaction data
efficiently.
This feature is particularly useful for developers working with complex smart contracts requiring detailed frontend
interfaces. For instance, querying transactions within a specific liquidity pool becomes straightforward with subgraphs.
By defining a schema and indexing event data, you can utilize the generated GraphQL API for effective data querying.

### Subgraph Manifest

The manifest details the smart contracts your subgraph indexes, the events it tracks, and how event data is mapped to
queryable entities. This foundational document ensures your subgraph accurately reflects the blockchain data your
application needs.

### Subgraph Schema

The schema organizes your subgraph data, defining entities like pools in DeFi applications, and their attributes. It is
crucial for structuring your data to support efficient queries.

### Subgraph Mappings

Mappings process incoming blockchain events, specified in your [manifest](#subgraph-manifest), and store them
according to your [schema](#subgraph-schema).
These [AssemblyScript](https://www.assemblyscript.org/) codes are essential for translating raw blockchain data into a
format your application can easily query.

## Popular Use Cases for Subgraphs

Subgraphs have found widespread adoption in various blockchain applications, from DeFi to NFTs and DAOs, due to their
ability to index and query data effectively.

* **Custom Smart Contract Indexing**: Ideal for developers needing to index data for unique smart contracts, especially
  those creating frontend interfaces.
* **Decentralized Finance (DeFi)**: Subgraphs provide real-time data on token prices, liquidity, and more, enhancing
  DeFi
  applications.
* **Non-fungible Tokens (NFTs)**: They allow for efficient querying of NFT ownership, transaction history, and off-chain
  data.
* **Decentralized Autonomous Organizations (DAOs)**: Subgraphs facilitate on-chain decision-making and data analysis for
  DAOs.
* **Gaming**: They support real-time data access, improving gameplay and in-game transactions.

## Benefits of Using Subgraphs

Subgraphs offer a developer-friendly approach to blockchain data indexing, compatible with various blockchains and
enhancing application security and resilience.

* **Ease of Use**: With familiar tools like AssemblyScript and GraphQL, subgraphs are accessible to developers,
  simplifying
  the backend data management.
* **Cross-Blockchain Compatibility**: They work across multiple EVM-compatible networks, allowing applications to
  operate
  seamlessly on different blockchains.
* **Security and Decentralization**: Opting for decentralized querying with subgraphs can reduce reliance on single data
  sources, increasing application robustness.

## Subgraph Providers

### Goldsky

[Goldsky](https://goldsky.com/products/subgraphs) [supports IOTA EVM](https://docs.goldsky.com/chains/iota).
You can use their public API endpoints to access subgraph data.

:::tip Run a Local Graph Node

You can use [Nakama's Graph Node GitHub repository](https://github.com/nakamaio/graph-node) to run your own Graph Node.

:::

:::tip Blast API Archival Nodes

You can use the convenient Blast API on IOTA EVM to access [archival nodes](blastAPI.md#archival-nodes).

:::

:::tip Wasp Access Nodes

You can find more information on how to connect to an access node in the
[#nodesharing channel](https://discordapp.com/channels/397872799483428865/398600007378272256) on the [IOTA Discord](https://discord.iota.org/).

:::

