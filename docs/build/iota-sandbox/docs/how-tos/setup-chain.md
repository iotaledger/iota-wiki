---
title: Setup a Chain
description: Setup a wasp chain in the IOTA Sandbox
keywords:
  - how to
  - setup
  - chain
---

To setup a chain you should have the wasp profile enabled. You can do this by uncommenting the `wasps` line in the `.env` file.

Afterwards you can just follow the how-tos for [configuring wasp-cli](/wasp-cli/how-tos/wasp-cli/) and [setting up a chain](/wasp-cli/how-tos/setting-up-a-chain#start-the-chain).
You can find the endpoints needed in the [endpoints section](./../references/endpoints.md).

## Optional: Enable and configure EVM toolkit

Enable the EVM toolkit by uncommenting the `evm-toolkit` line in the `.env` file.
After that add change the `text` and `chainAddress` to your needs in the `assets/evm-toolkit/networks.json` file.
