# Create a Simple Voting dApp on ShimmerEVM

## Goal

This tutorial will guide you as you write and deploy a voting dApp on ShimmerEVM. You can vote on a few options and view the results; all data will be stored on-chain. Please note **this tutorial is meant for learning purposes only**.

## Expected Outcome

By the end of this tutorial, you will be able to cast your vote from several available options and view the results. All the data is stored securely on the blockchain.

## Requirements

You need the following before you get started:

- **Network**: A network where you will deploy and interact with the smart contract. In this case, the ShimmerEVM.
- **Wallet**: You will need an interface to connect to the network, verify your identity, and pay the transaction fees. You can use any wallet you choose; this tutorial will use [Metamask](https://metamask.io/), but you can use any wallet you are comfortable with.
- **Smart Contract**: You will need a smart contract to deploy on-chain to handle all state records on-chain and any changes made to them.
- **Client Library**: This tutorial will use [Ethers](https://docs.ethers.org/v5/). But you can use any other library that you feel more comfortable in.

## Project Setup

This tutorial will use a vanilla js project. However, most of it should still work on any js framework like react, vue, sveltekit, etc.

## Create a Smart Contracts in Solidity

This tutorial will use a simple Voting Smart Contract, that will be called `Voting.sol`.

#### Create and map the structs

The first thing you need is a `struct` called `Voter`:

```solidity!
struct Voter {
    uint weight; // weight is accumulated by delegation
    bool voted;  // if true, that person already voted
    address delegate; // person delegated to
    uint vote;   // index of the voted proposal
}
```

and also map it to address of voters:

```solidity!
mapping(address => Voter) public voters;
```

Once you have created the `Voter`, you will need `Proposal` `struct` to nominate who to vote on:

```solidity!
struct Proposal {
    bytes32 name;   // short name (up to 32 bytes)
    uint voteCount; // number of accumulated votes
}
```

:::tip Gas Fees

If you can, limit the length to a certain number of bytes. You must cover gas fees for any data you store on the chain if you use one of bytes1 to bytes32 as they are much cheaper. In other words, if you use short names, your gas fees will be lower.

:::

Next, you need to add a vote function, which will register the vote of every user toward a proposal. Let's start with the following:

```solidity!
function vote(uint proposal) public {
    Voter storage sender = voters[msg.sender];
}
```

As you need to check if the voter is allowed to vote, you should add the following:

```solidity!
function vote(uint proposal) public {
    Voter storage sender = voters[msg.sender];
    // highlight-next-line
    require(sender.weight != 0, "Has no right to vote");
}
```

You also need to check if the voter has already voted, so you should also add the following conditional:

```solidity!
function vote(uint proposal) public {
    Voter storage sender = voters[msg.sender];
    require(sender.weight != 0, "Has no right to vote");
    require(!sender.voted, "Already voted.");
    // highlight-start
    sender.voted = true;
    sender.vote = proposal;
    proposals[proposal].voteCount += sender.weight;
    // highlight-end
}
```

If everything looks okay, register the vote:

```solidity!
sender.voted = true;
sender.vote = proposal;
proposals[proposal].voteCount += sender.weight;
```

#### Create functions to count the votes

You will also need a function to count the votes and let the results be known. To do so, add a function called `winningProposal` which will return the index of the winning proposal:

```solidity!
function winningProposal() public view returns (uint winningProposal_) {
    uint winningVoteCount = 0;
    for (uint p = 0; p < proposals.length; p++) {
        if (proposals[p].voteCount > winningVoteCount) {
            winningVoteCount = proposals[p].voteCount;
            winningProposal_ = p;
        }
    }
}
```

To make things a little more human readable, add a function `winnerName` that returns the name of the winner:

```solidity!
function winnerName() public view returns (bytes32 winnerName_) {
    winnerName_ = proposals[winningProposal()].name;
}
```

At this point, the basic functionalities of the smart contract are taken care of. However, you could also need a few more functionalities, such as delegating votes and giving someone else the right to vote. I have added those in the final code, so feel free to keep or remove them as you see fit.

Here's the complete smart contract code:

```solidity!=
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Voting
 * @dev Implements voting process along with vote delegation
 */
contract Voting {

    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }

    struct Proposal {
        // If you can limit the length to a certain number of bytes,
        // always use one of bytes1 to bytes32 because they are much cheaper
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;

    mapping(address => Voter) public voters;

    Proposal[] public proposals;

    /**
     * @dev Create a new ballot to choose one of 'proposalNames'.
     * @param proposalNames names of proposals
     * ["0x63616e6469646174653100000000000000000000000000000000000000000000","0x6332000000000000000000000000000000000000000000000000000000000000","0x6333000000000000000000000000000000000000000000000000000000000000"]
     */
    constructor(bytes32[] memory proposalNames) {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        for (uint i = 0; i < proposalNames.length; i++) {
            // 'Proposal({...})' creates a temporary
            // Proposal object and 'proposals.push(...)'
            // appends it to the end of 'proposals'.
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    /**
     * @dev Give 'voter' the right to vote on this ballot. May only be called by 'chairperson'.
     * @param voter address of voter
     */
    function giveRightToVote(address voter) public {
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(
            !voters[voter].voted,
            "The voter already voted."
        );
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    /**
     * @dev Delegate your vote to the voter 'to'.
     * @param to address to which vote is delegated
     */
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted.");
        require(to != msg.sender, "Self-delegation is disallowed.");

        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender, "Found loop in delegation.");
        }
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate_ = voters[to];
        if (delegate_.voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate_.weight += sender.weight;
        }
    }

    /**
     * @dev Give your vote (including votes delegated to you) to proposal 'proposals[proposal].name'.
     * @param proposal index of proposal in the proposals array
     */
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(sender.weight != 0, "Has no right to vote");
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal;

        // If 'proposal' is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        proposals[proposal].voteCount += sender.weight;
    }

    /**
     * @dev Computes the winning proposal taking all previous votes into account.
     * @return winningProposal_ index of winning proposal in the proposals array
     */
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    /**
     * @dev Calls winningProposal() function to get the index of the winner contained in the proposals array and then
     * @return winnerName_ the name of the winner
     */
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }
}
```

Now, you can deploy the above smart contract using Remix, Hardhat, or any tool you prefer. Here's a tutorial to follow to deploy to [ShimmerEVM using Remix](/tutorials/shimmerevm-setup).

Once you've deployed your contract, you can check the [Explorer](https://explorer.evm.testnet.shimmer.network) to see if it's confirmed. You can verify your contract on the Explorer by going to your [contract page](https://explorer.evm.testnet.shimmer.network/address/0x1154ACEc3b5Bc2A275f51A05400A8592465566fb).

:::info ABI

Please make a note of the ABI while you're compiling it. You will need it later.

:::

## Front-end

Most of the front end is design work which is not the focus of this tutorial, so let's jump to the js part. You can use [this project](https://github.com/anistark/smart-contracts-demo/tree/main/voting) if you're looking for a ready design to get started. Feel free to make changes to the design to suit your needs.

We will also use [Metamask](/isc/getting-started/tools) in this section, so please ensure you have installed and logged in to Metamask.
The first thing you need to do is check that Metamask is accessible from your dApp:

```javascript!
const provider = new ethers.providers.Web3Provider(window.ethereum);
```

If you can access `provider`, it's all good.

:::info Ethers

Learn more about what else you can do with ethers from the [ethers docs](https://docs.ethers.org/v5/getting-started/).

:::

You need to create a `signer` which will be used to sign transactions from your dApp:

```javascript!
const signer = provider.getSigner();
```

Create a contract client which will represent the contract and help with calling the contract's functions using `CONTRACT_ADDRESS` and `CONTRACT_ABI`, which you should have from the above steps:

```javascript!
const contractClient = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
);
```

Use the `contractClient` for all fetch methods, such as fetching proposals:

```js
await contractClient.getProposals(i);
```

If you want to use state-changing methods, you need to create a `contractSigner` instance:

```javascript!
const contractSigner = contractClient.connect(signer);
```

Now you can assign the `contractSigner.vote` action to a button and call:

```javascript!
let tx = contractSigner.vote(i);
```

- Where `i` is the index of the proposal you want to vote for.

## Result

If you followed everything above, it should look something like this:
![Voting Demo](/img/tutorials/voting-dapp.jpg 'Voting dApp UI')
