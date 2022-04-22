---
id: dust-protection
title: Dust Protection
description: Introduction to the history and future of dust protection in IOTA.
keywords:
  - Dust
  - Chrysalis
  - Legacy
  - Stardust
  - UTXO
  - conditional sending
---
# The Evolution of Dust Protection on IOTA

This short note attempts to explain how dust protection has evolved with the needs of the IOTA network.

## IOTA 1.0

An account-based ledger.
Each address has a balance of tokens.

There is no dust protection.
Therefore addresses could hold any amount, down to 1 IOTA, and transactions could be as small as 1 IOTA.

These conditions meant that the ledger state was likely to bloat.

## IOTA 1.5

IOTA switches to a UTXO-based ledger.
Each address can now hold multiple [Unspent Transaction Outputs (UTXOs)](/learn/about-iota/messages#utxo), each with its own balance. The address balance is the total of the UTXO balances on that address.

:::tip UTXO

You can find a more extensive description of UTXOs in [this medium article](https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819).

:::

There was a risk of ledger bloat, so IOTA introduced a dust protection mechanism.
You have to think about UTXOs rather than addresses when thinking about dust. As this article will explain, this can be tricky.

The basic rule of IOTA 1.5 dust protection is that "UTXOs cannot hold under 1 million IOTA (1 Mi)".
Remember this fundamental rule as it makes sending amounts under 1 Mi very tricky!

To understand why this is tricky, let's look at an example where Bob tries to send 10i to an address containing 5 Mi, owned by Alice. You may assume that Bob could add 10i to that 5 Mi so that Alice would have a total of 5.00001 Mi, which respects the basic dust protection rule. However, this is not the case.

Each UTXO is a self-contained envelope, which only contains the output from a transaction. And in this case, that envelope only contains the 10i Bob sent (i.e., the output of that transaction). As the UTXO only contains 10i, Bob broke the dust protection rule, as his UTXO “envelope” was short of the necessary 1Mi (100000i) by 999990 i.

A special UTXO called a "dust allowance output" was introduced to overcome this problem. Users can now lock 1-10 Mi on a dust allowance output and receive up to 10 dust UTXOs per Mi deposited on the associated address.

To follow the previous example. If Alic creates a dust allowance output with 2 Mi locked on Address A, Bob can now send up to 20 dust transactions (any transaction under 1 Mi) to Alice’s Address A.

You can also sweep the dust UTXOs. This means combining multiple dust UTXOs into a single UTXO. For example, if you have 3 UTXOs with 1i each, you can combine them into a single UTXO with 3i. This frees up spare UTXOs on your dust-enabled address.

This was a reasonable interim solution, but unfortunately, it is not compatible with IOTA 2.0, as it requires total ordering of the Tangle to determine if the transaction is valid and that the dust protection rules are fulfilled. IOTA 2.0 does not have total ordering.

## IOTA 1.5X (Stardust)

Storage in the ledger is a scarce resource. If it was not regulated, the ledger could grow indefinitely. With Stardust, the amount of data that can be stored in ledger accounts will be limited in relation to the number of funds the account holds. With this new solution, one “rents” storage space in the ledger by storing funds.  

It is worth noting that the simple fact of having a ledger account means that data storage is forced upon all the nodes in the network. To prevent the ledger from becoming a bloated database, Stardust requires a minimum of funds to be created and stored in every ledger account. These principles are also implemented in other chains such as [Bitcoin](https://github.com/bitcoin/bitcoin/blob/f9aedbc3009d60b61e49034dde76b2ba1cc094b4/src/test/transaction_tests.cpp#L782-L784) and [Cardano](https://docs.cardano.org/native-tokens/minimum-ada-value-requirement), though in their case database bloat attacks are less likely as the transaction fees are higher.

## New Tokenisation Framework

Various new UTXO types are introduced, which can add different amounts of data to the ledger (e.g., for NFTs, native assets, aliases) without requiring any IOTA by themselves. Therefore there is a very high risk of ledger bloat.
The 1.5 dust protection is also not ready for IOTA 2.0. Therefore a new dust protection scheme is proposed, which deals with both issues.

The rules of the new dust protection are:

1. Any UTXO must contain a minimum deposit. This minimum deposit is proportional to the byte size of the transaction. But, for simplicity, this will be 1 Mi in the example.
2. The amount of data any UTXO can hold is proportional to the amount of IOTA on that UTXO. The IOTA acts as a deposit to secure that data on the Tangle, and you can add more IOTA to add more data. The actual cost of IOTA per byte is currently being decided and can change over time.

To send amounts smaller than 1 Mi or send native assets, we introduce a new system of "conditional sending", which does not require total ordering of the Tangle and is, therefore, ready for IOTA 2.0.

Let's look at how this works; if Bob wants to send 10i to an address owned by Alice that already holds 5 Mi (assuming the minimum deposit is 1 Mi). Bob cannot send only 10i because the UTXO will have a value of 10i, which is well below the minimum amount of 1 Mi.
Bob cannot use a special dust-UTXO as in 1.5 because those need total ordering of the Tangle.
Instead, Bob can use "conditional sending".

### Conditional Sending

Bob sends the 10i together with the minimum deposit amount of 1 Mi to Alice for a total of 1.00001 Mi. The deposit amount is over 1Mi, which meets the dust protection criteria. However, conditional sending is a special type of transaction that needs a further completion step. It has to be "claimed" by the recipient within a reasonable time set by the sender (Bob). Therefore, two things can happen to this transaction:

1. **Alice claims the 10i**. The 10i are transferred with the Bobs minimal deposit (1Mi) to a new valid UTXO. Alice needs her own 1 Mi deposit to claim the 10i. At the same time, Bob’s 1 Mi deposit is returned to his account.
  
2. **The 10i is not claimed in the time set by Bob***. The total amount of 1.00001 Mi can now be reclaimed or spent by Bob.

This was a simplified explanation of the mechanism. You can find a detailed description in [TIP-19](https://github.com/iotaledger/tips/pull/39).

#### Bonus

Conditional sending can also be used as a safety net to prevent sending to the wrong address. It is a common problem in crypto that funds are sometimes transferred to the incorrect address due to mistyping of the address - often, this address has no owner, and the tokens are lost forever. However, suppose this were to happen in a conditional send. In that case, the tokens are unlikely to be claimed in the set time, and the sender can claim the total amount, making conditional sending a very useful feature!

#### Final note

We are also looking at other mechanisms for microtransactions that simplify the process while still respecting the dust protection rules. We hope to share more with you soon.
