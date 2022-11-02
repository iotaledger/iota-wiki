# Create nested NFT's with the Wallet Library

In this tutorial you will create two NFT's on the Shimmer testnet. In order to illustrate the concept of nested NFT's, meaning a NFT owns another NFT, you will send the second NFT to the address of the first NFT. So instead of just holding a bunch of NFT's on one user address without any affiliation, this functionality allows the user to represent hierarchies and dependencies between NFT's.

## User Story

- An in-game avatar is represented as a NFT and holds several in-game items, which themselves are represented as NFT's as well
- The avatar NFT owns the item NFT's wo the hierarchies and dependencies for the game are reperesented directly on-chain

## Prerequisites

- [Node.js](https://nodejs.org/en/).
- This tutorial will build on the tutorial [Testnet Wallet Setup](https://wiki.iota.org/tutorials/wallet-setup). If you haven't completed it, please do so, and afterward, come back here, or make sure you have a prefunded wallet. You will use the same folder and development environment as in the mentioned prerequired tutorial, allowing you to reuse the Stronghold account with funds on it.

## Set Up

### Prepare Your Development Environment

Navigate to the folder you created when completing the [Testnet Wallet Setup](https://wiki.iota.org/tutorials/wallet-setup):

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

### Prepare Images for your nested NFT's

Add the images to your folder and make sure they are named correctly as `avatar.jpg`, `sword.jpg` and `mask.jpg`.

**ToDo:** Insert blank warrior and items here.

---

## Scripts

### Create NFT's

Create a new file `create-nfts.js` and add the following code.

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.

:::

#### 1. Imports and parameters

```javascript
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

#### 2. Start local IPFS node

The function `startIpfsNode()` starts a local IPFS node for file upload.

```javascript
// This function starts a local IPFS node for file upload
async function startIpfsNode() {
  console.log('\n');
  console.log(consoleColor, `Start local IPFS node for upload:`);

  let node;
  if (!node) {
    node = await IPFS.create({
      repo: `ipfs_node`,
    });
  }
  return node;
}
```

#### 3. Upload file to IPFS

The function `uploadToIPFS()` receives a running ipfs node instance and uploads a file to IPFS from a given file path.

```javascript
// This function receives a running ipfs node instance and a file path for the upload
async function uploadToIPFS(ipfsNode, filePath) {
  try {
    // Read file from path
    const file = fs.readFileSync(filePath);

    // Upload file to IPFS
    const fileAdded = await ipfsNode.add(file);
    const contentIdentifier = fileAdded.path;

    console.log('\n');
    console.log(consoleColor, `Your file was successfully uploaded to IPFS:`);
    console.log(`https://ipfs.io/ipfs/${contentIdentifier}`, '\n');

    return contentIdentifier;
  } catch (error) {
    console.error('IPFS upload error', error);
  }
}
```

#### 4. Mint NFT

The function `mintNFT()` takes a NFT name, the previously created and unique IPFS identifier and an unlocked stronghold account in order to mint an NFT on the configurated network.

:::note

The used metadata follows [Tangle Improvement Proposal (TIP) 27](https://github.com/Kami-Labs/tips/blob/main/tips/TIP-0027/tip-0027.md).

:::

```javascript
// This function creates NFT metadata and mints a new NFT
async function mintNFT(itemName, ipfsCid, strongholdAccount) {
  // Define NFT metadata
  const metadataObject = {
    standard: 'IRC27',
    type: 'image/jpeg',
    version: 'v1.0',
    name: `${itemName}`,
    uri: `https://ipfs.io/ipfs/${ipfsCid}`,
  };

  const metadataBytes = utf8ToHex(JSON.stringify(metadataObject));

  const response = await strongholdAccount.mintNfts([
    {
      immutableMetadata: metadataBytes,
    },
  ]);

  console.log(consoleColor, `Your NFT was successfully minted in this block:`);
  console.log(`${explorerURL}/block/${response.blockId}`, '\n');
}
```

#### 5. Start

This is the main function, which first loads and unlocks a stronghold account and then triggers the IPFS upload as well as NFT minting process for a list of provided file names. This part will mint three NFT's (Avatar, Mask, Sword).

```javascript
// This function loads a stronghold account and triggers the IPFS upload as well as NFT minting process for a list of files
async function run() {
  try {
    const manager = new AccountManager({
      storagePath: `./${accountName}-database`,
    });
    await manager.setStrongholdPassword(password);
    const strongholdAccount = await manager.getAccount(accountName);
    await strongholdAccount.sync();

    const ipfsNode = await startIpfsNode();

    const items = ['avatar', 'mask', 'sword'];

    // This loop through the list of file names
    for (const item of items) {
      let cid = await uploadToIPFS(ipfsNode, `${item}.jpg`);
      await mintNFT(item, cid, strongholdAccount);
    }
  } catch (error) {
    console.log('Error: ', error);
  }
  process.exit(0);
}

run();
```

Run the script `create-nfts.js` and check the console output to follow along the steps described above:

```
node create-nfts.js
```

# Open ToDo's:

- Polish user storys
- Add visuals of warriors to the user story
  - Ideally a short animation starting with a blank avatar, which then receives items step by step.
- Show how all NFT's belong to one address
  - No hierarchy => show with graphic and explorer
- Send item nft's to avatar nft
  - Show hierarchy with graphic (similar to thumbnail) and explorer
