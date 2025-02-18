---
description: 'Setting up a chain: requirements, configuration parameters, validators, and tests.'
image: /img/logo/WASP_logo_dark.png
tags:
  - Smart Contracts
  - Chain
  - Set up
  - Configuration
  - Nodes
  - Tests
---

# Set Up a Chain

:::note

It is possible to run a "committee" of a single Wasp node, which is okay for testing purposes.

However, in normal operation, multiple Wasp _nodes_ should be used.

:::

## Requirements

- [`wasp-cli` configured](wasp-cli.md) to interact with your wasp node.

## Trust Setup

After starting all the `wasp` nodes, you should make them trust each other. Node operators should do this manually. It's
their responsibility to accept trusted nodes only.

The operator can read their node's public key and PeeringURL by running `wasp-cli peering info`:

```shell
wasp-cli peering info
```

Example response:

```log
PubKey: 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM
PeeringURL:  127.0.0.1:4000
```

You should provide your `PubKey` and `PeeringURL` to other node operators.
They can use this info to trust and accept communications with your node.
That's done by invoking `wasp-cli peering trust <Name for the peer> <PubKey> <PeeringURL>`, e.g.:

```shell
wasp-cli peering trust another-node 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM 127.0.0.1:4000
```

You can view the list of your wasp node's trusted peers by calling:

```shell
wasp-cli peering list-trusted
```

All the nodes in a committee must trust each other to run the chain.

## Start the Chain

### Request Test Funds (only for Testnet)

You can request test funds to safely develop your application by calling:

```shell
wasp-cli request-funds
```

### Deploy the IOTA Smart Contracts Chain

You can deploy your IOTA Smart Contracts chain by running:

```shell
wasp-cli chain deploy --peers=foo,bar,baz --chain=mychain --block-keep-amount=10000
```

The names in `--peers=foo,bar,baz` correspond to the names of the node's trusted peers.

The `--chain=mychain` flag sets up an alias for the chain.
From now on, all chain commands will target this chain.

The `--quorum` flag indicates the minimum number of nodes required to form a _consensus_.
The recommended formula to obtain this number is `floor(N*2/3)+1` where `N` is the number of nodes in your committee.

The `--block-keep-amount` parameter determines how many blocks are stored in the [`blocklog`](/isc/reference/core-contracts/blocklog) core contract.

After deployment, the chain must be activated by the node operators of all peers.

```shell
wasp-cli chain add <name> <chainID> # adds the chain to the wasp-cli config, can be skipped on the wasp-cli that initiated the deployment
wasp-cli chain activate --chain=<name>
```

## Test If It Works

You can check that the chain was deployed correctly in the Wasp node dashboard (`<URL>/wasp/dashboard` when using `node-docker-setup`).
Note that the chain was deployed with some [core contracts](/isc/reference/core-contracts/overview).

You should also have an EVM-JSONRPC server opened on:

```info
<wasp API URL>/chain/<CHAINID>/evm
```

### Deploying a Wasm Contract

:::warning
The WASM _VM_ is experimental. However, similar commands can be used to interact with the core contracts
:::

Now you can deploy a Wasm contract to the chain:

```shell
wasp-cli chain deploy-contract wasmtime inccounter "inccounter SC" tools/cluster/tests/wasm/inccounter_bg.wasm
```

The `inccounter_bg.wasm` file is a precompiled Wasm contract included in the Wasp repo as an example.

If you recheck the dashboard, you should see that the `inccounter` contract is listed in the chain.

### Interacting With a Smart Contract

You can interact with a contract by calling its exposed functions and views.

For instance, the [`inccounter`](https://github.com/iotaledger/wasp/tree/master/contracts/wasm/inccounter/src) contract
exposes the `increment` function, which simply increments a counter stored in the state. It also has the `getCounter`
view that returns the current value of the counter.

You can call the `getCounter` view by running:

```shell
wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int
```

Example response:

```log
counter: 0
```

:::note

The part after `|` is necessary because the return value is encoded, and you need to know the _schema_ to
decode it. **The schema definition is in its early stages and will likely change in the future.**

:::

You can now call the `increment` function by running:

```shell
wasp-cli chain post-request inccounter increment
```

After the committee has processed the request, you should get a new
counter value after calling `getCounter`:

```shell
wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int
```

Example response:

```log
counter: 1
```

### Troubleshooting

Common issues can be caused by using an incompatible version of `wasp` / `wasp-cli`.
You can verify that `wasp-cli` and `wasp` nodes are on the same version by running:

```shell
wasp-cli check-versions
```
