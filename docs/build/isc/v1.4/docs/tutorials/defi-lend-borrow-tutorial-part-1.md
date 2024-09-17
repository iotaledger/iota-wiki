# DeFi Lend Borrow

DeFi Lend Borrow is a decentralized finance (DeFi) application that enables users to lend and borrow assets on the Shimmer EVM testnet. The project is built using Solidity and Hardhat, with the core functionality provided by smart contracts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contracts Overview](#contracts-overview)
  - [IToken](#itoken)
  - [InterestRateModel](#interestratemodel)
  - [ITokenManager](#itokenmanager)
  - [MockERC20](#mockerc20)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Hardhat installed globally
- A Shimmer EVM testnet account with test tokens

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/defi-lend-borrow.git
    cd defi-lend-borrow
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Compile the contracts:
    ```bash
    npx hardhat compile
    ```

## Contracts Overview

### IToken

The `IToken` contract is an ERC20 token that represents an interest-bearing asset with lending and borrowing functionalities.

- **Underlying Asset:** The ERC20 token that this contract wraps.
- **Interest Rate Model:** Determines the interest rates for borrowing and supplying assets.
- **ITokenManager:** Manages supported tokens and collateralization.

#### Key Functions:
- `mint(uint256 amount)`: Mints `IToken` by depositing the underlying token.
- `redeem(uint256 amount)`: Redeems `IToken` by withdrawing the underlying token.
- `borrow(uint256 amount)`: Borrows the underlying token from the contract.
- `repay(uint256 amount)`: Repays the borrowed underlying token.
- `getBorrowRate()`: Returns the current borrow rate per block.
- `getSupplyRate()`: Returns the current supply rate per block.

### InterestRateModel

The `InterestRateModel` contract calculates the interest rates for borrowing and supplying assets based on the utilization of the underlying assets.

#### Key Functions:
- `utilizationRate(uint cash, uint borrows, uint reserves)`: Calculates the utilization rate of the market.
- `getBorrowRate(uint cash, uint borrows, uint reserves)`: Calculates the current borrow rate per block.
- `getSupplyRate(uint cash, uint borrows, uint reserves, uint reserveFactorMantissa)`: Calculates the current supply rate per block.

### ITokenManager

The `ITokenManager` contract manages the supported tokens and tracks collateral balances for each account.

#### Key Functions:
- `addToken(address token)`: Adds a new `IToken` to the manager.
- `removeToken(address token)`: Removes an `IToken` from the manager.
- `updateCollateral(address account, address token, uint256 newCollateral)`: Updates the collateral for a specific account and token.
- `checkCollateral(address account, address token, uint256 borrowAmount)`: Checks if the account has sufficient collateral to borrow.

### MockERC20

The `MockERC20` contract is a simple ERC20 token used for testing purposes. It allows minting of an initial supply to the deployer.


