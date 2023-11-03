---
description: Overview on how you migrated tokens from the IOTA 1.0 to IOTA 1.5 Chrysalis network using the Firefly wallet or a migration bundle.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - migration
  - migration bundle
  - Firefly
  - Chrysalis Phase 2
  - how to
---

# Chrysalis Migration

By the end of the Chrysalis migration, several aspects at IOTA changed for the better. With easier ways to
manage and secure your experience, IOTA seamlessly integrated these innovations with no service interruptions.

With Chrysalis, we made a clear-cut from the current IOTA protocol, and started a new with a much better, and more mature
network. The network supports many new use cases and created a foundation for IOTA’s upcoming Coordicide.

This included one of the innovations that directly impacted one of the most crucial aspects of your experience: funds.

## Token Migration Overview

Below is an overview of how the migration is taking place for normal token holders:

1. You enter your seed in _Firefly_.
2. Firefly creates a new seed for you and generates an EdDSA address for the new network.
3. Firefly sends your funds to a specific migration address (which encapsulates your EdDSA address) on the old network.
4. Your funds become available on the new network on the EdDSA address Firefly created for you.
5. Your funds are successfully migrated.

:::note

If you migrate after the Chrysalis launch, your funds will become available shortly after you migrate (within less than 5 minutes).

:::

:::note

Firefly will initially only be available on desktop operating systems such as: macOS, Linux, or Windows and will not support migrations for Ledger devices or using a Ledger device.

:::

