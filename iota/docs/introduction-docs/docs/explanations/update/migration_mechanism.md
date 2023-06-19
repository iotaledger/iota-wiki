---
description: This page describes the migration components and mechanism used to migrate from IOTA 1.0 to IOTA 1.5 (Chrysalis). 
image: /img/logo/Chrysalis_logo_dark.png
keywords:
- WOTS addresses
- trustless
- migration mechanism
- treasury
- Firefly
- wallet
- legacy nodes
- explanation
---

# How the IOTA Chrysalis Phase 2 Token Migration Works

For the Chrysalis Phase 2 transition, the IOTA Foundation developed a way to migrate funds to the new network. IOTA created this new mechanism because the previous network did not support the WOTS addresses.

Before proceeding into the developed mechanism, below is our reasoning for why other mechanisms were not chosen:

- `Migrating funds by performing periodic global snapshots on both networks`: while this approach would have
  been the easiest to do, it would have blocked the funds of people between the times of global snapshots. For example, if
  we would have taken global snapshots monthly (to carry over funds from burn/migration addresses), token holders would
  have been excluded from opportunities arising from the change in token price. In this case, perhaps a user wanted to sell
  tokens but were blocked by the fact that the next global snapshot would only be performed in 20 days and so they
  couldn't move their tokens to an exchange (which only supports Chrysalis Phase 2 IOTA).
- `Supporting WOTS on Chrysalis Phase 2 (and only allowing to send to non-WOTS addresses)`: while this was also a
  viable option, we decided not to include support for WOTS as it brought several legacy problems:
    - WOTS signatures are very large and make up a disproportional amount of data in a transaction (note that our PoW
      requirement in Chrysalis' Phase 2 was dependent on the size of the message). Additionally, there were no real bounds
      on how big such signatures could grow to (even if, per the default, we only supported three security levels in our
      libraries).
    - We would have needed to pollute our new Chrysalis Phase 2 models with support for these addresses and signatures,
      adding unnecessary complexity to what should be a clean protocol.
    - Chrysalis Phase 2 nodes would have needed to keep a spent address list to inform wallets that they had vulernable
      addresses.

## Components

The developed migration mechanism was built from the following components:

- Chrysalis phase 2 data types (for reference, see [the RFC](https://github.com/luca-moser/protocol-rfcs/blob/rfc/wotsicide/text/0035-wotsicide/0035-wotsicide.md) for details):
    - `Treasury Output`: an object which specified an amount of tokens held in the treasury.
    - `Treasury Input`: an object which referenced a previous `Treasury Output`.
    - `Treasury Transaction`: an object which defined a `Treasury Input` referencing the last `Treasury Output` and a
      new `Treasury Output` that held the delta of what the `Treasury Transaction` was spending.
    - `Receipt`: an object which held a pointer to a legacy milestone index, a list of funds to mint, and
      a `Treasury Transaction`. A `Receipt` can only be an inner payload of a milestone.
- Chrysalis Phase 2 nodes which validated receipts.
- Legacy nodes which provided a special API command for the above Chrysalis Phase 2 nodes.
- `Treasury`: this was the last `Treasury Output` in the ledger. At one point, only one existed.
  After Chrysalis Phase 2 network launched, the `Treasury` contained the total supply of tokens (2779530283277761) aside from the funds that were already migrated during the "7-day-migration-period" prior to the network launch. This means that all funds which are not migrated from the legacy network, will always reside in the `Treasury`.

:::note

A `Receipt` could only be contained within a milestone and that valid milestones could only be issued by
the Coordinator. Therefore, a minting of migrated funds could only happen through milestones and not any other type of
transactions. Likewise, a `Treasury Transaction` was only valid as an inner payload of a `Receipt`.

:::

## How it Actually Works

1. In essence, a `Receipt` carried the information about funds which were migrated or "burned" to a `migration address`
   on the legacy network. A `migration address` looks like any other normal address on the legacy network but it
   encapsulates actual information, such as:
    - The target Ed25519 address on the Chrysalis Phase 2 network from which the token holder wants their funds to be
      accessible from.
    - A checksum of that Ed25519 address.
    - A tryte prefix `TRANSFER` (these addresses always start with this prefix).
2. As mentioned above, a `Receipt` could only be contained in a milestone and therefore the Coordinator on the Chrysalis
   Phase 2 network.
    1. Periodically polled data from a legacy node about what kind of newly confirmed burned/migrated funds there were (while also performing WOTS signature verification on these and the legacy milestone bundle).
    2. Then a milestone is produced with a `Receipt` that contained those funds, where within the `Receipt`,
       a `Treasury Transaction` was placed which deducts the sum of tokens migrated from the `Treasury`.
3. Chrysalis Phase 2 nodes then saw receipts when applying milestones and automatically generated outputs for the Ed25519
   address as defined in the origin `migration address` in the legacy network. As an optional step (which is not turned
   on by default), every node could have been configured to verify whether the funds in the receipt were really migrated in the
   old network using a legacy node and whether all funds for a given legacy milestone index were migrated. If this
   verification failed, the node would have automatically panicked as the integrity was no longer correct.

This meant that:

- The IOTA Foundation could not mint funds out of thin air, because nodes in the Chrysalis Phase 2 network verified that the
  funds were burned in the legacy network.
- All migration bundles, respectively transferred to `migration addresses` which were confirmed by a given legacy
  milestone, had to have been migrated fully to the new network, as otherwise the verification failed.
- Node operators were free to choose which legacy nodes they queried with their Chrysalis Phase 2 nodes, so the
  verification of migrations/receipts was decentralized. For example, a node operator chose to both operate their own
  legacy and Chrysalis Phase 2 nodes.

Essentially, via the Firefly wallet, token holders:

1. Produced migration bundles which sent funds to `migration addresses` controlled by the given owner.
2. These bundles were confirmed on the legacy network.
3. The Chrysalis Phase 2 Coordinator picked these confirmed legacy bundles up and generated receipts minting those funds
   to the target Ed25519 address.
4. Verifier nodes verified the receipts and made sure that the funds originated from the legacy network.

### Verifier Node

A verifier node is a Chrysalis Phase 2 node which upon seeing receipts:

1. Queries a legacy node for the confirmation data for the specified milestone in the receipt.
2. Then performs WOTS signature verification of the legacy milestone bundle and all confirmed bundles.
3. Additionally, it also checks that all confirmed funds on the legacy network for the given legacy milestone, are indeed minted with a given batch of receipts (i.e. nothing is left out).

For further reference, you can read the [Hornet as a verifier node](https://wiki.iota.org/hornet/post_installation/run_as_a_verifier) page.
