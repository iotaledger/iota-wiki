---
description: 'As Shimmer is an innovation network, you will always find more features like NFTs, native tokens, and smart contracts
than on the IOTA network at the cost of some stability.'
image: /img/shimmer-wiki.png
---

# Layer 1 Networks in the IOTA Ecosystem

:::note tl;dr;

As Shimmer is an innovation network, you will always find more features like NFTs, native tokens, and smart contracts
than on the IOTA network at the cost of some stability.

:::

You can use this section to get a high-level overview of the IOTA and Shimmer networks.

## High-Level Overview

|                                                                | IOTA                                                                         | Shimmer                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Protocol                                                       | [Chrysalis](https://wiki.iota.org/learn/chrysalis/introduction)                        | [Stardust](https://wiki.iota.org/learn/stardust/introduction)                                                                                                                                                                                                                                                                                                                                   |
| [Stability](#stability)                                        | Excellent                                                                    | Good                                                                                                                                                                                                                                                                                                                                                                                  |
| Transaction fees                                               | None                                                                         | None                                                                                                                                                                                                                                                                                                                                                                                  |
| Native token                                                   | IOTA                                                                         | SMR                                                                                                                                                                                                                                                                                                                                                                                   |
| Data structure                                                 | DAG(Tangle)                                                                  | DAG(Tangle)                                                                                                                                                                                                                                                                                                                                                                           |
| Value transactions                                             | Yes                                                                          | Yes                                                                                                                                                                                                                                                                                                                                                                                   |
| [Store data](#store-data)                                      | Yes, with Proof of Inclusion                                                 | Yes, with Proof of Inclusion                                                                                                                                                                                                                                                                                                                                                          |
| [Tokenization](#tokenization)                                  | None                                                                         | NFTs, Native Tokens, Alias Outputs                                                                                                                                                                                                                                                                                                                                                    |
| [Storage deposits](#storage-deposits)                          | None                                                                         | Yes                                                                                                                                                                                                                                                                                                                                                                                   |
| [Output unlock conditions](#output-unlock-conditions)          | [Address](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions) | [Address](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions), [Storage Deposit Returns](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#storage-deposit-return), [Expiration](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#expiration), [Timelock](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#timelock) |
| [IOTA Smart Contract (ISC)](#iota-smart-contracts-isc) Support | No                                                                           | In beta state                                                                                                                                                                                                                                                                                                                                                                        |

## Stability

Shimmer is designed as a staging network to test features publicly before deploying them on the IOTA network, so it
will always have more features than IOTA. As this may come at the cost of some stability, before any protocol changes
are deployed on the [Shimmer Mainnet](../endpoints/shimmer.md), they have been tested
in the [Shimmer Testnet](../endpoints/testnet.md).

## Store Data

### IOTA

In IOTA, you can attach
an [IndexationPayload](https://wiki.iota.org/shimmer/tips/tips/TIP-0006/#indexation-payload)
to a message or
any `SignedTransaction`.
The IndexationPayload allows you to add an index to a data message and arbitrary data.

### Shimmer

#### INX-Poi

You can use the [INX-PoI](https://wiki.iota.org/shimmer/inx-poi/welcome/) node extension to verify if any piece of data
was included in the Tangle. This feature does not rely on
the [Chronicle](/chronicle/welcome) permanode, so it drastically reduces the node operator's storage
requirements.

#### Tagged Data Payload

You can use a [Tagged Data Payload](https://wiki.iota.org/shimmer/tips/tips/TIP-0023/) to attach binary data and a tag
to extend an object with arbitrary data. Keep in mind this will not be indexed by the core nodes and you might want to create your own indexer based on INX or find a community driven project

## Tokenization

### IOTA

The IOTA network does not support custom tokens yet.

### Shimmer

The Stardust protocol introduces
a [tokenization framework](https://wiki.iota.org/learn/stardust/core-concepts/multi-asset-ledger)
that enables Native Tokens, NFTs and foundries on layer 1, as long as you can cover the
minimum [storage deposit](#storage-deposits).

## Storage Deposits

### IOTA

There are no data storage deposits in the IOTA network, as it relies
on dust protection, which means you can only
send microtransactions of less than 1Mi if the target address meets
the [dust protection validation conditions](https://wiki.iota.org/shimmer/tips/tips/TIP-0019/).

### Shimmer

The Stardust protocol improves IOTA dust protection by
introducing [storage deposits](https://wiki.iota.org/learn/stardust/core-concepts/storage-deposit).
You must back up any data you store on the Tangle with `SMR` tokens. **The deposit is not a fee**, and it can be
refunded as soon as the output is cleaned up.

## Output Unlock Conditions

### IOTA

At the time, IOTA's Chrysalis protocol only allows the
traditional [address](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#address)
unlock condition. That is to say, outputs in Chrysalis can only be unlocked by whoever controls the keys associated with
the target address.

### Shimmer

The Stardust protocol introduces
new [output unlock conditions](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions)
that allow you to specify not only
the [unlock address](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#address),
but also:

- [Storage deposit return](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#storage-deposit-return):
  This feature allows you to specify a return amount that has to be refunded to the sender's account, which enables
  micro-transactions of any size.
- [Expirations](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#expiration):
  If you define an expiration date-time for your output, it will be returned if it hasn't been claimed by said
  date-time.
- [Time-locks](https://wiki.iota.org/learn/stardust/core-concepts/output-unlock-conditions#timelock):
  Conversely to expirations, you can also specify a date-time until which the recipient won't be able to claim the
  output.

## IOTA Smart Contracts (ISC)

You can use [IOTA Smart Contracts (ISC)](https://wiki.iota.org/smart-contracts/overview/) to deploy your own
[scalable](https://wiki.iota.org/smart-contracts/overview/#scaling-and-fees)
and [flexible](https://wiki.iota.org/smart-contracts/overview/#flexibility) smart contracts to the
IOTA ecosystem.

### Ethereum Virtual Machine (EVM) Support

You can use [Ethereum Virtual Machine (EVM)](https://wiki.iota.org/smart-contracts/guide/evm/introduction/)
smart contracts on any IOTA smart contract chain by using
the [`evm`](https://wiki.iota.org/smart-contracts/guide/core_concepts/core_contracts/evm/) [core contract](https://wiki.iota.org/smart-contracts/guide/core_concepts/core_contracts/overview/)
that can run the EVM/Solidity based smart contracts.

#### JSON-RPC

You can also interact with the EVM layer using tools
like [MetaMask](https://metamask.io/), [Remix](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/) by
pointing the JSON-RPC service included in Wasp nodes.

### IOTA

The IOTA network does not yet support IOTA Smart Contracts.

### Shimmer

You can use the ISC protocol
by [spinning up your own private Tangle with the preconfigured Docker image](https://github.com/iotaledger/wasp/tree/develop/tools/local-setup).