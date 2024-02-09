---
tags:
  - Stardust
  - Shimmer
  - Upgrades
  - Mainnet
  - Protocol Improvements
  - explanation
description: Specific Stardust Upgrades from IOTA 1.5 Chrysalis.
image: /img/logo/preview.png
---

# What is Stardust?

The previous IOTA protocol, Chrysalis, was optimized for a single application: sending digital money from A to B.
The upcoming Stardust upgrade introduces computation and utility to the ledger:

- Making IOTA an **infrastructure and settlement layer** for [second-layer smart contract chains](/learn/smart-contracts/introduction/) using [IOTA Smart Contracts (ISC)](#isc).
- Transforming IOTA into a **multi-asset ledger** with custom, user-defined tokens using the new [tokenization framework](#tokenization-framework).

## Tokenization Framework

The [tokenization framework](tokenization.md) enables many new functionalities that builders want, most importantly, the ability to mint other tokens and NFTs. Our approach is different from the approach used in most other platforms, which require full smart contracts to do so. It has its advantages and disadvantages.

### Advantages

- Tokenization has low energy requirements and no fees.
- Minting is fast and easy and can even be done on [Firefly](https://firefly.iota.org)!
- [Native tokens](../ledger/foundry.md) and [NFTs](../ledger/nft.md) are first-class citizens of the core protocol:
  - They benefit from the security of Layer 1.
  - It is simple to fetch all tokens belonging to an account. With Ethereum, your ERC balance is stored in the contract state, making it difficult to get it quickly.
  - Adding native tokens should be extremely easy for exchanges (easier than adding ERC20 tokens for Ethereum).
- [Storage deposits](storage_deposit.md) are needed for tokenization, which gives significant utility to the IOTA and Shimmer tokens. The barrier for minting remains low as you only need a small amount for the initial mint (with additional storage deposits needed for each subsequent wallet holding that token).
- Storage deposits allow for permanent storage of data on the Tangle. If data permanence is deemed sufficiently necessary for a given use case, it is possible to store data indefinitely with a storage deposit that scales linearly with the amount of data being stored. You get the deposit back if you are no longer using the storage.
- The storage deposits allow on-chain storage of NFT metadata so that you are not reliant on an IPFS cluster or a web2 solution being maintained. This is relatively unique for NFTs in the DLT space - you would not store a whole movie. Still, there is a lot of opportunity for novel use cases, especially storing important metadata. Alternatively, this could be useful for some rare high-value NFTs (e.g., “Ferrari” NFTs) for which one may happily pay for the maximum 16kB (8kB mutable and 8kB immutable data) storage limit. This would also lock up a larger amount of IOTA tokens, which may be seen as a good thing.
- [Unlock conditions](unlock_conditions.md) - multiple use cases such as time locks. But an important use case is that no one can spam your address with tokens you don’t want. E.g., taint your address with Tornado cash tokens (although in our case, it would only taint the UTXO it is on rather than the whole address).
  - Requirements for transaction claiming also apply to NFTs. Although people can [spam you with unwanted NSFW content](https://decrypt.co/79406/budweiser-dick-pic-nft-ethereum-wallet), you can easily burn those NFTs and extract the storage deposit.
  - Transaction expiry times can reduce the risk of sending transactions to the wrong address, which is especially useful for more significant amounts. If the funds are not claimed in a specific time frame, the sender can reclaim them.

:::note Invalid Addresses

Wallets typically block transactions to invalid addresses, but there is still a risk of sending a transaction to a valid address owned by the wrong person or that nobody currently owns.

:::

### Disadvantages

- No programmability as there are no Layer 1 smart contracts currently.
- Different from the standard ERC standards, especially as tokens like algorithmic stablecoins and vesting schemes need smart contracts, but we can have equivalent versions.

## ISC

ISC can be deployed as multiple Layer 2 (L2) chains, unlike many other projects that offer smart contracts on Layer 1 (L1).

### Advantages

- [L1 is not congested with smart contracts](/learn/smart-contracts/introduction/#scalable-smart-contracts).
- Since L1 is not limited by the speed of the smart contract VM, transactions per second (TPS) increase significantly.
- No maximal extractable value (_MEV_). No front-running or sandwich attacks, resulting in a “fairer” DeFi_environment. A set fee and randomization of transactions are included in blocks, making _MEV_ impossible.
- Native randomness beacon (random number generator, or RNG). This is freely available to all dApps, removing the need for expensive, trusted third-party RNGs.
- L1 smart contracts are complex on a [DAG](/get-started/introduction/iota/introduction#the-tangle) as the order of events is less apparent than on a regular blockchain (where there is no parallel execution).
- We have designed a system where L2 chains can interact using the IOTA L1. Assets can be transferred cross-chain via Layer 1 without collateralized bridges. This is a significant advantage of ISC compared to other L2 solutions and is comparable to the IBC system on Cosmos.
- ISC is horizontally scalable. When one SC chain becomes saturated, you can easily spin up a second chain to handle the additional throughput.
- Every L2 chain can behave as a sovereign ecosystem and be fully customized, which is very appealing to many projects. Recent examples include DyDx and Dogechain, both building sovereign chains on Cosmos.
- L2 chains can be both public or private while still being able to interact with L1 and each other. This brings the best of open and private corporate chains together.

### Disadvantages

- Each L2 is relatively independent of IOTA and has flexibility in its behavior. They may leverage the IOTA L1 as little or as much as they want. The L2 chains will use IOTA tokens for:
  - A storage deposit to update data on the main chain. In the future, also for _mana_ to guarantee enough bandwidth for _writing to the ledger_.
  - A storage deposit (and in the future mana) to wrap tokens for transfer between chains.
  - By default, the base token (IOTA or SMR depending on the chain) is used for paying for gas on L2 chains. However, the chain owner can change this. Any chains spawned by the IOTA Foundation will use IOTA/SMR for gas.
- The security of each L2 chain is dependent on its validator nodes (Wasp nodes), which are independent of the IOTA Mainnet nodes. This means IOTA can only guarantee their safety if we find a way to leverage L1 nodes for shared security in the future.
- As with any _interoperability_ solution, if most economic activity moves to L2, then the value of L1 may be compromised.

The following sections will explain the new concepts and features in detail.
