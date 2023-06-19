---
description: Setting up a chain requirements, configuration parameters, validators and tests.
image: /img/logo/WASP_logo_dark.png
keywords:

- Smart Contracts
- Chain
- Set up
- Configuration
- Nodes
- Tests

---

# Setting Up a Chain

:::note

It is possible to run a "committee" composed of a single Wasp node, and this may be fine for testing purposes. However,
in normal operation the idea is to have multiple Wasp nodes in order to run the smart contracts in a distributed
fashion. If you want to run a committee of several nodes on the same machine, ensure that each Wasp instance runs in
separate directory with its own `config.json` and database. Ports and other settings must be adjusted accordingly.
:::

:::note

For testing purposes, all Wasp nodes can be connected to the same GoShimmer instance. In normal operation, it is
recommended that each Wasp node connects to a different GoShimmer instance.

:::

## Requirements

- [`wasp-cli` configured](wasp-cli.md) to interact with the wasp nodes.

## Trust Setup

After starting all the `wasp` nodes, you should make them trust each other. Node operators should do this manually. It's
their responsibility to accept trusted nodes only.

The operator can read its node's public key and NetID by running `wasp-cli peering info`:

```shell
wasp-cli peering info
```

Example response:

```log
PubKey: 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM
NetID:  127.0.0.1:4000
```

PubKey and NetID should be provided to other node operators.
They can use this info to trust your node and accept communications with it.
That's done by invoking `wasp-cli peering trust <PubKey> <NetID>`, e.g.:

```shell
wasp-cli peering list-trusted
wasp-cli peering trust 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM 127.0.0.1:4000
wasp-cli peering list-trusted
```

Example response:

```log
------                                        -----
PubKey                                        NetID
------                                        -----
8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM  127.0.0.1:4000
```

All the nodes in a committee must trust each other to run the chain.

## Starting The Chain

### Requesting Test Funds

:::note
If you are using a seed that already holds fund, you can skip this step.
:::

```shell
wasp-cli request-funds
```

After you have requested the funds, you can deposit funds to a chain by running:

```shell
wasp-cli chain deposit IOTA:10000
```

### Deploy the IOTA Smart Contracts Chain

You can deploy your IOTA Smart Contracts chain by running:

```shell
wasp-cli chain deploy --committee=0,1,2,3 --quorum=3 --chain=mychain --description="My chain"
```

The indices in `--committee=0,1,2,3` will correspond to `wasp.0`, `wasp.1`, etc. in `wasp-cli.json`.

The `--chain=mychain` flag sets up an alias for the chain. From now on all chain commands will be targeted to this
chain.

The `--quorum` flag indicates the minimum amount of nodes required to form a consensus. The recommended formula to
obtain this number `floor(N*2/3)+1` where `N` is the number of nodes in your committee.

## Testing If It Works

You can check that the chain was properly deployed in the Wasp node dashboard
(e.g. `127.0.0.1:7000`). Note that the chain was deployed with
some [core contracts](../core_concepts/core_contracts/overview.md).

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/3mLpV_neB6I" title="Setting up Wasp Chain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Deploying a Wasm Contract

Now you can deploy a Wasm contract to the chain:

```shell
wasp-cli chain deploy-contract wasmtime inccounter "inccounter SC" tools/cluster/tests/wasm/inccounter_bg.wasm
```

The `inccounter_bg.wasm` file is a precompiled Wasm contract included in the Wasp repo as an example.

If you check the dashboard again, you should see that the `inccounter` contract is listed in the chain.

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

The part after `|` is necessary because the return value is encoded, and you need to know the _schema_ in order to
decode it. **The schema definition is in its early stages and will likely change in the future.**

:::

You can now call the `increment` function by running:

```shell
wasp-cli chain post-request inccounter increment
```

After the request has been processed by the committee, you should get a new
counter value after calling `getCounter`:

```shell
wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int
```

Example response:

```log
counter: 1
```

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/Yaev4Cu1GW0" title="Deploy a Wasm Contract" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Troubleshooting

Common issues can be caused by using an incompatible version of `wasp` / `wasp-cli`.
You can verify that `wasp-cli` and `wasp` nodes are on the same version by running:

```shell
wasp-cli check-versions
```
