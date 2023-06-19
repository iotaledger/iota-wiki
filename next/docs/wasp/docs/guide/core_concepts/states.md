---
description: 'The state of the chain consists of balances of native IOTA digital assets and a collection of key/value
pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.'
image: /img/chain0.png
keywords:

- state
- transitions
- balances
- digital assets
- UTXO
- transitions
- explanation
---
# State, Transitions, and State Anchoring

## State of the Chain

The state of the chain consists of:

- A ledger of accounts owning IOTA digital assets (base tokens, native tokens, and NFTs). The chain acts as a custodian
  for those funds on behalf of each account's owner.
- A collection of arbitrary key/value pairs (the _data state_) that contains use case-specific data stored by the smart
  contracts in the chain.

The chain's state is an append-only (immutable) data structure maintained by the distributed consensus of its
validators.

## Digital Assets on the Chain

Each native L1 account in the IOTA UTXO ledger is represented by an address and controlled by an entity holding the
corresponding private/public key pair.
In the UTXO ledger, an account is a collection of UTXOs belonging to the address.

Each ISC L2 chain has a L1 account, called the _chain account_, holding all tokens entrusted to the chain in a single
UTXO, the _state output_.
It is similar to how a bank holds all deposits in its vault. This way, the chain (the entity controlling the state
output) becomes a custodian for the assets owned by its clients, similar to how the bank’s client owns the money
deposited in the bank.

The consolidated assets held in the chain are the _total assets on-chain_, which are contained in the state output of
the chain.

The chain account is controlled by a _chain address_, also known as _chain ID_.
It is a special kind of L1 address, an _alias address_, which abstracts the controlling entity (the state controller
address) from the identity of the chain: the controlling entity of the chain may change, while the chain ID stays the
same.

## The Data State

The data state of the chain consists of a collection of key/value pairs.
Each key and each value are arbitrary byte arrays.

In its persistent form, the data state is stored in a key/value database outside the UTXO ledger and maintained by the
validator nodes of the chain.
The state stored in the database is called the _solid state_.

While a smart contract request is being executed, the _virtual state_ is an in-memory collection of key/value pairs that
can become solid upon being committed to the database.
An essential property of the virtual state is the possibility of having several virtual states in parallel as
candidates, with a possibility for one of them to be solidified.

The data state has a state hash, a timestamp, and a state index.
The state hash is usually a Merkle root, but it can be any hashing function of all data in the data state.

The data state hash and on-chain assets are contained in a single atomic unit on the L1 ledger: the state UTXO.
Each state mutation (state transition) of the chain is an atomic event that changes the on-chain assets and the data
state, consuming the previous state UTXO and producing a new one.

## Anchoring the State

The data state is stored outside the ledger, on the distributed database maintained by validator nodes.
_Anchoring the state_ means placing the hash of the data state into the state UTXO and adding it to the L1 UTXO ledger.
The UTXO ledger guarantees that there is *exactly one* such output for each chain on the ledger at every moment.
We call this output the *state output* (or state anchor) and the containing transaction the *state transaction* (or
anchor transaction) of the chain.
The state output is controlled (i.e., can be unlocked/consumed) by the entity running the chain.

With the anchoring mechanism, the UTXO ledger provides the following guarantees to the IOTA Smart Contracts chain:

- There is a global consensus on the state of the chain
- The state is immutable and tamper-proof
- The state is consistent (see below)

The state output contains:

- The identity of the chain (its L1 alias address)
- The hash of the data state
- The state index, which is incremented with each new state output

## State Transitions

The data state is updated by mutations of its key/value pairs.
Each mutation either sets a value for a key or deletes a key (and the associated value).
Any update to the data state can be reduced to a partially ordered sequence of mutations.

A *block* is a collection of mutations to the data state that is applied in a state transition:

```go
next data state = apply(current data state, block)
```

The state transition in the chain occurs atomically in a L1 transaction that consumes the previous state UTXO and
produces the next one. The transaction includes the movement of the chain's assets and the update of the state hash,

At any moment in time, the data state of the chain is a result of applying the historical sequence of blocks, starting
from the empty data state.

![State transitions](/img/chain0.png)

On the L1 UTXO ledger, the state's history is represented as a sequence (chain) of UTXOs, each holding the chain’s
assets in a particular state and the anchoring hash of the data state.
Note that not all the state's transition history may be available: due to practical reasons, older transactions may be
pruned in a snapshot process.
The only thing guaranteed is that the tip of the chain of UTXOs is always available (which includes the latest data
state hash).

The ISC virtual machine (VM) computes the blocks and state outputs that anchor the state, which ensures that the state
transitions are calculated deterministically and consistently.

![Chain](/img/chain1.png)

