---
description: Frequently asked questions regarding the Chrysalis implementation.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - FAQ
  - dust protection
  - coordicide
  - transactions
  - hornet
  - libraries
  - wallet.rs
  - iota.rs
  - Firefly
  - C
  - spent addresses
  - bundle mining
  - explanation
---

# FAQ

## Which Libraries are Available for Chrysalis?

At this time, there are a handful of libraries available for Chrysalis which are outlined below:

A low-level library called [iota.rs](https://github.com/iotaledger/iota.rs) which is a client library meant to connect to an IOTA node for core interactions with the Tangle. It is written in Rust and there are currently two bindings for Node.js and Python allowing you to use this library from those languages as well.

For _value transactions_, there is the [wallet.rs](https://github.com/iotaledger/wallet.rs) library which provides a stateful way to manage IOTA coins for one or multiple accounts. It is also written in Rust and there are currently two bindings for Node.js and Python.

Additionally, there is also a native C ([iota.c](https://github.com/iotaledger/iota.c)) and an alternative, native javascript ([iota.js](https://github.com/iotaledger/iota.js/tree/chrysalis)) client library.

## What is Dust Protection and How Does it Work?

Since IOTA is feeless and has the ability to send microtransactions, attackers could use this to spam the network with very low-_value transactions_, which we call dust. To avoid this, we only allow microtransactions below 1Mi of IOTA tokens to another address if you already have at least 1Mi on that address.

For reference, you can read more about _Dust Protection_ on this [RFC](https://github.com/iotaledger/protocol-rfcs/pull/32).

## What is Happening with Coordicide?

The Chrysalis release still depends on the Coordinator/Compass to run and issue milestones. The next big release after Chrysalis will be Coordicide, where we will get rid of that dependency. This release is currently in a research/testing phase and will be the main priority after the Chrysalis release.

## When is a Transaction on the Network Considered Final/Irreversible?

On average, confirmation times on the new network are around 10 seconds. Once a transaction is set to confirm its final transaction, you do not have block confirmations like with blockchain.

## What are Spent Addresses and Why are they Dangerous?

- In the IOTA 1.0 network, IOTA used Winternitz One Time Signatures (W-OTS) - think of these as, more or less, an authenticator and validator for a transaction. These keys and signatures are highly secure against malicious attacks for signing transactions. But, on the downside, by signing a transaction, W-OTS reveals parts of a private key for the specific address tokens are being spent from.
- With W-OTS, every time a signature is used to spend tokens from a particular address, any remaining tokens need to be moved onto a new address to prevent malicious actors from brute-forcing (trial-and-error guessing) the remaining parts of the private key for the address. That’s the main reason why this signature scheme is considered to be a “one-time signature”.
- So, after our Chrysalis update, we are now using the Ed25519, based on the EdDSA, scheme instead of W-OTS. The advantage is that the new scheme addresses all of the issues that W-OTS originally had. Ed25519 verifies both single-signature and batch verification (taking care of the remaining tokens) very quickly, as well as faster key generation and smaller signatures which make it very secure.

## What is Bundle Mining?

- If you have spent addresses, it means you accidentally received funds to an address that was already spent from, and these funds are not safe to send again due to W-OTS.
- To secure your spent addresses during the migration, [Firefly](https://github.com/iotaledger/firefly) will try to find a new bundle that reveals the least amount of additional private key parts compared to previous signatures.
- This process will take 10 minutes per spent address and upon completion you will be presented with a risk calculation (very high, high, medium, low, very low). We recommended that you repeat the process if it returns a bundle with medium risk or higher, particularly for significant sums of IOTA. You have the option to select which addresses you want to mine for, and again which you want to rerun the process for.
