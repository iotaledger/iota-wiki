---
description: The `blocklog` contract keeps track of the blocks of requests processed by the chain.
image: /img/logo/WASP_logo_dark.png
tags:
  - core contracts
  - blocklog
  - views
  - information
  - request status
  - receipts
  - events
  - reference
---

# The `blocklog` Contract

The `blocklog` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts chain.

The `blocklog` contract keeps track of the blocks of requests processed by the chain, providing views to get request
status, receipts, block, and event details.

To avoid having a monotonically increasing state size, only the latest `N`
blocks (and their events and receipts) are stored. This parameter can be configured
when [deploying the chain](/wasp/how-tos/setting-up-a-chain).

---

## Entry Points

### `retryUnprocessable(u requestID)`

Tries to retry a given request that was marked as "unprocessable".

:::note
"Unprocessable" requests are on-ledger requests that do not include enough base tokens to cover the deposit fees (example if an user tries to deposit many native tokens in a single output but only includes the minimum possible amount of base tokens). Such requests will be collected into an "unprocessable list" and users are able to deposit more funds onto their on-chain account and retry them afterwards.
:::

#### Parameters

- `u` ([`isc::RequestID`](https://github.com/iotaledger/wasp/blob/develop/packages/isc/request.go)): The requestID to be retried. (sender of the retry request must match the sender of the "unprocessable" request)

---

## Views

### `getBlockInfo(n uint32)`

Returns information about the block with index `n`.

#### Parameters

- `n`: (optional `uint32`) The block index. Default: the latest block.

#### Returns

- `n` (`uint32`):The block index.
- `i` ([`BlockInfo`](#blockinfo)):The information about the block.

### `getRequestIDsForBlock(n uint32)`

Returns a list with all request IDs in the block with block index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. The default value is the latest block.

#### Returns

- `n` (`uint32`):The block index.
- `u`: ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go)
  of [`RequestID`](#requestid))

### `getRequestReceipt(u RequestID)`

Returns the receipt for the request with the given ID.

#### Parameters

- `u` ([`RequestID`](#requestid)):The request ID.

#### Returns

- `n` (`uint32`):The block index.
- `r` (`uint16`):The request index within the block.
- `d` ([`RequestReceipt`](#requestreceipt)):The request receipt.

### `getRequestReceiptsForBlock(n uint32)`

Returns all the receipts in the block with index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. Defaults to the latest block.

#### Returns

- `n` (`uint32`):The block index.
- `d`: ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go)
  of [`RequestReceipt`](#requestreceipt))

### `isRequestProcessed(u RequestID)`

Returns whether the request with ID `u` has been processed.

#### Parameters

- `u` ([`RequestID`](#requestid)):The request ID.

#### Returns

- `p` (`bool`):Whether the request was processed or not.

### `getEventsForRequest(u RequestID)`

Returns the list of events triggered during the execution of the request with ID `u`.

### Parameters

- `u` ([`RequestID`](#requestid)):The request ID.

#### Returns

- `e`: ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go) of `[]byte`).

### `getEventsForBlock(n blockIndex)`

Returns the list of events triggered during the execution of all requests in the block with index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. Defaults to the latest block.

#### Returns

- `e`: ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go) of `[]byte`).

### `getEventsForContract(h Hname)`

Returns a list of events triggered by the smart contract with hname `h`.

#### Parameters

- `h` (`hname`):The smart contract’s hname.
- `f` (optional `uint32` - default: `0`):"From" block index.
- `t` (optional `uint32` - default: `MaxUint32`):"To" block index.

#### Returns

- `e`: ([`Array`](https://github.com/iotaledger/wasp/blob/develop/packages/kv/collections/array.go) of `[]byte`)

### `hasUnprocessable(u requestID)`

Asserts whether or not a given requestID (`u`) is present in the "unprocessable list"

#### Parameters

- `u` ([`isc::RequestID`](https://github.com/iotaledger/wasp/blob/develop/packages/isc/request.go)): The requestID to be checked

#### Returns

- `x` ([`bool`]) Whether or not the request exists in the "unprocessable list"

---

## Schemas

### `RequestID`

A `RequestID` is encoded as the concatenation of:

- Transaction ID (`[32]byte`).
- Transaction output index (`uint16`).

### `BlockInfo`

`BlockInfo` is encoded as the concatenation of:

- The block timestamp (`uint64` UNIX nanoseconds).
- Amount of requests in the block (`uint16`).
- Amount of successful requests (`uint16`).
- Amount of off-ledger requests (`uint16`).
- Anchor transaction ID ([`iotago::TransactionID`](https://github.com/iotaledger/iota.go/blob/develop/transaction.go)).
- Anchor transaction sub-essence hash (`[32]byte`).
- Previous L1 commitment (except for block index 0).
  - Trie root (`[20]byte`).
  - Block hash (`[20]byte`).
- Total base tokens in L2 accounts (`uint64`).
- Total storage deposit (`uint64`).
- Gas burned (`uint64`).
- Gas fee charged (`uint64`).

### `RequestReceipt`

`RequestReceipt` is encoded as the concatenation of:

- Gas budget (`uint64`).
- Gas burned (`uint64`).
- Gas fee charged (`uint64`).
- The request ([`isc::Request`](https://github.com/iotaledger/wasp/blob/develop/packages/isc/request.go)).
- Whether the request produced an error (`bool`).
- If the request produced an error, the
  [`UnresolvedVMError`](./errors.md#unresolvedvmerror).
