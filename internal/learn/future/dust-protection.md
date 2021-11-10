---
id: dust-protection
title: Dust Protection
description: Introduction to the history of dust protection in IOTA
keywords:
  - Dust
  - Chrysalis
  - Legacy
---

# The Evolution of Dust Protection on IOTA

This short note attempts to explain how dust protection has evolved with the needs of the IOTA network.

## IOTA 1.0

An account-based ledger.
Each address has a balance of tokens.

There is no dust protection.
Therefore addresses could hold any amount, down to 1 IOTA, and transactions could be as small as 1 IOTA.

The ledger state was therefore likely to bloat.

## IOTA 1.5

IOTA switches to a UTXO-based ledger.
Each address can now hold multiple [UTXOs](/learn/about-iota/messages#utxo), each with its own balance. For a more extensive description of UTXOs check [this](https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819) medium article.
The address balance is calculated as the total of the UTXO balances on that address.

Recognising the risk of ledger bloat, a dust protection mechanism is introduced.
When thinking about dust we now have to think about UTXOs rather than addresses. This is really tricky as we will see.

The basic rule of IOTA 1.5 dust protection is that "UTXOs cannot hold under 1 million IOTA (1 Mi)".
Try to remember this very important rule as it makes sending amounts under 1 Mi very tricky!

To understand why this is tricky, let's look at an example where I try to send 10i to an address that already contains 5 Mi. You may assume that you could add 10i to that 5 Mi, so that you have a total of 5.00001 Mi, which respects the basic dust protection rule.
But no!

Each UTXO is actually a self-contained pot, which only contains the output from a transaction. And in this case that pot would only contain the 10i you sent (ie the output of that transaction). So, as the UTXO only contains 10i, you have broken the dust protection rule.
(You may need to re-read that a few times to understand it properly)

To overcome this problem, a special UTXO called a "dust allowance output" was introduced. Users could now lock 1- 10 Mi on a dust allowance output, and could then receive up to 10 dust UTXOs per Mi deposited, on the associated address.
eg I create a dust allowance output with 2 Mi locked on Address A. You can now send up to 20 dust transactions (a dust transaction is anything under 1 Mi) to Address A.
Users can also sweep the dust UTXOs - this means combining multiple dust UTXOs into a single UTXO (eg 1i + 1i + 1i -> 3i on 1 UTXO). This frees up spare UTXOs on your dust-enabled address.

This was a reasonable interim solution, but unfortunately it is not compatible with IOTA 2.0, as it requires total ordering of the Tangle (to determine if the transaction is valid, and that the dust protection rules are fulfilled). IOTA 2.0 does not have total ordering.

## New Tokenisation Framework

Various new UTXO types are introduced, which can add different amounts of data to the ledger (eg for NFTs, native assets, aliases), without requiring any IOTA by themselves. Therefore there is a very high risk of ledger bloat.
The 1.5 dust protection is also not ready for IOTA 2.0. Therefore a new dust protection scheme is proposed, which deals with both issues.

The rules of the new dust protection are:

1. Any UTXO must contain a minimum deposit (for the sake of simplicity, let's make this 1 Mi for our examples).
2. The amount of data any UTXO can hold is proportional to the amount of IOTA on that UTXO. The IOTA acts as a deposit to secure that data on the Tangle, and you can add more IOTA to add more data. The actual cost of IOTA per byte is currently being decided, and can change over time.

To send amounts smaller than 1 Mi, or to send native assets, we introduce a new system of "conditional sending", which does not require total ordering of the Tangle (and is therefore ready for IOTA 2.0).
Let's look at how this works if I want to send 10i to an address which already holds 5 Mi (assuming the minimum deposit is 1 Mi). As before I cannot just send 10i, because the UTXO will have a value of 10i (well below the minimal amount of 1 Mi).
I cannot use a special dust-UTXO as in 1.5, because these need total ordering of the Tangle.
Instead I use "conditional sending":

1. I send the 10i together with the minimal deposit amount (1 Mi) - a total of 1.00001 Mi (which meets the dust protection criteria) - to the target address.
2. This is however a special type of transaction which needs a further step to complete. It has to be "claimed" by the recipient. 2 things can therefore happen to this transaction:
   a) The 10i is claimed by the recipient - the 10i is transferred together with the recipient's own minimal deposit to a new valid UTXO. The recipient needs their own 1 Mi deposit to claim the 10i. At the same time the sender's 1 Mi deposit is returned to the sender.
   b) The 10i is not claimed in a reasonable time period (set by the sender), and the total amount of 1.00001 Mi can now be reclaimed or spent by the sender (the mechanism is a bit more complex but this is the simplest way of describing it).

#### Bonus

This conditional sending can also be used as a safety net to prevent sending to the wrong address. It is a common problem in crypto that funds are sometimes transferred to the incorrect address due to mistyping of the address - often this address has no owner and the tokens are lost forever! If this were to happen in a conditional send however, then the tokens are very unlikely to be claimed in the set time period, and the total amount can be claimed by the sender. A very useful feature!

#### Final note

We are also looking at other mechanisms for microtransactions which make the process simpler, while still respecting the dust protection rules. We hope to share more with you soon.
