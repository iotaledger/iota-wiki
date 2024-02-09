---
description: The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.
image: /img/logo/preview.png
tags:
  - shimmer
  - MQTT
  - REST API
  - HTTP
  - Explorer
  - reference
---

# Shimmer

## Public Infrastructure

The IOTA Foundation currently provides these public load-balanced Shimmer endpoints:

Node API: https://api.shimmer.network  
Example info endpoint: https://api.shimmer.network/api/core/v2/info  
Available routes: https://api.shimmer.network/api/routes  
Health endpoint: https://api.shimmer.network/health  
MQTT: wss://api.shimmer.network:443/api/mqtt/v1  
Chronicle API: https://chronicle.shimmer.network

These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this specifications: [Core API](/apis/core/v2/iota-core-rest-api), [Indexer API](/apis/indexer/iota-utxo-indexer-rest-api) and [TIP-28](https://github.com/iotaledger/tips/blob/main/tips/TIP-0028/tip-0028.md)) over TLS.

## Developer Tools

- [Explorer](https://explorer.shimmer.network).
