---
description: The `blocklog` contract keeps track of the blocks of requests processed by the chain.
image: /img/logo/WASP_logo_dark.png
keywords:

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

## Entry Points

The `blocklog` core contract does not contain any entry points which modify its state.

The only way to modify the `blocklog` state is by submitting requests for processing to the chain.

---

## Views

### `getBlockInfo(n uint32)`

Returns information about the block with index `n`.

#### Parameters

- `n`:  (optional `uint32`) The block index. Default: the latest block.

#### Returns

- `n` (`uint32`):The block index.
- `i` ([`BlockInfo`](#blockinfo)):The information about the block.

### `getRequestIDsForBlock(n uint32)`

Returns a list with the IDs of all requests in the block with block index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. The default value is the latest block.

#### Returns

- `u`: ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go)
  of [`RequestID`](#requestid))

### `getRequestReceipt(u RequestID)`

Returns the receipt for the request with the given ID.

#### Parameters

- `u` ([`RequestID`](#requestid)):The request ID.

#### Returns

- `d` ([`RequestReceipt`](#requestreceipt)):The request receipt.
- `n` (`uint32`):The block index.
- `r` (`uint16`):The request index.

### `getRequestReceiptsForBlock(n uint32)`

Returns all the receipts in the block with index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. Defaults to the latest block.

#### Returns

- `d`:  ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go)
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

- `e`: ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go) of `[]byte`).

### `getEventsForBlock(n blockIndex)`

Returns the list of events triggered during the execution of all requests in the block with index `n`.

#### Parameters

- `n` (optional `uint32`):The block index. Defaults to the latest block.

#### Returns

- `e`: ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go) of `[]byte`).

### `getEventsForContract(h Hname)`

Returns a list of events triggered by the smart contract with hname `h`.

#### Parameters

- `h` (`hname`):The smart contract’s hname.
- `f` (optional `uint32` - default: `0`):"From" block index.
- `t` (optional `uint32` - default: `MaxUint32`):"To" block index.

#### Returns

- `e`: ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go) of `[]byte`)

### `controlAddresses()`

Returns the current state controller and governing addresses and at what block index they were set.

#### Returns

- `s`: ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)) The state controller
  address.
- `g`: ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)) The governing address.
- `n` (`uint32`):The block index where the specified addresses were set.

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
