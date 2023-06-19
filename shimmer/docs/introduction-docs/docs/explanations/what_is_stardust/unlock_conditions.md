---
keywords:
- Stardust
- Shimmer
- Upgrades
- Unlock Condition
- Output
- Extended UTXO
- Protocol Improvements
- explanation
description: The new output unlock conditions make outputs configurable for conditional transfers.
image: /img/logo/preview.png
---

# Output Unlock Conditions

As discussed [previously](./rethink_utxo.md), the redesigned UTXO model allows for
implementing additional logic on transfers. Outputs, that are technically the results of a transfer, may define special
unlocking logic. When these outputs are consumed in subsequent transfers they have to satisfy all unlock conditions that
are defined on them.

## Address

Outputs are locked under addresses that are allowed to unlock them via a signatures. Chrysalis supports only this kind
of output unlocking.

## Storage Deposit Return

Due to the storage deposit rules, it is not possible to create an output with less than the minimum required storage
deposit funds. So how does one send such small amounts?

The new storage deposit return unlock condition allows to specify a return amount that has to be refunded to the
sender's account. Therefore, if one wants to send 1 token to someone but the minimum deposit is 10, they can send 11 tokens
to the recipient and await 10 back. There is no cheating, the recipient has to send 10 tokens back if they wish to own
that 1 token.

## Expiration

In the previous example, what if the recipient never consumes the output? The sender's tokens are locked forever, even
though they are not in the possession of the recipient. A cautious sender would also define an Expiration Unlock Condition
on the output. As the name suggests, such outputs expire after a deadline has been met, meaning that the sender regains
full control of the tokens in the output.

Expiration is also an important feature for smart contracts, as one might decide to cancel an on-ledger smart contract
request if it is not processed within a deadline.

## Timelock

Outputs may be timelocked, meaning no one can unlock them before a specific deadline is passed. With such a feature it
becomes possible to time smart contract requests in the future. An NFT auction organizer for example could prepare an
on-ledger smart contract request that closes the auction at a given date and time, transferring the to-be-sold NFT to
the highest bidder at that moment.
