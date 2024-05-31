---
description: Learn how to become a validator.
image: /img/icons/iota/iota_core.png
tags:
  - IOTA Node
  - IOTA-Core Node
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

Validators secure the network by issuing validation blocks and receive Mana as a reward. To become a validator, you need
to create an account that can issue blocks, and the account needs to stake tokens. This guide explains how to create the
account and configure the validator plugin of the docker setup.
The validator plugin will then try to make the account a validator by issuing a candidacy announcement to the network.
The validator plugin will start issuing validation blocks if selected for the committee.

:::info

Running a validator implies [running a full-node setup](using_docker.md).

:::

Throughout the guide, we will use the CLI wallet from the iota-SDK and the [node docker setup](./using_docker.md).

:::tip notation

This guide uses the following notation. If `Public Key` has a value of `0xff`, then running the
command `echo {Public Key}` means replacing the variable `{Public Key}` with its value, i.e., running the
command `echo 0xff`.

:::

## Set Up the CLI Wallet

### 1a. Download the latest Version

You can download the latest release of the CLI Wallet from the following link:
https://github.com/iotaledger/iota-sdk/releases/tag/cli-wallet-v2.0.0-beta.2

After downloading, copy the binary to your current directory.

### 1b. Build From Source

:::info Pre-build Release

