# Send Shimmer tokens with IOTA SDK in NodeJs

## Introduction

This tutorial shows you how to get Shimmer Testnet tokens and send them to another address using JavaScript/TypesSript.

### What you will learn

- [Create a Stronghold account](#create-an-account)
- [Generate a Shimmer address](#generate-an-address)
- [Get some Shimmer testnet tokens](https://faucet.testnet.shimmer.network/)
- [Fetch your balance](#check-the-balance)
- [Send tokens to another address](#send-tokens)

## Set Up Your Environment

Before you begin, please ensure you have [Installed NodeJs](https://nodejs.org/) and updated it to the latest stable version.

Setup a `.env` file, and if you want, you can change the [BIP39 mnemonic](https://en.bitcoin.it/wiki/BIP_0039) and choose a different password, but be sure to set the node URLs to a Shimmer Testnet node (we use the nodes provided by IF in this tutorial). For example:

```sh
# Mnemonics (Don't ever use them to manage real funds!)
MNEMONIC="endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river"
MNEMONIC_2="width scatter jaguar sponsor erosion enable cave since ancient first garden royal luggage exchange ritual exotic play wall clinic ride autumn divert spin exchange"
# The Wallet database folder used to store account data
WALLET_DB_PATH="./example-walletdb"
# The Stronghold snapshot file location used to store secrets
STRONGHOLD_SNAPSHOT_PATH="./example.stronghold"
# The password to unlock the Stronghold snapshot file (Don't use it to protect real secrets!)
STRONGHOLD_PASSWORD="24?drowssap"
# The node URL to issue transactions with
NODE_URL="https://api.testnet.shimmer.network"
# The faucet URL to request test coins from
FAUCET_URL="https://faucet.testnet.shimmer.network/api/enqueue"
# The explorer URL to look up transactions, blocks, addresses and more
EXPLORER_URL="https://explorer.shimmer.network/testnet"
```

## Create an account

Now that we have all details, let's go through the example code.

After including the needed dependencies, we have have the main function that loads the environment variables from the `.env` file we created earlier. It uses the information to set up [Stronghold](/stronghold.rs/welcome) to store our seed safely.

```js
import { Wallet, CoinType, initLogger, WalletOptions } from '@iota/sdk';

// This example uses secrets in environment variables for simplicity which should not be done in production.
require('dotenv').config({ path: '.env' });

const walletOptions: WalletOptions = {
  storagePath: process.env.WALLET_DB_PATH,
  clientOptions: {
    nodes: [process.env.NODE_URL],
  },
  coinType: CoinType.Shimmer,
  secretManager: {
    stronghold: {
      snapshotPath: process.env.STRONGHOLD_SNAPSHOT_PATH,
      password: process.env.STRONGHOLD_PASSWORD,
    },
  },
};

const wallet = new Wallet(walletOptions);

// A mnemonic can be generated with `Utils.generateMnemonic()`.
// Store the mnemonic in the Stronghold snapshot, this needs to be done only the first time.
// The mnemonic can't be retrieved from the Stronghold file, so make a backup in a secure place!
await wallet.storeMnemonic(process.env.MNEMONIC);

// Create a new account
const account = await wallet.createAccount({
  alias: 'Alice',
});
console.log('Generated new account:', account.getMetadata().alias);
```

If everything worked correctly, you will see the message `Generated a new account` and you will find a Stronghold file and a database directory have been created to store the current state of your wallet.

## Generate an address

In this step, we will generate a new address to receive some testnet tokens. For this we will use the second example called `02_generate_address.rs`.

Here again we read the environment variables from the `.env` file and then we recreate the account manager which will use the Stronghold file and database that were created in the previous step.

```js
// To create an address we need to unlock stronghold.
await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);

const address = (await account.generateEd25519Addresses(1))[0];

console.log(`Generated address:`, address.address);
```

You can see all testnet addresses begin with `rms`, which is the reverse of what real Shimmer addresses start with. This is how you can tell testnet and real addresses apart. You can get some testnet tokens from the [faucet](https://faucet.testnet.shimmer.network).

## Check the balance

Now you should have some tokens. To validate that, we can use the library to inspect our account.

```js
// Sync new outputs from the node.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _syncBalance = await account.sync();

// After syncing the balance can also be computed with the local data. (This is optional.)
const balance = await account.getBalance();
console.log('Balance', balance);
```

This should show a positive balance. If no tokens appear, try to request tokens from the faucet again. If that still doesn't work, please come over to [our Discord](https://discord.iota.org/), and we'll sort it out.

## Send Tokens

Now that you have some tokens, you can send them to a valid address using the `Account.send` function.

```js
await account.sync();

// To sign a transaction we need to unlock stronghold.
await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);

// Replace with the address of your choice!
const address =
  'rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu';
const amount = BigInt(1);

const transaction = await account.send(amount, address, {
  allowMicroAmount: true,
});

console.log(`Transaction sent: ${transaction.transactionId}`);

const blockId = await account.retryTransactionUntilIncluded(
  transaction.transactionId,
);

console.log(`Block sent: ${process.env.EXPLORER_URL}/block/${blockId}`);
```

This could take some time. The manager will automatically review your addresses to find enough tokens to match the amount you want to send. Then, it will sign and send the resulting transaction to the node. It will warn you when you don't have enough balance, but otherwise, it will show you the transaction ID, which you can use to find your transaction in the [Testnet explorer](https://explorer.shimmer.network/testnet).

Congratulations, you are now able to manage your tokens programmatically!

## What's next?

You can now create an account, generate addresses, and transfer tokens. Check out the [documentation](/iota-sdk/welcome) to see what more you can do. [Create native tokens](/iota-sdk/how-tos/native-tokens/create/), or [mint non-fungible tokens (NFTs)](/iota-sdk/how-tos/nfts/mint-nft/) and develop your application! Have fun and good luck!
