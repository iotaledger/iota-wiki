# Send ERC20 Tokens Across Chains

## Introduction

To enable cross-chain transfers of existing ERC20 tokens such as wSMR and wIOTA (wrapped versions of the native gas tokens SMR and IOTA on ShimmerEVM and IOTA EVM respectively), LayerZero OFT V2 is utilized. For testing purposes, Sepolia is chosen as the source chain, while the BNB testnet is chosen as the destination chain.

:::info
Clone the repository for Utilities for LayerZero OFT V2 from [here](https://github.com/iota-community/layerzero-oft-v2-utils).
:::

### Why Would a User Need to Send ERC20 Tokens Across Chains?

Sending ERC20 tokens across chains allows users to leverage the strengths and unique features of different blockchain networks, optimize costs, and manage risks more effectively. This flexibility is crucial as the blockchain ecosystem continues to grow and diversify.

[**Use-case 1**](https://docs.layerzero.network/v2/developers/evm/oft/adapter)

To enable existing ERC20 tokens for cross-chain sending, both OFTAdapter and OFT contracts are needed. 

[**Use-case 2**](https://docs.layerzero.network/v2/developers/evm/oft/quickstart)

For new ERC20 tokens to be launched, the OFT standard can be leveraged to enable cross-chain sending without the need for an OFTAdapter.

### Using IOTA's Implementation of [Utilities for LayerZero OFT V2](https://github.com/iota-community/layerzero-oft-v2-utils)

The Utilities for LayerZero OFT V2 facilitate cross-chain sending of ERC20 tokens between a source chain (e.g., Sepolia or ShimmerEVM testnet) and a destination chain (e.g., BNB testnet or IOTA EVM testnet).

:::tip
Further information: https://docs.layerzero.network/v2/developers/evm/gas-settings/options#option-types.
:::

### Procedure to Send Tokens from Source Chain to Destination Chain and Vice Versa

For existing ERC20 tokens that involve both the OFTAdapter contract (on the source chain) and the OFT contract (on the destination chain), the token sending procedure is as follows:

1. **Approve Tokens**: The sender approves their ERC20 tokens for the OFTAdapter contract.
2. **Estimate Fee**: The sender calls the function `quoteSend()` of the OFTAdapter contract to estimate the cross-chain fee to be paid in native tokens on the source chain.
3. **Send Tokens**: The sender calls the function `send()` of the OFTAdapter contract to transfer tokens from the source chain to the destination chain.
4. **Optional - Wait for Finalization**: The sender can wait for transaction finalization on the destination chain using the library [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage).

To send back the OFT-wrapped tokens on the destination chain to the source chain, the procedure is similar, except that the approval step is not needed:

1. **Estimate Fee**: The sender calls the function `quoteSend()` of the OFT contract to estimate the cross-chain fee to be paid in native tokens on the sender chain.
2. **Send Tokens**: The sender calls the function `send()` of the OFT contract to transfer tokens from the destination chain back to the source chain.
3. **Optional - Wait for Finalization**: The sender can wait for transaction finalization on the destination chain using the library `@layerzerolabs/scan-client`.



#### Sample Solidity code for OFTAdater and OFT contracts in folder `contracts-standard`
- Scripts for:
  - Deploy OFTAdapter and OFT contracts
  - Set trusted peer
  - Set enforced options
  - Send tokens from source chain to destination chain and vice versa

## Installation
```
$ yarn
```

## Compile contracts

- In the standard implementation for ERC20, copy the folder `contracts-standard`to `contracts` and `contracts-wiota` to `contracts` for custom implementation. Then, run the command:

```
  $ yarn compile
``` 

## Configuration

The config is specified in the template file `.env.example` that needs to be copied to another file `.env`.


## Deploy contracts

### Deploy OFTAdapter on source chain (e.g. Sepolia)

The OFT Adapter facilitates the expansion of an existing token to any supported blockchain as a native token, maintaining a unified global supply and inheriting all features of the OFT Standard. This intermediary contract manages the sending and receiving of pre-deployed tokens.

For instance, when an ERC20 token is transferred from the source chain (Chain A), it gets locked in the OFT Adapter. Consequently, a corresponding token is minted on the destination chain (Chain B) through the paired OFT Contract.

```
$ yarn deploy-oft-adapter-sepolia
```


Log output :

```
$ npx hardhat run scripts/deploy_oft_adapter.ts --network sepolia
Deployed MyOFTAdapter contract address: 0x4daa81978576cB91a2e1919960e90e46c2a6D586
Done in 6.67s.
```

### Deploy OFT on destination chain (e.g. BNB testnet)

```
$ yarn deploy-oft-bnb-testnet
``` 

Log output :

```
$ npx hardhat run scripts/deploy_oft.ts --network bnbTestnet
Deployed MyOFT contract address: 0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
Done in 6.68s.
```

## Set trusted peer (Optinal)

### On OFTAdapter (source chain, e.g. Sepolia)

```
$ yarn set-peer-oft-adapter-sepolia
```

Log output :

```
$ npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia
setPeerMyOFTAdapter - oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586, lzEndpointIdOnDestChain:40102, oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
MyOFTAdapter - setPeer tx: 0xc17e7a54d96325768b6427ce893d9b6b7ed04bd920089b63a3f96c005073e9c2
Done in 14.10s.
```

### On OFT (destination chain, e.g. BNB testnet)

```
$ yarn set-peer-oft-bnb-testnet
```

Log output :

```
$ npx hardhat run scripts/set_peer_oft.ts --network bnbTestnet
setPeerMyOFT - oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1, lzEndpointIdOnSrcChain:40161, oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586
MyOFT - setPeer tx: 0xb0012378ee14c9df5c9f86980dd9c96fc8aedb3c19d92c1d91a4259f3981ac35
Done in 4.66s.
```

## Send origin tokens from source chain to destination chain

```
$ yarn send-oft-from-sepolia
```

Log output :

```
$ npx hardhat run scripts/send_oft.ts --network sepolia
sendOFT - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57a4bd139fb673d364a6f12df9177a3f686625f3, amount:2
sendOFT - approve tx: 0x8fa692edb47b1ad9d21f60b0fa30993e5cd3abd78c3c56fb4f38db5f9b8ac369
sendOFT - estimated nativeFee: 0.000734209489447653
sendOFT - send tx on source chain: 0xeb3e44310a09ae2ab2f0d6d6d3fdfd7c490f8ac536bb20a5e16999b23232ef67
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xc2e5a4be8ae67718e817ff585a32765e393835880068f408fd7724667a25a46c
```


## Send OFT-wrapped tokens back from destination chain to origin chain

```
$ yarn send-oft-back-from-bnb-testnet
```

Log output :

```
$ npx hardhat run scripts/send_oft_back.ts --network bnbTestnet
sendOFTBack - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:2
sendOFTBack - estimated nativeFee: 0.054815809525020364
sendOFTBack - send tx on source chain: 0x41bcf78b310dc1bbf9b4005f7412d995011c7815ad5af9cc26b37370e75bbfeb
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xc1031694e92512a0189885ad6419e33196a65b8ae56baa9d555be8686d6d42fe
```