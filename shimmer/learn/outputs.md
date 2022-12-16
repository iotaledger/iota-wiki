---
description: 'Stardust introduces changes to the UTXO model, which allow for new output types, features, and unlock
conditions.'
image: /img/iota-wiki.png
keywords:

- explanation
- shimmer
- outputs
- unlock conditions
- features
- output types

---

# Output Types and Features

Stardust introduces [changes to the UTXO model](/introduction/explanations/what_is_stardust/rethink_utxo), introducing novel [output types](#output-types) with new [unlock conditions](#unlock-conditions) and [features](#features).

## Output Types

### Basic Output

The simplest output is the basic output. At the minimum, you will need to specify an address and amount of tokens. However, you can customize this basic output to include a variety of [features](#features) and [unlock conditions](#unlock-conditions).

### NFT Output

You can mint NFTs by creating NFT outputs and sending an [NFT transaction](/introduction/explanations/ledger/nft). You can define immutable metadata and a [verified issuer](#issuer) while you create it.

### Alias Output

An [alias](/introduction/explanations/ledger/alias) output is essentially a UTXO state machine that stores the state second layer smart contract chains and allows for two controllers, which can be rotated and create custom native tokens linked to the alias address.

### Foundry Output

You can create a foundry output to control the supply of your [native tokens](/introduction/explanations/ledger/foundry).

## Unlock Conditions

Unlock conditions have always been present in crypto. The first and clearest example is the recipient [address](#address). The stardust upgrade adds new unlock conditions that will allow you to add [expirations](#expiration), [timelocks](#timelocks) and specify the [storage deposits](#storage-deposit-return).

### Address

The most traditional unlock condition is the [address](/introduction/explanations/what_is_stardust/unlock_conditions#address).
Addresses can only unlock outputs with their signatures.

### Storage Deposit Return

Due to the [storage deposit rules](./welcome.mdx#storage-deposits), you cannot create transactions smaller than the minimum deposit. However, with the storage deposit return unlock condition, you can specify an amount that will need to be returned once the funds are unlocked. This way, you can send micro-transactions as small as you want. You will only need to send the minimum deposit, which will be returned once the micro-transaction is processed.

### Expiration

In Shimmer, you can define an [expiration date and time](/introduction/explanations/what_is_stardust/unlock_conditions#expiration) for an output. This way, if the output isn't consumed by the expiration date, it will be returned to your account. This is particularly useful if you want to cancel a transfer if a deadline isn't met.

### Timelock

Similar to the [expiration unlock condition](#expiration), you can add a [timelock](/introduction/explanations/what_is_stardust/unlock_conditions#timelock) to outputs. This means that the output will be locked until a specific date and time.

## Features

Outputs in Shimmer have [new features](/introduction/explanations/what_is_stardust/output_features) that aim to make the Stardust ledger more flexible and give the users more than [simple transactions](/introduction/explanations/ledger/simple_transfers).

### Metadata

The [metadata](/introduction/explanations/what_is_stardust/output_features#metadata) feature allows you to store any piece of data within an output. However, there are size constraints as transactions are limited in size. This is hardly an issue as you can slice data into manageable chunks.

### Sender

The [sender](/introduction/explanations/what_is_stardust/output_features#sender) feature lets you define a sender address within the output. You could combine this feature with [metadata](#metadata) to create verified data sources.

### Issuer

The [issuer](/introduction/explanations/what_is_stardust/output_features#issuer) feature is quite similar to the [sender feature](#sender), but it is only available when you mint an NFT. Artists can use this feature to add a verified Issuer to the NFT and protect buyers and traders from counterfeits.

### Tag

The [tag](/introduction/explanations/what_is_stardust/output_features#tag) feature is similar to the metadata features, but it aims to serve a different purpose. Though both features allow you to store data in an output, tags can be indexed. This means you could map data [metadata](#metadata) from a [verified sender](#sender).

:::tip Stardust Ledger Anatomy

You can find a more detailed description Stardust Ledger in the [Stardust Protocol docs](/introduction/welcome).

:::
