---
description: IOTA Smart Contracts allow you to run smart contracts on top of the IOTA Tangle.
image: /img/Banner/banner_wasp.png
keywords:

- smart contracts
- core concepts
- scaling
- flexibility
- explanation

---

# IOTA Smart Contracts

![Wasp Node](/img/Banner/banner_wasp.png)

IOTA Smart Contracts (ISC) is a platform that brings scalable and flexible smart contracts into the IOTA ecosystem. It
allows anyone to spin up a smart contract blockchain and anchor it to the IOTA Tangle, a design that offers multiple
advantages.

## ISC Advantages

### Scaling and Fees

Due to the ordered structure and execution time of a smart contract, a single blockchain can only handle so many
transactions per second before deciding which transactions it needs to postpone until other blocks are produced, as
there is no processing power available for them on that chain.
On smart contract platforms that support a single blockchain, this eventually results in low throughput and high fees.

ISC allows many chains to be anchored to the IOTA Tangle and lets them execute in parallel and communicate with each
other.
Because of this, ISC will typically have much higher throughput and lower fees than single-chain smart contract
platforms.
Moreover, ISC is a level 2 solution where only a committee of nodes spends resources executing the smart contracts for
any given chain. Hence, the rest of the IOTA network is mainly unaffected by ISC traffic.

### Custom Chains

Since anyone can start a new chain and set its rules, many things that were otherwise not available in single-chain
platforms become possible.

For example, the chain owner has complete control over the gas fee policy: set the gas price, select which native token
to charge, and what percentage of the fee goes to validators.

It is possible to spin up a private blockchain with no public data besides the state hash anchored to the main IOTA
Tangle.
This allows parties that need private blockchains to use the security of the public IOTA network without exposing their
data to the public.

### Flexibility

ISC is agnostic about the virtual machine that executes the smart contract code.
We support [Rust/Wasm](https://rustwasm.github.io/docs/book/)-based smart contracts
and [Solidity/EVM](https://docs.soliditylang.org/en/v0.8.6/)-based smart contracts.
Eventually, all kinds of virtual machines can be supported in an ISC chain depending on the demand.

IOTA Smart Contracts are more complex than conventional smart contracts, but this provides freedom and flexibility to
use smart contracts in a wide range of use cases.

## Wasp

Wasp is the reference implementation of IOTA Smart Contracts.
Multiple Wasp nodes form a committee in charge of an ISC chain.
When they reach a consensus on a virtual machine state-change, they anchor that state change to the IOTA tangle, making
it immutable.

## Feedback

We are eager to receive your feedback about your experiences with the IOTA Smart Contracts Beta. You can
use [this form](https://docs.google.com/forms/d/e/1FAIpQLSd4jcmLzCPUNDIijEwGzuWerO23MS0Jmgzszgs-D6_awJUWow/viewform) to
share your developer experience with us. This feedback will help us improve the product in future releases.
