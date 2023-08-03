---
description: Learn about the IOTA 2.0 consensus protocol, including its key components and consensus flags.
keywords:
  ['IOTA 2.0', 'consensus protocol', 'components', 'dimensions', 'flags']
---

# Consensus

## Required Components

The following modules are necessary to achieve agreement using the IOTA 2.0 consensus protocol:

### Approval Weight Module

The **Approval weight module** is responsible for gathering votes from
the [validation blocks](data-structures.md#validation-blocks),
finding appropriate validation [block](data-structures.md#blocks) patterns in
the [Tangle](data-structures.md#the-tangle), and evaluating the voting results to determine consensus flags for blocks
and transactions.

### Tip Selection Algorithm

The **Tip selection algorithm** guides the voting and agreement process in which the committee and other [nodes](networking.md#nodes) partake.
All nodes collectively build the Tangle by attaching their blocks to a bounded number of randomly selected eligible
tips.

### Slot Commitment Chain

The **Slot commitment chain** is one of the core data structures in the protocol.
A [slot commitment](data-structures.md#slot-commitments) is a hash digest of
the accepted blocks and transactions issued during a given slot linked to the commitment of the previous slot, forming
a slot commitment chain. The **Chain switching rule** ensures that all honest nodes eventually switch to the heaviest
slot commitment chain with the latest quorum certificate.

## The Consensus Protocol's Two Dimensions

The consensus protocol can be broadly divided into separate entities using two dimensions.

### First Dimension

The first dimension separates the agreement tasks for blocks and transactions:

1. **Reliable broadcast of blocks:** Ensures the reliable delivery of newly created blocks to all nodes in the network.
2. **Agreement on conflicting transactions:** Resolves conflicts that arise when multiple transactions in different blocks in the Tangle conflict.

### Second Dimension

The second dimension provides different consensus flags or confidence levels about the irreversibility of objects:

1. **Pre-Acceptance flag:** An internal flag used to define `Acceptance`. This flag is raised when a supermajority of the online committee members causally references the block.
2. **Acceptance flag:** An internal flag used for generating slot commitment chains. This flag is raised when a given
   an online supermajority of pre-accepted validation blocks has acknowledged block or transaction.
3. **Pre-Confirmation flag:** An internal flag used to define `Confirmation`. This flag is raised when the block is
   causally referenced by a supermajority of the total committee, not just those currently online.
4. **Confirmation flag:** A flag exposed to the user, showing whether a given block or transaction has been acknowledged
   by a total supermajority of pre-confirmed validation blocks.
5. **Finalization flag:** A flag exposed to the user, indicating that a given slot commitment and all objects assigned
   to it have been acknowledged by a total supermajority of pre-confirmed validation blocks.

The flag hierarchy from Pre-Acceptance to Finalization is as follows:
Pre-Acceptance -> Acceptance -> Pre-Confirmation -> Confirmation -> Finalization.

These components and flags work together to ensure the integrity, security, and efficiency of the IOTA 2.0 consensus
protocol, allowing it to function effectively in various network conditions.
