---
description: Detailed overview of accounts, mana, staking and delegation in IOTA 2.0.
keywords:
  - IOTA 2.0
  - Accounts
  - Mana
  - Staking
  - Delegation
  - UTXO
  - BIC credits
---

# Mana, Staking and Delegation

## Accounts

Accounts are a critical aspect of the IOTA 2.0 ledger.
They perform multiple roles, such as holding Mana for issuing [blocks](data-structures.md#blocks), staking tokens for
validation,
delegating tokens to other [validators](validators.md), and claiming rewards from staking or delegation.
They contribute to digital autonomy by allowing users to be their block issuers.
Accounts in IOTA 2.0 align with the W3C DID standard for digital identity,
contributing to digital autonomy.

## Mana

Mana is a vital resource for interacting with the IOTA 2.0 ledger and updating the state via block creation.

You can obtain mana by:

- Holding IOTA tokens.
- Purchasing it from other Mana holders
- Earn it by participating in [consensus](consensus.md).

Unlike traditional blockchains, block creation in IOTA is not reserved for a limited group, and any IOTA account holder
can create blocks with their Mana.

Mana exists in two forms: stored on the unspent outputs and allotted to chosen accounts as BIC credits.
[Stored mana](#stored-mana-transferrable-mana) is transferable. However, Mana allotted
as [BIC credits](#bic-credits-mana-for-congestion-control) isn't transferable
and can only be used for creating blocks.

### Potential Mana

Unspent Transaction Outputs (UTXOs) holding IOTA tokens generate potential Mana based on the value of the tokens and the
duration they've been held.
It's not explicitly stored, but it is consumed when the corresponding IOTA UTXO is consumed.
Potential Mana can be transferred to any account as stored Mana or BIC credits.

### Stored Mana: Transferrable Mana

Stored Mana resides within a UTXO and can be transferred by consuming the UTXO and creating new ones.
Keep in mind that whenever it is transferred, stored Mana is subjected to decay.

### BIC credits: Mana for Congestion Control

BIC credits are used for congestion control. They are non-transferrable, not convertible into stored Mana, and are
burned when a block is scheduled.

## Staking and Delegation

IOTA's staking and delegation mechanisms incentivize users to contribute to the protocol's security.
There are no entry barriers to becoming a validator or a delegator.

### Validation blocks

[Validation blocks](data-structures.md#validation-blocks) are lightweight,
with a maximum number of parents larger than 8.
They do not burn BIC, and only those issued by [nodes](networking.md#nodes) selected for the committee are considered.
Keep in mind that all validation blocks issued by nodes not selected for the committee will be discarded

### Registration

To register as a validator, you must publish a block with a transaction that locks an account with a staking unlock
condition. Remember that the funds will be locked until the account is transitioned to an unbonding period.

The registration must provide an `Account Id` and a fixed cost which is deducted to cover the validator's
operating costs.

### Delegation

Delegators delegate their voting power to validators of their choice. They can claim rewards for slot `n` under certain
conditions, such as if their delegated validator was selected into the epoch committee and issued the required
validation blocks for slot `n`.

## Mana Rewards

In addition to obtaining [Mana](mana.md) from holding IOTA tokens, Mana is also rewarded for participating in validation
and
delegating IOTA tokens. This forms the basis for a sustainable tokenomics model, as value isn't extracted from other
IOTA holders. Rewards are distributed to validators and delegators based on specific parameters.

:::tip Learn More

You can learn more about
the [Accounts](https://wiki.iota.org/tips/tips/TIP-0042), [Mana](https://wiki.iota.org/tips/tips/TIP-0039) in the
[TIPS section](../tips.md).

:::
