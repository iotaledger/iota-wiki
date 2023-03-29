# Deploy a Smart Contract Using Hardhat

:::info
Hardhat is a powerful development environment for building smart contracts on the Ethereum blockchain. Whether you're new to blockchain development or an experienced developer, Hardhat can help you build better, more reliable smart contracts.

In this tutorial, you will learn how to set up Hardhat and use it to build, test and deploy a simple smart contract on ShimmerEVM.
:::


## Pre-requisites

- [Node.js Stable Version](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Create the Project

Let's start by creating a new node project:

```sh
mkdir projectname
cd projectname
```

Initiate npm:

```sh
npm init -y
```

Install hardhat:

```sh
npm install --save-dev hardhat
```

Now, let's create a new hardhat project. Run in your project root:

```sh
npx hardhat
```

:::note

The sample project used here comes from the [<ins>Hardhat Quickstart guide</ins>](https://hardhat.org/getting-started/#quick-start), as well as its instructions.

:::

You should see the following prompt:

![Hardhat Setup](../static/shimmer-hardhat-setup.png 'Hardhat Setup')

Choose the JavaScript project and go through these steps to compile, test and deploy the sample contract. 

:::note Typescript
If you're comfortable with typescript, feel free to select it. There's not much difference for this project. However, some syntax might differ.
:::

Your hardhat project should look like something this:

```md
.
├── README.md
├── contracts
│   └── Lock.sol
├── hardhat.config.js
├── package-lock.json
├── package.json
├── scripts
│   └── deploy.js
└── test
    └── Lock.js
```

---
## Check the Contract

The `contracts` folder contains `Lock.sol`, which is a sample contract which consistis of a simple digital lock, where users could only withdraw funds after a given period of time.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
```
The above is an auto-generated smart contract by hardhat. You can replace it with your own smart contract. If you want to understand what the smart contract does, it's a Lock contract, which will lock funds for a specific time period and allows withdrawals only past that point.
Some important things to note are data types. `event` means that we can subscribe to it like a webhook and wait for a ping to the client side whenever a withdrawal is triggered with `emit` from inside the function `withdraw()`.

## Set Up the Contract

- Go to `hardhat.config.js`
- Update the `hardhat-config` with shimmer network details as shown below:

```js
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "shimmerevm-testnet",
  networks: {
    "shimmerevm-testnet": {
      url: 'https://json-rpc.evm.testnet.shimmer.network',
      chainId: 1071,
      accounts: [priv_key]
    }
  }
};
```

3. Create a `.env` file in the project root to store your network id and jsonrpc if you want to keep it private. You can then refer to them by `process.env.SHIMMEREVM_TESTNET_JSONRPC`.

:::note

Note that the file above requires DOTENV to manage environment variables and ethers and etherscan. Make sure to install all those packages. 

Find more instructions on how to use DOTENV in the [<ins>DOTENV npm package</ins>](https://www.npmjs.com/package/dotenv).

:::

### Compiling the contract

To compile the contract, you first need to install Hardhat Toolbox:

```sh
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

Then, simply run to compile:

```sh
npx hardhat compile
```

## Test the Contract

To run tests with Hardhat, you just need to type the following:

```sh
npx hardhat test
```

And this is an expected output:

![Hardhat Test](../static/shimmer-hardhat-test.png 'Hardhat Test')

## Deploy Your Contract on ShimmerEVM

Run this command in root of the project directory:

```sh
npx hardhat run scripts/deploy.js --network shimmerevm-testnet
```

The contract will be deployed on ShimmerEVM Testnet, and you can check the deployment status here on the [explorer](https://explorer.evm.testnet.shimmer.network/).

If you want to further verify your contract, add the following to your `hardhat.config.js`:

```js
etherscan: {
  customChains: [
      {
          network: "shimmerevm-testnet",
          chainId: 1071,
          apiKey: "ABCDE12345ABCDE12345ABCDE123456789",
          urls: {
              apiURL: "https://api.evm.testnet.shimmer.network/",
              browserURL: "https://explorer.evm.testnet.shimmer.network/"
          }
      }
  ]
}
```

Then you can verify by running:

```sh
npx hardhat verify --network shimmerevm-testnet <address> <unlock time>
```

And Voila! You've successfully deployed your first Hardhat Smart Contract on ShimmerEVM and verified it on explorer.
