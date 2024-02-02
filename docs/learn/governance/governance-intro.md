---
description: An Overview and Introduction to the Governance of Shimmer and IOTA
image: /img/learn/governance/iota_governance.png
tags:
  - Introduction
  - Shimmer
  - IOTA
  - Governance
  - DAO
---

# Governance

The IOTA and Shimmer community, supported by the IOTA Foundation, has developed a Governance system.

## The Fundamentals of Governance in Shimmer and IOTA

**1. Open discussions in the Discord** Fostered by a group of community members who regularly discuss and meet publicly to progress and develop Governance systems and tools for the IOTA Community. You can participate in this activity in The [#Governance-Discussions](https://discord.com/channels/397872799483428865/839927402242637834) channels (make sure to activate the Governance role in the IOTA/Shimmer Discord) and participate in the [weekly meetings](https://youtube.com/playlist?list=PL5joP0FyJQU4eKPWfQWradNVjMIPq86ID) every Thursday at 4 pm CET. Every Community member is welcome and invited to join this important work.

**2. The official IOTA/Shimmer [Governance Forum](https://govern.iota.org)**is the place for specific proposal discussions. It is the first stage of reaching community consensus on proposed changes through soft consensus polling in the forum.

**3. Fully utilized decentralized and immutable On-Chain Governance [voting functionality](./governance-tech.md)** integrated into the [Firefly Wallet](https://firefly.iota.org/) and the [Hornet Nodes](/hornet/2.0/welcome). This allows every Token holder to make decisions in the network based on proposals passed through the forum's governance process. Voting is a protocol feature of L1, so no Smart Contracts are needed for this type of voting.

Governance processes are specified in the **[Shimmer Governance Framework](./the-shimmer-governance-framework.md)**. This framework has been developed by the Community Governance working group in many months of discussions and is the foundational building block of how Governance in SMR and IOTA works.
It mainly defines:

- Who are the stakeholders, and what are their roles in Governance processes?
- Where do proposal discussions occur, how do they need to be structured, which rules to follow, and how do they move through the three staged Governance processes to come to a final and binding decision?
- What is the scope of Governance in the SMR and IOTA network?
- How and when do Polls and Votes occur, and which rules apply to those decisions?

## Summary of the Governance processes

### The 3 Phases of Governance

#### Phase 1

This is an open discussion phase in the [Governance forum](https://govern.iota.org/c/governance-proposals/shimmer-iota-phase-1-discussions/52). Forum members can submit proposals, and the community can discuss them and request changes and additions. It can move to the next phase if it finds enough support in Phase 1, signaled through likes or votes on the proposal.

#### Phase 2

In this [Phase, the "Temperature check"](https://govern.iota.org/c/governance-proposals/phase-2-temperature-check/53), the proposal in the forum has reached its final form. It follows a specific template that requests to lay out reasoning and exact implementation specifications for the proposed change. During a one-week forum poll, the active forum members can decide if the proposal should move to the final phase, where it will be presented to the Community of Token Holders in an On-Chain Governance vote.

#### Phase 3

The Proposal will be uploaded to _nodes_ in the IOTA or Shimmer network and displayed in the respective [Firefly Wallet](https://firefly.iota.org). Token holders can vote with SMR or IOTA tokens to accept or decline the proposal.

### The On-Chain voting functionality

This feature consists of 2 components:

#### The Hornet - INX participation Plugin

- This feature can be activated as a [plugin](/hornet/2.0/inx-plugins/participation/welcome) in every Hornet node and enables node operators to participate in the decentralized counting and verification of on-chain Governance votes.
  - Node operators can add proposals that are due for an on-chain vote through an easy interface by uploading the unique proposal ID to their node.
  - The counting of votes is based on a time-based accumulation. For each _milestone_ (every 5 seconds) that a node finds a vote on a _UTXO_ Output, the SMR/IOTA tokens sitting on that output and the vote statement (proposal ID, question, and answer) are registered by the nodes and added to the count for that output in an internal database. This leads to a time-based growth of cast votes, meaning the longer a voter participates with tokens in a vote, the more votes are counted for the voter.
  - Node operators can always access this counting data and verify the correct counting of votes by comparing their count to other node operators' counts.

#### The Firefly Governance function

- The Firefly Wallet includes a Governance Dashboard. In this Dashboard, all On-Chain Voting activities are managed, and users can:
  - Participate in ongoing votes on official proposals that followed the Governance process laid out in the Shimmer Governance Framework
  - Register custom proposals that may be initiated by individual projects and communities but do not fall under the official Governance process and vote on these custom proposals.

**Voting in Firefly works like this:**

- For every Wallet of a Firefly profile, the user can define how many tokens should participate in Governance decisions. This amount of tokens creates _Voting Power_.
- To use this Voting Power, Firefly moves those tokens to a new output and locks them to participate in Governance votes. So, the tokens cannot be used to be spent on different things unless the user unlocks them again by decreasing the voting power, which frees those tokens.
- Once the Firefly Wallet recognizes that a new proposal is present in the nodes it is connected to, it displays this proposal in the Governance Dashboard
  - **A Proposal passes through four different phases**:
    - **Announcement:** The proposal has been uploaded to the node, and Firefly has seen the proposal. The voter is not yet able to participate in voting because voting starts in the future
    - **Voting open:** The user can vote on the proposal. Votes are now only registered, but counting votes has yet to start. In this phase, voters are free to change their vote without directly influencing the following count of their votes.
    - **Counting:** All participating Nodes actively count and accumulate votes on this proposal. The longer a user keeps its tokens actively voting on this proposal. The more votes will be counted for the user. Users can change their voting power and opinions during the counting phase. Still, this change only influences the future count from the time of the change and does not influence the already counted votes of a user on this proposal.
    - **Ended:** The Proposal counting is over, and the final vote result is displayed.

A detailed technical description of this voting functionality can be found in the [Governance - tech](./governance-tech.md) section of the Wiki.

A detailed description of how to participate in Governance votes can be found in the [Firefly Governance Guide](./firefly-governance-guide.md)

### Governance Resources

- [IOTA/Shimmer Governance Forum](https://govern.iota.org) where all official proposals are discussed.
- [Shimmer Governance Guide](https://govern.iota.org/t/read-first-shimmer-governance-guide/1406) A short introduction to using the Governance forum and creating proposals.
- [Firefly Handbook](https://iotaledger.GitHub.io/firefly/specifications/governance/) A short definition and explainer of the Firefly Governance functions
- [YouTube Playlist](https://youtube.com/playlist?list=PL5joP0FyJQU4eKPWfQWradNVjMIPq86ID) with recording of all Governance meetings.
- [Meeting minutes](https://www.tangletreasury.org/governance-and-treasury-minutes) of all governance meetings collected on a community-driven website.
- [Shimmer Governance](https://twitter.com/ShimmerGov) Twitter account of the Governance working group.
- [Shimmer Governance](https://GitHub.com/iota-community/Shimmer-Governance) GitHub Repo for the Shimmer Governance system.
- [INX Participation](https://GitHub.com/iotaledger/inx-participation) GitHub Repo for the INX Participation Node Plugin that counts the votes.
- [Community Governance](https://GitHub.com/iota-community/Community-Governance) GitHub Repo for the initial IOTA Governance system and the first vote.
