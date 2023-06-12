---
keywords:
- how to
- subscribe to channel
- immutable data channel
- Channel
- Subscriber
- Identity
- CLI
- Verifiable Credential
description: The IS-CLI allows technical as well as non-technical users to interact with Integration Services Audit Trail Gateway and SSI Bridge.
---

# CLI for Integration Services

The IS-CLI allows technical as well as non-technical users to interact with Integration Services `Audit Trail Gateway`
and `SSI Bridge`. In a simple way users can create and manage Identities, Verifiable Credentials and Channels as well as retrieve information about them with different commands. The syntax is kept simple and it doesn't take a lot of time learning to start interacting with the services.



# Prerequisites

-   min. Node.js v16.17.0

# Installation

```sh
npm install -g @iota/is-cli@latest
```

or for one-time use

```sh
npx @iota/is-cli <command>
```


# Configurations

### Configure API environment
If you want to run a local node and want a quick setup of all the necessary configurations use this command. It generates the DB configurations in the `mongo-init.js` file and the environment variables in the `.env` file. 

```sh
is setup-node
```

If you want to run your local node with Docker use this command for the necessary configurations.
It does the same as for setting up the up the node with the previous command and does some adjustments specifically for running it with Docker.
```sh
is setup-docker
```

### Configure CLI for local API access 
Before starting using the CLI we need to configure the environment for the API of the local node once. Therefore provide the URL for `SSI Bridge` with `-s`, `Audit Trail Gateway` with `-a` and the `API Key` with `-k`.
This command will create one `.iota-is.json` file and will set the enviroment variables. 

```sh
is config -s http://localhost:3001 -a http://localhost:3002 -k <your-api-key>
```

If running the node with Docker or if you want to request against a deployed instance of `Integration Services` providing the gateway URL with the option `-g` is sufficient enough.

```sh
is config -g http://localhost:3000  -k <your-api-key>
```


### View all commands
```
is help
```

:::caution Important 

For most of the channel and identity commands is a `identity.json` file in the directory where the CLI is executed needed. The CLI is suited for creating one identity in advance.

```sh
is create-identity -i <Path to identity claim file or stdin> -o  <Path to output file>
```

:::