If you already downloaded the pre-build release version, you can skip this section and continue with [Connect to a Node](#2-connect-to-a-node)

:::

Please follow the instructions to build the CLI Wallet from source:

#### 1. Clone the Repository

You can clone the repository by running the following command:

```bash
git clone -b 2.0 https://github.com/iotaledger/iota-sdk
```

#### 2. Build

After you have downloaded the source code, you can build it by changing the current directory to `iota-sdk/cli` and
running the following command:

```bash 
cargo build --release
```

#### 3. (optional) Copy the Wallet

For ease of access, you can copy the Wallet that you built into your current directory or even add it to your $PATH:

```bash
cp ../target/release/wallet wallet
```

### 2. Connect to a Node

You can use the following command to connect your wallet to a Testnet node — alternatively, your node’s URL:

```bash
./wallet init --node-url "https://api.nova-testnet.iotaledger.net"
```

### 3. Configure Your Wallet

Once you’ve connected your wallet to a node, you must answer the following setup questions:

:::info Not Mentioned Questions

The setup questions that aren't asked here you can configure however you prefer, there config doesn't matter for this how-to.

:::

#### Select secret manager.

Unless you have a ledger, select Stronghold.

#### Do you want to set the address of the new wallet?

No.

#### Select BIP path

Select `Custom` as the BIP path and type `1/0/0/0`.

#### Do you want to set an alias for the new wallet?

Yes.

Then, enter a wallet alias of your choice.

## Create an Account

:::tip Connect to a Node

The following sections assume you have already set up your [CLI Wallet](#set-up-the-cli-wallet), 
and [connected it to a node](#2-connect-to-a-node).

:::

### 1. Create an Implicit Account

You can create an implicit account by running the following command:

```
implicit-account-creation-address
``` 

Please copy the implicit address returned by the command.

### 2. Fund Your Account

You can enter the address at the [Testnet Faucet](https://faucet.nova-testnet.iotaledger.net/) to fund your account or run the
following command

```bash
faucet {implicit-address} --url https://faucet.nova-testnet.iotaledger.net/api/enqueue
```

### 3. Sync With the Node

After creating and funding your implicit account, you should use the `sync` and `implicit-accounts` functionalities to
retrieve the implicit account creation output.

```bash 
sync
implicit-accounts
```

You should run this until the BIC changes from `None` to `Some(0)`, then copy the `Output Id`.

### 4. Transition the Implicit Account to a Full Account

You need to transition your implicit account to a full account to be able to become a validator by running the following
command:

```bash
implicit-account-transition {Output Id}
```

### 5. Sync With the Node

You can now `sync` with the node and run the `accounts` command to ensure an account is displayed with Block Issuance
Credit of `0`, which is the case if it displays `Some(0)` instead of `None`.

```bash
sync
accounts
```

You now have a block issuer account and can send transactions as you wish if you have enough Mana available.

## Adding a Block Issuer Key

### 1. Generate an Ed25519 Keypair

In the directory of the [node docker setup](./using_docker.md), you can run the following command to generate an
Ed25519 keypair:

```bash
docker compose run iota-core tools ed25519-key
```

Please take note of the `ed25519 public key` and `ed25519 private key` and add a `0x` at the beginning of the public
key.

### 2. Select a Validator Account

You can now return to the wallet and `sync` it. Afterward, you should run the `accounts` command to retrieve the list of
available accounts and choose an account you want to use as a validator to issue validation block. Please take note of
its `Account ID` and `Account Address`.

```bash
sync
accounts
```

### 3. Add the Account as a Block Issuer

You can add the account as a block issuer using the following command:

:::note

The public key needs to have the `0x` prefix.

:::

```bash
add-block-issuer-key {Account ID} {ed25519 public key}
```

### 4. Verify

You can verify you successfully added the key by running the `sync` and `accounts` commands. You should then copy
the `Output ID` of the account and run the `output {Output ID}` command.

```bash
sync
account
output {Output ID}
```

You can find the `block_issuer_keys` list in the `features` section of the retrieved output. It should show two entries
that look like these but with different values:

```plaintext
block_issuer_keys: BlockIssuerKeys(
    [
        0x16cbbea33ebcf2e17528737ee64b7b8290fe5c5b0d3c60a05a05bff3d2517b10,
        0x1a6709248bd6f06b103e0b3173c16c69d9a457d447409a6efc9612ffb64da964,
    ],
```

## Start Staking

### 1. Sync With the Node

To start staking, you first need to run the `sync` and `accounts` commands and take note of the `Account ID` of the
account you want to use as a validator.

```bash
sync
account
```

### 2. Decide Your Stake Amount

Next, you should run the `output {Output ID}` command and take note of the `amount`. This is the highest possible amount
you can stake. Decide how much you want to stake. The `Stake Amount` can be anything between `1` and the
displayed `amount`.

```bash
output {Output ID}
```

:::tip

The higher your `Stake Amount`, the more likely you will be selected for the validator committee, so
setting `Stake Amount = amount` is preferred.

:::

### 3. Decide on a `Fixed Cost`

This value is not particularly important for the Testnet. A recommended value is anywhere between 1 and 10.

### 4. Begin Staking

You can use the following command to start staking:

```sh
begin-staking {Account ID} {Stake Amount} {Fixed Cost}
```

You can verify you successfully started staking by running the `sync` and `accounts` commands, copying the `Output ID` of the account, and then running `output {Output ID}`. You should be able to find the `StakingFeature`  within the `features` section. It should show the `Stake Amount` and `Fixed Cost` you just entered. It should look like this, but with the values you entered:

```

StakingFeature {
staked_amount: 1000000000,
fixed_cost: 1,
...

```

The account is now registered as a validator. Next, you must set up the infrastructure to issue validation blocks to secure the network.

## Prepare the Validator Plugin

Running a validator requires running a full IOTA-Core node. You can follow the steps outlined in the [how to install using Docker guide](./using_docker.md) to setup the node. 

Follow the next steps after successfully setting up the node or while setting it up at your choice.

### 1. Update the `.env` File

You must modify the `.env` file in the following ways:

1. Uncomment the `COMPOSE_PROFILES` line below the validator service.
2. Set the `Account Address` from earlier as the `VALIDATOR_ACCOUNT_ADDR`.
3. Set the `ed25519 private key` from earlier as the `VALIDATOR_PRV_KEY` (**with no** 0x prefix).

### 2. Allot Mana to the Account

The selected account needs Mana to issue candidacy announcements to the network. The Mana must be _allotted_ to the account. You can do this using the `allot-mana` command in the CLI wallet or the developer tools in Firefly. In the CLI Wallet, first check how much Mana can be allotted using `sync`, which shows you a `ManaBalance`:

```
ManaBalance {
    total: DecayedMana {
        stored: 1861687,
        potential: 19380254,
    },
    available: DecayedMana {
        stored: 1861687,
        potential: 19380254,
    },
    rewards: 0,
},
```

Set `Mana` as `stored + potential` from the `available` section.

Now we allot the Mana to our account. If you happen to have multiple accounts, you also need to specify the ID of the account that will be used as the validator account.

```bash
allot-mana {Mana}
```

### 3. Verify the `inx-validator`

When you start the docker containers, an `inx-validator` container should also start. You can check the logs to see if
everything is working with the following command:

```bash
docker logs -f inx-validator
```

If the logs don't show any errors, you should be good to go. The network will select you as a validator if your stake is
high enough. You can check the stake requirements as follows: The total pool stake, which consists of
your `Stake Amount` and all the stake that is delegated to your account, must be greater than the _Pool Stake_ of the
last entry in the [validator list](https://explorer.iota.org/iota2-testnet/validators/). Note that this list
might change every epoch, so the stake requirements might also change.

You can check your _Total pool stake_ by taking the `Account Address`, opening the following URL, and checking
the `Validation` tab:

`https://explorer.iota.org/iota2-testnet/addr/{Account Address}`
