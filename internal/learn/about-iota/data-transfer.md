---
title: Data Transfer
description: A major use-case for the IOTA Technology is Data Transfer. Learn how it works.
---

# Data Transfer

IOTA offers the ability to transfer Data for free. The Data transfer is fast, immutable, unforgeable, and secure and is one of the core features of IOTA. This capability opens up a wide array of use cases that most other cryptocurrencies cannot serve in a way that IOTA does.

Clients, which can be wallets or applications, send and receive messages (data objects) through nodes in IOTA. Nodes are the entry and exit points for these messages, and those nodes communicate with each other and with the connected clients.

There are several types of messages implemented in IOTA. Some messages transfer value (the IOTA token or digital assets), while others transfer only pure data, and some message types can even contain both values and data. This flexible message structure enables the decentralized transport of data and value in a single message with the highest security grade and the total absence of fees. The network nodes take care of the secure distribution of all those messages in the Tangle.

## Data Usage

Many applications and use cases profit from this combination of free, secure, and fast data and value transport, which sees demand in many major industries. For reference, you can read more about [IOTA Data use cases here](https://www.iota.org/solutions/industries).

## What is an IOTA Message?

A message is an object consisting of information broadcast in the Tangle.

Every application that uses the protocol can issue these information objects to a node. The job of an IOTA node is to verify incoming messages and broadcast them through the network if they are considered valid and follow the standard specifications of the protocol.

If a node decides that a message is valid, it will send it to its direct neighbors using the gossip protocol. Every neighbor that receives the message transfers it again to its neighbors and so on. As a result, every other node in the network sees the message and has the same information and the same knowledge of the “state” of the network at a given time.

A message consists of basic information that defines the type and structure of the message, and it can also contain different payloads. A payload is an attachment that can include an IOTA transaction and many other kinds of data.

The IOTA protocol categorizes these information packages into different types and handles certain types differently than others. Therefore, every message sent to the network must contain a unique label as an identifier that describes what this message is and what should be done with it. Only if this information is stated correctly, will a node accept and process a message.

You can find a more detailed description of this process on protocol level in the [TIP-0024 (Tangle Message)](https://github.com/Wollac/protocol-rfcs/blob/tangle-message-data/tips/TIP-0024/tip-0024.md).

## Sending a Message in IOTA

So-called clients create messages. Those clients can be an IOTA wallet or any other application generating IOTA messages. The client sends those messages to an IOTA node to process them.

To ensure a message is valid and a node knows what to do with the message, the message label created by a client must provide several pieces of information for the node to be processed and enter the network.

### Message ID

The message ID is created as a unique cryptographic hash of the bytes contained in the message. It is created by the client (application) or wallet that issues the message.

### Protocol Version

This is an identification in which the IOTA protocol version of the message belongs. Nodes will only accept messages that identify themselves as one of the supported protocol versions.

### Parents Count and Parents ID

The parent counts and the parents ID is the amount and the identifier of the messages referenced by the new message, respectively. To build up the graph structure of the Tangle, every new message in the Tangle must reference 2 - 8 previous messages. The node selects those two messages and sends the IDs to the client, and the client must include this information into the message “label.” Therefore, nodes make sure the data structure of the Tangle evolves as specified in the protocol.

### Payload Length

Because messages in IOTA are not allowed to exceed a size of 32kb, the message must declare the size of its payload to the node, like you would need to report the weight of a package if you want to send it with a courier in advance.

### Payload Type

A definition of which type of payload is part of the message is called a payload type. The node needs to know this, as some payload types need to process differently than others.

### Nonce

This refers to a nonce which lets a message fulfill the Proof-of-Work (PoW) requirement. PoW is done locally on the device that issues the message and is a form of spam protection. But if the node allows it, PoW can be done by the node instead of the client. This is a feature that enables low-powered devices to issue messages (like sensors, chips, etc.) without doing the PoW in the local device. If connected to a node that allows remote PoW, those low-power devices can send messages, and the node (which is usually running on a more powerful device) does the PoW for them. This is one of the reasons why IOTA is suitable for IoT and data applications. Users planning to issue multiple data messages from a large amount of low-power devices only need to connect those devices to a node that allows them to do the PoW for them (which will be, in most cases, their own node). As the PoW requirement in IOTA, in general, is low, it is no problem to do this even for a large number of devices by a node.

:::note

In the upcoming 2.0 IOTA version, this PoW requirement will become adaptive and is planned to be completely removed for times of normal network loads. You can read more about [IOTA 2.0 here](/build/networks/iota-2.0).

:::

## Message Structure

This is the defined syntactical structure of every message in the IOTA protocol (the label of our package):

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>x
        <th>Description</th>
    </tr>
    <tr>
        <td>Protocol Version</td>
        <td>uint8</td>
        <td>Protocol version number of the message.</td>
        </tr>
    <tr>
        <td> Parents Count </td>
        <td> uint8</td>
        <td> The number of messages that are directly approved.</td>
    </tr>
    <tr>
        <td>Parents <code>anyOf</code> </td>
        <blockquote>
        References another directly approved message.
        </blockquote>
        <td>ByteArray[32] </td>
        <td>The Message ID of the parent.</td>
    </tr>
    <tr>
        <td>Payload Length</td>
        <td>uint32</td>
        <td> The length of the following payload in bytes. A length of 0 means no payload will be attached.</td>
    </tr>
    <tr>
        <td colspan="1">
            Payload
        </td>
        <td colspan="2">
            <details open="true">
                <summary>Generic Payload <code>optOneOf</code> </summary>
                <blockquote>
                An outline of a general payload.
                </blockquote>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Payload Type</td>
                        <td>uint32</td>
                        <td>
                            The type of the payload. It will instruct the node on how to parse the fields that follow.
                        </td>
                    </tr>
                    <tr>
                        <td>Data Fields</td>
                        <td>ANY</td>
                        <td>A sequence of fields, where the structure depends on <code>payload type</code>.</td>
                    </tr>
                </table>
            </details>
        </td>
    </tr>
    <tr>
        <td>Nonce</td>
        <td>uint64</td>
        <td>The nonce which lets this message fulfill the POW requirement.</td>
    </tr>
</table>

All this information must be created by a client (wallet software or other programs that generate IOTA messages) to issue a message to a node and make sure the node knows what to do with this message.

### Message Validation

A message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 \* 1024 bytes).
2. The protocol version is supported by the network. 
3. Analyzing the Syntax structure of the message (parsing) does not leave any unknown bits - this means that all the message information is fully readable by the node. Unreadable information could contain malicious code and is therefore denied.
4. If the payload type is known to the node.
5. If the Message PoW Hash indicates that the minimum requirements of PoW requested by the network or the node have been fulfilled.
6. Number of parent messages must be between 1-8.

The message will only be accepted for processing if these parameters are met and readable by the node.

### Payloads

A message may contain a payload. Three payload types are currently defined in the mainnet, but developers can create their custom payloads and attach them to messages as long as they fit the general requirements. This means an IOTA message can contain many types of information, and the IOTA token as transaction payload is just one of many. Below is a table of the currently specified core payloads with a link to their specifications.

| Payload Name                                                                                                    | Type Value |
| --------------------------------------------------------------------------------------------------------------- | ---------- |
| [Tagged Date](https://hackmd.io/TIP-0023/tip-0023.md)                                                           | 5          |
| [Transaction](https://hackmd.io/TIP-0020/tip-0020.md)                                                           | 6          |
| [Milestone](https://hackmd.io/TIP-0029/tip-0029.md)                                                             | 7          |

A message containing only an **indexation payload** (Data) can be sent without a signature. It can hold any data the user wants to send, as long as it is parsable and follows the required syntax and size limit.

The message is specified by a **tag**, which will make it possible for any users to find this message and the containing data by searching the index in data indexer applications.

As you may have recognized, a message in the IOTA network does not need a specific receiver. All messages in the network are propagated to all nodes and are visible to every network user. Also, the data payload (if not encrypted by the sender) is visible for everyone that sees the message. If you want to send a data message using the IOTA protocol that should only be visible to a selected group of receivers, the IOTA Streams framework is built precisely for this purpose. It will enable a direct gateway to receivers and encrypt the information from everyone else in the network. 

A **data message**, which is defined as a tagged data payload, is easily found by everyone who knows that message’s identifier. If you want to send an arbitrary message or sensitive data, you need to tell the receiver which tag you are using. They can observe the network for all messages containing this specific tag using an explorer.

In a **value transaction**, the payment receiver - an IOTA address - will be specified in the "signed transaction payload" field. Then, only the owner of that specific address can use the contained funds by unlocking them with the private key that belongs to that receiving address. You can read more about how sending value transactions in IOTA in the [value transfer](/learn/about-iota/value-transfer) section.

