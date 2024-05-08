---
description: Learn how to become a validator.
image: /img/icons/iota/iota_core.png
tags:
  - IOTA Node
  - IOTA-core Node
  - Docker
  - Install
  - Run
  - Validator
  - Staking
  - macOS
  - Windows
  - Linux
  - how to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LinuxCommands from '@site/docs/_admonitions/_linux-commands.md';

# Validator Setup Guide

Validators secure the network by issuing validation blocks and receive Mana as a reward. In order to become a validator, an accounts needs to be created that can issue blocks and the account needs to stake tokens. This guide explains how to create such an account and configure the validator plugin of the docker setup. This plugin will then attempt for the account to become a validator by issuing a candidacy announcement to the network and if selected into the committee, will start issuing validation blocks. Running a validator also means running a full node setup.

Throughout the guide, we will use the CLI wallet from the iota-sdk and the [node docker setup](./using_docker.md).

## Preliminaries

We use the following notation in this guide. If `Public Key` has a value of `0xff` then running the command `echo {Public Key}` means replacing the variable `{Public Key}` with its value, i.e. running the command `echo 0xff`.

## Wallet setup

TODO: Link to CLI Wallet binaries once released, or keep the below manual instructions. (Those require Rust to be installed).

1. `git clone -b 2.0 https://github.com/iotaledger/iota-sdk`
2. `cd iota-sdk/cli`
3. `cargo build --release`
4. `cp ../target/release/wallet wallet`
5. `./wallet init --node-url "https://api.iota2-testnet-domain"`. Alternatively, use the url of your own node.
6. Select secret manager. Unless you have a ledger, select stronghold.
7. Do you want to set the address of the new wallet? no.
8. Select bip path: Select any bip path of your choice (e.g. IOTA is fine)
9. Do you want to set an alias for the new wallet? yes.
10. Enter a wallet alias of your choice.

## Account Creation

1. Run `implicit-account-creation-address` and copy the implicit-address.
2. Enter the address at https://faucet.iota2-testnet-domain/ or run `faucet {implicit-address} --url https://faucet.iota2-testnet-domain/api/enqueue`
3. Repeatedly run `sync` and `implicit-accounts` to see when you got the implicit account creation output.
4. Repeatedly run `implicit-accounts` to view implicit accounts and wait until BIC changes from `None` to `Some(0)`, then copy the `Output Id`.
5. Run `implicit-account-transition {Output Id}`
6. Repeatedly run `sync` and `accounts` and make sure an account is displayed and it has Block Issuance Credit of `0`, which is the case if it displays `Some(0)` instead of `None`.
7. Now you haven a block issuer account and can send transactions as you wish as long as you have enough Mana available.

## Adding a Block Issuer Key

1. In the directory of the [node docker setup](./using_docker.md) file, run `docker compose run iota-core tools ed25519-key` to generate an Ed25519 keypair.
2. Take a note of the `ed25519 public key` and `ed25519 private key` and add a `0x` at the beginning of the public key.
3. Go back to the wallet.
4. Repeatedly run `sync` and `accounts` and pick an account you want to use for the validator to issue validation blocks and copy its `Account ID` and its `Account Address`.
5. Run `add-block-issuer-key {Account ID} {ed25519 public key}` (Note that the public key needs to have the `0x` prefix).
6. Verify the key was successfully added by running `sync` and `accounts`, then copy the `Output ID` of the account and run `output {Output ID}`. In the shown output, within the `features` section, find the `block_issuer_keys` list. It should show two entries. It might look like this but with different values:

```
block_issuer_keys: BlockIssuerKeys(
    [
        0x16cbbea33ebcf2e17528737ee64b7b8290fe5c5b0d3c60a05a05bff3d2517b10,
        0x1a6709248bd6f06b103e0b3173c16c69d9a457d447409a6efc9612ffb64da964,
    ],
```

## Begin Staking

1. Run `sync` and `accounts` again and take a note of the `Account ID` of the account you want to use for validating the network.
2. Run `output {Output ID}` and take a note of the `amount`. This is the highest possible amount you can stake. Decide on how much you want to stake, which can be anything between `1` and the displayed `amount` and note it as `Stake Amount`. Note that the higher your `Stake Amount`, the more likely it is that you will be selected into the validator committee, so setting `Stake Amount = amount` is preferred.
3. Decide on a `Fixed Cost`. This value is not particularly important for the testnet. A recommended value is anywhere between 1 and 10.
4. Run `begin-staking {Account ID} {Stake Amount} {Fixed Cost}`.
5. Verify you successfully started staking by running `sync` and `accounts`, then copy the `Output ID` of the account and run `output {Output ID}`. In the shown output, within the `features` section find the `StakingFeature`. It should show the `Stake Amount` and `Fixed Cost` you just entered. It should look like this, but again, with the values you entered:

```
StakingFeature {
    staked_amount: 1000000000,
    fixed_cost: 1,
    ...
```

The account is now registered as a validator. Now we need to setup the infrastructure to actually issue validation blocks to secure the network.

## Prepare the Validator Plugin

1. Running a validator requires that you run a full iota-core node as well. Follow the steps outlined [here](./using_docker.md) to setup the node. Follow the next steps either after you've successfully setup the node or while setting it up, at your choice.
2. The `.env` file needs to be modified in the following ways.
3. Uncomment the `COMPOSE_PROFILES` line below the validator service.
4. Set the `Account Address` from earlier as the `VALIDATOR_ACCOUNT_ADDR`.
5. Set the `ed25519 private key` from earlier as the `VALIDATOR_PRV_KEY` (**with no** 0x prefix).
6. In order to issue a candidacy announcement to the network the used account needs Mana. It must be _allotted_ to the account which can be done via the `allot-mana` command in the CLI wallet or via the developer tools in Firefly.
6. When you start the docker containers, an `inx-validator` container should be started. Check the logs to see if everything is working with: `docker logs -f inx-validator`.

If the logs don't show any errors, you should be good to go. If your stake is high enough, the network will select you as a validator. You can check the stake requirements as follows: The total pool stake, which consists of your `Stake Amount` and all the stake that is delegated to your account, must be greater than the _Pool Stake_ of the last entry in this list: https://explorer.iota2-testnet-domain/alphanet/validators/. Note that this list might change every epoch so the stake requirements might also change.

Check your _Total pool stake_ by taking the `Account Address` and open this URL: `https://explorer.iota2-testnet-domain/alphanet/addr/{Account Address}` and open the _Validation_ tab.
