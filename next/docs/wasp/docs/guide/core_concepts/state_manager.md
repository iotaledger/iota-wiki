---
description: State manager is Wasp component, which is responsible for keeping the store up to date.
image: /img/logo/WASP_logo_dark.png
keywords:
  - state manager
  - pruning
  - explanation
---

# State manager

State manager aims at keeping the state of the node up to date by retrieving missing data and ensuring that it is
consistently stored in the DB. It services requests by other Wasp components (consensus, mempool), which mainly
consist of ensuring that the required state is available in the node: that it may be retrieved from the permanent
store of the node (the database; DB). State manager does that by obtaining all of the blocks, that resulted in making
that state. So to obtain state index `n`, it first must commit block index `1`, then block index `2` etc. up to
block index `n` precisely in that order. There are two ways for state manager to obtain blocks:

1. Receive them directly from this node's consensus when the new state[^1] is decided. State manager has no influence
   to this process.
2. Receive them from neighbouring nodes upon request, provided the block is available there.

Independently of the way the block is received, it is stored in state manager's cache (for quicker access) and WAL
(to ensure availability). Therefore it may happen that the block can be retrieved from there.

[^1] A block is a difference between two consecutive states. To make state index `n`, block index `n` must be obtained
and committed on top of state index `n-1`. Although state manager manipulates blocks, in this description sometimes
"state" and "block" will be used interchangeably as "obtaining block" or "committing block" is essentially the same as "obtaining state" or "committing state" respectively, having in mind that previous state is already obtained or committed. Block
and state has some other common properties, e.g. block index `n`, which applied to state index `n-1` produces state index `n`
contains the same commitment as the state index `n`.

## Obtaining blocks

Requests to state manager contain the state commitment and the state manager must ensure, that block (state) with this
commitment is present in the DB. It is possible that to satisfy the request state manager needs to retrieve
several blocks. However this cannot be done in one step as only the commitment of the requested block is known. For this
reason state (block) contains a commitment of previous block. Previous block must be committed prior to committing the
requested block. And this logic can be extended up to the block, which is already present in the DB or until the
origin state is reached.

E.g., let's say, that the last state in the DB is state index `9` and request to have state index `12` is received.
State manager does this in following steps:

1. Block index `12` is obtained and commitment of block index `11` is known.
2. As commitment of block index `11` is known, the block may be requested and obtained. After obtaining block index `11` commitment of block index `10` is known.
3. Using block index `10` commitment the DB is checked to make sure that it is already present.
4. As block index `10` is already committed, block index `11` is committed. This makes state `11` present in the DB.
5. As block index `11` is already committed, block index `12` is committed. This makes state `12` present in the DB and completes the request.

To obtain blocks, state manager sends requests to 5 other randomly chosen nodes. If the block is not received (either messages
got lost or these nodes do not have the requested block), 5 other randomly chosen nodes are queried. This process is repeated
until the block is received (usually from other node but may also be from this node's consensus) or the request is no longer
valid.

## Block cache

Block cache is in memory block storage. It keeps a limited amount of blocks for limited amount of time to make the retrieval
quicker. E.g., in the last step of example of the previous section block index `12` must be committed. It is obtained in
the first step, but as several steps of the algorithm are spread over time with requests to other nodes in between, and
several requests to obtain the same block may be present, it is not feasible to store it in request. However it would
be wasteful to fetch it twice on the same request. So the block is stored in cache in the first step of the algorithm and
retrieved from cache later in the last step.

The block is kept in the cache no longer that predetermined (configurable) amount of time. If upon writing to cache blocks
in cache limit is exceeded, block, which is in cache the longest, is removed from cache.

## Block write ahead log (WAL)

Upon receiving a block, its contents is dumped into a file and stored in a file system. The set of such files is WAL.

The primary motivation behind creating it was in order not to deadlock the chain. Upon deciding on next state committee
nodes send the newest block to state manager and at the same time one of the nodes send the newest transaction to L1.
In an unfavourable chain of events it might happen that state managers of the committee nodes are not fast enough to commit
the block to the DB (see algorithm in [Obtaining blocks section](#obtaining-blocks)), before the node crashes. This leaves
the nodes in the old state as none of the nodes had time to commit the block. However the L1 reports the new state as
the latest. However none of the nodes can be transferred to it. The solution is to put the block into WAL as soon as
possible so it won't be lost.

Currently upon receiving the new block from consensus, state manager is sure that its predecessor is in the Store, because
consensus sends other requests before sending the new block, so WAL isn't that crucial any more. However, it is useful
in several occasions:

1. When the node is catching up many states and block cache limit is too small to store all the blocks, WAL is used to avoid
   fetching the same block twice.
2. In case of adding new node to the network to avoid catch up taking a lot of time (because all the blocks must be fetched
   one by one) WAL can be copied from some other node. This is also true for any catch up over many states, when WAL (or its parts)
   is missing for some reasons.

## Pruning

In order to limit the DB size, old states are deleted (pruned) from it on a regular basis. The amount of states to keep is
configured by two parameters: one in the configuration of the node (`pruningMinStatesToKeep`) and one in the governance contract
(`BlockKeepAmount`). The resulting limit of previous states to keep is the larger of the two. Every time a block is committed
to the DB, states which are over the limit are pruned. The algorithm ensures that oldest states are pruned first to avoid
gaps between available states on the event of some failure.

Pruning may be disabled completely via node configuration to make an archive node: node that contains all the state ever
obtained by the chain. Note, that such node will require a lot of resources to maintain: mainly disk storage.

## Parameters:

- `blockCacheMaxSize`: the limit of the blocks in block cache. Default is 1k.
- `blockCacheBlocksInCacheDuration`: the limit of the time block stays in block cache. Default is 1 hour.
- `blockCacheBlockCleaningPeriod`: how often state manager should find and delete blocks, that stayed in block cache
  for too long. Default is every minute.
- `stateManagerGetBlockRetry`: how often requests to retrieve the needed blocks from other nodes should be repeated.
  Default is every 3 seconds.
- `stateManagerRequestCleaningPeriod`: how often state manager should find and delete requests, that are no longer valid.
  Default is every second.
- `stateManagerTimerTickPeriod`: how often state manager should check if some maintenance (cleaning requests or block cache,
  resending requests for blocks) is needed. Default is every second. There is no point
  in making this value larger than any of `blockCacheBlockCleaningPeriod`,
  `stateManagerGetBlockRetry` or `stateManagerRequestCleaningPeriod`.
- `pruningMinStatesToKeep` : minimum number of old states to keep in the DB. Note that if `BlockKeepAmount` in
  governance contract is larger than this value, then more old states will be kept.
  Default is 10k. 0 (and below) disables pruning.
- `pruningMaxStatesToDelete`: maximum number of states to prune in one run. This needed in order not to grab
  state manager's time for pruning for too long. Default is 1k.
