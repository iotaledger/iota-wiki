# Shimmer Governance

The Shimmer community, supported by the IOTA Foundation, has developed a Governance system for Shimmer.

## **The Main Features of Shimmer Governance**

**1. Open discussions in the Shimmer Discord** fostered by a group of community members that regularly discuss and meet publicly to progress and develop Governance systems and tools for the Shimmer Community. You can participate in this activity in The [#Governance-Discussions](https://discord.com/channels/397872799483428865/839927402242637834) channels (make sure to activate the Governance role in the IOTA/Shimmer Discord) and participate in the [weekly meetings](https://youtube.com/playlist?list=PL5joP0FyJQU4eKPWfQWradNVjMIPq86ID). Every Community member is welcome and invited to join this critical work.

**2. The official IOTA/Shimmer [Governance forum](https://govern.iota.org)**- Here is the place for specific discussions about proposals. It is the first stage of reaching community consensus on proposed changes through soft consensus polling in the forum.

**3. Fully utilized decentralized and immutable On-Chain Governance** voting functionality integrated into the Firefly Shimmer Wallet and the Hornet Nodes. This allows every SMR Token holder to make decisions in the SMR network based on proposals passed through the forum's governance process. It is a feature of L1, so no Smart Contracts are involved, and voters never lose control over their tokens.

Governance processes in SMR are defined in the **Shimmer Governance Framework**. This framework has been developed by the Community Governance working group in many months of discussions and is the foundational building block of how Governance in SMR works. 
It mainly defines:

- Who are the stakeholders and their roles in Governance processes.
- Where do proposal discussions take place, how do they need to be structured, which rules to follow and how do they move through the three staged Governance processes to come to a final and binding decision.
- What is the scope of Governance in the SMR network
- How and when do Polls and votes take place, and which rules apply to those decisions.

## **Summary of the Shimmer Governance processes**

### **The 3 Phases of Governance:**

#### **Phase 1:** 
This is an open discussion phase in the [Governance forum](https://govern.iota.org). Forum members can submit proposals, and the community can discuss it and request changes and additions. If it finds enough support in Phase 1 signaled through likes or votes on the proposal, it can move to 
#### **Phase 2:** 
In this Phase, the proposal has arrived in its final form. It follows a specific template that requests to lay out reasonings and exact implementation specifications for the proposed change. During a one-week forum-poll, the active forum members can decide if the proposal should move to the final phase where it will be presented to the Community of SMR Token Holders in an On-Chain Governance vote.
#### **Phase 3:** 
The Proposal will be uploaded to nodes in the network and displayed in the [Shimmer Firefly Wallet](https://firefly.iota.org), and Token holders can vote with SMR tokens to accept or decline the proposal.

### **The SMR On-Chain voting functionality:**

This feature consists of 2 components:
#### **The Hornet - INX participation Plugin**
- This feature can be activated in every [Hornet Shimmer node](https://wiki.iota.org/shimmer/hornet/welcome/) and enables every node operator to participate in the decentralized counting and verification of on-chain Governance votes.
    - Node operators can add proposals that are due for an on-chain vote through an easy interface by uploading the unique proposal ID to their node.
    - Counting of proposal votes is based on a time-based accumulation. Each milestone (every 5 seconds) that a vote is found on a UTXO Output, the SMR tokens sitting on that output, and the vote statement (proposal ID, question, and answer) are registered by the nodes and added to the count for that output in an internal database. This leads to a time-based growth of casted votes, meaning the longer a voter participates with SMR tokens in a vote, the more votes are counted for the voter.
    - Node operators are always able to access this counting data and verify the correct counting of votes by comparing their count to other node operators counts.

#### **The Firefly Governance function**
- The Shimmer Firefly Wallet includes a Governance Dashboard. In this Dashboard, all On-Chain Voting activities are managed, and users can:
    - Participate in ongoing votes on official proposals that followed the Governance process laid out in the Shimmer Governance Framework
    - Register custom proposals that may be initiated by individual projects and communities but do not fall under the official Governance process and vote on these custom proposals.
    
**Voting in Firefly Shimmer works like this:**
- For every Wallet of a Firefly profile, the user can define how many Shimmer tokens should participate in Governance decisions. This amount of tokens creates Voting Power. 
- To use this Voting Power, Firefly moves those tokens to a new output and locks them to participate in Governance votes. So the tokens cannot be used to be spent on different things unless the user unlocks them again by decreasing the voting power, which frees those tokens.
- Once the Firefly Wallet recognizes that a new proposal is present in the nodes it is connected to, it displays this proposal in the Governance Dashboard
     - **A Proposal passes through four different phases**:
          - **Announcement:** The proposal has been uploaded to the node, and Firefly has seen the proposal. The voter is not yet able to participate in voting because voting starts in the future
          - **Voting open:** The user can cast a vote on the proposal. Votes are now only registered, but counting votes has yet to start. In this phase, voters are free to change their vote without directly influencing the following count of their votes.
        - **Counting:** Now all participating Nodes are actively counting and accumulating votes on this proposal. The longer a user keeps its tokens actively voting on this proposal. The more votes will be counted for the user. Users can change their voting power and opinions during the counting phase. Still, this change only influences the future count from the time of the change and does not influence the already counted votes of a user on this proposal.
        - **Ended:** The Proposal counting is over, and the final vote result is displayed.


A detailed description on how to participate in Governance votes can be found in the [Firefly Shimmer Governance Guide](https://github.com/iota-community/Shimmer-Governance/blob/main/Shimmer%20Firefly%20Governance%20guide.md)

### Shimmer Governance Ressources:

- [IOTA/Shimmer Governance Forum](https://govern.iota.org) where all official proposals are discussed.
- [Shimmer Governance Guide](https://govern.iota.org/t/read-first-shimmer-governance-guide/1406) A short introduction how to use the Governance forum and how to create proposals.
- [Firefly Handbook](https://iotaledger.github.io/firefly/specifications/governance/) A short definition and explainer of the Firefly Governance functions
- [YouTube Playlist](https://youtube.com/playlist?list=PL5joP0FyJQU4eKPWfQWradNVjMIPq86ID) with recording of all Governance meetings.
- [Meeting minutes](https://www.shimmergov.community/governance-and-treasury-minutes) of all governance meetings collected on a community-driven website.
- [Shimmer Governance](https://twitter.com/ShimmerGov) Twitter account of the Governance working group.
- [Shimmer Governance](https://github.com/iota-community/Shimmer-Governance) Github Repo for the Shimmer Governance system.
- [INX Participation](https://github.com/iotaledger/inx-participation) Github Repo for the INX Participation Node Plugin that counts the votes.
- [Community Governance](https://github.com/iota-community/Community-Governance) Github Repo for the initial IOTA Governance system and first vote.
- [IOTA Treasury](https://iotatreasury.org/) Website developed for the first Governance vote in our Communities history, which explains the core features of the voting system.
