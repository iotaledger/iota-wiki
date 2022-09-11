---
title: Firefly user guide
description: User guide for standard Firefly software wallet users. We explain every function here for you.
---

## User guide for standard users

### Account Structure

Firefly's basic account-handling logic works as follows:

- One Firefly **profile** is always the representation of one **IOTA seed**
- Every Firefly **profile** can host an unlimited amount of **wallets,** which can be seen as sub-accounts under the one **profile seed**.

### Profile Setup

Every **profile** receives a unique IOTA Seed consisting of a **24-word mnemonic phrase** created with the `BIP39 Standard`. During the profile creation, these 24 words will be shown to the user **only once** and the user must make sure to back up these 24 words. We highly recommend creating a paper wallet as a physical backup for these words. Losing the words will potentially result in losing access to the profile and the funds connected with the seed. To make sure that the user has created a backup of the 24 words, a check is done during setup, which requires adding all the 24 words in the correct order by the user.

After the user has received the 24 seed words the user can also create a **Stronghold file** as a digital backup of the profile. This file also contains the securely encrypted seed and setup information for the profile. We strongly recommend storing this file in several independent locations (such as a USB stick or Cloud storage). Should the 24 words somehow be lost, it will be possible to restore a profile with this file. To use the file, the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password will the Stronghold file restore the profile. It is therefore essential that the user also securely store the password to this Stronghold file.

Next, the user creates a PIN code as an easy access method to the Firefly wallet interface. This PIN code is required to enter the profile dashboard but does not grant access to functions that handle or move the user's funds or give access to the security settings of the wallet. For these actions that require a higher level of security, the user needs to enter the Stronghold password. Only this password gives access to the full functionality of the wallet.

If different users aim to use the same Firefly wallet app, or if you have IOTA tokens on multiple seeds, you need to create a new profile for every seed/every user.

**Key takeaways:**

- **Securely back up the 24-word mnemonic phrase – it is your IOTA seed!**
- **Securely store your Stronghold backup file and the Stronghold password!**
- **Store it in multiple independent locations, both digitally and physically!**

### Firefly Dashboard

![dashboard](/img/learn/firefly/dashboard.png)

The Firefly dashboard is the main overview of a user profile. Easily accessible information on the spot and the most common functions – "send" and "receive" – ordered in a clear layout. Here, users are shown the total profile balance, the different wallets that belong to the profile, and a list of the latest transactions. IOTA price or profile value is shown in a handy chart, and the basic security info of the profile is displayed.

## Wallets

Wallets are sub-accounts to a seed (profile). It may be a convenient way to have several of them for different occasions. Users could have a "long-term hold" and a "spending" wallet, or a wallet where they receive payments, another one in which only donations are received, etc. Users are free to set them up as they wish. To create a new wallet, simply use the "+" sign in the `My Wallets` section of the dashboard. Assign a name for the wallet, confirm the creation with your Stronghold password, and the wallet is all set to receive funds.

Wallets contain a collection of addresses and those addresses are grouped under this wallet to help users keep their addresses organized.

It is important to mention here that users can only set up further wallets if the first wallet already contains funds. If users want to set up five different wallets, they need a small amount of IOTA in every newly created wallet before another one can be created.

### Wallet Detail View

![wallet detail view](/img/learn/firefly/wallet_detail_view.png)

A click of the mouse on one of the wallets in the dashboard overview opens the Wallet Detail Screen. Here users see the balance contained in this specific wallet and have the option to send and receive transactions.

Next to the send and receive section, an overview of all the transactions related to this specific wallet is shown. Small icons indicate if a send or receive transaction has been completed internally (to another wallet of the same profile) or externally.

Also, you have will find **three small dots** next to the wallet balance.

Clicking on those dots opens a pop-up menu.

In this pop-up menu you can enter the following functions:

**Customize Wallet**

- Gives the possibility to change the name of wallet.

**View Address History**

- A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.

**Hide Wallet**

- Empty wallets can be hidden to keep your main wallet overview organized. If a wallet still contains funds, you will not be able to hide it by clicking this option but will be offered to transfer the funds to another wallet and hide the wallet afterward. A hidden wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.

#### Transaction detail view.

![transaction details view](/img/learn/firefly/transaction_details_view.png)

The following information about the transaction is displayed:

- A transaction flow that indicates: **from where > token amount > to where,** followed by:

**Status**

- Confirmed or pending status of the message

**Date**

- Date and time when the transaction was issued or received (in local System time)

**Message ID**

- The unique identifier of this specific message (every transaction in IOTA is a message) in the IOTA Ledger.

**Send Address**

- The address from where the transaction was initiated

**Receive Address**

