---
description: State manager is Wasp component, which is responsible for keeping the store up to date.
image: /img/logo/WASP_logo_dark.png
keywords:
  - state manager
  - pruning
  - snapshot
  - write ahead log
  - WAL
---

# State manager

State manager aims at keeping the state of the node up to date by retrieving missing data and ensuring that it is
consistently stored in the DB. It services requests by other Wasp components (consensus, mempool), which mainly
consist of ensuring that the required state is available in the node: that it may be retrieved from the permanent
store of the node (the database; DB). An obvious way to obtain the latest state is to obtain all of the blocks,
that resulted in making that state. So to obtain state index `n`, state manager first must commit block index `1`,
then block index `2` etc. up to block index `n` precisely in that order. There are two ways for state manager
to obtain blocks:

1. Receive them directly from this node's consensus when the new state[^1] is decided. State manager has no influence
   to this process.
2. Receive them from neighbouring nodes upon request, provided the block is available there.

Independently of the way the block is received, it is stored in state manager's cache (for quicker access) and WAL
(to ensure availability). Therefore it may happen that the block can be retrieved from there.

[^1] A block is a difference between two consecutive states. To make state index `n`, block index `n` must be obtained
and committed on top of state index `n-1`. Although state manager manipulates blocks, in this description sometimes
"state" and "block" will be used interchangeably as "obtaining block" or "committing block" is essentially the same as
"obtaining state" or "committing state" respectively, having in mind that previous state is already obtained or committed. Block
and state has some other common properties, e.g. block index `n`, which applied to state index `n-1` produces state index `n`,
contains the same commitment as state index `n`.

## Snapshot

Once in a while there might be a need to add a new node to the network. This node has no knowledge of chain's history
and it still needs to have the newest state of the chain (to catch up the chain). If the chain has been running for a while,
it might have gone through many sate transitions and downloading that many blocks may take a long period of time. To avoid that,
some nodes in the network can be configured to dump a complete state of the chain at current time into a file periodically
(see `snapshots.period` parameter). This file is called a snapshot. Loading a snapshot to DB produces the same state as downloading
and committing all the blocks that produced that state. However as those blocks aren't downloaded, they are not available in the DB.

The snapshot format is as follows:
1. Number `4` in 4 byte unsigned integer little endian format representing the length of state index,
2. state index in 4 byte unsigned integer little endian format,
3. Number `40` in 4 byte unsigned integer little endian format representing the length of state commitment: `20` bytes for trie root and
   `20` bytes for hash of a block, which was last committed to make this state (block with the same index as state),
4. trie root in `20` bytes,
5. the mentioned block hash in `20` bytes,
6. for each key-value pair of state:
    1. length of the key in 4 byte unsigned integer little endian format,
    2. the key itself,
    3. length of the value in 4 byte unsigned integer little endian format,
    4. the value itself.

The order of the key-value pairs in snapshot is not defined and two snapshots with same key-value pairs in different order should
be consider as being the same.

The node that makes a snapshot can serve it over http and new nodes can use this to speed up the catch up. Serving the snapshots
over http is beyond the scope of Wasp and should be done in addition. Wasp is only responsible for making snapshots in local
(configurable by `snapshots.localPath` parameter) folder and obtaining them when needed from the same local folder or from
configured (by `snapshots.networkPaths` parameter) http addresses. A folder, serving snapshot files over http must contain
`INDEX` file with new line separated list of snapshot file names.

To know, which states are available as snapshots, Wasp periodically (see `snapshots.updatePeriod` parameter) updates the known
snapshot list: it scans local folder and all the network addresses. In local folder it reads all the files with names that satisfy
search pattern `*-*.snap`. In each network location Wasp reads all the files listed in `INDEX` file of that location. Wasp reads
a state index and a commitment from the contents of these files. File names are not used to obtain this information and full
snapshot files are not (down)loaded on this update. The obtained state index and commitment together with exact address
of the snapshot are stored in known snapshot list. When snapshot is needed by state manager, the list of known snapshots
is checked and the attempt to (down)load the snapshot from one of the locations in the list is made. If it fails, another
location is tried. If obtaining snapshot from all the locations fail, it is assumed that the snapshot is not available.

## Obtaining blocks

Requests to state manager contain the state commitment and the state manager must ensure, that block (state) with this
commitment is present in the DB. It is possible that to satisfy the request state manager needs to retrieve
several blocks. However this cannot be done in one step as only the commitment of the requested block is known. For this
reason state (block) contains a commitment of previous block. Previous block must be committed prior to committing the
requested block. And this logic can be extended up to the block, which is already present in the DB, or until snapshot is
found, or until the origin state is reached.

E.g., let's say, that the last state in the DB is state index `10` and request to have state index `12` is received.
State manager does this in following steps:

1. If snapshot index `12` is available, it is obtained and loaded to the DB. The request is complete.
2. If not, block index `12` is obtained and commitment of block index `11` is known.
3. As commitment of block (state) index `11` is known, it can be checked if snapshot index `11` is available. If it is,
the snapshot is obtained and loaded to the DB and only the last step of the algorithm is needed.
4. If not, as commitment of block index `11` is known, the block may be requested and obtained. After obtaining block
index `11` commitment of block index `10` is known.
3. Using block index `10` commitment the DB is checked to make sure that it is already present.
4. As block index `10` is already committed, block index `11` is committed. This makes state `11` present in the DB.
5. As state `11` is already committed (by committing block index `11` or by loading snapshot index `11`), block index
`12` is committed. This makes state `12` present in the DB and completes the request.

