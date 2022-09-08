---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. Learn everything here.
---

# Firefly Wallet

## General overview and introduction

Firefly is the secure entry point to the IOTA ecosystem.

It is built with a bright future in mind. It will evolve into a tool that offers much more than just a software wallet for your IOTA tokens. Firefly provides a modular design that makes it easy to add innovative new features later on. IOTA’s new wallet guides you through the complexities of crypto, protected and with ease while using cutting-edge technology to secure your tokens.

Some of the most important features are:

- _Written in Rust_: Rust offers security from the ground up – while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security.
- _Modular design_: Firefly separates different functionalities in module crates, like seed storage, handling transactions, and cryptography. Module crate groups together related functions to make the functionality easy to share between multiple projects that aim to use the same feature.
- _Secured with Stronghold_: Sensitive actions like address generation and transaction signing occur in isolated application memory built upon the IOTA Stronghold library, keeping the seed away from potential attackers.
- _Crypto.rs_: Crypto.rs combines all cryptographic algorithms used by many of the projects at the IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code.

Find more information on the official website and download the Firefly wallet exclusively from:

- [**Firefly**](https://firefly.iota.org/)**:** official Website
- [**Firefly Github Releases**](https://github.com/iotaledger/firefly/releases): official Firefly GitHub Repo with the latest release version

## Firefly staking

Announced in November 2021 and realized with the update to Firefly version 1.30, IOTA token holders can now use the Firefly Wallet to earn SMR and ASMB tokens rewards by staking IOTA tokens directly in the Firefly Wallet.
A new staking tab has been added in the sidebar, and staking IOTA tokens is as secure and easy as sending transactions within your wallet.

Find more information in the blogposts:

- [**Introducing IOTA staking**](https://blog.iota.org/introducing-iota-staking/)
- [**IOTA staking start**](https://blog.iota.org/iota-staking-start/)

## Firefly token migration

With the launch of the new IOTA 1.5 Chrysalis Mainnet end of 28 April 2021, every IOTA holder must migrate their entire funds from the old IOTA 1.0 network to the new, improved, and advanced 1.5 network. To make this process user-friendly and safe, the IOTA Foundation has integrated a migration tool into the Firefly wallet that takes care of the whole process and automatically moves your funds from the old into the new network.

The only thing you need to move your tokens to the new network is your current IOTA 1.0 network seed, represented as a combination of 81 characters, or a `.kdbx seed vault file` that you have backed up from the Trinity wallet and the password that belongs to the file, or your Ledger Nano device. With this information entered in the Firefly Wallet Migration Process, a fully automated migration will start, and all your funds will be moved securely into the new network. Upon completion, you will have access to them through Firefly. Read everything about the process here:

- [**Chrysalis Migration**](https://blog.iota.org/the-chrysalis-token-migration-starts-now/)**:** The Chrysalis network migration process
- [**Firefly Migration Process**](https://blog.iota.org/firefly-token-migration/): The whole migration process explained (for non-Ledger users)
- [**Ledger Nano Migration Guide**](https://blog.iota.org/firefly-token-migration-guide-for-ledger-users/): The whole migration process explained for Ledger users
- [**Migration Security**](https://blog.iota.org/security-during-token-migration/): Important advice for a safe migration process

## Useful Links

- [**Firefly Discord Channel**](https://discord.com/channels/397872799483428865/748265907351978115): Discuss the Firefly wallet, ask questions and engage with the IOTA community on Discord
- [**Firefly GitHub**](https://github.com/iotaledger/firefly): Firefly codebase and development repository
