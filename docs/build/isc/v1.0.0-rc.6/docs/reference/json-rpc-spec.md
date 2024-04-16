# JSON-RPC API

The [JSON-RPC](https://www.jsonrpc.org/specification) is a stateless, lightweight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic because the concepts can be used within the same process, over sockets, HTTP, or in various message-passing environments. It uses JSON (RFC 4627) as data format.

This page deals with the JSON-RPC API used by EVM execution clients.

## JSON-RPC Methods According to [Ethereum Client API](https://ethereum.org/en/developers/docs/apis/json-rpc/)


| Method    | Description               | Status                             |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| [eth_getBlockByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) | _Returns information about a block by hash_ | ✅ |
| [eth_getBlockByNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) | _Returns information about a block by number_ | ✅ |
| [eth_getBlockTransactionCountByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash)      | _Returns the number of transactions in a block from a block matching the given block hash_  | ✅ |
| [eth_getBlockTransactionCountByNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber)    | _Returns the number of transactions in a block matching the given block number_             | ✅ |
| [eth_getUncleCountByBlockHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblockhash) | _Returns the number of uncles in a block from a block matching the given block hash_        | ✅ |
| [eth_getUncleCountByBlockNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblocknumber) | _Returns the number of uncles in a block from a block matching the given block number_      | ✅ |
| [eth_protocolVersion](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_protocolversion) | _Returns the current Ethereum protocol version_ | ✅ |
| [eth_chainId](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)                             | _Returns the chain ID of the current network_                                               | ✅ |
| [eth_syncing](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_syncing)                             | _Returns an object with data about the sync status or false-copy_                                | ✅ |
| [eth_coinbase](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_coinbase)                            | _Returns the client Coinbase address_                                                       | ✅ |
| [eth_accounts](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)                            | _Returns a list of addresses owned by client_                                               | ✅ |
| [eth_blockNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)                         | _Returns the number of most recent block._                                                  | ✅ |
| [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)                                | _Executes a new message call immediately without creating a transaction on the blockchain_ | ✅ |
| [eth_estimateGas](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)                         | _Generates and returns an estimate of how much gas is necessary to allow the transaction to complete._                                                        | ✅ |
| [eth_gasPrice](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)                            | _Returns the current price per gas in wei_                                                  | ✅ |
| [eth_feeHistory](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_feehistory)                          | _Returns fee history_     | ✅ |
| [eth_newFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)                           | _Creates a filter object, based on filter options, to notify when the state changes (logs)_ | ❌ |
| [eth_newBlockFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newblockfilter)                      | _Creates a filter in the node, to notify when a new block arrives_                          | ❌ |
| [eth_newPendingTransactionFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)         | _Creates a filter in the node, to notify when new pending transactions arrive_              | ❌ |
| [eth_uninstallFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallfilter)                     | _Uninstalls a filter with given id_                                                         | ❌ |
| [eth_getFilterChanges](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)                    | _Polling method for a filter, which returns an array of logs which occurred since last poll_| ❌ |
| [eth_getFilterLogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)                       | _Returns an array of all logs matching filter with given id. Can compute the same results with an `eth_getLogs call`_                                         | ❌ |
| [eth_getLogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)                             | _Anytime a transaction is mined, we can see event logs for that transaction by making a request to eth_getLogs and then take actions based off those results_ | ✅ |
| [eth_mining](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_mining)                              | _Returns whether the client is actively mining new blocks_                                  | ✅ |
| [eth_hashrate](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_hashrate)                            | _Returns the number of hashes per second that the node is mining with_                      | ✅ |
| [eth_sign](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign)                                | _Returns an EIP-191 signature over the provided data._                                      | ✅ |
| [eth_signTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction)                     | _Signs and submits a transaction_                                                           | ✅ |
| [eth_getBalance](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)                          | _Returns the balance of the account of given address_                                       | ✅ |
| [eth_getStorageAt](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)                        | _Returns the value from a storage position at a given address_                              | ✅ |
| [eth_getTransactionCount](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)                 | _Returns the number of transactions sent from an address_                                   | ✅ |
| [eth_getCode](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)                             | _Returns code at a given address_                                                           | ✅ |
| [eth_sendTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)                     | _Signs and submits a transaction_                                                           | ✅ |
| [eth_sendRawTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)                  | _Submits a raw transaction_                                                                 | ✅ |
| [eth_getTransactionByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash)                | _Returns the information about a transaction requested by transaction hash_                 | ✅ |
| [eth_getTransactionByBlockHashAndIndex](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblockhashandindex)   | _Returns information about a transaction by block hash and transaction index position_      | ✅ |
| [eth_getTransactionByBlockNumberAndIndex](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblocknumberandindex) | _Returns information about a transaction by block number and transaction index position_    | ✅ |
| [eth_getTransactionReceipt](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionrecepit)               | _Returns the receipt of a transaction by transaction hash_                                  | ✅ |


## JSON-RPC methods according to the [Web3 Module API](https://openethereum.github.io/JSONRPC-web3-module)

| Method                     | Description                                                            | Status                         |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| [web3_clientVersion](https://openethereum.github.io/JSONRPC-web3-module#web3_clientversion)  | _Returns the current client version_                                   | ✅ |
| [web3_sha](https://openethereum.github.io/JSONRPC-web3-module#web3_sha3)                     | _Returns Keccak-256 (not the standardized SHA3-256) of the given data_ | ✅ |



## JSON-RPC methods according to the [Net Module API](https://openethereum.github.io/JSONRPC-net-module)

| Method         | Description                                                            | Status                         |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| [net_listening](https://openethereum.github.io/JSONRPC-net-module#net_listening) | _Returns true if client is actively listening for network connections_ | ✅ |
| [net_peerCount](https://openethereum.github.io/JSONRPC-net-module#net_peercount) | _Returns number of peers currently connected to the client_             | ✅ |
| [net_version](https://openethereum.github.io/JSONRPC-net-module#net_version)     | _Returns the current network protocol version_                        | ✅ |

You can find the complete set of available specs in the [Ethereum API Documentation](https://ethereum.github.io/execution-apis/api-documentation/).
