# Create an NFT with the Wallet Library and IPFS

In this tutorial, you will upload your desired image to [IPFS](https://ipfs.tech/) and create an NFT from the unique IPFS URL on the Shimmer testnet. This tutorial will build on the tutorial "Setup testnet address and receive funds from the faucet" ([IOTA Wiki PR under review](https://wiki.iota.org/tutorials/wallet-setup)). If you haven't completed it, please do so, and afterward, come back here, or make sure you have a prefunded wallet. You will use the same folder and development environment as in the mentioned prerequired tutorial, allowing you to reuse the Stronghold account with funds on it.

## Prerequisites

- [Node.js](https://nodejs.org/en/).
- Finish the [Set up testnet address and receive funds from faucet](https://wiki.iota.org/tutorials/wallet-setup) tutorial.

## Set Up

### Prepare Your Development Environment

Navigate to the folder you created when completing the [set up a testnet address and receive funds from the faucet tutorial](https://wiki.iota.org/tutorials/wallet-setup):

```bash
cd wallet-setup
```

#### Install Packages

Next to the existing dependencies of the wallet setup tutorial, you will only need to add two more packages by running the following commands:

```bash
npm install @iota/client
npm install ipfs-core@0.10.8
```

Afterward, your `package.json` file should contain the following dependencies:

```json {6-12}
{
  "name": "wallet-setup",
  "version": "1.0.0",
  "description": "",
  "main": "create-mnemonic.js",
  "dependencies": {
    "@iota/client": "^3.0.0-alpha.7",
    "@iota/wallet": "^2.0.2-alpha.21",
    "bip39": "^3.0.4",
    "dotenv": "^16.0.1",
    "ipfs-core": "^0.15.4"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "Apache-2.0"
}
```

---

### Prepare an Image for the NFT

Add your desired `*.jpg` file to the `wallet-setup` folder you created and rename it to `nft-image.jpg`.

For this tutorial we'll use the following image:

![NFT Image](/nft-image.jpg)

---

## Scripts

### Create NFT

Create a new file `create-nft.js` and add the following code:

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.

:::

#### 1. Imports and parameters

```javascript
// Libraries
const { utf8ToHex } = require('@iota/client');
const { AccountManager } = require('@iota/wallet');
const IPFS = require('ipfs-core');
const fs = require('fs');

// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const accountName = process.env.ACCOUNT_NAME;

// Network configuration
const { networkConfig } = require('./networkConfig.js');
const explorerURL = networkConfig.explorer;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Upload file to IPFS

The function `uploadByPath()` starts a local IPFS node, reads the file from the provided path, uploads it to IPFS and returns the unique IPFS content identifer.

```javascript
async function uploadByPath(filePath) {
  try {
    console.log('\n');
    console.log(consoleColor, `Start local IPFS node for upload:`);

    // Set up local IPFS node for upload
    let node;
    if (!node) {
      node = await IPFS.create({
        repo: `ipfs_node`,
      });
    }

    // Read file from path
    const file = fs.readFileSync(filePath);

    // Upload file to IPFS
    const fileAdded = await node.add(file);
    const contentIdentifier = fileAdded.path;

    console.log('\n');
    console.log(
      consoleColor,
      `Your file was uploaded to IPFS with the following Content Identifier (CID):`,
    );
    console.log(contentIdentifier, '\n');

    console.log(consoleColor, `Check your file on IPFS:`);
    console.log(`https://ipfs.io/ipfs/${contentIdentifier}`, '\n');

    return contentIdentifier;
  } catch (error) {
    console.error('IPFS upload error', error);
  }
}
```

#### 3. Prepare NFT metadata

This part calls the `uploadByPath()` function described above and prepares the metadata of your NFT. Make sure to give your NFT a nice name here.

```javascript
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
            uri: `https://ipfs.io/ipfs/${ipfsCid}`
        };

        const metadataBytes = utf8ToHex(JSON.stringify(metadataObject));
```

#### 4. Import Stronghold account and synchronize

```javascript
const manager = new AccountManager({
  storagePath: `./${accountName}-database`,
});
await manager.setStrongholdPassword(password);
const account = await manager.getAccount(accountName);

await account.sync();
```

#### 5. Mint NFT

```javascript
        const response = await account.mintNfts([
            {
                immutableMetadata: metadataBytes
            }
        ]);

        console.log(consoleColor, `Your NFT was successfully minted in this block:`);
        console.log(`${explorerURL}/block/${response.blockId}`, '\n')
    } catch (error) {
        console.log('Error: ', error);
    }
    process.exit(0);
}

run();
```

Run the script `create-nft.js` and check the console output to follow along the steps described above:

```
node create-nft.js
```

Make sure to check out the transaction block that minted your NFT in the Shimmer explorer. If everything went according to plan, the transaction spent a basic output and created two new unspent outputs, one NFT output, and a new basic output. In the newly created NFT output, you can see the immutable metadata of your NFT together with the unique IPFS URL.
