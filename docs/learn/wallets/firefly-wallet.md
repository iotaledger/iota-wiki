---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it.
---


# The Firefly Wallet

The Secure Entrypoint to the IOTA Ecosystem.

Firefly is built with the future in mind. It will evolve into a tool that offers much more than being just a Software Wallet for your IOTA Tokens.
Firefly has a modular design that makes it easy to add innovative new features later on.
IOTA's new wallet guides you through the complexities of crypto, protected and with ease, while it is using cutting edge technology to secure your tokens.

Some of the most important features:
- Written in Rust

Rust offers security from the ground up – while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security.

- Modular design

Firefly separates different functionalities – like seed storage, handling transactions, and cryptography – in crates. A crate groups related functions, so that the functionality is easy to share between multiple projects.

- Secured with Stronghold

Sensitive actions like address generation and transaction signing take place in isolated application memory, keeping the seed away from potential attackers.

- Crypto.rs

Crypto.rs combines all cryptographic algorithms used by many of the projects at IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code.

Find more information on the official Website and download the Firefly Wallet only from there:

**[Firefly](https://firefly.iota.org/)** - official Website




## Firefly Token Migration

With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, it is important that every IOTA Holder migrates his entire Fungs from the old IOTA 1.0 network to the new, much more improved and advanced 1.5 network.

To make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network. The only thing you need is your old IOTA 1.0 network Seed, represented as a combination of 81 characters, a ``.kdbx seed vault file``that you have backed up from the Trinity Wallet, or your Ledger Nano device.

With this information entered in the Migration Process in Firefly a fully automated process will start and all your Funds will be moved securely into the new network and you will have access to them through Firefly from now on.

Read everything about the process here:

- **[Chrysalis Migration](https://blog.iota.org/the-chrysalis-token-migration-starts-now/)** - The Chrysalis network Migration process
- **[Firefly Migration Process](https://blog.iota.org/firefly-token-migration/)** - The whole Migration Process explained
- **[Migration Security](https://blog.iota.org/security-during-token-migration/)** - Important advice for a safe Migration Process



## Useful Links
- **[Firefly Discord Channel](https://discord.com/channels/397872799483428865/748265907351978115)** - Discuss the Firefly Wallet, ask questions and engage with the IOTA community on Discord
- **[Firefly GitHub](https://github.com/iotaledger/firefly)** - Firefly codebase and development repository

<br/>

----

## Firefly Features

### Account Structure
Firefly is structured to over you a vast amount of possibilities. The basic Account handling Logic works like this: 
- One Firefly **Profile** is always a representation of one IOTA **Seed**
- Every Firefly **Profile** can host an unlimited amount of **Wallet's** which can be seen as Sub-Accounts under the **Profile Seed**.

### Profile Setup

Every **Profile** receives a unique IOTA Seed consisting of a **24 words mnemonic Phrase** created with the `BIP39 Standard`. During the Profile creation, these 24 words will be shown to the user only a single time and the user must make sure to back up these 24 words. We highly recommend creating a Paper Wallet as a physical backup of these words. Losing these words will potentially result in losing access to the Profile and the funds connected with the Seed.
To make sure that the user has created a backup of the 24 words a check is done which requires adding all the 24 words in the correct order by the user.

After the user receives his 24 Seed Words the user can also create a **Stronghold File** as a digital Backup of the Profile. This File also contains the SEED and some setup Information of the Profile. We also strongly recommend storing this file in several independent locations (USB Stick, Cloud storage,...). In the case that the 24 words get lost it is possible to restore a profile with this file. To use the file the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password, the Stronghold file will restore the Profile. It is therefore also essential for the user to store the Password of the stronghold file securely.


Further then, the user creates also a Pin-code as easy access to the first level of the Firefly wallet Interface. This Pin Code is required to enter the Profile - Dashboard but does not grant access to Functions that handle or move the user's funds or give access to security settings of the Wallet. For all these actions that require a higher level of security, the user needs to enter the Stronghold Password. Only this password gives access to the full functionality of the Wallet.

If different Users aim to use the same Firefly Wallet, or if you have multiple Seeds, you need to create one Profile for every Seed / every user.

**Key Takeaways:**

- **securely Backup the 24 words mnemonic phrase, it is your IOTA SEED!**
- **securely store your Stronghold Backup File and the Stronghold Password**
- **store it in multiple independent locations digital and physical**



