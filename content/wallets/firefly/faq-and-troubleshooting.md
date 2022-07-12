---
title: Firefly FAQ
description: Frequently asked questions and helpful troubleshooting information for users of the Firefly wallet.
---

[Official website](https://firefly.iota.org/) | [User guide](/learn/wallets/firefly/user-guide) | [Ledger user guide](/learn/wallets/firefly/user-guide-ledger) | [Github](https://github.com/iotaledger/firefly)

## Setup and installation

#### I'm worried I might make a mistake when setting up Firefly.

Don't worry! All you need to do is download Firefly only from the [official website](https://firefly.iota.org/) for your preferred OS and start the setup. The application has been designed to guide you through setting up your profile, securing it, and migrating your tokens successfully.

#### How do I back up my seed?

IOTA Firefly now uses a 24-word mnemonic or a recovery phrase. Like with other cryptocurrencies, all you will need are 24 words to recover access to your tokens on the Tangle. You will be able to back up your recovery phrase using the recovery kit you create when you set up your wallet. You will have captured the 24-word recovery phrase in a safe location by saving a so-called `stronghold` file and writing the 24 words down.

This physical paper backup is recommended as computers can fail.

Hardware wallets such as the Ledger Nano X and S are also supported. In case you use a Ledger Nano device, all relevant security measures are taken by using your ledger device together with the Firefly Wallet. Ledger Seeds are only stored on the Ledger device and never revealed to you.

#### What is Stronghold?

Stronghold is a secure software implementation developed by the IOTA Foundation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks. It uses versioned, file-based backups (with the file extension .stronghold) with double encryption that can be easily backed up and securely shared between devices. You can read more about Stronghold [here!](https://blog.iota.org/iota-stronghold-beta-release/)

#### I have lost access to my device. How do I recover my wallet?

There are several ways to recover your wallet, and both can be found in the backups you performed in the wallet setup. One way would be using your 24-word recovery phrase, while the other would be using the Stronghold file you backed up.

#### Do you plan to support Trezor or other hardware wallets?

We do not currently have any plans to support Trezor, but if a community member would like to work on the integration, please get in touch with Charlie#0123 on our [Discord](/participate/the-community/discord).

#### Which Ledger hardware do you support?

The IOTA app is supported on Ledger Nano S/X via a USB connection. Additionally, the IOTA legacy app, which would be needed for a network migration process from the deprecated legacy network, works with Ledger Blue. Since official support is no longer provided for the Blue by Ledger, Blue can only be used for migrating funds.

#### Do I need to install the Ledger app on my computer? Where do I download this?

You can install both the new and legacy applications by downloading and installing Ledger Live. After ensuring your firmware is up-to-date, both IOTA apps can be installed to your Ledger device directly from Ledger Live in the Manager tab.

#### I don't have my original Ledger USB cable anymore. Will this be a problem?

Most Micro-USB (for Nano S) and USB-C (for Nano X) cables should work. We do recommend using the original cable, though.

#### Do I need to update my Ledger firmware before using it with Firefly?

Yes, the legacy and the new applications may not be visible in Ledger Live without the current firmware. Make sure you have the latest versions of both apps on your device.

#### I don't have the original Ledger device that I used when I first set up Firefly. Will this be a problem?

The 24 words mnemonic (also known as the recovery phrase) and your Firefly account index (default 0) are all you need to regain access to your tokens on the IOTA Tangle. The tokens are in no way connected to the hardware itself. You can set up a new device with the same recovery phrase to access your tokens.

#### I have run out of space to install more applications on the Ledger. What should I do?

If you're short on space, you may need to remove other cryptocurrency applications from your Ledger device temporarily. This will have no impact on the related cryptocurrencies. After reinstalling the apps, they will be available again. You should refer to the [official Ledger support site](https://support.ledger.com/hc/en-us/categories/4404369571601-Support?support=true) if you need more help.

## Backups and recovery

#### I have the seed words (recovery phrase) but don't remember the password; what can I do?

The recovery phrase works without a password or PIN. Just input the words at the wallet set up, using the `I have a text backup` option.

#### Why should I do regular Stronghold backups?

Performing regular Stronghold backups will allow you to keep convenient, up-to-date digital backups should something happen, where you would then have a complete recovery of your funds.

#### What is an internal transfer? Is it different from a standard transaction?

An internal transfer is the same as a standard transaction. It is just made between your own wallets; it is also handled entirely on the Tangle. It is easier to perform because you don't need to input the address.

#### I have forgotten my device pin. How do I recover my Ledger?

Should you forget the Ledger PIN, you can reset and restore the Ledger using the 24-word recovery phrase.

#### How do I backup my Ledger transaction history?

Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Firefly will sync your available transaction history when a Ledger profile is restored. It may not find all transactions, but it will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

#### Are the 24 words previously found in the Ledger and are now in Firefly for the same seed?

The 24 words mnemonic, also known as the recovery passphrase, work in Firefly as both reflect the BIP39 standard. Never enter your recovery phrase anywhere other than your Ledger is strongly recommended. This defeats the security benefits of having a Ledger.

#### Can I save a Stronghold backup in Firefly for a Ledger Profile? If yes, does this contain my Ledger Seed?

Strongholds are not used for Ledger profiles in Firefly.

#### Can I put my 24 words from the Ledger into Firefly to see/use my funds with Firefly?

You can, but it is not recommended because it circumvents the hardware wallet security model entirely and is therefore strongly advised against it!

## Profiles and wallets

#### What are profiles in Firefly?

Profiles in Firefly are representations of your IOTA seed and contain all of your balances on different wallets. They also include general information such as your language and currency preferences and system notifications.

#### What are wallets in Firefly?

Wallets in Firefly are like a bank account and a personalized stock portfolio all in one. And in that sense, wallets always belong to a specific profile of your Firefly application. You can view your wallet balance and transactions, send and receive funds instantly, measure your wallet and token value over time, and check your wallet activity by month.

#### Can I change profile names after I create the profile?

No, you cannot change a profile name after creating a profile just yet. But you can add a profile with your preferred name and populate it near-instantly with your preferred wallet(s), security, and other such information.

#### Can I change wallet names after I create the account?

Yes. You can change your wallet name by clicking on the ellipses (three dots in a row) next to your wallet balance, giving you the `Customise wallet` option. There, you can change the name of the wallet you are currently in.

#### What is `resync wallet`? Why do I need it, and what happens when I resync my wallet?

Resyncing your wallet starts a background task that makes sure all of your wallets are up to date; you would need it to ensure your wallet is correct so you can conduct the everyday functions of Firefly without issues.

#### I want to delete a wallet; what happens to the funds in that wallet?

Wallets can only be deleted after your funds have been moved out of your wallet. So, you would need to send your funds from that wallet to another address.

However, an empty 0 balance profile can be deleted.

#### I want to delete a profile; what happens to the funds in that profile?

If you want to delete a profile, it is recommended that you first transfer your funds to a different profile. You need to make sure you have a backup for all of your wallets. If you delete a profile without a backup or recovery phrase, you will lose access to your IOTA!

#### Why do I need to confirm the receiving address against one displayed on my Ledger device?

This function is in place to confirm that the receiving address hasn't been manipulated by malicious software or by a man-in-the-middle attack. Make sure you always double-check it matches what is displayed on your device.

#### Can I have a Ledger wallet under my standard Firefly profile, or do I need to set up an entirely new profile for Ledger?

Every seed and Ledger has its own profile in Firefly. You need to create a new Firefly profile for every Ledger device you own.

#### How can I easily switch from one profile to another? Do I need to sign out each time?

It is possible to change profiles. And yes, it is necessary to log out from one profile and log in to another with your PIN.

#### Is it a bad idea to use the same PIN for Firefly as I do for my Ledger device?

Yes! As with websites, where security experts generally recommend that you use strong and unique passwords for each of your accounts, it is recommended to use unique PINs for Firefly and the Ledger device.

#### Where are my tokens located exactly if they are not on my Ledger device nor on my computer?

Since the Tangle is a distributed ledger, no one actually "holds" IOTA tokens in their wallet. The wallet controls the private keys.

A private key is like a secret passcode needed to transfer ownership of IOTA tokens on the Tangle. The private keys give the power to alter the Tangle record by authorizing an ownership transfer from one address to another. That transaction gets recorded in the Tangle.

To go deeper, IOTA tokens are, at their root, numbers: amounts assigned to IOTA addresses. For every private key, there are one or more public keys (which are translated into IOTA addresses).

The private key belonging to that corresponding public key is the secret code needed to "spend" IOTA tokens.

You can think of the Firefly wallet as a password manager. Password managers store and secure the secret passwords you need to access websites, rather than the content of the websites themselves.

In this way, your Firefly wallet is essentially a key manager!

Your private keys are stored on the Ledger device for and can never be extracted.

## Transactions

#### Can I use my own node to process my transaction?

Yes. You can use your own node to process your transaction if it is accessible over HTTPS.

#### I accidentally sent funds to the wrong address. Can I get them back?

There is no way to recover funds accidentally sent to the wrong address.

#### Why can I not send less than 1Mi?

Because there is a minimum requirement of 1Mi due to the IOTA protocol's dust protection, in a later version, Firefly will enable a feature that allows you to send less than 1Mi.

#### How can I send data transactions with Firefly?

You cannot send data transactions with Firefly at this point in time.

#### Where can I see my transaction history?

Your transaction history is broken down within your wallets. When you select `Wallets` from your dashboard, you will see a column with all of the transactions you made within the respective wallet.

Additionally, there is an extra function, `wallet history`, found in the ellipses (three dots) next to the `wallet balance` of your wallet page.

#### How do I find a specific transaction that I did send/receive; I only know the day when it happened. Is there a search function?

There is no search function in Firefly.

#### What is a deep link, and how do I use it?

Deep links automatically fill transaction data in Firefly when you click on an `iota://` link.

#### Can I have a fixed receive address?

Yes, you can have a fixed receive address. Simply copy an address from Firefly and store it somewhere. You can safely receive to an address as much as you like, but it is recommended to use new addresses for better privacy.

#### Why do I need to confirm my transaction on the Ledger device against the one displayed in Firefly?

The Ledger Nano S/X shows you the transaction details before asking you to confirm. It then signs the transaction.

The addresses and values must exactly match those displayed by Firefly. This is to prevent man-in-the-middle attacks.

You should thoroughly verify them before confirming the transaction.

## Staking

#### Is staking secure? Will staked tokens stay in my control?

Yes, absolutely. The staked tokens will always stay in your control. They neither need to be sent to a third party nor do private keys have to be shared with anyone. Firefly attaches a special message to IOTA tokens by sending them to the same address they currently reside on to stake IOTA tokens.

#### How soon do I receive staking rewards?

Staking rewards are being generated immediately after starting a new staking period. Staking for a specific reward is announced by projects that want to distribute staking rewards. Once the staking period starts, stakers will be earning staking rewards, usually every 10 seconds. Reward tokens are automatically issued to the Firefly wallet of the staker and can only be accessed by that wallet holder. Depending on the project doing the token distribution, the tokens might only be accessible with the launch of the actual project. Please refer to the individual project for more information when your tokens become fully available.

#### How and when can I unstake my tokens?

Whenever you want, staking on IOTA is completely fluid, and there are no freezing or activation periods.

#### Is this like airdrops?

Somewhat. You could see IOTA staking as rolling airdrops or lock-drops, coming in every 10 seconds.

#### Why don’t you just airdrop tokens to random accounts?

The idea is to incentivize active community members in order to allow new ecosystems to grow. To flourish, new economies need users that are willing to participate. Having users actively staking their IOTA tokens to gain rewards allows builders to separate the wheat from the chaff and only reward active users who care about upcoming economies and their opportunities. Simply speaking: builders are not interested in inactive, dormant users.

## Settings

#### Where can I change my PIN and password?

You can change both your PIN and password under `Security` found in the settings of your dashboard.

#### Can I reuse an address? I know that this was always a problem in Trinity.

You can reuse an address in Firefly due to the EdDSA reusable address format.

#### Can I create NFTs or other digital assets in Firefly?

You cannot create NFTs or other digital assets in Firefly at this time.

## Troubleshooting

#### How do I recover a PIN code?

If you have lost your PIN, you need to create the profile again from a backup (recovery phrase or a Stronghold file) to re-access the profile. Later, you will create a new profile with a new PIN.

#### I have my backup file but don't remember the password. How can I recover my funds?

Without the password, you will not be able to recover your funds using the backup file. It is possible to access your funds using the recovery phrase and to set up a new profile in Firefly. However, your Firefly settings and history are lost by doing so.

#### I received an error: what can I do?

You can report to this GitHub page for any issues or errors: https://github.com/iotaledger/firefly/issues.

#### I received an error: `client error: { }`. What does it mean, and what can I do?

You can report to this GitHub page with any issues or errors: https://github.com/iotaledger/firefly/issues.

#### I received the `operation timed out` error message. What does it mean, and how can I solve it?

You can report any issues or errors to this GitHub page: https://github.com/iotaledger/firefly/issues.

#### For those with more than one seed, can we replicate this process with every seed we have? Or do we need to transfer all tokens to one seed to migrate to the new network?

You can import multiple seeds in Firefly. But this process must be replicated for every seed you own. Each seed will be imported into a new profile.

#### Can I buy IOTAs directly in Firefly?

You cannot buy IOTAs directly in Firefly at this time. You can visit the IOTA website for more information about buying IOTA from an exchange.

#### Why won't Firefly connect with my Ledger? Also, My IOTA application always closes after a couple of seconds after opening it. Why is this?

If your Ledger is already connected and unlocked, ensure that you have closed the official Ledger Live application or browser plug-ins that might use the Ledger (e.g. MetaMask). Then make sure Ledger Live is not running silently in the background. Firefly cannot communicate with Ledger hardware if the Ledger Live software is open simultaneously. Firefly also provides a guide during setup to help with connection issues, and you can read the official Ledger guide here.

#### Finding balances keeps stalling. Why is this?

If your Ledger device does not show `Generating address…` while finding balances, then try disconnecting and reconnecting the device in rare cases where you used an old version of the legacy app. You may need to uninstall and reinstall the legacy app. Return to Ledger Live, reinstall this application on your Ledger device and try again.

#### Why does my balance keep showing zero?

Firstly, you can try `Check Again` to search for more addresses with balance.

If your balance continues to display 0, you may have selected the wrong account index number. The default account index number is 0, but it is possible to change this from 0-2147483647. If this was changed during your Trinity Ledger setup, you might wish to try alternative account indexes to reveal your funds.

#### What happens if my computer falls asleep or restarts during the migration process?

First, check if the migration is still in progress. If it is, then it should be complete on its own. Alternatively, you can check if you have a profile for that migration as it may have already been completed. If there are no profiles associated with the migration, you can simply create a new profile to start the migration again. If there is a profile, but the full set of migration transactions are not there, go to Advanced Settings and select `Migrate Another Index.` You can continue where you left off by choosing the same account index and searching for more balance.

## Migration

#### I found an old seed from Trinity. Now that the migration period has already finished, how can I access these funds?

Seed migrations can be made after the migration period ends, at least until Coordicide.

#### Do I need to keep the IOTA Legacy app installed on my Ledger Nano after I have finished migration?

Once you have safely migrated all your account indexes to Firefly, the Legacy IOTA app will no longer be needed. Follow official Ledger guidance on how to remove Ledger Nano apps with Ledger Live.

#### If I follow the Ledger migration procedures, can I migrate the Ledger accounts that have been created with the 25th "word" passphrase?

The 25th word can be used with your Ledger, and Firefly will still find your tokens.

#### What if something goes wrong while I migrate? Who do I contact?

If any part of the process is aborted or fails, it can be redone! If something still goes wrong, reach out to the #help channel on Discord for community support.

IMPORTANT: Never share personal information regarding the number of tokens you own, their type, or where and how you keep them, how you secure them, including passwords, recovery passphrases, and user names of wallet accounts or exchanges. Do NOT share that information with anyone – including members of the IOTA Foundation.

Read more about "Security During Token Migration" on Chrysalis [here](https://blog.iota.org/security-during-token-migration/).

#### If I have multiple addresses associated with one seed, will the Chrysalis migration send all of my tokens to one address?

Yes, Firefly will send your funds to one address in migration.

#### I have lots of addresses with less than 1Mi balance. What should I do?

Firefly will attempt to consolidate all of your funds, but there is a chance some dust (<1 Mi) is lost. If you have lots of addresses with <1Mi funds, it is recommended you first consolidate your balance in Trinity before 28 April 2021.

#### In Chrysalis, will it be possible to migrate a seed for which all the addresses sum to less than 1 Mi?

Seeds with <1 Mi balance in total will not migrate. We recommend sending all of those small balances to a seed with a balance of >=1 Mi to migrate.

#### Will the Firefly mobile app be available upon Chrysalis release, or do I have to migrate on PC?

For now, the migration will be done via PC. Once Chrysalis is complete, we will focus on the mobile app!

#### I have 20 addresses on my Ledger Nano S. Is that a problem? I heard about this memory problem where only two addresses can be emptied at once.

The migration will bundle addresses together to avoid issues. Have a look at this article by the IOTA community for further information about how to consolidate your tokens.

Firefly will attempt to consolidate all of your funds, but there is a chance some dust (<1 Mi) is lost.

#### What are the tax implications of the migration?

Tax regulations are different from country to country. Contact your local tax office or a tax consultant for the exact handling in your country.

#### How do I migrate more than one Trinity account index?

If you want to migrate more than one account index, you will need to manually go through the indexes one by one and migrate them. Once you have completed the migration for one index, you will be prompted to migrate another index on the same profile. Each migration is sent to a separate wallet within the same Firefly profile.

You can also migrate additional indexes by going to the Advanced Settings in your dashboard and choosing `Migrate Ledger Index`. This will migrate the funds to the same profile.

#### The balance that is shown is less than the balance I have on my Ledger. What can I do?

Firefly provides a `check again` option to check more addresses for balance. If the balance is 0 and cannot be found by checking multiple times again, you likely selected the wrong account index.

#### Why does it say my `Funds are at risk` during migration?

It was a risk to send funds from the same address more than once in the old legacy network. If you see this message, Firefly will guide you through a process to help secure those addresses before migration. You can read more about spent addresses here.

#### What is bundle mining?

If you have spent addresses, it means you accidentally received funds to an address that was already spent from. These funds are not safe to send again due to the Winternitz type one-time signature scheme (see below under [Spent Addresses](#spent-addresses) for more details).

To secure your spent addresses during the migration, Firefly will try to find a new bundle that reveals the least amount of additional private key parts compared to previous signs.

This process will take 10 minutes per spent address and, upon completion, you will be presented with a risk calculation (very high, high, medium, low, very low). It is recommended that you repeat the process if it returns a bundle with medium risk or higher, particularly for significant sums of IOTA. You have the option to select which addresses you want to mine for and again which you want to rerun the process for.

## Spent Addresses

#### What are spent addresses, and why are they dangerous?

In the original IOTA network, IOTA used Winternitz One Time Signatures (W-OTS): think of these as, more or less, an authenticator and validator for a transaction. These keys and signatures are highly secure against malicious attacks for signing transactions. But, on the downside, by signing a transaction, W-OTS reveals parts of a private key for the specific address tokens are being spent from.

With W-OTS, every time a signature is signed to spend tokens from a particular address, any remaining tokens need to be moved onto a new address to prevent malicious actors from brute-forcing (trial-and-error guessing) the remaining parts of the private key for the address. That's the main reason why this signature scheme is considered to be a "one-time signature".

So after the Chrysalis update, we are using the Ed25519, based on the EdDSA scheme instead of W-OTS. The advantage is that the new scheme addresses all of the issues that W-OTS originally had, where Ed25519 verifies both single-signature and batch verification (taking care of the remaining tokens) very quickly and faster key generation and smaller signatures (very secure).

#### Why is it not possible to migrate some of my tokens?

If you have lots of small amounts (<1Mi) spread across many addresses, it may not be possible to migrate these as there is a minimum requirement of 1Mi for a successful migration due to our dust protection. In this case, it is not possible to migrate a seed with less than 1Mi. It is recommended you consolidate your funds in Trinity first by simply sending your entire balance to yourself.

#### Why does Firefly keep telling me the same risk rating?

Firefly will conduct bundle mining in rare cases because of your spent address(es). When attempting to proceed with the migration, Firefly will spend a few minutes trying to find a safe bundle for the address(es), so you can migrate tokens safely.

Once the security check completes, you can choose to rerun the process (which may lower your risk level) or continue the migration process once you feel satisfied.

However, in some cases, it is difficult to improve the bundle's security. You may rerun the process as many times as you like, but some spent addresses are very difficult to lower the risk. You can keep trying or migrate anyway and accept the risk involved.
