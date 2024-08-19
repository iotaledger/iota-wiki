#  Cross-chain NFT Marketplace: Part III

This is the third part of the Cross-chain NFT Marketplace tutorial series, that will guide you to how to evolve the marketplace to handle cross-chain NFT transfers.

[Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/) already covered the project's setup and the deployment of the NFT marketplace contract on the ShimmerEVM Testnet. 

[Part II](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-2/) guided you on how to manually bridge NFTs from the BNB Testnet to the ShimmerEVM Testnet and list them on the NFT marketplace.

This final part will evolve the marketplace's architecture to handle cross-chain NFT transfers. You will deploy the necessary contracts on the BNB Testnet and the ShimmerEVM Testnet and configure them to send and receive NFTs across chains. You will also create scripts to automate sending and receiving NFTs across chains.

## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [Hardhat](https://hardhat.org) >= v2.0.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.
- The code for this part of the tutorial is based on [Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/) and [Part II](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-2/) of the tutorial series.


## Configuration

You can use the same `hardhat.config.js` file from [Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/).

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/hardhat.config.js
```

## Contracts Architecture

![Contract Archicteture](../../../../../../static/img/tutorials/cross_chain_marketplace/Architecture-V3.png)

In addition to the marketplace contract, you will deploy additional contracts to handle cross-chain NFT transfers and messages. To put things into perspective, here is the flow of the cross-chain NFT buying process from a user on BNB Testnet to the marketplace on ShimmerEVM Testnet:

### Flow
1- A user `Alice` on ShimmerEVM Testnet lists an NFT on the marketplace. The NFT is an `ONFT` so that the NFT can be transferred across chains. The NFT can also be a normal ERC721 token, but in this case, a proxy contract must be used to transfer the NFT across chains.

2- A user `Bob` with some ERC20 tokens, an `OFT`, on the BNB Testnet wants to buy an NFT listed on the marketplace on the ShimmerEVM Testnet.
3- `Bob` allows the `CrossChainAgent` contract on the BNB Testnet to transfer the required amount of ERC20 to itself. Note that ERC20 tokens are an `OFT` that can be transferred across chains themselves.
4- The user calls `buyCrossChain` on the `CrossChainAgent` contract with the required amount of ERC20 tokens and the NFT ID.
5- The `CrossChainAgent` contract sends a message to the `CrossChainAgent` contract on the ShimmerEVM Testnet with the user's address and the NFT Address and token ID.
6- The `CrossChainAgent` contract on the ShimmerEVM Testnet receives the message, does some checks, and then calls the `buyItemCrossChain` function on the marketplace contract to complete the purchase.
7- The marketplace contract interacts with the corresponding ONFT contract to transfer the NFT to the user.

:::note

The flow doesn't include transferring ERC20 tokens across chains. The `CrossChainAgent` contract receives the ERC20 tokens on the BNB Testnet and sends a message to the `CrossChainAgent` contract on the ShimmerEVM Testnet. This can be done, but it would add more complexity to the flow.

:::


### MyOFT.sol

A simple ERC20 token contract that you will deploy on the BNB Testnet and the ShimmerEVM Testnet. This will be used as the currency for buying NFTs on the marketplace.

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/CrossChainToken.sol
```

### CrossChainAgent.sol

The `CrossChainAgent` contract is responsible for sending and receiving messages across chains. It is deployed on both the BNB Testnet and the ShimmerEVM Testnet. The contract has two main functions:

1. `buyCrossChain`: This function is called by the user on the BNB Testnet to send a message to the `CrossChainAgent` contract on the ShimmerEVM Testnet with the user's address and the NFT Address and token ID. It transfers the required amount of ERC20 tokens to the `CrossChainAgent` contract on the BNB Testnet, and calls `_lzsend` to send a message to the `CrossChainAgent` contract on the ShimmerEVM Testnet.

```Solidity
/// @notice this function is to be called by the user to buy an NFT on BNB
    function buyCrossChain(
        uint16 _dstChainId,
        address _user,
        address _tokenAddress,
        address _nftAddress,
        uint256 _amount,
        uint256 _tokenId,
        address payable refundAddress,
        bytes memory adapterParams
 ) public payable {

        IERC20(_tokenAddress).transferFrom(_user, address(this), _amount);

        // Update user balance on this chain
 balances[_user] += _amount;

        // Encode the payload with the required data
        bytes memory payload = abi.encode(
            abi.encodePacked(_user),
 _amount,
 _nftAddress,
 _tokenId
 );

        // Send the payload to the agent on Shimmer
        _lzSend(_dstChainId, payload, refundAddress, address(0x0), adapterParams, msg.value);
 }
```

