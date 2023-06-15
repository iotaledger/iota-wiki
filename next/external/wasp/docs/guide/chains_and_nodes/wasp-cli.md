---
description: How to configure the wasp-cli. Requirements and configuration parameters.
image: /img/logo/WASP_logo_dark.png
keywords:

- Wasp-cli
- Configuration
- Hornet
- command line

---

# Configuring wasp-cli

Step-by-step instructions on how to use wasp-cli to interact with Wasp nodes on the Hornet network.

## Requirements

After going through the instructions on [Running a node](./running-a-node.md), you should have the `wasp-cli` binary
available in your system.

## Configuration

You can create a basic default configuration by running:

```shell
wasp-cli init 
````

This command will create a configuration file named `wasp-cli.json` in the current directory.

After this, you will need to tell the `wasp-cli` the location of the Hornet node and the committee of Wasp nodes:

```shell
wasp-cli set l1.apiaddress http://localhost:14265
wasp-cli set l1.faucetaddress http://localhost:8091

wasp-cli set wasp.0.api 127.0.0.1:9090
wasp-cli set wasp.0.nanomsg 127.0.0.1:5550
wasp-cli set wasp.0.peering 127.0.0.1:4000

## You can add as many nodes as you like in your committee
wasp-cli set wasp.1.api 127.0.0.1:9091
wasp-cli set wasp.1.nanomsg 127.0.0.1:5551
wasp-cli set wasp.1.peering 127.0.0.1:4001

...shell

wasp-cli set wasp.N.api 127.0.0.1:9091
wasp-cli set wasp.N.nanomsg 127.0.0.1:5551
wasp-cli set wasp.N.peering 127.0.0.1:4001
```

Alternatively, you can edit the `wasp-cli.json` file and include the desired server locations:

- The Hornet api address:

  ```json
  "l1": {
    "apiaddress": "http://localhost:14265",
    "faucetaddress": "http://localhost:8091"
  },
  ```

- The API/nanomsg/peering address for each Wasp node:

  ```json
  "wasp": {
      "0": {
        "api": "127.0.0.1:9090",
        "nanomsg": "127.0.0.1:5550",
        "peering": "127.0.0.1:4000"
      },
      "1": {
        ...
      },
    }
  ```

If you configure the Wasp node to use the experimental [JWT authentication](node-config.md#jwt), you will need to log in
after you save the configuration.

```shell
wasp-cli login
``` 
