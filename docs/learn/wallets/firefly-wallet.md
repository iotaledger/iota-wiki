---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it.
---


# The Firefly Wallet

The Secure entry point to the IOTA Ecosystem.

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

With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, it is important that every IOTA Holder migrates his entire Funds from the old IOTA 1.0 network to the new, much more improved and advanced 1.5 network.

To make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network. The only thing you need is your old IOTA 1.0 network Seed, represented as a combination of 81 characters, a ``.kdbx seed vault file``that you have backed up from the Trinity Wallet, or your Ledger Nano device.

With this information entered in the Migration Process in Firefly, a fully automated process will start and all your Funds will be moved securely into the new network, and you will have access to them through Firefly from now on.

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


### Firefly Dashboard



The Firefly Dashboard is your Main Profile overview. Easily accessible information and access to the most common functions in a nicely styled layout.

You are shown the Total Profile balance here, your different Wallets, and a list of the latest transactions. IOTA Price or Profile value in a chart and the basic security info.

## Wallets

Wallets are sub-accounts to your Seed (Profile). It may be a convenient way to have several of them for different occasions. You could have a "long-term hold" and a "spending" Wallet. Or a Wallet where you receive payments, another one in which you receive donations, etc. You are free in setting them up as you wish.
Use the little "+" sign in the **`My Wallets`** section of your dashboard to create a new one. Assign a name for the Wallet, confirm the creation with your Stronghold password and you are set to receive funds in this Wallet.

Important to mention here: You can only set up further Wallets if your first Wallet has already funds in it. So if you want to set up 5 different Wallets you need a small amount of IOTA in every newly created Wallet before you can create another one.

### Wallet Detail view

If you click on one of the Wallets in the Dashboard overview, the Wallet Detail Screen opens. 
Here you see the Balance contained in this specific Wallet and have the option to send and receive transactions.

Next to the send and receive section an overview of all the transactions related to this specific wallet is shown.
Little Icons show if send or receive transaction was done internal (to another Wallet of the same Profile) or external.
Clicking on one of the transactions opens the **Transaction detail view**.
The following information about the transaction is displayed:

A flow that indicates **from where > Amount > to where** followed by:

**Status**
Confirmed or Pending status of the message

**Date**
Date and Time when the transaction was issued or received (in local System time)

**Message ID**
The unique identifier of this specific message (every transaction is a message) in the IOTA Ledger.

**Send Address**
The Address from where the transaction was initiated

**Receive Address**
The Address on which the tokens of this transaction have arrived. Several receive Addresses may be shown in this view. Your adresses contain the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. This is related to the UTXO (unspent transaction output) Account model in IOTA.

If a transaction is issued from a UTXO output that does not consume all funds that are part of this output, 2 transactions are issued. One transaction moves the funds that are planned to send, and a second transaction that moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the Message and therefore shown in the Transaction detail. Read more about the UTXO Account model here: (*internal link to utxo*)

**Amount**
Amount of IOTA sent and current value in chosen Profile currency


2 different charts **Wallet Value** and **Wallet activity** also provide a graphic overview of the activities in this wallet.
Also, you have will find 3 little dots next to the Wallet balance. Clicking on those dots opens a popup menu.

Here you can enter the functions:

**Customize Wallet** 
Possibility to change the Wallet name.

**View address history**
A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.

**Hide Wallet**
Empty Wallets can be hidden to keep your overview organized. If a wallet still contains funds you will not be able to hide it but will be offered to transfer the funds to another one of your Wallets and hide the Wallet afterward. A hidden Wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.


### Send and Receive Transactions


The Send and Receive functions are available in the main Wallets dashboard, and also in evert Wallet detail view.

**Receive**
Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the Wallets the incoming funds should be received.
The receive address of the selected Wallet is displayed as a QR Code and as a written address. The button `Copy Address` copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents.
The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.
Even if a user has received, but not yet spent funds from that receiving address, the user can decide to generate a fresh receive address using the small "refresh" button above the QR Code.
This function is an essential privacy feature that is a standard approach in Crypto to reduce the traceability of your balances

**Send**
The Send function has two essential features:
"Send payment" - which is a standard IOTA transaction where you write or copy in a full IOTA receive address in the form of `iotaxjdjfkfkldldd.......`. You define the Wallet from where the tokens should be sent from a dropdown menu and the user defines the Amount of Tokens to be sent. While defining the amount, a user may choose "Max" - which will send all the Tokens in the chosen wallet, or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different magnitudes (Mi, Gi,...).
Starting the transaction, the user has to enter the stronghold password to confirm the transaction attempt. After this, the following steps are performed by the wallet: "Syncing Wallet" - establishing the connection to the IOTA Ledger, "Performing PoW" - a tiny amount of PoW is performed by the device of the user, "Broadcasting transaction" - sending the signed transaction into the network, "Transfer complete" - confirmation of the transaction received from the network. This whole process happens in just a few seconds.
