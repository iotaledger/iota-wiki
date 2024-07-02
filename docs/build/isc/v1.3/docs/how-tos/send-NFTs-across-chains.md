# Send NFTs Across Chains

## Introduction

[LayerZero ONFT V1FV](https://docs.layerzero.network/V1) enables cross-chain transfers of existing ERC721 tokens. For
testing purposes, the ShimmerEVM Testnet is chosen as the source chain, while the BNB Testnet is chosen as the destination
chain.

:::info Community Libs

You can clone the Utilities for LayerZero ONFT V1
from [IOTA Community GitHub Repository](https://github.com/iota-community/layerzero-onft-v1-utils).

:::

## Why Would a User Need to Send ERC721 Tokens Across Chains?

By facilitating the movement of ERC721 tokens across chains, users gain flexibility and can optimize their NFT usage
according to their specific needs, preferences, and circumstances.

### Enable the Existing ERC721 Tokens for Cross-Chain Sending

To enable the existing ERC721 tokens for cross-chain sending, you will need the `ProxyONFT` contract on the source
chain,
and the ONFT contract on the destination chain) are needed.

The origin NFT token will be locked in the `ProxyONFT` contract so that the ONFT-wrapped tokens will be minted on the
destination chain. If the NFT token already exists on the destination chain (i.e., when the ONFT-wrapped token on
the destination chain is sent back to the source chain), no new token minting will happen. Instead, the NFT tokens will be
transferred from the ONFT contract to the user's wallet address. Relevant code

### Enable Cross-Chain Sending for Unloached ERC721 NFTs

If you are launching a new ERC721 token, you can use the ONFT standard to enable cross-chain sending without the need of
`ProxyONFT`. As with existing tokens, the NFT will be locked on the source chain and minted or transferred on the destination chain.

:::info Contract Documentation

- [ProxyONFT721](https://docs.layerzero.network/v1/developers/evm/evm-guides/contract-standards/721#proxyonft721sol)
- [ProxyONFT1155](https://docs.layerzero.network/v1/developers/evm/evm-guides/contract-standards/1155#proxyonft1155sol)
- [ONFT721](https://docs.layerzero.network/v1/developers/evm/evm-guides/contract-standards/721#onft721sol)
- [ONFT1155](https://docs.layerzero.network/v1/developers/evm/evm-guides/contract-standards/1155#onft1155sol)

:::

## Scripts

### Deploy the ProxyONFT and ONFT Contracts

#### For ERC721

- MyProxyONFT721.sol:
    - CTOR:
        - [`minGasToTransferAndStore`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/onft721/ONFT721Core.sol#L169):
          The minimum gas needed to transfer and store your NFT is typically 100k for ERC721. This value would vary
          depending on your contract complexity; it's recommended to test. If this value is set too low, the destination
          tx will fail, and a manual retry is needed.
        - `lzEndpoint`: LayerZero Endpoint on the source chain.
        - `proxyToken`: deployed contract address of the NFT tokens on the source chain.

- MyONFT721.sol:
    - CTOR:
        - `name`: name of the ONFT-wrapped tokens on the destination chain
        - `symbol`: symbol of the ONFT-wrapped tokens on the destination chain
        - [`minGasToTransferAndStore`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/onft721/ONFT721Core.sol#L169):
          The minimum gas needed to transfer and store your NFT typically 100k for ERC721. This value would vary
          depending on your contract complexity; it's recommended to test. If this value is set too low, the destination
          tx will fail, and a manual retry is needed.
        - `lzEndpoint`: - lzEndpoint: LayerZero Endpoint on the destination chain

### Set the Trusted Remote

For **existing ERC721 tokens**, the `ProxyONFT` and `ONFT` contract instances must be paired.

For the **upcoming ERC721 tokens** that want to leverage the `ONFT` standard, the `ONFT` contract instance on the source chain
needs to be paired with another `ONFT` contract instance on the destination chain.

You can set this using the [`setTrustedRemote`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/LzApp.sol#L138) method.

### Set the `minGasLimit`

Both the `ProxyONFT` and the `ONFT` contract instanceS need to be set for minimum gas on destination([`minGasLimit`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/LzApp.sol#L85C37-L85C48)).

You can set his using the [`setMinDstGas`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/LzApp.sol#L159) method.

:::info

It is required that `minDstGas` <= `providedGasLimit`, which is to be set via `adapterParams` upon cross-chain sending on
the source chain.

:::

### Set the Batch Size Limit

Both the `ProxyONFT` and the `ONFT` contract instances need to set a limit for the batch size on the source
chain to limit the number of tokens to be sent to another chain when using the
[`sendBatchFrom`](https://github.com/LayerZero-Labs/solidity-examples/blob/c04e7d211b1b610f84761df943e6a38b0a53d304/contracts/token/onft721/ONFT721Core.sol#L67)
method.

You can set this using the [`setDstChainIdToBatchLimit`](https://github.com/LayerZero-Labs/solidity-examples/blob/c04e7d211b1b610f84761df943e6a38b0a53d304/contracts/token/onft721/ONFT721Core.sol#L194) method; the default value is 1.

## How To Send Tokens From a Source Chain to a Destination Chain (and Vice-Versa)

### Required Contracts

#### From the Source Chain to the Destination Chain

For the existing ERC721 tokens, you will need the `ProxyONFT` contract on the source chain and the `ONFT` contract on
the destination chain. The procedure is as follows:

1. The sender approves his ERC721 tokens for the `ProxyONFT` contract.
2. The sender calls the function [`estimateSendFee()`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/onft721/interfaces/IONFT721Core.sol#L70) of the ProxyONFT contract to estimate cross-chain fee to be paid in
   native on the source chain.
3. The sender calls the function [`sendFrom()`](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/token/onft721/interfaces/IONFT721Core.sol#L36) of the ProxyONFT contract to transfer tokens on source chain to destination
   chain.
4. (Optional) Wait for the transaction finalization on the destination chain by using the
   [@layerzerolabs/scan-client](https://www.npmjs.com/package/@layerzerolabs/scan-client#example-usage) library.

#### From the Destination Chain Back to the Source Chain

To send back the ONFT-wrapped tokens on the destination chain to the source chain, the procedure is similar as the
approve step is also required, but the operations will happen on the `ONFT` contract.

#### References and Tools

##### `AdapterParams`

- You can use the [LayerZero Repository](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/libs/LzLib.sol#L44) as a reference to set gas drop on the destination in `adapterParams`.
    - The provided gas drop must be `<=` the config one. Otherwise, you will get [`dstNativeAmt` too large](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/mocks/LZEndpointMock.sol#L413) error.
- You can use the [LayerZero Repository](https://github.com/LayerZero-Labs/solidity-examples/blob/main/contracts/lzApp/libs/LzLib.sol#L34) as a refernce to set default `adapterParams` without needing a gas drop.

##### LayerZero

- [LayerZero Endpoint V1 (Testnet)](https://docs.layerzero.network/v1/developers/evm/technical-reference/testnet/testnet-addresses)
- [layerZero Endpoint V1 (Mainnet)](https://docs.layerzero.network/v1/developers/evm/technical-reference/mainnet/mainnet-addresses)
- [LayerZero explorer](https://Testnet.layerzeroscan.com/)

### Install and Compile the Library

After you have cloned
the [IOTA Community Utilities for LayerZero ONFT V1 repository](https://github.com/iota-community/layerzero-onft-v1-utils),
you should run the following command to install:

```bash
yarn
```
then compile the contracts:

```bash
yarn compile
``` 

### Set Your Configuration

You should copy the
template [`.env.example`](https://github.com/iota-community/layerzero-oft-V1-utils/blob/main/.env.example) file to a
file called `.env`, and edit any of the configuration options you see fit.

```bash
cp .env.example .env
```

### Deploy the Contracts

#### Deploy a mock ERC721

```bash
yarn deploy-ERC721-mock-smr-Testnet
```

Expected log output :

```bash
npx hardhat run scripts/deploy_ERC721.ts --network shimmerEvmTestnet
Deployed ERC721Mock contract address:0xFddbA8928a763679fb8C99d12541B7c6177e9c3c
Done in 4.49s.
```

#### Deploy `ProxyONFT721` on the source chain

You can use the following command to deploy ProxyONFT721 on the source chain (e.g., ShimmerEVM Testnet):

```bash
yarn deploy-proxy-onft-smr-Testnet
``` 

Expected log output :

```bash
npx hardhat run scripts/deploy_proxy_onft721.ts --network shimmerEvmTestnet
Deployed MyProxyONFT721 contract address:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2
Done in 4.50s.
```

#### Deploy `ProxyONFT721` on the destination chain

You can use the following command to deploy ProxyONFT721 on the destination chain (e.g., BNB Testnet):

```bash
yarn set-min-dest-gas-onft-bnb-Testnet
``` 

Expected log output :

```bash
export isForProxy=false && npx hardhat run scripts/set_min_destination_gas.ts --network bnbTestnet
setMinDstGas - isForProxy:false, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10230, minDstGas:150000
setMinDstGas (packetType 0) tx: 0xce044ded17daa77a8aefc3d39b99c5381216eb4057ddce6253affde6cda2091c
setMinDstGas (packetType 1) tx: 0x3a26ae40ac058099bfd8b85910009a5e5e8b03f16a5f032b572827d48be8f2b0
Done in 9.34s.
```

### Set the Minimum Destination Gas

#### On the source chain

You can use the following command to set the minimum destination gas on the `ProxyONFT` contract on the source chain (e.g., ShimmerEVM Testnet):

```bash
yarn set-min-dest-gas-proxy-onft-smr-Testnet
```

Expected log output :

```bash
export isForProxy=true && npx hardhat run scripts/set_min_destination_gas.ts --network shimmerEvmTestnet
setMinDstGas - isForProxy:true, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10102, minDstGas:150000
setMinDstGas (packetType 0) tx: 0xcab06e9989448153a4bbc1bb166fc2d33467f3311d1851bf2ff719d982daa613
setMinDstGas (packetType 1) tx: 0xe78fd3f0bf668fafbc423decd2cf14a27d74543af3ac9daf031f0b278c22ea78
Done in 6.07s.
```

#### On the destination chain

You can use the following command to set the minimum destination gas on the `ONFT` contract on the destination chain (e.g., BNB Testnet):

```bash
yarn set-min-dest-gas-onft-bnb-Testnet
```

Expected log output :

```bash
export isForProxy=false && npx hardhat run scripts/set_min_destination_gas.ts --network bnbTestnet
setMinDstGas - isForProxy:false, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10230, minDstGas:150000
setMinDstGas (packetType 0) tx: 0xce044ded17daa77a8aefc3d39b99c5381216eb4057ddce6253affde6cda2091c
setMinDstGas (packetType 1) tx: 0x3a26ae40ac058099bfd8b85910009a5e5e8b03f16a5f032b572827d48be8f2b0
Done in 9.34s.
```

### Set the batch size limit

#### On the source chain

You can use the following command to set batch size limits on the `ProxyONFT` contract on the source chain (e.g., ShimmerEVM Testnet):

```bash
yarn set-batch-size-limit-proxy-onft-smr-Testnet
```

Expected log output :

```bash
export isForProxy=true && npx hardhat run scripts/set_batch_size_limit.ts --network shimmerEvmTestnet
setBatchSizeLimit - isForProxy:true, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10102, batchSizeLimit:1
setBatchSizeLimit tx: 0x70c23b3d3d5e94ef82e50944f7eba93fa1fe8db3a5487ac371015e7a14482e75
Done in 4.28s.
```

#### On the destination chain

You can use the following command to set batch size limits on the `ONFT` contract on the destination chain (e.g., BNB Testnet):

```bash 
yarn set-batch-size-limit-onft-bnb-Testnet
```

Expected log output :

```bash
export isForProxy=false && npx hardhat run scripts/set_batch_size_limit.ts --network bnbTestnet
setBatchSizeLimit - isForProxy:false, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10230, batchSizeLimit:1
setBatchSizeLimit tx: 0x8cb44c2195ac93da552c646677e6585c95ab172df19463637541933ec70dc9b8
Done in 4.26s.
```

### Set the Trusted Remote

#### On the source  chain

You can use the following command to set a trusted remote on the `ProxyONFT` contract on the source chain (e.g., ShimmerEVM Testnet):

```bash
yarn set-remote-proxy-onft-smr-Testnet
```

Expected log output :

```bash
export isForProxy=true && npx hardhat run scripts/set_trusted_remote.ts --network shimmerEvmTestnet
setTrustedRemote - isForProxy:true, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10102
setTrustedRemote tx: 0xce52c0f25090ef7c1668ef04ff2f6098551c9f56b3ce881d17181bf106457016
Done in 4.24s.
```

##### On the destination chain

You can use the following command to set a trusted remote on the `ONFT` contract on the destination chain (e.g., BNB Testnet):

```bash 
yarn set-remote-onft-bnb-Testnet
```

Expected log output :

```bash
export isForProxy=false && npx hardhat run scripts/set_trusted_remote.ts --network bnbTestnet
setTrustedRemote - isForProxy:false, proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnRemoteChain:10230
setTrustedRemote tx: 0x311a0568b5afce7d601df2613f8ff80428d8a4d2f2c91012e0e4a8cbc0aedf59
Done in 4.88s.
```

### Send Origin Tokens From the Source Chain To the Destination Chain

```bash
yarn send-onft-from-smr-Testnet
```

Expected log output:

```bash
npx hardhat run scripts/send_onft.ts --network shimmerEvmTestnet
sendONFT - proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnSrcChain:10230, lzEndpointIdOnDestChain:10102, gasDropInWeiOnDestChain:0, providedGasLimit:200000, receivingAccountAddress:0x5e812d3128D8fD7CEac08CEca1Cd879E76a6E028, sender: 0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, nftTokenId:2, nftTokenAddress:0xFddbA8928a763679fb8C99d12541B7c6177e9c3c
sendONFT - approve tx: 0xa871bc79e45bf20f33c626044d6e208460c5745ab1f13d476dcbe04e1da7e592
sendONFT - estimated nativeFee: 158.319172348046094655
sendONFT - send tx on source chain: 0x72779c7549053194e42bcc78f78cf65e876867f0516dc91f28986c854e652596
Wait for cross-chain tx finalization by LayerZero ...
sendONFT - received tx on destination chain: 0x2700a9d35c139eb84ba07b75490e6627a30e00bde130e3cb7c1cbb81c0326138
Done in 53.50s.
```

### Send ONFT-Wrapped Tokens Back From the Destination Chain Back To the Origin Chain

```bash
yarn send-onft-back-from-bnb-Testnet
```

Expected log output:

```bash
npx hardhat run scripts/send_onft_back.ts --network bnbTestnet
sendONFTBack - proxyONFTContractAddress:0x7B0D46219C915e7Ff503C7F83a805c0b2F4ab2F2, onftContractAddress:0xC617A0Bd9DC6093a304515d3dbFF4244333fDeBB, lzEndpointIdOnSrcChain:10230, lzEndpointIdOnDestChain:10102, gasDropInWeiOnDestChain:0, providedGasLimit:200000, receivingAccountAddress:0x57A4bD139Fb673D364A6f12Df9177A3f686625F3, sender: 0x60917645A28258a75836aF63633850c5F3561C1b, nftTokenId:2, nftTokenAddress:0xFddbA8928a763679fb8C99d12541B7c6177e9c3c
sendONFTBack - approve tx: 0xe5bfff108528efdc67e72896845f0ad3e0186b4ed64835e7c5f3552eaab69d99
sendONFTBack - estimated nativeFee: 0.000498452810033053
sendONFTBack - send tx on source chain: 0xa43bb5547a5a35730fe183b4d554416a4ea34852e510d21f24d173db75db4e79
Wait for cross-chain tx finalization by LayerZero ...
sendONFTBack - received tx on destination chain: 0xb05fa2de194153819b26d17893278c485abbaf355fa24f26fbc7a4c759994cde
Done in 212.16s.
```
