---
description: This article provides an in-depth look into IOTA's shift from WOTS addresses to the UTXO model and the motivations and processes behind this migration.
keywords:
  [
    'IOTA',
    'WOTS',
    'UTXO',
    'Migration',
    'Chrysalis',
    'Ed25519',
    'Security',
    'Protocol Design',
    'User Experience',
  ]
---

# Switch to UTXO

With Chrysalis, IOTA moved away from the Winternitz One-Time Signature (WOTS) system to the Unspent Transaction Output (
UTXO) model, addressing several issues related to security, protocol design, and user experience.

## Challenges with the Account Balance Model

Before the transition to Chrysalis, IOTA operated on an account model.
\Every address held a distinct balance value.
However, when double-spends or conflicts arose, discerning legitimate transactions from double-spends became complex.
This model posed two main challenges:

- **Conflict Handling**: Identifying the transaction performing a double-spend was intricate, leading to extensive
  "conflict sets" and reducing the efficiency in addressing conflicts.
- **Reattachments**: In cases where funds were received at an already spent address, it became possible for anyone to
  reattach the preceding transaction and drain the address, even without the private key.

### UTXO: A Robust Alternative

To combat these challenges, IOTA adopted the UTXO model.
Instead of addresses having an overarching balance, each address had multiple sub-balances,
identifiable by markers indicating the transaction that created them.
This model's benefits include:

- **Enhanced Conflict Resolution**: Rapid and accurate conflict identification became possible, streamlining consensus
  mechanisms.
- **Fortified Security**: The UTXO model negated the possibility of malicious actors spending fresh funds via
  reattaching old transactions.

Even though UTXO demanded a slightly more intricate implementation and marginally larger transactions, the overwhelming
advantages justified the shift, marking a significant leap towards efficient conflict resolution, augmented security,
and the potential adoption of colored coins.

## Reflections on the Migration

The migration from WOTS to UTXO was meticulously planned to ensure a seamless transition.

### Benefits

While WOTS had its advantages, it was not without limitations:

- **Size of Signatures**: WOTS signatures occupied a substantial portion of transaction data.
- **One-time Spending**: Addresses were deemed safe only for a single transaction.
  Any further transactions risked exposing parts of the private key, compromising transaction security.
- **Growing List of Addresses**: Nodes were compelled to constantly update a list of used addresses to prevent multiple
  spends from the same address.

With Chrysalis, IOTA supports only Ed25519 addresses, thereby discontinuing WOTS addresses.

### A Look Back at the Migration Process

This crucial migration encompassed:

1. **Migration Bundles**: Users generated bundles in the older network targeting their Ed25519 addresses in the
   Chrysalis Phase 2 network.
2. **Minting by the Coordinator**: Migrated funds took the form of receipts, minted by the Coordinator and subsequently
   incorporated within milestones in the newer network.
3. **Node Assessment**: Nodes in the new network meticulously evaluated these receipts, creating new UTXOs in the ledger
   to represent the transferred funds.

This systematic approach ensured a hassle-free migration, allowing users to transition their funds with minimal
interruptions, all the while safeguarding their assets' security and integrity.

:::tip Learn More

Learn more about the [Switch to UTXO](https://wiki.iota.org/tips/tips/TIP-0007/) and
the [migration to Ed25519 addresses](https://wiki.iota.org/tips/tips/TIP-0017/)

:::
