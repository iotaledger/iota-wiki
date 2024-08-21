---
description: Yield Farming Tutorial Using Solidity.
image: /img/logo/WASP_logo_dark.png
tags:
  - EVM
  - tutorial
  - defi
  - yield-farming
---

import DeployAdmonition from '../_admonitions/_deploy_a_smart_contract.md';

# Building a Yield Farming DApp on IOTA EVM Testnet

## Introduction

In this tutorial, we will guide you through the process of building a yield farming decentralized application (DApp) using [Solidity](https://docs.soliditylang.org/en/v0.8.26/), one of the most widely adopted programming languages for [Ethereum](https://ethereum.org/en/) smart contracts, and the [Hardhat](https://hardhat.org/) development environment, a powerful and flexible framework for building on the Ethereum blockchain.

This tutorial is designed for developers who are familiar with the basics of blockchain and smart contracts but want to dive deeper into DeFi and learn how to build and deploy complex DApps. Whether you’re looking to enhance your technical skills or contribute to the growing DeFi ecosystem, this tutorial will provide you with the knowledge and tools you need to get started.

## What is Yield Farming

Yield farming, also known as liquidity mining, is a way for users to earn passive income by providing liquidity to a blockchain protocol. This involves depositing assets into a protocol, which in return offers rewards in the form of fees, interest, or other incentives. For instance, you might supply liquidity to a decentralized lending platform like [Aave](https://app.aave.com/) or a decentralized exchange using an Automated Market Maker (AMM) model like [Uniswap](https://uniswap.org/). In return, you can earn rewards.

Yield farming addresses a common challenge for new platforms: the lack of liquidity due to low user activity and low user activity due to a lack of liquidity. By offering financial incentives to early liquidity providers, yield farming helps bootstrap new platforms by attracting the necessary liquidity.

At its core, yield farming allows cryptocurrency holders to lock up their assets, generating rewards in the process.

## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [Hardhat](https://hardhat.org) >= v2.0.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.
- Basic understanding of Solidity and smart contracts.

## Step 1: Setting Up the Hardhat Project

First, create a new directory for the project and navigate into it:

```bash
mkdir yield-farming
cd yield-farming
```

Then [bootsrap a new Hardhat project](https://hardhat.org/tutorial/creating-a-new-hardhat-project), by running:

```bash
npx hardhat init
```

Follow the prompts to create a basic sample project. After that, install the necessary dependencies:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts dotenv
```

## Step 2: Write and Understand the Smart Contracts

Create a `contracts` folder in the root of the project and add the following files under it:

### 1: DappToken.sol

### Description:

This contract represents the reward token (DappToken) that users will earn as a reward for staking their IOTATokens. It is an [ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token, which is a widely used token standard on [Ethereum](https://ethereum.org/en/) and compatible blockchains. The contract inherits from [OpenZeppelin’s](https://www.openzeppelin.com/) ERC20 implementation, which provides standard functionalities for a fungible token.

### Key Details:

- The constructor mints an initial supply of 1,000,000 tokens to the deployer's address.
- The token is named "DappToken" with the symbol "DAP".

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20 {
    constructor() ERC20("DappToken", "DAP") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

### 2: IOTAToken.sol

### Description:

This contract represents the token that users will stake in the yield farm (IOTAToken). Like the DappToken, this is also an [ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token. The IOTAToken will be transferred to the TokenFarm contract when users stake their tokens.

### Key Details:

- The constructor mints an initial supply of 1,000,000 tokens to the deployer's address.
- The token is named "IOTAToken" with the symbol "TST".

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IOTAToken is ERC20 {
    constructor() ERC20("IOTAToken", "TST") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

### 3: TokenFarm.sol

### Description:

This is the core contract of the yield farming application. It manages the staking, unstaking, and reward distribution logic. Users can stake their IOTATokens in this contract to earn DappTokens as rewards.

### Key Functionalities:

- Staking: Users can stake their IOTATokens in the contract by calling the stakeTokens function. This function transfers the tokens from the user's wallet to the contract and updates their staking balance.
- Unstaking: Users can unstake their tokens by calling the unstakeTokens function, which returns their tokens and resets their staking balance.
- Rewards Distribution: The contract owner can call the issueTokens function to distribute DappToken rewards to stakers. Rewards are issued once every 60 minutes, and the reward rate is 10% of the staked amount.

### Key Variables:

- `dappToken` and `iotaToken`: Instances of the DappToken and IOTAToken contracts, used for staking and rewarding tokens.
- `stakingBalance`: A mapping to track each user's staked IOTATokens.
- `stakers`: An array that keeps track of all users who have staked tokens.
- `hasStaked` and `isStaking`: Mappings to track whether a user has staked before and whether they are currently staking.

### Functions:

- `stakeTokens(uint256 _amount)`: Allows users to stake IOTATokens in the contract.
- `unstakeTokens()`: Allows users to withdraw their staked IOTATokens.
- `issueTokens()`: Allows the owner to distribute DappToken rewards to all stakers.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./DappToken.sol";  // Import the DappToken contract
import "./IOTAToken.sol";  // Import the IOTAToken contract
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";  // Import the ERC20 interface from OpenZeppelin

/// @title IOTA Yield Farming Contract
/// @author [Your Name]
/// @notice This contract allows users to stake IOTATokens and earn rewards in DappTokens
/// @dev Implements staking, unstaking, and reward distribution mechanisms
contract TokenFarm {		
    
    /// @notice Name of the yield farm
    string public name = "IOTA Yield Farm";

    /// @notice Address of the contract owner
    address public owner;

    /// @notice Instance of the DappToken contract (reward token)
    DappToken public dappToken;

    /// @notice Instance of the IOTAToken contract (staking token)
    IOTAToken public iotaToken;

    /// @notice Timestamp of the last reward issuance
    uint256 public lastReward;

    /// @notice Array to store addresses of all stakers
    address[] public stakers;

    /// @notice Mapping to store the staking balance of each staker
    mapping(address => uint256) public stakingBalance;

    /// @notice Mapping to track if an address has previously staked
    mapping(address => bool) public hasStaked;

    /// @notice Mapping to track if an address is currently staking
    mapping(address => bool) public isStaking;

    /// @notice Constructor to initialize the contract with the reward and staking token addresses
    /// @param _dappToken Address of the DappToken contract
    /// @param _iotaToken Address of the IOTAToken contract
    constructor(DappToken _dappToken, IOTAToken _iotaToken) {
        dappToken = _dappToken;
        iotaToken = _iotaToken;
        owner = msg.sender;
    }

    /// @notice Stake IOTATokens in the contract
    /// @dev Transfers the specified amount of IOTATokens from the sender's address to the contract
    /// @param _amount The number of IOTATokens to stake
    function stakeTokens(uint256 _amount) public payable {				
        // Transfer the specified amount of IOTATokens from the user's wallet to the contract
        iotaToken.transferFrom(msg.sender, address(this), _amount);

        // Update the user's staking balance
        stakingBalance[msg.sender] += _amount;

        // If the user has not staked before, add them to the stakers array
        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Update staking status
        isStaking[msg.sender] = true;  // Mark the user as currently staking
        hasStaked[msg.sender] = true;  // Mark the user as having staked before
    }

    /// @notice Unstake IOTATokens and withdraw them from the contract
    /// @dev Transfers the staked IOTATokens back to the sender's address
    function unstakeTokens() public {
        // Fetch the user's staking balance
        uint256 balance = stakingBalance[msg.sender];

        // Ensure the user's balance is greater than 0
        require(balance > 0, "staking balance cannot be 0");

        // Transfer the staked tokens back to the user
        iotaToken.transfer(msg.sender, balance);

        // Reset the user's staking balance
        stakingBalance[msg.sender] = 0;

        // Update staking status
        isStaking[msg.sender] = false;  // Mark the user as no longer staking
    }

    /// @notice Issue rewards to all stakers
    /// @dev Only the contract owner can call this function, and rewards are issued once every 60 minutes
    function issueTokens() public {
        // Ensure that only the contract owner can call this function
        require(msg.sender == owner, "caller must be the owner");

        // Ensure that rewards can only be issued once every 60 minutes
        require(block.timestamp - lastReward > 60 minutes, "Need to wait 60 minutes");

        // Loop through all stakers and distribute rewards based on their staked amount
        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];  // Get the address of the staker
            uint256 balance = stakingBalance[recipient];  // Get the staker's balance

            // If the staker has a non-zero balance, issue rewards
            if(balance > 0) {
                uint256 reward = balance * 10 / 10_000;  // Calculate the reward as 10% of the staked amount
                dappToken.transfer(recipient, reward);  // Transfer the reward to the staker
            }
        }

        // Update the timestamp of the last reward issuance
        lastReward = block.timestamp;
    }
}
```

## Step 3: Deployment Script (HardHat)

Create a deployment script to deploy the contracts to the IOTA EVM testnet.

In the `scripts` folder, create a file named `deploy.js`:

```javascript
async function main() {
    // Fetch contract factories
    const DappToken = await ethers.getContractFactory("DappToken");
    const IOTAToken = await ethers.getContractFactory("IOTAToken");
    const TokenFarm = await ethers.getContractFactory("TokenFarm");

    // Deploy contracts
    const dappToken = await DappToken.deploy();
    await dappToken.deployed();
    console.log("DappToken deployed to:", dappToken.address);

    const iotaToken = await IOTAToken.deploy();
    await iotaToken.deployed();
    console.log("IOTAToken deployed to:", iotaToken.address);

    const tokenFarm = await TokenFarm.deploy(dappToken.address, iotaToken.address);
    await tokenFarm.deployed();
    console.log("TokenFarm deployed to:", tokenFarm.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

```

## Step 4: Deploying to the IOTA EVM Test

### 1. Configure Hardhat for IOTA EVM Testnet

Create a `.env` file with the following content (replace with your own private key and RPC URL):

```bash
PRIVATE_KEY=your-private-key
IOTA_RPC_URL=https://json-rpc.evm.testnet.iotaledger.net
```

### 2. Install the dotenv package to manage environment variables:

```bash
npm install dotenv
```

### 3. Import the `dotenv` package in your `hardhat.config.js`:

Modify `hardhat.config.js` to include the IOTA EVM testnet configuration:

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.7",
    networks: {
        'iotaevm-testnet': {
            url: process.env.IOTA_RPC_URL,,
            chainId: 1075,
            accounts: [process.env.PRIVATE_KEY], // Ensure your .env file has PRIVATE_KEY set
        },
    },
};
```

## Step 5: Deploy to IOTA EVM Testnet

<DeployAdmonition />

### 1. Compile your contracts:

```bash
npx hardhat compile
```

### 2. Deploy your contracts to the IOTA EVM testnet:

```bash
npx hardhat run scripts/deploy.js --network evm-testnet
```

You can verify your contract by visiting
the [EVM Testnet Explorer](https://explorer.evm.testnet.shimmer.network/),
and searching for the address from the previous step. If you access the `Contract` tab, you should be able to seeyour code and interact with your contract.

Feel free to [fork this repository](https://github.com/iota-community/Defi-yield-farming), contribute with pull requests, or customize it to suit your needs! This project serves as an excellent starting point for smart contract developers looking to build their own applications with staking and reward functionality.

## Conclusion

You have now created and deployed a simple yield farming application on the IOTA EVM testnet. Users can stake IOTATokens and earn DappTokens as rewards. This basic setup can be extended by adding more complex logic, security features, or even a frontend to interact with the smart contracts.

### Key Concepts Covered:

1. ERC20 Tokens: Both the reward and staking tokens are standard ERC20 tokens.
2. Staking Mechanism: Users can deposit (stake) IOTATokens into the TokenFarm contract.
3. Unstaking Mechanism: Users can withdraw (unstake) their staked tokens at any time.
4. Reward Distribution: The contract periodically distributes DappTokens as rewards to stakers.