To obtain blocks, state manager sends requests to 5 other randomly chosen nodes. If the block is not received (either messages
got lost or these nodes do not have the requested block), 5 other randomly chosen nodes are queried. This process is repeated
until the block is received (usually from other node but may also be from this node's consensus) or the request is no longer
valid.

## Block cache

Block cache is in memory block storage. It keeps a limited amount (configured by `stateManager.blockCacheMaxSize`) of blocks
for limited amount of time (configured by `stateManager.blockCacheBlocksInCacheDuration`) to make the retrieval
quicker. E.g., in the last step of example of the previous section block index `12` must be committed. It is obtained in
the step 2, but as several steps of the algorithm are spread over time with requests to other nodes in between, and
several requests to obtain the same block may be present, it is not feasible to store it in request. However it would
be wasteful to fetch it twice on the same request. So the block is stored in cache in step 2 of the algorithm and
retrieved from cache later in the last step.

The block is kept in the cache no longer that predetermined amount of time (configured by `stateManager.blockCacheBlocksInCacheDuration`).
If upon writing to cache blocks in cache limit is exceeded, block, which is in cache the longest, is removed from cache.

## Block write ahead log (WAL)

Upon receiving a block, its contents is dumped into a file and stored in a file system. The set of such files is WAL.

The primary motivation behind creating it was in order not to deadlock the chain. Upon deciding on next state committee
nodes send the newest block to state manager and at the same time one of the nodes send the newest transaction to L1.
In an unfavourable chain of events it might happen that state managers of the committee nodes are not fast enough to commit
the block to the DB (see algorithm in [Obtaining blocks section](#obtaining-blocks)), before the node crashes. This leaves
the nodes in the old state as none of the nodes had time to commit the block. However the L1 reports the new state as
the latest although none of the nodes can be transferred to it. The solution is to put the block into WAL as soon as
possible so it won't be lost.

Currently upon receiving the new confirmed block from node's consensus, state manager is sure that its predecessor is in the DB,
because consensus sends other requests before sending the new block, so WAL isn't that crucial any more. However, it is useful
in several occasions:

1. Storing preliminary block, which is sent by consensus of other nodes.
2. When the node is catching up many states and block cache limit is too small to store all the blocks, WAL is used to avoid
fetching the same block twice.
3. In case of adding new node to the network to avoid catch up taking a lot of time when snapshots are not available,
the new node can be configured (`wal.loadToStore=true`) to load the DB with blocks from WAL on startup. WAL can be copied
from some other node. This is also true for any catch up over many states, when WAL (part of it) is missing for some reasons.

## Pruning

In order to limit the DB size, old states are deleted (pruned) from it on a regular basis. The amount of states to keep is
configured by two parameters: one in the configuration of the node (`pruningMinStatesToKeep`) and one in the governance contract
(`BlockKeepAmount`). The resulting limit of previous states to keep is the larger of the two. Every time a block is committed
to the DB, states which are over the limit are pruned. The algorithm ensures that oldest states are pruned first to avoid
gaps between available states on the event of some failure.

Pruning may be disabled completely via node configuration to make an archive node: node that contains all the state ever
obtained by the chain. Note, that such node will require a lot of resources to maintain: mainly disk storage.

## Parameters

### State manager

The following parameters may be provided in section `stateManager`:
- `blockCacheMaxSize`: the limit of the blocks in block cache. Default is 1k.
- `blockCacheBlocksInCacheDuration`: the limit of the time block stays in block cache. Default is 1 hour.
- `blockCacheBlockCleaningPeriod`: how often state manager should find and delete blocks, that stayed in block cache
  for too long. Default is every minute.
- `stateManagerGetBlockRetry`: how often requests to retrieve the needed blocks from other nodes should be repeated.
  Default is every 3 seconds.
- `stateManagerRequestCleaningPeriod`: how often state manager should find and delete requests, that are no longer valid.
  Default is every second.
- `stateManagerTimerTickPeriod`: how often state manager should check if some maintenance (cleaning requests or block cache,
  resending requests for blocks) is needed. Default is every second. There is no point in making this value larger than
  any of `blockCacheBlockCleaningPeriod`, `stateManagerGetBlockRetry` or `stateManagerRequestCleaningPeriod`.
- `pruningMinStatesToKeep` : minimum number of old states to keep in the DB. Note that if `BlockKeepAmount` in
  governance contract is larger than this value, then more old states will be kept.
  Default is 10k. 0 (and below) disables pruning.
- `pruningMaxStatesToDelete`: maximum number of states to prune in one run. This needed in order not to grab
  state manager's time for pruning for too long. Default is 1k.

### Snapshots

The following parameters may be provided in section `snapshots`:
- `period`: how often state snapshots should be made: 1000 meaning "every 1000th state", 0 meaning "making snapshots is disabled".
  Snapshots are disabled by default.
- `localPath`: the path to the snapshots folder in this node's disk. Default is `waspdb/snap`.
- `networkPaths`: the comma separated list of paths to the remote (http(s)) snapshot locations. The list is empty by default.
- `updatePeriod`: how often known snapshots list should be updated. Default is every 5 minutes.

### WAL

The following parameters may be provided in section `wal`:
- `loadToStore`: load blocks from WAL to the store on node start-up. This function is off (`false`) by default.
- `enabled`: whether the WAL is enabled. It is enabled by default.
- `path`: the path to the WAL folder. Default is `waspdb/wal`.
