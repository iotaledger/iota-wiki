---
description: INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates.
image: /img/banner/banner_hornet.png
tags:
  - IOTA Node
  - Hornet Node
  - INX
  - Spammer
  - IOTA
  - Shimmer
  - Node Software
  - Welcome
  - explanation
---

# Welcome to INX-Spammer

INX-Spammer is a tool to generate transactions in the network thereby increasing reference and confirmation rates.

## Setup

The recommended setup is to use the provided [Docker images](https://hub.docker.com/r/iotaledger/inx-spammer).
These images are also used in our [HORNET recommended setup using Docker](http://wiki.iota.org/hornet/develop/how_tos/using_docker).

## Configuration

The spammer is configured by default to connect to your HORNET instance.

You can find all the configuration options in the [configuration section](configuration.md).

### Value Spam

The spammer can also be used to create value spam in the network.

For this to work, you need to fund an address upfront and pass the environment variable `SPAMMER_MNEMONIC` with the corresponding 24 word Mnemonic for the private key of the address.

In case you use the recommended Docker setup, you can create a new Mnemonic and address using the following command:

```
docker compose run hornet tool ed25519-key --hrp BECH32HRP
```

`BECH32HRP` must be replaced with the correct HRP for your network.

The value spam can be enabled via Dashboard or by setting the parameter `valueSpamEnabled` to `true` in the configuration.

:::warning
You must not use the spammer in a network with real funds. You may loose access to your funds if you do so.
:::

## Dashboard

If you are using the [INX-Dashboard](https://github.com/iotaledger/inx-dashboard) on your node, you can control the spammer directly from your browser.

## Source Code

The source code of the project is available on [GitHub](https://github.com/iotaledger/inx-spammer).
