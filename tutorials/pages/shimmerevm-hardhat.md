# Deploy a Smart Contract Using Hardhat

:::info
Hardhat is an Ethereum development environment that provides an easy way to deploy smart contracts, run tests and debug Solidity code locally.

In this tutorial, you will learn how to set up Hardhat and use it to build, test and deploy a simple smart contract on ShimmerEVM.
:::


## Pre-requisites

- [Node.js Stable Version](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

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

:::note
If you're comfortable in typescript, feel free to select. There's not much difference for this project anyway. However, some syntax might differ.
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
### Checking the contract

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

### Setting up the contract

- Go to `hardhat.config.js`
- Update the `hardhat-config` with shimmer network details as shown below:

```js
etherscan: {
    customChains: [
        {
            network: "shimmerevm-testnet",
            chainId: 1070,
            urls: {
                apiURL: "https://explorer.evm.testnet.shimmer.network/api",
                browserURL: "https://explorer.evm.testnet.shimmer.network/"
            }
        }
    ]
}
```

- Create `.env` file in the root to store your network id and jsonrpc in-case you'd like to keep it private.

:::note

Note that the file above requires DOTENV, for managing environment variables and also ethers and etherscan. Make sure to install all those packages. 

Find more instructions on how to use DOTENV on [<ins>this page</ins>](https://www.npmjs.com/package/dotenv).

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

### Testing the Contract

To run tests with Hardhat, you just need to type the following:

```sh
npx hardhat test
```

And this is an expected output:

![Hardhat Test](../static/shimmer-hardhat-test.png 'Hardhat Test')

### Deploying on ShimmerEVM

Run this command in root of the project directory:

```sh
npx hardhat run scripts/deploy.js --network shimmerevm-testnet
```

The contract will be deployed on ShimmerEVM Testnet, and you can check the deployment status here: [<explorer link>](https://explorer.evm.testnet.shimmer.network/)

And Voila! You've successfully deployed your first Hardhat Smart Contract on ShimmerEVM.
