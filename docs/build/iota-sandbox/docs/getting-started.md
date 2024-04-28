---
description: Set up and get started with the IOTA Sandbox
tags:
  - how to
  - setup
  - sandbox
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LinuxCommands from '@site/docs/_admonitions/_linux-commands.md';

# Getting Started With the IOTA Sandbox

You can use this guide to [install](#install-the-iota-sandbox-using-docker)
and [run](#run) the [IOTA Sandbox](welcome.md).
It includes everything you need to develop your own IOTA dApps, plugins, and more.

## Install the IOTA Sandbox Using Docker

### Requirements

1. A recent release of [Docker](https://www.docker.com/). Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/).
2. [Docker Compose CLI plugin](https://docs.docker.com/compose/install/linux/).
3. sed
4. jq
5. Make sure ports 80 and 8082 are not in use by other applications. If they are change them in the `.env` file. Optional: If you enabled the explorer profile by default it will use port 8081

### Download the Latest Release

:::note 

The commands assume you are using Linux.

:::

Once you have completed all the installation [requirements](#requirements), you can download the sandbox. The following command will download the latest version.

```sh
mkdir iota-sandbox && cd iota-sandbox && curl -L https://github.com/iotaledger/iota-sandbox/releases/latest/download/iota_sandbox.tar.gz | tar -zx
```

### Prepare

<LinuxCommands/>

#### Set Up Your Environment

In most cases, the default setup should be enough. So, you can do `cp .env.example .env` to use the default setup.
You can also edit the `.env` file to configure some optional settings:

```sh reference
https://github.com/iotaledger/iota-sandbox/blob/main/sandbox/.env.example
```

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
