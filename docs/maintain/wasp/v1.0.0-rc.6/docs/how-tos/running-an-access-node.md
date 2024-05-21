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

You can configure how much of the state you wish to keep on your node using the following setting: `stateManager.pruningMinStatesToKeep`. The default value is 10000 blocks.

### Run a Non-archive Node

If you wish to run a non-archive node (only keep the last N blocks), you must add `snapshots.networkPaths` to your config:

<Tabs groupId="network" queryString>
<TabItem value="shimmer" label="ShimmerEVM">

```diff docker-compose.yml
       - "--wal.path=/app/waspdb/wal"
       - "--prometheus.enabled=true"
       - "--prometheus.bindAddress=wasp:9312"
+      - "--stateManager.pruningMinStatesToKeep=10000"
+      - "--snapshots.networkPaths=https://files.shimmer.network/?prefix=wasp_snapshots/smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s/"
     profiles:
       - wasp
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```diff docker-compose.yml
       - "--wal.path=/app/waspdb/wal"
       - "--prometheus.enabled=true"
       - "--prometheus.bindAddress=wasp:9312"
+      - "--stateManager.pruningMinStatesToKeep=10000"
+      - "--snapshots.networkPaths=https://files.testnet.shimmer.network/?prefix=wasp_snapshots/rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex/"
     profiles:
       - wasp
```

</TabItem>
</Tabs>

### Run An Archive Node

If you wish to have a full archive node you need to set `stateManager.pruningMinStatesToKeep` to `0` and can remove the `snapshots.networkPaths` option. 

You can then download the historical state using the following command (this will take a while):


<Tabs groupId="network" queryString>
<TabItem value="shimmer" label="ShimmerEVM">

```
wget https://files.shimmer.network/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```
wget https://files.testnet.shimmer.network/dbs/wasp/latest-wasp_chains_wal.tgz -O - | tar xzv -C data/wasp
```

</TabItem>
</Tabs>

:::note Disk Space

Operating as a full archive node requires a lot of disk space. We recommend at least 500Gb of free space to operate without issues

:::

## Run Everything

```sh
docker compose up -d
```

It will take a few minutes until the hornet node is synced.

You can check the sync status by following the logs with `docker logs -f hornet`, or in the web dashboard.

## Download Wasp-Cli

You can download and extract the Wasp-Cli that matches your Wasp version using the following command:

```
curl -sL https://github.com/iotaledger/wasp/releases/download/v1.0.3/wasp-cli_1.0.3_Linux_x86_64.tar.gz | tar xzv
```

## Use Wasp-Cli to Obtain Peering Info

Change directory into the newly-downloaded `wasp-cli` directory:

```
cd wasp-cli_1.0.3_Linux_x86_64/
```

## Set the L1 API Address

```sh
./wasp-cli set l1.apiaddress {NODE_HOST}
```

## Set Wasp API Address

```sh
./wasp-cli wasp add my-node {NODE_HOST}/wasp/api
```

## Login

```sh
./wasp-cli login
```
```sh Output
Username: wasp
Password: (default is wasp)
Successfully authenticated
```

## Obtain Peering Info
```sh
./wasp-cli peering info
```
```sh Output
PubKey: 0x20a56daa0b5e86b196c37f802089a2b6007a655a12337d287f7313a214af2ec0
PeeringURL: 0.0.0.0:4000
```
Please note the PubKey: 0x20a56daa0b5e86b196c37f802089a2b6007a655a12337d287f7313a214af2ec0 output.
Send it together with your Ipv4 to node operators that you want to peer with.

## Wait for the other party to peer

… wait …

## Use wasp-cli to add nodes as peers

```sh
./wasp-cli peering trust peer1 <pubkey> <URL>
./wasp-cli peering trust peer2 <pubkey> <URL>
```

## Add Chain

<Tabs groupId="network" queryString>
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

## Activate


<Tabs groupId="network" queryString>
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

## Add Peers as Access Nodes of the Chain

```sh
./wasp-cli chain access-nodes add --peers=peer1,peer2
```

## Check if Wasp Synced

You can follow the progress using `docker logs -f wasp`. If you chose to create a [full-archive node](#run-and-archive-node), this can take several minutes, maybe hours.

## Test Your Endpoint

You should have a working EVM JSON-RPC endpoint on:

<Tabs groupId="network" queryString>
<TabItem value="shimmer" label="ShimmerEVM">

```
<NODE_HOST>/wasp/api/v1/chains/smr1prxvwqvwf7nru5q5xvh5thwg54zsm2y4wfnk6yk56hj3exxkg92mx20wl3s
/evm
```

</TabItem>
<TabItem value="shimmer_testnet" label="ShimmerEVM Testnet">

```
<NODE_HOST>/wasp/api/v1/chains/rms1ppp00k5mmd2m8my8ukkp58nd3rskw6rx8l09aj35984k74uuc5u2cywn3ex
/evm
```

</TabItem>
</Tabs>