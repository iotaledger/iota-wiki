# Send ERC20 Tokens Across Chains

## Introduction

[LayerZero OFT V2](https://docs.layerzero.network/v2) enables cross-chain transfers of existing ERC20 tokens, such as wSMR and wIOTA (wrapped versions of the native gas tokens SMR and IOTA on ShimmerEVM and IOTA EVM respectively). For testing purposes, Sepolia is chosen as the source chain, while the BNB Testnet is chosen as the destination chain.

:::info Community Libs

You can clone the Utilities for LayerZero OFT V2 from [IOTA Community GitHub Repository](https://github.com/iota-community/layerzero-oft-v2-utils).

:::

### Why Would a User Need to Send ERC20 Tokens Across Chains?

Sending ERC20 tokens across chains allows users to leverage different blockchain networks' strengths and unique features, optimize costs, and manage risks more effectively. This flexibility is crucial as the blockchain ecosystem continues to grow and diversify.

#### Send Existing ERC20 Tokens Across Chains

You need both the [OFT Adapter](https://docs.layerzero.network/v2/developers/evm/oft/adapter) and OFT contracts to enable existing ERC20 tokens for cross-chain sending,

#### Create New Cross-chain Fungible Tokens

If you are about to launch a new ERC20 token, you can use the [OFT standard](https://docs.layerzero.network/v2/developers/evm/oft/quickstart)  to enable cross-chain sending without the OFT Adapter.

## How To Use IOTA's Utilities for LayerZero OFT V2

The [Utilities for LayerZero OFT V2](https://github.com/iota-community/layerzero-oft-v2-utils) facilitate cross-chain sending of ERC20 tokens between a source chain (e.g., Sepolia or ShimmerEVM Testnet) and a destination chain (e.g., BNB Testnet or IOTA EVM Testnet).

:::tip Further Information

You can learn more about the available options in the [Layer Zero Documentation](https://docs.layerzero.network/v2/developers/evm/gas-settings/options#option-types.).

:::

### Send Tokens From One Source Chain to Another Destination Chain (and Vice Versa)

To send existing ERC20 tokens, you will need both the OFT Adapter contract on the source chain and the OFT contract on the destination chain. You should then use the following procedure:

#### 1. Approve the tokens

The sender must approve their ERC20 tokens for the OFT Adapter contract.

```typescript 
const approveTx = await erc20TokenContract.approve(oftAdapterContractAddress, amountInWei);
```

#### 2. Estimate the fee

The sender calls the function `quoteSend()` of the OFT Adapter contract to estimate the cross-chain fee to be paid in native tokens on the source chain.

```typescript
 const sendParam = [
    lzEndpointIdOnDestChain,
    receiverAddressInBytes32,
    amountInWei,
    amountInWei,
    options, // additional options
    "0x", // composed message for the send() operation
    "0x", // OFT command to be executed, unused in default OFT implementations
  ];

  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73
  // false is set for _payInLzToken Flag indicating whether the caller is paying in the LZ token
  const [nativeFee] = await myOFTAdapterContract.quoteSend(sendParam as any, false);
```

#### 3. Send the tokens

The sender calls the function `send()` of the OFT Adapter contract to transfer tokens from the source chain to the destination chain.

```typescript
  const sendTx = await myOFTAdapterContract.send(
    sendParam as any,
    [nativeFee, 0] as any, // set 0 for lzTokenFee
    sender.address, // refund address
    {
      value: nativeFee,
    },
  );
  const sendTxReceipt = await sendTx.wait();
  console.log("sendOFT - send tx on source chain:", sendTxReceipt?.hash);
```

#### 4. (Optional) Wait for Finalization

The sender can wait for transaction finalization on the destination chain using the library [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage).
```typescript
  const deliveredMsg = await waitForMessageReceived(
    Number(lzEndpointIdOnDestChain),
    sendTxReceipt?.hash as string,
  );
  console.log("sendOFT - received tx on destination chain:", deliveredMsg?.dstTxHash);
```

### Send the OFT-wrapped Tokens Back

To send back the OFT-wrapped tokens on the destination chain to the source chain, the procedure is similar, except that the approval step is not needed:

#### 1. Estimate the fee

The sender calls the function `quoteSend()` of the OFT contract to estimate the cross-chain fee to be paid in native tokens on the sender chain.

```typescript
 // Set the send param
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L10
  const sendParam = [
    lzEndpointIdOnSrcChain, // Sepolia
    receiverAddressInBytes32,
    amountInWei,
    amountInWei,
    options, // additional options
    "0x", // composed message for the send() operation
    "0x", // OFT command to be executed, unused in default OFT implementations
  ];

  // Step 1: call the func quoteSend() to estimate cross-chain fee to be paid in native on the source chain
  // https://github.com/LayerZero-Labs/LayerZero-v2/blob/main/oapp/contracts/oft/interfaces/IOFT.sol#L127C60-L127C73
  // false is set for _payInLzToken Flag indicating whether the caller is paying in the LZ token
  const [nativeFee] = await myOFTContract.quoteSend(sendParam as any, false);
  console.log("sendOFTBack - estimated nativeFee:", ethers.formatEther(nativeFee));
  ```

#### 2. Send the tokens

The sender calls the function `send()` of the OFT contract to transfer tokens from the destination chain back to the source chain.

```typescript
const sendTx = await myOFTContract.send(
    sendParam as any,
    [nativeFee, 0] as any, // set 0 for lzTokenFee
    sender.address, // refund address
    {
      value: nativeFee,
    },
  );
  const sendTxReceipt = await sendTx.wait();
  console.log("sendOFTBack - send tx on source chain:", sendTxReceipt?.hash);
  ```

#### 3. (Optional) Wait for Finalization

The sender can wait for transaction finalization on the destination chain using the library `@layerzerolabs/scan-client`.
```typescript
 const deliveredMsg = await waitForMessageReceived(
    Number(lzEndpointIdOnDestChain),
    sendTxReceipt?.hash as string,
  );
  console.log("sendOFTBack - received tx on destination chain:", deliveredMsg?.dstTxHash);
  ```

## Sample Solidity Code for OFT Adapter and OFT Contracts in the `contracts-standard` Folder

The [contracts-standard](https://github.com/iota-community/layerzero-oft-v2-utils/tree/main/contracts-standard) contains scripts to:

- [Deploy the OFT Adapter and OFT contracts](#deploy-the-oft-adapter-contract-on-the-source-chain).
- [Set your trusted peers](#optional-set-the-trusted-peers).
- Set enforced options.
- [Send tokens from the source chain to the destination chain](#send-the-origin-tokens-from-the-source-chain-to-the-destination-chain),
and [vice versa](#send-oft-wrapped-tokens-back-from-the-destination-chain-to-the-origin-chain).

### Install the Library

After you have cloned the [IOTA Community Utilities for LayerZero OFT V2 repository](https://github.com/iota-community/layerzero-oft-v2-utils/tree/main), you should run the following command to install:

```
yarn
```

### Compile the Contracts

If you want to use the standard implementation for ERC20, copy the [`contracts-standard`](https://github.com/iota-community/layerzero-oft-v2-utils/tree/main/contracts-standard) folder to `contracts`. If you want to use a custom implementation, copy the  [`contracts-wiota`](https://github.com/iota-community/layerzero-oft-v2-utils/tree/main/contracts-wiota) to `contracts`. Then, run the following command to compile the contracts:

```bash
yarn compile
``` 

### Set Your Configuration

You should copy the template [`.env.example`](https://github.com/iota-community/layerzero-oft-v2-utils/blob/main/.env.example) file to a file called `.env`, and edit any of the configuration options you see fit.

```bash
cp .env.example .env
```

### Deploy the Contracts

#### Deploy the OFT Adapter Contract On the Source Chain

The OFT Adapter facilitates the expansion of an existing token to any supported blockchain as a native token, maintaining a unified global supply and inheriting all features of the OFT Standard. This intermediary contract manages the sending and receiving of pre-deployed tokens.

For instance, when an ERC20 token is transferred from the source chain (Chain A), it gets locked in the OFT Adapter. Consequently, a corresponding token is minted on the destination chain (Chain B) through the paired OFT Contract.

```bash
yarn deploy-oft-adapter-sepolia
```

Expected log output :

```bash
npx hardhat run scripts/deploy_oft_adapter.ts --network sepolia
Deployed MyOFTAdapter contract address: 0x4daa81978576cB91a2e1919960e90e46c2a6D586
Done in 6.67s.
```

#### Deploy OFT on the Destination Chain

You can use the following command to deploy OFT on destination chain (e.g. BNB Testnet):

```bash
yarn deploy-oft-bnb-testnet
``` 

Expected log output :

```bash
npx hardhat run scripts/deploy_oft.ts --network bnbTestnet
Deployed MyOFT contract address: 0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
Done in 6.68s.
```

### (optional) Set the Trusted Peers

#### On OFTAdapter

You can set the trusted peer in the source chain's OFT Adapter (e.g., Sepolia) using the following command:

```bash
yarn set-peer-oft-adapter-sepolia
```

Expected log output :

```bash
npx hardhat run scripts/set_peer_oft_adapter.ts --network sepolia
setPeerMyOFTAdapter - oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586, lzEndpointIdOnDestChain:40102, oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1
MyOFTAdapter - setPeer tx: 0xc17e7a54d96325768b6427ce893d9b6b7ed04bd920089b63a3f96c005073e9c2
Done in 14.10s.
```

#### On OFT

You can add a trusted peer in the destination chain (e.g. BNB Testnet) using the following command:

```bash
yarn set-peer-oft-bnb-testnet
```

Expected log output :

```bash
npx hardhat run scripts/set_peer_oft.ts --network bnbTestnet
setPeerMyOFT - oftContractAddress:0xCc337C2e69F4Eb8EaBcf632a1fC5B8F729dC47F1, lzEndpointIdOnSrcChain:40161, oftAdapterContractAddress:0x4daa81978576cB91a2e1919960e90e46c2a6D586
MyOFT - setPeer tx: 0xb0012378ee14c9df5c9f86980dd9c96fc8aedb3c19d92c1d91a4259f3981ac35
Done in 4.66s.
```

### Send the Origin Tokens from the Source Chain to the Destination Chain


You can use the following command to send tokens from the source chain to the destination chain:

```bash
yarn send-oft-from-sepolia
```

Expected log output :

```bash
npx hardhat run scripts/send_oft.ts --network sepolia
sendOFT - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57a4bd139fb673d364a6f12df9177a3f686625f3, amount:2
sendOFT - approve tx: 0x8fa692edb47b1ad9d21f60b0fa30993e5cd3abd78c3c56fb4f38db5f9b8ac369
sendOFT - estimated nativeFee: 0.000734209489447653
sendOFT - send tx on source chain: 0xeb3e44310a09ae2ab2f0d6d6d3fdfd7c490f8ac536bb20a5e16999b23232ef67
Wait for cross-chain tx finalization by LayerZero ...
sendOFT - received tx on destination chain: 0xc2e5a4be8ae67718e817ff585a32765e393835880068f408fd7724667a25a46c
```

### Send Oft-Wrapped Tokens Back From the Destination Chain to the Origin Chain

You can use the following command to send the OFT-wrapped tokens back to the origin chain:


```bash
yarn send-oft-back-from-bnb-testnet
```

Expected log output :

```bash
npx hardhat run scripts/send_oft_back.ts --network bnbTestnet
sendOFTBack - oftAdapterContractAddress:0x5D7Cbc05fc6df2832c40023f1Eb2755628C51D81, oftContractAddress:0x075e512E25b45a3EaF8b432220F0Ca8D4e3c6a58, lzEndpointIdOnSrcChain:40161, lzEndpointIdOnDestChain:40102, gasDropInWeiOnDestChain:1000000000000000, executorLzReceiveOptionMaxGas:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, amount:2
sendOFTBack - estimated nativeFee: 0.054815809525020364
sendOFTBack - send tx on source chain: 0x41bcf78b310dc1bbf9b4005f7412d995011c7815ad5af9cc26b37370e75bbfeb
Wait for cross-chain tx finalization by LayerZero ...
sendOFTBack - received tx on destination chain: 0xc1031694e92512a0189885ad6419e33196a65b8ae56baa9d555be8686d6d42fe
```

