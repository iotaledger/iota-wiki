# Create a NFT with wallet library and IPFS

- Upload NFT image file to IPFS
- Create NFT on Shimmer testnet
This tutorial assumes you have walked through the tutorial "Setup testnet address and receive funds from faucet", which creates a Stronghold account and an address with funds on it (Add link!!!)

## Prerequisites

- Installed [Node.js](https://nodejs.org/en/)
- Finished tutorial "Setup testnet address and receive funds from faucet"

## Setup

### Prepare development environment

Create a new folder for the tutorial in a location of your choice and navigate to it:

```bash
mkdir create-nft
cd create-nft
```

Run the Node.js initializer to configure the project:

```bash
npm init --yes
```

Overwrite the `package.json` file with the following content:

```yaml
{
  "name": "create-nft",
  "version": "1.0.0",
  "description": "",
  "main": "create-nft.js",
  "dependencies": {
    "@iota/wallet": "2.0.2-alpha.21",
    "@iota/client": "3.0.0-alpha.5",
    "ipfs-core": "0.10.8",
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
> **NOTE:**  Installation might take a while, if there is no prebuilt client/wallet NPM package for your combination of OS and NodeJS version.

```bash
npm install
```

***

### Prepare network configuration

Create a new file `networkConfig.js` and add the following code:

```javascript
var networkConfig = {};

// Shimmer Beta network configuration
networkConfig.node = 'https://api.testnet.shimmer.network';
networkConfig.faucetWebsite = 'https://faucet.testnet.shimmer.network';
networkConfig.faucetApi = 'https://faucet.testnet.shimmer.network/api/enqueue';
networkConfig.explorer = 'https://explorer.shimmer.network/testnet';

module.exports = { networkConfig };
```

***

### Prepare environment variables

Create a new file `.env` and add the content below:

```javascript
ACCOUNT_NAME = "<Enter_your_name_here>"
SH_PASSWORD = "<Enter_your_password_here>"
MNEMONIC = "<You_will_create_your_own_mnemonic_seed_phrase_in_the_next_step_and_paste_it_in_here>"
```

Enter your desired account name as well as a secure Stronghold password. Your new mnemonic seed phrase will be created in the next step and you will paste it in here afterwards.

***

### Prepare image for NFT

Add your desired *.jpg file to this folder and rename it to `nft-image.jpg`. For this tutorial we'll use the following image:

![NFT Image](./images/nft-image.jpg)

***

## Scripts

### Upload to IPFS script

```javascript
const IPFS = require('ipfs-core');
const fs = require('fs');

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';

let node;

const uploadByPath = async filePath => {
  try {
    console.log('\n')
    console.log(consoleColor, `Start local IPFS node for upload:`);

    // Set up local IPFS node for upload
    if (!node) {
      node = await IPFS.create({
        repo: `ipfs_node`,
      }); 
    }

    // Read file
    const file = fs.readFileSync(filePath);

    // Upload file
    const fileAdded = await node.add(file);
    const { path } = fileAdded;

    console.log('\n')
    console.log(consoleColor, `Your file was uploaded to IPFS with the following Content Identifier (CID):`);
    console.log(path, '\n')

    console.log(consoleColor, `Check your file on IPFS:`);
    console.log(`https://ipfs.io/ipfs/${path}`, '\n')

    return { path };
  } catch (error) {
    console.error('IPFS upload error', error);
  }
}

module.exports = {
  uploadByPath
};
```

***

### Create NFT script

```javascript
const { utf8ToHex } = require('@iota/client');
const { uploadByPath } = require('./ipfs');
const { AccountManager } = require('@iota/wallet');

// Import password and seed phrase
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const accountName = process.env.ACCOUNT_NAME;

// Network configuration
const { networkConfig } = require("./networkConfig.js");
const explorerURL = networkConfig.explorer;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';


async function run() {
    try {

        const filePath = "nft-image.jpg";
        const ipfsCid = await uploadByPath(filePath);

        // Define NFT metadata
        const metadataObject = {
        standard: "IRC27",
        type: "image/jpeg",
        version: "v1.0",
        name: "<Enter_your_desired_name_here>",
        uri: `https://ipfs.io/ipfs/${ipfsCid.path}`
        };

        const metadataBytes = utf8ToHex(JSON.stringify(metadataObject));

        const manager = new AccountManager({
            storagePath: `./${accountName}-database`,
        });
        await manager.setStrongholdPassword(password);
        const account = await manager.getAccount(accountName);
        
        await account.sync();

        const response = await account.mintNfts([
            {
                immutableMetadata: metadataBytes
            }
        ]);

        console.log(consoleColor, `Check your block on the explorer:`);
        console.log(`${explorerURL}/block/${response.blockId}`, '\n')
    } catch (error) {
        console.log('Error: ', error);
    }
    process.exit(0);
}

run();
```
