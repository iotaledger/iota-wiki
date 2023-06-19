---
description: How to run a node. Requirements, configuration parameters, dashboard configuration, and tests.
image: /img/logo/WASP_logo_dark.png
keywords:

- Smart Contracts
- Running a node
- Go-lang
- Hornet
- Requirements
- Configuration
- Dashboard
- Grafana
- Prometheus

---

# Running a Node

Due to wasp being desgined as an INX plugin, its necessary to run the wasp node alongside your own hornet node, for this we provide a simple docker-compose setup.

## Setup

Clone and follow the instructions on the [node-docker-setup repo](https://github.com/iotaledger/node-docker-setup).

:::note
This is aimed for prodution-ready setups, if you're looking to spawn a local node for testing/development, please see: [dev setup](../development_tools/docker_preconfigured.md)
:::
