#  Cross-chain NFT Marketplace: Part I

In this series of tutorials, we will be building a cross-chain NFT marketplace using IOTA Smart Contracts (ISC). The marketplace will allow users to trade NFTs on ShimmerEVM Testnet, BNB Testnet, and Shimmer Testnet.

Part I will cover the setup of the project and the deployment of the NFT marketplace contract on the ShimmerEVM Testnet.
In part II, we will bridge NFTs from BNB Testnet and Shimmer Testnet to the ShimmerEVM Testnet and list them on the marketplace.
Finally, in part III, we will deploy another instance of the marketplace on the BNB Testnet, making the marketplace truly cross-chain by making the contract handle cross-chain transactions.

The architecture of the marketplace will evolve as we progress through the tutorials. In part I, we will start with this very simple architecture:
![alt text](../../static/img/tutorials/cross_chain_marketplace/Architecture-V1.png)

Then in Part II, we will add the contracts and scripts to manually bridge NFTs from BNB Testnet and Shimmer Testnet to the ShimmerEVM Testnet and list them on the marketplace. The architecture will evolve to look like this:
![alt text](../../static/img/tutorials/cross_chain_marketplace/Architecture-V2.png)

Finally, After deploying another instance of the marketplace on the BNB Testnet in Part III, where the contract will handle cross-chain transactions, the architecture will look like this:
![alt text](../../static/img/tutorials/cross_chain_marketplace/Architecture-V3.png)

This enables a user, e.g on BNB Testnet, to view and buy an NFT listed on the ShimmerEVM Testnet and vice versa without needing to switch networks.



## Prerequisites

