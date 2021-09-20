---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in
  DLT. Learn everything here.
---

# The Firefly Wallet

## Table of contents

- [General Overview and Introduction](#general-overview-and-introduction)
- [Firefly Token Migration](#firefly-token-migration)
- Firefly User Guide
    * [User guide for standard users](#user-guide-for-standard-users)
    * [User Guide for users of a Ledger Nano X or Ledger Nano S device](#user-guide-for-users-of-a-ledger-nano-x-or-ledger-nano-s-device)
- Firefly FAQ
    * [Setup and installation](#setup-and-installation)
    * [Backups and recovery](#backups-and-recovery)
    * [Profiles and wallets](#profiles-and-wallets)
    * [Transactions](#transactions)
    * [Settings](#settings)
    * [Troubleshooting](#troubleshooting)
    * [migration](#migration)
    * [Spent Addresses](#spent-addresses)

## General Overview and Introduction

The Secure Entrypoint to the IOTA Ecosystem.

Firefly is built with a bright future in mind. It will evolve into a tool that offers much more than being just a Software Wallet for your IOTA Tokens. Firefly offers a modular design that makes it easy to add innovative new features later on. IOTA’s new wallet guides you through the complexities of crypto, protected and with ease, while it is using cutting-edge technology to secure your tokens.

Some of the most important features:

- Written in Rust

Rust offers security from the ground up – while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security.

- Modular design

Firefly separates different functionalities – like seed storage, handling transactions, and cryptography – in module crates. A module crate groups related functions so that the functionality is easy to share between multiple projects that aim to use the same feature.

- Secured with Stronghold

Sensitive actions like address generation and transaction signing take place in isolated application memory built upon the IOTA Stronghold library, keeping the seed away from potential attackers.

- Crypto.rs

Crypto.rs combines all cryptographic algorithms used by many of the projects at the IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code.

Find more information on the official Website and download the Firefly Wallet only from there:

- [**Firefly**](https://firefly.iota.org/) - official Website
- [**Firefly Github Releases**](https://github.com/iotaledger/firefly/releases) - official Firefly GitHub Repo with the latest release Version

## Firefly Token Migration

With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, every IOTA Holder must migrate his entire Funds from the old IOTA 1.0 network to the new, much more improved, and advanced 1.5 network. To make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network.

The only thing you need to move your Tokens to the new network is your current IOTA 1.0 network Seed, represented as a combination of 81 characters, or a `.kdbx seed vault file` that you have backed up from the Trinity Wallet and the password that belongs to the file, or your Ledger Nano device. With this information entered in the Firefly Wallet Migration Process, a fully automated migration will start and all your Funds will be moved securely into the new network. Upon completion, you will have access to them through Firefly from now on. Read everything about the process here:

- [**Chrysalis Migration**](https://blog.iota.org/the-chrysalis-token-migration-starts-now/) - The Chrysalis network Migration process
- [**Firefly Migration Process**](https://blog.iota.org/firefly-token-migration/) - The whole Migration Process explained (non Ledger users)
- [**Ledger Nano Migration Guide**](https://blog.iota.org/firefly-token-migration-guide-for-ledger-users/) - The whole Migration Process explained for Ledger users
- [**Migration Security**](https://blog.iota.org/security-during-token-migration/) - Important advice for a safe Migration Process

## Useful Links

- [**Firefly Discord Channel**](https://discord.com/channels/397872799483428865/748265907351978115) - Discuss the Firefly Wallet, ask questions and engage with the IOTA community on Discord
- [**Firefly GitHub**](https://github.com/iotaledger/firefly) - Firefly codebase and development repository

---

# **Firefly User Guide**

## User guide for standard users

### Account Structure

Firefly's basic Account handling Logic works like this:

- One Firefly **Profile** is always the representation of one **IOTA Seed**
- Every Firefly **Profile** can host an unlimited amount of **Wallet's** which can be seen as Sub-Accounts under the one **Profile Seed**.

### Profile Setup

Every **Profile** receives a unique IOTA Seed consisting of a **24 words mnemonic Phrase** created with the `BIP39 Standard`. During the Profile creation, these 24 words will be shown to the user **only a single time** and the user must make sure to back up these 24 words. We highly recommend creating a Paper Wallet as a physical backup of these words. Losing the words will potentially result in losing access to the Profile and the funds connected with the Seed. To make sure that the user has created a backup of the 24 words, a check is done during setup, which requires adding all the 24 words in the correct order by the user.

After the user has received the 24 Seed Words the user can also create a **Stronghold File** as a digital Backup of the Profile. This File also contains the SEED securely encrypted, and some setup Information of the Profile. We strongly recommend storing this file in several independent locations (USB Stick, Cloud storage,...). Given the case that the 24 words get lost, it is possible to restore a profile with this file. To use the file the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password, the Stronghold file will restore the Profile. It is therefore also essential for the user to store the Password to this stronghold file securely.

Further then, the user creates a Pin-code as an easy access method to the Firefly wallet Interface. This Pin Code is required to enter the Profile - Dashboard but does not grant access to Functions that handle or move the user's funds or give access to security settings of the Wallet. For all these actions that require a higher level of security, the user needs to enter the Stronghold Password. Only this password gives access to the full functionality of the Wallet.

If different Users aim to use the same Firefly Wallet App, or if you have IOTA Tokens on multiple Seeds, you need to create a new Profile for every Seed / every User.

**Key Takeaways:**

- **Securely Back up the 24 words mnemonic phrase, it is your IOTA SEED!**
- **Securely store your Stronghold Backup File and the Stronghold Password!**
- **Store it in multiple independent locations - digital and physical!**

### Firefly Dashboard

![dashboard](/img/learn/firefly/dashboard.png)

The Firefly Dashboard is the main overview of a User Profile. Easily accessible information on the spot and the most common functions "Send" and "Receive" ordered in a nicely styled layout. Users are shown the total Profile balance here, the different Wallets that belong to the profile, and a list of the latest occurred transactions. IOTA Price or Profile value is shown in a chart and also a section with the basic security info of the Profile is displayed.

## Wallets

Wallets are sub-accounts to a Seed (Profile). It may be a convenient way to have several of them for different occasions. Users could have a "long-term hold" and a "spending" Wallet. Or a Wallet where they receive payments, another one in which only donations are received, etc. Users are free in setting them up as they wish. Using the little "+" sign in the `My Wallets` section of the dashboard creates a new Wallet. Assign a name for the Wallet, confirm the creation with the Stronghold password, and the Wallet is set to receive funds.

Wallets contain a collection of addresses and those addresses are grouped under this wallet to help users keeping their addresses organized.

Important to mention here: Users can only set up further Wallets if the first Wallet has already funds in it. So if Users want to set up 5 different Wallets they need a small amount of IOTA in every newly created Wallet before another one can be created.

### Wallet Detail view

![wallet detail view](/img/learn/firefly/wallet_detail_view.png)

A mouse click on one of the Wallets in the Dashboard overview opens the Wallet Detail Screen. Here Users see the Balance contained in this specific Wallet and have the option to send and receive transactions.

Next to the send and receive section an overview of all the transactions related to this specific wallet is shown. Little Icons indicate if a send or receive transaction was done internal (to another Wallet of the same Profile) or external.

Also, you have will find **3 little dots** next to the Wallet balance.

**Clicking on those dots opens a popup menu.**

**In this popup menu you can enter the functions:**

**Customize Wallet**

-   Possibility to change the Wallet name.

    **View address history**

-   A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.

    **Hide Wallet**

-   Empty Wallets can be hidden to keep your Main Wallet overview organized. If a wallet still contains funds you will not be able to hide it by clicking this option but will be offered to transfer the funds to another Wallet and hide the Wallet afterward. A hidden Wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.

#### Transaction detail view.

![transaction details view](/img/learn/firefly/transaction_details_view.png)

The following information about the transaction is displayed:

-   A transaction flow that indicates: **from where > token amount > to where** followed by:

    **Status**

-   Confirmed or Pending status of the message

    **Date**

-   Date and Time when the transaction was issued or received (in local System time)

    **Message ID**

-   The unique identifier of this specific message (every transaction in IOTA is a message) in the IOTA Ledger.

    **Send Address**

-   The Address from where the transaction was initiated

    **Receive Address**

-   The Address on which the tokens of this transaction have arrived. Several different receive Addresses may be shown in this view. The Addresses belonging to you are highlighted with the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. These are normally addresses of the sender. To these address the remaining funds that have not been used from the sender's address are transferred. This is related to the UTXO (unspent transaction output) Account model in IOTA.

-   If a transaction is issued from a UTXO output (an address holding funds) that does not consume all funds that are part of this output, one transaction moves the funds that are planned to send away from the address, and a second transaction moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the message and therefore shown in the Transaction detail. Read more about the UTXO Account model here: (*internal link to utxo*)

    **Amount**

-   Amount of IOTA sent and current value in chosen Profile currency

    **2 different charts**

-   **Wallet Value** and **Wallet activity** also provide a graphic overview of the activities in this wallet.

### Send and Receive Transactions

-   The Send and Receive functions are available in the main Wallets dashboard, and also in every Wallet detail view.

    **Receive**

<!---->

-   Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the Wallets the incoming funds should be received. The receive address of the selected Wallet is displayed as a QR Code and as a written address. The button `Copy Address` copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents. **The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.**

-   If a user has received, but not yet spent funds from that receiving address, the user can manually decide to generate a fresh receive address using the small "refresh" button above the QR Code. This function is an essential privacy feature that is a standard approach in Crypto to reduce the traceability of your balances

    **Send**

<!---->

- The Send function has two essential features: "Send payment" - which is a standard IOTA transaction where you type or copy in a full IOTA receive address in the form of `iotaxjdjfkfkldldd.......`. The user now defines the Wallet from where the tokens should be sent in a dropdown menu and the Number of Tokens to be sent. While defining the amount, a user may choose "Max" - which will send all the Tokens contained in the chosen wallet, or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different unit sizes (Mi, Gi,...). **Make sure that you are entering the token amount in the correct unit size.**
- To initiate the transaction now, the user has to enter the stronghold password which confirms and signs the transaction. After this, the following steps are performed by the wallet to deliver the transaction to the recipient:
- **"Syncing Wallet"** - establishing the connection to the IOTA Ledger,
- **"Performing PoW"** - a tiny amount of PoW is performed by the device of the user,
- **"Broadcasting transaction"** - sending the signed transaction to the connected node,
- **"Transfer complete"** - confirmation that the transaction is accepted and included in the Ledger.

This whole process happens in just a few seconds.

If you send and receive funds, they will always be organized under the wallet that you used to send or receive, so it is easier to keep track if you have a lot of transactions going on.

## User Guide for users of a Ledger Nano X or Ledger Nano S device

Firefly is available on Windows, Mac, and Linux and now supports Ledger Nano X and Ledger Nano S via USB connection. The Ledger Nano integration is straightforward and similar to using Firefly with a non-Ledger profile. This guide serves as an additional resource to help you understand how you can use your Ledger to secure your tokens with Firefly and what you need to be aware of when you perform certain actions while using the wallet.

### What is a Ledger Nano?

[Ledger Nano](https://www.ledger.com/) is a hardware device that connects to your computer via USB (other models are available with Bluetooth support but this is not currently supported in Firefly). When you set up your Ledger Nano, you are instructed to safely store a recovery phrase. This recovery phrase is used by the device to sign transactions and generate addresses. It is not possible to extract the recovery phrase (or private keys generated from it) from the Ledger device. So it is important to keep your recovery phrase stored safely. The hardware device creates a boundary between your computer and the private keys needed to access your funds. It provides a level of security that is simply not possible with software alone.

### Before you start, make sure:

- 1.) You have [initialized](https://support.ledgerwallet.com/hc/en-us/articles/360000613793) your Ledger device.
- 2.) The latest firmware is [installed](https://support.ledgerwallet.com/hc/en-us/articles/360002731113).
- 3.) Ledger Live is [installed and ready to use](https://www.ledger.com/ledger-live/download).
- 4.) You have installed the latest version of Firefly

### Install the IOTA app on your Ledger device

- 1.) Open the Manager tab in Ledger Live.
- 2.) Connect and unlock your Ledger device.
- 3.) Follow the onscreen instructions and Allow Ledger Manager.
- 4.) Find and install IOTA (MIOTA) in the app catalog.

### How to set up a Ledger Nano with Firefly

Note: If you are an existing IOTA user and secured IOTA with a Ledger before the Chrysalis network upgrade on 28 April 2021, you will need to migrate your tokens over to the new network before you can begin using Firefly. There is a comprehensive written guide and a video guide to help you through the migration process.

### Creating a new Ledger profile

Creating a new Ledger profile in Firefly is very quick and simple. Once you have downloaded Firefly, open the app and follow the setup instructions. You first need to review and accept the terms and conditions, set a theme (dark or light), and choose a profile name. Select "Create a new wallet".

![setup a wallet ledger](/img/learn/firefly/setup_a_wallet_ledger.png)

Press "I want a hardware wallet" to begin the Ledger profile setup process.

![create a wallet ledger](/img/learn/firefly/create_a_wallet_ledger.png)

On the next page, you will be asked to set a PIN code. This PIN is used to log in to your wallet and blocks other people from logging in and viewing your balance transaction history. Choose a PIN that only you know. Re-enter your PIN on the next page to confirm.

![set pin ledger](/img/learn/firefly/set_pin_ledger.png)

Now, Firefly will check that your Ledger Nano is connected. Make sure the IOTA app is open on your device and that Ledger Live is closed. If you have connection problems follow the "Tips if your Ledger isn't connecting" guide in Firefly.

![connect ledger ledger](/img/learn/firefly/connect_ledger.png)

Hit "Continue", and that's all there is to it. It really is that simple. You can now enter the dashboard and begin exploring Firefly.

![setup complete ledger](/img/learn/firefly/setup_complete_ledger.png)

### Receiving tokens

If you would like to receive funds to your new Ledger profile you can press the "Receive" button on the dashboard.

![generate address ledger](/img/learn/firefly/generate_address_ledger.png)

On this page you can select "Generate address" and Firefly will prompt you to confirm the address matches the one displayed on your Ledger device.

![confirm receive address ledger](/img/learn/firefly/confirm_receive_address_ledger.png)

Scroll through the address on your Ledger device. Confirm it matches by pressing both buttons when your Ledger reads "Ok".

Note: This is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the address you receive to and that it matches the one generated by your Ledger.

![display ledger address](/img/learn/firefly/display_ledger_address.png)![okay ledger display](/img/learn/firefly/okay_ledger_display.png)

You can now copy the address and share it with a friend or exchange from which you wish to receive tokens. Always make sure the address is the same as the one displayed on your Ledger device.

![wallet view ledger](/img/learn/firefly/wallet_view_ledger.png)

### Sending tokens

Once you have received tokens to an address, your balance will update and you will be able to view the transaction in the transaction history. To send these tokens, press the "Send" button from the dashboard. Here you can fill in the address you want to send to, enter an amount, and hit "Send".

![send payment ledger](/img/learn/firefly/send_payment_ledger.png)

You will then need to confirm that the full transaction details match what is displayed on your Ledger device. In some cases, where you are not sending the total balance on your address, you will also need to approve a "Remainder address". Scroll through the transaction details on your Ledger. Confirm the details match by pressing both buttons when your Ledger reads "Accept". If they do not match press "Deny".

Note: As with generating addresses, this is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the contents of your transaction and ensures you are sending the right amount to the correct address.

![confirm remainder address ledger](/img/learn/firefly/confirm_remainder_address_ledger.png)![confirm transaction ledger](/img/learn/firefly/confirm_transaction_ledger.png)![dispaly amount ledger](/img/learn/firefly/dispaly_amount_ledger.png)![display accept ledger](/img/learn/firefly/display_accept_ledger.png)

### Creating wallets and sending internal transfers

Firefly makes it possible to organize your tokens into different wallets within your profile. These tokens are kept separate from one another. Technically speaking, they are stored on addresses generated on different sub-accounts on your Ledger. Press "Create" from the dashboard and choose a name to add another wallet.

![multiple wallet view ledger](/img/learn/firefly/multiple_wallet_view_ledger.png)

With multiple wallets, you can then send between them and split your tokens up to organize them however you like. You can select "Internal Transfer" from the Send view and select which wallet you would like to send to.

Note: Your most recently created wallet must receive funds (i.e. not be empty) before you can create a new one. This ensures that your wallets can be more smoothly recovered if you need to restore your Ledger profile on a new device.

![choose send from wallet ledger](/img/learn/firefly/choose_send_from_wallet_ledger.png)

### Restoring an existing Ledger profile

If you need to restore an existing Firefly profile with a new device, or you somehow lose access to Firefly, you can plug in your Ledger and restore an existing profile in a few simple steps. To do so, select "Migrate or restore a wallet" in setup and then "I have a Firefly Ledger backup".

![setup a wallet1 ledger](/img/learn/firefly/setup_a_wallet_ledger.png)![create a wallet1 ledger](/img/learn/firefly/create_a_wallet_ledger.png)

Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

### Adding a second Ledger device to Firefly

It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device.

![ledger multiple profile view](/img/learn/firefly/ledger_multiple_profile_view.png)

# Firefly FAQ

## Setup and installation

### I’m worried I might make a mistake when setting up Firefly!

Don’t worry! All you need to do is download Firefly only from the official website for your preferred OS and start the setup. The application has been designed to guide you through setting up your profile, securing it, and migrating your tokens successfully.

### How do I back up my seed?

IOTA now uses a 24-word mnemonic or a recovery phrase. After 28 April 2021, like with other cryptocurrencies, all you will need are 24 words to recover access to your tokens on the Tangle. You will be able to backup your recovery phrase using the recovery kit you create when you set up your wallet. By saving a file and writing it down, you will have captured the 24-word recovery phrase in a safe location.

This physical paper backup is recommended as computers can fail.

Hardware wallets such as the Ledger will be supported soon after the initial migration period.

### What is Stronghold?

Stronghold is a secure software implementation developed by the IOTA Foundation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks. It uses versioned, file-based backups (with the file extension .stronghold) with double encryption that can be easily backed up and securely shared between devices. You can read more about Stronghold here!

### I have lost access to my device! How do I recover my wallet?

There are several ways to recover your wallet, and both can be found in the backups you performed in the wallet setup! One way would be using your 24-word recovery phrase, while the other would be using the Stronghold file you backed up.

### Do I need to have both the Trinity wallet installed on my computer as well as Firefly?

No, you don't need Trinity anymore. Just connect your Ledger to your computer and open Firefly. The new Firefly Wallet will lead you through all steps.

### Do you plan to support Trezor or other hardware wallets?

We do not currently have any plans to support Trezor but if a community member would like to work on the integration then please contact Charlie#0123 on our Discord.

### Which Ledger hardware do you support?

Both the legacy and new IOTA apps are supported on Ledger Nano S/X via USB connection. Additionally, the legacy app works with the Ledger Blue. Since official support is no longer provided for the Blue by Ledger, Blue can only be used for migrating funds.

### Do I need to install the Ledger app on my computer? Where do I download this?

You can install both the new and legacy applications by downloading and installing Ledger Live. After making sure your firmware is up-to-date, both IOTA apps can be installed to your Ledger device directly from Ledger Live in the Manager tab.

### I don’t have my original Ledger USB cable anymore. Will this be a problem?

Most Micro-USB (for Nano S) and USB-C (for Nano X) cables should work. We do recommend using the original cable though.

### Do I need to update my Ledger firmware before I can use it with Firefly?

Yes, without the current firmware the legacy and the new applications may not be visible in Ledger Live. Make sure you have the latest versions of both apps on your device.

### I don’t have my original Ledger device that I used when I first set up Trinity. Will this be a problem?

The 24 words mnemonic (also known as the recovery phrase) and your Trinity account index (default 0) are all you need to regain access to your tokens on the IOTA Tangle. The tokens are in no way connected to the hardware itself. You can set up a new device with the same recovery phrase to access your tokens.

### Does it matter if I am using a Nano S or Nano X? Will the process be the same?

Yes, the migration process will be the same.

### I have run out of space to install more applications on the Ledger. What should I do?

If you’re short on space, you may need to temporarily remove other cryptocurrency applications from your Ledger device. This will have no impact on the corresponding cryptocurrencies. After reinstalling the apps, they will be available again. You should refer to the official Ledger support site if you need more help.

### Do I need to keep the IOTA Legacy app installed on my Ledger Nano after I have finished migration?

Once you have safely migrated all your account indexes to Firefly, the Legacy IOTA app will no longer be needed. Follow official Ledger guidance on how to remove Ledger Nano apps with Ledger Live.

## Backups and recovery

### I have the seed words (recovery phrase) but don't remember the password; what can I do?

The recovery phrase works without a password or PIN! Just input the words at the wallet set up, using the 'I have a text backup' option.

### Why should I do regular Stronghold backups?

Seed migrations can be made after the migration period ends, at least until Coordicide.

### I found an old seed from Trinity, how can I access these funds now that the migration period has already finished?

Performing regular Stronghold backups will allow you to keep convenient, up-to-date digital backups should something happen, where you would then have a complete recovery of your funds.

### What is an internal transfer? Is it different from a normal transaction?

An internal transfer is the same as a normal transaction, it’s just made between your own wallets; it's also handled entirely on the Tangle. Here, it's simply easier to perform as the address doesn’t need to be input by you!

### I have forgotten my device pin. How do I recover my Ledger?

Should you forget the Ledger PIN, you can reset and restore the Ledger using the 24-word recovery phrase.

### How do I backup my Ledger transaction history?

Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. When a Ledger profile is restored, Firefly will sync your available transaction history. It may not find all transactions but it will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

### Are the 24 words previously found in the Ledger and are now in Firefly for the same seed?

The 24 words mnemonic, also known as the recovery passphrase, work in Firefly as both reflect the BIP39 standard. It is strongly recommended never to enter your recovery phrase anywhere other than your Ledger. This defeats the security benefits of having a Ledger.

### Can I save a Stronghold backup in Firefly for a Ledger Profile? If yes, does this contain my Ledger Seed?

Strongholds are not used for Ledger profiles in Firefly.

### Can I put my 24 words from the Ledger into Firefly to see / use my funds with Firefly?

Yes you can, but you shouldn’t, because it circumvents the hardware wallet security model completely and is therefore strongly advised against!

### If I follow the Ledger migration procedures, can I migrate the Ledger accounts that have been created with the 25th “word” passphrase?

The 25th word can be used with your Ledger and Firefly will still find your tokens.

## Profiles and wallets

### What are profiles in Firefly?

Profiles in Firefly are representations of your IOTA seed and contain all of your balances on different wallets. They also include general information such as your language and currency preferences and system notifications.

### What are wallets in Firefly?

Wallets in Firefly are like a bank account and a personalized stock portfolio all in one! And in that sense, wallets always belong to a specific profile of your Firefly application. You can view your wallet balance and transactions, send and receive funds instantly, measure your wallet and token value over time, and check your wallet activity by month!

### Can I change profile names after I created the profile?

No, you cannot change a profile name after creating a profile just yet. But you can add a profile with your preferred name and populate it near-instantly with your preferred wallet(s), security, and other such information.

### Can I change wallet names after I created the account?

Yes! You can change your wallet name by clicking on the ellipses (three dots in a row) next to your wallet balance which will give you the “Customise wallet” option. There, you can change the name of the wallet you are currently in!

### What is “resync wallet”? Why do I need it, and what happens when I resync my wallet?

Resyncing your wallet starts a background task that makes sure all of your wallets are up to date; you would need it to ensure your wallet is correct so you can conduct the everyday functions of Firefly without issues!

### I want to delete a wallet; what happens to the funds in that wallet?

Wallets can only be deleted after your funds have been moved out of your wallet. So, you would need to send your funds from that wallet to another address.

However, an empty 0 balance profile can be deleted.

### I want to delete a profile; what happens to the funds in that profile?

If you want to delete a profile it is recommended that you first transfer your funds to a different profile. You need to make sure you have a backup for all of your wallets. If you delete a profile without a backup or recovery phrase, you will lose access to your IOTA!

### Why do I need to confirm the receive address against one displayed on my Ledger device?

This function is in place to confirm that the receiving address hasn’t been manipulated by malicious software or by a man-in-the-middle attack. Make sure you always double check it matches what is displayed on your device.

### Can I have a “Ledger Wallet” under my normal Firefly Profile, or do I need to set up a completely new Profile for Ledger?

Every seed and Ledger has its own Profile in Firefly. You need to create a new Firefly profile for every Ledger device you own.

### How can I easily switch from one Profile to another? Do I need to sign out each time?

It is possible to change Profiles. And yes, it is necessary to log out from one Profile and log in to another with your PIN.

### Is it a bad idea to use the same PIN for Firefly as I do for my Ledger device?

Yes, it is a bad idea. Like with websites, where security experts generally recommend that you use strong, unique passwords for each of your accounts, it is suggested to use unique PINs for Firefly and the Ledger device.

### Where are my tokens located exactly if they are not on my Ledger device nor on my computer?

Since the Tangle is a distributed ledger, no one actually “holds” IOTA tokens in their wallet. The wallet controls the private keys.

A private key is like a secret passcode that is needed to transfer ownership of IOTA tokens on the Tangle. The private keys give the power to alter the Tangle record by authorizing an ownership transfer from one address to another. That transaction gets recorded in the Tangle.

To go a level deeper, IOTA tokens are, at their root, numbers: amounts that are assigned to IOTA addresses. For every private key, there are one or more public keys (which are translated into IOTA addresses).

The private key belonging to that corresponding public key is the secret code needed to “spend” IOTA tokens.

You can think of the Firefly wallet like a password manager. Password managers store and secure the secret passwords you need to access websites, rather than the content of the websites themselves.

In this way, your Firefly wallet is essentially a key manager!

For Ledger, your private keys are stored on the device and can never be extracted.

## Transactions

### Can I use my own node to process my transaction?

Yes! You can use your own node to process your transaction if it is accessible over https.

### How can I reattach transactions?

There is no need to do this anymore!

### I accidentally sent funds to the wrong address, can I get them back?

There is no way to recover funds accidentally sent to the wrong address.

### Why can I not send less than 1Mi?

Because there is a minimum requirement of 1Mi due to the IOTA protocol’s dust protection. In a later version Firefly will enable a feature that allows you to send less than 1Mi.

### How can I send data transactions with Firefly?

You cannot send data transactions with Firefly at this point in time.

### Where can I see my transaction history?

Your transaction history is broken down within your wallets. When you select “Wallets” from your dashboard, you will see a column with all of the transactions you made within the respective wallet.

Additionally, there is an extra function, “Wallet history” found in the ellipses (three dots) next to the “Wallet balance” of your Wallet page.

### How do I find a specific transaction that I did send/receive; I only know the day when it happened, is there a search function?

There is no search function in Firefly.

### What is a deep link, and how do I use it?

Deep Links are not available in the first version of Firefly. Deep links automatically fill transaction data in Firefly when you click on an “iota://” link.

### Can I have a fixed receive address?

Yes, you can have a fixed receive address! Simply copy an address from Firefly and store it somewhere. You can safely receive to an address as much as you like but it is recommended to use new addresses for better privacy.

### Why do I need to confirm my transaction on the Ledger device against the one displayed in Firefly?

The Ledger Nano S/X shows you the transaction details before asking you to confirm. It then signs the transaction.

It is very important that the addresses and values match those displayed by Firefly. This is to prevent man-in-the-middle attacks.

You should thoroughly verify them before confirming the transaction.

## Settings

### Where can I change my PIN and password?

You can change both your PIN and password under “Security” found in the “Settings” of your dashboard.

### Can I reuse an address? I know in Trinity, this was always a problem.

Yes, you can reuse an address in Firefly due to the EdDSA reusable address format.

### Can I create NFT’s or other digital assets in Firefly?

You cannot create NFT’s or other digital assets in Firefly at this time.

## Troubleshooting

### How do I recover a PIN code?

If you have lost your PIN, you need to create the profile again from a backup (recovery phrase or a Stronghold file) to re-access the profile. Afterward you will create a new profile with a new PIN.

### I have my backup file, but don't remember the password. How can I recover my funds?

Without the password, you will not be able to recover your funds using the backup file. It is possible to access your funds using the recovery phrase and setting up a new profile in Firefly. However, your Firefly settings and history are lost by doing so.

### I received an error; what can I do?

For any issues or errors, you can report to this github page: https://github.com/iotaledger/firefly/issues

### I received an error: “client error: { }”, what does it mean and what can I do?

For any issues or errors, you can report to this github page: https://github.com/iotaledger/firefly/issues

### I received an error: “operation timed out”; What does it mean and how can I solve it?

For any issues or errors, you can report to this github page: https://github.com/iotaledger/firefly/issues

For those who have more than one seed; can we replicate this process with every seed we have? Or do we need to transfer all tokens to one seed in order to migrate to the new network? You can import multiple seeds in Firefly. But this process must be replicated for every seed you own. Each seed will be imported into a new profile.

### Can I buy IOTAs directly in Firefly?

You cannot buy IOTAs directly in Firefly at this time. You can visit the IOTA website for more information about buying IOTA from an Exchange.

### Why won’t Firefly connect with my Ledger? Also, My IOTA application always closes after a couple of seconds each time after opening it. Why is this?

If your Ledger is already connected and unlocked, make sure that you have closed the official Ledger Live application or browser plug-ins that might use the Ledger (e.g. MetaMask). Then make sure Ledger Live is not running silently in the background. Firefly cannot communicate with Ledger hardware if the Ledger Live software is open at the same time. Firefly also provides a guide during setup to help with connection issues and you can read the official Ledger guide here.

### Finding balances keeps stalling, why is this?

If your Ledger device does not show “Generating address…” while finding balances then try disconnecting and reconnecting the device. In rare cases, where you used an old version of the legacy app you may need to uninstall and reinstall the legacy app. Return to Ledger Live and reinstall this application on your Ledger device and try again.

### Why does my balance keep showing zero?

Firstly, you can try “Check again” to search for more addresses with balance.

If your balance continues to display as 0, you may have selected the wrong account index number. The default account index number is 0, but it is possible to change this from 0-2147483647. If this was changed during your Trinity Ledger setup, you may wish to try alternative account indexes to reveal your funds.

### What happens if my computer falls asleep or restarts during the migration process?

First, check if the migration is still in progress. If it is, then it should complete on its own. Alternatively, you can check if you have a profile for that migration as it may have already completed. If there are no profiles associated with the migration, you can simply create a new profile to start the migration again. If there is a profile but the full set of migration transactions are not there, go to Advanced Settings and select Migrate Another Index. You can continue where you left off by selecting the same account index and searching for more balance.

## Migration

### What if something goes wrong while I migrate? Who do I contact?

If any part of the process is aborted or fails, it can be redone! If something still goes wrong, reach out to the #help channel on discord for community support.

IMPORTANT: Never share personal information regarding the amount of tokens you own, their type, or where and how you keep them, how you secure them including passwords, recovery passphrases, and user names of wallet accounts or exchanges. Do NOT share that information with anyone - including members of the IOTA Foundation.

Read more about Chrysalis “Security During Token Migration” [here](https://blog.iota.org/security-during-token-migration/).

### If I have multiple addresses associated with one seed, will the Chrysalis migration send all of my tokens to one address?

Yes, Firefly will send your funds to one address in migration.

### I have lots of addresses with less than 1Mi balance. What should I do?

Firefly will attempt to consolidate all of your funds but there is a chance some dust (<1 Mi) is lost. If you have lots of addresses with funds <1Mi it is recommended you first consolidate your balance in Trinity before April 28th, 2021.

### In Chrysalis will it be possible to migrate a seed for which all the addresses sum to less than 1 Mi?

Seeds with <1 Mi balance in total will not be able to migrate. We recommend sending all of those small balances to a seed with a balance of >=1 Mi to migrate.

### Will the Firefly mobile app be available upon Chrysalis release or do I have to migrate on PC?

For now, the migration will be done via PC. Once Chrysalis is complete, we will shift our focus to the mobile app!

### I have 20 addresses on my Ledger Nano S. Is that a problem? I heard about this memory problem where only 2 addresses can be emptied at once.

The migration will bundle addresses together to avoid issues. Have a look at this article by the IOTA community for further information about how to consolidate your tokens.

Firefly will attempt to consolidate all of your funds but there is a chance some dust (<1 Mi) is lost.

### What are the tax implications of the migration?

Tax regulations are different from country to country. Contact your local tax office or a tax consultant for the exact handling in your country.

### How do I migrate more than one Trinity account index?

If you want to migrate more than one account index, you will need to manually go through the indexes one by one and migrate them. Once you have completed migration for one index, you will be prompted to migrate another index on the same profile. Each migration is sent to a separate wallet within the same Firefly profile.

You can also migrate additional indexes by going to the Advanced Settings in your dashboard and choosing Migrate Ledger Index. This will migrate the funds to the same profile.

### The balance that is shown is less than the balance I have on my Ledger, what can I do?

Firefly provides an option to “Check again” to check more addresses for balance. If the balance is 0 and cannot be found by checking again multiple times, it is likely that you selected the wrong account index.

### Why does it say my “Funds are at risk” during migration?

In the old legacy network it was a risk to send funds from the same address more than once. If you see this message, Firefly will guide you through a process to help secure those addresses before migration. You can read more about spent addresses here.

### What is Bundle mining?

If you have spent addresses, it means you accidentally received funds to an address that was already spent from and these funds are not safe to send again due to W-OTS.

To secure your spent addresses during the migration, Firefly will try to find a new bundle that reveals the least amount of additional private key parts compared to previous signs.

This process will take 10 minutes per spent address and upon completion you will be presented with a risk calculation (very high, high, medium, low, very low). It is recommended that you repeat the process if it returns a bundle with medium risk or higher, particularly for significant sums of IOTA. You have the option to select which addresses you want to mine for and again which you want to rerun the process for.

## Spent Addresses

### What are spent addresses and why are they dangerous?

In the original IOTA network, IOTA used Winternitz One Time Signatures (W-OTS) - think of these as, more or less, an authenticator and validator for a transaction. These keys and signatures are highly secure against malicious attacks for signing transactions. But, on the downside, by signing a transaction, W-OTS reveals parts of a private key for the specific address tokens are being spent from.

With W-OTS every time a signature is signed to spend tokens from a particular address, any remaining tokens need to be moved onto a new address to prevent malicious actors from brute-forcing (trial-and-error guessing) the remaining parts of the private key for the address. That’s the main reason why this signature scheme is considered to be a “one-time signature”.

So after the Chrysalis update, we are using the Ed25519, based on the EdDSA, scheme instead of W-OTS. The advantage is that the new scheme addresses all of the issues that W-OTS originally had, where Ed25519 verifies both single-signature and batch verification (taking care of the left over/remaining tokens) very quickly as well as faster key generation and smaller signatures (very secure).

https://chrysalis.docs.iota.org/faq.html

### Why is it not possible to migrate some of my tokens?

If you have lots of small amounts (<1Mi) spread across lots of addresses it may not be possible to migrate these as there is a minimum requirement of 1Mi for a successful migration due to our dust protection. In this case, it is not possible to migrate a seed with less than 1Mi. It is recommended you consolidate your funds in Trinity first by simply sending your full balance to yourself.

### Why does Firefly keep telling me the same risk rating?

In rare cases, Firefly will conduct what we call “bundle mining” because of your spent address(es). When attempting to proceed with the migration, Firefly will spend a few minutes trying to find a safe bundle for the address(es) so you can migrate tokens safely.

Once the security check completes, you can choose to rerun the process (which may lower your risk level) or continue the migration process once you feel satisfied.

However, it is difficult to improve the security of the bundle in some cases. You may rerun the process as many times as you like, but some spent addresses are very difficult to lower the risk for. You can keep trying or you can migrate anyway and accept the risk involved.
