---
title: Data Transfer
description: A major use-case for the IOTA Technology is Data Transfer. Learn how it works.
---

# Data Transfer

IOTA offers the ability to transfer Data for free. The Data transfer is fast, immutable, unforgeable, and secure and is one of the core features of IOTA. This capability opens up a wide array of use cases that most other cryptocurrencies cannot serve in a way that IOTA does.

In IOTA, clients like wallets or applications send and receive messages (data objects) through nodes. Nodes are the entry and exit points for these messages, and they communicate with each other and with the connected clients.

There are several types of messages implemented in IOTA. Some transfer value (the IOTA token or digital assets), while others transfer no value, but pure Data and other types can contain both.
This enables the decentralized transport of Data and Value in a single message with the highest security grade and the total absence of fees. The nodes of the network take care of the secure distribution of all messages in the Tangle.

## Data Usage

Many applications and use cases can profit from this combination of free, secure, and fast data and value transport, which is a demand in all major industries. Read more about IOTA Data use cases [here](https://www.iota.org/solutions/industries).

## What is an IOTA message?

A message is an object consisting of information that is broadcasted in the Tangle.

Every application that uses the protocol is free to issue these information objects to a node. The job of an Iota node is to verify and broadcast all these information objects through the network if they are valid and follow the standards of the protocol.

If a node decides that a message is valid, it will send it to its neighbors using the gossip protocol. Every neighbor that receives the message transfers it again to its neighbors and so on. Very quickly, every other node in the network sees the message and has the same information and the same knowledge of the "State" of the network at a given time.

A Message consists of basic information that defines the type and structure of the message, and it can also contain different **Payloads**. A Payload is an attachment that can include an IOTA transaction and many other kinds of data.

The IOTA protocol categorizes these information packages into different types and handles certain types differently than others. Therefore, every message sent to the network must contain a unique label as an identifier that describes exactly what this message is and what should be done with it. Only with this information "printed" on the 'label', a node will accept and process a message.
This can be understood as similar to filling out a label before sending a package using your local postal service.

A more detailed description of this process on the protocol level can be found [here](https://github.com/iotaledger/protocol-rfcs/blob/33570042d8f2241ecc9a9104f5eb38fbf4bc3c95/text/0017-message/0017-message.md).

## Sending a message in IOTA

Messages are created by so-called clients. This can be an IOTA wallet or any other application that can generate IOTA messages. The client sends those messages to an IOTA node to process them.

To make sure that a message is valid and a node knows what to do with the message, the message label created by a client must provide several pieces of information for the node to be processed and enter the network.

**Message ID**

The message ID is created as a unique cryptographic hash out of the bytes contained in the message. It is created by the client (application) or wallet that issues the message.

**Network ID**

An identification in which IOTA network the message belongs (Mainnet / Testnet / private network) - Nodes will only accept messages that identify themself as part of the network the node belongs to.

**Parents length and Parents ID**

This is the amount and the identifier of the messages which are referenced by the new message. To build up the graph structure of the Tangle, every new message in the Tangle must reference 2 - 8 previous messages. The node selects those two messages and sends the IDs to the client, and the client must include this information into the message "label."

**Payload length**

As messages in IOTA are not allowed to exceed a size of 32kb, the message must declare the size of its payload to the node... like you would need to report the weight of a package if you want to send it with a courier in advance.

**Payload type**

A definition of which kind of payload is contained in the message. The Node needs to know this, as some payload types need to be handled differently than others.

**Nonce**

That is the nonce that lets this message fulfill the Proof-of-Work requirement. Proof of work is mainly done locally on the device that issues the message and is a form of spam protection. But it can also be done by the node if the node allows this. That is a very useful feature as it enables very low-powered devices to issue messages (like sensors, chips, etc.) Those sensors can send a message to a node that allows messages without already performed POW, and then the POW is done by the node (which is usually running on a more powerful device). This is one of the key features of the protocol and the reason why IOTA is so suitable for IoT and Data applications. So users who want to issue many data messages from a huge amount of extremely low-power devices only need to connect those devices to a node that allows them to do the POW for them (which will be, in most cases, their own node). As the POW requirement is extremely low, it is no problem to do this even for a large number of devices for a node.

A side note - in the upcoming 2.0 IOTA version, this POW requirement will become adaptive and is planned to be completely removed for times of normal network loads...
Read more about IOTA 2.0 here: (link to content)

## Message structure

This is the defined outer structure of every message in the IOTA protocol (the label of our package):

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>NetworkID</td>
        <td>uint64</td>
        <td>Network identifier. This field will signify whether this message was meant for mainnet, testnet, or a private net. It also tells what protocol rules apply to the message. It is the first 8 bytes of the `BLAKE2b-256` hash of the concatenation of the network type and the protocol version string.</td>
        </tr>
    <tr>
        <td> Parents' length </td>
        <td> uint8</td>
        <td> The number of messages we directly approve. Can be any value between 1-8.</td>
    </tr>
    <tr>
        <td>Parents </td>
        <td>ByteArray[32 * `parents length`]</td>
        <td>The Message IDs that are referenced.</td>
    </tr>
    <tr>
        <td>Payload Length</td>
        <td>uint32</td>
        <td> The length of the Payload. Since its type may be unknown to the node it must be declared in advance. 0 length means no payload will be attached.</td>
    </tr>
    <tr>
        <td colspan="1">
            Payload
        </td>
        <td colspan="2">
            <details open="true">
                <summary>Generic Payload</summary>
                <blockquote>
                An outline of a general payload
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
        <td>The nonce which lets this message fulfill the Proof-of-Work requirement.</td>
    </tr>
</table>

All this information must be created by a client (wallet software or other programs that generate IOTA messages) to issue a message to a node and make sure the node knows what to do with this message.

### Message validation

A message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 \* 1024 bytes).
2. Analyzing the Syntax structure of the message (parsing) does not leave any unknown bits - this means that all the message information is fully readable by the node... unreadable information could contain malicious code and is therefore denied.
3. If the payload type is known to the node.
4. If the Message PoW Hash indicates that the minimum requirements of POW requested by the network or the node have been fulfilled.
5. Number of parent messages must be between 1-8.

The message will only be accepted for processing if these parameters are met and readable by the node.

### Payloads

A message may contain a payload. Three payload types are currently defined in the mainnet, but developers can create their custom payloads and attach them to messages as long as they fit the general requirements. This means an IOTA message can contain many types of information, and the IOTA Token as transaction payload is just one of many.
Below is a table of the currently specified core payloads with a link to their specifications.

| Payload Name                                                                                                                                          | Type Value |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Transaction Payload](https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md)   | 0          |
| [Milestone Payload](https://github.com/jakubcech/protocol-rfcs/blob/jakubcech-milestonepayload/text/0019-milestone-payload/0019-milestone-payload.md) | 1          |
| [Indexation Payload](https://github.com/GalRogozinski/protocol-rfcs/blob/message/text/0017-message/0017-message.md#indexation-payload)                | 2          |

A message containing only an **indexation payload** (Data) can be sent without a signature. It can hold any data the user wants to send, as long as it is parsable and follows the required syntax and size limit.

The message is specified by an **index**, which will make it possible for any users to find this message and the containing Data by searching the network for this index.

As you may have recognized, a message in the IOTA network does not need a specific receiver. All messages in the network are propagated to all nodes and are visible to every network user. Also, the Data Payload (if not encrypted by the sender) is visible for everyone that sees the message. If you want to send a Data message using the IOTA protocol that should only be visible to a selected group of receivers, the IOTA Streams framework is built precisely for this purpose. It will enable a direct gateway to receivers and encrypt the information from everyone else in the network. Read more about IOTA Streams here:

A **Data message**, which is defined as an indexation Payload, can be easily found by everyone who knows that message's index. If you want to send an arbitrary message or sensitive data, you need to tell the receiver which index you are using. He can observe the network for all messages containing this index using an explorer.

In a **value transaction**, the payment receiver - an IOTA address - will be specified in the "signed transaction payload" field. Then, only the owner of that specific address can use the contained funds by unlocking them with the private key that belongs to that receiving address. Read more about how sending value transactions in IOTA work here: [value transfer](/learn/about-iota/value-transfer)
