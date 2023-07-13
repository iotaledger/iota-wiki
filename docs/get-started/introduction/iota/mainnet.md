---
description: The IOTA mainnet is the IOTA network that uses the IOTA tokens traded on exchanges, providing stability and public infrastructure.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - IOTA Mainnet
  - IOTA tokens
  - cryptocurrency exchanges
  - public infrastructure
---

# IOTA Mainnet

The IOTA mainnet is the IOTA network that uses the IOTA tokens that are traded on cryptocurrency exchanges. This network is the
most stable. Any feature that is deployed in the IOTA has been priorly tested on
the [devnet](https://wiki.iota.org/introduction/reference/networks/devnet/) and [Shimmer](../shimmer/staging-canary.md),
IOTA's staging network is used as a canary before features are added to the IOTA mainnet.

## Public Infrastructure

IOTA currently provides two load-balanced public mainnet endpoints:

- chrysalis-nodes.iota.org.
- chrysalis-nodes.iota.cafe.

These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to
this [specification](https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/0026-rest-api.yaml))
over TLS.

## Developer Tools

- [Explorer](https://explorer.iota.org/mainnet).
