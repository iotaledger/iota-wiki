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

# Building a Yield Farming DApp on IOTA EVM Testnet with Pyth Oracle Price Feed

## Introduction

In this tutorial, we will guide you through the process of building a yield farming decentralized application (DApp) using [Solidity](https://docs.soliditylang.org/en/v0.8.26/), one of the most widely adopted programming languages for [Ethereum](https://ethereum.org/en/) smart contracts, and the [Hardhat](https://hardhat.org/) development environment, a powerful and flexible framework for building on the Ethereum blockchain. Additionally, we will use the Pyth Oracle Price Feed to retrieve the IOTA/USD price feed, which will be used to calculate rewards for stakers.

## What is Yield Farming

Yield farming, also known as liquidity mining, is a way for users to earn passive income by providing liquidity to a blockchain protocol. This involves depositing assets into a protocol, which in return offers rewards in the form of fees, interest, or other incentives. For instance, you might supply liquidity to a decentralized lending platform like [Aave](https://app.aave.com/) or a decentralized exchange using an Automated Market Maker (AMM) model like [Uniswap](https://uniswap.org/). In return, you can earn rewards.

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

Pyth provides a [Solidity SDK](https://github.com/pyth-network/pyth-crosschain/tree/main/target_chains/ethereum/sdk/solidity) to fetch prices from Pyth contracts. The SDK exposes IPyth interface to interact with Pyth price feeds.

```bash
npm install @pythnetwork/pyth-sdk-solidity
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

This is the core contract of the yield farming application. It manages the staking, unstaking, and reward distribution logic. Users can stake their IOTATokens in this contract to earn DappTokens as rewards. The contract integrates with the Pyth Oracle to fetch the IOTA/USD price, which is used to calculate rewards for stakers.

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
- `getIOTA2USDPriceFeed`: Interacts with the Pyth Oracle network to fetch the current price of IOTA in USD. This fetched price is used within the `issueTokens` function to calculate the equivalent value of rewards in DappToken.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./DappToken.sol"; // Import the DappToken contract
import "./IOTAToken.sol"; // Import the IOTAToken contract
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; // Import the ERC20 interface from OpenZeppelin
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
import "@pythnetwork/pyth-sdk-solidity/PythUtils.sol";

/**
 * @title IOTA Yield Farming Contract
 * @notice This contract allows users to stake IOTATokens and earn rewards in DappTokens
 * @dev Implements staking, unstaking, and reward distribution mechanisms
 */
contract TokenFarm {
    IPyth pyth;

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

    // @notice Mapping to track if an address has previously staked
    mapping(address => bool) public hasStaked;

    /// @notice Mapping to track if an address is currently staking
    mapping(address => bool) public isStaking;

    /**
     * @notice Constructor to initialize the contract with the reward and staking token addresses
     * @param _dappToken Address of the DappToken contract
     * @param _iotaToken Address of the IOTAToken contract
     */
    constructor(
        DappToken _dappToken,
        IOTAToken _iotaToken,
        address pythContract
    ) {
        dappToken = _dappToken;
        iotaToken = _iotaToken;
        owner = msg.sender;
        pyth = IPyth(pythContract);
    }

    /**
     * @notice Stake IOTATokens in the contract
     * @dev Transfers the specified amount of IOTATokens from the sender's address to the contract
     * @param _amount The number of IOTATokens to stake
     */
    function stakeTokens(uint256 _amount) public payable {
        /// Transfer the specified amount of IOTATokens from the user's wallet to the contract
        iotaToken.transferFrom(msg.sender, address(this), _amount);

        /// Update the user's staking balance
        stakingBalance[msg.sender] += _amount;

        /// If the user has not staked before, add them to the stakers array
        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        /// Update staking status
        isStaking[msg.sender] = true; // Mark the user as currently staking
        hasStaked[msg.sender] = true; // Mark the user as having staked before
    }

    /**
     * @notice Unstake IOTATokens and withdraw them from the contract
     * @dev Transfers the staked IOTATokens back to the sender's address
     */
    function unstakeTokens() public {
        /// Fetch the user's staking balance
        uint256 balance = stakingBalance[msg.sender];

        /// Ensure the user's balance is greater than 0
        require(balance > 0, "staking balance cannot be 0");

        /// Transfer the staked tokens back to the user
        iotaToken.transfer(msg.sender, balance);

        /// Reset the user's staking balance
        stakingBalance[msg.sender] = 0;

        /// Update staking status
        isStaking[msg.sender] = false; // Mark the user as no longer staking
    }

    /**
     * @dev Fetches the current price of IOTA in USD from the Pyth Oracle network.
     * @param priceUpdate An array of price update data required by the Pyth Oracle.
     * @return iotaToUsdPrice The current price of IOTA in USD with 18 decimal places.
     */
    function getIOTA2USDPriceFeed(
        bytes[] calldata priceUpdate
    ) public payable returns (uint256) {
        /// Calculate the fee required to fetch the price update from the Pyth Oracle.
        uint fee = pyth.getUpdateFee(priceUpdate);

        /// Update the price feeds in the Pyth Oracle with the provided update data.
        pyth.updatePriceFeeds{value: fee}(priceUpdate);

        /// Define the unique identifier for the IOTA/USD price feed in the Pyth Oracle.
        bytes32 priceFeedId = 0xc7b72e5d860034288c9335d4d325da4272fe50c92ab72249d58f6cbba30e4c44;

        /// Fetch the price of IOTA/USD from the Pyth Oracle, ensuring the price is not older than 60 seconds.
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(
            priceFeedId,
            60
        );

        /// @dev Convert the fetched price to an unsigned integer with 18 decimal places.
        uint256 iotaToUsdPrice = PythUtils.convertToUint(
            price.price,
            price.expo,
            18
        );

        /// @dev Return the current price of IOTA in USD.
        return iotaToUsdPrice;
    }

    /**
     * @notice Issue rewards to all stakers
     * @dev Only the contract owner can call this function, and rewards are issued once every 60 minutes
     */
    function issueTokens(bytes[] calldata priceUpdate) public {
        /// Ensure that only the contract owner can call this function
        require(msg.sender == owner, "caller must be the owner");

        /// Ensure that rewards can only be issued once every 60 minutes
        require(
            block.timestamp - lastReward > 60 minutes,
            "Need to wait 60 minutes"
        );

        /// Fetch the current IOTA/USD price from the Pyth Oracle.
        uint256 iotaToUSDPrice = getIOTA2USDPriceFeed(priceUpdate);


        /// Loop through all stakers and distribute rewards based on their staked amount
        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i]; // Get the address of the staker
            uint256 balance = stakingBalance[recipient]; // Get the staker's balance

            /// If the staker has a non-zero balance, issue rewards
            if (balance > 0) {
                /// Calculate the reward based on the staked value in USD
                uint256 stakedBalanceinUSD = (balance * iotaToUSDPrice) /
                    10 ** 18;

                /// Determine reward amount, e.g., 5% of the staked value in USD
                uint256 reward = (stakedBalanceinUSD * 5) / 100;

                /// Transfer the reward to the staker
                dappToken.transfer(
                    recipient,
                    reward * 10 ** dappToken.decimals()
                );
            }
        }

        /// Update the timestamp of the last reward issuance
        lastReward = block.timestamp;
    }
}
```

## Step 3: Deployment Script (HardHat)

Create a deployment script to deploy the contracts to the IOTA EVM testnet.

In the `scripts` folder, create a file named `deploy.js`:

```javascript
async function main() {
    /// Fetch contract factories
    const DappToken = await ethers.getContractFactory("DappToken");
    const IOTAToken = await ethers.getContractFactory("IOTAToken");
    const TokenFarm = await ethers.getContractFactory("TokenFarm");

    /// Deploy contracts
    const dappToken = await DappToken.deploy();
    await dappToken.deployed();
    console.log("DappToken deployed to:", dappToken.address);

    const iotaToken = await IOTAToken.deploy();
    await iotaToken.deployed();
    console.log("IOTAToken deployed to:", iotaToken.address);

    const tokenFarm = await TokenFarm.deploy(dappToken.address, iotaToken.address, "PYTH_ORACLE_CONTRACT_ADDRESS");
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
and searching for the address from the previous step. If you access the `Contract` tab, you should be able to see your code and interact with your contract.

Feel free to [fork this repository](https://github.com/iota-community/Defi-yield-farming), contribute with pull requests, or customize it to suit your needs. We have a React [frontend](https://github.com/iota-community/Defi-yield-farming/tree/main/frontend) on the repository that you can use to interact with Token Farm smart contract.

### Key Concepts Covered:

1. ERC20 Tokens: Both the reward and staking tokens are standard ERC20 tokens.
2. Staking Mechanism: Users can deposit (stake) IOTATokens into the TokenFarm contract.
3. Unstaking Mechanism: Users can withdraw (unstake) their staked tokens at any time.
4. Reward Distribution: The contract periodically distributes DappTokens as rewards to stakers.