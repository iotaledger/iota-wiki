---
title: Governance Voting Explained
description: A technical description of the Governance functionality in IOTA & Shimmer
image: /img/learn/governance/vote-graphic04.png
tags:
  - Documentation
  - Firefly
  - Hornet INX
  - Voting
  - Shimmer
  - IOTA
  - Governance
---

On-chain governance is essential for any decentralized _DLT_. The ability to make decisions through voting functionalities executed on the Blockchain / _DAG_ removes a centralization point and gives token holders the power to make their own decisions. IOTA and Shimmer token holders can now engage in governance with the Firefly Wallet.
With the support of the IOTA Foundation, the community has developed a highly flexible and secure system for casting votes directly on the Tangle
through the Firefly Wallet while votes are counted in the network’s Hornet nodes.

## Voting Phase

The Voting phase of a governance vote is divided into four stages:

- **1. Proposal announcement:** Upon publishing the voting ballot to the [GitHub repository](https://github.com/iota-community/governance-participation-events), [Hornet](/hornet/welcome) node operators can activate the voting ballot in their nodes’ Participation Plugin to be prepared to count any votes that are cast.
- **2. Voting Open:** The Voting Open stage lasts seven days and starts when a predefined milestone in the network is reached. After the network has passed this milestone, users can cast, change, revoke, or redo the vote using the governance functionality of the Firefly wallet. It's important to note that opinion changes during this timeframe will not affect the final vote count. Ideally, voters should vote before the next stage begins to ensure the highest possible vote count.
- **3. Counting Start:** This directly follows the Voting Open stage. The node software counts the user's vote, which gains weight with increasing holding time at every milestone passed (a milestone is issued every five seconds). If the voter holds their vote for the predefined number of milestones, they will reach 100% of the possible votes related to their _voting power_ (i.e., the number of tokens they have used in the vote). If users change their vote in this stage, the participation plugin updates these changes from the time when they were made. However, the previously counted votes are still valid and do not change, even if the voter’s opinion or voting power changes (examples are provided below for clarification).
- **4. Counting Stops:** The accumulation of votes ends. All nodes will now be able to produce and verify the final result of the vote.

### Voting Details

The voting mechanism utilizes the protocol's ability to issue value transactions with [attached metadata](/introduction/stardust/explanations/what_is_stardust/output_features#metadata).
To participate in voting, the user must define the amount of SMR tokens that should be used for governance votes, which represents their voting power,
for each wallet associated with their Firefly profile.
The tokens that represent the voting power will be sent to a new output ([UTXO](/introduction/stardust/explanations/what_is_stardust/rethink_utxo)) at the same address (i.e., the users send the tokens to themselves) using the
`Manage Voting Power` function in the Governance section of Firefly.

This Governance Output to which the tokens are allocated will now be used for all governance votes of this wallet.
The voter can decide to vote on all kinds of governance questions with the allocated voting weight.
Whenever a vote is cast, it uses the tokens stored in the Governance Output for a transaction. To reiterate, the user sends the tokens to themselves, to the same output, using the same address.

During this transaction, metadata that includes the ballot event ID, question ID, and answer will be attached to the UTXO where the tokens reside.
This immutably writes the metadata onto the UTXOs of this address in the Tangle. So, after the voting transaction is complete,
the tokens will still reside at the same address as before, but now they will have attached metadata representing the voter's opinion for the referendum.

:::tip Storage Deposits

If you plan to send, mint, or receive tokens, native assets, or NFTs during the Voting period, you may set aside a small amount of tokens from the vote to cover the required storage deposit for those transfers. You can always free some tokens from the governance votes by simply using the Manage Voting Power function of the Firefly Wallet.

:::

#### Counting votes

Because every node in the network knows the status of every UTXO in the Tangle, they can observe and register changes to these UTXOs.
Once a vote transaction is issued and confirmed, the UTXO will hold a piece of attached metadata information.
Hornet nodes with activated [INX participation plugin](/hornet/2.0/inx-plugins/participation/welcome) monitor the ledger for UTXOs that contain this specific metadata.
They count all UTXOs with this metadata for every new milestone in the Tangle and create a database for the counted votes of this event.

This database includes the following information for every milestone:

- Every UTXO ID containing the vote's event ID.
- The voter’s opinion (question ID and answer) that is written to this UTXO.
- The number of tokens that are stored on the UTXO at a milestone.

### Voting Results

The result will be produced and verified decentralized through every node participating in the counting.
Each node can make the current and final result of its counting publicly available through an API endpoint.
After the Counting Start phase begins (the milestone in the Tangle that has been designated as the starting point),
the number of votes will be tallied for every milestone where tokens are recognized on a UTXO with the attached voting metadata.
The community has determined that 1000 Glow (0.001 SMR) represents one vote per milestone in Shimmer and 1000 Micros (0.001 IOTA) represents one vote per milestone in IOTA.

#### Examples for Shimmer (IOTA function is identical):
A vote using an amount of 1 SMR for an option will be counted as follows:

- Since 1000 Glow represents one vote, a vote with one million Glow (equal to 1 SMR) will result in 1000 votes per milestone.
- The counting occurs at every milestone of the “counting period, meaning that:
- 1000 votes are counted at the first milestone.
- 1000 votes are counted at the second milestone.
- 1000 votes are counted at the third milestone, and so on.

Let's assume that the counting period lasts for 1,500 milestones:
The method described above updates the nodes' voting database every time a new milestone is reached. For instance, if a voter uses 1 SMR token in a vote,
after 10 milestones, they would have gained 10,000 votes.
After 100 milestones, the accumulated votes would be 100,000; after 1,500 milestones, the total counted votes would reach 1.5 million.

![Vote counting example](/img/learn/governance/vote_graphic01.png)

This counting mechanism also means that the token's Vote vote-holding time greatly influences the result.
Votes gain “weight” based on the time they are kept on an address during the counting phase.

This is a crucial security feature of the voting mechanism that rewards long-term token holders and punishes voting speculators or attempts to buy votes.
This is achieved by requiring voters to lock their capital over a longer period and making any attempt to buy votes a speculative risk
due to the potential volatility of the Token price during the seven-day counting phase.

![Hornet vote counting](/img/learn/governance/vote_graphic02.png)

#### Voting weight examples

Let's look at some examples of voting weight based on different variables.
If the counting phase is seven days and a user has a _balance_of 100 SMR in their Shimmer Firefly wallet that they allocate as voting power:

- Using the tokens to vote for the full seven days of the counting phase leads to 100% of the possible votes being attributed.
- Holding the tokens for only six consecutive days out of a total of seven days accumulates only around 85.7% (6/7) of the maximum possible votes.
- By starting to vote after the counting phase has already begun (for example, on day two out of seven days total) and then keep voting for that opinion, the voter gains around 71.4% (5/7) of the possible votes added through their allocated tokens.
- Starting the vote at the beginning of the counting phase with a vote for option A, holding this option for three days but then changing to option B and holding it for the remaining four days results in the following outcome:
- 100 SMR are allocated for three days to option A, which means that around 42.8% (3/7) of the users' maximum achievable votes are counted for option A.
- Changing the vote for the remaining four days to option B results in the remaining 57.2% (5/7) of the users' available votes being counted towards option B.

![Voting weight examples](/img/learn/governance/vote_graphic03.png)

This solution ensures that voters always have control over their tokens. The tokens never leave the user’s wallet and are never locked or unusable, and owners can remove, send, revoke, or change their opinion on them at any time, even during the counting phase, following familiar Firefly _staking_ rules.

#### Creating and adding new governance events

Our voting system builds upon the principles designed for IOTA's [first governance vote in 2022](https://blog.iota.org/iota-community-treasury-vote/), with key improvements for a more decentralized implementation.
In contrast to the earlier voting system developed, the current version does not rely on the IOTA Foundation to add governance events to the Firefly wallet. Every community member can:

- Create a governance event following the [specifications for participation events](https://github.com/iota-community/treasury/blob/main/specifications/hornet-participation-plugin.md)
- Add this governance event to a Hornet node with the [INX Participation Plugin](/hornet/2.0/inx-plugins/participation/welcome)
- Add this governance event to the Firefly wallet by connecting the Wallet to a node that carries this event and use the [“add event”](./firefly-governance-guide.md#6-adding-custom-community-proposals-to-firefly) function in the Governance section
- Vote on this event with tokens

Community members, projects, or other ecosystem participants can create governance events and invite the token holders to participate in such votes.

#### Decentralized and community-driven

To summarize, voting in IOTA is:

- Free and feeless: A vote is a transaction in the Tangle without fees.
- Decentralized: No one gatekeeps the creation and implementation of governance votes.
- Secure: Just like the IOTA ledger and every IOTA transaction.
- Flexible: Users have complete control over their funds.
- Voluntary: No one is forced to vote.
