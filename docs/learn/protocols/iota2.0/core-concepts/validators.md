# Validators, Their Selection and Rotation

Validators are special _nodes_ that issue _validation blocks_ to enable the entire network to agree on the ledger's state and the set of blocks in the _Tangle_. Validators directly contribute to the progress of the ledger and its security, and in turn, they are rewarded with Mana. The primary [responsibilities of validators](#responsibilities-and-actions-of-validators) include determining the inclusion of blocks in the _Tangle_, validating transactions, resolving double spends, and finalizing _slot_ commitments.

IOTA 2.0 uses Delegated Proof-of-Stake (DPoS) to determine which validators secure the network. For each _epoch_, a committee selection procedure determines a subset of all available validators to carry out the _consensus_ protocol during the epoch. The validators included in the subset are referred to as the committee members for the epoch.

## The Role of Validators and Committees

Validators and committees bring several important properties to the IOTA 2.0 protocol:

### Security

Validators and committees prevent double spending and malicious manipulation of the consensus. Both _validator_ and non-validator nodes accept blocks and transactions approved by the committee and follow the _slot commitment chain_ adopted by a majority of the committee.

### Ledger Progress

The ledger needs to be not only secure but also live, i.e., transactions issued by honest participants must update the ledger in a timely manner. One of the main responsibilities of epoch committees is to approve blocks with transactions promptly, ensuring that the ledger progresses efficiently.

### Efficient Consensus

The bounded size of a committee reduces the number of blocks required to reach an agreement in the network. Since the outcome of the IOTA 2.0 [consensus protocol](consensus/introduction.md) is solely based on the validation blocks, this allows for fast _confirmation_ times and reasonable communication complexity.

### Decentralized Democracy

