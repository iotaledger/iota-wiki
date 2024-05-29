---
description: 'Multicall3 allows you to bundle multiple calls to various contracts, for both reading and writing data, into a single transaction.'
image: /img/logo/WASP_logo_dark.png
---

# Multicall3 
## Powering Efficient Batch Transactions on L2 Networks

Multicall3 is a smart contract on the Ethereum Virtual Machine (EVM) that streamlines transactions. It allows you to bundle multiple calls to various contracts, for both reading and writing data, into a single transaction.

This can be particularly useful when working with decentralized applications that require multiple contract interactions or when batching multiple calls to save on gas costs. To use the Multicall3 contract on IOTA EVM, the Multicall3 contract is deployed at this address: [0xcA11bde05977b3631167028862bE2a173976CA11](https://explorer.evm.iota.org/address/0xcA11bde05977b3631167028862bE2a173976CA11?tab=write_contract).

This contract offers significant advantages for optimizing transaction processing on L2 networks, also known as Layer 2 scaling solutions. Here's how Multicall3 enhances efficiency:

- **Reduced Gas Costs:** By grouping calls together, Multicall3 minimizes the total gas fees associated with interacting with the blockchain. Gas refers to the computational effort required to execute a transaction on the network.

- **Guaranteed Data Consistency:** Multicall3 fetches data from a single block on the blockchain, ensuring that all the information you receive reflects a consistent state. This eliminates discrepancies that might arise from fetching data across separate transactions.

- **Faster Execution Speeds:** You no longer need to wait for individual transactions to be confirmed one by one. Multicall3 processes everything efficiently in a single transaction, significantly speeding up the overall process.

- **Simplified Workflows:** Multicall3 removes the complexity of worrying about the order in which transactions are processed, eliminating potential issues caused by race conditions. Race conditions occur when multiple transactions compete for resources, and the outcome can depend on the order they are executed.

- **All-or-Nothing Execution:** Multicall3 ensures data integrity by functioning on an all-or-nothing basis. This means that either all the calls within the Multicall3 transaction succeed, or none of them do. This prevents partial execution and maintains data consistency.

:::tip

You can find the ABI of the contract in the [Multicall3 website](https://www.multicall3.com/abi).
 
:::


## Contract Information  

### Function: aggregate

#### Description:
 This function aggregates the results of multiple function calls made to different contracts within a single transaction.

```solidity 
function aggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes[] memory returnData);
```


|Parameter Name | Description|
|-----------|---------------------------------------------------------------------
| calls (Call[] calldata)    | An array of Call structs. Each Call struct contains the target contract address (address) and the encoded function call data (bytes).| 

#### Return Values:
  - blockNumber (uint256): The block number where the calls were executed.
  - returnData (bytes[] memory): An array of bytes containing the return data from each call.

### Function: tryAggregate

#### Description:
 This function performs a similar function to `aggregate` but allows individual calls to fail without halting the entire execution.


```solidity 
function tryAggregate(bool requireSuccess, Call[] calldata calls) public payable returns (Result[] memory returnData);
```

| Parameter Name | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| requireSuccess (bool) | A boolean flag indicating whether all calls must succeed (true) or if failures are allowed (false). |
| calls (Call[] calldata) | An array of Call structs. Each Call struct contains the target contract address (address) and the encoded function call data (bytes). |


#### Return Values:
returnData (Result[] memory): An array of Result structs. Each Result struct contains a bool indicating success (success) and the return data for the corresponding call (bytes returnData).

### Function: tryBlockAndAggregate

#### Description:
 This function combines features of `tryAggregate` and retrieves additional block information.


```solidity 
function tryBlockAndAggregate(bool requireSuccess, Call[] calldata calls)
    public
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);
```

| Parameter Name | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| requireSuccess (bool) | A boolean flag indicating whether all calls must succeed (true) or if failures are allowed (false). |
| calls (Call[] calldata) | An array of Call structs. Each Call struct contains the target contract address (address) and the encoded function call data (bytes). |

#### Return Values:
  - blockNumber (uint256): The block number where the calls were executed.
  - blockHash (bytes32): The hash of the block where the calls were executed.
  - returnData (Result[] memory): An array of Result structs, as defined in tryAggregate.


### Function: blockAndAggregate

#### Description:
This function is a simplified version of `tryBlockAndAggregate` that always requires all calls to succeed.

```solidity 
function blockAndAggregate(Call[] calldata calls)
    public
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);
```

|Parameter Name | Description|
|-----------|---------------------------------------------------------------------
| calls (Call[] calldata)    | An array of Call structs, as defined in aggregate.| 

#### Return Values:
  - blockNumber (uint256): The block number where the calls were executed.
  - blockHash (bytes32):  The hash of the block where the calls were executed.
  - returnData (Result[] memory): An array of Result structs, as defined in tryAggregate.


### Function: aggregate3
#### Description:
This function aggregates calls similar to `aggregate` but allows specifying whether failures are allowed for each call individually.

```solidity 
function aggregate3(Call3[] calldata calls) public payable returns (Result[] memory returnData);
```

|Parameter Name | Description|
|-----------|---------------------------------------------------------------------
| calls (Call[] calldata)    | An array of Call3 structs. Each Call3 struct includes the target contract address (address), a flag indicating if failure is allowed (bool allowFailure), and the encoded function call data (bytes callData).| 

#### Return Values:
  - returnData (Result[] memory): An array of Result structs, as defined in `tryAggregate`.


### Function: aggregate3Value
#### Description:
This function aggregates calls with a specified value for each call, allowing sending funds along with the call data. It ensures the total sent value matches the sum of individual call values.


```solidity 
function aggregate3Value(Call3Value[] calldata calls) public payable returns (Result[] memory returnData);
```

|Parameter Name | Description|
|-----------|---------------------------------------------------------------------
| calls (Call[] calldata)    | An array of Call3Value structs. Each Call3Value struct includes the target contract address (address), a flag indicating if failure is allowed (bool allowFailure), the value to send along with the call (uint256 value), and the encoded function call data (bytes callData).
 
#### Return Values:
  - returnData (Result[] memory): An array of Result structs, as defined in `tryAggregate`.



 ## Additional Functions
The contract also includes several view functions that retrieve blockchain data without modifying the state:

- `getBlockHash(uint256 blockNumber)`: Returns the block hash for a given block number.
- `getBlockNumber()`: Returns the current block number.
- `getCurrentBlockCoinbase()`: Returns the address of the block miner (coinbase).
- `getCurrentBlockDifficulty()`: Returns the difficulty of the current block.
- `getCurrentBlockGasLimit()`: Returns the gas limit of the current block.
- `getCurrentBlockTimestamp()`: Returns

## Structs

- Call 
```solidity
struct Call {
    address target;
    bytes callData;
}
```
- Call3  
```solidity
struct Call3 {
    address target;
    bool allowFailure;
    bytes callData;
}

```
- Call3 Value 
```solidity
struct Call3Value {
    address target;
    bool allowFailure;
    uint256 value;
    bytes callData;
}
```
- Result 
```solidity
struct Result {
    bool success;
    bytes returnData;
}
```