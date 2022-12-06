# Create nested NFTs with the Wallet Library

In this tutorial you will create three NFTs on the Shimmer testnet. On Shimmer, NFTs are not just dumb tokens, instead they have their own unique addresses and are able to own other NFTs. This concept is known as nested NFTs. In order to illustrate this concept, you will follow along the storyline below.

## Storyline

Let's imagine a game with avatars and items, which all are represented as unique NFTs on the Shimmer network. In this example it allows an avatar to not only hold items in-game, but its avatar NFT to also own its unique item NFTs directly on-DLT, in order to represent the dependencies between in-game components on the Shimmer network.

![Blue Warrior](../static/warrior-blue.gif)

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

### Prepare Images for your nested NFTs

Add three images to your folder and make sure they are named correctly with `avatar.png`, `mask.png` and `weapon.png`. You can use the images below, or pick your own images as desired:

![Warrior avatar](../static/warrior-avatar.png)
![Warrior mask](../static/warrior-mask.png)
![Warrior weapon](../static/warrior-weapon.png)

---

## Scripts

### Create NFTs

Create a new file `create-nfts.js` and add the following code.

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
    console.log(
      consoleColor,
      `Your file "${filePath}" was successfully uploaded to IPFS:`,
    );
    console.log(`https://ipfs.io/ipfs/${contentIdentifier}`, '\n');

    return contentIdentifier;
  } catch (error) {
    console.error('IPFS upload error', error);
  }
}
```

#### 4. Mint NFT

The function `mintNFT()` takes a NFT name, the previously created and unique IPFS identifier and an unlocked Stronghold account in order to mint an NFT on the configurated network. The metadata will be stored in the immutable metadata field, meaning it will remain unchanged for as long as the NFT itself exists on the network. Also note that the function does not pass a specific address to the Stronghold Account method `mintNfts()`. By default the method will mint all NFTs on the first address of the used Stronghold account, as long as it holds enough funds for Storage Deposit.

:::note

The NFT metadata follows [Tangle Improvement Proposal (TIP 27)](https://github.com/Kami-Labs/tips/blob/main/tips/TIP-0027/tip-0027.md).

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

  const transactionId = response.transactionId;
  console.log(consoleColor, `Wait for transaction confirmation:`);
  console.log(`${explorerURL}/transaction/${transactionId}`, '\n');

  // This makes sure the transaction, your NFT is minted in, is confirmed before you mint the next one
  // The function checkInclusion() returns 'true' if the provided transaction has been confirmed
  if (await checkInclusion(strongholdAccount, transactionId, 20)) {
    console.log('\n');
    console.log(
      consoleColor,
      `Your NFT was successfully minted in this block:`,
    );
    console.log(`${explorerURL}/block/${response.blockId}`, '\n');
  }
}
```

#### 5. Wait for confirmation

The function `checkInclusion()` receives an unlocked Stronghold account, a transaction ID and a defined time period in seconds. It then checks every second, if the provided transaction has already been confirmed.

```javascript
// This function receives a transaction ID and the number of seconds you want to wait for confirmation
// Returns 'true' when confirmed and 'false' when not confirmed within time period
async function checkInclusion(strongholdAccount, transactionId, seconds) {
  try {
    for (let i = 1; i <= seconds; i++) {
      strongholdAccount.sync();
      let transactionObject = await strongholdAccount.getTransaction(
        transactionId,
      );
      console.log(`Transaction ${transactionObject.inclusionState}`);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (transactionObject.inclusionState === 'Confirmed') {
        return true;
      }
    }

    console.log(`Transaction was not confirmed within ${seconds} seconds.`);
    return false;
  } catch (error) {
    console.log('Error: ', error);
  }
}
```

#### 6. Main Script

This is the main function, which loads and unlocks a Stronghold account, triggers the IPFS upload and mints a NFT for every file provided in a list. In this case we will mint three NFTs (avatar, mask, weapon).

```javascript
// This function loads a Stronghold account and triggers the IPFS upload as well as NFT minting process for a list of files
async function main() {
  try {
    const manager = new AccountManager({
      storagePath: `./${accountName}-database`,
    });
    await manager.setStrongholdPassword(password);
    const StrongholdAccount = await manager.getAccount(accountName);
    await StrongholdAccount.sync();

    const ipfsNode = await startIpfsNode();

    const items = ['avatar', 'mask', 'weapon'];

    // This loop through the list of file names
    for (const item of items) {
      let cid = await uploadToIPFS(ipfsNode, `${item}.png`);
      await mintNFT(item, cid, StrongholdAccount);
    }
  } catch (error) {
    console.log('Error: ', error);
  }
  process.exit(0);
}

main();
```

Run the script `create-nfts.js` and check the console output to follow along the steps described above:

```
node create-nfts.js
```

Since you were minting three NFTs, your console output should look like this:

