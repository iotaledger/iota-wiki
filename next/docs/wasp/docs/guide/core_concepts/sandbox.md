---
description: 'Smart Contracts can only interact with the world by using the Sandbox interface which provides limited and
deterministic access to the state through a key/value storage abstraction.'
image: /img/sandbox.png
keywords:

- smart contracts
- sandbox
- interface
- storage abstraction
- explanation

---

# Sandbox Interface

A smart contract's access to the world has to be restricted. Imagine a smart contract that would directly tap into a
weather forecast website: as the weather changes, the result of the contract's execution will also change. This smart
contract is not deterministic, meaning that you cannot reproduce the result yourself to verify it because the result for
each execution could be different.

The access to the chain's state has to be curated, too. The chain owner and developers of individual smart contracts are
not necessarily the same entity. A single malicious contract could ruin the whole chain if not limited to its own space.
Instead of working on the state as a whole, each smart contract can only modify a part of it.

The only way for smart contracts to access data is to use the Sandbox interface, which is deterministic. It provides
their internal state as a list of key/value pairs.

![Sandbox](/img/sandbox.png)

Besides reading and writing to the contract state, the Sandbox interface allows smart contracts to access:

- The [ID](./accounts/how-accounts-work#agent-id) of the contract.
- The details of the current request or view call.
- The current request allowance and a way to claim the allowance.
- The balances owned by the contract.
- The ID of whoever had deployed the contract.
- The timestamp of the current block.
- Cryptographic utilities like hashing, signature verification, and so on.
- The [events](../wasm_vm/events.mdx) dispatch.
- Entropy that emulates randomness in an unpredictable yet deterministic way.
- Logging. Used for debugging in a test environment.

The Sandbox API available in "view calls" is slightly more limited than the one available in normal "execution calls".
For example, besides the state access being read-only for a view, they cannot issue requests, emit events, etc.
