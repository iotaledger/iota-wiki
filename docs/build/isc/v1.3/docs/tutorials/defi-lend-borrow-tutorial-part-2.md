# DeFi Lend Borrow - Part II 

This is a comprehensive guide to the DeFi Lend Borrow DApp, a decentralized application built using React and the ethers library. The DApp allows users to lend and borrow cryptocurrency assets on Shimmer EVM Testnet.


### Prerequisites

- [Node.js](https://nodejs.org) =  v18.0
- [React.js](https://react.dev/) >= v18.2.0
- [npx](https://www.npmjs.com/package/npx)  >= v7.1.0.
- [Metamask](https://metamask.io/) : Set up a Metamask wallet with some Shimmer EVM testnet tokens.

## Set Up

First, [bootsrap a new React project](https://create-react-app.dev/docs/getting-started/), by running:

```bash
npx create-react-app lend-borrow-ui
cd lend-borrow-ui
```

Secondly, install [ethers.js](https://docs.ethers.org/v5/) for interacting with the contracts through UI. 
```bash
npm install ethers
```

## Creating the UI

### Code Structure

- [`Context.js`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/context/Context.js): Defines the global context for web3 and other account data.
- `Components`: Contains the components listed below for the UI :
    - [`NavigationBar`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/NavigationBar.js)
    - [`LendBorrowPlatformDetails`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/LendBorrowPlatformDetails/index.js)
      - [`AllAssetsList`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/LendBorrowPlatformDetails/AllAssetsList.js)
    - [`TransactionsCard`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/TransactionsCard/index.js)
      - [`Tabs`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/TransactionsCard/Tabs.js)
      -  [`TransactionsForm`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/TransactionsCard/TransactionForm.js)
    - [`AccountDetails`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/AccountDetails.js)
    - [`ConnectWallet`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/ConnectWallet.js)
    - [`TransactionsAlert`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/components/TransactionAlert.js)
- `Utils`: 
    - [`etherUtils.js`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/utils/ethersUtils.js)
    - [`contractAbi.js`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/utils/contractAbi.js)
    - [`formats.js`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/utils/formats.js)
    - [`sendTransactions.js`](https://github.com/iota-community/Defi-lend-borrow/blob/main/lend-borrow-ui/src/utils/sendTransactions.js)

### `Context`

Create a directory named `context` and a file `Context.js`inside the app.
This `Context.js` file sets up a context for managing wallet connection, balance information, and transaction details in a React application. It uses `createContext` to create a `Context` object, and the `WalletProvider` component provides this context to child components.

The `WalletProvider` manages state for the wallet address, SMR balance, token balance, gas prices, and transaction history. It uses the `useEffect` hook to automatically detect if MetaMask is installed and connects to the Ethereum network. It also handles network switching, wallet connection, and balance fetching using utility functions from `ethersUtils`. Additionally, it includes methods to connect, disconnect, and refresh wallet balances when needed.

This setup facilitates easy access to wallet-related data and actions across the app.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/ee1dd2bd3f94ec594163c153886e4c0457654a5b/lend-borrow-ui/src/context/Context.js#L1-L82
```
## Components

### `NavigationBar`

The `Navbar` component manages wallet connection and user interactions. It displays the connected wallet address, balance, and provides a dropdown menu with options to view the balance or disconnect the wallet. It uses `context` to retrieve wallet details and fetches the user's native token balance. The component also includes a button to navigate to the accounts section of the app. 

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/ee1dd2bd3f94ec594163c153886e4c0457654a5b/lend-borrow-ui/src/components/NavigationBar.js#L1-L76
```

### Dashboard 

the dashboard page consists of two components, `LendBorrowPlatformDetails` and `AllAssetsList` which shows details of all the supported tokens and details about the tokens and platform.

#### `LendBorrowPlatformDetails`

The `LendBorrowPlatformDetails` component displays a summary of the total supplies and total borrows on a lending/borrowing platform. It accepts two props: `totalSuppliesSum` and `totalBorrowsSum`, which represent the sum of all supplied and borrowed assets. The component formats and truncates these values to display the first six digits and shows them in a styled card layout. If no borrow amount is provided, it defaults to "$ 0".

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/ee1dd2bd3f94ec594163c153886e4c0457654a5b/lend-borrow-ui/src/components/LendBorrowPlatformDetails/index.js#L1-L27
```


####  `AllAssetsList`

The AllAssetsList component fetches and displays a list of supported assets (tokens) in a decentralized finance (DeFi) application. It retrieves token data, including their supply, borrow amounts, collateral factor, and price, and renders them in a table format. Here's a breakdown:

1. State Management:

 - allAssets: Stores the list of assets with their details.
 - isLoading: Indicates whether the asset data is being loaded.

2. Fetching Data:

 - On component load, the useEffect hook calls the `getAllSupportedTokens` function to fetch a list of underlying and iToken addresses.
 - For each underlying token, details such as name, supply, borrow amounts, and price are fetched.
 - This data is combined and stored in `allAssets`.
 - It also calculates the total sum of supplies and borrows and updates the parent component's state using `setTotalSuppliesSum` and `setTotalBorrowsSum`.

3. Rendering:
 - If data is loaded (`!isLoading`), it displays a table with the asset details.
 - Each row includes the asset name, address (with a link to the Shimmer EVM explorer), total borrow, total supply, collateral factor, and price.
 - Clicking on a row selects the asset by calling `setSelectedAsset`.

4. Loading State:

While data is being fetched, it shows a loading spinner with a message.
This component serves as a dynamic asset list for users to view and interact with supported tokens in the platform.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/ee1dd2bd3f94ec594163c153886e4c0457654a5b/lend-borrow-ui/src/components/LendBorrowPlatformDetails/AllAssetsList.js#L1-L126
```


### `TransactionsCard` 

This component manages and displays a card for performing different types of transactions (like `Supply` or `Borrow`) based on the selected asset. It uses state named `activeTab` to Keeps track of the currently active transaction type (e.g., "Supply", "Withdraw").

 - `TabsPanel`: Allows users to switch between different transaction types.
 - `TransactionForm`: Displays the form for performing the selected transaction on the selectedAsset.

 #### `TransactionForm` 

This component facilitates token transactions (`Supply`, `Withdraw`, `Borrow` or `Repay`) based on the selected asset. It:

Manages user input for transaction amounts and tracks token balances.
Updates the UI dynamically based on the active transaction type.
Connects to the wallet and opens a modal to confirm the transaction.
Calls specific transaction functions like `mintItokens`, `borrowItokens`, `redeemItokens` or `repayItokens` based on the active tab.
Displays transaction alerts to indicate success or failure after confirmation.

```javascript reference
https://github.com/iota-community/Defi-lend-borrow/blob/ee1dd2bd3f94ec594163c153886e4c0457654a5b/lend-borrow-ui/src/components/TransactionsCard/TransactionForm.js#L1-L154
```

:::tip
You can refer this repository for full React UI code : [lend-borrow-ui](https://github.com/iota-community/Defi-lend-borrow/tree/main/lend-borrow-ui)
:::

### Usage Example 

- Connect your Metamask wallet: Click the "Connect Wallet" button on the app to open the below metamask popup:
    
    ![connect metamask](/img/tutorials/defi-lend-borrow/defi-lend-borrow-connect-metamask.png "Connect to MetaMask") 

- View your account balance: See your current token balance.
    ![accoount balance](/img/tutorials/defi-lend-borrow/defi-lend-borrow-account-bal.png "You can view your account SMR balance here") 
- View the Dashboard component: 
    ![dashboard](/img/tutorials/defi-lend-borrow/defi-lend-borrow-dashboard.png "Dashboard UI") 
  - In the Dashboard component you can view `total supplied` funds and `total borrowed` funds and the list of all the supported tokens with their details.
    
- `TransactionsCard` could be used by clicking any of the token mentioned on the list to `supply`, `borrow`, `repay` or `withdraw` funds.
        ![transactions card](/img/tutorials/defi-lend-borrow/defi-lend-borrow-transaction-card.png "Dashboard UI")
  - Example of Supplying tokens below :
    - Enter the amount you want to supply and click transact.
    - First you will need to approve the underlying token to the contract.

        ![approve underlying token](/img/tutorials/defi-lend-borrow/defi-lend-borrow-approve.png "Approve underlying token")
    - And a new metamask popup will be shown to mint the eqvivalent amount of ITokens.

        ![supply IToken](/img/tutorials/defi-lend-borrow/defi-lend-borrow-mint.png "Supply IToken")

Similarly you can `borrow`, `repay` or `withdraw` funds.


## Conclusion

This is the last document of DeFi Lend Borrow tutorial, in which we learn how to setup and use the react application to interact with the contracts we created in Part I.