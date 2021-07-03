---
title: Data Transfer
description: A major use-case for the IOTA Technology is Data Transfer. Learn how it works.
---


# Data Transfer

IOTA is the only Cryptocurrency and DLT Technology that is capable of transferring Data free, fast, immutable, unforgeable, and secure. 
It is therefore equipped with unique features that are more important than pure value transfer. 

**Data is the new oil.**

Our Economies of the future will rely on access to Data. IOTA is the solution that is needed for our civilizations to evolve into a Data Economy.

Data transfer is the underlying architecture on which the whole IOTA Tangle technology and the IOTA cryptocurrency are built. In IOTA, Nodes send and receive messages (data objects). These messages can contain Value - in form of an IOTA token transaction - but they don't need to. Messages can carry any kind of other Data through the Distributed Ledger and the Directed Acyclic Graph that we call the Tangle to other nodes. This enables the decentralized transport of Data and Value in a single message with the highest grade of security and the total absence of fees. 

Applications can use IOTA as a currency and as a transport protocol for Information and therefore have one solution to handle both aspects with one technology.

This approach makes IOTA unique and increases the possible use-cases of the protocol tremendously.



## What is an IOTA message?

A message is an object that is broadcasted in the Tangle We will give here a correct but not too technical explanation of what this means and how it is used in Data transfer.

Think about the IOTA Protocol as a constant flow of information packages moving forward in time. Every application that uses the protocol is free to issue these packages of information to a node, and the job of an Iota node is to verify and broadcast all these information packages through the network if they are valid. 

If a node decides that a message is valid it will be sent to the node's neighbors and so very quickly every other node in the network sees it and has the same information and the same knowledge of the "State" of the network at a given time. This is called "ledger State".

A Message consists of basic information that defines the type and structure of the massage and it can also contain different **Payloads**. A Payload is an attachment that can contain an IOTA transaction, but also all other kinds of data.

The IOTA protocol categorizes these information packages into different types and handles certain types differently than others. Therefore every message that is sent to the network must contain a unique label as an identifier that describes exactly what this message is and what should be done with it. Only with this information "printed" on the 'label', a node will accept and process a message.
This can be understood as similar to having to fill out a label before sending a package using your local postal service.


