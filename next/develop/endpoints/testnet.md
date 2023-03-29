---
description: The IOTA foundation provides load-balanced public testnet endpoints, where MQTT and the HTTP REST API are enabled.
image: /img/logo/preview.png
keywords:
  - devnet
  - load-balanced
  - HTTP REST API
  - MQTT
  - reference
  - Endpoints
---

# Public Testnet

The testnet is the public infrastructure for developers. It runs on top of the beta releases of IOTA software and runs a [faucet](https://faucet.testnet.shimmer.network) to easily get tokens for testing.

## Public Infrastructure

The IOTA Foundation currently provides the following public load-balanced testnet endpoints:

- Node API: https://api.testnet.shimmer.network
  - Example info endpoint: https://api.testnet.shimmer.network/api/core/v2/info
  - Available routes: https://api.testnet.shimmer.network/api/routes
  - Health endpoint: https://api.testnet.shimmer.network/health
- MQTT: wss://api.testnet.shimmer.network:443/api/mqtt/v1
- Faucet Info API: https://faucet.testnet.shimmer.network/api/info
- Faucet Enqueue API: https://faucet.testnet.shimmer.network/api/enqueue
- Chronicle API: https://chronicle.testnet.shimmer.network

These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this specifications [TIP-25](nodes/core-rest-api/iota-core-rest-api.info.mdx), [TIP-26](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml) over TLS.
