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

The [`evm`](../core_concepts/core_contracts/evm.md) [core contract](../core_concepts/core_contracts/overview.md)
provides EVM support in IOTA Smart Contracts. It stores the EVM state (account balances, state, code,
etc.) and provides a way to execute EVM code to manipulate the state.

The EVM core contract runs on top of the ISC layer, which provides the rest of the machinery needed to run smart
contracts, such as signed requests, blocks, state, proofs, etc.

However, the ISC EVM layer is also designed to be as compatible as possible with existing Ethereum tools
like [MetaMask](https://metamask.io/), which assume that the EVM code runs on an Ethereum blockchain composed of
Ethereum blocks containing Ethereum transactions. Since ISC works in a fundamentally different way,
providing 100% compatibility is not possible. We do our best to emulate the behavior of an Ethereum node, so the
Ethereum tools think they are interfacing with an actual Ethereum node, but some differences in behavior are inevitable.

:::warning
There is a difference in the decimal precision of ether (18 decimal places) to MIOTA/SMR(6 decimal places). Because of this, when sending native tokens in the EVM, which are expressed in wei (ether = 10<sup>18</sup>wei), the last 12 decimal places will be ignored.

example: 1,999,999,999,999,999,999 wei = 1.999,999 SMR/MIOTA
:::

Here are some of the most important properties and limitations of EVM support in IOTA Smart Contracts:

- The Wasp node provides a JSON-RPC service, the standard protocol used by Ethereum tools. Upon receiving a signed
  Ethereum transaction via JSON-RPC, the transaction is wrapped into an ISC off-ledger request. The sender of the
  request
  is the Ethereum address that signed the original transaction (e.g., the Metamask account).

- While ISC contracts are identified by an [hname](../core_concepts/smart-contract-anatomy.md), EVM contracts are
  identified by their Ethereum address.

- EVM contracts are not listed in the chain's [contract registry](../core_concepts/core_contracts/root.md).

- EVM contracts cannot be called via regular ISC requests; they can only be
  called through the JSON-RPC service.
  As a consequence, EVM contracts cannot receive on-ledger requests.

- In contrast with an Ethereum blockchain, which stores the state in a Merkle tree, the EVM state is stored in raw form.
  It would be inefficient to do that since it would be duplicating work done by the ISC layer.

- Any Ethereum transactions present in an ISC block are executed by
  the [`evm`](../core_concepts/core_contracts/evm.md) [core contract](../core_concepts/core_contracts/overview.md),
  updating the EVM state accordingly. An emulated Ethereum block is also created and stored to provide compatibility
  with EVM tools. As the emulated block is not part of a real Ethereum blockchain, some attributes of the blocks will
  contain dummy values (e.g. `stateRoot`, `nonce`, etc.).

- Each stored block contains the executed Ethereum transactions and corresponding Ethereum receipts. If storage is
  limited, you can configure EVM so that only the latest N blocks are stored.

- There is no guaranteed *block time*. A new EVM "block" will be created only when an ISC block is created, and ISC does
  not enforce an average block time.

- Any Ethereum address is accepted as a valid `AgentID`, and thus can own L2 tokens on an IOTA Smart Contract chain,
  just like IOTA addresses.

- The Ethereum balance of an account is tied to its L2 ISC balance in the token used to pay for gas. For example, 
  by default `eth_getBalance` will return the L2 base token balance of the given Ethereum account.


- To manipulate the owned ISC tokens and access ISC functionality in general, there is
  a [special Ethereum contract](magic.md) that provides bindings to the ISC sandbox (e.g. call `isc.send(...)` to send
  tokens).

- The used EVM gas is converted to ISC gas before being charged to the sender. The conversion ratio is configurable. The
  token used to pay for gas is the same token configured in the ISC chain (IOTA by default). The gas fee is debited from
  the sender's L2 account and must be deposited beforehand.
