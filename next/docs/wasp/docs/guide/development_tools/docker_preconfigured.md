---
description: How to run the preconfigured Docker setup.
image: /img/logo/WASP_logo_dark.png
keywords:
  - smart contracts
  - validator node
  - docker
  - image
  - build
  - configure
  - arguments
  - Hornet
  - how to
---

# Preconfigured Development Docker setup

This page describes the usage of the preconfigured developer Docker setup.

:::note
This setup is intended for **local** development only (you will have your own private network/tangle).
:::

## Introduction

To diminish the time spent on configuration and research, we have created a docker-compose setup that ships a pre-configured Wasp node with a Hornet based private tangle, ready to run out of the box.

## Running the setup

Checkout the project and move to the `local-setup` folder

```shell
git clone https://github.com/iotaledger/wasp.git
cd wasp/tools/local-setup
```

:::note
Further information about the setup is to be found in the `readme.md`.
:::

Now run:

```
docker-compose up
```

It initializes Hornet and creates a fresh image of the checked out Wasp code. 

If you do modifications inside the branch, docker-compose will include them into the Wasp image too.

:::note
All Wasp ports will bind to 127.0.0.1 by default. 
If you want to expose the ports to the outside world, run `HOST=0.0.0.0 docker-compose up`.
:::

## Usage

Wasp is configured to allow any connection coming from wasp-cli. This is fine for development purposes, but please make sure to not run it on a publicly available server, or to create matching firewall filter rules.

Besides this, everything should simply work as expected. Faucet requests will be handled accordingly, you will be able to deploy and run smart contracts. All useful ports such as:

- Wasp Dashboard (7000) (username: wasp, password: wasp)
- Wasp API (9090)
- Hornet Dashboard (8081) (username: admin, password: admin)
- Hornet API (14265)
- Faucet API (8091)

are available to the local machine.

## Wasp-CLI configuration

As all ports are locally available, this `wasp-cli.json` configuration is to be used:

```json
{
  "l1": {
    "apiaddress": "http://localhost:14265",
    "faucetaddress": "http://localhost:8091"
  },
  "wasp": {
    "0": {
      "api": "127.0.0.1:9090",
      "nanomsg": "127.0.0.1:5550",
      "peering": "127.0.0.1:4000"
    }
  }
}
```

Run `wasp-cli init` to generate a seed, and you are ready to go.

See [Configuring wasp-cli](../chains_and_nodes/wasp-cli) for further information.
