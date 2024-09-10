# DeFi Lend Borrow UI

## Part II 

This is a comprehensive guide to the DeFi Lend Borrow DApp, a decentralized application built using React and the ethers library. The DApp allows users to lend and borrow cryptocurrency assets on Shimmer EVM Testnet.

## Table of content

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)


## Prerequisites

- [Node.js](https://nodejs.org) >=  v18.0
- [React.js](https://react.dev/) >= v18.2.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.
- [Metamask](https://metamask.io/) : Set up a Metamask wallet with some Shimmer EVM testnet tokens.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/defi-lend-borrow.git
    cd defi-lend-borrow/lend-borrow-ui
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    npm install --legacy-peer-deps
    ```
3. Start the development server:
    ```bash
    npm start
    ```


## Usage

- Connect your Metamask wallet: Click the "Connect Wallet" button to:
    - View your account balance: See your current token balance.
    - View the `total supplied` funds, `total borrowed` funds and `reserve factor mantissa` through your account.
    - View the `total supplied` funds, `total borrowed` funds and `reserve factor mantissa` on the platform.
    - Interact with the contract to `TransactionsCard` to `supply`, `borrow`, `repay` or `withdraw` funds.


## Code Structure

- `Context.js`: Defines the global context for web3 and other account data.
- `Components`: Contains below components for the UI :
    - `NavigationBar`
    - `LendBorrowPlatformDetails`
    - `TransactionsCard`
    - `AccountDetails`
    - `ConnectWallet`
    - `TransactionsAlert`
- `Utils`: 
    - Handles interactions with smart contracts using ethers.
    - Handle Js logics to manage the UI of the platform.

