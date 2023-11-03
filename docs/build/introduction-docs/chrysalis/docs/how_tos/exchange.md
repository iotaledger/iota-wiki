---
description: Easily integrate IOTA with your exchange, custody solution, or product using the wallet.rs library.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - integrate
  - exchange
  - account model
  - addresses
  - wallet.rs
  - setup
  - NodeJS
  - how to
---

# Exchange Guide

## The IOTA Wallet Library

:::note

You can easily integrate IOTA with your exchange, custody solution, or product.

:::

IOTA is built on an architecture that was designed to be the backbone of the Internet of Things (IoT) environment of the future. But this architecture has made it more challenging for service providers like exchanges to integrate IOTA compared to traditional blockchain-based distributed ledgers.

Within the Chrysalis update (also known as IOTA 1.5), some building blocks were changed to be more approachable and more aligned with currently leveraged standards. We also ship many [client libraries](../explanations/libraries.md) to help developers implement IOTA into their applications:

![Wallet.rs layer overview](/img/guides/wallet_rs_layers.svg)

## How Do I Implement It to My Exchange?

In [wallet.rs](/wallet.rs/welcome), we use an account model so you can create an account for each of your users. Another approach would be to use one account and generate multiple addresses, which you can then link to the users in your database. The wallet library is designed to be as flexible as possible to back up any of your use cases.

Since IOTA addresses in the Chrysalis network are perfectly reusable, they can be mapped to your users in a clear and concise way:

- Create an account for every user -> `Multi Account` approach.
- Create one account with many addresses -> `Single account` approach.

The library supports derivation for multiple accounts from a single seed. An account is simply a deterministic identifier from which multiple addresses can be further derived.

The library also allows consumers to assign a meaningful alias to each account. In addition to this, generated individual accounts can also be searched via generated addresses. This means it does not matter whether aliases or addresses are known as the search for the related account is very straightforward using the `wallet.rs` library.

It also leaves the choice to users if they want to segregate their funds across multiple accounts or multiple addresses. The following illustration outlines the relationships between seed, accounts, and addresses:

![Relationship between seed, accounts, and addresses](/img/guides/accounts.svg)

### Multi-Account Approach

The multi-account approach is used to create an account for each individual user. The created accounts can then be linked to the internal user IDs as an account alias, which are distinctly separated.

### Single Account Approach

The single account approach allows for just one account and creates addresses for each user. The associated addresses are then linked to the internal user IDs and store who owns which address in the database. Most exchanges are more familiar with the single account approach and find it easier to use, implement, and backup.

## Implementation Guide

This guide explains how to use the IOTA Wallet Library to successfully implement IOTA into an exchange. If you have already implemented the IOTA Hub, please visit the [Hub Migration Guide](migration/hub_migration.md).

Features of the Wallet Library:

- Secure seed management.
- Account management (with multiple accounts and multiple addresses).
- Confirmation monitoring.
- Deposit address monitoring.
- Backup and restore functionality.

## How Does it Work?

The Wallet Library is a stateful package with a standardized interface for developers to build applications involving IOTA _value transactions_. It offers abstractions to handle IOTA payments and can optionally interact with the IOTA Stronghold for seed handling, seed storage, and state backup. You can also use an SQLite database instead of Stronghold but it is not as secure.

For further reference, you can read our [wallet documentation here](/wallet.rs/welcome).

The following examples cover the _multi-account approach_ using the `NodeJS` binding:

1. Set up the Wallet Library.
2. Create an account for each user.
3. Generate a user address for deposits.
4. Listen to events.
5. Check the user balance.
6. Enable withdrawals.

Since all `wallet.rs` bindings are based on core principles provided by the `wallet.rs` library, the outlined approach is very similar regardless of the programming language of your choice.

### 1. Set up the Wallet Library

First, you should install the components that are needed to use `wallet.rs` and the binding of your choice; it may vary a bit from language to language. In the case of the `NodeJs` binding, it is straightforward since it is distributed via the `npm` package manager. We also recommend you use `dotenv` for password management.

You can read more about [backup and security in this guide](./backup_security.md).

```bash
npm install @iota/wallet dotenv
touch .env
```

Then, input your password to the `.env` file like this:

```bash
SH_PASSWORD="here is your super secure password"
```

Once you have everything needed to use the `wallet.rs` library, it is necessary to initialize the `AccountManager` instance which creates (opens) a secure storage for individual accounts (backed up by `Stronghold` by default).

The storage is encrypted at rest, so you need a strong password and location where to put your storage.

:::note

Manage your password with the utmost care.

:::

Technically speaking, "storage" means a single file called `wallet.stronghold`. It is also needed to generate a seed (mnemonic) that serves as a cryptographic key from which all accounts and related addresses are generated.

One of the key principles behind the `stronghold`-based storage is that no one can get a seed from the storage. You deal with all the accounts purely via the `Account_Manager` instance where all complexities are hidden under the hood and are dealt with securely. In case you would also like to store a seed somewhere else, there is another method, `AccountManager.generateMnemonic()`, that generates random seeds. This method can be leveraged before the actual account initialization.

:::note

Keep the `stronghold` password and the `stronghold` database on separate devices. See the [backup and security guide](./backup_security.md) for more information.

:::

Import the Wallet Library and create an account manager:

```javascript
const { AccountManager, SignerType } = require('@iota/wallet');

// Setup IOTA Wallet Library
const manager = new AccountManager({
  storagePath: './storage',
});
manager.setStrongholdPassword(process.env.SH_PASSWORD);
const mnemonic = manager.generateMnemonic(); // seed generation
// Store your mnemonic in a secure location, it's the only backup option apart from the Stronghold file
console.log('Save this securely: ' + mnemonic);
manager.storeMnemonic(SignerType.Stronghold, mnemonic);
```

