# Send Shimmer Tokens with Javascript

In this tutorial you will learn how to send Shimmer Tokens in the testnet.



This tutorial assumes that you have [Node.js](https://nodejs.org/en/) installed.

## Set Up Your Development Environment.

First, you should create a new folder for the tutorial. 

```bash
mkdir send-shimmer-tutorial
cd send-shimmer-tutorial
```

Now you need to run the Node.js initializer to configure the project.

```bash
npm init --yes
```

Next, you must install the [iota.js client library](https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs). Install the `@next` version to use the Shimmer network. 
```bash
npm i @iota/client@next
```


## Create Your First Address

Next, you should generate an address where you can deposit some Shimmer testnet Tokens.

Create a new file called `get_address.js` in a `scripts` directory and add the content below. On Linux-based machines, you can use the command `touch` to create a new file.

```bash
mkdir scripts
touch scripts/get_address.js
```

Add the following content to the `get_address.js` file you just created:

```javascript

const {
  Client,
  CoinType,
  initLogger,
  SHIMMER_TESTNET_BECH32_HRP,
} = require("@iota/client");


async function run() {

  const client = new Client({
    nodes: ['https://api.testnet.shimmer.network'],
  });

  // You should only generate mnemonics for development or testing
  const mnemonic = await client.generateMnemonic();
  console.log('Mnemonic: ' + mnemonic);

  const secretManager = {
    Mnemonic: mnemonic,
  };

  // Generate addresses by providing all inputs, that way it can also be done offline without a node.
  const offlineGeneratedAddresses = await client.generateAddresses(
    secretManager,
    {
      coinType: CoinType.Shimmer,
      accountIndex: 0,
      range: {
        start: 0,
        end: 1,
      },
      internal: false,
      // Generating addresses with client.generateAddresses(secretManager, {}), will by default get the bech32_hrp (Bech32
      // human readable part) from the nodeinfo, generating it "offline" requires setting it in the generateAddressesOptions
      bech32Hrp: SHIMMER_TESTNET_BECH32_HRP,
    }
  );
  console.log(
    "Generated public address:",
    offlineGeneratedAddresses[0]
  );
}

run().then(() => process.exit());

```

This script will:

1. Create a `Client` and connect to the [Shimmer testnet API](https://api.testnet.shimmer.network).
2. Generate a mnemonic.
3. Generate an address.

If you run this script, you should see your mnemonic and Shimmer address in your console output. You can run it using the following command:

```bash
node scripts/get_address.js
```

The output should look something like this:

> Mnemonic: deputy cousin oxygen quiz also odor clever candy borrow know junk method logic alert give history toy dolphin enact shift tooth wreck verify evil
Generated public address: rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser

Save your mnemonic in a file, you will need this to send your tokens.

:::tip Address Anatomy

Testnet addresses begin with `rms...`, while Mainnet addresses will begin with `smr...`.

:::

## Get Some Testnet Tokens.

You will need to visit the [Faucet](https://faucet.testnet.shimmer.network/) to get some tokens. Just input your address, and you will get some testnet tokens.


## Read Your Balance

Create a new file called `get_balance.js` and add the code below and replace the YOUR_ADDRESS constant with the address just added the testnet tokens to.


```javascript
const {
    Client,
  } = require("@iota/client");
 
// Input  the address which you generated in the first step
const YOUR_ADDRESSS = "rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser"

// In this example we will get the outputs of an address that has no additional unlock
// conditions and sum the amounts and native tokens
async function run() {
    const client = new Client({
        nodes: ['https://api.testnet.shimmer.network'],
      });
    
      try {
        // Get output ids of basic outputs that can be controlled by this address without further unlock constraints
        const outputIds = await client.basicOutputIds([
            { address: YOUR_ADDRESSS },
            { hasExpiration: false },
            { hasTimelock: false },
            { hasStorageDepositReturn: false },
        ]);

        // Get outputs by their IDs
        const addressOutputs = await client.getOutputs(outputIds);

        // Calculate the total amount and native tokens
        let totalAmount = 0;
        for (const outputResponse of addressOutputs) {
            const output = outputResponse['output'];
            totalAmount += parseInt(output.amount);
        }

        console.log(
            `Address Outputs have ${totalAmount} glow.`
        );
    } catch (error) {
        console.log("Error: ", error)
    }
}

run().then(() => process.exit());
```

This script will:

1. Create a `Client` and connect to the [Shimmer testnet API](https://api.testnet.shimmer.network).
2. Get all the unlocked basic outputs associated with your address.
3. Get the outputs from step 2. using their output ID by calling the `Client.getOutputs(outputIds)` function. 
4. Loop through all the retrieved outputs from step 3 and add their value in the `totalAmount` variable.
5. Log the `totalAmount` variable to the console.

If you run the script, you should see your address's balance:

```bash
node scripts/get_balance.js
```

If it shows zero balance, wait a bit and rerun the script.

Your console output should look like this:

```plaintext
 Address Outputs have 1000000000 glow.
 ```

Now you should have 1000000000 glow Tokens, which are equal to 1000 Shimmer Tokens.

## Send Shimmer Tokens.

The last step is to send the tokens to another address. Create a file for that and add the content below. You can replace `SEND_TO_ADDRESSS` constant with any valid testnet address. You should replace the `YOUR_MNEMONIC` constant with the mnemonic you generated in the first step. 


```javascript
const {
    Client,
  } = require("@iota/client");

// Use this public address, or use a friends address to send tokens
const SEND_TO_ADDRESSS = "rms1qznwxgd9medd03ne7ydl083rgdrduadxv2d932w64zas94dlpc3ju7xvpqq"
// Input your mnemonic, which was generated in the first step of the tutorial.
const YOUR_MNEMONIC = "deputy cousin oxygen quiz also odor clever candy borrow know junk method logic alert give history toy dolphin enact shift tooth wreck verify evil"
// In this example we will send a transaction
async function run() {
    const client = new Client({
        nodes: ['https://api.testnet.shimmer.network'],
        localPow: true,
      });


    try {
        
        const secretManager = {
            Mnemonic: YOUR_MNEMONIC,
        };

        // We prepare the transaction
        // Insert the output address and amount to spend. The amount cannot be zero.
        const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {
            output: {
                address: SEND_TO_ADDRESSS,
                amount: '1000000',
            },
        });

        console.log(
            `Transaction sent: https://explorer.shimmer.network/testnet/block/${blockIdAndBlock[0]}`,
        );
    } catch (error) {
        console.error('Error: ', error);
    }
}

run().then(() => process.exit());
```

This script will:
1. Create a `Client` and connect to the [Shimmer testnet API](https://api.testnet.shimmer.network).
2. Instantiate a `SecretManager` with the mnemonic you generated in the first step.
3. Build and post a block using the `Client.buildAndPostBlock()`  function.
4. Log the transaction's [Shimmer Explorer URL](https://explorer.shimmer.network/) to the console.


You can run it with the following command:

```bash
node scripts/send_tokens.js
```
Your output should look something like this:

```plaintext
Transaction sent: https://explorer.shimmer.network/testnet/block/0xd1edfc557025600e7fcf7ddc99bc1a4fa1b10335c584f0406174a45d7a992554
```

If you follow the link in the console output, you can see the transaction in the [Shimmer Explorer](https://explorer.shimmer.network).

You can check your balance again by running the `scripts/get_balance.js` script again.  Your output should be less than before.

```plaintext
 Address Outputs have 999000000 glow.
```

Congratulations! You have sent some Shimmer testnet tokens!