A more detailed description of this process on the protocol level can be found here in this document:
[https://github.com/iotaledger/protocol-rfcs/blob/33570042d8f2241ecc9a9104f5eb38fbf4bc3c95/text/0017-message/0017-message.md](https://)

<br/>

----

<br/>


## Sending a message in IOTA

Messages are created by so-called clients. This can be an IOTA wallet or any other application that is able to generate IOTA messages. The client sends those messages to an IOTA node in order to process them.

To make sure that a message is valid and a node knows what to do with the message, the message label created by a client must provide several pieces of informations for the node to be allowed to be processed and to enter the network.



**Message ID**

The message ID is created as a unique cryptographic hash out of the bites contained in the message. It is created by the client (application) or wallet that issues the message.

**Network ID**

An identification in which IOTA network the message belongs (Mainnet / Testnet / private Network) - Nodes will only accept messages that identify themself as belonging to the network the node belongs to.

**Parents length and Parents ID**

The amount and the identifier of the messages which are referenced by the new message. To build up the graph structure of the Tangle every new message in the Tangle must reference 2 - 8 previous messages. The node selects those two messages and sends the id's to the client and the client must include this information into the message "label"

**Payload length**

As messages in IOTA are not allowed to exceed a size of 32kb the message must declare the size of its payload to the node... just like you would need to declare the weight of a package if you want to send it with a courier in advance.

**Payload type**

A definition of which kind of payload is contained in the message. The Node needs to know this, as some payload types need to be handled differently than others.

**Nonce**

The nonce which lets this message fulfill the Proof-of-Work requirement. Proof of work is mostly done locally on the device that issues the message as spam protection. But can also be moved to the node if the node allows this. That is a very useful feature as it enables very low powered devices to issue messages (like sensors, chips, etc) - those sensors can send a message to a node that belongs to the owner of the sensors and the POW is done by the node (which is usually running on a more powerful device). This is one of the key features of the protocol and the reason why IOTA is so suitable for IOT and Data applications. So users that want to issue a lot of Data messages from a huge amount of extremely low power devices only need to connect those devices to a node that allows them to do the POW for them. As the POW is anyway extremely low... for a node, it is no problem to do this even for a large number of devices.

A side note - in the upcoming 2.0 IOTA version this POW requirement will become adaptive and is planned to be totally removed for times of normal network loads...
Read more about IOTA 2.0 here:


### Message structure

this is the defined outer structure of every message in the IOTA protocol (the label of our package):

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>NetworkID</td>
        <td>uint64</td>
        <td>Network identifier. This field will signify whether this message was meant for mainnet, testnet, or a private net. It also tells what protocol rules apply to the message. It is first 8 bytes of the `BLAKE2b-256` hash of the concatenation of the network type and the protocol version string.</td>
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
        <td> The length of the Payload. Since its type may be unknown to the node it must be declared in advanced. 0 length means no payload will be attached.</td>
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
                            The type of the payload. It will instruct the node how to parse the fields that follow.
                        </td>
                    </tr>
                    <tr>
                        <td>Data Fields</td>
                        <td>ANY</td>
                        <td>A sequence of fields, where the structure depends on <code>payload type</code>.</td>
                    </tr>
                </table>
            </details>
    <tr>
        <td>Nonce</td>
        <td>uint64</td>
        <td>The nonce which lets this message fulfill the Proof-of-Work requirement.</td>
    </tr>
</table>


All this information must be created by a client (wallet software or other programs that generate IOTA messages) to be able to issue a message to a node and make sure the node knows what to do with this message.


### Message validation

A message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 * 1024 bytes).
2. Analyzing the Syntax structure of the message (parsing) does not leave any unknown bit's - that means all information of the message is fully readable by the node... unreadable information could contain malicious code and is therefore denied.
3. If the payload type is known to the node.
4. If the Message PoW Hash indicates that the minimum requirements of POW requested by the network or the node have been fulfilled.
5. Number of parent messages must be between 1-8.

Only if these parameters are met and readable by the node, the message will be accepted for processing by the node.

### Payloads

A message may contain a payload. At the moment 3 payload types are defined in the current mainnet, but developers are free to create their own custom payloads and attach them to messages as long as they fit into the general requirements. This means an IOTA message can contain a lot of different types of information, and the IOTA Token as transaction payload is just one of many.
Below is a table of the currently specified core payloads with a link to their specifications.


| Payload Name                              |   Type Value |
| ---------------------------------------   | -----------  | 
|  [Signed Transaction](https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-signed-transaction-payload/0000-signed-transaction-payload.md)                       |     0        |
|  [Milestone Draft](https://github.com/jakubcech/protocol-rfcs/blob/jakubcech-milestonepayload/text/0019-milestone-payload/0019-milestone-payload.md)                                |     1        |
|  [Indexation Payload](#indexation-payload)  |     2        |

A message containing only Data here is an indexation payload. This message can be sent without the need for a signature and can contain a specific amount of any kind of data the user wants to send.

It is specified by an **index**, which will make it possible for other users to find this message and the containing Data by searching the network for this index.

As you may have recognized, a message in the IOTA network does not need a specific receiver. All messages in the network are propagated to all nodes and visible to every network user. Also, the Data Payload (if not encrypted by the sender) is information visible for everyone that sees the message. If you want to send a Data message using the IOTA protocol that should only be visible to a selected group of receivers, the IOTA Streams framework is built exactly for this purpose. It will enable a direct gateway to receivers and encrypt the containing information from everyone else in the network. Read more about IOTA Streams here: 

A **Data message** that is defined as an indexation Payload can be easily found by everyone that knows the index of that message, so if you just want to send an arbitrary message or Data that does not contain sensitive information you just need to tell the receiver which index you are using and he can observe the network for all messages containing this index using an explorer.

The way a **value transaction** works is that the receiver of the payment will be specified in the "transaction payload" field of the message and only then it will be delivered to the specified IOTA address that is stated in the signed payload. Read more about how sending value transactions in IOTA works here:




<br/>

----

<br/>

