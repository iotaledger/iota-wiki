# Send Shimmer Tokens with Javascript (client lib)

In this tutorial you will learn how to send Shimmer Tokens in the testnet. We will go through the following steps:

- 1. Get your first address.
- 2. Get some testnet Tokens.
- 3. Read your balance.
- 4. And finally, send the Tokens to another address.

And now, let's start with preparing the development environment. This tutorial assumes that you have [Node.js](https://nodejs.org/en/) installed.

## 0. Setup Development Environment.

First let's create a new folder for the tutorial in your favourite location.

```bash
mkdir send-shimmer-tutorial
cd send-shimmer-tutorial
```

Now we need to run the Node.js initializer to configure the project.

```bash
npm init --yes
```

Next you need to install the [iota client library](https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs). Be sure, you install the `@next` version to use the Shimmer network. 
```bash
npm i @iota/client@3.0.0-alpha.6
```


## 1. Get your first address.

Next we want to generate an address, where we want to deposit some Shimmer testnet Tokens.

Just create a new file called `get_address.js` in a `scripts` directory and add the content below. On Linux based machines, you can use the command `touch` to create a new file.

```bash!
mkdir scripts
touch scripts/get_address.js
```

Content:

```javascript

const {
  Client,
  CoinType,
  initLogger,
  SHIMMER_TESTNET_BECH32_HRP,
} = require("@iota/client");


async function run() {

  const client = new Client({
    // Insert your node URL in the .env.
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

If we run this script, you should see your Shimmer address in your console output.

```bash
node scripts/get_address.js
```

This prints something like this:

> Mnemonic: deputy cousin oxygen quiz also odor clever candy borrow know junk method logic alert give history toy dolphin enact shift tooth wreck verify evil
Generated public address: rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser

Save your Mnemonic in a file, we need this to send your tokens in the last step.

Tip: In testnet addresses begin with `rms...`, whereas in the Mainnet addresses will begin with `smr...`.

## 2. Get some testnet Tokens.

Now we need to visit the Faucet to get some tokens. Just input your address on the website and you will get some testnet tokens!

> Shimmer testnet faucet: https://faucet.testnet.shimmer.network/

Did it work? Let's check our address balance!

## 3. Read your balance

Now, let's create a new file called `get_balance.js` and add the code below!

```bash
touch scripts/get_balance.js
```

Content:

```javascript
const {
    Client,
  } = require("@iota/client");
 
// Input here your address which you generate in the first step
const YOUR_ADDRESSS = "rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser"

// In this example we will get the outputs of an address that has no additional unlock
// conditions and sum the amounts and native tokens
async function run() {
    const client = new Client({
        // Insert your node URL in the .env.
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
        const totalNativeTokens = {};
        for (const outputResponse of addressOutputs) {
            const output = outputResponse['output'];
            totalAmount += parseInt(output.amount);
        }

        console.log(
            `Address Outputs have: ${totalAmount}glow.`
        );
    } catch (error) {
        console.log("Error: ", error)
    }
}

run().then(() => process.exit());
```

Just run the code and you will see your balance:

```bash
node scripts/get_balance.js
```

If it shows a balance of zero, wait a bit and run the script again.

Your console output should look like this:

> Address Outputs have: 1000000000glow.

Now you should have 1000000000 glow Tokens, which are equal to 1000 Shimmer Tokens.

## 4. Send Shimmer Tokens.

The last step is to send the tokens to another address, let's create a file for that and add the content below!

```bash
touch scripts/send_tokens.js
```

Content:

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
        // Insert your node URL in the .env.
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

This code sends some Shimmer Tokens to a public address.

Run it:

```bash
node src/send_tokens.js
```

You can see the transaction if you follow the link in the console output.

> Transaction sent: https://explorer.shimmer.network/testnet/block/0xd1edfc557025600e7fcf7ddc99bc1a4fa1b10335c584f0406174a45d7a992554

If you check your balance again, it should be less than before!

> Your balance: 998000000glow.

Congratulations! You sent some Shimmer testnet tokens!

