---
description: Learn about IOTA's Stardust upgrade, focusing on its key features and enhancements.
tags:
  [
    IOTA,
    Stardust,
    Multi-Asset Ledger,
    ISC,
    Output Features,
    Unlock Conditions,
    White Flag Consensus,
  ]
---

# Introduction

Stardust represents the next phase in the IOTA protocol.
While _Chrysalis_ focused on token transfers, Stardust introduced
advanced functionalities to the ledger, broadening IOTA's utility and scope.

## Multi Asset Ledger

The new [tokenization framework](core-concepts/multi-asset-ledger.md) facilitates the creation of custom tokens,
including user-defined native tokens and Non-Fungible Tokens (NFTs).
This framework distinguishes itself by not relying on intricate smart contracts to create tokens,
streamlining the process for users.

## Output Features

The new [output features](core-concepts/output-features.md) in Stardust give more control and flexibility to users.
You can now attach metadata to any output,
a verified sender or issuer for NFTs, and tag outputs to efficiently index and integrate them in your application.

## Output Unlock Conditions

Stardust introduces new [output unlock conditions](core-concepts/output-unlock-conditions.md) to control token behavior.
These conditions can be used for multiple purposes, including setting time locks on tokens.
One crucial advantage is the prevention of token spamming.
Users can set conditions to control which tokens they send,
adding a layer of protection and customization to their transactions.

## Storage Deposits

In the Stardust upgrade, [storage deposits](core-concepts/storage-deposit.md) come into play for tokenization.
These deposits are essential for creating tokens and enable permanent data storage on the Tangle,
IOTA's unique data structure.
If a user decides they no longer need the storage, they can reclaim their deposit, making it a flexible feature.

## ISC Support

You can deploy [IOTA Smart Contracts (ISC)](../../smart-contracts/introduction.md) as Layer 2 (L2) chains
in Stardust.
This approach differs from platforms that run smart contracts on their primary layer,
ensuring the main layer remains efficient and speedy while also providing the flexibility that smart contracts offer on
L2 chains.
