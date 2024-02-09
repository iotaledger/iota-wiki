---
description: INX-Dashboard is a node configuration dashboard for node owners.
image: /img/banner/banner_hornet.png
tags:
  - IOTA Node
  - Hornet Node
  - INX
  - Dashboard
  - IOTA
  - Shimmer
  - Node Software
  - Welcome
  - explanation
---

# Welcome to INX-Dashboard

INX-Dashboard is a node configuration dashboard for node owners.
It provides an overview of your nodes health and allows you to manage peers and plugins.
You can browse the nodes database with the built-in explorer and check the current tangle activity in the visualizer.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-dashboard).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The dashboard is configured by default to connect to your HORNET instance.
It exposes the web UI on port `8081` by default.

The dashboard provides built-in access control that can be configured by setting the `dashboard.auth.passwordHash` and `dashboard.auth.passwordSalt` values in your `config.json`.

:::note
You can use `hornet tool pwd-hash` to generate a set of credentials to use in your `config.json`.
:::

Check the [Set dashboard credentials](http://wiki.iota.org/hornet/develop/how_tos/using_docker#4-set-dashboard-credentials) section of the recommended setup to learn how to configure your credentials.

You can find all the configuration options in the [configuration section](configuration.md).

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-dashboard).