There is no minimum stake requirement to become a validator in IOTA 2.0, allowing for easy participation by many nodes. In addition, users (more precisely, [accounts](mana.md#accounts)) can also participate implicitly by delegating their stake to a trusted validator, increasing their chance of being elected to the committee. This promotes a more democratic and inclusive validation process.

## Validator Registration and Committee Selection Process

To be included in the committee of an epoch $e$ in IOTA 2.0, a node must go through three steps:

1. [Registration](#registration).
2. [Activity](#activity).
3. [Selection](#selection-and-voting-weight).

The timeline of this process is depicted below (the actual duration of each period is not accurately depicted; instead, it depends on the value of the corresponding protocol parameters):

![Timeline](/img/learn/protocols/iota2.0/core-concepts/validators/timeline.png 'An example of the timeline for the committee selection process.')
**Image:** An example of the timeline for the committee selection process.

### Registration

To register as a validator for epoch $e$, an actor has to issue a block with a transaction that mutates an account to add a corresponding _staking_ feature. Both block and transaction have to be issued before `epochStart-epochSetupDuration-activityDuration`, where `epochStart` is the beginning of epoch $e$. The registration must provide the following information:

- **Account ID**: A human-readable identifier of the actor.
- **Profit Margin**: A fixed fraction of combined validator’s and delegators’ rewards that intends to be retained by the actor.
- **Fixed Cost**: A fixed amount deducted to cover the validator’s operating costs.
- **Locked Funds (stake)**: A user-chosen amount of funds that will be locked.
- **Unbonding Time**: A timestamp until the locked funds cannot be moved.

The registration is only considered successful when the registration block and the mutating transaction get accepted (i.e., approved by more than $2/3$ of the current online committee) and committed to the respective slot commitment. You can set the unbonding time to "unlimited" (or a reasonably large timestamp), so you only need to register once.

### Activity

In the _activity period_, defined as `[epochStart-epochSetupDuration-activityDuration, epochStart-epochSetupDuration)`, an actor has to have at least one accepted block. This block can be of any type, e.g., it could be a validation block. All actors who have an accepted block within the activity period are called $e$-`preActive`. Note that this step needs to be done before every epoch if a validator wants to participate in the committee.

### Selection and Voting Weight

The stake of each validator is the sum of the locked funds and the delegated stake from other nodes. Let $S_i(e)=L_i(e)+D_i(e)$ denote the pool's stake of node $i$ for epoch $e$, where $L_i(e)$ is the token value locked by node $i$ and $D_i(e)$ is the token value delegated to node $i$. The value $S_i(e)$ is fixed at the slot that ends at `epochStart-epochSetupDuration`. The stake vector of all $e$-preActive validators is considered, i.e. $\mathbf{S}(e)=(S_j(e))|_{j \ \text{is }e\text{-preActive}}$.

Then, the next committee is formed by taking `committeeTotalSeats` validators who have the largest stake in $\mathbf{S}(e)$. When deciding between equal stakeholders, ties are broken deterministically by using a hash function. The voting weight of all selected committee members is equal to $1$.

The selected committee will become the actual committee for epoch $e$ only if the slot that ends `epochStart-epochSetupDuration` (slot $s$ in the image) is finalized during epoch $e-1$. Otherwise, the committee of epoch $e-1$ becomes the committee of epoch $e$. The committee is naturally incentivized to finalize that slot since the [rewards](#rewards-and-incentives) will not be paid for the following epochs and the locked funds remain locked until _finalization_ happens.

Therefore, committees evolve across epochs due to changes in the _delegation_ of stake and the set of active validators.

:::note Upcoming Updates

The committee selection procedure will be changed in one of the next upgrades. Eventually, it will be based on a random lottery, where a stakeholder is selected for the committee with a probability that depends on the stake in the corresponding pool.

:::

## Responsibilities and Actions of Validators

The main responsibility of validators is to issue validation blocks. The congestion control component of the protocol ensures that the members of an epoch committee have a guaranteed _throughput_ allowance without burning any _Mana_ during the epoch. To provide high-quality service, validation blocks should satisfy certain properties:

### Regular Block Issuance

The timestamp difference between two consecutive validation blocks by a given committee member should be at most `frequencyValidationBlock` seconds. The [rewards](#rewards-and-incentives) for validators are distributed according to their performance factors, which are computed per slot and take into account the number of accepted blocks and the expected number of validation blocks per slot.

### Proper Referencing

Since only validation blocks are important for the _consensus_ for IOTA 2.0, epoch committee members use a [tip selection algorithm](consensus/tip-selection-algorithm.md) with an increased number of _parents_:

- Uniform _tip selection_ algorithm: committee members should select uniformly at random `blockTypeValidatorMaxParent` eligible blocks in their _tip pool_ as strong parents.

### Correct Voting

The opinion that a validation block expresses through different [references](consensus/preliminaries.md#block-references) should be aligned with the [preferred reality](consensus/preliminaries.md#reality) of the block issuer. For instance, the block should not represent a vote for two transactions that are conflicting with each other. In the latter case, the vote of the issuer is not counted in the consensus protocol.

### Regular Committing to Slots

Committee members should commit to a slot once the slot becomes committable. This ensures that the [slot commitment chain](consensus/preliminaries.md#slot-commitment-chain) is consistently updated and [finalization](consensus/consensus-flags.md#finalization-flag) functions properly.

## Rewards and Incentives

Well-performing validators are eligible for Mana rewards. Let $R(s)$ denote the target reward for a slot $s$ in epoch $e$. The rewards $R_i(s)$ to an epoch-$e$ committee member $i$ for slot $s$ are calculated as follows

$$
R_i(s) = \dfrac{R(s)}{1+\alpha}\left(\dfrac{L_i(e) + D_{i}(e)}{L(e) + D(e)}+\alpha \dfrac{L_i(e)}{L(e)}\right)\varphi_i,
$$

where:

- $\varphi_i\in [0,1]$ is the "performance factor", which measures the quality of validator $i$'s services at slot $s$;
- $L_i(e)$ and $D_i(e)$ are the token value locked by committee member $i$ and delegated to committee member $i$ for epoch $e$;
- $L(e)$ and $D(e)$ are the token value locked by the whole committee and delegated to all committee members for epoch $e$;
- $\alpha>0$ is a global parameter specified by the protocol.

Since the parameter $\alpha>0$, the reward distribution privileges pools with a larger locked stake.

After epoch $e$ ends, the delegators of the validator's pool can claim their Mana rewards. The validator may continue to stake or end its stake by going through an unbonding period of its locked tokens. After this period ends, the validator can unlock their tokens and claim their Mana rewards by creating a transaction that consumes the original output that was staked and includes the Mana on the output side of the transaction.

:::note

More details about Mana rewards and incentives can be found in [Tokenomics: Mana, Accounts, Staking and Delegation](mana.md)

:::

## Handling Misbehavior and Adversarial Validators

In general, the consensus protocol in IOTA 2.0 handles _adversarial validators_ with at most $1/3$ of the total voting weight, where adversarial actors can misbehave. Here are some examples of adversarial misbehavior and how the protocol can handle them:

### Censoring Valid Blocks

An adversarial committee member could censor a valid block by not referencing it. However, honest validators will still reference these valid blocks. That means that to successfully censor a valid block, the adversarial validator would need to avoid all blocks built on top of the censored block. Eventually, this will result in the adversarial node's blocks being isolated and orphaned.

### Stop Issuing Blocks

_Adversarial validators_ can stop issuing validation blocks. In this case, the _Tangle_ and the ledger will not stop growing since block and transaction acceptance requires only approval from the "online" committee. In addition, validators, who didn't issue validation blocks regularly, will get fewer rewards, if any.

### Manipulation With Slot Commitment Chains

#### Many competing chains

It is easy for the adversary to create many competing slot commitment chains. Recall that by the consensus protocol, honest nodes prefer the heaviest chain with the most recent finalized commitment. Honest nodes will simply ignore blocks with unfamiliar commitments lacking sufficient support.

#### Incorrect extension of the chain

Suppose the adversary produces a slot commitment prematurely (e.g., not all _conflicting transactions_ within the slot are resolved). In that case, the honest committee members will keep the corresponding block in the waiting _tip_ pool to verify its accuracy once the respected slot becomes committable. Blocks with incorrect slot commitments will ultimately be discarded from the _tip_ pool.
