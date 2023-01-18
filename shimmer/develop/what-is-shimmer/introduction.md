# What is Shimmer?

Shimmer is an innovation network where the community tries out the new protocol changes before they are deployed on the
more conservative [IOTA network](https://wiki.iota.org/introduction/welcome/). It has its own supply of tokens which are
called [$SMR](tokens-and-wallets.md#SMR).

The Shimmer network uses the new [Stardust protocol](https://wiki.iota.org/shimmer/introduction/welcome/), that upgrades
the current Chrysalis protocol by introducing computation and utility to the ledger by introducing several new
features.

## Tokenization Framework

The Stardust protocol introduces
a [tokenization framework](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/tokenization/)
that
enables [Alias outputs](https://wiki.iota.org/shimmer/introduction/explanations/ledger/alias/), [NFTs](https://wiki.iota.org/shimmer/introduction/explanations/ledger/nft/)
and [native tokens and foundries](https://wiki.iota.org/shimmer/introduction/explanations/ledger/foundry/)
on layer 1 as long as you can cover the
minimum [storage deposit](ttps://wiki.iota.org/shimmer/learn/welcome/#storage-deposits).

## New Output Unlock Conditions

New [output unlock conditions](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/)
that allow you to specify not only
the [unlock address](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#address),
but also:

* [Storage deposit
  returns](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#storage-deposit-return):
  This feature allows you to specify a return amount that has to be refunded to the sender's account, which enables
  micro-transactions of any size.
* [Expirations](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#expiration):
  If you define an expiration date-time for your output, it will be returned if it hasn't been claimed by said
  date-time.
* [Time-locks](https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/#timelock):
  Conversely to expirations, you can also specify a date-time until which the recipient won't be able to claim the
  output.
