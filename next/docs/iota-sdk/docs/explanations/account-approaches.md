---
image: /img/iota_layers_overview.svg
description: 'Learn about the multi-account and single account approaches in the IOTA SDK for managing user accounts and addresses on the IOTA network.'
keywords:
  - IOTA SDK
  - account approaches
  - multi-account approach
  - single account approach
  - user accounts
  - addresses
  - database
  - exchanges
---

# Account Approaches

In [the IOTA SDK](../welcome.md), you can use an account model
to [create an account for each user](#multi-account-approach)
or [use one account and generate multiple addresses](#single-account-approach), which you can then link to the users in
your database. The SDK is as flexible as possible and can back up any of your use cases.

The SDK supports derivation for multiple accounts from a single seed. An account is a deterministic identifier from
which multiple addresses can be derived.

The SDK also allows consumers to assign a meaningful alias to each account. Since addresses are reusable, they can be
mapped to your users clearly and concisely.

## Multi-Account Approach

Use the multi-account approach to create an account for each user. You can link the accounts to the internal user IDs as
an account alias, which are distinctly separated.

## Single Account Approach

You should use the single account approach to create a single account and then create an address for each user. You will
need to link the associated addresses to the internal user IDs and store who owns which address in a database. Most
exchanges are familiar with the single account approach and find it easier to use, implement, and back up.
