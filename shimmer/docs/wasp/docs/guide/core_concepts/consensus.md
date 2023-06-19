---
description: IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.
image: /img/logo/WASP_logo_dark.png
keywords:
- smart contracts
- consensus
- validator committee
- validators
- validator nodes
- explanation
---

# Consensus

To update the chain, its committee must reach a consensus, meaning that more than two thirds of its validators have to
agree to change the state in the exact same way.
This prevents a single malicious node from wreaking havoc over the chain, but there are also more mundane reasons for
individual nodes to act up.

Smart contracts are deterministic. All honest nodes will produce the same output — but only if they have received the
same input. Each validator node has its point of access to the Tangle, so it may look different to different nodes, as
new transactions take time to propagate through the network. Validator nodes will receive smart contract requests with
random delays in a random order, and, finally, all computers run on their own always slightly skewed clocks.

## Batch Proposals

As the first step, each node provides its vision, a *batch proposal*. The proposal contains a local timestamp, a list of
unprocessed requests, and the node's partial signature of the commitment to the current state.

Then the nodes must agree on which batch proposals they want to work on. In short, nodes A, B, and C have to confirm
that they plan to work on proposals from A, B, and C, and from no one else. As long as there are more than two thirds of
honest nodes, they will be able to find an *asynchronous common subset* of the batch proposals. From that point, nodes
have the same input and will produce the same result independently.

## The Batch

The next step is to convert the raw list of batch proposals into an actual batch. All requests from all proposals are
counted and filtered to produce the same list of requests in the same order.
The partial signatures of all nodes are combined into a full signature that is then fed to a pseudo-random function that
sorts the smart contract requests.
Validator nodes can neither affect nor predict the final order of requests in the batch. This protects ISC
from [MEV attacks](https://ethereum.org/en/developers/docs/mev/)).

## State Anchor

After agreeing on the input, each node executes every smart contract request in order, independently producing the same
new block. Each node then crafts a state anchor, a Layer 1 transaction that proves the commitment to this new chain
state. The timestamp for this transaction is derived from the timestamps of all batch proposals.

All nodes then sign the state anchor with their partial keys and exchange these signatures. This way, every node obtains
the same valid combined signature and the same valid anchor transaction, which means that any node can publish this
transaction to Layer 1. In theory, nodes could publish these state anchors every time they update the state; in
practice, they do it only every approximately ten seconds to reduce the load on the Tangle.
