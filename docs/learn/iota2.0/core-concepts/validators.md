---
description: 'Learn about the selection, roles, and rewards of validators in IOTA 2.0, which uses Delegated Proof-of-Stake (DPoS) for securing and progressing the ledger state.'
keywords:
  [
    'IOTA 2.0',
    'Validators',
    'Delegated Proof-of-Stake',
    'DPoS',
    'Committees',
    'Validator Selection',
    'Validator Responsibilities',
    'Rewards',
    'Misbehavior',
  ]
---

# Validators

In IOTA 2.0, validators are special [nodes](networking.md#nodes) that issue validation
[blocks](data-structures.md#blocks) to enable the entire network to agree on the ledger state and the set of blocks in
the [Tangle](data-structures.md#the-tangle).
Validators directly contribute to the progress of the ledger and its security, and in turn, they are rewarded with
[Mana](mana.md).

IOTA 2.0 uses Delegated Proof-of-Stake (DPoS) to determine which validators operate the network.
For an epoch, the committee selection procedure determines a subset of validators
that will carry out the [consensus](consensus.md) protocol during the epoch.
These validators are called the committee members for the epoch.

## The Role of Validators and Committees

Validators and committees prevent double spending and malicious manipulation of the consensus outcome.
They ensure the progress of the ledger efficiently,
enable efficient consensus by reducing the number of blocks required to reach an
agreement and promote a more democratic and inclusive validation process.

## Validator Registration and Committee Selection Process

To be included in the committee of an epoch, a node must go through three steps: _Registration_, _Activity_, and
_Selection_. The committee is formed by taking a predetermined number of validators who have the largest stake.

### Registration

To register as a validator for an epoch, you have to issue a block with a transaction that locks an account with
the staking unlock condition.
This block must be issued before the epoch starts.
Your registration needs to provide the following:

- **Account id**: A human-readable identifier of the actor.
- **Profit margin**: A fixed fraction of combined validator’s and delegators’ rewards the actor intends to retain.
- **Fixed cost**: A fixed amount deducted to cover the validator’s operating costs.
- **Locked funds (stake)**: The amount of funds that will be locked.
- **Unbonding time**: A timestamp until which the locked funds cannot be moved.

The registration is only considered successful when the registration block gets accepted and committed to the respective
slot commitment.

### Activity

During the _activity period_, an actor must have at least one accepted block.
This block can be of any type, e.g., a validation block.

### Selection and Voting Weight

Each validator's stake is computed as the sum of the locked funds and the delegated stake from other accounts.

The next committee is formed by taking a predefined number of random validators with the largest stake. When deciding between
equal stakeholders, ties are broken deterministically by using a hash function.

As a result of changes in the delegation of stake and the set of active validators, committees evolve across epochs.

## Responsibilities and Actions of Validators

Validators are responsible for issuing [validation blocks](data-structures.md#validation-blocks).
Their blocks should be regular, properly referenced, correctly vote, and regularly commit to slots.

## Rewards and Incentives

Well-performing validators are eligible for Mana rewards.
The rewards for validators are distributed according to their performance factors,
which are computed per [slot](data-structures.md#slots)
and consider the number of accepted blocks and the expected number of validation blocks per slot.

## Handling Misbehavior and Adversarial Validators

The consensus protocol in IOTA 2.0 handles adversarial validators with less than 1/3 of the total voting weight.
They can have any type of misbehavior, including censoring valid blocks, stopping the issuance of blocks, or
manipulating slot commitment chains.

### Censoring Valid Blocks

An adversarial committee member could attempt to censor a valid block by not referencing it.
However, honest validators will still reference these valid blocks.
To successfully censor a block, the adversarial validator must avoid all blocks built on top of the censored
block.
This action would eventually make the adversarial node's blocks isolated and orphaned.

### Stop Issuing Blocks

Adversarial validators could halt the issuing of validation blocks, which might result in the temporary halt of
confirmation and finalization in certain instances.
Nevertheless, the Tangle and the ledger will continue to grow as block and transaction acceptance requires approval from
the "online" committee only.
When the next committee is selected, confirmation and finalization will resume.
Validators who don't issue validation blocks regularly will receive fewer rewards, if any.

### Manipulation Slot Commitment Chains

#### Many competing chains

Adversaries could create many competing slot commitment chains.
According to the consensus protocol, honest nodes favor the heaviest chain with the most recent quorum certificate.
Therefore, honest nodes will ignore blocks with unfamiliar commitments needing more support.

#### Incorrect extension of the chain

If a slot commitment is produced prematurely by an adversary (for instance, not all conflicting transactions within the
slot are resolved), the honest committee members will keep the corresponding block in the waiting tip pool to verify
its accuracy once the respected slot becomes committable.
In the end, blocks with incorrect slot commitments will be discarded from the tip pool.
