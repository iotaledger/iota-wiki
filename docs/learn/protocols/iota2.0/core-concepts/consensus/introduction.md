# Consensus on a DAG

The consensus protocol is necessary to achieve agreement among the nodes of the network on the set of blocks in the [Tangle](preliminaries.md#about-blocks-and-the-tangle) and the set of transactions in the [ledger](preliminaries.md#reality-based-utxo-ledger).

Each node in the network maintains its local copy of the Tangle and runs the consensus protocol through logical interpretation of the directed acyclic graph (_DAG_). More precisely, the Tangle includes blocks that carry payloads, serving as transaction proposals intended to update the ledger. Block references serve as votes from the _block issuers_, expressing their support for the referenced blocks and transactions. IOTA 2.0 uses bounded-size committees whose members regularly issue _validation blocks_ to reduce communication overhead and minimize _confirmation_ time. To evaluate _consensus flags_ for blocks and transactions, nodes in the network read votes from the validation blocks and find specific [validation block patterns](#provide-consensus-flags) in the Tangle.

## Required Components for Consensus

The following modules are necessary to achieve agreement using the IOTA 2.0 consensus protocol:

### Approval Weight Module

The _approval weight_ module is responsible for gathering votes from the validation blocks, finding appropriate [validation block patterns](#provide-consensus-flags) in the Tangle, and evaluating the voting results to determine [consensus flags](consensus-flags.md) for blocks and transactions.

:::info Consensus Flags

This article does not specify which algorithms are used to find appropriate validation block patterns; it only focuses on describing the [consensus flags](consensus-flags.md) used by the protocol.

:::

### Tip Selection Algorithm

The tip selection algorithm guides the voting and agreement process, in which the committee and other nodes partake. Consensus is achieved by logically interpreting the locally maintained Tangle, specifically its blocks and the references between them.

All nodes collectively build the Tangle by attaching their blocks to a bounded number of randomly selected [eligible tips](tip-selection-algorithm.md#eligible-tips). Consensus on _conflicting transactions_ is achieved without total ordering in a leaderless way. Committee members cast their votes by regularly issuing validation blocks, encoding their opinions about conflicting payloads by incorporating suitable [block references](preliminaries.md#block-references). The default number of references is increased for validation blocks to improve the time to achieve consensus for blocks and transactions.

### Slot Commitment Chains

Slot commitment chains are one of the core data structures in the protocol. A slot commitment is a hash digest of the accepted blocks and transactions issued during a given slot. It is linked to the commitment of the previous _slot_, creating a chain that extends back to the genesis block.

Under good network conditions, nodes collectively produce the same slot commitments. Under network partitioning, there could be a divergence in the perception of the suffix of the slot commitment chain. However, the finalized part of the slot commitment chain is safe under any network conditions. When the network converges, all honest nodes eventually switch to the heaviest slot commitment chain with the latest [finalized slot commitment](#finalization), thanks to the **[chain switching rule](chain-switching-rule.md)**.

## The Consensus Protocol’s Two Dimensions

The consensus protocol can be divided in two separate dimensions charged with different responsibilities:

1. [Agreement tasks for blocks and transactions](#agreement-tasks-for-blocks-and-transactions).
2. [Provide Consensus Flags](#provide-consensus-flags).

### Agreement Tasks for Blocks and Transactions

The first dimension consists of the agreement tasks for blocks and transactions. It has two main tasks:

#### Broadcast blocks reliably

This task ensures the delivery of newly created blocks to all nodes in the network. Reliable broadcast guarantees that if an honest node includes a block in its locally maintained copy of the Tangle, all other honest nodes will eventually receive and deliver that block, including it in their locally maintained version.

#### Agreement on conflicting transactions

This task focuses on resolving conflicts that arise when multiple transactions in different blocks in the Tangle conflict with each other, attempting to consume the same output. By fulfilling this task, all honest nodes can reach a consensus on which conflicting transaction appears in the ledger, ensuring a consistent view across the network.

### Provide Consensus Flags

The second dimension provides different _consensus flags_ or confidence levels about the irreversibility of blocks and transactions.

When they receive a new validation block, nodes examine the Tangle to identify distinct validation block patterns, and attribute specific flags to blocks in the Tangle or transactions contained in the blocks.

A pattern corresponds to a causally ordered set of validation blocks. For instance, if a block is [approved](preliminaries.md#about-blocks-and-the-tangle) by a _supermajority_ of the committee (validators holding more than $2/3$ of the total _voting power_), then the block gets the [pre-confirmed flag](#pre-confirmation). In this context, the validation blocks from these validators constitute a validation block pattern necessary for pre-confirmation.

The IOTA 2.0 consensus protocol is endowed with _dynamic availability_. This attribute ensures continuous operation even when some _validator committee_ members may be offline or the network experiences partitions. During such instances, the online validator committee within each partition maintains the process of updating their available ledger, which is constructed from the transactions that have been [accepted](#acceptance).

Once the network recovers from its divided state and a [supermajority](preliminaries.md#total-and-online-supermajority) of the committee is back online, the transaction _finalization_ process recommences. The consensus flags differentiate between degrees of irreversibility. This aspect balances safety and liveness, providing different trade-offs to manage various network conditions effectively.

:::info

You can learn more about a formal description of consensus protocols supporting both safety and liveness in the [Ebb and Flow Protocols: A Resolution of the Availability-Finality Dilemma  paper](https://arxiv.org/pdf/2009.04987).

:::

The consensus flags in the IOTA 2.0 consensus protocol are outlined as follows:

#### Pre-Acceptance

The [Pre-Acceptance flag](consensus-flags.md#pre-acceptance-flag) is an internal flag used to define Acceptance. This flag is raised for a block when the block is causally referenced by a [supermajority of the online committee members](preliminaries.md#total-and-online-supermajority). It means the block is deemed valid by a significant portion of the active validators in the network, hence suggesting initial agreement on the block's validity.

#### Acceptance

The [Acceptance flag](consensus-flags.md#acceptance-flag) is an internal flag that is used to generate [slot commitment chains](#slot-commitment-chains), i.e., only accepted blocks and transactions are committed.

For a block, this flag shows whether the block is acknowledged by an [online supermajority](preliminaries.md#total-and-online-supermajority) of pre-accepted validation blocks.

For a transaction, the flag indicates whether the transaction has received votes from an [online supermajority](preliminaries.md#total-and-online-supermajority) of pre-accepted blocks. This flag prioritizes liveness and quickly adjusts its response to varying network conditions.

#### Pre-Confirmation

The [Pre-Confirmation flag](consensus-flags.md#pre-confirmation-flag) is an internal flag used to define Confirmation. This flag is raised for a block when the block is causally referenced by a [supermajority of the total committee](preliminaries.md#total-and-online-supermajority), not just those currently online. It signifies a higher approval level than the _pre-acceptance flag_, but it is raised slowly under bad network conditions.

#### Confirmation

The [Confirmation flag](consensus-flags.md#confirmation-flag) is a flag that is exposed to the user in the wallet. For a block, it shows whether the block has been acknowledged by a [total supermajority](preliminaries.md#total-and-online-supermajority) of pre-confirmed validation blocks. This flag is raised for a transaction when it is accepted, and one of its attachments (blocks containing this transaction) gets confirmed. The _confirmation_ flag favors safety and can be slow under bad network conditions.

#### Finalization

The [Finalization flag](consensus-flags.md#finalization-flag) is a flag that is exposed to the user in the wallet. This block or transaction flag relies on finalizing the slot commitment that commits to the block or transaction. The latter means that a block containing a given [slot commitment](preliminaries.md#slot-commitment-chain) (and all objects assigned to it) gets [confirmed](consensus-flags.md#confirmation-flag). This flag is safe under any network conditions.

The flag hierarchy from Pre-Acceptance to Finalization is summarized in the following diagram:

![Flag hierarchy](/img/learn/protocols/iota2.0/core-concepts/consensus/flag-hierarchy.png 'Flag heirerchy.')
**Image:** Flag hierarchy from pre-acceptance to finalization.
