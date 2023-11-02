---
description: This page described to take part in the global snapshot.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
  - golang
  - github
  - bootstrapping
  - snapshot
  - verify
  - validate
  - hornet
  - tools
  - how to
---

# Chrysalis Snapshot Validation/Boostrapping

This guide outlined how to take part in the global snapshot, respectively genesis snapshot creation for the
legacy, and the Chrysalis Phase 2 IOTA network. The goal was to generate a global snapshot for the legacy network which acted
as a cut-off point for when only migration bundles/transactions were allowed. Then a genesis snapshot for the new network
which contained the already burned/migrated funds from the 7-day-migration window would be created.

## Requirements

- A GitHub account and git.
- A synchronized legacy Hornet node (running version < 0.x.x).
  - The `getLedgerState` API command must be permitted. Add an entry to `httpAPI.permitRemoteAccess` in case this API
    command is not added yet (restart your node afterwards).
  - The API port must be accessible.
- Golang version 1.16.x (https://golang.org/).

## Steps

:::note

Make sure you have Go installed by issuing `go version` on your command line.

:::

1. `git clone https://github.com/iotaledger/chrysalis-tools.git`.
2. `cd chrysalis-tools/snapshot/verify`.
3. `go build` (this should generate a `verify`/`verify.exe` binary respectively).
4. `./verify -node="https://your-node-uri" -genesis-snapshot-file-network-id="chrysalis-mainnet" -genesis-snapshot-file-network-id-alt="as-network"`.
5. The program would fetch the then current ledger state of your defined legacy Hornet node, compute its Blake2b-256 hash
   and generate the global snapshot for the legacy and genesis snapshot for the new network. Example output:

```
2021/04/28 12:05:22 querying legacy node for info...
2021/04/28 12:05:22 legacy node state: lsmi/lsm 3705194/3705194
2021/04/28 12:05:22 fetching ledger state at 3705194, this might take a while...go grab a coffee...
2021/04/28 12:05:27 total ledger entries: 340692
2021/04/28 12:05:29 legacy ledger state integrity hash: 8900ac80edffe4eed9f6f55dfe32d775c18d789351c7dddfa4a4c815a0fa7116
2021/04/28 12:05:29 migration: addrs count 7949, tokens total 661557732260355
2021/04/28 12:05:29 migration (alternative): addrs count 7950, tokens total 724118708261378
2021/04/28 12:05:29 generating genesis snapshot files...
2021/04/28 12:05:29 treasury allocation with genesis_snapshot.bin: 2117972551017406 tokens
2021/04/28 12:05:29 treasury allocation with genesis_snapshot_alt.bin: 2055411575016383 tokens
2021/04/28 12:05:29 misc info:
2021/04/28 12:05:29 eligible for migration: addrs 225329, tokens total 2055405216227457
```

6. Generate the sha256 hashes of the generated snapshot.
   files: `sha256sum genesis_snapshot.bin genesis_snapshot_alt.bin global_snapshot.csv`; Example output:

```
$ sha256sum genesis_snapshot.bin genesis_snapshot_alt.bin global_snapshot.csv
65be1a80a6895d17a492db3dd55babf1d57557dbaa40da6e1d0ed5937ceb6662  genesis_snapshot.bin
39bd5308a1e9fb57503f6d15b90206ae434f581807ef0e29cf2e66de64165c5b  genesis_snapshot_alt.bin
8f48388423cc706bf5f7707735fd99a5d89efbb966a8e2a0b82ff3529cf33f7f  global_snapshot.csv
```

8. Copy the entire program output, and the sha256 hashes to the [corresponding issue](https://github.com/iotaledger/hornet/issues/16) on
   the `iotaledger` Hornet fork repository.

## Bootstrapping the Legacy Hornet Node From The Global Snapshot

:::note

Loading the global snapshot ensured that your legacy Hornet node added the _genesis transaction_ (999...) as a solid entry point: this was important as the Coordinator would issue the next milestone after the global snapshot index on top of it. Your node would **not** lose the data it already had.

:::

1. Await for confirmation that the global snapshot was taken successfully by looking into the validation issue on
   the [Hornet repository](https://github.com/gohornet/hornet) or Discord.
2. Stop your legacy Hornet node and download the binary or docker image of the Hornet build which only supports
   migration-bundles. With this "migration-bundles-only" version, your Hornet node will also no longer peer to nodes
   which do not run the same version.
3. Let `snapshots.global.path` point to the global snapshot file (i.e `global_snapshot.csv`).
4. Under `snapshots.global.index` define the index of the milestone at which the global snapshot was taken. (This should
   correspond to what `legacy node state` was from the program output, i.e. `3705194` from the example output above).
5. Change `snapshots.loadType` to `"global"` (note the quotes as the value is a string).
6. Restart your legacy Hornet **with the additional `--forceGlobalSnapshot` flag** (this will instruct your Hornet node
   to load the global snapshot despite the fact that it already has a database).