For further information on the migration process, see our [blog post](https://blog.iota.org/firefly-token-migration/).

For a detailed explanation on how the migration process works technically, see the [migration-mechanism](../../explanations/update/migration_mechanism.md) page.

## Exchange Token Migration Guide

To help you successfully transfer your tokens securely to the Chrysalis network, we created this guide as
an overview of the migration process and its intricacies.

:::info

On the 28th of April 2021, Chrysalis Phase 2 was released (with its corresponding node software, libraries, and tooling).
After this, the legacy network only supports migration transfers moving further (this is accompanied by a legacy
node release). This means that both a legacy (albeit only for migrations), and a new Chrysalis Phase 2 network
co-exist.

:::

There are two ways with which you can migrate your funds from the old legacy to the Chrysalis Phase 2 network:

1. You can either use our Firefly wallet (which allows migrating from either an 81-tryte seed or seed vault file)
   (check out this [blog post](https://blog.iota.org/firefly-token-migration/) on how to do this).
2. Or you can craft a migration bundle yourself which transfers your funds to a special migration address under your
   control (programmatic approach).

This guide will further explain how to create a migration bundle and the rules imposed on it.

### Migrating Funds by Issuing Migration Bundles

As mentioned above, there was a special release for the legacy node software on the 28/4/2021, which
will only further support migration bundles. In case you are operating a node yourself you must upgrade to that version,
as otherwise you will no longer be synchronized with the network.

#### Migration bundle

With this limited legacy network, only migration bundles will be confirmed moving forward. A migration bundle is simply a
normal value bundle/transfer which has some additional restrictions. If you craft a bundle which obeys the following
rules, then it falls under what we define as a migration bundle:

- It contains exactly one output transaction of which the destination address is a valid migration address and is
  positioned as the tail transaction within the bundle (meaning `currentIndex` 0). **The output transaction value is at
  least 1'000'000 tokens (1 Mi).**
- It does not contain any zero-_value transactions_ which do not hold signature fragments. This means that transactions
  other than the tail transaction must always be part of an input.
- Input transactions must not use migration addresses.

If you are in doubt whether your bundle is an actual migration bundle, you can use the [ValidBundle(bundle, true)](https://github.com/iotaledger/iota.go/blob/2618d56d58105dfc2f3b7f1eb3481d9f89a1d6bc/bundle/bundle.go#L335) function of our iota.go library to validate this. If you are not acquainted with Go, you can also contact us on
Discord or Slack to ensure that your crafted bundles are valid migration bundles.

Here are a few things to consider:

- You must not broadcast your own migration bundles unless you are 100% sure that they are valid migration
  bundles.
- If one of your input transactions spends funds from an already used address (meaning it is subject to key re-use), we
  recommend that you use the [bundle miner tool](https://github.com/iotaledger/iota.rs/tree/migration-new/iota-bundle-miner) to craft a bundle with the most applicable security given the already exposed parts of the given address' private key.
- Do not use too many input transactions as this will increase the overall Proof-of-Work time needed for a single bundle. Rather, split your input addresses over multiple migration bundles.
- Your code must include logic to await for the migration bundle's confirmation. If you find that your migration bundle
  is not confirming, consider re-attaching it (re-attaching is **not** the same as re-signing the bundle).
- If you submit a migration bundle for broadcasting via the `broadcastTransactions` API command and you are using the
  updated legacy node software, then it will additionally check up on the submission whether your submitted bundle really adheres to the rules outlined above as an additional safeguard.

For further information about the migration bundles, see the [RFC-0035](https://github.com/luca-moser/protocol-rfcs/blob/rfc/wotsicide/text/0035-wotsicide/0035-wotsicide.md#migration-bundle) page.

As an example, [this bundle](https://explorer.iota.org/mainnet/bundle/ZRAFFSEPRKDYGGA9DJQBWCXG9CGODUNZUBOWHVFQY9DK9HCHJQTHHSYBQRGZHGXWAPXDTJPPFJ9XFUALW) is a valid migration bundle. It spends 1 Mi

- from:
  `YVLQWMRUZ9RCQODQZFYDNRVXHERUFPSDVLDRQLHEWGJLRTMEAQNX9OHZJVTONDHMUJQECDCUAR9PUIGAZPAAEHTZXB`
- to:
  `TRANSFERTBIXPEWWYZZWBWPWJCB9XYMC9AGYH9X9AYAYADVXTYGYB9G9J9PEF9O9KYZXS9D9MANWTZOD9B9HMRQFWZ` where the destination address encodes the target Bech32 address `iota1qqhmslysuwfedz2mqtr4ux73pr7uhjmd4tpazqs8pf7qdax44muqgw0fz25` respectively the hex Ed25519 address `2fb87c90e39396895b02c75e1bd108fdcbcb6daac3d102070a7c06f4d5aef804` on which the these funds will be made available in the new network.

##### Migration address

As mentioned above, a migration bundle must have as its single destination/output address a migration address. A
migration address is, in essence, an EdDSA address (to which you hold the keys on the new network) encoded in a legacy
tryte address. You can create such an address in the following way:

- Compute the [BLAKE2b-256](https://tools.ietf.org/html/rfc7693) hash `H` of your Ed25519 address `A` (this address is the one you control in the new network; note that an Ed25519 address is the Blake2b-256 hash of your Ed25519 public key).
- Append the first 4 bytes of `H` to `A`, resulting in 36 bytes.
- Convert `A` to trytes using the `b1t6` encoding (as described
  in [RFC-15](https://github.com/iotaledger/protocol-rfcs/blob/master/text/0015-binary-to-ternary-encoding/0015-binary-to-ternary-encoding.md)). This results in `A`<sub>tri</sub> consisting of 72 trytes.
- Prepend the 8-tryte prefix `TRANSFER` to `A`<sub>tri</sub>.
- Finally, pad `A`<sub>tri</sub> with the single tryte `9` to get a legacy 81-tryte address.

Example:

- Ed25519 address (32-byte): `6f9e8510b88b0ea4fbc684df90ba310540370a0403067b22cef4971fec3e8bb8`
- Migration address including 9-tryte checksum (
  90-tryte): `TRANSFERCDJWLVPAIXRWNAPXV9WYKVUZWWKXVBE9JBABJ9D9C9F9OEGADYO9CWDAGZHBRWIXLXG9MAJV9RJEOLXSJW`

Since nobody holds keys to such migration addresses, funds are effectively burned and can no longer be used in the legacy network.

#### Migration Code Example with Node.js

[Click to see more detailed documentation for the following example](https://github.com/iotaledger/wallet.rs/blob/dev/bindings/nodejs/examples/8-migration.md).

```js
/**
 * This example creates a new database and account,
 * and migrate funds from the legacy network to the chrysalis network
 */

require('dotenv').config();

const ADDRESS_SECURITY_LEVEL = 2;
// Minimum balance that is required for a migration bundle, because of the dust protection in the new network
const MINIMUM_MIGRATION_BALANCE = 1000000;
// This value should not be too high, because then the PoW could take too long to get it confirmed
const MAX_INPUTS_PER_BUNDLE = 10;

async function run() {
  try {
    const {
      AccountManager,
      SignerType,
      addEventListener,
    } = require('@iota/wallet');

    // We store all bundle hashes here and check later if the bundles got confirmed
    let migrationBundleHashes = [];
    // Log migration events
    const callback = function (err, data) {
      // After a successful broadcast of this bundle, the library will automatically reattach bundle to
      // speed up the confirmation process. An event with type "TransactionConfirmed" (with corresponding bundle hash)
      // will be emitted as soon as the bundle is confirmed.
      if (data.event.type === 'TransactionConfirmed') {
        console.log('MigrationProgress:', data);
        migrationBundleHashes = migrationBundleHashes.filter(
          (hash) => hash !== data.event.data.bundleHash,
        );
        if (migrationBundleHashes.length == 0) {
          process.exit();
        }
        console.log('Still unconfirmed bundles: ', migrationBundleHashes);
      }
    };
    addEventListener('MigrationProgress', callback);

    const manager = new AccountManager({
      storagePath: './migration-database',
    });
    manager.setStrongholdPassword(process.env.SH_PASSWORD);
    // Save this mnemonic securely. If you lose it, you potentially lose everything.
    const mnemonic = manager.generateMnemonic();
    console.log(
      'Save this mnemonic securely. If you lose it, you potentially lose everything:',
      mnemonic,
    );
    manager.storeMnemonic(SignerType.Stronghold, mnemonic);

    const account = await manager.createAccount({
      // Node url for the new network
      clientOptions: {
        node: 'https://chrysalis-nodes.iota.cafe',
        localPow: true,
        network: 'chrysalis-mainnet',
      },
      alias: 'Migration',
    });

    console.log('Account created:', account.alias());
    // Nodes for the legacy network
    const nodes = ['https://nodes.iota.org'];
    const seed = process.env.MIGRATION_SEED;
    const migrationData = await manager.getMigrationData(nodes, seed, {
      // permanode for the legacy network
      permanode: 'https://chronicle.iota.org/api',
      securityLevel: ADDRESS_SECURITY_LEVEL,
      // this is the default and from there it will check addresses for balance until 30 in a row have 0 balance
      // if not all balance got detected because a higher address index was used it needs to be increased here
      initialAddressIndex: 0,
    });
    console.log(migrationData);

    let input_batches = getMigrationBundles(migrationData.inputs);
    // create bundles with the inputs
    for (batch of input_batches) {
      try {
        const bundle = await manager.createMigrationBundle(
          seed,
          batch.inputs.map((input) => input.index),
          {
            logFileName: 'iota-migration.log',
            // if the input is a spent address we do a bundle mining process which takes 10 minutes to reduce the amount
            // of the parts of the private key which get revealed
            mine: batch.inputs[0].spent,
          },
        );
        migrationBundleHashes.push(bundle.bundleHash);
      } catch (e) {
        console.error(e);
      }
    }

    // Send all bundles to the Tangle and reattach them until they are confirmed
    for (bundleHash of migrationBundleHashes) {
      try {
        await manager.sendMigrationBundle(nodes, bundleHash);
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

run();

const getMigrationBundles = (inputs) => {
  // Categorise spent vs unspent inputs
  const { spent, unspent } = inputs.reduce(
    (acc, input) => {
      if (input.spent) {
        acc.spent.push(input);
      } else {
        acc.unspent.push(input);
      }
      return acc;
    },
    { spent: [], unspent: [] },
  );
  const unspentInputChunks = selectInputsForUnspentAddresses(unspent);
  const spentInputs = spent.filter(
    (input) => input.balance >= MINIMUM_MIGRATION_BALANCE,
  );
  return [
    ...spentInputs.map((input) => ({
      // Make sure for spent addresses, we only have one input per bundle
      inputs: [input],
    })),
    ...unspentInputChunks.map((inputs) => ({ inputs })),
  ];
};
/**
 * Prepares inputs (as bundles) for unspent addresses.
 * Steps:
 *   - Categorises inputs in two groups 1) inputs with balance >= MINIMUM_MIGRATION_BALANCE 2) inputs with balance < MINIMUM_MIGRATION_BALANCE
 *   - Creates chunks of category 1 input addresses such that length of each chunk should not exceed MAX_INPUTS_PER_BUNDLE
 *   - For category 2:
 *         - Sort the inputs in descending order based on balance;
 *         - Pick first N inputs (where N = MAX_INPUTS_PER_BUNDLE) and see if their accumulative balance >= MINIMUM_MIGRATION_BALANCE
 *         - If yes, then repeat the process for next N inputs. Otherwise, iterate on the remaining inputs and add it to a chunk that has space for more inputs
 *         - If there is no chunk with space left, then ignore these funds. NOTE THAT THESE FUNDS WILL ESSENTIALLY BE LOST!
 *
 * NOTE: If the total sum of provided inputs are less than MINIMUM_MIGRATION_BALANCE, then this method will just return and empty array as those funds cannot be migrated.
 *
 * This method gives precedence to max inputs over funds. It ensures a maximum a bundle could have is 30 inputs and their accumulative balance >= MINIMUM_MIGRATION_BALANCE
 *
 * @method selectInputsForUnspentAddresses
 *
 * @params {Input[]} inputs
 *
 * @returns {Input[][]}
 */
const selectInputsForUnspentAddresses = (inputs) => {
  const totalInputsBalance = inputs.reduce(
    (acc, input) => acc + input.balance,
    0,
  );

  // If the total sum of unspent addresses is less than MINIMUM MIGRATION BALANCE, just return an empty array as these funds cannot be migrated
  if (totalInputsBalance < MINIMUM_MIGRATION_BALANCE) {
    return [];
  }

  const { inputsWithEnoughBalance, inputsWithLowBalance } = inputs.reduce(
    (acc, input) => {
      if (input.balance >= MINIMUM_MIGRATION_BALANCE) {
        acc.inputsWithEnoughBalance.push(input);
      } else {
        acc.inputsWithLowBalance.push(input);
      }

      return acc;
    },
    { inputsWithEnoughBalance: [], inputsWithLowBalance: [] },
  );

  let chunks = inputsWithEnoughBalance.reduce((acc, input, index) => {
    const chunkIndex = Math.floor(index / MAX_INPUTS_PER_BUNDLE);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = []; // start a new chunk
    }

    acc[chunkIndex].push(input);

    return acc;
  }, []);

  const fill = (_inputs) => {
    _inputs.every((input) => {
      const chunkIndexWithSpaceForInput = chunks.findIndex(
        (chunk) => chunk.length < MAX_INPUTS_PER_BUNDLE,
      );

      if (chunkIndexWithSpaceForInput > -1) {
        chunks = chunks.map((chunk, idx) => {
          if (idx === chunkIndexWithSpaceForInput) {
            return [...chunk, input];
          }

          return chunk;
        });

        return true;
      }

      // If there is no space, then exit
      return false;
    });
  };

  const totalBalanceOnInputsWithLowBalance = inputsWithLowBalance.reduce(
    (acc, input) => acc + input.balance,
    0,
  );

  // If all the remaining input addresses have accumulative balance less than the minimum migration balance,
  // Then sort the inputs in descending order and try to pair the
  if (totalBalanceOnInputsWithLowBalance < MINIMUM_MIGRATION_BALANCE) {
    const sorted = inputsWithLowBalance
      .slice()
      .sort((a, b) => b.balance - a.balance);

    fill(sorted);
  } else {
    let startIndex = 0;

    const sorted = inputsWithLowBalance
      .slice()
      .sort((a, b) => b.balance - a.balance);
    const max = Math.ceil(sorted.length / MAX_INPUTS_PER_BUNDLE);

    while (startIndex < max) {
      const inputsSubset = sorted.slice(
        startIndex * MAX_INPUTS_PER_BUNDLE,
        (startIndex + 1) * MAX_INPUTS_PER_BUNDLE,
      );
      const balanceOnInputsSubset = inputsSubset.reduce(
        (acc, input) => acc + input.balance,
        0,
      );

      if (balanceOnInputsSubset >= MINIMUM_MIGRATION_BALANCE) {
        chunks = [...chunks, inputsSubset];
      } else {
        fill(inputsSubset);
      }

      startIndex++;
    }
  }

  return chunks;
};
```

After the migration, only the 24-word mnemonic or the stronghold file gives you access to the funds, so make sure to back them up properly. It is impossible to get access to the funds with the old seed after the migration transaction. Please read our recommendations for [Backup and security](../../how_tos/backup_security.md).
