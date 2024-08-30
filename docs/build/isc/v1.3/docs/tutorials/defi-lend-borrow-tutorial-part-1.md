# DeFi Lend Borrow

## Part I
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
- [Deployment](#deployment)
- [Verification](#verification)

## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [Hardhat](https://hardhat.org) >= v2.0.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.

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
- Mint: This method allows users to mint `IToken` by depositing a specified amount of the underlying token.
  - Transfers the specified amount of the underlying token from the user to the contract.
  - Mints an equivalent amount of IToken to the user's balance.
  - Updates the user's collateral in the `ITokenManager`.
  - Returns a boolean indicating whether the minting process was successful.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L49-L62
```
- Redeem: This method enables users to redeem `IToken` in exchange for the underlying token.
    
    - Ensures the user has enough IToken to redeem.
    - Burns the specified amount of IToken from the user's balance.
    - Transfers the equivalent amount of the underlying token from the contract to the user.
    - Updates the user's collateral in the `ITokenManager`.
    - Returns a boolean indicating whether the redemption process was successful.


```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L64-L78
```
- Borrow: Borrows the underlying token from the contract. This method allows users to borrow the underlying token from the contract.
    - Calculates the borrow rate and the interest for the specified amount.
    - Ensures the contract has enough liquidity and the user has sufficient collateral.
    - Increases the user's borrow balance by the borrowed amount plus interest.
    - Updates the total amount borrowed in the contract.
    - Transfers the borrowed amount of the underlying token to the user.
    - Returns a boolean indicating whether the borrowing process was successful.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L80-L98
```
- Repay: This method allows users to repay the borrowed underlying token.
  - Ensures the repayment amount does not exceed the user's borrow balance.
  - Transfers the repayment amount from the user to the contract.
  - Calculates the interest on the repayment amount and adjusts the user's borrow balance accordingly.
  - Updates the total amount borrowed and the contract's reserves.
  - Updates the user's collateral in the `ITokenManager`.
  - Returns a boolean indicating whether the repayment process was successful.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L100-L121
```
- `getBorrowRate()`: Returns the current borrow rate per block.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L123-L130
```
- `getSupplyRate()`: Returns the current supply rate per block.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/IToken.sol#L132-L140
```

### InterestRateModel

The `InterestRateModel` contract calculates the interest rates for borrowing and supplying assets based on the utilization of the underlying assets.

#### Key Functions:
- `utilizationRate(uint cash, uint borrows, uint reserves)`: Calculates the utilization rate of the market.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/InterestRateModel.sol#L41-L55
```
- `getBorrowRate(uint cash, uint borrows, uint reserves)`: Calculates the current borrow rate per block.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/InterestRateModel.sol#L57-L67
```
- `getSupplyRate(uint cash, uint borrows, uint reserves, uint reserveFactorMantissa)`: Calculates the current supply rate per block.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/InterestRateModel.sol#L69-L83
``` 

### ITokenManager

The `ITokenManager` contract manages the supported tokens and tracks collateral balances for each account.

#### Key Functions:
- `addToken(address token)`: Adds a new `IToken` to the manager.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L27-L36
```
- `removeToken(address token)`: Removes an `IToken` from the manager.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L38-L56
```
- `updateCollateral(address account, address token, uint256 newCollateral)`: Updates the collateral for a specific account and token.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L58-L67
```
- `checkCollateral(address account, address token, uint256 borrowAmount)`: Checks if the account has sufficient collateral to borrow.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L69-L80
```
- `checkCollateral(address account, address token, uint256 borrowAmount)`: Checks if the account has sufficient collateral to borrow.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L69-L80
```

- `getAllSupportedTokens()`: Returns an array of all the supported tokens.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/contracts/ITokenManager.sol#L82-L89
```
### Underlying Token

The `MockERC20` contract is a simple ERC20 token used for testing purposes. It allows minting of an initial supply to the deployer.


## Scripts

### Compile Your Contracts

```bash
npx hardhat compile
```

First, create a `scripts` folder in the root of the project and add the following files under it:

### Deploy script

The `deploy.js` script will deploy the contract to the ShimmerEVM Testnet.
```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/a8d67cd9ff4d567eab2a987de6d30fde94217b02/scripts/deploy.js#L1-L41
```

This will deploy the Defi Lend borrow contract to the ShimmerEVM Testnet. run it by executing:
```bash
npx hardhat run scripts/deploy.js --network shimmer_evm_testnet
```

### Verfication
You can verify your contract by visiting
the [EVM Testnet Explorer](https://explorer.evm.testnet.shimmer.network/),
and searching for the address from the previous step. If you access the `Contract` tab, you should be able to see your code and interact with your contract or you can use the below command to verify the contracts through hardhat :

```bash
npx hardhat verify --network shimmer_evm_testnet CONTRACT_ADDRESS_HERE "CONSTRUCTOR_ARGUMENTS_IF_ANY"
```

## CONCLUSION
In this first part of the DeFi Lend Borrow tutorial, we have set up the project and deployed the Itoken contract to the ShimmerEVM Testnet. We have also deployed the Underlying Token's contract and the Itoken Manager contract.Now using Itoken contract you can lend and borrow tokens. In the next part, we will create the DeFi Lend Borrow UI using React.js.