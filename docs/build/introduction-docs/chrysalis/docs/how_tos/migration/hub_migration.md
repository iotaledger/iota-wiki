---
description: How to switch from IOTA hub using wallet.rs, or its bindings.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - wallet.rs
  - IOTA Hub
  - iota.rs
  - migration
  - how to
---

# IOTA Hub Migration Guide

:::info

This guide outlines how to switch from using IOTA Hub to [Wallet.rs](/wallet.rs/welcome) or its bindings instead.

:::

:::warning
Before you start a migration from IOTA Hub, get in contact with us so we can assist you in this process.

**Contact details:**

Dave de Fijter

**Email**: [dave.defijter@iota.org](mailto:dave.defijter@iota.org)

[**Discord**](https://discord.iota.org/): Dave [IF]#3333
:::

Because of the unique features of IOTA 1.0, it was difficult to manage IOTA transactions with just a library. With the Chrysalis update, we have updated to be more accommodating to industry-wide standards and developers.

IOTA Hub was deprecated with the Chrysalis upgrade and will not work with the new protocol changes. If you somehow still use Hub, we recommend that you to switch our new wallet library [Iota.rs](/iota.rs/welcome), or its bindings, where you can easily manage IOTA addresses, deposits, and withdrawals for user accounts.

To upgrade from Hub to a Chrysalis implementation you will need to:

- Integrate the Chrysalis network using [Wallet.rs](/wallet.rs/welcome) as mentioned in the [Exchange section](../exchange.md).
- Pause withdrawals/deposits.
- Make sure all balances have been swept and all deposits have been processed.
- [Transfer all IOTA to a generated migration address](token_migration.md).
- Once migrated, transfer the IOTA coins to your host wallet account on your wallet.rs implementation.
