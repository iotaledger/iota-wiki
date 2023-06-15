---
keywords:
- Stardust
- Shimmer
- Upgrades
- Features
- Output
- Extended UTXO
- Protocol Improvements
- explanation
description: The new output features enrich the properties of outputs.
image: /img/logo/preview.png
---

# Output Features

The output features that don't affect the actual unlocking and hence ownership, are called _Output Features_.

## Metadata

The _Metadata Feature_ makes it possible to store any data in outputs. Smart contract requests make use of it to encode
the actual request call data that is only interpreted on L2.

Of course, there is a limit on how much data one can store in an output, as outputs are part of transactions that have
a limited size. Anyway, bigger data can always be sliced up into chunks to be stored in outputs.

## Sender

The _Sender Feature_ allows to define a sender address directly inside an output. The protocol validates whether the
address was actually signed in the transaction that created the output or not. Smart contract chains identify the
sender account of an on-ledger request based on the information present in the _Sender Feature_ of the output.

The combination of the _Sender Feature_ with the _Metadata Feature_ makes it possible to implement data oracles in the
ledger with verified sources.

## Issuer
The _Issuer Feature_ follows the same address verification logic as the _Sender Feature_, but it is only available for
NFTs. Upon NFT minting, one might attach the issuer identity to the token if ownership of the issuer address is
proved by unlocking it in the same transaction. Artists that disclose their issuer identities off-chain protect
buyers and traders from fakes.

## Tag
A _Tag Feature_ is a small piece of data intended to be used as an indexation tag for the output by custom applications
built around the network. It becomes possible to map data (Metadata Feature) stored in the ledger by a specific party
(Sender Feature) for a specific purpose (Tag Feature).

To read more about outputs, the Stardust ledger and tokenization concepts check out [TIP-18](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md).