Once the stronghold storage is created, it is not needed to generate the seed any longer (`manager.storeMnemonic(SignerType.Stronghold, manager.generateMnemonic())`). It has already been saved in the storage together with all account information.

### 2. Create an Account For a User

Once the backend storage is created, individual accounts for individual users can be created:

```javascript
let account = await manager.createAccount({
  alias: user_id, // an unique id from your existing user
  clientOptions: {
    node: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe/',
    localPow: false,
  },
});
```

Each account is related to a specific IOTA network (mainnet/devnet) which is referenced by a node property, such as node url (in this example, the Chrysalis devnet balancer).

For more information about `clientOptions`, please refer to the [Wallet NodeJs API Reference](/wallet.rs/reference/nodejs).

The `Alias` can be whatever fits to the given use case and should be unique. The `Alias` is typically used to identify the given account later on. Each account is also represented by an `index` which is incremented (by 1) every time a new account is created. Any account can then be referred to via `index`, `alias`, or one of its generated `addresses`.

Once an account has been created, you get an instance of it using the following methods: `AccountManager.getAccount(accountId)`, `AccountManager.getAccountByAlias(alias)` or `AccountManager.getAccounts()`.

The most common methods of `account` instance include:

- `account.alias()` - returns an alias of the given account.
- `account.listAddresses()` - returns list of addresses related to the account.
- `account.getUnusedAddress()` - returns a first unused address.
- `account.generateAddress()` - generate a new address for the address index incremented by 1.
- `account.balance()` - returns the balance for the given account.
- `account.sync()` - sync the account information with the tangle.

### 3. Generate a User Address to Deposit Funds

`Wallet.rs` is a stateful library which means it caches all relevant information in storage to provide performance benefits while dealing with, potentially, many accounts/addresses.

:::tip

Sync the account info with the network during the wallet manipulation to be sure the storage reflects an actual state of the ledger (network).

:::

Every account can own multiple addresses. Addresses are represented by an `index` which is incremented (by 1) every time a new address is created. The latest address is accessible via `account.latestAddress()`:

```javascript
// Always sync before account interactions
console.log('syncing...');
const synced = await account.sync();
console.log('synced!');

// By design, the last address of each account is an unused address which can be used as deposit address
const latestAddress = account.latestAddress();

console.log('Need a refill? Send it to this address:', latestAddress);
```

You can fill the address with Devnet Tokens with the [IOTA Faucet](https://faucet.devnet.chrysalis2.com/) to test it.

Addresses are of two types, `internal` and `public` (external):

- Each set of addresses are independent from each other and has an independent `index` id.
- Addresses that are created by `account.generateAddress()` are indicated as `internal=false` (public).
- Internal addresses (`internal=true`) are called `change` addresses and are used to send the excess funds to them.
- The approach is also known as a _BIP32 Hierarchical Deterministic wallet (HD Wallet)_.

:::note

You may remember IOTA 1.0 network in which addresses were not reusable. It is no longer true and addresses can be reused multiple times in the Chrysalis network.

:::

### 4. Listen to Events

The `Wallet.rs` library supports several events for listening. As soon as the given event occurs, a provided callback is triggered.

Below is an example of fetching existing accounts and listening to transaction events coming into the account:

```javascript
const { addEventListener } = require('@iota/wallet');

const callback = function (err, data) {
  if (err) console.log('err:', err);
  console.log('data:', data);
};

//Adds a new event listener with a callback in the form of (err, data) => {}. Supported event names:
addEventListener('BalanceChange', callback);

// Possible Event Types:
//
// ErrorThrown
// BalanceChange
// NewTransaction
// ConfirmationStateChange
// Reattachment
// Broadcast
```

Example output:

```bash
data: {
  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',
  address: {
    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',
    balance: 20000000,
    keyIndex: 0,
    internal: false,
    outputs: [ [Object], [Object] ]
  },
  balance: 20000000
}
```

`accountId` can then be used to identify the given account via `AccountManager.getAccount(accountId)`.

For further reference, you can read more about events in the [API reference](/wallet.rs/reference/nodejs).

### 5. Check the Account Balance

Get the available account balance across all addresses of the given account:

```javascript
// Always sync before account interactions
console.log('syncing...');
const synced = await account.sync();
console.log('synced!');
let balance = account.balance().available;
console.log('available balance', balance);
```

### 6. Enable Withdrawals

Sending tokens is performed via the `SyncedAccount` instance that is a result of the `account.sync()` function:

```javascript
console.log('syncing...');
const synced = await account.sync();
console.log('available balance', account.balance().available);

const address =
  'atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r';
const amount = 1000000; // Amount in IOTA: 1000000 == 1 MIOTA

const node_response = await account.send(address, amount);

console.log(
  'Check your message on https://explorer.iota.org/chrysalis/message/',
  node_response.id,
);
```

The full function signature is `Account.send(address, amount[, options])`.

Default options are fine and are successful; however, additional options can be provided, such as `remainderValueStrategy`:

- `changeAddress`: Send the remainder value to an internal address.
- `reuseAddress`: Send the remainder value back to its original address.

The `Account.send()` function returns a `wallet message` that fully describes the given transaction. The `messageId` can be used later for checking a confirmation status. Individual messages related to the given account can be obtained via the `account.listMessages()` function.

Please note that when sending tokens, a [dust protection](../reference/details.md#dust-protection) mechanism should be considered.
