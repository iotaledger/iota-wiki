---
description: "Learn how to create user-defined native tokens, also known as Digital Assets, with IOTA's Stardust protocol in the Shimmer network using iota.js."
image: /img/client_banner.png
keywords:
  - tutorial
  - UTXO
  - native token
  - token
  - foundry
  - digital
  - asset
  - mint
  - melt
  - shimmer
  - ledger
  - outputs
  - inputs
---

# Stardust for iota.js: Digital Assets

This tutorial will show you how to user-defined native tokens, also known as **Digital Assets**, with IOTA's Stardust protocol in the Shimmer network using iota.js

## Introduction

Starting from [Chrysalis](/learn/protocols/chrysalis/introduction), IOTA is
a [UTXO-based (Unspent Transaction Output)](/learn/protocols/chrysalis/core-concepts/switch-to-UTXO)
Ledger. Each UTXO, also known as **output**, has an associated number of tokens, protocol-defined Tokens (SMR) and, optionally, user-defined native tokens) that determines its value.
Thus, the permanent data on the ledger is composed of a set of records (_Outputs_) that can be unlocked by the owner of
its associated address, i.e., the one who knows the address' private key.

There are different [Output types](/tips/tips/TIP-0018#output-design) in the [Stardust Protocol](/introduction/stardust/welcome). This tutorial will focus on
outputs that involve user-defined [native tokens](/introduction/stardust/explanations/ledger/foundry), a.k.a digital assets. The tutorial will also use [Alias](/introduction/stardust/explanations/ledger/alias) and [Foundry](/tips/tips/TIP-0018#output-design#foundry-output) Outputs.

:::info Foundries
A _Foundry Output_ is an Output that controls the supply of user-defined, custom tokens, also known as _native tokens_.
:::

Last but not least, you will learn how to define [UTXOs](/introduction/stardust/explanations/what_is_stardust/rethink_utxo) to transfer native tokens among addresses.

:::tip NFTs
If you want to mint Non-Fungible Tokens (NFTs), you can check out this [how-to guide](../../how_tos/mint_nft.mdx).
:::

## Storage Costs and Deposits

You need to take into account that both Alias and Foundry outputs need to be stored by [Hornet Nodes](/hornet/welcome), so there is a [storage cost](/learn/protocols/stardust/core-concepts/storage-deposit) as with any UTXO.
