---
title: Set Up a Chain
description: Set up a wasp chain in the IOTA Sandbox
keywords:
  - how to
  - setup
  - chain
---

To set up a chain,  you should enable the wasp profile. You can do this by uncommenting the `wasps` line in the `.env` file.

Afterward, you can just follow the how-tos for [configuring wasp-cli](/wasp-cli/how-tos/wasp-cli/) and [setting up a chain](/wasp-cli/how-tos/setting-up-a-chain#start-the-chain).
:::tip Available Endpoints

You can find the available endpoints in the [endpoints reference](./../references/endpoints.md).

:::


## (Optional) Enable and Configure EVM Toolkit

Enable the [EVM toolkit](https://evm-toolkit.evm.shimmer.network/) by uncommenting the `evm-toolkit` line in the `.env` file.
After that, change the `text` and `chainAddress` to your needs in the `assets/evm-toolkit/networks.json` file.
