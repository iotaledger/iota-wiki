---
description: How to run a node. Requirements, configuration parameters, dashboard configuration, and tests.
image: /img/logo/WASP_logo_dark.png
tags:
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

As Wasp is an INX plugin, you must run the wasp node alongside your _hornet node_. You can use the simple docker-compose setup to do so.

## Recommended Hardware Requirements

We recommend that you run the docker image on a server with:

* **CPU**: 8 core.
* **RAM**: 16 GB.
* **Disk space**: ~ 250 GB SSD, depending on your pruning configuration. 

## Set Up

Follow the instructions on the [hornet setup](/hornet/how_tos/using_docker/).

:::note

This how-to is meant to be used for a production-ready deployment. For local testing or development, please see the [IOTA Sandbox](/iota-sandbox/welcome).

:::
