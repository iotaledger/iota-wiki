---
description: Learn about the switch from account balance models to Unspent Transaction Output (UTXO) in IOTA.
keywords: [ "IOTA", "UTXO", "Balance Models", "Conflicts", "Reattachments", "Colored Coins" ]
---

# Switch to UTXO

UTXO means "unspent transaction output". 
This means that instead of tracking the balances of addresses, you also keep track of where balances came from and 
where they go when they are spent.

## The Problem with the Balance Mode

Before Chrysalis, IOTA used an account balance model to track addresses.
This meant every address had a single value associated with it, its current balance.
This meant the ledger tracked **Address1**, which was associated with **Balance1**, **Address2** was associated with *
*Balance2**, and so on.

### Double-spends

The main problem with this model was dealing with double-spends, also known as conflicts.
It took a lot of work to determine which of multiple transactions performed a double spend and which used legitimate
funds.
This was not a problem in the previous protocol since the “heaviest sub-tangle wins” rule only had to ensure that the
addresses of a particular sub-tangle never turned negative.
However, Chrysalis introduced a voting-based Coordicide solution.
This meant that it was necessary to identify conflicts quickly and precisely so we could reduce the amount of voting
required to resolve these conflicts.

### Reatachments

Another problem with using an account balance model is reattachments.
If somebody ever receives funds at an address already used to send tokens, anybody can just reattach the previous
transaction and empty the address again,
even if they do not control the private key.
There have been many cases in DLTs where this was used as an “attack vector” when users didn’t follow the advice to use
addresses only once.

## The UTXO Solution

Since Chrysalis, IOTA switched to the UTXO model to keep track of balances.
Every address contains its total balance and multiple sub-balances with a marker indicating precisely which transaction
created the funds.
Every coin on an address can be uniquely identifiable, and every transaction names the exact coins it wants to move.
This switch significantly improved how we identify conflicts and, therefore, also stops malicious actors from spending
newly received funds by reattaching an old transaction.

### Support for Ed25519

An additional benefit is that the UTXO model supports [Ed25519 addresses](EdDSA-support.md),
meaning that addresses in Chrysalis are reusable and can be safely used to send funds more than once.

:::tip Learn More

You can learn more about the [switch to UTXO](https://wiki.iota.org/tips/tips/TIP-0007) in
the [TIPS section](../tips.md).

:::
