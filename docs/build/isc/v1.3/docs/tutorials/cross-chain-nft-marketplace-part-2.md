#  Cross-chain NFT Marketplace: Part II

This is the second part of a three-part series that will guide you as you build a cross-chain NFT marketplace using IOTA EVM Smart Contracts. The marketplace will allow users to trade NFTs on the ShimmerEVM Testnet and BNB Testnet.

[Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/) already covered the project's setup and the deployment of the NFT marketplace contract on the ShimmerEVM Testnet. 

In this part, you will manually bridge NFTs from the BNB Testnet to the Shimmer EVM Testnet and list them on the marketplace.




## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [Hardhat](https://hardhat.org) >= v2.0.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.
- [Project setup from Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/)


## Configuration

In this part, you will add the configuration for the BNB Testnet to the `hardhat.config.js` file. The configuration will include the network name, the chain ID, the RPC URL, and the account private key. Update the `hardhat.config.js` from part 1 of the tutorial as follows:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/hardhat.config.js
```


## Contracts

You will need the following contracts, that will send and receive NFTs across chains:


### MyERC721.sol

The tutorial uses a standard ERC721-compatible contract that allows minting and transferring NFTs as an example. You should deploy this contract on the BNB Testnet, and the minted NFTs will be bridged to the ShimmerEVM Testnet.

The full contract code is as follows:

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/MyERC721.sol
```

### MyProxyONFT721.sol

An instance of `ProxyONFT` that you will deploy on the BNB Testnet and will be responsible for sending NFTs from the BNB Testnet to the ShimmerEVM Testnet.

The full contract code is as follows:

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/MyProxyONFT721.sol
```

### MyONFT721.sol

An instance of `ONFT721` that you will deploy on the ShimmerEVM Testnet and will be responsible for receiving NFTs from the BNB Testnet.

However, for ONFT721, this `ONFT721` instance will override the [_nonblockingLzReceive](https://github.com/LayerZero-Labs/solidity-examples/blob/cdc93994911829b1348f6ac18000000a43432ef1/contracts/token/onft721/ONFT721Core.sol#L103) function, in order to automatically mint the received NFTs to the receiver.

This is how it looked originally:

```solidity
    function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64, /*_nonce*/
        bytes memory _payload
    ) internal virtual override {
        // decode and load the toAddress
        (bytes memory toAddressBytes, uint[] memory tokenIds) = abi.decode(_payload, (bytes, uint[]));

        address toAddress;
        assembly {
            toAddress := mload(add(toAddressBytes, 20))
        }

        uint nextIndex = _creditTill(_srcChainId, toAddress, 0, tokenIds);
        if (nextIndex < tokenIds.length) {
            // not enough gas to complete transfers, store to be cleared in another tx
            bytes32 hashedPayload = keccak256(_payload);
            storedCredits[hashedPayload] = StoredCredit(_srcChainId, toAddress, nextIndex, true);
            emit CreditStored(hashedPayload, _payload);
        }

        emit ReceiveFromChain(_srcChainId, _srcAddress, toAddress, tokenIds);
    }
```
As you can notice, the function only credits the receiver with the NFTs but does not mint them. The receiver has to call the `clearCredit` function to mint the NFTs. `clearCredit` loops through the credited NFTs and mints them to the receiver.

To avoid the need for the receiver to call `clearCredit`, you should override the `_nonblockingLzReceive` function to automatically mint the NFTs to the receiver. Here is the updated function:

```solidity  {16-18}
        function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64, /*_nonce*/
        bytes memory _payload
    ) internal virtual override {
        // decode and load the toAddress
        (bytes memory toAddressBytes, uint[] memory tokenIds) = abi.decode(_payload, (bytes, uint[]));

        address toAddress;
        assembly {
            toAddress := mload(add(toAddressBytes, 20))
        }

        // mint the tokens
        for (uint i = 0; i < tokenIds.length; i++) {
            _creditTo(0, toAddress, tokenIds[i]);
        }

        uint nextIndex = _creditTill(_srcChainId, toAddress, 0, tokenIds);
        if (nextIndex < tokenIds.length) {
            // not enough gas to complete transfers, store to be cleared in another tx
            bytes32 hashedPayload = keccak256(_payload);
            storedCredits[hashedPayload] = StoredCredit(_srcChainId, toAddress, nextIndex, true);
            emit CreditStored(hashedPayload, _payload);
        }

        emit ReceiveFromChain(_srcChainId, _srcAddress, toAddress, tokenIds);
    }
```
This contract has an added loop that calls `_creditTo` for each NFT in the payload. `_creditTo` in turn calls `_mint` to mint the NFT to the receiver.

The full contract code after the modification is as follows:

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/MyONFT721.sol
```



## Scripts

You will add scripts that perform the following tasks in order:

