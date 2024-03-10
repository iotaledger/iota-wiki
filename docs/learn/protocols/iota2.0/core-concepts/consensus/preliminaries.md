# Preliminaries

Before diving deeper into the consensus algorithm's inner workings, you should familiarize yourself with the following terms.

## Epochs and Slots

The IOTA protocol divides time into non-overlapping slots of fixed duration `slotDurationSeconds`, set to `10` seconds. Slots are indexed with the slot index $s = 0, 1, 2, 3,...$. The _slot_ indexed with $0$ is a unique slot that commences at negative infinity and concludes at the genesis timestamp `genesisUnixTime`. Every `2^slotsPerEpochExponent` sequential slots are grouped into epochs, which are enumerated with the _epoch_ index $e = 0, 1, 2, 3,...$.

Using slots primarily aims to generate [commitments](#slot-commitment-chain) for short time intervals. Generating commitments in a timely manner allows nodes to keep in Random Access Memory (RAM) only data of bounded size.

Slot commitments improve the convergence of the overall consensus and let nodes know whether they need to synchronize their views on the Tangle. In addition, slot commitments facilitate data locality: understanding where a block belongs makes tasks such as block lookups, eviction, and pruning more straightforward. Furthermore, [finalization](consensus-flags.md#finalization-flag) occurs on the slot commitment level.

The committee members are fixed within a given epoch, and their voting weights remain constant. However, at the epoch boundary, reconfiguration becomes possible, leading to potential changes in the composition of the committee and adjustments in their voting weights.

### Epoch Committee

For an _epoch_, a fixed subset of validators is responsible for achieving agreement about blocks and transactions issued during the epoch. This set has the size `committeeTotalSeats` (between `25` and `50`). The selected set of validators is called the epoch committee.

A committee member is expected to issue validation blocks every `frequencyValidationBlock` seconds (set to either `0.5` or `1`) and to follow the [tip selection algorithm](tip-selection-algorithm.md) for selecting tips to be referenced by the _validation blocks_.

#### Total committee

Denote the total committee for epoch $e$ as $\mathcal{C}_{total}(e)$. Denote the voting weight of a node $i$ at epoch $e$ as $W_i(e)$. Note that $W_i(e)>0$ if and only if $i$ is a committee member in epoch $e$, i.e., $i\in \mathcal{C}_{total}(e)$.

:::info 

In the first version of the protocol, all committee members have the same weight, specifically if $W_i(e)>0$, then $W_i(e)=1$. This will be changed in future updates of the protocol.

:::

The total committee is determined for [slot commitment chains](#slot-commitment-chain). Specifically, two nodes that adopt the same _slot commitment chain_ before an epoch $e$ starts perceive the same total committee for epoch $e$.

To support the _dynamic availability_ of the protocol and timely generate slot commitments, only actively participating committee members are considered when determining which blocks and transactions are [accepted](consensus-flags.md#acceptance-flag).

#### Online committee

At time instant $t$ at epoch $e$, a node perceives the online committee $\mathcal{C}_{online}(t)\subset \mathcal{C}_{total}(e)$, as a subset of the committee that consists of committee members who have issued at least one block with the timestamp within `(t-activityWindow, t]`.

:::info

The online committee is a subjective notion determined by each node locally based on its perception of the Tangle. The block in the above definition must commit to the [slot commitment chain](#slot-commitment-chain) a node adopts. The protocol parameter `activityWindow` is set to `10` seconds.

:::

#### Total weight

Denote the total weight of the total committee at _epoch_ $e$ as:

$$
W_{total}(e)=\sum_{i\in\mathcal{C}_{total}(e)}W_i(e)
$$

#### Online weight

Denote the online weight of the online committee at moment $t$ at epoch $e$ as:

$$
W_{online}(t)=\sum_{i\in\mathcal{C}_{online}(t)}W_i(e).
$$

:::note

$W_{total}(e)$ is constant for the whole epoch $e$, whereas $W_{online}(t)$ can be changed based on the perception of a node at the moment $t$.

In the following, the time instant index $t$ and epoch index $e$ are omitted in notation to simplify the discussion.

:::

## About Blocks and the Tangle

The basic unit _data structure_ in IOTA 2.0 is called a block. The collection of all blocks is called the Tangle. Since blocks contain references to previously issued blocks, the Tangle is a directed acyclic graph (_DAG_).

For the notation of this article, a block is denoted as $b$, and a specific content of the block is referred to using the following fields

| Name of the field    | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| $b.Tx$               | The payload of block $b$                                            |
| $b.SlotCommitmentID$ | The [slot commitment](#slot-commitment-chain) included to block $b$ |
| $b.IssuerID$         | The ID of the issuer of block $b$                                   |
| $b.References$       | The [references](#reference-types) to the previously issued blocks  |
| $b.IssuingTime$      | The timestamp of block $b$                                          |

**Table:** Fields of a block.

:::info Block Fields

Some fields in the block structure have been omitted to simply this article.

:::

### Supplementary Definitions

#### Block approves block

A block $b$ approves a block $c$ if there is a sequence of blocks $b_1=b,b_2,\ldots,b_t=c$ such that $b_i$ directly references $b_{i+1}$, i.e. $b_{i+1}\in b_i.References$.

#### Cones of a block

##### Past cone of a block

For block $b$, the set of blocks that $b$ approves is the past cone of $b$.

##### Future cone of a block

For block $b$, the set of blocks that approve $b$, is the future cone of $b$.

##### Example

In the following example, the _past cone_ of block $x$ is highlighted in red, encompassing all the blocks reachable from $x$ by following the directed edges. Similarly, the future cone is highlighted in blue.

![Future and past cones of a block](/img/learn/protocols/iota2.0/core-concepts/consensus/cones-of-a-block.png 'Future and past cones of a block.')
**Image:** Future and past cones of a block.

#### Block votes for conflicting transaction

A block $b$ and the issuer $b.IssuerID$ vote for a [conflicting transaction](#reality-based-utxo-ledger) $tx$ if the [branch of block](#reality-based-utxo-ledger) $b$ contains $tx$.

#### Block approves slot commitment

A block $b$ approves a slot commitment $C$ if the [slot commitment chain](#slot-commitment-chain) that ends with $b.SlotCommitmentID$ contains $C$. For instance, the block $b$ approves the slot commitment $C$ if $b$ contains $C$, i.e., $b.SlotCommitmentID = C$.

### Block References

Block references in IOTA 2.0 simultaneously serve two purposes:

1. Contributing to the construction of an immutable directed acyclic graph structure on the block set.
2. Encoding the issuer's perspective on which part of the Tangle is valid and which _conflicting transactions_ are supported by a majority of the network. This means that nodes perform voting directly on the Tangle by including appropriate references in their blocks.

Block references are crucial in the consensus protocol as they guide the [tip selection algorithm](tip-selection-algorithm.md#tip-selection-algorithm).

#### Reference Types

###### Strong

Nodes randomly select strong parents from their _tip pool_ and attach their newly issued blocks to these selected tips. The number of strong parents sets a tradeoff between [confirmation time](consensus-flags.md#confirmation-of-blocks-and-non-conflicting-transactions) and the block size. More strong parents lead to shorter confirmation times and larger block sizes. When [computing the branch](relevant-algorithms.md#algorithm-to-compute-a-blocks-branch) of a new block, the branches of strong parents are directly inherited by the branch of the new block.

###### Shallow Like

Shallow like references are essential for rectifying the preliminary [block's branch](relevant-algorithms.md#algorithm-to-compute-a-blocks-branch) constructed from the strong parents. They align the block's branch with the issuer's [preferred reality](relevant-algorithms.md#algorithm-to-compute-the-preferred-reality).

###### Weak

Weak references serve a different purpose. They come into play when the [branches of certain strong parents](relevant-algorithms.md#algorithm-to-compute-a-blocks-branch) cannot be aligned with a limited number of shallow like references. In such cases, strong parents are moved to the weak tip pool, and a bounded number are selected as weak parents. Weak references attempt to prevent orphaning blocks that may have voted for a large set of conflicts.

### Total and Online Supermajority

To formally define _consensus flags_, the notion of total and online supermajorities of blocks is introduced. A _supermajority_ of a subset of blocks means that the issuers of these blocks have more than $2/3$ of the total voting weight.

#### Total supermajority

A set of blocks $A$ is called a total supermajority of blocks if the relative weight of the issuers of blocks from $A$ is more than $2/3$ of the [total weight](#epoch-committee). In other words, let $IssuerIDs(A)=\{b.IssuerID: \ b\in A\}$, then

$$
\sum_{i\in IssuerIDs(A)}W_i > \frac{2}{3} W_{total}.
$$

#### Online supermajority

A set of blocks $A$ is called an online supermajority of blocks if the relative weight of issuers of blocks from $A$ is more than $2/3$ of the [online weight](#epoch-committee). In other words,

$$
\sum_{i\in IssuerIDs(A)}W_i > \frac{2}{3} W_{online}.
$$

### Slot Commitment Chain

Each block in IOTA 2.0 contains a commitment to the content of a certain slot in the past.
A slot commitment is a hash value that encapsulates all the crucial information about a slot (such as [accepted](consensus-flags.md#acceptance-flag) blocks and transactions, the index of the slot, etc.). A slot commitment is calculated by combining the following pieces of information through hashing:

#### 1. Protocol version

The field denoting the protocol version that will be increased after each protocol upgrade.

#### 2. Slot index

The index of a slot to which a slot content is committed. For a time instant `timeInstant`, the respected slot index is computed as `Floor((timeInstant - genesisUnixTime)/slotDurationSeconds) + 1`, where `genesisUnixTime` is the starting point of the timeline or the timestamp of the genesis block.

#### 3. Previous slot commitment

The slot commitment of the slot with the preceding slot index.

#### 4. Commitment of slot content

The hash root of a Merkle tree that contains all commitment elements at the end of this slot. For simplicity, one can think about this value as the hash of all accepted blocks and transactions issued within the slot.

#### 5. Cumulative weight

The total weight of validators that reference a specific commitment in the past and the _cumulative weight_ of the previous slot commitment.

#### 6. Reference mana cost

The reference _Mana_ cost (RMC) is calculated from the contents of the slot and the previous slot’s RMC.

:::note

A commitment is linked to the commitment of the previous slot. All commitments form a slot commitment tree, where the path between the tree root (the genesis) and any node in the tree determines a slot commitment chain. Nodes that adopt the same slot commitment consequently adopt the same slot commitment chain. So, they agree on the common prefix of the ledger and the Tangle up to the last slot of the chain.

:::

Each node maintains its slot commitment chain based on its understanding of the Tangle. The node tracks the [online committee](#epoch-committee), that adopted the same slot commitment chain as the node. Upon receiving validation blocks, the node identifies which blocks and transactions get [accepted](consensus-flags.md#acceptance-flag) by the online committee and flags them as accepted in turn. The accepted objects will then provide a basis for generating the commitment of slot content in the structure of a slot commitment.

The commitment for a slot that ends at the moment `slotEnd` is produced by the node at some moment in the period `[slotEnd+minCommittableSlotAge*slotDurationSeconds, slotEnd+maxCommittableSlotAge*slotDurationSeconds]`, where `minCommittableSlotAge` and `maxCommittableSlotAge` are specially designed protocol constants measured in slot units.

The actual moment depends on the [accepted Tangle time](tip-selection-algorithm.md#eligible-tips) of the node. More specifically, if one of the conditions holds:

- the [accepted Tangle time](tip-selection-algorithm.md#eligible-tips) is larger than `slotEnd+minCommittableSlotAge*slotDurationSeconds`;
- the current wall clock is at least `slotEnd+maxCommittableSlotAge*slotDurationSeconds`;

then the node generates the commitment of the required slot.

### Reality-based UTXO ledger

As _Chrysalis_ and [Stardust](../../../stardust/introduction.md), IOTA 2.0 uses the Unspent Transaction Output (UTXO) model for transactions. Its _parallel processing_ capability allows independent transactions to be added to the ledger in any order, thus enhancing its scalability potential.

However, the append-only nature of the UTXO ledger can compromise this benefit when _conflicting transactions_ arise. To address this issue, IOTA 2.0 uses an enhanced UTXO ledger model, called the [reality-based UTXO ledger](preliminaries.md#reality-based-utxo-ledger), that optimistically updates the ledger and maintains a record of the dependencies of possible conflicts.

A UTXO transaction should have a list of unique outputs called UTXOs. In addition, each transaction has a list of inputs, which are UTXOs of previous transactions. A transaction is said to spend its inputs.

#### Ledger DAG

The ledger _DAG_ is a DAG whose vertex set consists of all transactions. There is a directed edge between two transactions $tx$ and $ty$ if $tx$ spends the output of $ty$. The ledger DAG's root is the genesis with no outgoing edges.

#### Causal history of a transaction

The causal history of a given transaction $tx$ consists of all transactions that can be reached from the transaction $tx$ by traversing the ledger _DAG_ along the directed edges.

#### Conflict

A transaction $tx$ is a conflict if there is another transaction $ty$ such that $tx$ and $ty$ attempt to spend at least one identical input.

#### Conflicting transactions

Two transactions $tx$ and $ty$ are called conflicting if the causal history of $tx$ and the causal history of $ty$ contain some transaction $tx'$ and $ty'$ which spend at least one identical input.

#### Non-conflicting transaction

A transaction $tx$ is _non-conflicting_ if there is no transaction $ty$ such that $tx$ and $ty$ are conflicting.

#### Rejected transaction

A transaction $tx$ is rejected if there is a transaction $ty$, which is conflicting with $tx$ and has been [accepted](consensus-flags.md#acceptance-of-conflicting-transactions).

In other words, once a transaction gets [accepted](consensus-flags.md#acceptance-flag), all transactions conflicting with it get rejected. Rejected transactions are removed from the reality-based ledger.

### Branches

To understand the voting mechanism on the Tangle, it is essential to introduce the fundamental definition of branches.

#### Branch

A branch is a subset of conflicts $B$ if these two properties hold:

1. Set $B$ does not contain two conflicting transactions.
2. For any conflict $tx\in B$, all conflicts in the causal history of $tx$ are contained in $B$.

One prominent example of branches is defined using the causal history of transactions.

#### Branch of a transaction

The set of all conflicts in the causal history of a transaction $tx$ is called the branch of $tx$ and denoted as $Branch(tx)$.


#### Branch of a block

For a block $b$, there is the branch of $b$, which is encoded through the references. This branch is denoted as $Branch(b)$ and it can be computed using an [algorithm](relevant-algorithms.md#algorithm-to-compute-a-blocks-branch).

#### Vote

A block votes for a conflicting transaction $tx$ if the branch of the block contains $tx$. In such a case, the issuer of the block is also said to vote for $tx$.

The issuer of a block votes for (supports) all conflicts in the branch of that block. Nodes use this simple idea to agree on which conflicting transactions should be accepted and included in the ledger and which should be rejected.

To determine the conflicts supported by a node, you need to understand the concept of the preferred reality.

#### Reality

A maximal branch is called a reality. In other words, for a reality, there is no larger branch containing this reality.

There is an exponential number of realities in the number of conflicts. However, every node at any moment can find its unique preferred reality by following the [algorithm](relevant-algorithms.md#algorithm-to-compute-the-preferred-reality). This algorithm is practical as it has quadratic complexity in the number of conflicts.

The preferred reality represents the complete set of conflicts supported by a node. In principle, when choosing between two conflicting transactions, a node supports the one that has received more votes from the committee, i.e., validation blocks with more voting weight voted for that transaction.

In the actual implementation, the preferred reality is not fully computed at any moment. Instead, the concept of a preferred reality is implicitly used in the [tip selection algorithm](tip-selection-algorithm.md).

When issuing a new block, the node finds the preferred branch (an appropriate subset of the preferred reality), which conflicts can be referenced using [shallow like references](preliminaries.md#shallow-like), consequently aligning the branch of the new block with the preferred reality.

:::info Learn More

You can find more details about the reality-based UTXO ledger in the [Reality-based UTXO Ledger paper](https://arxiv.org/pdf/2205.01345).

:::
