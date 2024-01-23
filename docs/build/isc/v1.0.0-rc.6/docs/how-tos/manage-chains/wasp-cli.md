---
description: How to configure wasp-cli. Requirements and configuration parameters.
image: /img/logo/WASP_logo_dark.png
keywords:
  - Wasp-cli
  - Configuration
  - Hornet
  - command line
---

# Configure wasp-cli

You can use these step-by-step instructions on how to use wasp-cli to interact with Wasp nodes on the Hornet network.

## Download wasp-cli

Download the latest wasp-cli binary from the repo [releases page](https://github.com/iotaledger/wasp/releases).
(For ease of use, it is recommended to add `wasp-cli` to your system `PATH`).

## Configuration

You can create a basic default configuration by running:

```shell
wasp-cli init
```

This command will create a configuration file named `wasp-cli.json` in the current directory.

After this, you will need to tell the `wasp-cli` the location of the _Hornet node_ and the committee of Wasp nodes:

```shell
wasp-cli set l1.apiaddress http://localhost:14265
# the faucet only exists for test networks
wasp-cli set l1.faucetaddress http://localhost:8091

# You can add as many nodes as you'd like
wasp-cli wasp add wasp-0 127.0.0.1:9090
wasp-cli wasp add wasp-1 127.0.0.1:9091
```

If you configure the Wasp node to use JWT authentication, you will need to log in
after you save the configuration.

```shell
wasp-cli login
```