1. Deploy the `MyERC721` contract to the BNB Testnet. [deploy_erc721_bnb.js](#deploy_erc721_bnbjs)
2. Mint an NFT using the `MyERC721` contract. [mint_nft.js](#mint_nftjs)
3. Deploy the `MyProxyONFT721` contract to the BNB Testnet. [deploy_proxyonft_bnb.js](#deploy_proxyonft_bnbjs)
4. Deploy the `MyONFT721` contract, the receiver, to the ShimmerEVM Testnet. [deploy_onft721_shimmer.js](#deploy_onft721_shimmerjs)
5. Configure the `MyProxyONFT721` contract to send NFTs to the `MyONFT721` contract. [set_trusted_remote_bnb.js](#set_trusted_remote_bnbjs)
6. Configure the `MyONFT721` contract to receive NFTs from the `MyProxyONFT721` contract. [set_trusted_remote_shimmer.js](#set_trusted_remote_shimmerjs)
7. Send an NFT from the BNB Testnet to the ShimmerEVM Testnet. [send_nft_bnb_to_shimmer.js](#send_nftjs)
8. List the received NFT on the NFT marketplace. [list_nft_marketplace.js](#create_listingjs)

:::note

The scripts are named according to the tasks they perform and the chain they are intended to run on. For example, the script that deploys the `MyERC721` contract to the BNB Testnet is named `deploy_erc721_bnb.js`.

:::


### deploy_erc721_bnb.js
This script will deploy the `MyERC721` contract to the BNB Tetnet, and save the contract's address to a file called `MyERC721_BNB.txt`.


```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_erc721_bnb.js
```
You can run this script with the following command:

```bash
npx hardhat run scripts/deploy_er721_bnb.js --network bnbTestnet
```

### mint_nft.js

After you have deployed the `MyERC721` contract, you are ready to mint an NFT using the following script:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/mint_nft_bnb.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/mint_nft.js --network bnbTestnet
```
### deploy_proxyonft_bnb.js

Next, deploy the `MyProxyONFT721` contract to the BNB Testnet and save its address in a file called `MyProxyONFT721_BNB.txt` using the following script:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_proxyonft_bnb.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/deploy_proxyonft_bnb.js --network bnbTestnet
```

### deploy_onft721_shimmer.js

Deploy the `MyONFT721` contract to the Shimmer EVM Testnet and save its address in a file called `MyONFT721_Shimmer.txt` using the following script:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_onft_shimmer.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/deploy_onft_shimmer.js --network shimmerevm-testnet
```

### set_trusted_remote_bnb.js

On the BNB Testnet, call the `MyProxyONFT721` contract to set the `MyONFT721` contract as a trusted remote contract. This will allow the `MyProxyONFT721` contract to send NFTs to the `MyONFT721` contract.
```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_proxyonft_bnb.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/set_trusted_remote_bnb.js --network bnbTestnet
```

### set_trusted_remote_shimmer.js

On the ShimmerEVM Testnet, call the `MyONFT721` contract to set the `MyProxyONFT721` contract as a trusted remote contract. This will allow the `MyONFT721` contract to receive NFTs from the `MyProxyONFT721` contract.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_onft_shimmer.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/set_trusted_remote_shimmer.js --network shimmerevm-testnet
```

### set_min_dest_gas_bnb.js

On the BNB Testnet, call the `MyProxyONFT721` contract to set the minimum gas required to send an NFT to the ShimmerEVM Testnet. This is ensures that the sender has enough gas to complete the transfer.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_min_dest_gas_bnb.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/set_min_dest_gas_bnb.js --network bnbTestnet
```

### set_min_dest_gas_shimmer.js

On the ShimmerEVM Testnet, call the `MyONFT721` contract to set the minimum gas required to receive an NFT from the BNB Testnet. This is necessary to ensure that the receiver has enough gas to complete the transfer.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_min_dest_gas_shimmer.js
```

You can run the script by executing the following command:

```bash
npx hardhat run scripts/set_min_dest_gas_shimmer.js --network shimmerevm-testnet
```


### send_nft.js

Finally, call the `MyProxyONFT721` contract on the BNB Testnet to send an NFT to the `MyONFT721` contract on the ShimmerEVM Testnet. This script approves the `MyProxyONFT721` contract to transfer the NFT and then sends the NFT to the `MyONFT721` contract.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/send_nft.js
```

You can run the script by executing the following command:

```bash
npx hardhat run scripts/send_nft.js --network bnbTestnet
```

:::note

The script will take some time to complete, as it waits for the NFT to be received on the ShimmerEVM Testnet.

:::



### create_listing.js

After approving the NFT transfer, you list the NFT for sale on the marketplace by running the following script:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/create_listing.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/create_listing.js --network shimmerevm-testnet
```

### buy_item.js

Finally, you can buy the NFT by running the following script:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/buy_item.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/buy_item.js --network shimmerevm-testnet
```


## Conclusion
In the second part of this tutorial, you manually bridged an NFT from the BNB Testnet to the ShimmerEVM Testnet and listed it on the NFT marketplace. The final part of the series will explore how to create a cross-chain swap contract that allows users to trade NFTs across chains.