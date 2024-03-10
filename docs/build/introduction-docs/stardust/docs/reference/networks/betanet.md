---
description: The IOTA foundation provides load-balanced public Shimmer Beta endpoints, where MQTT and the HTTP REST API are enabled.
image: /img/logo/preview.png
tags:
  - load-balanced
  - HTTP REST API
  - MQTT
  - reference
---

# Shimmer Beta

Shimmer Beta is a pre-release of the Shimmer network that is currently under development.

## Public Infrastructure

We currently provide load-balanced public Shimmer Beta endpoints:

- Node API: `https://api.testnet.shimmer.network`
  - Example info endpoint: https://api.testnet.shimmer.network/api/core/v2/info
  - Available routes: https://api.testnet.shimmer.network/api/routes
  - Health endpoint: https://api.testnet.shimmer.network/health
- MQTT: wss://api.testnet.shimmer.network:443/api/mqtt/v1
- Chronicle API: https://chronicle.testnet.shimmer.network

These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this specifications: [Core API](/apis/core/v2/iota-core-rest-api), [Indexer API](/apis/indexer/iota-utxo-indexer-rest-api)) over TLS.

## Developer Tools

- [Explorer](https://explorer.shimmer.network)
- [Online Faucet](https://faucet.testnet.shimmer.network)
- Faucet Info API: https://faucet.testnet.shimmer.network/api/info
- Faucet Enqueue API: `https://faucet.testnet.shimmer.network/api/enqueue`
- [Cli-Wallet](https://github.com/iotaledger/cli-wallet/tree/develop)
- [shimmer-faucet code (nodejs + svelte)](https://github.com/iotaledger/chrysalis-faucet/tree/hornet)
- [shimmer-faucet backend](https://github.com/iotaledger/inx-faucet)
