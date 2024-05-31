---
description: Learn how to install and run a iota-CORE node using Docker.
image: /img/icons/iota/iota_core.png
tags:
  - IOTA Node
  - IOTA-Core Node
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

# Install IOTA-Core using Docker

This article guides the recommended setup to run an IOTA-Core node.
It includes everything required to set up a public node accessible by wallets and applications:

- [IOTA-core](https://github.com/iotaledger/iota-core)
- [Traefik](https://traefik.io) - Reverse proxy using SSL certificates to secure access to the node API and dashboard.
- [Prometheus](https://prometheus.io) - Metrics scraper configured to collect all metrics from IOTA-Core and INX extensions.
- [Grafana](https://grafana.com) - Data visualizer that can be used to display the metrics collected by Prometheus.
- [inx-dashboard](https://github.com/iotaledger/inx-dashboard) - Node dashboard.
- [inx-indexer](https://github.com/iotaledger/inx-indexer) - Indexer extension for wallets and applications.
- [inx-mqtt](https://github.com/iotaledger/inx-mqtt) - MQTT extension providing the Event API.

## Requirements

1. A recent release of Docker enterprise or community edition. Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/engine/install/).
2. [Docker Compose CLI plugin](https://docs.docker.com/compose/install/linux/).
3. A registered domain name pointing to the public IP address of your server. _(optional if not using HTTPS)_
4. Opening up the following ports in your server's firewall:

- `15600 TCP` - Used for IOTA-Core gossip.
- `80 TCP` - Used for HTTP. _(can be changed, see below)_
- `443 TCP` - Used for HTTPS. _(optional if not using HTTPS)_

5. [curl](https://curl.se/).

## Download the latest release

<LinuxCommands/>

Once you have completed all the installation [requirements](#requirements), you can download one of the latest releases, depending on the network you want to join, by running the following command:

```sh
mkdir node-docker-setup && cd node-docker-setup && curl -L https://node-docker-setup.iota.org/iota2-testnet | tar -zx
```

## Prepare

<LinuxCommands/>

### 1. Generate dashboard credentials

To access your IOTA-Core dashboard, you need to configure credentials.
Run the following command to generate a password hash and salt for the dashboard:

```sh
docker compose run iota-core tools pwd-hash
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
With `nano`, you can save your changes and exit the editor using `CTRL+O` and `CTRL+X`.

:::note

You can configure your node to either use HTTP or HTTPS. For publicly exposed nodes, we heavily recommend using HTTPS.

:::

```sh reference
https://github.com/iotaledger/node-docker-setup/blob/main/iota2-testnet/env_template
```

### 3. Setup neighbors

Add your IOTA-Core neighbor addresses to the `peering.json` file.

:::note

This step is recommended but optional if you are using autopeering.

:::

### 4. Create the `data` folder

All files used by IOTA-Core, the INX extensions, Traefik & co will be stored in a directory called `data`.
Docker image runs under user with user id `65532` and group id `65532`, so this directory needs to have the correct permissions to be accessed by the containers.
To create this directory with correct permissions, run the contained script:

```sh
./prepare_docker.sh
```

## Run

### Starting the node

You can start IOTA-Core node and INX extensions by running:

```sh
docker compose up -d
```

- `-d` Instructs Docker to start the containers in the background.

#### HTTPS

After starting the node, you will be able to access your services at the following endpoints:

- API: `https://node.your-domain.com/api/routes`
- IOTA-Core Dashboard: `https://node.your-domain.com/dashboard`
- Grafana: `https://node.your-domain.com/grafana` _(optional if using "monitoring" profile)_

:::warning

After starting your node for the first time, please change the default grafana credentials.
**User**: `admin`
**Password**: `admin`

:::

You can configure your wallet software to use `https://node.your-domain.com`.

#### HTTP

After starting the node, you will be able to access your services at the following endpoints:

- API: `http://localhost/api/routes`
- IOTA-Core Dashboard: `http://localhost/dashboard`
- Grafana: `http://localhost/grafana` _(optional if using "monitoring" profile)_

:::note

If you changed the default `HTTP_PORT` value, you must add the port to the URLs.

:::

You can configure your wallet software to use `http://localhost`.

### Displaying Log Output

You can display IOTA-Core logs by running:

```sh
docker compose logs -f iota-core
```

- `-f`
  Instructs Docker to continue displaying the log to `stdout` until CTRL+C is pressed.

### Stopping the node

You can stop the IOTA-Core node and INX extensions by running:

```sh
docker compose down
```

### Tools

To access IOTA-Core tools, you can use the following command:

```sh
docker compose run iota-core tool <tool-name>
```

To see the list of tools included run the following:

```sh
docker compose run iota-core tool -h
```

## JWT Auth

To generate a JWT token to be used to access protected routes, you can run the following:

```sh
docker compose run iota-core tool jwt-api --databasePath data/p2pstore
```

- If you changed the `restAPI.jwtAuth.salt` value in the `config.json`, then you need to pass that value as a parameter as `--salt <restAPI.jwtAuth.salt value from your config.json>`.

## INX

This setup includes the INX extensions listed at the beginning of this guide.
If you want to disable certain extensions, you can comment out the different services in the `docker-compose.yml` file and restart the node.

# More Information

You can find more information in the [GitHub repository](https://github.com/iotaledger/node-docker-setup)
