---
description: An insightful overview of the consensus process in IOTA Smart Contracts, detailing the steps involved in updating the chain.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - consensus
  - validator committee
  - validators
  - validator nodes
  - explanation
  - state anchor
---

# Consensus

## TL;DR;

- [Introduction](#introduction): IOTA's Smart Contract protocol requires consensus among validators, with more than
  two-thirds agreement needed for state changes.
- [1. Formulate the Batch Proposals](#1-formulate-the-batch-proposals): Validator nodes begin the consensus process with
  batch proposals, requiring mutual agreement to ensure uniform inputs and results.
- [2. Agree On the Batch](#2-agree-on-the-batch): A finalized batch is created by filtering and ordering requests from
  all proposals, safeguarding against manipulation.
- [3. Establish the State Anchor](#3-establish-the-state-anchor): Validators independently execute smart contract
  requests to create a new block, followed by crafting a state anchor for Layer 1 transaction validation.

## Introduction

In IOTA's Smart Contract protocol, updating the chain requires consensus
among [validator](chain-owners-validators-and-access-nodes.md) nodes. This means more than two-thirds of validators must
agree on any state change. This requirement is crucial for maintaining the chain's integrity and prevents any single
node from causing disruption.

Since smart contracts are deterministic, all honest nodes will yield identical results, provided they receive the same
input. However, variations in access points to the Tangle and the inherent randomness in receiving contract requests
can lead to different perspectives among nodes.

## 1. Formulate the Batch Proposals

The consensus process starts with each validator node presenting a batch proposal. This proposal includes a timestamp, a
list of pending requests, and the node's partial signature of its commitment to the current state. Nodes must
then mutually agree on a set of batch proposals to process. This agreement process ensures that a common subset of
proposals is selected, allowing nodes to work with identical inputs and, consequently, produce matching results.

## 2. Agree On the Batch

Transforming the selected batch proposals into a finalized batch involves counting and filtering requests from all
proposals. This method ensures uniformity in the order of requests. The combined partial signatures of all validators
create a full signature, which, through a pseudo-random function, determines the final sequence of requests. This step
is essential to guard against manipulation and predictability (shielding the system
from [MEV attacks](https://ethereum.org/en/developers/docs/mev/)).

## 3. Establish the State Anchor

Once the input is agreed upon, each validator independently executes the smart contract requests, leading to the
creation of a new block. Subsequently, each node constructs a state anchor - a Layer 1 transaction attesting to the
commitment to this new state. The state anchor, bearing a timestamp derived from all batch proposals, is signed by all
validators. This unified signature guarantees that any validator can publish the transaction to Layer 1. Although state
anchors can be published after every update, they are typically released every ten seconds to minimize the load on the
Tangle.

:::tip Dive Deeper

You can gain a deeper understanding of [consensus](/isc/explanations/consensus/) in
the [IOTA Smart Contracts](/isc/introduction) documentation.

:::