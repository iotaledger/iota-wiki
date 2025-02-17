# JSON-RPC API

The [JSON-RPC](https://www.jsonrpc.org/specification) is a stateless, lightweight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic because the concepts can be used within the same process, over sockets, HTTP, or in various message-passing environments. It uses JSON (RFC 4627) as data format.

This page deals with the JSON-RPC API used by EVM execution clients.

## JSON-RPC Methods According to [Ethereum Client API](https://ethereum.org/en/developers/docs/apis/json-rpc/)

| Method                                    | Description                                                                                                      | Status |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------|:------:|
| [eth_accounts]                            | _Returns a list of addresses owned by client_                                                                    | ✅     |
| [eth_blockNumber]                         | _Returns the number of most recent block._                                                                       | ✅     |
| [eth_call]                                | _Executes a new message call immediately without creating a transaction on the blockchain_                       | ✅     |
| [eth_chainId]                             | _Returns the chain ID of the current network_                                                                    | ✅     |
| [eth_coinbase]                            | _Returns the client Coinbase address_                                                                            | ✅     |
| [eth_estimateGas]                         | _Generates and returns an estimate of how much gas is necessary to allow the transaction to complete._           | ✅     |
| [eth_feeHistory]                          | _Returns fee history_                                                                                            | ✅     |
| [eth_gasPrice]                            | _Returns the current price per gas in wei_                                                                       | ✅     |
| [eth_getBalance]                          | _Returns the balance of the account of given address_                                                            | ✅     |
| [eth_getBlockByHash]                      | _Returns information about a block by hash_                                                                      | ✅     |
| [eth_getBlockByNumber]                    | _Returns information about a block by number_                                                                    | ✅     |
| [eth_getBlockReceipts]                    | _Returns the receipts of a block by number or hash_                                                              | ✅     |
| [eth_getBlockTransactionCountByHash]      | _Returns the number of transactions in a block from a block matching the given block hash_                       | ✅     |
| [eth_getBlockTransactionCountByNumber]    | _Returns the number of transactions in a block matching the given block number_                                  | ✅     |
| [eth_getCode]                             | _Returns code at a given address_                                                                                | ✅     |
| [eth_getCompilers]                        | _Returns a list of available compilers in the client (Response is always empty on IOTA EVM).                     | ✅     |
| [eth_getFilterChanges]                    | _Polling method for a filter, which returns an array of logs which occurred since last poll_                     | ❌     |
| [eth_getFilterLogs]                       | _Returns an array of all logs matching filter with given id. Can compute the same results with an `eth_getLogs` call_ | ❌     |
| [eth_getLogs]                             | _Anytime a transaction is mined, we can see event logs for that transaction by making a request to `eth_getLogs` and then take actions based off those results_ | ✅     |
| [eth_getStorageAt]                        | _Returns the value from a storage position at a given address_                                                   | ✅     |
| [eth_getTransactionByBlockHashAndIndex]   | _Returns information about a transaction by block hash and transaction index position_                           | ✅     |
| [eth_getTransactionByBlockNumberAndIndex] | _Returns information about a transaction by block number and transaction index position_                         | ✅     |
| [eth_getTransactionByHash]                | _Returns the information about a transaction requested by transaction hash_                                      | ✅     |
| [eth_getTransactionCount]                 | _Returns the number of transactions sent from an address_                                                        | ✅     |
| [eth_getTransactionReceipt]               | _Returns the receipt of a transaction by transaction hash_                                                       | ✅     |
| [eth_getUncleByBlockHashAndIndex]         | _Returns information about a uncle of a block by hash and uncle index position_                                  | ✅     |
| [eth_getUncleByBlockNumberAndIndex]       | _Returns information about a uncle of a block by number and uncle index position_                                | ✅     |
| [eth_getUncleCountByBlockHash]            | _Returns the number of uncles in a block from a block matching the given block hash_                             | ✅     |
| [eth_getUncleCountByBlockNumber]          | _Returns the number of uncles in a block from a block matching the given block number_                           | ✅     |
| [eth_hashrate]                            | _Returns the number of hashes per second that the node is mining with_                                           | ✅     |
| [eth_mining]                              | _Returns whether the client is actively mining new blocks_                                                       | ✅     |
| [eth_newBlockFilter]                      | _Creates a filter in the node, to notify when a new block arrives_                                               | ❌     |
| [eth_newFilter]                           | _Creates a filter object, based on filter options, to notify when the state changes (logs)_                      | ❌     |
| [eth_newPendingTransactionFilter]         | _Creates a filter in the node, to notify when new pending transactions arrive_                                   | ❌     |
| [eth_protocolVersion]                     | _Returns the current Ethereum protocol version_                                                                  | ✅     |
| [eth_sendRawTransaction]                  | _Submits a raw transaction_                                                                                      | ✅     |
| [eth_sendTransaction]                     | _Signs and submits a transaction_                                                                                | ✅     |
| [eth_sign]                                | _Returns an EIP-191 signature over the provided data._                                                           | ✅     |
| [eth_signTransaction]                     | _Signs and submits a transaction_                                                                                | ✅     |
| [eth_subscribe]                           | _Creates a new subscription for particular events. The node returns a subscription ID. For each event that matches the subscription, a notification with relevant data is sent together with the subscription ID. Supported events are `newHeads` and `logs`_ | ✅     |
| [eth_syncing]                             | _Returns an object with data about the sync status or false-copy_                                                | ✅     |
| [eth_uninstallFilter]                     | _Uninstalls a filter with given id_                                                                              | ❌     |

## JSON-RPC methods according to the [Debug Module API](https://openethereum.github.io/JSONRPC-debug-module)

| Method                     | Description                                                                                       | Status |
|----------------------------|---------------------------------------------------------------------------------------------------|:------:|
| [debug_traceTransaction]   | _Returns tracing results for the specified transaction._                                          | ✅     |
| [debug_traceBlockByNumber] | _Returns tracing results by executing all transactions in the specified block number._            | ✅     |
| [debug_traceBlockByHash]   | _Returns tracing results by executing all transactions in the block specified by the block hash._ | ✅     |
| [debug_getRawBlock]        | _Returns an RLP-encoded block._

## JSON-RPC methods according to the [Net Module API](https://openethereum.github.io/JSONRPC-net-module)

| Method          | Description                                                            | Status |
|-----------------|------------------------------------------------------------------------|:------:|
| [net_listening] | _Returns true if client is actively listening for network connections_ | ✅     |
| [net_peerCount] | _Returns number of peers currently connected to the client_            | ✅     |
| [net_version]   | _Returns the current network protocol version_                         | ✅     |

## JSON-RPC methods according to the [Trace Module API](https://openethereum.github.io/JSONRPC-trace-module)

| Method          | Description                                                            | Status |
|-----------------|------------------------------------------------------------------------|:------:|
| [trace_block]   | _Returns traces created at given block_                                | ✅     |


## JSON-RPC methods according to the [Web3 Module API](https://openethereum.github.io/JSONRPC-web3-module)

| Method               | Description                                                            | Status |
|----------------------|------------------------------------------------------------------------|:------:|
| [web3_clientVersion] | _Returns the current client version_                                   | ✅     |
| [web3_sha]           | _Returns Keccak-256 (not the standardized SHA3-256) of the given data_ | ✅     |

You can find the complete set of available specs in the [Ethereum API Documentation](https://ethereum.github.io/execution-apis/api-documentation/).

[eth_accounts]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts
[eth_blockNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber
[eth_call]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call
[eth_chainId]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid
[eth_coinbase]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_coinbase
[eth_estimateGas]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas
[eth_feeHistory]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_feehistory
[eth_gasPrice]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice
[eth_getBalance]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance
[eth_getBlockByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash
[eth_getBlockByNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber
[eth_getBlockReceipts]: https://ethereum.github.io/execution-apis/api-documentation/
[eth_getBlockTransactionCountByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash
[eth_getBlockTransactionCountByNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber
[eth_getCode]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode
[eth_getCompilers]: https://www.quicknode.com/docs/polygon-zkevm/eth_getCompilers
[eth_getFilterChanges]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges
[eth_getFilterLogs]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs
[eth_getLogs]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs
[eth_getStorageAt]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat
[eth_getTransactionByBlockHashAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblockhashandindex
[eth_getTransactionByBlockNumberAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblocknumberandindex
[eth_getTransactionByHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash
[eth_getTransactionCount]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount
[eth_getTransactionReceipt]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionrecepit
[eth_getUncleByBlockHashAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclebyblockhashandindex
[eth_getUncleByBlockNumberAndIndex]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclebyblocknumberandindex
[eth_getUncleCountByBlockHash]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblockhash
[eth_getUncleCountByBlockNumber]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblocknumber
[eth_hashrate]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_hashrate
[eth_mining]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_mining
[eth_newBlockFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newblockfilter
[eth_newFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter
[eth_newPendingTransactionFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter
[eth_protocolVersion]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_protocolversion
[eth_sendRawTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction
[eth_sendTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction
[eth_sign]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign
[eth_signTransaction]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction
[eth_subscribe]: https://docs.metamask.io/services/reference/ethereum/json-rpc-methods/subscription-methods/eth_subscribe
[eth_syncing]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_syncing
[eth_uninstallFilter]: https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallfilter

[trace_block]: https://openethereum.github.io/JSONRPC-trace-module#trace_block

[web3_clientVersion]: https://openethereum.github.io/JSONRPC-web3-module#web3_clientversion
[web3_sha]: https://openethereum.github.io/JSONRPC-web3-module#web3_sha3

[debug_traceTransaction]: https://docs.metamask.io/services/reference/mantle/json-rpc-methods/debug/debug_tracetransaction/
[debug_traceBlockByNumber]: https://docs.metamask.io/services/reference/mantle/json-rpc-methods/debug/debug_traceblockbynumber/
[debug_traceBlockByHash]: https://docs.metamask.io/services/reference/mantle/json-rpc-methods/debug/debug_traceblockbyhash/
[debug_getRawBlock]: https://docs.alchemy.com/reference/debug-getrawblock

[net_listening]: https://openethereum.github.io/JSONRPC-net-module#net_listening
[net_peerCount]: https://openethereum.github.io/JSONRPC-net-module#net_peercount
[net_version]: https://openethereum.github.io/JSONRPC-net-module#net_version
