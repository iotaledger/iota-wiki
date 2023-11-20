import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Sandbox using Docker

This guide represents the setup to run the IOTA Sandbox. It includes everything required to develop your own IOTA dApps, plugins and more.

## Requirements

1. A recent release of Docker enterprise or community edition. Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the official Docker documentation.

2. Git

# Clone the repo

:::note

The commands assume you are using Linux.

:::

Once you have completed all the installation requirements, you can clone the repo and navigate to the `sandbox` folder by running the following command:

```sh
git clone https://github.com/iotaledger/iota-sandbox && cd iota-sandbox/sandbox
```

## Prepare

:::note

The commands assume you are using Linux.

:::

### 1. Setup your Environment

TODO

### 2. Bootstrap

If you didn't run the IOTA Sandbox before, you need to bootstrap it. To do that, just run the following command:

```sh
 ./bootstrap.sh
```

## Run

### Starting the IOTA Sandbox

You can start the IOTA Sandbox by running:

<Tabs groupId="profile" queryString>
<TabItem value="default" label="Default">

```sh
docker compose up -d
```

</TabItem>
<TabItem value="wasp" label="Wasp">

```sh
docker compose --profile=wasp up -d
```

</TabItem>
</Tabs>

- `-d` Instructs Docker to start the containers in the background.
