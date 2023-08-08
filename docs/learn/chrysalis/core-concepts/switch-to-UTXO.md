---
sidebarLabel: Switch to UTXO
description: Learn about the transformation from balance models to Unspent Transaction Output (UTXO) models in IOTA, outlining the problems, solutions, and implications of this change.
keywords:
  [
    'IOTA',
    'UTXO',
    'Balance Models',
    'Conflicts',
    'Reattachments',
    'Colored Coins',
  ]
---

# The Switch to UTXO in IOTA

Before Chrysalis, IOTA used an account model where every address had a single value, its current balance. However,
as issues arise when handling conflicts (i.e., double spends), it becomes difficult to ascertain which transactions are
legitimate and which ones are effectively double spends.

### The Challenge with Balance Models

The balance model is relatively straightforward - it keeps track of every address and its corresponding balance.
However, this simplicity poses some significant problems:

**Conflict handling**: In the case of conflicts, such as double spends, identifying the transaction performing the
double spend can be a complex process.
This issue significantly inhibits the efficiency of dealing with conflicts and leads to large "conflict sets".

**Reattachments**: If funds are received on an already spent address, anyone can reattach the previous spend and drain
the address without requiring the private key of that address.
This problem has been exploited before when users fail to follow the advice of using addresses only once.

### The UTXO Solution

To counter these problems, the Unspent Transaction Output (UTXO) model is an effective solution.
Instead of an address having a total balance, it contains multiple sub-balances,
each tagged with a marker indicating which transaction created the funds.
Every token on an address is uniquely identifiable, and every transaction specifically names the exact coins it wishes
to move.

Benefits of UTXO include:

**Efficient conflict handling**: The UTXO model allows for the rapid and precise identification of conflicts, reducing
the overhead for consensus mechanisms based on voting.

**Security against reattachments**: With the UTXO model, malicious actors can no longer spend newly received funds by
reattaching an old transaction.

While the UTXO model is slightly more complex to implement and requires slightly larger transactions, its benefits
overwhelmingly outweigh these minor drawbacks. The shift to the UTXO model in IOTA is a pivotal move towards efficient
conflict resolution, increased security, and the potential adoption of colored coins.

:::tip Learn More

You can learn more about the [switch to UTXO](https://wiki.iota.org/tips/tips/TIP-0007) in the [TIPS section](../tips.md).

:::
