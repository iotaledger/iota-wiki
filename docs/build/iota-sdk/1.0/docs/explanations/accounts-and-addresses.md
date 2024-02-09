---
image: /img/iota_layers_overview.svg
description: 'Learn about the multi-account and single-account models in the IOTA SDK for managing user accounts and addresses on the IOTA network.'
tags:
  - IOTA SDK
  - accounts
  - multi-account model
  - single account model
  - user accounts
  - addresses
  - database
  - exchanges
---

# Account and Addresses

In [the IOTA SDK](../welcome.md), you can use an account model
to [create an account for each user](#multi-account-model)
or [use one account and generate multiple addresses](#single-account-model), which you can then link to the users in
your database. The SDK is as flexible as possible and aims to cover as many use cases as possible.

The SDK supports deterministic derivation of multiple accounts from a single seed for multiple accounts. An account is
an identifier from which multiple addresses can be derived.

The SDK also allows users to assign a unique alias to each account. Since addresses are reusable, they can be
mapped to your users clearly and concisely.

## Multi-Account Model

Use the multi-account model to create an account for each user. As you can assign
an arbitrary unique [account alias](../references/nodejs/interfaces/AccountMeta.md#alias) to any account, you can easily
link the accounts to your own database's internal user IDs.

## Single Account Model

Use the single account model to create only one account and then create an address for each user. You will
need to link the associated addresses to your internal user IDs and store which owns which address in a database. Most
exchanges are familiar with this model and find it easier to use, implement, and back up.
