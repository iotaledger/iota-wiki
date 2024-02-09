# JSON-RPC API

The [JSON-RPC](https://www.jsonrpc.org/specification) is a stateless, lightweight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic because the concepts can be used within the same process, over sockets, HTTP, or in various message-passing environments. It uses JSON (RFC 4627) as data format.

This page deals with the JSON-RPC API used by EVM execution clients.

## JSON-RPC Methods According to [Ethereum Client API](https://ethereum.org/en/developers/docs/apis/json-rpc/)


| Num | Method    | Description               | Status                             |
|-----|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| 1   | [eth_getBlockByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) | _Returns information about a block by hash_ | ✅ |
| 2   | [eth_getBlockByNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) | _Returns information about a block by number_ | ✅ |
| 3   | [eth_getBlockTransactionCountByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash)      | _Returns the number of transactions in a block from a block matching the given block hash_  | ✅ |
| 4   | [eth_getBlockTransactionCountByNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber)    | _Returns the number of transactions in a block matching the given block number_             | ✅ |
| 5   | [eth_getUncleCountByBlockHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblockhash) | _Returns the number of uncles in a block from a block matching the given block hash_        | ✅ |
| 6   | [eth_getUncleCountByBlockNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getunclecountbyblocknumber) | _Returns the number of uncles in a block from a block matching the given block number_      | ✅ |
| 7   | [eth_protocolVersion](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_protocolversion) | _Returns the current Ethereum protocol version_ | ✅ |
| 8   | [eth_chainId](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)                             | _Returns the chain ID of the current network_                                               | ✅ |
| 9   | [eth_syncing](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_syncing)                             | _Returns an object with data about the sync status or false-copy_                                | ✅ |
| 10  | [eth_coinbase](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_coinbase)                            | _Returns the client Coinbase address_                                                       | ✅ |
| 11  | [eth_accounts](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)                            | _Returns a list of addresses owned by client_                                               | ✅ |
| 12  | [eth_blockNumber](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)                         | _Returns the number of most recent block._                                                  | ✅ |
| 13  | [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)                                | _Executes a new message call immediately without creating a transaction on the blockchain_ | ✅ |
| 14  | [eth_estimateGas](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)                         | _Generates and returns an estimate of how much gas is necessary to allow the transaction to complete._                                                        | ✅ |
| 15  | [eth_gasPrice](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)                            | _Returns the current price per gas in wei_                                                  | ✅ |
| 16  | [eth_feeHistory](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_feehistory)                          | _Returns fee history_     | ✅ |
| 17  | [eth_newFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)                           | _Creates a filter object, based on filter options, to notify when the state changes (logs)_ | ❌ |
| 18  | [eth_newBlockFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newblockfilter)                      | _Creates a filter in the node, to notify when a new block arrives_                          | ❌ |
| 19  | [eth_newPendingTransactionFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)         | _Creates a filter in the node, to notify when new pending transactions arrive_              | ⏳ |
| 20  | [eth_uninstallFilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallfilter)                     | _Uninstalls a filter with given id_                                                         | ⏳ |
| 21  | [eth_getFilterChanges](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)                    | _Polling method for a filter, which returns an array of logs which occurred since last poll_| ❌ |
| 22  | [eth_getFilterLogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)                       | _Returns an array of all logs matching filter with given id. Can compute the same results with an `eth_getLogs call`_                                         | ❌ |
| 23  | [eth_getLogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)                             | _Anytime a transaction is mined, we can see event logs for that transaction by making a request to eth_getLogs and then take actions based off those results_ | ✅ |
| 24  | [eth_mining](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_mining)                              | _Returns whether the client is actively mining new blocks_                                  | ✅ |
| 25  | [eth_hashrate](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_hashrate)                            | _Returns the number of hashes per second that the node is mining with_                      | ✅ |
| 26  | [eth_getWork](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getwork) | _Returns the hash of the current block, the seedHash, and the boundary condition to be met ("target")_ | ❌ |
| 27  | [eth_submitWork](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_submitwork)                          | _Used for submitting a Proof-of-Work solution_                                              | ❌ |
| 28  | [eth_submitHashrate](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_submithashrate)                      | _Used for submitting mining hashrate_ | ❌ |
| 29  | [eth_sign](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign)                                | _Returns an EIP-191 signature over the provided data._                                      | ✅ |
| 30  | [eth_signTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction)                     | _Signs and submits a transaction_                                                           | ✅ |
| 31  | [eth_getBalance](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)                          | _Returns the balance of the account of given address_                                       | ✅ |
| 32  | [eth_getStorageAt](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)                        | _Returns the value from a storage position at a given address_                              | ✅ |
| 33  | [eth_getTransactionCount](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)                 | _Returns the number of transactions sent from an address_                                   | ✅ |
| 34  | [eth_getCode](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)                             | _Returns code at a given address_                                                           | ✅ |
| 35  | [eth_sendTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)                     | _Signs and submits a transaction_                                                           | ✅ |
| 36  | [eth_sendRawTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)                  | _Submits a raw transaction_                                                                 | ✅ |
| 37  | [eth_getTransactionByHash](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash)                | _Returns the information about a transaction requested by transaction hash_                 | ✅ |
| 38  | [eth_getTransactionByBlockHashAndIndex](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblockhashandindex)   | _Returns information about a transaction by block hash and transaction index position_      | ✅ |
| 39  | [eth_getTransactionByBlockNumberAndIndex](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyblocknumberandindex) | _Returns information about a transaction by block number and transaction index position_    | ✅ |
| 40  | [eth_getTransactionReceipt](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionrecepit)               | _Returns the receipt of a transaction by transaction hash_                                  | ✅ |


## JSON-RPC methods according to the [Web3 Module API](https://openethereum.github.io/JSONRPC-web3-module)

| Num | Method                     | Description                                                            | Status                         |
|-----|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| 1   | [web3_clientVersion](https://openethereum.github.io/JSONRPC-web3-module#web3_clientversion)  | _Returns the current client version_                                   | ✅ |
| 2   | [web3_sha](https://openethereum.github.io/JSONRPC-web3-module#web3_sha3)                     | _Returns Keccak-256 (not the standardized SHA3-256) of the given data_ | ✅ |



## JSON-RPC methods according to the [Net Module API](https://openethereum.github.io/JSONRPC-net-module)

| Num | Method         | Description                                                            | Status                         |
|-----|----------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| 1   | [net_listening](https://openethereum.github.io/JSONRPC-net-module#net_listening) | _Returns true if client is actively listening for network connections_ | ✅ |
| 2   | [net_peerCount](https://openethereum.github.io/JSONRPC-net-module#net_peercount) | _Returns number of peers currently connected to the client_             | ✅ |
| 3   | [net_version](https://openethereum.github.io/JSONRPC-net-module#net_version)     | _Returns the current network protocol version_                        | ✅ |

You can find the complete set of available specs in the [Ethereum API Documentation](https://ethereum.github.io/execution-apis/api-documentation/).