- [Node.js v18](https://hardhat.org/tutorial/setting-up-the-environment#installing-node.js) and above supported.

- [npx](https://www.npmjs.com/package/npx) v7.1.0 and above supported.

## Set Up

clone the [tutorial repository](https://github.com/iota-community/ISC-Cross-Chain-NFT-Marketplace) and navigate to the project folder, then run:

```bash
npm install
```


## Contracts

For the scope of this part, we wil need two contracts: an NFTMarketplace contract, and an NFT ERC721-compatible contract.
Create a `contracts` folder in the root of the project and add the following files under it:

### NFTMarketplace.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error PriceNotMet(address nftAddress, uint256 tokenId, uint256 price);
error ItemNotForSale(address nftAddress, uint256 tokenId);
error NotListed(address nftAddress, uint256 tokenId);
error AlreadyListed(address nftAddress, uint256 tokenId);
error NoProceeds();
error NotOwner();
error NotApprovedForMarketplace();
error PriceMustBeAboveZero();

contract NFTMarketPlace is ReentrancyGuard {
    struct Listing {
        uint256 price;
        address seller;
    }

    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    event ItemCanceled(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    event ItemBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price
    );

    mapping(address => mapping(uint256 => Listing)) private s_listings;
    mapping(address => uint256) private s_proceeds;

    modifier notListed(
        address nftAddress,
        uint256 tokenId
    ) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.price > 0) {
            revert AlreadyListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_listings[nftAddress][tokenId];
        if (listing.price <= 0) {
            revert NotListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isOwner(
        address nftAddress,
        uint256 tokenId,
        address spender
    ) {
        IERC721 nft = IERC721(nftAddress);
        address owner = nft.ownerOf(tokenId);
        if (spender != owner) {
            revert NotOwner();
        }
        _;
    }

    /////////////////////
    // Main Functions //
    /////////////////////
    /*
     * @notice Method for listing NFT
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param price sale price for each item
     */
    function listItem(
        address nftAddress,
        uint256 tokenId,
        uint256 price
    )
        external
        notListed(nftAddress, tokenId)
        isOwner(nftAddress, tokenId, msg.sender)
    {
        if (price <= 0) {
            revert PriceMustBeAboveZero();
        }
        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenId) != address(this)) {
            revert NotApprovedForMarketplace();
        }
        s_listings[nftAddress][tokenId] = Listing(price, msg.sender);
        emit ItemListed(msg.sender, nftAddress, tokenId, price);
    }

    /*
     * @notice Method for cancelling listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function cancelListing(address nftAddress, uint256 tokenId)
        external
        isOwner(nftAddress, tokenId, msg.sender)
        isListed(nftAddress, tokenId)
    {
        delete (s_listings[nftAddress][tokenId]);
        emit ItemCanceled(msg.sender, nftAddress, tokenId);
    }

    /*
     * @notice Method for buying listing
     * @notice The owner of an NFT could unapprove the marketplace,
     * which would cause this function to fail
     * Ideally you'd also have a `createOffer` functionality.
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     */
    function buyItem(address nftAddress, uint256 tokenId)
        external
        payable
        isListed(nftAddress, tokenId)
        // isNotOwner(nftAddress, tokenId, msg.sender)
        nonReentrant
    {
        // Challenge - How would you refactor this contract to take:
        // 1. Abitrary tokens as payment? (HINT - Chainlink Price Feeds!)
        // 2. Be able to set prices in other currencies?
        // 3. Tweet me @PatrickAlphaC if you come up with a solution!
        Listing memory listedItem = s_listings[nftAddress][tokenId];
        if (msg.value < listedItem.price) {
            revert PriceNotMet(nftAddress, tokenId, listedItem.price);
        }
        s_proceeds[listedItem.seller] += msg.value;
        // Could just send the money...
        // https://fravoll.github.io/solidity-patterns/pull_over_push.html
        delete (s_listings[nftAddress][tokenId]);
        IERC721(nftAddress).safeTransferFrom(listedItem.seller, msg.sender, tokenId);
        emit ItemBought(msg.sender, nftAddress, tokenId, listedItem.price);
    }

    /*
     * @notice Method for updating listing
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param newPrice Price in Wei of the item
     */
    function updateListing(
        address nftAddress,
        uint256 tokenId,
        uint256 newPrice
    )
        external
        isListed(nftAddress, tokenId)
        nonReentrant
        isOwner(nftAddress, tokenId, msg.sender)
    {
        //We should check the value of `newPrice` and revert if it's below zero (like we also check in `listItem()`)
        if (newPrice <= 0) {
            revert PriceMustBeAboveZero();
        }
        s_listings[nftAddress][tokenId].price = newPrice;
        emit ItemListed(msg.sender, nftAddress, tokenId, newPrice);
    }

    /*
     * @notice Method for withdrawing proceeds from sales
     */
    function withdrawProceeds() external {
        uint256 proceeds = s_proceeds[msg.sender];
        if (proceeds <= 0) {
            revert NoProceeds();
        }
        s_proceeds[msg.sender] = 0;
        (bool success, ) = payable(msg.sender).call{value: proceeds}("");
        require(success, "Transfer failed");
    }

    /////////////////////
    // Getter Functions //
    /////////////////////

    function getListing(address nftAddress, uint256 tokenId)
        external
        view
        returns (Listing memory)
    {
        return s_listings[nftAddress][tokenId];
    }

    function getProceeds(address seller) external view returns (uint256) {
        return s_proceeds[seller];
    }
}
```

### MyERC721.sol

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC721 is ERC721Enumerable, Ownable {
    string public _baseTokenURI;
    uint32 public _tokenId = 0;

    event EventSetBaseURI(string baseURI);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseTokenLink
    ) ERC721(_name, _symbol) {
        _baseTokenURI = _baseTokenLink;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;

        emit EventSetBaseURI(baseURI);
    }

    function mint() external onlyOwner {
        _safeMint(msg.sender, _tokenId, "");
        _tokenId++;
    }

    function transfer(address to, uint tokenId) external {
        _safeTransfer(msg.sender, to, tokenId, "");
    }

    function isApprovedOrOwner(address spender, uint tokenId) external view virtual returns (bool) {
        return _isApprovedOrOwner(spender, tokenId);
    }
}
```

after adding the contracts, compile them by running:

```bash
npx hardhat compile
```


## Scripts

First, create a `scripts` folder in the root of the project and add the following files under it:

### deploy_marketplace_shimmer.js
First, let's deploy the NFTMarketplace contract to the ShimmerEVM Testnet by running the following script:
```javascript
const fs = require('fs');
const path = require('path');

async function main() {
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketPlace");
    const marketplace = await NFTMarketplace.deploy();

    const marketplaceAddress = await marketplace.getAddress();

    console.log("NFTMarketPlace deployed to:", marketplaceAddress);

    const addressDirectory = path.join(__dirname, 'addresses');
    fs.mkdirSync(addressDirectory, { recursive: true }); // Ensure the directory exists, create it if it doesn't

    const filePath = path.join(addressDirectory, 'NFTMarketplace.txt');
    fs.writeFileSync(filePath, marketplaceAddress);

    console.log(`Contract address written to ${filePath}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
This will deploy the NFTMarketplace contract to the ShimmerEVM Testnet and save the contract address to a file.
run it by executing:

```bash
npx hardhat run scripts/deploy_marketplace_shimmer.js --network shimmerevm-testnet
```

### deploy_er721_shimmer.js

```javascript
const fs = require('fs');
const path = require('path');

async function main() {
    const MyERC721 = await ethers.getContractFactory("MyERC721");
    const myERC721 = await MyERC721.deploy("SampleToken", "SESA", "SampleTokenURI");

    const myERC721Address = await myERC721.getAddress();

    console.log("MyERC721 deployed to:", myERC721Address);

    const addressDirectory = path.join(__dirname, 'addresses');
    fs.mkdirSync(addressDirectory, { recursive: true }); // Ensure the directory exists, create it if it doesn't

    const filePath = path.join(addressDirectory, 'MyERC721.txt');
    fs.writeFileSync(filePath, myERC721Address);

    console.log(`Contract address written to ${filePath}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
This will deploy the MyERC721 contract to the ShimmerEVM Testnet and save the contract address to a file.
run it by executing:

```bash
npx hardhat run scripts/deploy_er721_shimmer.js --network shimmerevm-testnet
```

### mint_nft.js

After deploying the MyERC721 contract, let's mint an NFT by running the following script:

```javascript
const fs = require('fs');
const path = require('path');

async function createNFT(myERC721Address) {

    const MyERC721 = await ethers.getContractFactory("MyERC721");
    const myERC721 = MyERC721.attach(myERC721Address);

    const tx = await myERC721.mint();
    await tx.wait(); // Wait for the transaction to be mined
}

async function main() {
    // Read the contract address from the file
    const addressPath = path.join(__dirname, 'addresses', 'MyERC721.txt');
    const myERC721Address = fs.readFileSync(addressPath, 'utf8').trim();

    await createNFT(myERC721Address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
execute the script by running:

```bash
npx hardhat run scripts/mint_nft.js --network shimmerevm-testnet
```


### approve_myERC721_for_marketplace.js

To allow the NFTMarketplace contract to transfer the NFT from the seller to the buyer, the seller must approve the marketplace contract to transfer the NFT on their behalf.
```javascript
const fs = require('fs');
const path = require('path');
const { ethers } = require('hardhat');

async function approveNFTTransfer(marketplaceAddress, myERC721Address, tokenId) {
    // Attach to the deployed MyERC721 contract
    const MyERC721 = await ethers.getContractFactory("MyERC721");
    const myERC721 = await MyERC721.attach(myERC721Address);

    // Approve the marketplace to transfer the NFT
    const tx = await myERC721.approve(marketplaceAddress, tokenId);
    await tx.wait(); // Wait for the transaction to be mined

    console.log(`Approved marketplace at address ${marketplaceAddress} to transfer tokenId ${tokenId}`);
}

async function main() {
    // Load the marketplace address
    const marketplaceAddressPath = path.join(__dirname, 'addresses', 'NFTMarketplace.txt');
    const marketplaceAddress = fs.readFileSync(marketplaceAddressPath, 'utf8').trim();

    // Load the MyERC721 contract address
    const myERC721AddressPath = path.join(__dirname, 'addresses', 'MyERC721.txt');
    const myERC721Address = fs.readFileSync(myERC721AddressPath, 'utf8').trim();

    // Specify the tokenId you want to approve for transfer
    const tokenId = 0; // Example token ID, change this to the actual token ID you want to approve

    await approveNFTTransfer(marketplaceAddress, myERC721Address, tokenId);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
execute the script by running:

```bash
npx hardhat run scripts/approve_myERC721_for_marketplace.js --network shimmerevm-testnet
```

### create_listing.js

After approving the NFT transfer, let's list the NFT for sale on the marketplace by running the following script:

```javascript
const fs = require('fs');
const path = require('path');
const { ethers } = require('hardhat');

async function createListing(marketplaceAddress, myERC721Address, tokenId, price) {
    // Attach to the deployed MyERC721 contract
    const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace");
    const marketplace = await NFTMarketPlace.attach(marketplaceAddress);

    // Approve the marketplace to transfer the NFT
    const tx = await marketplace.listItem(myERC721Address, tokenId, price);
    await tx.wait(); // Wait for the transaction to be mined

    console.log(`Created listing for tokenId ${tokenId} with price ${price}`);
}

async function main() {
    // Load the marketplace address
    const marketplaceAddressPath = path.join(__dirname, 'addresses', 'NFTMarketplace.txt');
    const marketplaceAddress = fs.readFileSync(marketplaceAddressPath, 'utf8').trim();

    // Load the MyERC721 contract address
    const myERC721AddressPath = path.join(__dirname, 'addresses', 'MyERC721.txt');
    const myERC721Address = fs.readFileSync(myERC721AddressPath, 'utf8').trim();

    // Specify the tokenId you want to approve for transfer
    const tokenId = 0; // Example token ID, change this to the actual token ID you want to approve
    const price = 1;

    await createListing(marketplaceAddress, myERC721Address, tokenId, price);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
execute the script by running:

```bash
npx hardhat run scripts/create_listing.js --network shimmerevm-testnet
```


### buy_item.js

Finally, let's buy the NFT by running the following script:

```javascript
const fs = require('fs');
const path = require('path');
const { ethers } = require('hardhat');

async function buyItem(marketplaceAddress, nftAddress, tokenId) {
    // Attach to the deployed NFTMarketPlace contract
    const NFTMarketPlace = await ethers.getContractFactory("NFTMarketPlace");
    const marketplace = await NFTMarketPlace.attach(marketplaceAddress);

    // Call the buyItem function
    const tx = await marketplace.buyItem(nftAddress, tokenId, { value: 1 }); // Assuming 1 ETH as payment, adjust accordingly
    await tx.wait(); // Wait for the transaction to be mined

    console.log(`Bought item with tokenId ${tokenId} from ${nftAddress}`);
}

async function main() {
    // Load the marketplace address
    const marketplaceAddressPath = path.join(__dirname, 'addresses', 'NFTMarketplace.txt');
    const marketplaceAddress = fs.readFileSync(marketplaceAddressPath, 'utf8').trim();

    // Load the NFT contract address (assuming you're buying an NFT from MyERC721 contract)
    const nftAddressPath = path.join(__dirname, 'addresses', 'MyERC721.txt');
    const nftAddress = fs.readFileSync(nftAddressPath, 'utf8').trim();

    // Specify the tokenId of the NFT you want to buy
    const tokenId = 0; // Example token ID, change this to the actual token ID you want to buy

    await buyItem(marketplaceAddress, nftAddress, tokenId);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```
execute the script by running:

```bash
npx hardhat run scripts/buy_item.js --network shimmerevm-testnet
```


## Conclusion
In this first part of the cross-chain NFT marketplace tutorial, we have set up the project and deployed the NFTMarketplace contract to the ShimmerEVM Testnet. We have also deployed the MyERC721 contract, minted an NFT and then listed it on the marketplace. In the next part, we will manually bridge NFTs from BNB Testnet and Shimmer Testnet to the ShimmerEVM Testnet and list them on the same marketplace.