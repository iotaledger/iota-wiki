---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it.
---


# The Firefly Wallet

The Secure Entrypoint to the IOTA Ecosystem.

Firefly is built with a bright future in mind. It will evolve into a tool that offers much more than being just a Software Wallet for your IOTA Tokens.
Firefly offers a modular design that makes it easy to add innovative new features later on.
IOTA’s new wallet guides you through the complexities of crypto, protected and with ease, while it is using cutting-edge technology to secure your tokens.

Some of the most important features:

-  Written in Rust

Rust offers security from the ground up – while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security.

-  Modular design

Firefly separates different functionalities – like seed storage, handling transactions, and cryptography – in module crates. A module crate groups related functions so that the functionality is easy to share between multiple projects that aim to use the same feature.

-  Secured with Stronghold

Sensitive actions like address generation and transaction signing take place in isolated application memory built upon the IOTA Stronghold library, keeping the seed away from potential attackers.

-  Crypto.rs

Crypto.rs combines all cryptographic algorithms used by many of the projects at the IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code.

Find more information on the official Website and download the Firefly Wallet only from there:

- **[Firefly](https://firefly.iota.org/)** - official Website

- **[Firefly Github Releases](https://github.com/iotaledger/firefly/releases)** - official Firefly GitHub Repo with the latest release Version



## Firefly Token Migration

With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, every IOTA Holder must migrate his entire Funds from the old IOTA 1.0 network to the new, much more improved, and advanced 1.5 network.
To make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network. 

The only thing you need to move your Tokens to the new network is your current IOTA 1.0 network Seed, represented as a combination of 81 characters, or a **`.kdbx seed vault file`** that you have backed up from the Trinity Wallet and the password that belongs to the file, or your Ledger Nano device.
With this information entered in the Firefly Wallet Migration Process, a fully automated migration will start and all your Funds will be moved securely into the new network. Upon completion, you will have access to them through Firefly from now on.
Read everything about the process here:

- **[Chrysalis Migration](https://blog.iota.org/the-chrysalis-token-migration-starts-now/)** - The Chrysalis network Migration process
- **[Firefly Migration Process](https://blog.iota.org/firefly-token-migration/)** - The whole Migration Process explained (non Ledger users)
- **[Ledger Nano Migration Guide](https://blog.iota.org/firefly-token-migration-guide-for-ledger-users/)** - The whole Migration Process explained for Ledger users
- **[Migration Security](https://blog.iota.org/security-during-token-migration/)** - Important advice for a safe Migration Process



## Useful Links
- **[Firefly Discord Channel](https://discord.com/channels/397872799483428865/748265907351978115)** - Discuss the Firefly Wallet, ask questions and engage with the IOTA community on Discord
- **[Firefly GitHub](https://github.com/iotaledger/firefly)** - Firefly codebase and development repository

<br/>

----

# **Firefly User Guide**

## User guide for standard users

### Account Structure

Firefly's basic Account handling Logic works like this: 

- One Firefly **Profile** is always the representation of one **IOTA Seed**

- Every Firefly **Profile** can host an unlimited amount of **Wallet's** which can be seen as Sub-Accounts under the one **Profile Seed**.

### Profile Setup

Every **Profile** receives a unique IOTA Seed consisting of a **24 words mnemonic Phrase** created with the `BIP39 Standard`. During the Profile creation, these 24 words will be shown to the user **only a single time** and the user must make sure to back up these 24 words. We highly recommend creating a Paper Wallet as a physical backup of these words. Losing the words will potentially result in losing access to the Profile and the funds connected with the Seed.
To make sure that the user has created a backup of the 24 words, a check is done during setup, which requires adding all the 24 words in the correct order by the user.

After the user has received the 24 Seed Words the user can also create a **Stronghold File** as a digital Backup of the Profile. This File also contains the SEED securely encrypted, and some setup Information of the Profile. We strongly recommend storing this file in several independent locations (USB Stick, Cloud storage,...). Given the case that the 24 words get lost, it is possible to restore a profile with this file. To use the file the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password, the Stronghold file will restore the Profile. It is therefore also essential for the user to store the Password to this stronghold file securely.

Further then, the user creates a Pin-code as an easy access method to the Firefly wallet Interface. This Pin Code is required to enter the Profile - Dashboard but does not grant access to Functions that handle or move the user's funds or give access to security settings of the Wallet. For all these actions that require a higher level of security, the user needs to enter the Stronghold Password. Only this password gives access to the full functionality of the Wallet.

If different Users aim to use the same Firefly Wallet App, or if you have IOTA Tokens on multiple Seeds, you need to create a new Profile for every Seed / every User.

**Key Takeaways:**

-  **Securely Back up the 24 words mnemonic phrase, it is your IOTA SEED!**
- **Securely store your Stronghold Backup File and the Stronghold Password!**
-  **Store it in multiple independent locations - digital and physical!**




### Firefly Dashboard

![image](https://user-images.githubusercontent.com/77154511/126114270-96c27168-6b49-4a57-95e4-c1ec1b057249.png)

The Firefly Dashboard is the main overview of a User Profile. Easily accessible information on the spot and the most common functions "Send" and "Receive" ordered in a nicely styled layout.
Users are shown the total Profile balance here, the different Wallets that belong to the profile, and a list of the latest occurred transactions. IOTA Price or Profile value is shown in a chart and also a section with the basic security info of the Profile is displayed.

## Wallets

Wallets are sub-accounts to a Seed (Profile). It may be a convenient way to have several of them for different occasions. Users could have a "long-term hold" and a "spending" Wallet. Or a Wallet where they receive payments, another one in which only donations are received, etc. Users are free in setting them up as they wish.
Using the little "+" sign in the **`My Wallets`** section of the dashboard creates a new Wallet. Assign a name for the Wallet, confirm the creation with the Stronghold password, and the Wallet is set to receive funds.

Wallets contain a collection of addresses and those addresses are grouped under this wallet to help users keeping their addresses organized.

Important to mention here: Users can only set up further Wallets if the first Wallet has already funds in it. So if Users want to set up 5 different Wallets they need a small amount of IOTA in every newly created Wallet before another one can be created.

### Wallet Detail view

![image](https://user-images.githubusercontent.com/77154511/126114427-df51d0e3-a44e-48e0-a4c6-f4050dcff379.png)

A mouse click on one of the Wallets in the Dashboard overview opens the Wallet Detail Screen. 
Here Users see the Balance contained in this specific Wallet and have the option to send and receive transactions.

Next to the send and receive section an overview of all the transactions related to this specific wallet is shown.
Little Icons indicate if a send or receive transaction was done internal (to another Wallet of the same Profile) or external.

Also, you have will find **3 little dots** next to the Wallet balance. 

**Clicking on those dots opens a popup menu.**

<img src="https://user-images.githubusercontent.com/77154511/126114811-d792208d-8d76-47d8-b1c3-0cff5cdc6a54.png" width="400" height="600"/>

- **In this popup menu you can enter the functions:**

- **Customize Wallet** 

- Possibility to change the Wallet name.

- **View address history**

- A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.

- **Hide Wallet**

- Empty Wallets can be hidden to keep your Main Wallet overview organized. If a wallet still contains funds you will not be able to hide it by clicking this option but will be offered to transfer the funds to another Wallet and hide the Wallet afterward. A hidden Wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.


#### Transaction detail view.

![image](https://user-images.githubusercontent.com/77154511/126114552-383a3f34-e665-46a7-a3d8-4e6277811ce3.png)

The following information about the transaction is displayed:

- A transaction flow that indicates: **from where > token amount > to where** followed by:

- **Status**

- Confirmed or Pending status of the message

- **Date**

- Date and Time when the transaction was issued or received (in local System time)

- **Message ID**

- The unique identifier of this specific message (every transaction in IOTA is a message) in the IOTA Ledger.

- **Send Address**

- The Address from where the transaction was initiated

- **Receive Address**

- The Address on which the tokens of this transaction have arrived. Several different receive Addresses may be shown in this view. 
The Addresses belonging to you are highlighted with the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. These are normally addresses of the sender. To these address the remaining funds that have not been used from the sender's address are transferred. This is related to the UTXO (unspent transaction output) Account model in IOTA.

- If a transaction is issued from a UTXO output (an address holding funds) that does not consume all funds that are part of this output, one transaction moves the funds that are planned to send away from the address, and a second transaction moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the message and therefore shown in the Transaction detail. Read more about the UTXO Account model here: (*internal link to utxo*)

- **Amount**

- Amount of IOTA sent and current value in chosen Profile currency


- **2 different charts**

- **Wallet Value** and **Wallet activity** also provide a graphic overview of the activities in this wallet.



### Send and Receive Transactions

- The Send and Receive functions are available in the main Wallets dashboard, and also in every Wallet detail view.

- **Receive**

<img src="https://user-images.githubusercontent.com/77154511/126114880-0ffeb841-22ef-4858-a096-47a3b4ab333d.png" width="400" height="600"/>

- Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the Wallets the incoming funds should be received.
The receive address of the selected Wallet is displayed as a QR Code and as a written address. The button **`Copy Address`** copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents.
**The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.**

- If a user has received, but not yet spent funds from that receiving address, the user can manually decide to generate a fresh receive address using the small "refresh" button above the QR Code.
This function is an essential privacy feature that is a standard approach in Crypto to reduce the traceability of your balances

- **Send**

<img src="https://user-images.githubusercontent.com/77154511/126115936-253f9e94-2cef-460f-9314-020b6843730d.png" width="400" height="600"/>

- The Send function has two essential features:
"Send payment" - which is a standard IOTA transaction where you type or copy in a full IOTA receive address in the form of **`iotaxjdjfkfkldldd.......`**. 
The user now defines the Wallet from where the tokens should be sent in a dropdown menu and the Number of Tokens to be sent. While defining the amount, a user may choose "Max" - which will send all the Tokens contained in the chosen wallet, or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different unit sizes (Mi, Gi,...). **Make sure that you are entering the token amount in the correct unit size.**

- To initiate the transaction now, the user has to enter the stronghold password which confirms and signs the transaction. 
After this, the following steps are performed by the wallet to deliver the transaction to the recipient: 

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

<img width="800" alt="Screenshot-2021-08-04-at-21 32 17" src="https://user-images.githubusercontent.com/77154511/128617942-08c86c2a-3fc9-4f9e-9fe9-7ae773b65447.png">

Press "I want a hardware wallet" to begin the Ledger profile setup process.

<img width="800" alt="Screenshot-2021-08-04-at-21 39 53" src="https://user-images.githubusercontent.com/77154511/128617963-b76ae3fc-2931-4ca9-9f3c-51658646f2da.png">

On the next page, you will be asked to set a PIN code. This PIN is used to log in to your wallet and blocks other people from logging in and viewing your balance transaction history. Choose a PIN that only you know. Re-enter your PIN on the next page to confirm.

<img width="800" alt="Screenshot-2021-08-04-at-21 40 46-1" src="https://user-images.githubusercontent.com/77154511/128617980-b0f4a8eb-13bc-4e73-9c91-db005ddd4744.png">

Now, Firefly will check that your Ledger Nano is connected. Make sure the IOTA app is open on your device and that Ledger Live is closed. If you have connection problems follow the "Tips if your Ledger isn't connecting" guide in Firefly.

<img width="800" alt="Screenshot-2021-08-04-at-21 44 15" src="https://user-images.githubusercontent.com/77154511/128617996-e5e93888-8d42-4096-97a1-e4d3d2ff044c.png">

Hit "Continue", and that's all there is to it. It really is that simple. You can now enter the dashboard and begin exploring Firefly.

![Screenshot-2021-08-04-at-21](https://user-images.githubusercontent.com/77154511/128618042-8a397e0b-4c66-40d9-8c66-4bd025f85205.png)

### Receiving tokens

If you would like to receive funds to your new Ledger profile you can press the "Receive" button on the dashboard.

<img width="800" alt="Screenshot-2021-08-04-at-21 59 43" src="https://user-images.githubusercontent.com/77154511/128618070-f18b484e-0d09-4998-8c07-6fd3bdc12612.png">

On this page you can select "Generate address" and Firefly will prompt you to confirm the address matches the one displayed on your Ledger device.

![Screenshot-2021-08-04-at-21](https://user-images.githubusercontent.com/77154511/128618080-90a2a676-c993-45e8-a3be-331cb01d1f9e.png)

Scroll through the address on your Ledger device. Confirm it matches by pressing both buttons when your Ledger reads "Ok".

Note: This is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the address you receive to and that it matches the one generated by your Ledger.

![Screenshot-2021-08-04-at-22](https://user-images.githubusercontent.com/77154511/128618097-a8c4dfcd-30ea-41f6-b908-5d9e6008ebb8.png)

<img width="454" alt="Screenshot-2021-08-04-at-21 52 53" src="https://user-images.githubusercontent.com/77154511/128618106-9f5e27fd-34a2-4614-ab9f-f3dd7a86149a.png">

You can now copy the address and share it with a friend or exchange from which you wish to receive tokens. Always make sure the address is the same as the one displayed on your Ledger device.

<img width="800" alt="Screenshot-2021-08-04-at-21 53 19" src="https://user-images.githubusercontent.com/77154511/128618113-a7dc3849-f0bb-4782-b7da-3473bfb4023b.png">

### Sending tokens

Once you have received tokens to an address, your balance will update and you will be able to view the transaction in the transaction history. To send these tokens, press the "Send" button from the dashboard. Here you can fill in the address you want to send to, enter an amount, and hit "Send".

![Screenshot-2021-08-04-at-23](https://user-images.githubusercontent.com/77154511/128618128-e04df52e-3b0d-40bc-b80b-098ac85d3b8d.png)

You will then need to confirm that the full transaction details match what is displayed on your Ledger device. In some cases, where you are not sending the total balance on your address, you will also need to approve a "Remainder address". Scroll through the transaction details on your Ledger. Confirm the details match by pressing both buttons when your Ledger reads "Accept". If they do not match press "Deny".

Note: As with generating addresses, this is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the contents of your transaction and ensures you are sending the right amount to the correct address.

![Screenshot-2021-08-04-at-24](https://user-images.githubusercontent.com/77154511/128618141-be152f66-a29f-4805-adf6-1846df0a2eb8.png)

![Screenshot-2021-08-04-at-25](https://user-images.githubusercontent.com/77154511/128618151-8471a7d6-77f5-4660-859c-d119bfad55d8.png)

![Screenshot-2021-08-04-at-26](https://user-images.githubusercontent.com/77154511/128618168-40279502-e1d9-4de6-9e11-18d0debc0c54.png)

![Screenshot-2021-08-04-at-27](https://user-images.githubusercontent.com/77154511/128618183-1c4e6a8e-9b3b-4550-b295-e8ea51c783d9.png)

### Creating wallets and sending internal transfers

Firefly makes it possible to organize your tokens into different wallets within your profile. These tokens are kept separate from one another. Technically speaking, they are stored on addresses generated on different sub-accounts on your Ledger. Press "Create" from the dashboard and choose a name to add another wallet.

![Screenshot-2021-08-04-at-28](https://user-images.githubusercontent.com/77154511/128618204-8e07d132-6d11-4745-9489-8f5d7bc5b7dd.png)


With multiple wallets, you can then send between them and split your tokens up to organize them however you like. You can select "Internal Transfer" from the Send view and select which wallet you would like to send to.

Note: Your most recently created wallet must receive funds (i.e. not be empty) before you can create a new one. This ensures that your wallets can be more smoothly recovered if you need to restore your Ledger profile on a new device.

![Screenshot-2021-08-04-at-29](https://user-images.githubusercontent.com/77154511/128618213-ba63c6ca-c524-423e-a5fa-d6b950881bad.png)


### Restoring an existing Ledger profile

If you need to restore an existing Firefly profile with a new device, or you somehow lose access to Firefly, you can plug in your Ledger and restore an existing profile in a few simple steps. To do so, select "Migrate or restore a wallet" in setup and then "I have a Firefly Ledger backup".

![Screenshot-2021-08-04-at-30](https://user-images.githubusercontent.com/77154511/128618222-b1a23572-45fa-44d7-94d8-41f0f348c50d.png)


![Screenshot-2021-08-04-at-31](https://user-images.githubusercontent.com/77154511/128618228-dd1c2ea8-fa5f-49a8-8a60-d75216e89123.png)

Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

### Adding a second Ledger device to Firefly

It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device.

![Screenshot-2021-08-05-at-00](https://user-images.githubusercontent.com/77154511/128618246-67f2949d-b1dd-4c16-a626-1e02679e0e23.png)



