2. `_nonblockingLzReceive`: This function is called by the LayerZero endpoint on the destination chain upon the receipt of a message. You should override this function in the `CrossChainAgent` contract Testnet to call the `_notifyMarketPlace` function on the marketplace contract to complete the purchase.

```solidity
/// @notice This function is called by LayerZero when a cross-chain message is received
    function _nonblockingLzReceive(
        uint16 ,
        bytes memory ,
        uint64 _nonce,
        bytes memory _payload
 ) internal override {
        // Decode the payload
 (bytes memory toAddressBytes, uint256 amount, address tokenAddress, uint256 tokenId) = abi.decode(_payload, (bytes, uint256, address, uint256));

        // Convert toAddressBytes to an address
        address to;
        assembly {
 to := mload(add(toAddressBytes, 20))
 }

        // Increment the user's balance
 balances[to] += amount;

        // Emit events
        emit CustomMessageReceived(amount, tokenAddress, tokenId, to);
        emit EmitPayload(_payload);

        // Notify the marketplace that the balance is updated (this could be another cross-chain message)
        _notifyMarketplace(tokenAddress, tokenId, to, balances[to]);
 }
```

The full contract code is as follows:

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/CrossChainAgent.sol
```

### NFTMarketPlaceV2.sol

The `NFTMarketPlaceV2` contract is an updated version of the `NFTMarketPlace` contract that you deployed in [Part I](https://wiki.iota.org/isc/tutorials/cross-chain-nft-marketplace-part-1/). This version includes a new function `buyItemCrossChain` that is called by the `CrossChainAgent` contract on the ShimmerEVM Testnet to complete the purchase of an NFT.

The function checks if the item is listed and available and if the user has enough balance to complete the purchase. It then transfers the NFT to the user by calling the NFT's proxy contract (the contract responsible for transferring the NFT cross-chain). The user's balance is updated, and the item's availability is set to false.

```solidity
    function buyItemCrossChain(
        address nftAddress,
        uint256 tokenId,
        address payable buyer,
        uint256 amount
 ) external nonReentrant isListed(nftAddress, tokenId) {
 Listing memory listedItem = s_listings[nftAddress][tokenId];

        _validateAmount(amount, listedItem.price, nftAddress, tokenId);

        delete s_listings[nftAddress][tokenId];

        _approveNFT(listedItem.proxyContract, nftAddress, tokenId);

        bytes memory adapterParams = _createAdapterParams(buyer);

        uint256 fee = _estimateFee(listedItem.proxyContract, buyer, tokenId, adapterParams);

        _sendNFT(listedItem, buyer, tokenId, adapterParams, fee);

 s_proceeds[listedItem.seller] += amount;

        emit ItemBought(msg.sender, nftAddress, tokenId, listedItem.price);
 }
```

The full contract code is as follows:

```solidity reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/contracts/NFTMarketPlaceV2.sol
```


## Scripts

You will add scripts that perform the following tasks in order:

1. [Deploy the `NFTMarketPlaceV2` contract to the ShimmerEVM Testnet.](#deploy-nftmarketplacev2)

2. [Deploy an `ONFT721` contract on ShimmerEVM Testnet and BNB Testnet, and configure them to send and receive NFTs across chains.](#deploy-onft721)

3. [Mint an NFT (from the `ONFT` contract), allow the marketplace to spend it then list it on the marketplace.](#mint-an-nft-and-list-it-on-the-marketplace)

4. [Deploy the `CrossChainAgent` contract to the BNB Testnet and the ShimmerEVM Testnet.](#deploy-the-crosschainagent-contract)

5. [Configure the `CrossChainAgent` contract on the BNB Testnet to send messages to the `CrossChainAgent` contract on the ShimmerEVM Testnet.](#configure-crosschainagent)

6. [Call the `buyCrossChain` function on the `CrossChainAgent` contract on the BNB Testnet to buy the NFT listed on the marketplace on the ShimmerEVM Testnet.](#call-buycrosschain-to-buy-the-nft)

### Deploy NFTMarketPlaceV2

This script will deploy the `MarketPlaceV2` contract to the Shimmer Testnet, and save the contract's address to a file called `MarketplaceV2_Shimmer.txt`.


```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_marketplace_v2_shimmer.js
```
You can run this script with the following command:

```bash
npx hardhat run scripts/deploy_marketplace_v2_shimmer.js --network shimmerevm-testnet
```

### Deploy ONFT721

The next step is to deploy the `ONFT721` contract to the ShimmerEVM Testnet and the BNB Testnet. The `ONFT721` contract is an ERC721 contract that can send and receive NFTs across chains.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_onft_shimmer.js
```

