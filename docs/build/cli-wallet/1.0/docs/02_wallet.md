# Wallet Interface

The Wallet Interface is evaluated through the Command Line Interface of the `wallet` binary, once per
execution.

It is responsible for the creation and management of the wallet and its accounts.

You can run `./wallet --help` to print all available CLI commands, arguments, and options. The available options are listed in the table below:

| Name                         | Description                                                    | Default                            | Environment Variable       | Example                        |
| ---------------------------- | -------------------------------------------------------------- | ---------------------------------- | -------------------------- | ------------------------------ |
| `--wallet-db-path`           | Sets the path to the wallet database                           | `./stardust-cli-wallet-db`         | `WALLET_DATABASE_PATH`     | `/path/to/wallet-db`           |
| `--stronghold-snapshot-path` | Sets the path to the Stronghold snapshot file                  | `./stardust-cli-wallet.stronghold` | `STRONGHOLD_SNAPSHOT_PATH` | `/path/to/stronghold-snapshot` |
| `--log-level` (`-l`)         | Sets the log verbosity level (error, warn, info, debug, trace) | `debug`                            | ✘                          | `trace`                        |
| `--help` (`-h`)              | Shows all available commands, arguments and options            | ✘                                  | ✘                          | ✘                              |
| `--version` (`-V`)           | Shows the current version                                      | ✘                                  | ✘                          | ✘                              |

## Usage Examples

### `./wallet`

Starts the wallet without a specified account:

- If the wallet has only one account, it will be used;
- If the wallet has more than one account, a selector will be shown to decide which account to use.

The wallet needs to be initialised (`init` command) and with at least one account (`new` command).

#### Example

```sh
./wallet
```

### `./wallet [account]`

Starts the wallet with a specified account;

The wallet needs to be initialised (`init` command).

#### Example

```sh
./wallet main
```

### `./wallet backup`

Creates a stronghold backup file.

#### Parameters

| Name   | Optional | Example           |
| ------ | -------- | ----------------- |
| `path` | ✘        | backup.stronghold |

#### Example

Create a stronghold backup file.

```sh
./wallet backup backup.stronghold
```

### `./wallet change-password`

Changes the stronghold password.

#### Example

Change the stronghold password.

```sh
./wallet change-password
```

### `./wallet init`

Initialises the wallet by creating a [stronghold](https://github.com/iotaledger/stronghold.rs) file from a provided or generated mnemonic.

The wallet can only be initialised once.

When just initialised, the wallet has no account yet, use the `new` command to create one.

#### Options

| Name                 | Description                                    | Default                             | Environment Variable | Example                  |
| -------------------- | ---------------------------------------------- | ----------------------------------- | -------------------- | ------------------------ |
| `--mnemonic` (`-m`)  | Initialises a wallet from an existing mnemonic | ✘                                   | ✘                    | "aunt middle impose ..." |
| `--node-url` (`-n`)  | Sets the node to connect to                    | `https://api.testnet.shimmer.network` | `NODE_URL`           | http://localhost:14265   |
| `--coin-type` (`-c`) | Sets the coin type associated with the wallet  | 4219 (=Shimmer)                     | ✘                    | 4218(=IOTA)              |

#### Examples

Initialize the wallet with a randomly generated mnemonic and the default node.

```sh
./wallet init
```

Initialize the wallet with a given mnemonic and the default node.
DO NOT USE THIS MNEMONIC.

```sh
./wallet init --mnemonic "aunt middle impose faith ramp kid olive good practice motor grab ready group episode oven matrix silver rhythm avocado assume humble tiger shiver hurt"
```

Initialize the wallet with a randomly generated mnemonic and a given node.

```sh
./wallet init --node http://localhost:14265
```

Initialize the wallet with a given coin type.
See [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) for all registered coin types.

```sh
./wallet init --coin-type 4219
```

### `./wallet migrate-stronghold-snapshot-v2-to-v3`

Migrates a stronghold snapshot from v2 to v3.

#### Parameters

| Name   | Optional | Default                            | Example           |
| ------ | -------- | ---------------------------------- | ----------------- |
| `path` | ✓        | "./stardust-cli-wallet.stronghold" | backup.stronghold |

#### Example

Migrate a stronghold snapshot from v2 to v3 with the default path: "./stardust-cli-wallet.stronghold".

```sh
./wallet migrate-stronghold-snapshot-v2-to-v3
```

Migrate a stronghold snapshot from v2 to v3 with a custom path.

```sh
./wallet migrate-stronghold-snapshot-v2-to-v3 some-other-path.stronghold
```

### `./wallet mnemonic`

Generates a new random mnemonic.

#### Example

Generate a new random mnemonic.

```sh
./wallet mnemonic
```

### `./wallet new`

Creates a new account.

The wallet needs to be initialised (`init` command).

#### Parameters

| Name    | Optional | Default       | Example |
| ------- | -------- | ------------- | ------- |
| `alias` | ✓        | Account index | main    |

#### Examples

Create a new account with the account index as alias.

```sh
./wallet new
```

Create a new account with a provided alias.

```sh
./wallet new main
```

### `./wallet restore`

Restores accounts from a stronghold backup file.

#### Parameters

| Name   | Optional | Example           |
| ------ | -------- | ----------------- |
| `path` | ✘        | backup.stronghold |

#### Example

Restore accounts from a stronghold backup file.

```sh
./wallet restore backup.stronghold
```

### `./wallet set-node-url`

Sets the node to be used for all requests.

The new node URL is persisted to the storage and all future requests will use it.

#### Parameters

| Name  | Optional | Example                |
| ----- | -------- | ---------------------- |
| `url` | ✘        | http://localhost:14265 |

#### Example

```sh
./wallet set-node-url http://localhost:14265
```

### `./wallet sync`

Synchronises all accounts.

#### Example

```sh
./wallet sync
```
