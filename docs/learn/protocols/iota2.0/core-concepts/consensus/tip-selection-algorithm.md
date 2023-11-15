# Tip Selection Algorithm

Selecting blocks to be referenced by newly issued blocks is a critical component of the consensus protocol.

Suppose a node adopts the [slot commitment chain](introduction.md#slot-commitment-chains) $ch=(C_1,\ldots,C_s)$ and maintains the _tip pool_ $\mathcal{T}_{ch}$, which consists of [eligible tips](#eligible-tips). It is impossible to reference all existing blocks in the tip pool as it would lead to a large block size. Instead, the number of references for each reference type is limited by `blockMaxParent` for normal blocks and by `blockTypeValidatorMaxParent` for _validation blocks_.

## Tip Selection Rules

When a node issues a new block (e.g., committee members must issue their blocks every `frequencyValidationBlock` seconds), it follows these rules to select the list of references $L$ to be included in the new block:

### 1. Strong Parents

The node selects uniformly at random at most `blockMaxParent` (or `blockTypeValidatorMaxParent` for validation blocks) unique tips from the tip pool $\mathcal{T}_{ch}$ as strong parents.

### 2. Shallow-like References

After adding a new strong parent to the list of references $L$, the node attempts to select shallow-like references to align the current [branch of the block](relevant-algorithms.md#algorithm-to-compute-a-blocks-branch) with the [preferred reality](relevant-algorithms.md#algorithm-to-compute-the-preferred-reality).

If `blockMaxParent` (or `blockTypeValidatorMaxParent`) shallow-like references are not sufficient to align the branch, the strong parent is removed from the list of references $L$ and moved to the weak tip pool $\mathcal{W}$, which is initialized as an empty set before running the _tip selection_ algorithm.

### 3. Weak References

The node selects uniformly at random (at most) `blockMaxParent` (or `blockTypeValidatorMaxParent`) unique tips from the weak tip pool $\mathcal{W}$.

Before adding a weak tip to the list of references, the node checks if the transaction included in the weak tip conflicts with the [preferred reality](relevant-algorithms.md#algorithm-to-compute-the-preferred-reality). If the transaction is not conflicting, the weak tip is added to the list of references.

## Eligible Tips

To guarantee consistency for generated slot commitments, nodes need to only keep tips likely to be approved and accepted by the committee in the tip pool. For instance, a tip is bad if it approves an unaccepted block that is issued in an already committed slot.

### Accepted Tangle Time (ATT)

A node's accepted Tangle time (ATT) is the largest timestamp across all accepted blocks (in the local perception of the node).

### Eligible Tips

A block $b$ is called an eligible tip for a node that adopts slot commitment chain $ch=(C_1,\ldots,C_s)$ if the following conditions hold:

- the block $b$ is not yet referenced.
- the slot commitment included to $b$ is consistent with $ch$, i.e., it is equal to $C_i$ for some $i$.
- Any [unaccepted](consensus-flags.md#acceptance-flag) block $u$ in the [past cone](preliminaries.md#past-cone-of-a-block) of $b$ is scheduled to gossip and the difference between ATT and the timestamp $u.IssuingTime$ is at most `livenessThreshold`. The value `livenessThreshold` is set to `3*slotDurationSeconds`.
