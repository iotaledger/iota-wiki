import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy a Smart Contract

You can deploy your smart contracts to Shimmer EVM and the Shimmer EVM Testnet using popular tools
like [Hardhat](#hardhat) and [Remix](#remix).

:::tip Get a Basic Contract

This guide will deploy the `Counter` contract you can find in
the [How to Create a Basic Solidity Contract Guide](create-a-basic-contract.md).

:::

:::tip Connect Metamask

You can find a detailes

:::

## Remix

Deploying a Solidity smart contract using Remix is a straightforward process that doesn't require any installation or
setup of development environments on your machine. Remix is a powerful, browser-based IDE that allows you to write,
compile, and deploy smart contracts.

### 1. Access Remix IDE

Open your web browser and navigate to [Remix IDE](https://remix.ethereum.org/).

### 2. Create and Write Your Smart Contract

1. In the File Explorers tab on the left, click the "Create New File" icon.
2. Name your file `Counter.sol`.
3. Copy the Solidity code for the [basic counter smart contract](create-a-basic-contract.md) and paste it into
   the `Counter.sol` file you just created in Remix.

### 3. Compile Your Smart Contract

1. Navigate to the "Solidity Compiler" tab on the left sidebar.
2. Select the appropriate compiler version that matches the version specified in your contract (`^0.8.6` or similar).
   You
   might need to enable "Auto compile" or click the "Compile" button manually.
3. If there are errors, Remix will display them, and you'll need to correct them before proceeding.

### 4. Deploy Your Smart Contract

1. Switch to the "Deploy & Run Transactions" tab on the left sidebar.
2. In the "Environment" dropdown, select the appropriate environment:
    * JavaScript VM: For deploying and testing in a simulated blockchain provided by Remix.
    * Injected Web3: To use a real Ethereum network via MetaMask or another Web3 provider. This requires you to have
      MetaMask
      installed and an Ethereum network selected (e.g., Ropsten test network) with some ether for gas fees.
    * Web3 Provider: To connect to an Ethereum node directly. This is an advanced option and not typically used for
      basic
      testing.

   After selecting the environment, make sure the contract Counter is selected in the "Contract" dropdown.
3. Click the "Deploy" button. If you're using an Ethereum network, confirm the transaction in your Web3 wallet.

### 5. Interact with Your Deployed Contract

Once deployed, the contract instance will appear under the "Deployed Contracts" section.
Here, you can interact with your contract by calling its functions. For the Counter contract, you'll see buttons to call
its increment, decrement, and getCount functions directly from Remix.

## Hardhat

The first thing you'll need to deploy a smart contract using [Hardhat](https://hardhat.org/) is to set up a Hardhat
project. Here's a step-by-step guide:

### Requirements

* [Node.js](https://nodejs.org/).
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

### 1. Set Up Hardhat

1. Open a new terminal window.
2. Create a new directory for your project, and navigate into it. For example:
   ```bash
   mkdir deploy-a-basic-contract &&
   cd deploy-a-basic-contract
   ```
3. Create a new node project by running:
   ```bash
   npm init -y
   ```
4. Install Hardhat by running:
   ```bash
   npm install --save-dev hardhat
   ```
5. Create a Hardhat Project by running the following command:
   ```bash
   npx hardhat
   ```

   Select "Create a basic sample project" when prompted and answer the setup questions (you can just press enter to
   accept defaults).

### 2. Add Your Contract

1. Inside the `contracts` folder, create a new file called  `Counter.sol` and paste the content of
   the [Counter Basic Contract](create-a-basic-contract.md).
 
### 3. Create a Deployment Script:

1. Navigate to the `scripts` folder.
2. Create a new file called `deploy.js` with the following code:

   ```javascript
   async function main() {
       const Counter = await ethers.getContractFactory("Counter");
       const counter = await Counter.deploy();
   
       await counter.deployed();
   
       console.log("Counter deployed to:", counter.address);
   }
   
   main()
       .then(() => process.exit(0))
       .catch((error) => {
           console.error(error);
           process.exit(1);
       });
   ```

### 4. Compile and Deploy Your Contract

1. Add your preferred network parameters to the `hardhat.config.js`, for example:

<Tabs>
<TabItem value='testnet' label='Public Testnet'>

```javascript
networks: {
    'shimmerevm-testnet': {
        url: 'https://json-rpc.evm.testnet.shimmer.network',
        chainId: 1073,
        accounts: [YOUR PRIVATE KEY],
    },
},
//verify config
etherscan: {
    apiKey: {
    'shimmerevm-testnet': 'ABCDEFG123456'
    },
    customChains: [{
        network: 'shimmerevm-testnet',
        chainId: 1073,
        urls: {
            apiURL: 'https://explorer.evm.testnet.shimmer.network/api',
            browserURL: ' https://explorer.evm.testnet.shimmer.network/'
        }
    }]
}
```

</TabItem>
<TabItem value='shimmerEVM' label='Shimmer EVM'>

```javascript
networks: {
    'shimmerevm': {
        url: 'https://json-rpc.evm.shimmer.network',
        chainId: 148,
        accounts: [YOUR PRIVATE KEY],
    },
},
//verify config
etherscan: {
    apiKey: {
        'shimmerevm': 'ABCDEFG123456'
    },
    customChains: [{
        network: 'shimmerevm',
        chainId: 148,
        urls: {
            apiURL: 'https://explorer.evm.shimmer.network/api',
            browserURL: 'https://explorer.evm.shimmer.network/'
        }
    }]
}
```

</TabItem>
</Tabs>

:::caution

Currently, there is no validation service available for EVM/Solidity smart contracts on IOTA Smart Contracts, which is
often offered through block explorer APIs.

:::

2. Compile your contract by running the following command:

   ```bash
   npx hardhat compile
   ```

3. If you have no compilation errors, you can deploy your contract by running the following command:
   
   ```bash
   npx hardhat run scripts/deploy.js --network shimmerevm-testnet
   ```

   Expected output:

   ```bash
   Counter deployed to: 0x123456789ABCDEFGHIJK123456789ABCDEFGHIJK
   ```
   
4. Verify your smart contract by running:
   
   ```bash
   npx hardhat verify --network  shimmerevm-testnet 0x123456789ABCDEFGHIJK123456789ABCDEFGHIJK
   ```