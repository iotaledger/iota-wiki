---
id: messages
title: Messages
description: This topic explores messages, models, and payloads that encompass the transfer of data within the Tangle.
---

# Messages

A message is an object that nodes gossip around in the network. It always references one to eight other messages, which are known as **parents**. It is stored as a vertex on the Tangle data structure maintained by the nodes.

Messages can contain payloads. Some of them are core payloads that are processed by all nodes as part of the core protocol. Others are community payloads that build up new functionalities on top of the Tangle. And some payloads have other nested payloads embedded inside. So, the parsing of the message is done layer by layer, to ensure embedded payloads also have a correct syntax structure.

## UTXO

Previously, the IOTA protocol used transactions (which were vertices in the Tangle), where each transaction defined either an input or an output. A grouping of those input and output transaction vertices made up a bundle that transferred the given values as an atomic unit. But this approach was seen as too time-consuming. So, we adopted a new transaction structure called the **unspent transaction outputs **(UTXO)**.

The UTXO model defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions. In this model, transactions specify the outputs of previous transactions as inputs, which are consumed to create new outputs. A transaction must consume the entirety of the specified inputs.

![utxo-model](/img/learn/about-iota/utxo.png)

So, the UTXO is a part of a larger, self-contained, and flexible message structure known as a **payload**. This approach is helps enable a self-contained message structure defining the data of the entire transfer as a payload to be embedded into a message.

## Message Payloads

### Transaction Payload

A transaction payload (defined in [TIP-0020](https://github.com/lzpap/tips/blob/tx-updates/tips/TIP-0020/tip-0020.md)) is made up of two parts:

1. The Transaction Essence part, which contains the inputs, outputs, and an optional embedded payload.
2. The Unlock Blocks, which unlocks the Transaction Essence's inputs. In case the unlock block contains a signature, it signs the entire Transaction Essence part.

In general, all parts of a transaction payload begin with a byte describing the type of a given part. This helps keep the flexibility of introducing new types or versions of the given part in the future.

And, as mentioned above, the payload part of a Transaction Essence can hold an optional payload. This payload does not affect the validity of the Transaction Essence. If the transaction is not valid, then the payload must also be discarded.

### Tagged Data Payload

The concept of the payload (defined in [TIP-0023](https://github.com/Wollac/protocol-rfcs/blob/tagged-data/tips/TIP-0023/tip-0023.md)) allows for the addition of a tag to the encapsulating message, as well as some arbitrary data. Certain nodes or data indexing applications may expose an application programming interface that enables the querying of messages by the tag. Tagged data payloads may also be contained within a transaction payload.

### Milestone Payload

A milestone payload (defined in [TIP-0029](https://github.com/iotaledger/tips/blob/milestone-with-signature-blocks/tips/TIP-0029/tip-0029.md)) contains the Milestone Essence, which consists of the actual milestone information (like its index number or position in the Tangle), which is signed using the Ed25519 signature scheme. It uses keys of 32 bytes, while the generated signatures are 64 bytes.

To increase the security of the design, a milestone can (optionally) be independently signed by multiple keys at once. These keys should be operated by detached signature provider services running on independent infrastructure elements. This assists in mitigating the risk of an attacker having access to all the key material necessary for forging milestones.

Additionally, a key rotation policy can also be enforced by limiting key validity to certain milestone intervals.

### Conflict

Additionally, if messages conflict, milestones can confirm them by enforcing deterministic ordering by applying only the first message that will not violate the ledger state; this is accomplished by using the [White Flag](https://govern.iota.org/t/conflict-white-flag-mitigate-conflict-spamming-by-ignoring-conflicts/233) feature.

## Validation

Finally, a message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 \* 1024 bytes).
2. When parsing the message is complete, there should not be any trailing bytes left that were not parsed.
3. If the payload type is in the core payload range (0-127) and the node is familiar with it, or if it is above this range.
4. If the Message Proof of Work Hash will contain at least the number of trailing 0 trits the node defines as required.
5. Parents' length must be between one and eight.
