---
keywords:
- Stardust
- Shimmer
- Upgrades
- Storage
- Deposit
- Data
- Protocol Improvements
- explanation
description: Stardust introduces the new storage deposit system where data storage on protocol level is tied to refundable token deposits. 
image: /img/logo/preview.png
---

# Storage Deposit System

Nodes in any DLT network must have a copy of the most recent ledger to be able to create or verify new transactions. The
more user accounts there are, the more disk space is required on nodes to store the ledger state. Since transactions
are feeless, a malicious user might bloat the ledger size by creating a lot of accounts with just a tiny amount of funds
(dust) on them.

Chrysalis already implemented a mechanism that prevents this attack, but not without caveats:
- it relies on total ordering of transactions, hence renders it useless for IOTA 2.0,
- and it doesn't take into account that users can store arbitrary data in accounts too.

Stardust improves the previous solution and introduces the new **storage deposit** system. One rents storage space in
the ledger by holding the base currency of the protocol. Any ledger entry (a transaction output) must have a minimum
amount of base currency tokens to cover for the storage on nodes. The amount depends solely on the size of the
ledger entry.

The storage deposit is not a fee, because it is fully refunded as soon as the ledger entry is cleaned up. Read more
about the new storage deposit system in [TIP-19](https://github.com/iotaledger/tips/blob/main/tips/TIP-0019/tip-0019.md).

## Data Storage in Outputs

Smart contract support of the base layer implies that transactions and outputs may carry not only funds, but also data
to be interpreted by higher layer applications. Luckily the new storage deposit system makes this possible and regulates
how much data can be stored in outputs.

Why is it so important to store data in the ledger? Any application specific data for higher layer protocols can be
shared via the ledger. The data is available on all network nodes as long as the outputs storing them are unspent.

Arbitrary data storage becomes a general feature of outputs. Some examples of where is it useful:
- smart contract chains store L2 state commitments in their alias accounts,
- smart contract users put L2 smart contract call data in transfers sent to the chain's account,
- NFTs have immutable attached metadata stored on-chain,
- native token issuers may store token metadata on-chain in foundries,
- digital identity solutions may store identity related data on-chain that is always available.
