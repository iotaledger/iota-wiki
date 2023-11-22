# Tokenomics: Mana, Accounts, Staking and Delegation

Mana is a scarce resource used to access the IOTA ledger and update its state through block creation. It is a spendable asset tracked in the _ledger state_, powering smart contracts, DeFi_applications, block creation, and various other services, and is linked to [accounts](#accounts), which allow you to [stake or delegate](#staking-and-delegation-1) IOTA to receive [Mana rewards](#mana-rewards).

Our _tokenomics_ model revolves around two key assets: IOTA tokens and [Mana](#mana). Both of these assets will be accessible through your [account](#accounts), from where you’ll be able to either [stake](#staking-and-delegation) your IOTA tokens and help validate the network or [delegate](#staking-and-delegation-1) them to a validator. This article dives into these elements.

## Accounts

An account is an extension of the Alias Output concept defined in [TIP-18](https://github.com/iotaledger/tips/blob/main/tips/TIP-0018/tip-0018.md). Accounts will be the central component of the IOTA ledger. In IOTA 2.0, accounts will be used for:

- holding _Mana_ to issue blocks,
- [staking](#staking-and-delegation-1) tokens to become a validator,
- claiming rewards from participating in staking.

### Digital Autonomy

In the context of IOTA 2.0, accounts are central to the goal of _digital autonomy_. Accounts accumulate _Mana_ from their IOTA tokens and burn it to issue blocks. This means account owners can be block-issuers themselves rather than depend on another actor, exercising their digital autonomy in line with the [Design Principle of Accessibility](../introduction-to-digital-autonomy.md#principle-1-accessibility).

### Staking and Delegation

Accounts are also used for staking and _delegation_. Users can stake tokens from their accounts to become a _validator_ in the protocol or delegate tokens to another validator, increasing the validator's weight. Staking and delegation have low entry barriers, as anyone can participate in the validation, and no minimum stake is required. Stakers need to lock their tokens to become validators, increasing the commitment to the network's security. With _liquid delegation_, you can spend funds anytime without a waiting period. IOTA 2.0 staking and delegation thus support the network's security while keeping the entry barriers as low as possible.

:::note TIP 18

The functionalities introduced above depend on the concept of Features, as defined in [TIP-18](https://github.com/iotaledger/tips/blob/main/tips/TIP-0018/tip-0018.md). This means that if you want to issue blocks, you must add a _Block Issuer Feature_ to their account, whereas someone wishing to stake must add a _Staking Feature_ to it.

:::

### Digital Identity

Finally, the accounts' design makes it possible to act as a digital identity as defined by the [W3C DID standard](https://www.w3.org/TR/did-core/) and the specific [IOTA DID method](https://wiki.iota.org/identity.rs/specs/did/iota_did_method_spec/) in the future. Following the principles of self-sovereign identity, this digital identity is accessible, transparent, persistent, self-controlled, portable, and interoperable, contributing to digital autonomy.

## Mana

Mana is the resource required to access the IOTA ledger and update its state by creating blocks. As a spendable resource that is tracked in the ledger state, Mana can also be used to power smart contracts, DeFi_applications, and other services.

You can obtain Mana in different ways:

- generate it by holding IOTA tokens,
- purchase it from other Mana holders,
- earn it for participating in _consensus_ as a delegator or validator.

Contrary to how ledger writing rights are managed in traditional blockchains, block creation in IOTA is not reserved for a limited group of miners or validators. Any IOTA account holder can add a Block _Issuer Feature_ to the account and create blocks by consuming Mana. Furthermore, users do not need to pay this Mana to other actors to create blocks on their behalf, as in fee-based systems. Still, they can use Mana in the protocol to take advantage of functionality without intermediaries.

Specifically, Mana is burned each time a block is created, meaning it is subtracted from the Mana balance of the block creator. The network's congestion levels determine the amount required to be burned, and nodes dynamically regulate this amount as the blocks are received (see the [Communication Layer article](communication-layer.md)).

![A generic transaction payload](/img/learn/protocols/iota2.0/core-concepts/data-flow/payload.png)

**Image 1**: A transaction payload.

To understand how Mana is dealt with in more detail, consider the figure above, which illustrates a generic _transaction payload_. Note that the figure is merely an illustration and does not reflect the exact content of a transaction as implemented in IOTA. Each consumed input yields Mana based on its IOTA value and the time it has been held. In the example above, the total amount of IOTA tokens in the inputs is 6, which is the same amount of IOTA tokens in the outputs. Analogously, the amount of Mana stored in the inputs is 3, and the potential Mana attached to the inputs (not shown in the image since it’s not explicitly part of the transaction but of the inputs themselves) is 2. This results in a total of 5 Mana to be allotted or stored in new outputs.

The newly minted Mana can be allocated in two ways:

- By default, Mana will be stored on the unspent outputs.
- Mana can also be allotted to a chosen account as [Block Issuance Credits (BIC)](#block-issuance-credits-bic) (see the [Communication Layer article](communication-layer.md)). Note that this is not the default behavior of the wallet, but it is technically possible to do so (for example, one might want to allot extra _BIC_ to issue data blocks in the future).

If you store mana in unspent outputs, you can transfer it just like IOTA tokens, and we retain the ability to process updates in parallel efficiently. On the other hand, _BIC_ are not transferable and can only be used to burn as part of the block creation process. By default, in our wallet implementation, the surplus of Mana left after creating a new block is stored in the unspent outputs. However, by the protocol design, if the surplus of Mana isn’t allotted or stored, it will be lost.

In the figure above, the number of IOTA tokens in the inputs equals the number of IOTA tokens in the outputs; however, the amount of Mana in the inputs is smaller than the Mana in the outputs plus the Mana being allotted (see the list of Potential Mana properties under "Potential Mana" below). In this case, this happened because the transaction inputs generated Mana. In the next section, we explain how this Mana generation occurs.

### Potential Mana

UTXOs _holding IOTA tokens_ generate Mana. This Mana is generated as a function of the value of the IOTA tokens and the time held (note that _decay_ is applied to prevent an excessive accumulation over time). You can think of _UTXO_s as having **potential Mana** attached to them because they will generate stored Mana or _BIC_ whenever they are spent. Potential Mana is not explicitly stored anywhere but can be easily calculated from the ledger (specifically, from the set of unspent outputs).

The Mana generated when IOTA tokens are spent are either allotted to an account or stored on an output. **If the potential Mana attached to an output is neither stored nor allotted when the output is consumed, it will be lost.**

In summary, **potential Mana** has the following properties:

- It is not recorded anywhere explicitly, but it can be calculated from IOTA UTXOs on the ledger and the time they have been held.
- It is subject to decay.
- It is consumed when the corresponding IOTA UTXO is consumed.
- It is transferable to any account as [BIC](#block-issuance-credits-bic), or stored in outputs as [stored Mana](#stored-mana-transferrable-mana).
- It is forfeitable: if someone (for any reason) does not want to own this Mana, the user can forfeit their Mana generation just by not storing or allotting it anywhere.

### Stored Mana: Transferrable Mana

Stored Mana lives in a UTXO, just like IOTA tokens. Like IOTA tokens, It can be transferred by consuming the UTXO it lives in and creating new UTXOs. Within a transaction, the stored and potential Mana from the inputs are consumed and must go somewhere, so they can either be **allotted to an account** as _BIC_ or **stored in a different output**.

Because stored Mana lives on a UTXO and is consumed by transactions, it must first be allotted to an account before being burned. The allotment might happen in the same block the user wants to pay for, since both allotment and burn are only executed when the block containing the transaction is committed.

In summary, **stored Mana** has the following properties:

- It is recorded on the ledger in UTXOs.
- Therefore, when transferred, the corresponding output is consumed, including the stored mana, the storage deposit, and the potential Mana generated from the deposit.
- It is subjected to applying decay whenever transferred.
- It is transferrable to any account as stored Mana or _BIC_.

### Block Issuance Credits (BIC)

The purpose of BIC is to convert UTXO Mana into a form of Mana that can be used as spam protection for congestion control, i.e., to pay for blocks to be scheduled and gossiped around the network and seen by everyone. This form of Mana must be account-based, so we have a separate account-based asset internal to the protocol that can be burnt, the BIC.

Congestion control decides whether blocks should be gossiped to _neighbors_ based on whether the Mana burned by the block is larger than a certain cost that is deterministically calculated and known upfront. By default, the wallet will try to burn exactly the cost indicated by this calculation. It is important to distinguish between **blocks** and **transactions**: congestion control only deals with blocks, which are the containers that carry transactions around the network.

Because BIC do not live on the UTXO ledger, the protocol rules do not allow them to be moved using a transaction, so they can not be transferred. This makes BIC _soulbound_ because they are bound to a single account (even though an account can still issue blocks on someone else's behalf). To ensure that the branch logic and the congestion control do not become entangled, we only allot the BIC specified in the corresponding transaction upon its commitment, i.e., after any conflicts have been resolved and we are certain that the transaction is accepted. We also burn BIC when the blocks are committed to.

In summary, **BIC** have the following properties

- They are burned in a block, not a transaction - thus, are not represented by a UTXO.
- They are burned when a block is committed.
- They are allotted when a transaction is committed.
- As with all other forms of Mana, it is subjected to _decay_.
- They are not transferrable between accounts. They can only be burned within a block.
- They are not convertible into the stored Mana.

## Staking and Delegation

The _staking_ and _delegation_ mechanism is part of an incentive scheme rewarding users for contributing to the protocol security. The incentive scheme distinguishes the following groups of actors:

1. Token holders.
2. Delegators.
3. Validators.
4. Block creators.

Note that the listed roles are not mutually exclusive.

Every _epoch_, a **committee of Validators** will be formed. This committee performs specific tasks to allow the entire network to agree on the ledger state. These actors directly contribute to the ledger security, for which they are rewarded with Mana _at the end of each epoch_. There is no minimum stake to become a validator. Staking tokens instead of delegating to themselves is monetarily beneficial for the validator. Validators in the committee are rotated _at the end of each epoch_.

### Registration

To register as a validator, an actor has to add a _Staking Feature_ to their account. This Feature locks a user-chosen amount of IOTA coins until a user-chosen End Epoch. Alternatively, the Validator can choose not to specify an End Epoch, and they will be considered locked until the Validator signals that wishes to unstake. After this signaling, the locked funds must be _unbonded_ before they are unlocked by the protocol (i.e., validators must wait until the end of the epoch after the unstaking request to have their funds actually unlocked). Once an account has a Staking Feature whose End Epoch is the current one (or has already passed), it is no longer considered for validator selection. The registration must provide a **fixed cost** (a fixed amount deducted per epoch to cover the validator’s fixed operating costs).

Keep in mind that during the unbonding period, the account is still considered staked. After the unbonding period, the funds can be accessed again.

When the Staking Feature that was added during Registration is removed from the account, the validator can claim their rewards in this same transaction. The rewards will be larger than zero only if he was selected to the committee and performed his duties.

Note that registration is necessary but not sufficient to be eligible for the committee. To be considered a candidate for the committee selection, the registered validator must be active (i.e., issue at least a block) in a certain period. The exact eligibility conditions are discussed in the next section.

### Voting Power and Validator Committee

The _Validator Committee_ at Epoch `epoch` is a subset of all actors who:

- Have registered before `Start(epoch)-epochSetupPeriod`
- Have their tokens locked until at least `End(epoch)`
- Issued at least a block between `Start(epoch)-epochSetupPeriod-activityDurCheck` and `Start(epoch)-epochSetupPeriod`, where `epochSetupPeriod` and `activityDurCheck` are protocol parameters.

The average _voting power_ of a validator `i` accross epochs is dependent on `s` and `d_i`, where:

- `s` is the stake of the validator, calculated at `Start(Epoch)-epochSetupPeriod` and must still be locked at the end of Epoch `n` in order to be eligible for committee selection.
- `d_i` is the sum of the delegated value to validator `i` at `Start(Epoch)-epochSetupPeriod`.

This can be done in several ways; one can select validators to the committee randomly with the probability of being selected proportional to `s` and `d_i` and then weight their votes equaly; another option would have a different committee selection and use `s` and `d_i` to weight their votes. In the current IOTA 2.0 protocol design, the committee is formed by the top stakers (thus the selection depending on `s` and `d_i`), and after they are selected, their weight in the committee is the same.

Validator `i`'s Pool Rewards at Epoch `n` is unaffected by delegators that remove their delegation to validator `i` between `Start(Epoch)-epochSetupPeriod` and `End(Epoch)`, due to the calculation taking place earlier. However, in this case, those delegators that removed their stake might not receive rewards referent to epoch `n`, if they don't transition their Delegation Output to a _Delayed Claiming_ state.

### Validation Blocks

The most important role of a validator in the committee is the issuance of **Validation blocks**. These blocks add approval and _witness weight_ to the blocks and transactions of the Tangle, ensuring fast _confirmation_ times.

A Validation block should only contain information relevant to its purpose. This means, for example, that a validator cannot add a transaction payload to this block. This type of block will be privileged in the Congestion Control module so that issuing a validation block will not require the validator to burn mana.

The performance factor of a validator (which impacts the validator and its delegators' rewards) is always calculated using metrics based on the Validator blocks to guarantee that validators issue those blocks correctly, collaborating with the health of the Tangle. Furthermore, spamming of _validation blocks_ is punished by reducing the spammer's rewards to zero in the epoch the spamming occurred.

The most important properties of validation blocks are:

- Validation blocks are as small as possible, containing only strictly necessary data.
- Validation blocks have a maximum number of parents of 8 + the committee size (instead of just 8, like regular blocks).
- Validation block issuance does not burn Mana. Validators that are part of the committee have a guaranteed _throughput_ to issue validation blocks so they can perform their validator task without having to burn their own Mana. This is achieved by having a dedicated _scheduler_ for validator blocks. The scheduler functions like the one for regular blocks, allocating equal throughput to each validator in the committee and preventing any validator from spamming or taking more than their fair share of validator block throughput.
- All validation blocks issued by accounts not selected for the committee will be discarded.
- The performance of the validator will be measured by tracking only the validation blocks.

### Delegation

Delegators are token holders who are not interested in becoming validators but still want to contribute to consensus by delegating their voting power to validators of their choice. Delegators are also rewarded with Mana rewards for delegating to active and well-performing validators. The delegated tokens are not locked and can be spent at any time or re-delegated. As usual, the rewards can then be allotted as _BIC_ or stored on outputs.

Delegators can claim rewards for epoch `n` when delegating to validator `i` if all of the following conditions hold:

- They delegated voting power to validator `i` at most at `Start(Epoch)-epochSetupPeriod`, i.e., when the voting power was calculated.
- The delegators create a \_Delegation Output, defining:
  - The amount of delegated tokens.
  - The ID of the validator to which the output delegates.
  - The starting and ending epochs.
- The validator `i` was selected for the epoch committee for epoch `n`.
- The validator issued the required validation blocks for said epoch `n`, meaning the staking pool is eligible for a non-zero reward amount.

If any of the conditions above are not met, the delegator won't receive the reward in epoch `n`.

We say that our protocol enables _liquid delegation_, since you can move the delegated tokens at any time. Furthermore, it enables the delegetation of tokens participating in L2, since any ISC chain can delegate its voting power to a validator. Even when moving all tokens every epoch, the chain will not lose their rewards, since every epoch it can transition its Delegation Outputs to a _Delayed Claiming_ state, which enables those rewards to be claimed at the end of the epoch. Since the delegation status is defined by the presence of a Delegation Output on a _Delegating State_ before the beginning of the epoch, a delegator cannot game the delegation (e.g., trying to delegate to more than one validator in the same epoch) using the transition to a _Delayed Claiming_ state.

## Mana Rewards

Apart from the Mana generated by holding IOTA tokens, Mana is also rewarded for participating in validation and delegating IOTA tokens. Rewarding validators and delegators with access instead of base tokens is the basis for sustainable tokenomics, as value is not extracted from other IOTA holders. The amount of Mana rewards for an Epoch `n` is denoted by $R(n)$ and calculated as follows:

$$
R(n) = \begin{cases}
R*e^{-\beta n \Delta},\ \text{if}\ n \leq T/\Delta \\
c,\ \text{if}\ n > T/\Delta
\end{cases}
$$

Where:

- $R$ and $c$ are constant scaling parameters of the distributed Mana to validators.
- $\Delta$ is the duration of an epoch.
- $\beta$ is the global _decay_ parameter for all kinds of Mana.
- $T$ is the duration of the network's early stage.

The combined reward that will be given to staking pool `i` (i.e., validator `i` and all its delegators) for the epoch `n` is denoted by $R_i(n)$ and calculated as follows:

$$
R_i(n) = \frac{R(n)}{1 + \alpha}\frac{1}{r_i}\left(\frac{p_i + d_i}{P + D} + \alpha\frac{p_i}{P}\right)*\text{pf}_i(n),
$$

Where:

- $\alpha$ is a parameter in the reward function that dictates the incentive to lock tokens instead of delegating.
- $r_i$ is the probability of a certain actor `i` to be selected as a validator at a certain epoch.
- $p_i$ is the number of tokens staked by validator `i`.
- $d_i$ is the number of tokens delegated to validator `i`.
- $P$ is the total amount of tokens staked by all validators.
- $D$ is the total amount of tokens delegated to all validators.
- $\text{pf}_i(n)$ is a performance factor that measures the quality of the validator's `i` services at time epoch `n`.

The above general definition holds for randomized committee selection procedures. In the special case of the implementation of a non-randomized committee selection (meaning, for fixed committees or committees based on top stakers), the definition of the parameters $r_i$, $P$, and $D$ is slightly modified. In this case, $r_i=1$, $P$ will be the total amount of tokens staked by the committee, and $D$ will be the total amount of tokens delegated to the committee.

If the fixed cost is higher than the calculated pool reward $R_i(n)$, the validator is punished by not getting rewards at all.

If the fixed cost is smaller than $R_i(n)$, the validator will receive the fixed cost. Later, an amount relative to the profit margin (that is fixed by the protocol) is also given to the validator. Finally, the remainder is distributed between the validator and delegators proportionally to their stake.

Validators or delegators can claim mana rewards by creating a transaction that destroys the Staking Feature or the Delegation Output and includes the Mana on the output side of the transaction. Note that when validators destroy their Staking Feature, they are not considered registered anymore; however, they can add a new Staking Feature to their account in the same block that the old Staking Feature is destroyed to continue to be registered without losing their delegators (since their Delegation Outputs include the Validators' Account Addresses, which do not change when the Staking Feature changes).

Mana rewards are also subjected to _decay_ if claimed later than the end of the epoch in which they became available:

$$R(n) * e^{-\beta\Delta}$$

Where $R(n)$ is the amount of Mana rewards available to be claimed at the commitment of epoch `n`, $\beta$ is the global decay parameter for all kinds of Mana, $\Delta$ is the difference in the timestamps of when Mana rewards are claimed and the timestamp of when the corresponding epoch ended.

### Mana Rewards and Incentives

A reward scheme is always a powerful mechanism to incentivize actors to have certain behaviors. IOTA 2.0 rewards mechanism presented above has the following most important game-theoretical properties:

- Non-gameability of the locking rules and validation services.

  - If rewards were linearly proportional only to $p_i+d_i$, validators could game the locking condition by creating a separate account and delegating the account’s tokens to themselves, which would be more interesting to them since staking is more restrictive than just delegating. To prevent this, the reward distribution is not exactly proportional to voting power and privileges pools with a larger locked stake, because of the parameter aloha in the formula.
  - Additionally, the rewards are also proportional to a “performance factor” that measures the quality of the service of validators. Thus, validators (and consequently their delegators) who do not issue the required validation blocks for epoch n will not get the total rewards corresponding to said epoch

- No incentives for centralizing the funds of validators and delegators.
  - By the construction of our reward formulas, there is no incentive for the centralization of validator funds. Technically speaking, this means that two different validators do not get more rewards by combining their stake.
  - Analogously, the concentration of delegator funds is disincentivized by the construction of our reward formula. As more delegated stake is concentrated on the same validator, the rewards of the delegators become smaller. Then, the delegators are incentivized to redelegate to validators with less delegated stake. In the long run, under the assumption that actors are rational, the system should stabilize around a constant ratio of delegated and validator stake among pools.
