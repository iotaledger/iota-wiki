---
description: 'This section provides a comprehensive guide targeted at developers who want to build on the IOTA network.'
tags:
  [
    'IOTA',
    'Development',
    'API Endpoints',
    'Networks',
    'Client Libraries',
    'Smart Contracts',
    'Application Libraries',
  ]
---

# Welcome

Welcome to the "Build" section of the IOTA Wiki. This section is for developers interested in using the IOTA and Shimmer
networks for decentralized applications, integrating their exchange, minting NFTs, and much more. Here, you can find all
the available [Networks and Endpoints](networks-endpoints.mdx), links for all the available
[Tools](/build/tools), [APIS](/apis/welcome), and all the documentation to communicate with the Layer 1 networks,
build
decentralized applications and interact with Layer 2 [smart contracts](#smart-contracts).

## Layer 1

### IOTA SDK

You can use the [IOTA SDK](/iota-sdk/welcome) to interact directly with the IOTA and Shimmer networks. The
IOTA SDK offers a streamlined integration of IOTA functionality into your projects. It is available in
[Rust](/iota-sdk/getting-started/rust), [Node.js](/iota-sdk/getting-started/nodejs),
[Python](/iota-sdk/getting-started/python) and [Wasm](/iota-sdk/getting-started/wasm).

### Cli Wallet

The [cli-wallet](/cli-wallet/welcome) is a stateful Command Line Interface wrapper for the IOTA SDK that
allows you to create a wallet, create and manage accounts, send _value transactions_, mint, burn, and receive native
tokens and NFTs, and more.

### Identity

You can use the [IOTA Identity Framework](/identity.rs/welcome) to create and manage
[Self-Sovereign Identities (SSI)](/identity.rs/explanations/decentralized-identifiers) for people, organizations, or
any object in a GDPR-compliant, cost-efficient, and privacy-enabling manner.

## Layer 2

### Smart Contracts

The [IOTA Smart Contracts (ISC)](/learn/smart-contracts/introduction) bring scalable, flexible, and cost-effective smart
contract functionality to the IOTA ecosystem. By anchoring multiple chains to the IOTA Tangle, ISC enables
higher _throughput_ and lower fees than traditional single-chain solutions. Users have the freedom to create custom
chains with control over gas fees and privacy settings, and the platform is virtual machine-agnostic, supporting both
[Rust/Wasm](/isc/introduction) and [Solidity/EVM](/isc/introduction)
smart contracts.
