---
description: Compatibility between the ISC EVM layer and existing Ethereum smart contracts and tooling.
image: /img/logo/WASP_logo_dark.png
keywords:
  - smart contracts
  - EVM
  - Ethereum
  - Solidity
  - limitations
  - compatibility
  - fees
  - reference
---

# EVM Compatibility in IOTA Smart Contracts

The [`evm`](../reference/core-contracts/evm.md) [core contract](../reference/core-contracts/overview.md)
provides EVM support in IOTA Smart Contracts. It stores the EVM state (account balances, state, code,
etc.) and provides a way to execute EVM code to manipulate the state.

The EVM core contract runs on top of the ISC layer, which provides the rest of the machinery needed to run smart
contracts, such as signed requests, blocks, state, proofs, etc.

However, the ISC EVM layer is also designed to be as compatible as possible with existing Ethereum tools
like [MetaMask](https://metamask.io/), which assume that the EVM code runs on an Ethereum blockchain composed of
Ethereum blocks containing Ethereum transactions. Since ISC works in a fundamentally different way,
providing 100% compatibility is not possible. We do our best to emulate the behavior of an Ethereum node, so the
Ethereum tools think they are interfacing with an actual Ethereum node, but some differences in behavior are inevitable.

## Properties and Limitations

:::warning

There is a difference in the decimal precision of ether (18 decimal places) to MIOTA/SMR(6 decimal places). Because of this, when sending native tokens in the EVM, which are expressed in wei (ether = 10<sup>18</sup>wei), the last 12 decimal places will be ignored.

Example: 1,999,999,999,999,999,999 wei = 1.999,999 SMR/MIOTA

:::

Here are some of the most important properties and limitations of EVM support in IOTA Smart Contracts:

### Wrapped Calls to the JSON-RPC

The Wasp node provides a JSON-RPC service, the standard protocol used by Ethereum tools. Upon receiving a signed
Ethereum transaction via JSON-RPC, the transaction is wrapped into an ISC
[off-ledger request](/learn/smart-contracts/invocation#off-ledger-requests). The sender of the request
is the Ethereum address that signed the original transaction (e.g., the Metamask account).

### Contract ID Source

While ISC contracts are identified by an [hname](/learn/smart-contracts/smart-contract-anatomy), EVM contracts are
identified by their Ethereum address.

### WASM Root Contract List

EVM contracts are not listed in the chain's [contract registry](../reference/core-contracts/root.md).

### On-ledger Requests

EVM contracts cannot be called via regular ISC requests; they can only be called through the JSON-RPC service.
As a consequence, EVM contracts cannot receive [on-ledger requests](/learn/smart-contracts/invocation#on-ledger-requests).

### Block Structure and Storage

Unlike Ethereum's blockchain that houses the state in a Merkle tree, the EVM state resides in a raw form to prevent the
duplication of efforts undertaken by the ISC layer.

Any Ethereum transactions present in an ISC block are executed by
the [`evm`](../reference/core-contracts/evm.md) [core contract](../reference/core-contracts/overview.md),
updating the EVM state accordingly. An emulated Ethereum block is also created and stored to provide compatibility
with EVM tools. As the emulated block is not part of a real Ethereum blockchain, some attributes of the blocks will
contain dummy values (e.g. `stateRoot`, `nonce`, etc.).

Each stored block contains the executed Ethereum transactions and corresponding Ethereum receipts. If storage is
limited, you can configure EVM so that only the latest N blocks are stored.

### No Enforced Block Time

There is no guaranteed _block time_. A new EVM "block" will be created only when an ISC block is created, and ISC does
not enforce an average block time. This means that block times are variable; a new block will be created as soon as needed. The average block time in the [Public Testnet](/build/networks-endpoints#public-testnet) is 8.4 seconds.

### L2 Token Ownership

In the IOTA Smart Contract chain, both IOTA and Ethereum addresses are a valid `AgentID`, facilitating the ownership of L2
tokens.

### Retrieving the Ethereum Balance

The Ethereum balance of an account is tied to its L2 ISC balance in the token used to pay for gas. For example,
by default `eth_getBalance` will return the L2 base token balance of the given Ethereum account.

### The Magic Contract

A [dedicated Ethereum contract](../how-tos/magic-contract/magic.md) exists to manage ISC tokens and generally avail ISC
functionalities, introducing commands like `isc.send(...)` for token transfers.

### Gas Fees

The used EVM gas is converted to ISC gas before being charged to the sender. The conversion ratio is configurable. The
token used to pay for gas is the L1's base token. The gas fee is debited from
the sender's L2 account and must be deposited beforehand.