```console
Start local IPFS node for upload:
<IPFS-node-swarm-information>


Your file "avatar.png" was successfully uploaded to IPFS:
https://ipfs.io/ipfs/<ipfs-content-identifier>

Your NFT was successfully minted in this block:
https://explorer.shimmer.network/testnet/block/<blockId>



Your file "mask.png" was successfully uploaded to IPFS:
https://ipfs.io/ipfs/<ipfs-content-identifier>

Your NFT was successfully minted in this block:
https://explorer.shimmer.network/testnet/block/<blockId>



Your file "weapon.png" was successfully uploaded to IPFS:
https://ipfs.io/ipfs/<ipfs-content-identifier>

Your NFT was successfully minted in this block:
https://explorer.shimmer.network/testnet/block/<blockId>
```

### Ownership Hierarchy

As described in the `mintNFT()` function and as you can see on the Shimmer explorer, all three NFTs have been minted on the same user address. Of course this is not a bad thing, but if you want your NFTs to reflect a certain hierarchy between them on-DLT, this doesn't really help:

```text
User Address
├── avatar_nft
├── mask_nft
└── weapon_nft
```

In this example we want to show that both, the mask NFT and the weapon NFT are items that belong to your unique avatar NFT. In order to achieve a ownership hierarchy as presented below, you will send the mask NFT and the weapon NFT to the unique address of the avatar NFT:

```text
User Address
└── avatar_nft
    ├── mask_nft
    └── weapon_nft
```

### Preparation

In order to be able to send a NFT you will need its NFT ID and of course an address to send it to. In this case we will need the address of the avatar NFT and the IDs of both, the mask and weapon NFT. Since this tutorial here is based on the [Testnet Wallet Setup](https://wiki.iota.org/tutorials/wallet-setup) tutorial, you should already have a script to check your Stronghold account balance.

Run the script `check-balance.js` and you should see three NFT IDs:

```console
node check-balance.js
```

Your console output should look similar to this:

```console
<accountName>'s Balance:
{
  baseCoin: { total: '1000000000', available: '1000000000' },
  requiredStorageDeposit: '822000',
  nativeTokens: [],
  nfts: [
    '<nft-id-avatar>',
    '<nft-id-mask>',
    '<nft-id-weapon>'
  ],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```

Now, one by one, copy the NFT IDs into the [Shimmer Testnet Explorer](https://explorer.shimmer.network/testnet/) and find out the one that belongs to the avatar NFT, by checking their immutable metadata. Before you move to the next section, note the NFT Address of the avatar NFT and also the NFT ID's of the mask and weapon NFT.

```text
avatar NFT Address:
rms...

mask NFT ID:
0x...

weapon NFT ID:
0x...
```

### Send NFTs

Now that you have all needed information you can create a new file `send-nft.js` and add the following code:

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.

:::

#### 1. Imports and parameters

```javascript
// Libraries
const { AccountManager } = require('@iota/wallet');

// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const accountName = process.env.ACCOUNT_NAME;

// Network configuration
const { networkConfig } = require('./networkConfig.js');

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Send NFT's

The function `main()` loads and unlocks a Stronghold account and sends a NFT to a target address. Make sure to insert the address of the avatar NFT (rms...) as target address and the NFT ID of the mask NFT (0x...).

```javascript
// This function loads a Stronghold account and sends a NFT to a specified address
  try {
    const manager = new AccountManager({
      storagePath: `./${accountName}-database`,
    });
    await manager.setStrongholdPassword(password);
    const account = await manager.getAccount(accountName);

    await account.sync();

    // Sends a NFT output to a specified address
    const response = await account.sendNft([{
      address: '<insert-target-address-of-avatar-nft>',
      nftId: '<insert-id-of-nft-you-want-to-send>',
    }]);

    console.log(consoleColor, `Your NFT was successfully sent to the target address in this block:`);
    console.log(`${explorerURL}/block/${response.blockId}`, '\n');

  } catch (error) {
      console.log('Error: ', error);
  }
  process.exit(0);
}

main();
```

Run the script `send-nft.js`:

```console
node send-nft.js
```

Now replace the mask NFT ID with the weapon NFT ID and run the script `send-nft.js` again.

### Wrap-up

If everything went according to plan, there should only be a single NFT left on your used Stronghold account address, the avatar NFT. Run the script `check-balance.js` to check this:

```console
node check-balance.js
```

Your console output should look similar to this:

```console
<accountName>'s Balance:
{
  baseCoin: { total: '1000000000', available: '1000000000' },
  requiredStorageDeposit: '822000',
  nativeTokens: [],
  nfts: [
    '<nft-id-avatar>'
  ],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```

Now you can check the avatar NFT ID again on the [Shimmer Testnet Explorer](https://explorer.shimmer.network/testnet/). Next to `General` information and the `Immutable Features` of the NFT, the explorer should also display a section with two `Associated Outputs`. These two outputs represent the mask and the weapon NFT, which are only unlockable by the avatar NFT address. The avatar NFT, on the other hand, is only unlockable by your account address. This means you have successfully created the targeted hierarchy of ownership:

```text
User Address
└── avatar_nft
    ├── mask_nft
    └── weapon_nft
```

:::warning

Sending a NFT also means loosing ownership over all NFTs controlled by it. In this example, whoever holds the avatar NFT also has control over the mask and weapon NFT, so be cautious when using this concept.

:::