You can run both scripts by executing the following commands:

```bash
npx hardhat run scripts/deploy_onft_shimmer.js --network shimmerevm-testnet
npx hardhat run scripts/deploy_onft_bnb.js  --network bnbTestnet
```

### Set the Trusted Remote Addresses of ONFT on BNB and Shimmer

After deploying the ONFT contracts, you need to connect them by caling `setTrustedRemoteAddress` on the `ONFT721` contract on the ShimmerEVM Testnet and BNB Testnet.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_trusted_remote_shimmer.js
```

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_trusted_remote_bnb.js
```

You can run the script by executing the following commands:

```bash
npx hardhat run scripts/set_trusted_remote_bnb.js --network bnbTestnet
npx hardhat run scripts/set_trusted_remote_shimmer.js --network shimmerevm-testnet
```

### Mint an NFT and List It on the Marketplace

After you deploy and configure the `ONFT721` contracts, you can mint an NFT, allow the marketplace to spend it, and list it on the marketplace using the following scripts:

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/mint_nft_shimmer.js
```

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/approve_myERC721_for_marketplace.js
```

You can run the scripts by executing the following commands:

```bash
npx hardhat run scripts/mint_nft_shimmer.js --network shimmerevm-testnet
npx hardhat run scripts/approve_myERC721_for_marketplace.js --network shimmerevm-testnet
```

### Deploy the `CrossChainAgent` Contract

Once you have an NFT listed on the marketplace, you need to deploy the `CrossChainAgent` contract to the BNB Testnet and the ShimmerEVM Testnet.


```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_messanger_bnb.js
```

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/deploy_messanger_shimmer.js
```

You can run the scripts by executing the following commands:

```bash
npx hardhat run scripts/deploy_messanger_shimmer.js --network shimmerevm-testnet
npx hardhat run scripts/deploy_messanger_bnb.js --network bnbTestnet
```

### Configure the `CrossChainAgent` Contracts

After deploying the `CrossChainAgent` contracts, you need to configure the `CrossChainAgent` contract on the BNB Testnet to send messages to the `CrossChainAgent` contract on the ShimmerEVM Testnet. This is the same process as setting the trusted remote address for the `ONFT721` contracts.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_trusted_remote_agent_bnb.js
```

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/set_trusted_remote_agent_shimmer.js
```

You can run the scripts by executing the following commands:

```bash
npx hardhat run scripts/set_trusted_remote_agent_bnb.js  --network bnbTestnet
npx hardhat run scripts/set_trusted_remote_agent_shimmer.js --network shimmerevm-testnet
```

### Call `buyCrossChain` to buy the NFT

Finally, on the BNB Tetnet, call the `CrossChainAgent` contract to buy the NFT listed on the marketplace on the ShimmerEVM Testnet.

```javascript reference
https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace/blob/main/scripts/send_msg_bnb.js
```
You can run the script by executing the following command:

```bash
npx hardhat run scripts/send_msg_bnb.js  --network bnbTestnet
```


:::note
For the OFTs, we are using the `MyOFT` contract, which is a simple ERC20 token contract. You can deploy this contract to the BNB Testnet and the ShimmerEVM Testnet using the same process as the `ONFT721` contract.
:::



## Conclusion

In the third part of the tutorial, you have automated the buy flow of the cross-chain NFT marketplace. You deployed the necessary contracts on the BNB Testnet and the ShimmerEVM Testnet and configured them to send and receive NFTs across chains. 