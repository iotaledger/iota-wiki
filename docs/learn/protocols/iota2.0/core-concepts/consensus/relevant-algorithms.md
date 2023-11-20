# Relevant Algorithms

## Algorithm to Compute a Block’s Branch

This section provides an algorithm to compute the [branch](preliminaries.md#reality-based-utxo-ledger) for a given block $b$.

In the following, the blocks from $b.References$ are considered. There are [three types of references](preliminaries.md#block-references) in IOTA 2.0, which are called strong, weak, and shallow like.

Let $s_1,\ldots,s_{n_s}$ denote the strong parents of block $b$. Let $w_1,\ldots,w_{n_w}$ denote the weak parents of $b$, where each $w_i$ contains transaction $w_i.Tx$. Let $l_1,\ldots,l_{n_l}$ denote the shallow like parents of $b$, where $l_i$ contains transaction $l_i.Tx$.

You can define the conflicts that come from the branches of the strong parents as:

$$
addStrongBranch \gets \bigcup\limits_{i=1}^{n_s}Branch(s_i).
$$

Similarly, you can define the sets of conflicts that come from the weak and shallow like parents. Note that in these operations, the [branches of the corresponding payloads (transactions)](preliminaries.md#reality-based-utxo-ledger) are used:

$$
addWeakBranch \gets \bigcup\limits_{i=1}^{n_w}Branch(w_i.Tx), \\
addLikeBranch \gets \bigcup\limits_{i=1}^{n_w}Branch(l_i.Tx). \\
$$

Shallow like references allow for the removal of conflicts from the aggregation of branches that do not belong to the preferred reality:

$$
removeConflicts  \gets ConflictWith(addLikeBranch),
$$

The function $ConflictWith(S)$ returns the set of all conflicts conflicting with at least one element from $S$. Finally, you can define the branch of the block $b$ in two steps. First:

$$
Branch(b)\gets \left(addStrongBranch \cup addWeakBranch \cup addLikeBranch\right) \setminus removeConflicts.
$$

Second, add the branch of the payload of $b$ to the result, i.e. $Branch(b)\gets Branch(b)\cup Branch(b.Tx)$.

:::note

The set $Branch(b)$ is subjective for a node that computes the branch. This is because some new conflicts might appear, or some existing conflicts might be resolved in the perception of this node.

:::

## Algorithm to Compute the Preferred Reality

There could be many realities in the [reality-based UTXO ledger](preliminaries.md#reality-based-utxo-ledger). However, a unique preferred reality for a node identifies all _conflicting transactions_ supported by the node. To find the preferred reality, the node can proceed with the following steps:

1. Calculate the _approval weight_ for each [unaccepted](consensus-flags.md#acceptance-flag) [conflict](preliminaries.md#reality-based-utxo-ledger). The _approval weight_ is determined as the combined weight of the online committee members who have voted in favor of this particular conflict and have not altered their stance in favor of a different conflicting transaction in any subsequent block.
2. Set $C$ to be the set of all conflicts and $R$ to be the empty set (which will eventually be constructed as a reality).
3. Find the conflict with the largest _approval weight_. In the case of many conflicts of equal weight, find the conflict with the largest hash of the conflict id. Include this transaction to $R$.
4. Remove all transactions that are conflicting with the selected transaction from $C$.
5. If $C$ is non-empty, proceed with step 3. Otherwise, output $R$.

## Additional Literature

- Sebastian Müller, Andreas Penzkofer, Nikita Polyanskii, Jonas Theis, William Sanders, and Hans Moog. ["Tangle 2.0 Leaderless _Nakamoto Consensus_ on the Heaviest DAG."](https://ieeexplore.ieee.org/iel7/6287639/6514899/09907014.pdf) IEEE Access 10 (2022): 105807-105842.
- Sebastian Müller, Andreas Penzkofer, Nikita Polyanskii, Jonas Theis, William Sanders, and Hans Moog. ["Reality-based UTXO ledger."](https://arxiv.org/pdf/2205.01345) ACM DLT 2.3 (2023): 1-33.
