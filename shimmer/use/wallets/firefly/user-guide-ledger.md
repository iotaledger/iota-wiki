---
title: Firefly Ledger user guide
description: Firefly user guide for owners of Ledger Nano hardware wallets
---

Firefly is available on Windows, Mac and Linux and supports Ledger Nano X and Ledger Nano S via USB connection. The Ledger Nano integration is straightforward and similar to using Firefly with a non-Ledger profile. This guide serves as an additional resource to help you understand how you can use your ledger to secure your tokens with Firefly and what you need to be aware of when you perform certain actions while using the wallet.

## What is a Ledger Nano?

[Ledger Nano](https://www.ledger.com/) is a hardware device that connects to your computer via USB (other models are available with bluetooth support but this is not currently supported in Firefly). When you set up your Ledger Nano, you are instructed to safely store a recovery phrase. This recovery phrase is used by the device to sign transactions and generate addresses. It is not possible to extract the recovery phrase (or private keys generated from it) from the Ledger device. So it is important to store your recovery phrase safely. The hardware device creates a boundary between your computer and the private keys needed to access your funds. It provides a level of security that is simply not possible with software alone.

## Before you start, make sure

- You have [initialized](https://support.ledger.com/hc/en-us/articles/360000613793) your Ledger device.
- Ledger Live is [installed and ready to use](https://www.ledger.com/ledger-live/download).
- The latest firmware is [installed](https://support.ledger.com/hc/en-us/articles/360002731113).
- You have installed the latest version of Firefly

## Install the Shimmer app on your ledger device

- Open the Manager tab in Ledger Live.
- Connect and unlock your Ledger device.
- Follow the onscreen instructions and allow Ledger Manager.
- Find and install Shimmer in the app catalog.

### Creating a new Ledger profile

Creating a new Ledger profile in Firefly is quick and simple. Once you have downloaded Firefly, open the app and follow the setup instructions. You first need to review and accept the terms and conditions, set a theme (dark or light), then select "Create a new Shimmer profile".

![setup a shimmer profile](/img/learn/firefly/setup_a_shimmer_profile.png)

Press "Create a hardware profile" to begin the Ledger profile setup process.

![create a hardware profile](/img/learn/firefly/create_a_hardware_profile.png)

Choose a profile name. On the next page, you will be asked to set a PIN code. This PIN is used to log in to your wallet and blocks other people from logging in and viewing your balance transaction history. Choose a PIN that only you know and re-enter your PIN to confirm.

![set profile pin](/img/learn/firefly/set_profile_pin.png)

Now, Firefly will check that your Ledger Nano is connected. Make sure the Shimmer app is open on your device and that Ledger Live is closed. If you have connection problems follow the "Tips if your Ledger isn't connecting" guide in Firefly.

![connect ledger shimmer](/img/learn/firefly/connect_ledger_shimmer.png)

Hit "Finish Setup" and just wait for the dashboard to load. That's all there is to it. It really is that simple. You can now enter the dashboard and begin exploring Firefly.

![finish setup ledger](/img/learn/firefly/finish_setup_ledger.png)

### Receiving tokens

If you would like to receive funds to your new Ledger profile just click within the "Receive funds" button on the dashboard. Firefly will then copy the address to the clipboard.

![copied to clipboard](/img/learn/firefly/copied_to_clipboard.png)

You can now share it with a friend or an exchange from which you wish to receive tokens.

### Sending tokens

Once you have received tokens to an address, your balance will update and you will be able to view the transaction in the transaction history. To send these tokens, press the "Send funds" button from the dashboard. Here you can fill in the address you want to send to, enter an amount, and hit "Send". Review your transaction details and then hit "Confirm".

![send funds ledger](/img/learn/firefly/send_funds_ledger.png)

You will then need to confirm that the full transaction details match what is displayed on your Ledger device. Confirm the details match by pressing both buttons when your Ledger reads "Accept". If they do not match press "Deny".

![confirm send ledger](/img/learn/firefly/confirm_send_ledger.png)

Note: This is a security check to ensure that you are connected to the official, secure version of Firefly. It ensures that no malicious software can alter the contents of your transaction and ensures you are sending the right amount to the correct address.

![dispaly amount ledger](/img/learn/firefly/dispaly_amount_ledger.png)![display accept ledger](/img/learn/firefly/display_accept_ledger.png)

### Creating wallets and sending internal transfers

Firefly makes it possible to organize your tokens into different wallets within your profile. These tokens are kept separate from one another. Technically speaking, they are stored on addresses generated on different sub-accounts on your Ledger. To add a new wallet to your profile, navigate to the wallet summary view and press "Add a wallet". Choose a name for your new wallet and press "Create".

Note: Your Ledger device must be unlocked and the Shimmer app must be opened in order to generate an address for the new wallet.

![add wallet ledger](/img/learn/firefly/add_wallet_ledger.png)![new wallet name ledger](/img/learn/firefly/new_wallet_name_ledger.png)

With multiple wallets, you can then send between them and split your tokens up to organize them however you like. In the "Send funds" view you can now automatically choose other wallets on your profile to send to.

![multiple wallet send ledger](/img/learn/firefly/multiple_wallet_send_ledger.png)

### Restoring an existing Ledger profile

If you need to restore an existing Firefly profile with a new device, or you somehow lose access to Firefly, you can plug in your Ledger and restore an existing profile in a few simple steps. To do so, select "Restore Shimmer profile" in setup and then "Use Ledger device".

![setup a shimmer profile](/img/learn/firefly/setup_a_shimmer_profile.png)![use ledger device](/img/learn/firefly/use_ledger_device.png)

Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the Shimmer Tangle.

### Adding a second Ledger device to Firefly

It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device.

![multiple ledger profiles](/img/learn/firefly/multiple_ledger_profiles.png)