- The address on which the tokens of this transaction have arrived. Several different receive addresses may be shown in this view. The addresses belonging to you are highlighted with the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. These are normally the addresses of the sender. To these addresses, the remaining funds that have not been used from the sender's address are transferred. This is related to the UTXO (unspent transaction output) Account model in IOTA.
- If a transaction is issued from a UTXO output (an address holding funds) that does not consume all funds that are part of this output, one transaction moves the funds that are planned to send away from the address, and a second transaction moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the message and therefore shown in the Transaction detail. Read more about the UTXO Account model [here](/IOTA-2.0-Research-Specifications/5.1UTXO/).

**Amount**

- Amount of IOTA sent and current value in the chosen profile currency

**Two different charts**

- **Wallet value** and **wallet activity** also provide a graphic overview of the activities in this wallet.

### Send and Receive Transactions

- The send and receive functions are available in the main wallet's dashboard, and also in every wallet detail view.

**Receive**

- Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the wallets the incoming funds should be received. The receive address of the selected wallet is displayed as a QR code and as a written address. The button `Copy Address` copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents. **The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.**
- If a user has received but not yet spent funds from that receiving address, the user can manually decide to generate a fresh receive address using the refresh button above the QR code. This function is an essential privacy feature that is a standard approach in crypto to reduce the traceability of your balances

**Send**

- The send function has two essential features. The first is **send payment**, which is a standard IOTA transaction where you type or copy in a full IOTA receive address in the form of `iotaxjdjfkfkldldd.......`. The user now defines the wallet from where the tokens should be sent in a dropdown menu and the number of tokens to be sent. While defining the amount, a user may choose **max**, the second essential feature, which will send all the tokens contained in the chosen wallet or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different unit sizes (Mi, Gi, and so on). **Make sure that you are entering the token amount in the correct unit size.**
- To initiate the transaction, the user has to enter the stronghold password which confirms and signs the transaction. After this, the following steps are performed by the wallet to deliver the transaction to the recipient:
- **Syncing wallet**: establishing the connection to the IOTA Ledger,
- **Performing PoW:** a tiny amount of proof of work is performed by the device of the user,
- **Broadcasting transaction:** sending the signed transaction to the connected node,
- **Transfer complete:** confirmation that the transaction is accepted and included in the Ledger.

This whole process happens in just a few seconds.

If you send and receive funds, they will always be organized under the wallet that you used to send or receive, so it is easier to keep track if you have a lot of transactions going on.

## Firefly wallet staking instructions

Staking IOTA will only be possible in IOTA’s Firefly wallet and is not supported by any third party. To begin staking (after Tuesday, the 21st of December at 3PM CET), make sure that you have downloaded the latest version of the Firefly wallet on the [firefly.iota.org](https://firefly.iota.org) website, then complete the following steps:

First, log in to your profile by entering your PIN and continue to navigate to the brand new staking tab.

![image](https://user-images.githubusercontent.com/77154511/147533205-50bf67a6-e24c-4e7a-a4b8-67e824b8e9c1.png)

Here you will either be able to “pre-stake” or “stake your tokens” (depending on which staking phase you are accessing your wallet). The pre-staking phase is a seven-day period before staking rewards begin on the 28th of December at 3PM CET, giving users ample time to decide on which staking event they want to take part in before staking starts. It also guarantees that users who want to stake IOTA tokens do not miss the start. Once the seven days are over, you will begin to receive staking rewards in your wallet.

Each wallet of a user profile must be staked separately. When you mark IOTA tokens for staking, a transaction is sent to you with attached metadata to indicate that you wish to stake with the marked funds. Any funds staked in a given wallet will be sent to an address on the same wallet, requiring tokens in every wallet to be individually marked for staking.

![image](https://user-images.githubusercontent.com/77154511/147533273-53c1b27c-8925-46d0-921d-7cc275a051e8.png)

To stake a wallet, simply hit the stake button and select which airdrops you wish to participate in. Please note that the wallet does not have to be open to receive the airdrops once you initiated staking.

![image](https://user-images.githubusercontent.com/77154511/147533318-ccc2f9b8-43d9-4023-8cf9-af46ea08d3fe.png)

Once you hit confirm, Firefly will issue the special staking transaction. Once this transaction has been confirmed, the user interface will update to show that you are now ready for staking!

![image](https://user-images.githubusercontent.com/77154511/147533354-7d3525ac-8ccd-44a5-bd7a-7067311fe6c3.png)

You can begin staking at any point after the official start of the reward distribution. Your rewards will simply be less, as you won’t be participating during the full token distribution period.

### Further important information for stakers

You can send your staked tokens from a staked wallet at any time. But if you do, you will need to manually restake any remaining tokens. Firefly will warn you if you try to send staked tokens. Due to dust protection, there is a minimum number of token rewards you must earn in order to receive the tokens when the networks launch. The minimum reward for Shimmer is 10,000,000 SMR. The minimum reward for Assembly is 1 ASMB. Firefly will inform you if you haven’t yet reached the minimum reward value.

If you receive additional funds on a staked wallet you will need to manually stake those tokens. Firefly will warn you if you receive tokens on a wallet that is already being staked from.
