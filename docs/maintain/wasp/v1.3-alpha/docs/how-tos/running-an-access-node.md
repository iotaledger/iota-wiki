---
description: How to setup an access node.
image: /img/logo/WASP_logo_dark.png
tags:
  - Smart Contracts
  - Running a node
  - ISC
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running an ISC Access Node

## Set Up Wasp and Hornet

First, you should [set up a  Wasp Node](./running-a-node.md) but don't run `docker compose up` to start the docker containers yet. Continue with the following steps first:

### Download the Chain State

You can configure how much of the state you wish to keep on your node by uncommenting and changing the `WASP_PRUNING_MIN_STATES_TO_KEEP` environment variable in the node-docker-setup. The default value is 10000 blocks.

### Run a Non-archive Node

If you wish to run a non-archive node (only keep the last N blocks), you must uncomment `WASP_SNAPSHOT_NETWORK_PATHS`.

### Run An Archive Node

If you wish to have a full archive node, you need to set `WASP_PRUNING_MIN_STATES_TO_KEEP` to `0` and comment `WASP_SNAPSHOT_NETWORK_PATHS` out.

You can then download the historical state using the following command (this will take a while):


<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA EVM">

```sh
wget https://files.stardust-mainnet.iotaledger.net/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
<TabItem value="iota_testnet" label="IOTA EVM Testnet">

```sh
wget https://files.iota-testnet.iotaledger.net/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
<TabItem value="shimmer" label="ShimmerEVM">

```sh
wget https://files.shimmer.network/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```sh
wget https://files.testnet.shimmer.network/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
</Tabs>

:::note Disk Space

Operating as a full archive node requires a lot of disk space. We recommend at least 500Gb of free space to operate without issues

:::

### Run Everything

```sh
docker compose up -d
```

It will take a few minutes until the hornet node is synced.

You can check the sync status by following the logs with `docker logs -f hornet`, or in the web dashboard.

## Use Wasp-Cli to configure the chain and add peers
### Download Wasp-Cli

You can download a Wasp-Cli that matches your Wasp version from the [Wasp releases](https://github.com/iotaledger/wasp/releases).
You can use a commands like the following to for example download version 1.1.0:

```sh
curl -sL https://github.com/iotaledger/wasp/releases/download/v1.1.0/wasp-cli_1.1.0_Linux_x86_64.tar.gz | tar xzv
```

Change directory into the newly-downloaded `wasp-cli` directory:

```sh
cd wasp-cli_1.1.0_Linux_x86_64/
```

### Set the L1 API Address

Set the L1 API address. You can set it to what you configured as `NODE_HOST` in the `.env` file

:::tip HTTP

If you use the http setup, don't forget to replace `https` with `http`

:::

```sh
./wasp-cli set l1.apiaddress https://{NODE_HOST}
```

### Set Wasp API Address

Set the WASP API address. It is your configured `NODE_HOST` and the `/wasp/api` path.

```sh
./wasp-cli wasp add my-node https://{NODE_HOST}/wasp/api
```

### Login

Login to wasp using your credentials. You can update your current credentials or add new ones in the wasp dashboard.

```sh
./wasp-cli login
```
```sh title=Output
Username: wasp
Password: (default is wasp)
Successfully authenticated
```

### Obtain Peering Info

Get your peering info which you will need to share with your peers:

```sh
./wasp-cli peering info
```
```sh title=Output
PubKey: 0x20a56daa0b5e86b196c37f802089a2b6007a655a12337d287f7313a214af2ec0
PeeringURL: 0.0.0.0:4000
```

Please note the PubKey: 0x20a56daa0b5e86b196c37f802089a2b6007a655a12337d287f7313a214af2ec0 output.
Send it together with your domain/IP to node operators that you want to peer with.

### Wait for the other party to peer

Wait until peer added you as trusted and access peer.

### Use wasp-cli to add nodes as peers

Now you can add your peer as trusted peer.

```sh
./wasp-cli peering trust peer1 <pubkey> <URL>:<PORT>
./wasp-cli peering trust peer2 <pubkey> <URL>:<PORT>
```

### Add Chain

Add the chain with its chain id and name:

<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA EVM">

```sh
./wasp-cli chain add iota-evm iota1pzt3mstq6khgc3tl0mwuzk3eqddkryqnpdxmk4nr25re2466uxwm28qqxu5
```

</TabItem>
<TabItem value="iota_testnet" label="IOTA EVM Testnet">

```sh
./wasp-cli chain add iota-evm-testnet tst1pzxsrr7apqkdzz633dyntmvxwtyvk029p39te5j0m33q6946h7akzv663zu
```

</TabItem>
<TabItem value="shimmer" label="ShimmerEVM">

```sh
./wasp-cli chain add shimmer-evm smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```sh
./wasp-cli chain add shimmer-evm-testnet rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex
```

</TabItem>
</Tabs>

### Activate

Activate the chain using its name:


<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA EVM">

```sh
./wasp-cli chain activate --chain iota-evm
```

</TabItem>
<TabItem value="iota_testnet" label="IOTA EVM Testnet">

```sh
./wasp-cli chain activate --chain iota-evm-testnet
```

</TabItem>
<TabItem value="shimmer" label="ShimmerEVM">

```sh
./wasp-cli chain activate --chain shimmer-evm
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```sh
./wasp-cli chain activate --chain shimmer-evm-testnet
```

</TabItem>
</Tabs>

### Add Peers as Access Nodes of the Chain

Add the peers as access nodes.

:::info

This is normally only needed for peers that you plan to add as access nodes to your own node

:::

```sh
./wasp-cli chain access-nodes add --peers=peer1,peer2
```

### Check if Wasp Synced

You can follow the progress using `docker logs -f wasp`. If you chose to create a [full-archive node](#run-and-archive-node), this can take several minutes, maybe hours.

### Test Your Endpoint

You should have a working EVM JSON-RPC endpoint on:

<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA EVM">

```
<NODE_HOST>/wasp/api/v1/chains/iota1pzt3mstq6khgc3tl0mwuzk3eqddkryqnpdxmk4nr25re2466uxwm28qqxu5/evm
```

</TabItem>
<TabItem value="iota_testnet" label="IOTA EVM Testnet">

```
<NODE_HOST>/wasp/api/v1/chains/tst1pzxsrr7apqkdzz633dyntmvxwtyvk029p39te5j0m33q6946h7akzv663zu/evm
```

</TabItem>

<TabItem value="shimmer" label="ShimmerEVM">

```
<NODE_HOST>/wasp/api/v1/chains/smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s/evm
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```
<NODE_HOST>/wasp/api/v1/chains/rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex/evm
```

</TabItem>
</Tabs>
