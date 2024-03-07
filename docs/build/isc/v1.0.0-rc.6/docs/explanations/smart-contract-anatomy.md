---
description: Each smart contract instance has a program with a collection of entry points and a state.
image: /img/tutorial/SC-structure.png
tags:
  - smart contracts
  - structure
  - state
  - entry points
  - Wasm
  - explanation
---

# Anatomy of a Smart Contract

Smart contracts are programs that are immutably stored in the chain.

Through _VM abstraction_, the ISC virtual machine is agnostic about the interpreter used to execute each smart contract.
It can support different _VM types_ (i.e., interpreters) simultaneously on the same chain.
For example, it is possible to have [Wasm](../getting-started/languages-and-vms.md#wasm-vm-for-isc) and [EVM/Solidity](../getting-started/languages-and-vms.md#evmsolidity-based-smart-contracts) smart
contracts coexisting on the same chain.

![Smart Contract Structure](/img/tutorial/SC-structure.png)

## Identifying a Smart Contract

The ISC [core contracts](core-contracts.md) and WASM contracts on the chain are identified by a _hname_ (pronounced 
"aitch-name"), which is a `uint32` value calculated as a hash of the smart contract's instance name (a string).
For example, the hname of the [`root`](../reference/core-contracts/root.md) core contract
is `0xcebf5908`. This value uniquely identifies this contract in every chain. This does not apply to EVM contracts.

## State

The smart contract state is the data owned by the smart contract and stored on the chain.
The state is a collection of key/value pairs.
Each key and value are byte arrays of arbitrary size (there are practical limits set by the underlying database, of
course).
You can think of the smart contract state as a partition of the chain's data state, which can only be written by the
smart contract program itself.

The smart contract also owns an account on the chain, stored as part of the chain state.
The smart contract account represents the balances of base tokens, native tokens, and NFTs controlled by the smart
contract.

The smart contract program can access its state and account through an interface layer called the _Sandbox_.
Only the smart contract program can change its data state and spend from its
account. Tokens can be sent to the smart contract account by any other agent on
the ledger, be it a wallet with an address or another smart contract.

See [Accounts](./how-accounts-work.md) for more information on sending and receiving
tokens.

## Entry Points

Each smart contract has a program with a collection of _entry points_.
An entry point is a function through which you can invoke the program.

There are two types of entry points:

- _Full entry points_ (or simply _entry points_): These functions can modify
  (mutate) the smart contract's state.
- _View entry points_ (or _views_): These are read-only functions. They are only used
  to retrieve the information from the smart contract state. They cannot
  modify the state, i.e., they are read-only calls.

## Execution Results

After a request to a Smart Contract is executed (a call to a full entry point), a _receipt_ will be added to
the [`blocklog`](../reference/core-contracts/blocklog.md) core contract. The receipt details the
execution results
of said request: whether it was successful, the block it was included in, and other information.
Any events dispatched by the smart contract in context of this execution will also be added to the receipt.

## Error Handling

Smart contract calls can fail: for example, if they are interrupted for any reason (e.g., an exception) or if it
produces an error (missing parameter or other inconsistency).
Any gas spent will be charged to the sender, and the error message or value is stored in the receipt.
