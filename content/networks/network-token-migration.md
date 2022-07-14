---
title: Network Token Migration
description: We describe the process of migrating tokens from the IOTA legacy network
  into the new Chrysalis network
---

# Network Token migration:

## Why does IOTA migrate tokens?

The Chrysalis network update in April 2021 changed the core functionalities of the protocol and improved IOTA in many ways. These have been breaking changes, and nearly every part of the protocol has been changed. Therefore, the IOTA legacy network has been depreciated and can no longer perform normal transactions of tokens.

- The [chrysalis website](https://chrysalis.iota.org/) gives detailed information on why this happened and what has been changed.

- The [Chrysalis documentation](/introduction/welcome) gives detailed insight into the new network and its specifications.

To continue the guaranteed accessibility of tokens, all owners of tokens in the old IOTA 1.0 network are therefore asked to move the funds they own into the new Chrysalis IOTA 1.5 network.

## Migration process

The migration of tokens from the old to the new network is a special process executed in the [IOTA Firefly Wallet](https://firely.iota.org)

It follows the following steps:

- 1.) You enter your seed in Firefly.
- 2.) Firefly creates a new seed and generates an EdDSA address for the new network.
- 3.) Firefly sends your funds to a specific migration address (which encapsulates your EdDSA address) on the old network.
- 4.) Your funds become available on the new network on the EdDSA address Firefly created for you.
- 5.) Your funds are successfully migrated.

The technical details are explained in the [chrysalis documentation](/introduction/guides/migration_mechanism)

Exact guides how to migrate your funds are located here:

- [Firefly token migration](/learn/wallets/firefly/general#firefly-token-migration)

We urge every IOTA token holder who still has not completed the migration to follow the steps and move the tokens into the new network.

The possibility of using the Firefly token migration will end at the latest with the upgrade to the fully decentralized IOTA 2.0 network (Coordicide).


