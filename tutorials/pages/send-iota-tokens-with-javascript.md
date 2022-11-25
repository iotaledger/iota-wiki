# Send IOTA Tokens with Javascript

In this tutorial you will learn how to send IOTA Tokens in the Devnet. We will go through the following steps:

- Create and save your seed.
- Get your first address.
- Get some Devnet Tokens.
- Read your balance.
- And finally, send the Tokens to another address.

And now, let's start with preparing the development environment. This tutorial assumes that you have [Node.js](https://nodejs.org/en/) installed.

## 0. Setup Development Environment.

First let's create a new folder for the tutorial in your favourite location.

```bash
mkdir send-iota-tutorial
cd send-iota-tutorial
```

Now we need to run the Node.js initializer to configure the project.

```bash
npm init --yes
```

Next you need to install the [iota client library](https://github.com/iotaledger/iota.rs/tree/dev/bindings/nodejs).

```bash
npm i @iota/client
```

When the previous call failed with `'tsc' is not recognized as an internal or external command, operable program or batch file.` it could help to install the typescript package globally by running:

```bash
npm install typescript@latest -g
```

## 1. Create and save your seed.

Create a new directory, a new file called `create_seed.js` and add the content below:

```bash
mkdir scripts
touch scripts/create_seed.js
```

Content:

```javascript
const crypto = require('crypto');
const seed = crypto
  .createHash('sha256')
  .update(crypto.randomBytes(256))
  .digest('hex');
console.log('Seed:', seed);
```

Let's run this code and watch your console!

```bash
node scripts/create_seed.js
```

You should see something like this, with another seed:

> Seed: ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5

You will need to add this seed in the following files!

## 2. Get your first address.

Next we want to generate an address, where we want to deposit some IOTA Devnet Tokens.

Just create a new file called `get_address.js` in the `scripts` directory and add the content below.

```bash
touch scripts/get_address.js
```

Content:

```javascript
require('dotenv').config();

async function run() {
  const { ClientBuilder } = require('@iota/client');

  // Get the seed from environment variable
  const IOTA_SEED_SECRET =
    'ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5';

  // client will connect to testnet by default
  const client = new ClientBuilder().build();

  const addresses = await client
    .getAddresses(IOTA_SEED_SECRET)
    .accountIndex(0)
    .range(0, 5)
    .get();

  console.log('Your first address:', addresses[0]);
}

run();
```

If we run this script, you should see your first address in your console!

```bash
node scripts/get_address.js
```

This prints something like this:

> Your first address: atoi1qzuc28hhwn7hdzn8xds5spvm093qa7chkj229nzedt6fkqvzxcdk6umqp07

Tip: In Devnet addresses begin with `atoi...`, whereas in the Mainnet they begin with ìota...`.

## 3. Get some Devnet Tokens.

Now we need to visit the Faucet to get some tokens. Just input your address and request some tokens!

> IOTA DEVNET FAUCET: https://faucet.chrysalis-devnet.iota.cafe/

Does it work? Let's check our address balance!

## 4. Read your balance

Again, let's create a new file called `get_balance.js` and add the code below!

```bash
touch scripts/get_balance.js
```

Content:

```javascript
async function run() {
  const { ClientBuilder } = require('@iota/client');

  // client will connect to testnet by default
  const client = new ClientBuilder().build();

  const YOUR_ADDRESS =
    'atoi1qzuc28hhwn7hdzn8xds5spvm093qa7chkj229nzedt6fkqvzxcdk6umqp07';

  // Get the balance of a single known address
  const response = await client.getAddressBalance(YOUR_ADDRESS);

  console.log('Your balance: ' + response.balance);
}

run();
```

Just run the code and you will see your balance:

```bash
node scripts/get_balance.js
```

If it shows a balance of zero, wait a bit.

Now you should have 1000000 IOTA Tokens, or 1 Million IOTA (1MI).

> Your balance: 100000000

## 5. Send IOTA Tokens.

The last step is to send the tokens to another address, lets create a file for that and add the content below!

```bash
touch scripts/send_iota.js
```

Content:

```javascript
async function run() {
  const { ClientBuilder } = require('@iota/client');

  // Input your seed here
  const IOTA_SEED_SECRET =
    'ef4593558d0c3ed9e3f7a2de766d33093cd72372c800fa47ab5765c43ca006b5';

  // client will connect to testnet by default
  const client = new ClientBuilder().build();

  const message = await client
    .message()
    .seed(IOTA_SEED_SECRET)
    .output(
      'atoi1qqydc70mpjdvl8l2wyseaseqwzhmedzzxrn4l9g2c8wdcsmhldz0ulwjxpz',
      1000000,
    )
    .submit();

  console.log(message);
}

run();
```

This code sends some IOTA Devnet Tokens to an public address.

Run it:

```bash
node src/send_iota.js
```

You can see the transaction if you follow the link in the console output.

If you check your balance again, it should be less than before!

> Your balance: 99000000

Congratulations! You sent some IOTA Devnet Tokens!
