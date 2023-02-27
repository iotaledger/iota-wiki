---
description: The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - devnet
  - load-balanced
  - HTTP REST API
  - MQTT
  - reference
  - Endpoints
---

# Devnet

Since the Chrysalis update, the `testnet` is now called `devnet`. We recommend using the `devnet` to develop and test your application.

## Public Infrastructure

The IOTA Foundation currently provides the following public load-balanced devnet endpoints:

- [https://api.lb-0.h.chrysalis-devnet.iota.cafe/](https://api.lb-0.h.chrysalis-devnet.iota.cafe/).
- [https://api.lb-1.h.chrysalis-devnet.iota.cafe/](https://api.lb-1.h.chrysalis-devnet.iota.cafe/).

:::note

We recommend using the load balancer for most scenarios.

:::

We also provide single node endpoints that expose native [MQTT](https://mqtt.org/):

- [https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe](https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe)
- [https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe](https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe)
- mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883
- mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883

These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this [specification](nodes/rest-api/iota-rest-api.info.mdx)) over TLS.
