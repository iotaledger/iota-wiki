---
title: Interact with Wasp
description: Interact with a wasp chain and configure the needed tools.
keywords:
  - how to
  - setup
  - chain
---

The sandbox comes with a bootstrapped wasp chain. You can find it's ID and RPC url in the [Wasp Dashboard](../references/endpoints.md#Wasp).


## (Optional) Enable and Configure EVM Toolkit

Enable the [EVM toolkit](https://evm-toolkit.evm.shimmer.network/) by uncommenting the `evm-toolkit` line in the `.env` file.
After that, change the `text` and `chainAddress` to your needs in the `assets/evm-toolkit/networks.json` file.
