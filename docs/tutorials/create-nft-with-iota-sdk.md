# Create an NFT with the IOTA SDK and IPFS in NodeJs

In this tutorial, you will upload your desired image to [IPFS](https://ipfs.tech/) and create an NFT from the unique IPFS URL on the Shimmer Testnet. This tutorial will build on the tutorial "[Setup Testnet address and receive funds from the faucet](https://wiki.iota.org/tutorials/wallet-setup)". If you still need to complete it, please do so, and afterward, come back here or make sure you have a funded wallet. You will use the same folder and development environment as in the mentioned prerequired tutorial, allowing you to reuse the Stronghold account with funds on it.

## Prerequisites

- [Node.js](https://nodejs.org/en/) v16 and above supported. Tested till v20.
- [IOTA SDK](https://www.npmjs.com/package/@iota/sdk) v1.0.6 used here.
- Finish the [Set Up a Testnet Address and Receive Funds from the Faucet](https://wiki.iota.org/tutorials/wallet-setup) tutorial.

## Set Up

### Prepare Your Development Environment

Navigate to the folder you created when completing the [Set Up a Testnet Address and Receive Funds from the Faucet tutorial](https://wiki.iota.org/tutorials/wallet-setup):

```bash
cd wallet-setup
```

#### Install packages

Next to the existing dependencies of the wallet setup tutorial, you will only need to add two more packages by running the following commands:

While writing this tutorial the `@iota/sdk` version used was v1.0.6.

```bash
npm install @iota/sdk
npm install ipfs-core
```

Afterward, your `package.json` file should contain the following dependencies:

```json {6-12}
{
  "name": "wallet-setup",
  "version": "1.0.0",
  "description": "",
  "main": "create-mnemonic.js",
  "dependencies": {
    "@iota/sdk": "^1.0.0",
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

![NFT Image](/img/tutorials/nft-image.jpg)

---

## Scripts

### Create NFT

Create a new file `create-nft.js` and add the following code:

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets into the file you have just created.

:::

#### 1. Imports and parameters

```javascript
// Libraries
import {
  AddressUnlockCondition,
  Ed25519Address,
  IssuerFeature,
  MintNftParams,
  SenderFeature,
  utf8ToHex,
  Utils,
  Wallet,
} from '@iota/sdk';
const IPFS = require('ipfs-core');
const fs = require('fs');

// Environment variables
require('dotenv').config({ path: './.env' });
```

#### 2. Upload file to IPFS

The function `uploadByPath()` starts a local IPFS node, reads the file from the provided path, uploads it to IPFS, and returns the unique IPFS content identifier.

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

#### 3. Prepare the NFT's metadata

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
if (!process.env.STRONGHOLD_PASSWORD) {
  throw new Error('.env STRONGHOLD_PASSWORD is undefined, see .env.example');
}

const wallet = new Wallet({
  storagePath: process.env.WALLET_DB_PATH,
});

const account = await wallet.getAccount('Alice');

// We send from the first address in the account.
const senderAddress = (await account.addresses())[0].address;

// We need to unlock stronghold.
await wallet.setStrongholdPassword(process.env.STRONGHOLD_PASSWORD);
```

#### 5. Mint NFT

You should prepare the parameters for minting the NFT and define them in a `MintNftParms` type.

- `address`: (optional) Bech32 encoded address to which the Nft will be minted. The default will use the first address of the account.
- `sender`: Bech32 encoded sender address
- `metadata`: Hex encoded bytes containing metadata as per IRC27 from [TIP-27](/tips/tips/TIP-0027/#nft-schema) as done in the previous step.
- `tag`: Hex encoded bytes with custom tags that can help you categorize.
- `issuer`: Bech32 encoded issuer address
- `immutableMetadata`: Similar to metadata as hex encoded bytes. However, this one can not be updated later once minted. It can contain core properties that are immutable.

```js
      const params: MintNftParams = {
          sender: senderAddress,
          metadata: metadataBytes,
          tag: utf8ToHex('some NFT tag'),
          issuer: senderAddress,
          immutableMetadata: metadataBytes,
      };
      const prepared = await account.prepareMintNfts([params]);

      let transaction = await prepared.send();
      console.log(`Transaction sent: ${transaction.transactionId}`);

      // Wait for transaction to get included
      let blockId = await account.retryTransactionUntilIncluded(
          transaction.transactionId,
      );

      console.log(
          `Block included: ${process.env.EXPLORER_URL}/block/${blockId}`,
      );
      console.log('Minted NFT!');
      }
    } catch (error) {
        console.log('Error: ', error);
    }
    process.exit(0);
}

run();
```

Run the script `create-nft.js` and check the console output to follow the steps described above:

```sh
node create-nft.js
```

Check out the transaction block that minted your NFT in the [Shimmer Testnet Explorer](https://explorer.shimmer.network/testnet). If everything went according to plan, the transaction spent a basic output and created two new unspent outputs, one NFT output, and a new basic output. In the newly created NFT output, you can see the immutable metadata of your NFT together with the unique IPFS URL.
