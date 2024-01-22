import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started With the IOTA Sandbox

You can use this guide to [install](#install-the-iota-sandbox-using-docker)
and [run](#run) the [IOTA Sandbox](welcome.md).
It includes everything you need to develop your own IOTA dApps, plugins, and more.

## Install the IOTA Sandbox using Docker

### Requirements

1. A recent release of [Docker](https://www.docker.com/). Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/).
2. [Docker Compose CLI plugin](https://docs.docker.com/compose/install/linux/).
3. Make sure ports 80, 80... are not in use by other applications. If they are change them in the `.env` file.

### Download the latest release

:::note 

The commands assume you are using Linux.

:::

Once you have completed all the installation [requirements](#requirements), you can download one of the latest releases, depending on the network you want to base the sandbox on, by running the following command:

<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA">

```sh
mkdir iota-sandbox && cd iota-sandbox && curl -L https://github.com/Dr-Electron/iota-sandbox/releases/download/iota-v1.0.0-rc.1/iota-v1.0.0-rc.1_sandbox.tar.gz | tar -zx
```

</TabItem>
<TabItem value="shimmer" label="Shimmer">

```sh
mkdir iota-sandbox && cd iota-sandbox && curl -L https://github.com/Dr-Electron/iota-sandbox/releases/download/shimmer-v1.0.0-rc.1/shimmer-v1.0.0-rc.1_sandbox.tar.gz | tar -zx
```

</TabItem>
<TabItem value="testnet" label="Testnet">

```sh
mkdir iota-sandbox && cd iota-sandbox && curl -L https://github.com/Dr-Electron/iota-sandbox/releases/download/testnet-v1.0.0-rc.1/testnet-v1.0.0-rc.1_sandbox.tar.gz | tar -zx
```

</TabItem>
</Tabs>

### Prepare

:::note

The commands assume you are using Linux.

:::

#### Set Up Your Environment

In most cases the default setup should be enough. But you can edit the `.env` file to configure some optional settings:
<Tabs groupId="network" queryString>
<TabItem value="iota" label="IOTA">

```sh reference
https://github.com/dr-electron/iota-sandbox/blob/main/iota/.env
```

</TabItem>
<TabItem value="shimmer" label="Shimmer">

```sh reference
https://github.com/dr-electron/iota-sandbox/blob/main/shimmer/.env
```

</TabItem>
<TabItem value="testnet" label="Testnet">

```sh reference
https://github.com/dr-electron/iota-sandbox/blob/main/testnet/.env
```

</TabItem>
</Tabs>

#### Bootstrap

If you haven't run the IOTA Sandbox before, you need to bootstrap it. To do that, just run the following command:

```sh
sudo ./bootstrap.sh
```

## Run

### Start the IOTA Sandbox

You can start the IOTA Sandbox by running:

```sh
docker compose up -d
```

- `-d` Instructs Docker to start the containers in the background.

:::tip Available endpoints

Once the container is up and running, you can access the node using the
available [endpoints](references/endpoints.md).

:::

### Stop the IOTA Sandbox

You can stop the IOTA Sandbox by running the following commands:

```sh
docker compose down
```
