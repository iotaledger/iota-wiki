# Consensus Flags

## Conditions for Consensus Flags

The following table summarizes the required conditions used by all nodes in the network to determine the status of blocks and transactions. Every condition represents a specific [validation block pattern](introduction.md#provide-consensus-flags) that occurs within the structure of the Tangle. Once a node detects a new pattern, the node marks the corresponding object with the respected flag.

| Confidence Level | Block $b$                                                                                                                   | Conflicting Transaction $b.Tx$                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Pre-Acceptance   | [Online supermajority of blocks approving block $b$](#pre-acceptance-flag)                                                  | -                                                                                                                      |
| Acceptance       | [Online supermajority of pre-accepted blocks approving block $b$](#acceptance-of-blocks-and-non-conflicting-transactions)   | [Online supermajority of pre-accepted blocks voting for transaction $b.Tx$\*](#acceptance-of-conflicting-transactions) |
| Pre-Confirmation | [Total supermajority of blocks approving block $b$](#pre-confirmation-flag)                                                 | -                                                                                                                      |
| Confirmation     | [Total supermajority of pre-confirmed blocks approving block $b$](#confirmation-of-blocks-and-non-conflicting-transactions) | [Transaction $b.Tx$ is accepted and block $b$ is confirmed](#confirmation-of-conflicting-transactions)                 |
| _Finalization_     | [Confirmed block containing the slot commitment\*\*](#finalization-flag)                                                    | [Confirmed block containing the slot commitment\*\*](#finalization-flag)                                               |

<sup>\*These blocks represent the latest opinion of the issuers.</sup> <br/>
<sup>\*\*Finalization is defined on the slot commitment level. A block or transaction is finalized if it is committed into the slot commitment and this commitment is finalized.</sup>

## Pre-Acceptance Flag

To pre-accept blocks, nodes make use of the weight of the [online committee](preliminaries.md#epoch-committee) $\mathcal{C}_{online}$. This preliminary status is defined for blocks only.

A block $b$ is _pre-accepted_ if there exists an [online supermajority of blocks](preliminaries.md#total-and-online-supermajority) $S$ so that every block in $S$ [approves](preliminaries.md#about-blocks-and-the-tangle) $b$.

### Example

In the following example, $7$ committee members have equal weight, and only $4$ are online. Different colors are used to distinguish distinct _block issuers_. Block $b$ is pre-accepted because an online supermajority of the committee approves this block. Note that the block is pre-accepted even though no total supermajority of blocks approve $b$.

![Pre-acceptance of a block](/img/learn/protocols/iota2.0/core-concepts/consensus/pre-acceptance-of-a-block.png 'Pre-acceptance of a block.')
**Image:** Pre-acceptance of a block.

## Pre-Confirmation Flag

To pre-confirm blocks, nodes make use of the weight of the [total committee](preliminaries.md#epoch-committee) $\mathcal{C}_{total}$. In principle, the same methodology as for the pre-acceptance flag is used for this flag. However, the weight of nodes approving a block (or voting for a transaction) is compared with the [total weight](preliminaries.md#epoch-committee) $W_{total}$. This preliminary flag is defined for blocks only.

A block $b$ is _pre-confirmed_ if there exists a [total supermajority of blocks](preliminaries.md#total-and-online-supermajority) $S$ such that every block in $S$ [approves](preliminaries.md#about-blocks-and-the-tangle) $b$. In this case, $S$ _pre-confirms_ $b$.

### Example

Block $b$ is pre-confirmed in the following example because a total _supermajority_ of nodes approves this block.

![Pre-confirmation of a block](/img/learn/protocols/iota2.0/core-concepts/consensus/pre-confirmation-of-a-block.png 'Pre-confirmation of a block.')
**Image:** Pre-confirmation of a block.

## Acceptance Flag

To define acceptance for blocks and transactions, nodes use the weight of the online committee $\mathcal{C}_{online}$.

Once a block or transaction is accepted, it stays accepted in the perception of a node unless the node [switches its slot commitment chain](chain-switching-rule.md). In other words, accepted blocks and transactions issued in a slot become committable, i.e., they are used to generate the [commitment](preliminaries.md#slot-commitment-chain) for the slot.

### Acceptance of Blocks and Non-Conflicting Transactions

A block $b$ is accepted if there is an [online supermajority](preliminaries.md#total-and-online-supermajority) of [pre-accepted](#pre-acceptance-flag) blocks approving $b$. If the transaction included in the block is non-conflicting, it also becomes accepted.

#### Example

In the following example, the online committee consists of $4$ nodes with equal weight. The block $b$ is accepted since $3$ pre-accepted blocks are approving this block.

![Acceptance of a block](/img/learn/protocols/iota2.0/core-concepts/consensus/acceptance-of-a-block.png 'Acceptance of a block.')
**Image:** Acceptance of a block.

### Acceptance of Conflicting Transactions

A conflicting transaction $tx$ is accepted if there exists an [online supermajority](preliminaries.md#total-and-online-supermajority) of [pre-accepted](#pre-acceptance-flag) blocks which [vote](preliminaries.md#reality-based-utxo-ledger) for $tx$.

:::warning Removed Transactions

Any transaction that conflicts with an accepted transaction becomes [rejected](preliminaries.md#reality-based-utxo-ledger) and gets removed from the reality-based ledger.

:::

#### Example:

In the following example, the transaction $tx$ is accepted since an online _supermajority_ of pre-accepted blocks vote for $tx$.

Note that the blue node initially voted for transaction $tx'$ because it was delivered before $tx$. However, the blue node changes its stance in the following validation block, as it has received and processed both validation blocks that voted for $tx$. According to the blue node's local perception, $tx$ now receives support from the majority of the network. This means that the [preferred reality](relevant-algorithms.md#algorithm-to-compute-the-preferred-reality) of the blue node now contains $tx$, and the [branch](preliminaries.md#reality-based-utxo-ledger) of the next validation block is aligned with the preferred reality.

![Acceptance of a conflicting transaction](/img/learn/protocols/iota2.0/core-concepts/consensus/acceptance-of-conflicting-transactions.png 'Acceptance of a conflicting transaction.')
**Image:** Acceptance of a conflicting transaction.

## Confirmation Flag

### Confirmation of Blocks and Non-Conflicting Transactions

A block $b$ is confirmed if there is a [total supermajority](preliminaries.md#total-and-online-supermajority) of [pre-confirmed](#pre-confirmation-flag) blocks approving $b$. In addition, these pre-confirmed blocks must be issued within `optsConfirmationRatificationThreshold=2` slots after the slot at which $b$ is issued. If the transaction in the block is non-conflicting, it is also confirmed.

:::note

The parameter `optsConfirmationRatificationThreshold` is set to a low value to guarantee the irreversibility of the _confirmation_ flag and the [finalization flag](#finalization-flag), which utilizes confirmation. The safety property is achieved because honest nodes do not [switch their adopted _slot_ commitment chain](chain-switching-rule.md) until their current slot concludes. This means that the decision in the voting process is achieved in a short period while a total supermajority of nodes stays on the same slot commitment chain.

:::

#### Example

In the following example, the block $b$ is confirmed as a total supermajority of pre-confirmed blocks approve $b$.

![Confirmation of a block](/img/learn/protocols/iota2.0/core-concepts/consensus/confirmation-of-a-block.png 'Confirmation of a block.')
**Image:** Confirmation of a block.

### Confirmation of Conflicting Transactions

A conflicting transaction $tx$ is confirmed if $tx$ is [accepted](#acceptance-of-conflicting-transactions) and one of the attachments (blocks containing $tx$) is [confirmed](#confirmation-of-blocks-and-non-conflicting-transactions).

#### Example

In the following example, $tx$ is confirmed as it first was accepted, and then the block containing $tx$ gets confirmed.

![Confirmation of a conflicting transaction](/img/learn/protocols/iota2.0/core-concepts/consensus/confirmation-of-conflicting-transactions.png 'Confirmation of a conflicting transaction.')
**Image:** Confirmation of a conflicting transaction.

## Finalization Flag

Finalization in the IOTA 2.0 consensus protocol works on the slot commitment level. This means that to finalize a block (a transaction), which is issued at a slot $s$, two conditions should hold:

1. The block or transaction is committed to slot commitment $C_s$ of slot $s$;
2. The commitment $C_s$ for slot $s$ is finalized.

This means finalization of the commitment $C_s$ implies that all blocks and transactions committed into $C_s$ and all the previous commitments in the [slot commitment chain](introduction.md#slot-commitment-chains) that ends at $C_s$ are finalized as well.

A slot commitment $C$ is finalized if a block contains the commitment $C$, and this block gets [confirmed](#confirmation-of-blocks-and-non-conflicting-transactions).

### Example

In the following example, slot commitment $C_1$ is finalized, thanks to the [confirmation](#confirmation-flag) of the block containing $C_1$. Consequently, all blocks and transactions committed into $C_1$, are finalized.

![Finalization of a slot commitment](/img/learn/protocols/iota2.0/core-concepts/consensus/finalitzation-of-a-slot-commitment.png 'Finalization of a slot commitment.')
**Image:** Finalization of a slot commitment.
