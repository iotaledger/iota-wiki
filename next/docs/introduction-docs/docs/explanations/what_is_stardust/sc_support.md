---
keywords:
- Stardust
- Shimmer
- Upgrades
- Smart Contract
- Anchoring
- Protocol Improvements
- explanation
description: Smart contract chain support in Stardust.
image: /img/logo/preview.png
---

# Smart Contract Chain Support

A new ledger account is introduced for smart contract chains, called the Alias Account. Such accounts receive a global and
unique address upon creation, which stays the same for their lifetime. The unique address is owned by the two controllers
of the Alias account that have different privileges.

Smart contract chain validators are assigned to the role of _state controller_ of the alias account through a
threshold signature address. T out of N validator signatures are required to move assets on the base protocol that belong
to the alias account.

Smart contract chain owners are assigned to the role of _governor_ of the alias account. They may replace validators
and are the ones who can eventually destroy the account all together. If the governor and state controller entities are
the same, we talk about a self-governing smart contract chain.

While smart contract chain owners might change or validators might be rotated over time, the address of the chain stays
the same.
