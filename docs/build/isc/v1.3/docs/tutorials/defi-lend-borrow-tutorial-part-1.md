# DeFi Lend Borrow : Solidity Contracts

DeFi Lend Borrow is a decentralized finance (DeFi) application that enables users to lend and borrow assets on the Shimmer EVM testnet. The project is built using Solidity and Hardhat, with the core functionality provided by smart contracts.

## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [Hardhat](https://hardhat.org) >= v2.0.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.

## DeFi Lend Borrow Contracts Architecture Overview

![architecture diagram](/img/tutorials/defi-lend-borrow/defi-lend-borrow-architecture-diagram.png)

## Set Up

First, create a new directory for the project and navigate into it:

```bash
mkdir defi-lend-borrow
cd defi-lend-borrow
```

Then [bootsrap a new Hardhat project](https://hardhat.org/tutorial/creating-a-new-hardhat-project), by running:

```bash
npx hardhat init
```

## Configuration

In the `hardhat.config.js` file, update the `networks` object to include the ShimmerEVM Testnet network configuration, as well as the BNB Testnet network configuration. 

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/e227092ef1123cf8cff766ee4c786a0c40a62bf3/hardhat.config.ts#L1-L42
```

## Contracts Overview

### IToken

The `IToken` contract is an ERC20 token that represents an interest-bearing asset with lending and borrowing functionalities.

- **Underlying Asset:** The ERC20 token that this contract wraps.
- **Interest Rate Model:** Determines the interest rates for borrowing and supplying assets.
- **ITokenManager:** Manages supported tokens and collateralization.

#### Key Functions

- Mint: This method allows users to mint `IToken` by depositing a specified amount of the underlying token.
  - Transfers the specified amount of the underlying token from the user to the contract.
  - Mints an equivalent amount of IToken to the user's balance.
  - Updates the user's collateral in the `ITokenManager`.
  - Returns a boolean indicating whether the minting process was successful.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L113-L135
```

- Redeem: This method enables users to redeem `IToken` in exchange for the underlying token.    
    - Ensures the user has enough IToken to redeem.
    - Burns the specified amount of IToken from the user's balance.
    - Transfers the equivalent amount of the underlying token from the contract to the user.
    - Updates the user's collateral in the `ITokenManager`.
    - Returns a boolean indicating whether the redemption process was successful.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L137-L164
```

- Borrow: Borrows the underlying token from the contract. This method allows users to borrow the underlying token from the contract.
    - Calculates the borrow rate and the interest for the specified amount.
    - Ensures the contract has enough liquidity and the user has sufficient collateral.
    - Increases the user's borrow balance by the borrowed amount plus interest.
    - Updates the total amount borrowed in the contract.
    - Transfers the borrowed amount of the underlying token to the user.
    - Returns a boolean indicating whether the borrowing process was successful.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L166-L196
```

- Repay: This method allows users to repay the borrowed underlying token.
  - Ensures the repayment amount does not exceed the user's borrow balance.
  - Transfers the repayment amount from the user to the contract.
  - Calculates the interest on the repayment amount and adjusts the user's borrow balance accordingly.
  - Updates the total amount borrowed and the contract's reserves.
  - Updates the user's collateral in the `ITokenManager`.
  - Returns a boolean indicating whether the repayment process was successful.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L198-L227
```

- `getBorrowRate()`: Returns the current borrow rate per block.
```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L229-L236
```

- `getSupplyRate()`: Returns the current supply rate per block.
```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/IToken.sol#L238-L245
```

You can review the full code for the [IToken contract in the tutorial's Repository](https://github.com/iota-community/Defi-lend-borrow/blob/main/contracts/IToken.sol).

### InterestRateModel

The `InterestRateModel` contract calculates the interest rates for borrowing and supplying assets based on the utilization of the underlying assets.

#### Key Functions

- `utilizationRate(uint cash, uint borrows, uint reserves)`: Calculates the utilization rate of the market.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/InterestRateModel.sol#L41-L57
```

- `getBorrowRate(uint cash, uint borrows, uint reserves)`: Calculates the current borrow rate per block.
```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/InterestRateModel.sol#L59-L68
```

- `getSupplyRate(uint cash, uint borrows, uint reserves, uint reserveFactorMantissa)`: Calculates the current supply rate per block.
```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/InterestRateModel.sol#L70-L79
``` 

We have now covered all relevant parts and working of the InterestRateModal contract, here is the [link](https://github.com/iota-community/Defi-lend-borrow/blob/main/contracts/InterestRateModel.sol) for the full contract code for your reference.

### ITokenManager Contract

The `ITokenManager` contract is designed to manage supported tokens and collateral balances for a decentralized finance (DeFi) platform. It allows for adding, removing, and updating supported tokens, tracking their USD prices, and performing pre-mint, pre-redeem, and pre-borrow checks for liquidity.

#### Key Features

- **Manage supported tokens:** Add, remove, and view the supported `IToken` contracts.
- **Collateral management:** Track and update collateral balances for each account and token.
- **USD price tracking:** Maintain USD prices for each supported token.
- **Pre-mint/redeem/borrow checks:** Ensure that accounts meet collateral requirements before minting, redeeming, or borrowing tokens.
- **Collateral factor:** Set and use collateral factors for different tokens to adjust borrowing limits.

#### Key Functions

- `addToken(address token, uint256 tokenUSDPrice, uint256 tokenCollateralFactor)`: Adds a new `IToken` to the manager.
  - **Parameters:**
    - `token`: The address of the `IToken` to be added.
    - `tokenUSDPrice`: The USD price of the token.
    - `tokenCollateralFactor`: The collateral factor for the token.
  - **Modifiers:** `onlyOwner`
  - **Events:** Emits `TokenAdded` upon successful addition of the token.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L57-L86
```

- `removeToken(address token)` : Removes an `IToken` from the manager.
  - **Parameters:**
    - `token`: The address of the `IToken` to be removed.
  - **Modifiers:** `onlyOwner`
  - **Events:** Emits `TokenRemoved` upon successful removal of the token.

https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L88-L111
```

- `preMintChecks(address ITokenAddress)` : Ensures that the token is supported before minting.
  - **Parameters:**
    - `ITokenAddress`: The address of the `IToken` to be minted.
  - **Reverts:** `TokenNotListed` if the token is not supported.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L113-L122
```

- `preRedeemChecks(address iTokenAddress, address redeemer, uint256 amount)`: Ensures that the redeemer has sufficient collateral to redeem tokens.

- **Parameters:**
  - `iTokenAddress`: The address of the `IToken` to be redeemed.
  - `redeemer`: The account attempting to redeem.
  - `amount`: The amount of tokens to be redeemed.
- **Reverts:** `RedeemAmountTooMuch` if the collateral is insufficient.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L124-L154
```

- `preBorrowChecks(address iTokenAddress, address redeemer, uint256 amount)`: Ensures that the redeemer has sufficient collateral to borrow tokens.

- **Parameters:**
  - `iTokenAddress`: The address of the `IToken` to be borrowed.
  - `redeemer`: The account attempting to borrow.
  - `amount`: The amount of tokens to be borrowed.
- **Reverts:** `BorrowAmountTooMuch` if the collateral is insufficient.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L156-L185
```

- `hasLiquidity(address account, address iToken, uint256 redeemTokens, uint256 borrowTokens) → (uint256 totalAccountCollaterals, uint256 totalAccountBorrows)`: Calculates the total collateral and borrow balances for an account, accounting for tokens to be redeemed or borrowed.
- **Parameters:**
  - `account`: The account to check.
  - `iToken`: The token in question.
  - `redeemTokens`: The number of tokens to redeem.
  - `borrowTokens`: The number of tokens to borrow.
- **Returns:** 
  - `totalAccountCollaterals`: The total collateral balance.
  - `totalAccountBorrows`: The total borrow balance.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L187-L247
```
- `updateTokenUSDPrice(address token, uint256 newUSDPrice)`: Updates the USD price of a supported token.

- **Parameters:**
  - `token`: The address of the token.
  - `newUSDPrice`: The new USD price for the token.
- **Modifiers:** `onlyOwner`, `onlySupportedToken`
- **Reverts:** `TokenNotListed` if the token is not supported.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/bfb658e82611657a50885a2509f21a07da2bbef1/contracts/ITokenManager.sol#L245-L258
```

- `getTokenUSDPrice(address token) → uint256`: Returns the USD price of a supported token.

- **Parameters:**
  - `token`: The address of the token.
- **Returns:** The USD price of the token as a `uint256`.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/3a368391f4767d1decb209ad6bfdd20a2b08fa03/contracts/ITokenManager.sol#L249-L262
```

We have now covered all relevant parts and the functionality of the `ITokenManager` contract. For reference, you can follow the [full contract code](https://github.com/iota-community/Defi-lend-borrow/blob/main/contracts/ITokenManager.sol).

### Underlying Token

The `MockERC20` contract is a simple ERC20 token used for testing purposes. It allows minting of an initial supply to the deployer. You can add this token to the `ITokenManager` and mint new ITokens by depositing the MockERC20 tokens as the underlying Token.


## Scripts

### Compile Your Contracts

We can compile our contracts created above using the below command. This command compiles your Solidity smart contracts, checking for errors and generating necessary artifacts, including the ABI (Application Binary Interface) and bytecode. These artifacts are stored in the artifacts/ directory and are essential for deploying and interacting with the contracts.

```bash
npx hardhat compile
```

First, create a `scripts` folder in the root of the project and add the following files under it:

### Deploy Script

The `deploy.js` script will deploy the contract to the ShimmerEVM Testnet.

```solidity reference
https://github.com/iota-community/Defi-lend-borrow/blob/e227092ef1123cf8cff766ee4c786a0c40a62bf3/scripts/deploy.js#L1-L51
```

This will deploy the Defi Lend borrow contract to the ShimmerEVM Testnet. run it by executing:
```bash
npx hardhat run scripts/deploy.js --network shimmer_evm_testnet
```

### Verfication

You can verify your contract by visiting the [EVM Testnet Explorer](https://explorer.evm.testnet.shimmer.network/),
and searching for the address from the previous step. If you access the `Contract` tab, you should be able to see your code and interact with your contract or you can use the below command to verify the contracts through hardhat :

```bash
npx hardhat verify --network shimmer_evm_testnet CONTRACT_ADDRESS_HERE "CONSTRUCTOR_ARGUMENTS_IF_ANY"
```

### Conclusion

In this first part of the DeFi Lend Borrow tutorial, we have set up the project and deployed the Itoken contract to the ShimmerEVM Testnet. We have also deployed the Underlying Token's contract and the Itoken Manager contract.Now using Itoken contract you can lend and borrow tokens. In the next part, we will create the DeFi Lend Borrow UI using React.js.