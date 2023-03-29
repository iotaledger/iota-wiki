# Create a simple Voting dApp on ShimmerEVM

## Goal

This tutorial will guide you as you write and deploy a voting dApp on ShimmerEVM. You can vote on a few options and view the results; all data will be stored on-chain. Please note this is meant only for learning purposes.

:::

## Goal
This tutorial will teach you how to write a voting DApp and deploy it on ShimmerEVM.

## Expected outcome
By the end of this tutorial, you will be able to cast your vote from several available options and view the results, with all the data stored securely on the blockchain.

_Please note that this tutorial is solely intended for educational purposes._

## Requirements
You need the following before you get started:
- Network: A network where you will deploy and interact with the smart contract. In this case, it’s the ShimmerEVM.
- Wallet: You will need an interface to connect to the network, verify your identity, and pay the transaction fees. You can use any wallet you choose; this tutorial will use Metamask. Any wallet of your choice will work if you are used to some other wallet.
- Smart Contract: You will need a smart contract to deploy on-chain to handle all state records on-chain and any changes made to them.
- App: Finally, the app, which you’ll have after we finish this tutorial.
- Code Editor or IDE: Have an IDE or any code editor ready to start working.

## Prerequisites
- [ShimmerEVM](https://wiki.iota.org/shimmer/smart-contracts/guide/evm/introduction/)
- [Metamask](https://metamask.io/)
- [Ethers](https://docs.ethers.org/v5/)


## Project Setup
This tutorial will use a vanilla js project. However, most of it should still work on any js framework like react, vue, sveltekit, and so on.


### Smart Contracts in Solidity
We will use a simple Voting Smart Contract, calling it `Voting.sol`.
Let's start with writing it.

First thing we need is a `struct` called `Voter`:
```solidity!
struct Voter {
    uint weight; // weight is accumulated by delegation
    bool voted;  // if true, that person already voted
    address delegate; // person delegated to
    uint vote;   // index of the voted proposal
}
```
And what you need is to create a map with address to struct for voters:
```solidity!
mapping(address => Voter) public voters;
```

Once we've a voter, we'll need `Proposal` to nominate who to vote on:
```solidity!
struct Proposal {
    bytes32 name;   // short name (up to 32 bytes)
    uint voteCount; // number of accumulated votes
}
```
If you can, limit the length to a certain number of bytes. You must cover gas fees for any data you store on the chain if you use one of bytes1 to bytes32 as they are much cheaper. In other words, if you use short names, your gas fees will be lower.

Next, you need to add a vote function, which will register the vote of every user toward a proposal. Let’s start with the following:
```solidity!
function vote(uint proposal) public {
    Voter storage sender = voters[msg.sender];
}
```

You need to check if the voter is allowed to vote, add the following:
```solidity!
require(sender.weight != 0, "Has no right to vote");
```

And you should also add the following conditional to check if the voter has already voted:
```solidity!
require(!sender.voted, "Already voted.");
```

If everything looks okay, register the vote:
```solidity!
sender.voted = true;
sender.vote = proposal;
proposals[proposal].voteCount += sender.weight;
```

You will also need a function to let the results be known, so add a function, `winningProposal` which will return the index of the winning proposal:
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

At this point, the basic functionalities of the smart contract are taken care of. However, you’d also need a few more functionalities to extend further, such as delegating votes and giving someone else the right to vote. I have added those in the final code, so feel free to keep or remove them as you see fit.
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

Now, you can deploy the above smart contract using Remix, Hardhat, or any tool you prefer. Here’s a tutorial to follow to deploy to [ShimmerEVM using Remix](#todo).

Once you’ve deployed your contract, you can check the Explorer to see if it’s confirmed. You can also verify your contract on the Explorer by going to your [contract page](https://explorer.evm.testnet.shimmer.network/address/0x1154ACEc3b5Bc2A275f51A05400A8592465566fb).

:::info
Please make a note of the ABI while you’re compiling it. You will need it later.
:::

## Front-end
Now, let's start writing our front-end app.
Most of the front end is design work which is not the focus of this tutorial, so let’s jump to the js part. You can use [this project](https://github.com/anistark/smart-contracts-demo/tree/main/voting) if you’re looking for a ready design to get started.

We will also use [Metamask](https://wiki.iota.org/shimmer/smart-contracts/guide/evm/tooling/#metamask) in this section, so please ensure you have installed and logged in to Metamask.
The first thing you need to do is check that Metamask is accessible from your dApp:
```javascript!
const provider = new ethers.providers.Web3Provider(window.ethereum);
```
If you're able to access `provider`, it's all good. Let's proceed.

:::info
Learn more about what else you can do with ethers from the [ethers docs](https://docs.ethers.org/v5/getting-started/).
:::

You need to create a `signer` which will be used to sign transactions from your dApp:
```javascript!
const signer = provider.getSigner();
```

Create a contract client which will represent the contract and help with calling functions of it using `CONTRACT_ADDRESS` and `CONTRACT_ABI`, which you should have from the above steps:

```javascript!
const contractClient = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
);
```
Use the `contractClient` for all fetch methods, such as fetching proposals:
`await contractClient.getProposals(i)`.
However, to use state-changing methods, you need a `contractSigner` instance, like:
```javascript!
const contractSigner = contractClient.connect(signer);
```

Now, for instance, to vote, you can assign the action to a button and simply call:

```javascript!
let tx = contractSigner.vote(i);
```
where `i` is the index of the proposal you want to vote for.

## Result
If you followed everything above, it should look something like this:
![Voting Demo](../static/voting-dapp.jpg "Voting dApp UI")

Feel free to make changes to the design to suit your needs.