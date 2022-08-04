# Tokenless Data Notarization

This tutorial shows how you can prove that a block was part of the Tangle, even if this part of the Tangle was already pruned from network nodes.

## User Story

A **Prover** wants to prove to a **Verifier** that a dataset or file was not altered by notarizing it using the public and permissionless Tangle. 

A good example could be the government (**Verifier**) obligating companies (**Prover**) to write their daily CO2 emissions to the Tangle to create immutable logs. The government has no interest in providing storage for all the companies but wants to receive verifiable, immutable data in the case of an audit. Therefore, all the data remains with the respective company until an audit occurs.

### Architecture

In this use case, the party writing to the Tangle (**Prover**) is the same party reading from it. This allows reading a block by its block Id together with proof. All a **Verifier** needs to verify this proof is the chain of milestones back to the milestone that referenced this exact block. Every milestone directly references the previous milestone, which leads to a unique and verifiable chain of milestones in the Tangle. Even if the **Verifier's** notarization plugin didn't record the milestone history already, it could still download the milestone chain from another source and verify its correctness before using it to notarize verifications.

Since the pattern assumes trusted access to the network, we recommend that both the **Prover** and the **Verifier** operate their own network node and run the [INX Notarization/PoI Plugin](https://github.com/iotaledger/inx-poi). It is also noteworthy that this pattern does not rely on a Permanode storing the entire Tangle history, drastically reducing the node operator's storage requirements.

![PoI-Architecture](proof-inclusion-of-a-block-architecture.png)

## Prerequisites

### Network

- A running [Hornet Private Tangle](https://github.com/iotaledger/hornet/tree/develop/private_tangle). You should use the **develop** branch to have the latest [Stardust](https://blog.shimmer.network/stardust-upgrade-in-a-nutshell/) features.
- The node should run the [INX-POI](https://github.com/iotaledger/inx-poi). The node(s) will start the INX-POI plugin by default.

### Development Environment and Libraries

- [Node.js](https://nodejs.org/en/).

## Set Up

### Prepare Your Development Environment

1. Create a new folder for the tutorial in a location of your choice, for example:

```bash
mkdir notarization-tutorial
cd notarization-tutorial
```

2.  You should run the Node.js initializer to configure the project.

```bash
npm init --yes
```

3. Add [`@iota/iota.js`](https://www.npmjs.com/package/@iota/iota.js) as a dependency by running the following command:

```bash
npm install @iota/iota.js
```

5. Install dependencies by running the following command:

```bash
npm install
```

#### Prepare network configuration

Create new file `networkConfig.js` and add the following code.

```javascript
var networkConfig = {};

// Private Tangle Network
networkConfig.node = 'http://localhost:14265';
networkConfig.faucet = 'http://localhost:8091';
networkConfig.explorer = 'http://localhost:8082/dashboard/explorer/';

module.exports = { networkConfig };
```

#### Prepare file for Notarization creation

Create new file `create-notarization.js` and add the following code.

```javascript
const {
  SingleNodeClient,
  LocalPowProvider,
  sendData,
} = require('@iota/iota.js');
const fs = require('fs');
const fetch = require('node-fetch');

// Network configuration
const { networkConfig } = require('./networkConfig.js');
const nodeURL = networkConfig.node;
const explorerURL = networkConfig.explorer;

// For the sake of this tutorial, some console output will be printed in a different color for better readability
const consoleColor = '\x1b[36m%s\x1b[0m';

async function run() {
  // Setup client and define block content
  const client = new SingleNodeClient(nodeURL, {
    powProvider: new LocalPowProvider(),
  });
  const tag = 'This is my Tag';
  const data = 'This is my data';

  // Attach block to Tangle and log explorer link
  const sendResult = await sendData(client, tag, data);
  const blockId = sendResult.blockId;
  console.log(consoleColor, 'Attached block:');
  console.log(explorerURL + 'block/' + blockId, '\n');

  // Wait for block confirmation by milestone and read it with proof of inclusion from INX plugin
  const result = await getNotarization(client, nodeURL, blockId);

  // Store block with proof of inclusion in local json file
  if (result != false) {
    const filePath = `./notarized-block.json`;
    fs.writeFileSync(filePath, JSON.stringify(result, null, 4));

    console.log(consoleColor, 'Block successfully notarized and stored at:');
    console.log(filePath, '\n');

    console.log(
      consoleColor,
      'Notarized block can now be handed over to the verifier',
    );
  }
}

// Function which regularly checks for block confirmation and returns proof of inclusion if confirmed after n tries
async function getNotarization(client, nodeURL, blockId) {
  try {
    console.log(
      consoleColor,
      'Wait for milestone confirmation to get notarized block:',
    );

    let i = 0;
    while (i < 10) {
      i++;
      // Function waits for a certain time between iterations
      await sleep(1000);

      const blockMetadata = await client.blockMetadata(blockId);

      // If a block was referenced by a milestone the node will return its metadata with the key 'referencedByMilestoneIndex', otherwise the key won't be there
      if ('referencedByMilestoneIndex' in blockMetadata) {
        console.log(
          `Try ${i}: Block was referenced by milestone #${blockMetadata.referencedByMilestoneIndex}`,
          '\n',
        );

        // Call "create" endpoint of PoI plugin with blockId and return the result
        const poiPluginUrl = `${nodeURL}/api/poi/v1/create/${blockId}`;
        const response = await fetch(poiPluginUrl);
        const result = await response.json();

        return result;
      } else {
        console.log(`Try ${i}: Block was not yet referenced by a milestone`);
      }
    }
    console.log(`Block was not referenced by a milestone after ${i} seconds.`);
    return false;
  } catch (error) {
    console.log(error);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

run().catch((err) => console.error(err));
```

#### Prepare file for Notarization verification

Create new file `verify-notarization.js` and add the following code.

```javascript

const { TransactionHelper } = require('@iota/iota.js');
const fs = require('fs');
const fetch = require('node-fetch')

// Network configuration
const { networkConfig } = require("./networkConfig.js");
const nodeURL = networkConfig.node;
const explorerURL = networkConfig.explorer;


// For the sake of this tutorial, some console output will be printed in a different color for better readability
const consoleColor = '\x1b[36m%s\x1b[0m';


async function run() {
    // Read and parse notarized block from file path
    const filePath = './notarized-block.json';
    const file = fs.readFileSync(filePath);
    const notarizedBlock = JSON.parse(file);
    console.log(consoleColor, 'Successfully imported notarized block from path:');
    console.log(filePath, '\n');

    // Generate blockId from block content and log explorer link
    // The blockId is defined as the BLAKE2b-256 hash of the entire serialized block
    const blockId = TransactionHelper.calculateBlockId(notarizedBlock.block);
    console.log(consoleColor, 'Notarized block:');
    console.log(explorerURL+"block/"+blockId, '\n');

    // Verify provided notarization/proof of inclusion for block
    const validity = await verifyNotarization(nodeURL, notarizedBlock);
    console.log(consoleColor, 'Validity of provided notarization:');
    console.log(validity, '\n');
}

async function verifyNotarization(nodeURL, notarizedBlock) {
    // Call "validate" endpoint of PoI plugin with notarized block and return boolean answer
    const poiPluginUrl = `${nodeURL}/api/poi/v1/validate`;
    const response = await fetch(poiPluginUrl, {
        method: 'POST', 
        body: JSON.stringify(notarizedBlock),
        headers: { 'Content-Type': 'application/json' }
    })
    const result = await response.json();

    return result.valid;
}

run().catch((err) => console.error(err));
```

### Run

Now you can execute the two created files in the correct order (First create-notarization then verify-notarization) and check the log output to follow along.

#### Create Notarization

```bash
node create-notarization.js
```

##### Steps

1. Setup client and define block content
2. Attach block to the Tangle
3. Wait for block to be confirmed by a milestone
4. Read block from Tangle together with notarization
5. Store block with notarization in a JSON file within your local folder

Your console output should look something like this:

```
Attached block:
http://localhost:8082/dashboard/explorer/block/<id_of_your_notarized_block>

Wait for milestone confirmation to get notarized block:
Try 1: Block was not yet referenced by a milestone
Try 2: Block was not yet referenced by a milestone
Try 3: Block was referenced by milestone <number_of_milestone_referencing_your_block>

Block successfully notarized and stored at:
./notarized-block.json

Notarized block can now be handed over to the verifier
```

#### Verify Notarization

```bash
node verify-notarization.js
```

##### Steps

1. Read block with notarization from your local folder
2. Verify block with notarization

Your console output should look something like this:

```
Successfully imported notarized block from path:
./notarized-block.json

Notarized block:
http://localhost:8082/dashboard/explorer/block/<id_of_your_notarized_block>

Validity of provided notarization:
true
```
