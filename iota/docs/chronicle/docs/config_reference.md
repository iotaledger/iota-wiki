# Config Reference

## `storage_config`

### `keyspaces: Vec<KeyspaceConfig>`
Multiple keyspaces can be configured in order to filter incoming messages. If the `filter` feature is not used, *only the first configured keyspace will be considered* or the default (`chronicle`) if none is provided.

In addition to the keyspace name, each requires a map of datacenters (name -> replication factor). See [here](https://university.scylladb.com/courses/scylla-essentials-overview/lessons/architecture/topic/datacenter/) for more information about datacenters in ScyllaDB.

### `listen_address: String`
The scylla.rs dashboard listen address, where it accepts requests to manage the Scylla cluster.

### `thread_count: Enum`
The number of threads Scylla will use. Can be one of `Count(usize)` (a simple scalar count) or `CoreMultiple(usize)` (a multiple of the number of cores the system has).

### `reporter_count: u8`
The number of reporters Scylla will spawn.

### `local_datacenter: String`
The Scylla local datacenter.

### `partition_config`
Specifies the number of partitions to use in the database, as well as the number of milestones to use as chunks.

NOTICE: You can't change `partition_config` in future without migration.

## `api_config`

Nothing at the moment, please refer to [.env](https://github.com/iotaledger/chronicle.rs/blob/main/.env).

## `broker_config`

### `websocket_address: String`
The Broker dashboard listen address, where it accepts requests to manage the broker topology.


### `mqtt_brokers: Vec<Url>`

- Messages: mqtt topic used to receive incoming IOTA messages;
- MessagesReferenced: mqtt topic used to receive incoming metadata;

NOTICE: You should at least have one of each.

### `api_endpoints: Vec<Url>`
IOTA node-endpoints used by chronicle to fill gaps.

### `retries_per_endpoint: u8`
Max number of retries to retrieve something from `api_endpoints`.

### `retries_per_query: usize`
Max number of retries to fetch/insert something from/to`scylla`, before declaring an outage, which will force the broker application to pause and await for scylla cluster to recover.

### `collector_count: u8`
The number of concurrent collectors which collect data from feed sources also it's used as solidifier_count.

### `requester_count: u8`
The number of concurrent requesters per collector.

NOTE: requesters are used by collector to fetch missing data from `api_endpoint`


### `request_timeout_secs: u64`
The `api_endpoint` request timeout.


### `parallelism: u8`
The max number of concurrent solidify requests.


### `sync_range: Option<SyncRange>`
Identiy the milestone data sync range from/to.

### `complete_gaps_interval_secs: u64`
Interval used by syncer to check if there are some gaps to fill/complete.

### `logs_dir: Option<String>`
If provided, it will archive the milestone data in ordered fashion.

### `max_log_size: Option<u64>`
The upper limit of the log_file_size.

NOTE: Ensure to use a limit within your filesystem range.