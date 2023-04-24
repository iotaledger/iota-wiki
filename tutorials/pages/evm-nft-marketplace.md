# How to Build and Deploy an NFT Marketplace on ShimmerEVM

In this tutorial, we will guide you through building and deploying a full-stack NFT marketplace on ShimmerEVM using, Solidity, IPFS, and Next.js. This project is based on the `dabit3/polygon-ethereum-nextjs-marketplace` repository and has been adapted for the IOTA Smart Contract Testnet EVM (ShimmerEVM).

## Prerequisites

Before starting, make sure you have the following tools installed:

- Node.js (v14+)
- npm (v6+)
- Git
- A code editor (e.g., Visual Studio Code)

## Step 1: Clone the project and install dependencies

1.  Open a terminal and clone the project repository:

bashCopy code

`git clone https://github.com/huhn511/iota-evm-nft-marketplace`

2.  Change into the project directory:

bashCopy code

`cd iota-evm-nft-marketplace`

3.  Install the project dependencies using npm:

bashCopy code

`npm install`

## Step 2: Deploy the smart contracts

1.  Create a copy of the `.env.example` file, rename it to `.env`, and add your private key.
2.  Deploy the smart contracts to the ShimmerEVM Testnet using Hardhat:

bashCopy code

`npx hardhat run scripts/deploy.js --network ShimmerEVMTestnet`

## Step 3: Start the application

Start the Next.js development server:

bashCopy code

`npm run dev`

The application should now be running on `http://localhost:3000`.

## Step 4: Interact with the NFT Marketplace

With the NFT Marketplace running, you can now interact with it through the browser. You can create and manage NFTs, view and purchase items listed in the marketplace, and more.

To create a new NFT, follow these steps:

1.  Click the "Create" link in the top navigation bar.
2.  Fill in the NFT details, including name, description, price, and image.
3.  Click "Create" to mint the NFT and add it to the marketplace.

To view and purchase NFTs, follow these steps:

1.  Browse the NFTs listed on the homepage.
2.  Click an NFT to view its details.
3.  Click "Buy Now" to purchase the NFT.

Congratulations! You have successfully built and deployed an NFT Marketplace on ShimmerEVM. Feel free to explore and customize the marketplace further by adding new features and functionality.

For more information and the full source code, please visit the project repository on GitHub: [https://github.com/huhn511/iota-evm-nft-marketplace](https://github.com/huhn511/iota-evm-nft-marketplace)
