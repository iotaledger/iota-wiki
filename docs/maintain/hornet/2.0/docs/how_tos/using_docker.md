---
description: Learn how to install and run a HORNET node using Docker.
image: /img/banner/banner_hornet_using_docker.png
tags:
  - IOTA Node
  - HORNET Node
  - Docker
  - Install
  - Run
  - macOS
  - Windows
  - Linux
  - how to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LinuxCommands from '@site/docs/_admonitions/_linux-commands.md';

# Install HORNET using Docker

![HORNET Node using Docker](/img/banner/banner_hornet_using_docker.png)

This guide represents the recommended setup to run a HORNET node.
It includes everything required to setup a public node accessible by wallets and applications:

- [HORNET](https://github.com/iotaledger/hornet)
- [Traefik](https://traefik.io) - Reverse proxy using SSL certificates to secure access to the node API and dashboard.
- [Prometheus](https://prometheus.io) - Metrics scraper configured to collect all metrics from HORNET and INX extensions.
- [Grafana](https://grafana.com) - Data visualizer that can be used to display the metrics collected by Prometheus.
- [inx-dashboard](https://github.com/iotaledger/inx-dashboard) - Node dashboard.
- [inx-indexer](https://github.com/iotaledger/inx-indexer) - Indexer extension for wallets and applications.
- [inx-mqtt](https://github.com/iotaledger/inx-mqtt) - MQTT extension providing the Event API.
- [inx-participation](https://github.com/iotaledger/inx-participation) - Participation extension providing on-tangle-voting.
- [inx-poi](https://github.com/iotaledger/inx-poi) - Extension to generate proofs of _inclusion_.
- [inx-spammer](https://github.com/iotaledger/inx-spammer) - Network spammer.
- [wasp](https://github.com/iotaledger/wasp) - L2 Node for IOTA Smart Contracts.

## Requirements

1. A recent release of Docker enterprise or community edition. Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/engine/install/).
2. [Docker Compose CLI plugin](https://docs.docker.com/compose/install/linux/).
3. A registered domain name pointing to the public IP address of your server. _(optional if not using HTTPS)_
4. Opening up the following ports in your servers firewall:

- `15600 TCP` - Used for HORNET gossip.
- `14626 UDP` - Used for HORNET autopeering.
- `80 TCP` - Used for HTTP. _(can be changed, see below)_
- `443 TCP` - Used for HTTPS. _(optional if not using HTTPS)_
- `4000 TCP/UDP` - Used for Wasp gossip. _(optional if not using Wasp)_

5. [curl](https://curl.se/).

## Download the latest release

<LinuxCommands/>

Once you have completed all the installation [requirements](#requirements), you can download one of the latest releases, depending on the network you want to join, by running the following command:

<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA">

```sh
mkdir node-docker-setup && cd node-docker-setup && curl -L https://node-docker-setup.iota.org/iota | tar -zx
```

</TabItem>
<TabItem value="iotatestnet" label="IOTA Testnet">

```sh
mkdir node-docker-setup && cd node-docker-setup && curl -L https://node-docker-setup.iota.org/iota-testnet | tar -zx
```

</TabItem>
<TabItem value="shimmer" label="Shimmer">

```sh
mkdir node-docker-setup && cd node-docker-setup && curl -L https://node-docker-setup.iota.org/shimmer | tar -zx
```

</TabItem>
<TabItem value="shimmer_testnet" label="Shimmer Testnet">

```sh
mkdir node-docker-setup && cd node-docker-setup && curl -L https://node-docker-setup.iota.org/shimmer-testnet | tar -zx
```

</TabItem>
</Tabs>

## Prepare

<LinuxCommands/>

### 1. Generate dashboard credentials

To access your HORNET dashboard, a set of credentials need to be configured.
Run the following command to generate a password hash and salt for the dashboard:

```sh
docker compose run hornet tools pwd-hash
```

Copy the output of the command for the next step.

### 2. Setup your Environment

Copy the `env_template` file to `.env` using the following command:

```sh
cp env_template .env
```

Modify the `.env` file to fit your needs with the editor of your choice.
We are using `nano` in the following example:

```sh
nano .env
```

Follow the instructions provided in the file.  
With `nano` you can save your changes and exit the editor using `CTRL+O` and `CTRL+X`.

:::note

You can configure your node to either use HTTP or HTTPS. For publicly exposed nodes, we heavily recommend using HTTPS.

:::

:::info

Activating a Wasp node isn't enough to fully participate in a smart contract chain. You don't need a standalone Wasp node if you're using our ShimmerEVM chain. For setting up your own chain, see our guide for the required steps: [Set Up a Chain](/wasp/how-tos/setting-up-a-chain/)

:::

<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA">

```sh reference
https://github.com/iotaledger/node-docker-setup/blob/main/iota/env_template
```

</TabItem>
<TabItem value="iota_testnet" label="IOTA Testnet">

```sh reference
https://github.com/iotaledger/node-docker-setup/blob/main/iota-testnet/env_template
```

</TabItem>
<TabItem value="shimmer" label="Shimmer">

```sh reference
https://github.com/iotaledger/node-docker-setup/blob/main/shimmer/env_template
```

</TabItem>
<TabItem value="shimmer_testnet" label="Shimmer Testnet">

```sh reference
https://github.com/iotaledger/node-docker-setup/blob/main/shimmer-testnet/env_template
```

</TabItem>
</Tabs>

### 3. Setup neighbors

Add your HORNET neighbor addresses to the `peering.json` file.

:::note

This step is recommended, but optional if you are using autopeering.
See [peering](../references/peering.md) for more information.

:::

### 4. Create the `data` folder

All files used by HORNET, the INX extensions, Wasp, Traefik & co will be stored in a directory called `data`.
Docker image runs under user with user id `65532` and group id `65532`, so this directory needs to have the correct permissions to be accessed by the containers.
To create this directory with correct permissions run the contained script:

```sh
./prepare_docker.sh
```

## Run

:::info Wasp Access Node

If your are coming from the `Running an ISC Access Node` how-to, this guide ends here and you have to continue with the access node setup [here](/wasp/how-tos/running-an-access-node#download-the-chain-state).

:::

### Starting the node

You can start the HORNET node and INX extensions by running:

```sh
docker compose up -d
```

- `-d` Instructs Docker to start the containers in the background.

#### HTTPS

After starting the node you will be able to access your services at the following endpoints:

- API: `https://node.your-domain.com/api/routes`
- HORNET Dashboard: `https://node.your-domain.com/dashboard`
- Grafana: `https://node.your-domain.com/grafana` _(optional if using "monitoring" profile)_
- Legacy-API: `https://node.your-domain.com/api/core/v0/info` _(optional if using "history-legacy" profile)_
- Chrysalis-API: `https://node.your-domain.com/api/core/v1/info` _(optional if using "history-chrysalis" profile)_
- Wasp API: `https://node.your-domain.com/wasp/api` _(optional if using "wasp" profile)_
- Wasp Dashboard: `https://node.your-domain.com/wasp/dashboard` _(optional if using "wasp" profile)_

:::warning

After starting your node for the first time, please change the default grafana credentials
User: `admin`
Password: `admin`

:::

You can configure your wallet software to use `https://node.your-domain.com`

#### HTTP

After starting the node you will be able to access your services at the following endpoints:

- API: `http://localhost/api/routes`
- HORNET Dashboard: `http://localhost/dashboard`
- Grafana: `http://localhost/grafana` _(optional if using "monitoring" profile)_
- Legacy-API: `http://localhost/api/core/v0/info` _(optional if using "history-legacy" profile)_
- Chrysalis-API: `http://localhost/api/core/v1/info` _(optional if using "history-chrysalis" profile)_
- Wasp API: `http://localhost/wasp/api` _(optional if using "wasp" profile)_
- Wasp Dashboard: `http://localhost/wasp/dashboard` _(optional if using "wasp" profile)_

:::note

If you changed the default `HTTP_PORT` value, you will need to add the port to the urls.

:::

You can configure your wallet software to use `http://localhost`

### Displaying Log Output

You can display the HORNET logs by running:

```sh
docker compose logs -f hornet
```

- `-f`
  Instructs Docker to continue displaying the log to `stdout` until CTRL+C is pressed.

### Stopping the node

You can stop the HORNET node and INX extensions by running:

```sh
docker compose down
```

### Tools

To access the tools provided inside HORNET you can use:

```sh
docker compose run hornet tool <tool-name>
```

To see the list of tools included run:

```sh
docker compose run hornet tool -h
```

## JWT Auth

To generate a JWT token to be used to access protected routes you can run:

```sh
docker compose run hornet tool jwt-api --databasePath data/p2pstore
```

- If you changed the `restAPI.jwtAuth.salt` value in the `config.json`, then you need to pass that value as a parameter as `--salt <restAPI.jwtAuth.salt value from your config.json>`

## INX

This setup includes the INX extensions listed at the beginning of this guide.
If you want to disable certain extensions you can comment out the different services in the `docker-compose.yml` file and restart the node.

# More Information

For more information look at the [Github repository](https://github.com/iotaledger/node-docker-setup)
