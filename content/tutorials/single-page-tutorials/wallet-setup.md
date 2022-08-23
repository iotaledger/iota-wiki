# Setup testnet address and receive funds from faucet

## What you will learn

- Create a mnemonic seed phrase
- Create a Stronghold account
- Generate a Shimmer testnet address
- Get some Shimmer testnet tokens
- Check your balance

## Prerequisites

- Development Environment and Libraries
  - Installed [Node.js](https://nodejs.org/en/)

***

## Setup

### Prepare development environment

Create a new folder for the tutorial in a location of your choice and navigate to it:

```bash
mkdir wallet-setup
cd wallet-setup
```

Run the Node.js initializer to configure the project:

```bash
npm init --yes
```

Overwrite the `package.json` file with the following content:

```yaml
{
  "name": "wallet-setup",
  "version": "1.0.0",
  "description": "",
  "main": "create-mnemonic.js",
  "dependencies": {
    "@iota/wallet": "2.0.2-alpha.21",
    "bip39": "^3.0.4",
    "dotenv": "^16.0.1"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "Apache-2.0"
}
```

Install new dependencies:
> **NOTE:**  Installation might take a while, if there is no prebuilt wallet NPM package for your combination of OS and NodeJS version.

```bash
npm install
```

***

### Prepare network configuration

Create new file `networkConfig.js` and add the following code:

```javascript
var networkConfig = {};

// Shimmer Testnet
networkConfig.node = 'https://api.testnet.shimmer.network';
networkConfig.faucet = 'https://faucet.testnet.shimmer.network/';
networkConfig.explorer = 'https://explorer.shimmer.network/testnet';

module.exports = { networkConfig };
```

***

### Prepare environment variables

Create new file `.env` and add the following code:

```javascript
ACCOUNT_NAME = "<Enter_your_name_here>"
SH_PASSWORD = "<Enter_your_password_here>"
MNEMONIC = "You will create your own mnemonic seed phrase in the next step and paste it here"
```

***

## Scripts

### Create mnemonic script

Create new file `create-mnemonic.js` and add the following code:

```javascript
// Libraries
const bip39 = require('bip39')
 
// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';


async function run() {
	// 256-bits of entropy lead to a 24 word mnemonic seed phrase
	const mnemonic = bip39.generateMnemonic(256);

	console.log(consoleColor, 'Copy your mnemonic seed phrase and paste it into the .env file:');
	console.log(mnemonic, '\n');
}

run();
```

Run the script `create-mnemonic.js` and check the console output for your new mnemonic seed phrase:
```console
node create-mnemonic.js
```
Now you can copy the seed phrase and paste it into the previously created `.env` file.

***

### Setup account script

Create new file `setup-account.js` and add the following code:

> **NOTE:**  We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.

#### 1. Imports and parameters

This part imports all necessary packages, network configuration parameters and environment variables.

```javascript
// Libraries
 const { AccountManager, CoinType } = require('@iota/wallet');

// Network configuration
const { networkConfig } = require("./networkConfig.js");
const nodeURL = networkConfig.node;
const faucetURL = networkConfig.faucet;
 
// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const mnemonic = process.env.MNEMONIC;
const accountName = process.env.ACCOUNT_NAME;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Create an account

Create a new account manager with defined options and store your mnemonic seed phrase.

```javascript
async function run() {
    // Define the account manager options with your set account name, password and node URL
    const accountManagerOptions = {
        storagePath: `./${accountName}-database`,
        clientOptions: {
            nodes: [nodeURL],
            localPow: true,},
        coinType: CoinType.Shimmer,
        secretManager: {
            Stronghold: {
                snapshotPath: `./wallet.stronghold`,
                password: `${password}`,
            },
        },
    };

    // Create a new account manager
    const manager = new AccountManager(accountManagerOptions);

    // Store your mnemonic seed phrase in Stronghold
    await manager.storeMnemonic(mnemonic);

    // Create a new account with your set account name and log it out
	const account = await manager.createAccount({
		alias: accountName,
	});
	console.log(consoleColor, `${accountName}'s account:`);
	console.log(account, '\n');
```

#### 3. Create address

This step creates a new address in your account.

```javascript
    // Generate a new address for your account and log it out
	const address = await account.generateAddress();
	console.log(consoleColor, `${accountName}'s new address:`);
	console.log(address.address, '\n');

	process.exit(0);
}

run();
```

Run the script `setup-account.js` and check the console output:
```console
node setup-account.js
```
Stronghold will create a new database older `<accountName>-database` and a file called `wallet.stronghold`, which will hold your secret(s). Also the console log should display your new account and a newly created address, which you can use to receive funds from the faucet. But let's check the balance of your address(es) first.

***

### Check balance script

Create new file `check-balance.js` and add the following code:

> **NOTE:**  We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.

#### 1. Imports and parameters

This part imports all necessary packages, network configuration parameters and environment variables.

```javascript
// Libraries
const { AccountManager } = require('@iota/wallet');

// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const accountName = process.env.ACCOUNT_NAME;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Import Stronghold account

Create new account manager from previously created Stronghold database path.

```javascript
async function run() {
    const manager = new AccountManager({
        storagePath: `./${accountName}-database`,
    });
    await manager.setStrongholdPassword(password);

    const account = await manager.getAccount(accountName);
```

#### 3. Get balance

Synchronize your account and fetch balance for imported account.

```javascript
    // Always sync before calling getBalance()
    await account.sync();
    const balance = await account.getBalance();

    console.log(consoleColor, `${accountName}'s Balance:`);
    console.log(balance, '\n');

    process.exit(0);
};

run();
```

Run the script `check-balance.js` and check the console output:
```console
node check-balance.js
```

If you created a new mnemonic seed phrase at the beginning of this tutorial, you should see an entirely empty balance on your account.

```
<Account Name>'s Balance:
{
  baseCoin: { total: '0', available: '0' },
  requiredStorageDeposit: '0',
  nativeTokens: [],
  nfts: [],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```


***

## Request funds from faucet

Now you can go to [Shimmer Testnet Faucet](https://faucet.testnet.shimmer.network/), paste in your newly created address and request funds.

> **NOTE:**  The 'Request' button will become clickable as soon as a valid Shimmer address is recognized.

![Shimmer Testnet Faucet](./images/shimmer-testnet-faucet.png)

After waiting a few seconds, you can check your balance again by running the script `check-balance.js`:
```console
node check-balance.js
```

If the faucet successfully transferred testnet tokens to your address, your balance should look similar to the content below. In case the total balance for the `baseCoin` is still 0, repeat the process of running the `check-balance.js` script, since it might take a little until the funds have been transferred:

```
<Account Name>'s Balance:
{
  baseCoin: { total: '1000000000', available: '1000000000' },
  requiredStorageDeposit: '42600',
  nativeTokens: [],
  nfts: [],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```

Congratulations, your account is now ready to explore other exciting features of the Shimmer network, such as native tokens and NFT's on L1.