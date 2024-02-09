# Data Structures

:::warning Unpublished tips

This page contains references to Tangle Improvement Proposals (TIPs) that are still not published! This includes TIP-0040, TIP-0041,TIP-0042, TIP-0043,TIP-0044, TIP-0045 and TIP-0046. You can check the list of all available TIPs [here!](https://wiki.iota.org/tips/)

:::

## The Tangle

The Tangle is a _data structure_ replicated across a decentralized network of computers, also called "nodes." It is a robust foundation for tracking token ownership and offers several unique features. At its core, the Tangle forms a directed acyclic graph (DAG) of blocks, creating a block-DAG architecture. In this structure, newer blocks are intricately attached to multiple older ones, resulting in a highly interconnected data structure.

![Tangle - the _DAG_ of IOTA](/img/learn/protocols/iota2.0/core-concepts/data-structures/the-tangle.png)
**Image 1:** The Tangle.

One of the key functionalities of the Tangle is to ensure the immutability of the data stored in it. By leveraging its distributed nature, the Tangle provides a resilient and tamper-proof environment for data _integrity_. This means that once information is added to the Tangle, it becomes nearly impossible to alter or manipulate, enhancing the system's trustworthiness.
Given that the Tangle is a replicated or distributed data structure, nodes have to reach a [consensus](consensus/introduction.md) on the content of the Tangle.


## The Tangle Versus Blockchains

While the Tangle and blockchains have the same function of maintaining their _ledger state_, the Tangle overcomes some of the difficulties blockchains face. Unlike blockchains, where only a single node can append a new block to the ledger at a time, the Tangle allows all participating nodes to write to the ledger in parallel. This is achieved through a DAG structure, which allows transactions to be processed simultaneously and independently of each other.

### Blockchains

A traditional blockchain consists of a growing list of records called blocks linked together as a chain using cryptography. Transactions can only become part of the ledger if they are included in a newly issued block. If all new transactions don’t fit into one block, some must be postponed to the following blocks.

Block producers typically favor including transactions from users willing to pay higher fees. Accelerating block creation or increasing block sizes doesn't solve the issues, as it is well known that this would compromise safety. In other words, to guarantee the security of the system, the _throughput_ of the system must be artificially suppressed so that each block propagates fully before the next block is created.

![Overcoming the blockchain bottleneck.](/img/learn/protocols/iota2.0/core-concepts/data-structures/blockchain-bottleneck.png)
**Image 2:** Overcoming the blockchain bottleneck.

### The Tangle

The Tangle is a leaderless, probabilistic consensus protocol that enables parallel validation of transactions without requiring total ordering. It also eliminates the need for intermediary miners or validators in block creation, allowing all participating nodes to write to the ledger. This removes the need for additional mempools, and the Tangle itself is often seen as a distributed mempool. However, _consensus_ on the state of the ledger is achieved through a committee-based selection process, which ensures low _confirmation_ times.

## The Blocks

The basic unit of information in the IOTA 2.0 protocol is called a _block_, which serves as a container for a collection of data stored in the network.

Blocks are gossiped between nodes. They communicate payloads and the nodes' opinions about them. [Payloads](#Payloads) can be many things, including token transactions, generic data payloads, or other specific data required by various applications.

Since blocks refer to previous blocks through a list of references, the collection of all blocks forms a directed acyclic graph (DAG), which we at the IOTA Foundation call the Tangle. This structure replaces a linear blockchain since contained blocks are not totally ordered.

The issuer is the entity that creates the block and is identified through a public key. Issuers are different from nodes, which form the network. A node supplies the issuer with tips (unreferenced blocks) to attach to their block and submit any issued block to the network. Wallets provide issuers with the means to issue payloads such as transactions.

Nodes, issuers, and wallets are three separate roles. However, they can be run on different or the same machines. For example, a user can have an issuer built into their wallet, communicating with nodes via an API. Alternatively, an issuer could be a plugin into a node.

## Block Layout

The block layout in the IOTA protocol consists of a _block header_ , content, and signature. The _block header_  contains metadata about the block. The content contains the references, aka _parents_, and the signature is used to verify the authenticity of the _block header_  and block content.

There are two types of blocks: Basic Blocks and Validation Blocks. A Basic Block can contain different types of payloads, which are processed by all nodes as part of the IOTA protocol. Validation Blocks have additional functionality and different fields, validation rules, and allowed payloads and are only issued by the current _validator_ nodes.

![The anatomy of a block](/img/learn/protocols/iota2.0/core-concepts/data-structures/block-anatomy.png)
**Image 3**: The anatomy of a block.

### Block Header and Block Wrapper

The two block types share certain fields, which are contained in an outer wrapper. This _Block Wrapper_ is a way to deduplicate the definition of those fields. It is not a standalone block type.

All fields of a _Block Wrapper_ except for the _Block_ and _Signature_ constitute the _Block Header_.

The _Block Wrapper_ is serialized as follows:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Protocol Version</td>
    <td>uint8</td>
    <td>This field denotes what protocol rules apply to the block.</td>
  </tr>
  <tr>
    <td>Network ID</td>
    <td>uint64</td>
    <td>The network identifier. </td>
  </tr>
  <tr>
    <td>Issuing Time</td>
    <td>uint64</td>
    <td>The time at which the block was issued. It is a Unix timestamp in nanoseconds.</td>
  </tr>
  <tr>
    <td>Slot Commitment ID</td>
    <td>ByteArray[40]</td>
    <td>The identifier of the _slot_ this block commits to.</td>
  </tr>
  <tr>
    <td>Latest Finalized Slot</td>
    <td>uint64</td>
    <td>The  of the latest finalized slot.</td>
  </tr>
  <tr>
    <td>Issuer ID</td>
    <td>ByteArray[32]</td>
    <td>The identifier of the account that issued this block.</td>
  </tr>
  <tr>
    <td>Block <code>oneOf</code></td>
    <td colspan="2">
      <details>
        <summary>Basic Block</summary>
        <blockquote>
          A Basic Block. More details in the <a href="#basic-block">Basic Block section</a>.
        </blockquote>
      </details>
      <details>
        <summary>Validation Block</summary>
        <blockquote>
          A Validation Block. More details in the <a href="#validation-block">Validation Block section</a>.
        </blockquote>
      </details>
    </td>
  </tr>
  <tr>
    <td>Signature <code>oneOf</code></td>
    <td colspan="2">
      <details>
        <summary>Ed25519 Signature</summary>
        <blockquote>
          An Ed25519 Signature. More details in the <a href="#signature">Signature section</a>.
        </blockquote>
      </details>
    </td>
  </tr>
</table>

## Basic Block

### Serialized Layout

The serialized layout of a _Basic Block_ is that of a _Block Wrapper_ with the _Block_ field containing the following
layout:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>uint8</td>
    <td>Set to <strong>value 0</strong> to denote a <i>Basic Block</i>.</td>
  </tr>
  <tr>
    <td>Strong Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are strongly directly approved.</td>
  </tr>
  <tr>
    <td>Strong Parents <code>anyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <blockquote>
          References another directly approved block.
        </blockquote>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the strong parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr><tr>
    <td>Weak Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are weakly directly approved.</td>
  </tr>
  <tr>
    <td>Weak Parents <code>optAnyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <blockquote>
          References another directly approved block.
        </blockquote>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
  <tr>
    <td>Shallow Like Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are directly referenced to adjust opinion.</td>
  </tr>
  <tr>
    <td>Shallow Like Parents <code>optAnyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
  <tr>
    <td>Payload Length</td>
    <td>uint32</td>
    <td>The length of the following payload in bytes. A length of 0 means no payload will be attached.</td>
  </tr>
  <tr>
    <td>Payload <code>optOneOf</code></td>
    <td colspan="2">
      <details>
        <summary>Tagged Data Payload</summary>
        <blockquote>
          With Payload Type 5, more details are described in Tagged Data Payload section.
        </blockquote>
      </details>
      <details>
        <summary>Transaction Payload</summary>
        <blockquote>
          With Payload Type 6, more details are described in Transaction section.
        </blockquote>
      </details>
    </td>
  </tr>
  <tr>
    <td>Burned Mana</td>
    <td>uint64</td>
    <td>The amount of _Mana_ the Account identified by <code>Issuer ID</code> is at most willing to burn for this block. </td>
  </tr>
</table>

## Validation Block

A Validation Block is a special block used by validators to secure the network. It is recognized by the Congestion Control of the IOTA 2.0 protocol and can be issued without burning _Mana_ within the constraints of the allowed validator _throughput_. It is allowed to reference more _parent blocks_ than a normal _Basic Block_.

### Serialized Layout

The serialized layout of a _Validation Block_ is that of a _Block Wrapper_ with the _Block_ field containing the following layout:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
 <tr>
    <td>Type</td>
    <td>uint8</td>
    <td>Set to <strong>value 1</strong> to denote a <i>Validation Block</i>.</td>
  </tr>
  <tr>
    <td>Strong Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are strongly directly approved.</td>
  </tr>
  <tr>
    <td>Strong Parents <code>anyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <blockquote>
          References another directly approved block.
        </blockquote>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the strong parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr><tr>
    <td>Weak Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are weakly directly approved.</td>
  </tr>
  <tr>
    <td>Weak Parents <code>anyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <blockquote>
          References another directly approved block.
        </blockquote>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr><tr>
    <td>Shallow Like Parents Count</td>
    <td>uint8</td>
    <td>The number of blocks that are directly referenced to adjust opinion.</td>
  </tr>
  <tr>
    <td>Shallow Like Parents <code>anyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Parent</summary>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Block ID</td>
            <td>ByteArray[40]</td>
            <td>The Block ID of the parent.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
  <tr>
    <td>Highest Supported Version</td>
    <td>uint8</td>
    <td>The highest supported protocol version the issuer of this block supports.</td>
  </tr>
  <tr>
    <td>Protocol Parameters Hash</td>
    <td>ByteArray[32]</td>
    <td>The hash of the protocol parameters for the Highest Supported Version.</td>
  </tr>
</table>

## Block Content

In this section, you can find a brief overview of the content of the blocks described above.

### Strong, Weak, Shallow Like Parents

Each new block references several previous blocks, also called parents of the new block. The IOTA protocol has three references or parent types; they are crucial for the consensus protocol and are described in detail in the section.

### Slot Index

The timeline within the system is partitioned into slots, and each slot is associated with a unique slot index. To determine the slot index of a given timestamp, the calculation requires the `genesisUnixTime` (the starting point of the timeline) as well as the `slotDurationSeconds,` of each slot:
The slot index of timestamp `ts` is `floor((ts - genesisUnixTime)/slotDurationSeconds) + 1`.

### Slot Commitment

Slot Commitment is an object that commits a summary of a slot, and it is linked to the commitment of the previous slot, which forms a commitment chain. The slot commitment mechanism shows the divergencies between local versions of the Tangle and the ledger of each node by creating forks in the commitment chains. Together with the Chain switching mechanism, it helps in maintaining the common perception among the nodes.

:::note

Slot Commitment and Commitment may be used interchangeably.

:::

Each block is obliged to include a new `Slot Commitment ID` that consists of the Slot Commitment that contains the Merkle tree root of Merkle trees created for the following data structures and more information about the committed slot as shown in the following graphic:

![Slot Commnitment](/img/learn/protocols/iota2.0/core-concepts/data-structures/slot-commitment.png)
**Image 5**: Slot commitment.

Therefore, each commitment should contain the following:

- **Protocol Version**: The Version of the used protocol.
- **Slot index**: The index of the comitted slot.
- **Previous Slot Commitment**: The previous _Slot Commitment ID_ creating the Slot Commitment Chain.
- **Commitment of Slot Content**: The Merkle tree root of Merkle trees.
- **Cumulative Weight**: The _Cumulative Weight_ of the Slot Commitment Chain.
- **Reference Mana Cost**: The reference mana cost of this slot.

The Commitment of Slot Content is divided into:

- **Tangle Root**: The hash root of a sparse Merkle tree that contains all accepted blocks issued within the slot. This serves as a statement of accepted blocks in the Tangle. It is used to prove the _inclusion_ or absence of accepted blocks.
- **State Root**: The hash root of a sparse Merkle tree containing all Unspent Transaction Outputs (UTXOs) at the slot’s conclusion. It is used for proving the existence or absence of UTXOs.
- **State Mutation Root**: The hash root of a sparse Merkle tree containing accepted transactions in the current slot and serving as proof of state mutation from the prior slot to the current one. It helps in proving the inclusion or absence of accepted transactions.
- **Accounts Root**: The hash root of a sparse Merkle tree containing Block Issuer (Block Issuance Credits, Issuer Public Keys, Expiry Slot) and Staking Data (Fixed Cost, Stake End Epoch, Staking Amounts) for accounts that are _staking_ or are _block issuers_. It is used to provide the issuance of blocks for a given account ID.
- **Committee Root**: The hash root of a sparse Merkle tree containing account IDs representing current or upcoming committee members. It is only updated when the committee is successfully rotated. It is used to prove the inclusion or absence of a specific account to the committee.
- **Rewards Root**: The hash root of a sparse Merkle tree that contains data related to rewards (e.g., pool stake, pool reward, fixed cost) for committee members at the previous epoch’s conclusion. It helps prove the existence or absence of rewards for a given account ID.
- **Attestation Root**: The hash root of a sparse Merkle tree that contains data related to the attestation of all account IDs at the end of the slot. It is used to prove the attestation of previous commitments by a given account ID.
- **Protocol Parameters Hash**: This hash value encodes the protocol parameters for all existing protocol versions. It helps to upgrade the protocol.

### Payloads

While blocks without a payload, i.e., `Payload Length` set to zero, are valid, such blocks do not contain any information. As such, blocks usually contain a payload. The detailed specification of each payload type is out of the scope of this article; we only give more detailed information for the important _Transaction payload_ type in Section [Transactions](#Transactions). The following table lists all currently specified payloads that can be part of a block and links to their
specification:

| Payload Name | Type Value | TIP                                                 |
| ------------ | ---------- | --------------------------------------------------- |
| No Payload   | -          | -                                                   |
| Tagged Data  | 5          | [TIP-23](https://wiki.iota.org/tips/tips/TIP-0023/) |
| Transaction  | 6          | [TIP-45](https://github.com/iotaledger/tips/blob/tip45/tips/TIP-0045/tip-0045.md) |

### Transactions

The IOTA 2.0 ledger state relies on the Unspent Transaction Output (UTXO) model. The _UTXO model_ defines a ledger state where balances are not directly associated with addresses but with the outputs of transactions. In this model, transactions reference outputs of previous transactions as inputs, which are consumed (removed) to create new outputs. A transaction must consume all the funds of the referenced inputs.

The following image depicts the exchange of funds using UTXO:

![Exchange of funds using UTXOs](/img/learn/protocols/iota2.0/core-concepts/data-structures/exchanging-funds.png)
**Image 6**: Exchange of funds using UTXOs.

## Transaction Structure

### Layout

A _Transaction Payload_ is made up of two parts:

1. The _Transaction Essence_ part which contains the inputs, outputs, and an optional embedded payload.
2. The _Unlocks_ which unlock the inputs of the _Transaction Essence_.

The _Transaction Payload ID_ is the [BLAKE2b-256](https://tools.ietf.org/html/rfc7693) hash of the entire serialized payload data, including unlocks.

The following table describes the entirety of a _Transaction Payload_ in its serialized form following the notation from
[TIP-45](https://github.com/iotaledger/tips/blob/tip45/tips/TIP-0045/tip-0045.md):

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
      Set to <strong>value 6</strong> to denote a <i>TIP-45 Transaction Payload</i>.
    </td>
  </tr>
  <tr>
    <td>Essence <code>oneOf</code></td>
    <td colspan="2">
      <details open="open">
        <summary>Transaction Essence</summary>
        <blockquote>
          Describes the essence data making up a transaction by defining its inputs, outputs, and an optional payload.
        </blockquote>
        <table>
          <tr>
            <td><b>Name</b></td>
            <td><b>Type</b></td>
            <td><b>Description</b></td>
          </tr>
          <tr>
            <td>Transaction Type</td>
            <td>uint8</td>
            <td>
              Set to <strong>value 2</strong> to denote a <i>TIP-45 Transaction Essence</i>.
            </td>
          </tr>
          <tr>
            <td>Network ID</td>
            <td>uint64</td>
            <td>
              The unique value denotes whether the block was meant for mainnet, shimmer, testnet, or a private network.
              It consists of the first 8 bytes of the BLAKE2b-256 hash of the network name.
            </td>
          </tr>
          <tr>
          <td>Creation Slot</td>
          <td>uint64</td>
            <td>
                The slot index in which the transaction was created.
            </td>
          </tr>
          <tr>
            <td>Context Inputs Count</td>
            <td>uint16</td>
            <td>The number of context input entries.</td>
          </tr>
          <tr>
            <td>Context Inputs <code>optAnyOf</code></td>
            <td colspan="2">
              <details>
                <summary>Commitment Input</summary>
                <blockquote>
                  Describes an input that references a commitment to a certain slot.
                </blockquote>
              </details>
              <details>
                <summary>Block Issuance Credit Input</summary>
                <blockquote>
                  Describes an input that resolves to a _BIC_ value of an account.
                </blockquote>
              </details>
              <details>
                <summary>Reward Input</summary>
                <blockquote>
                  References a UTXO input that claims Mana rewards.
                </blockquote>
              </details>
            </td>
          </tr>
          <tr>
            <td>Inputs Count</td>
            <td>uint16</td>
            <td>The number of input entries.</td>
          </tr>
          <tr>
            <td>Inputs <code>anyOf</code></td>
            <td colspan="2">
              <details>
                <summary>UTXO Input</summary>
                <blockquote>
                  Describes an input that references an unspent transaction output to consume.
                </blockquote>
                <table>
                  <tr>
                    <td><b>Name</b></td>
                    <td><b>Type</b></td>
                    <td><b>Description</b></td>
                  </tr>
                  <tr>
                    <td>Input Type</td>
                    <td>uint8</td>
                    <td>
                      Set to <strong>value 0</strong> to denote a <i>TIP-20 UTXO Input</i>.
                    </td>
                  </tr>
                  <tr>
                    <td>Transaction ID</td>
                    <td>ByteArray[32]</td>
                    <td>The BLAKE2b-256 hash of the transaction payload containing the referenced output.</td>
                  </tr>
                  <tr>
                    <td>Transaction Output Index</td>
                    <td>uint16</td>
                    <td>The output index of the referenced output.</td>
                  </tr>
                </table>
              </details>
            </td>
          </tr>
          <tr>
            <td>Inputs Commitment</td>
            <td>ByteArray[32]</td>
            <td>
              BLAKE2b-256 hash serving as a commitment to the serialized outputs referenced by <code>Inputs</code>.
            </td>
          </tr>
          <tr>
            <td>Outputs Count</td>
            <td>uint16</td>
            <td>The number of output entries.</td>
          </tr>
          <tr>
            <td>Outputs <code>anyOf</code></td>
            <td colspan="2">
              <details>
                <summary>Basic Output</summary>
                <blockquote>
                  Describes a deposit to a single address. The output might contain optional features and native tokens.
                </blockquote>
              </details>
              <details>
                <summary>Account Output</summary>
                <blockquote>
                  Describes an account in the ledger.
                </blockquote>
              </details>
              <details>
                <summary>Foundry Output</summary>
                <blockquote>
                  Describes a foundry that controls the supply of native tokens.
                </blockquote>
              </details>
              <details>
                <summary>NFT Output</summary>
                <blockquote>
                  Describes a unique, non-fungible token deposit to a single address.
                </blockquote>
              </details>
              <details>
                <summary>Delegation Output</summary>
                <blockquote>
                  Describes a Delegation Output, which delegates its contained IOTA tokens to a validator.
                </blockquote>
              </details>
            </td>
          </tr>
          <tr>
            <td>Allotments Count</td>
            <td>uint16</td>
            <td>The number of account allotment entries.</td>
          </tr>
          <tr>
            <td>Allotments <code>optAnyOf</code></td>
            <td colspan="2">
              <details>
                <summary>Allotment</summary>
                <blockquote>
                  Allots Mana value to indicated account.
                </blockquote>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Account ID</td>
                    <td>ByteArray[32]</td>
                    <td>The Account ID of the parent.</td>
                  </tr>
                  <tr>
                    <td>Mana</td>
                    <td>uint64 </td>
                    <td>The amount of Mana to allot to this account.</td>
                  </tr>
                </table>
              </details>
            </td>
          </tr>
          <tr>
            <td>Payload Length</td>
            <td>uint32</td>
            <td>The length in bytes of the optional payload.</td>
          </tr>
          <tr>
            <td>Payload <code>optOneOf</code></td>
            <td colspan="2">
              <details>
                <summary>Tagged Data Payload</summary>
                <blockquote>
                  Describes data with an optional tag, defined in TIP-23.
                </blockquote>
              </details>
            </td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
  <tr>
    <td>Unlocks Count</td>
    <td>uint16</td>
    <td>The number of unlock entries. It must match the field <code>Inputs Count</code>.</td>
  </tr>
  <tr>
    <td>Unlocks <code>anyOf</code></td>
    <td colspan="2">
      <details>
        <summary>Signature Unlock</summary>
        <blockquote>
          Defines an unlock containing a signature.
        </blockquote>
      </details>
      <details>
        <summary>Reference Unlock</summary>
        <blockquote>
          References a previous unlock, where the same unlock can be used for multiple inputs.
        </blockquote>
      </details>
      <details>
        <summary>Account Unlock</summary>
        <blockquote>
          References a previous unlock of a consumed account output.
        </blockquote>
      </details>
      <details>
        <summary>NFT Unlock</summary>
        <blockquote>
          References a previous unlock of a consumed NFT output.
        </blockquote>
      </details>
    </td>
  </tr>
</table>

### Essence

The <i>Transaction Essence</i> of a <i>Transaction Payload</i> carries the inputs, outputs, and an optional payload. The <i>Transaction Essence</i> is an explicit type and, therefore, starts with its own <i>Transaction Essence Type</i> byte, which is of value 1 for <i>TIP-20 Transaction Essence</i>.

#### Network ID

The transaction essence's `Network ID` field serves as a
[replay protection mechanism](https://github.com/iotaledger/tips/discussions/56). It is a unique value denoting whether
the transaction was meant for the IOTA mainnet, shimmer, testnet-1, or a private network. It consists of the first 8 bytes of the BLAKE2b-256 hash of the `Network Name` protocol parameter, interpreted as an unsigned integer number.

| Network Name        | Resulting `Network ID` | Network Name defined in                                                          |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------- |
| `iota-mainnet`      | `9374574019616453254`  | [TIP-22](/tips/tips/TIP-0022)                                                    |
| `shimmer`           | `14364762045254553490` | [TIP-32](/tips/tips/TIP-0032#global-parameters)                                  |
| `testnet-1`         | `1856588631910923207`  | -                                                                                |
| `example-mynetwork` | `1967754805504104511`  | -                                                                                |

#### Creation Slot

The transaction timestamp is expressed as a `Slot Index`, as there is no need for finer granularity. The validity of the
transaction timestamp is checked in comparison with the `Block` timestamp. Therefore, it is performed at the level of
semantic validation of a block, described in [TIP-46](https://github.com/iotaledger/tips/blob/tip46/tips/TIP-0046/tip-0046.md).

#### Context Inputs

The `Context Inputs` field holds inputs that provide additional contextual information for the execution of a transaction, such as for different functionalities related to accounts, commitments, or Mana rewards. Context inputs do not need to be unlocked. Currently, IOTA supports the following types of context inputs:

- _Commitment Input_
- _Block Issuance Credit Input_
- _Reward Input_

##### Commitment Input

A _Commitment Input_ allows referencing a commitment to a certain slot. It is used to provide a notion of time for transaction execution that is linked to the containing _Block_'s _Issuing Time_. It proves that the time at the transaction execution is past a certain slot in the past, as the slot has already been committed.
The slot reference is the _Commitment ID_ and can be resolved to the _Commitment_ value before executing the transaction. The _Commitment_ provides the `Slot Index`, which is the time reference. A Block that contains a transaction with a Commitment input has additional validation rules as defined in [TIP-46](https://github.com/iotaledger/tips/blob/tip46/tips/TIP-0046/tip-0046.md). Only one
_Commitment Input_ may be present in a transaction.

It is serialized as follows:

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Context Input Type</td>
        <td>uint8</td>
        <td>Set to <strong>value 0</strong> to denote a <i>Commitment Input</i>.</td>
    </tr>
    <tr>
        <td>Commitment ID</td>
        <td>ByteArray[40]</td>
        <td>The commitment identifier to reference to.</td>
    </tr>
</table>

##### Block Issuance Credit Input

A _Block Issuance Credit Input_ provides the _VM_ with context for the value of the _BIC_ vector of a specific slot. It is required for any _Account_ transitions and destruction if the account contains a _Block Issuer Feature_, as any operation on the _Account_ can only be allowed if the _BIC_ balance is non-negative at a specific point in time.
A _Block Issuance Credit Input_ always requires a _Commitment Input_. The input will be resolved to the _BIC_ value of the account
identified by `Account ID` at the `Slot Index` given by the _Commitment Input_. Multiple _Block Issuance Credit Inputs_ can be present in a single transaction to provide the _BIC_ for different accounts; however, no two _Block Issuance Credits Inputs_ can reference the same account.

It is serialized as follows:

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Context Input Type</td>
        <td>uint8</td>
        <td>Set to <strong>value 1</strong> to denote a <i>Block Issuance Credit Input</i>.</td>
    </tr>
    <tr>
        <td>Account ID</td>
        <td>ByteArray[32]</td>
        <td>The ID of the Account for which this input provides the _BIC_.</td>
    </tr>
</table>

##### Reward Input

A _Reward Input_ indicates which transaction `Input` claims Mana rewards. It can reference an _Account Output_ with a _Staking Feature_ or a _Delegation Output_. The input is resolved by calculating the total amount of rewards the respective output can claim, which is provided as context for transaction execution. The amount of rewards that can be claimed is added to the total sum of Mana on the input side of the transaction. Multiple such inputs can be present in a single transaction to claim rewards for different outputs; however, no two _Reward Inputs_ can reference the same index.

It is serialized as follows:

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Context Input Type</td>
        <td>uint8</td>
        <td>Set to <strong>value 2</strong> to denote a <i>Reward Input</i>.</td>
    </tr>
    <tr>
        <td>Index</td>
        <td>uint16</td>
        <td>The index of the transaction input for which to claim rewards.</td>
    </tr>
</table>

#### Inputs

The `Inputs` field holds the inputs to consume to fund the <i>Transaction Payload outputs </i>.
Currently, there is one type of input:

- _UTXO Input_ (In the future, more types of inputs may be specified as part of protocol upgrades).

Each input must be accompanied by a corresponding <i>Unlock</i> at the same index in the <i>Unlocks</i> part of the <i>Transaction Payload</i>.

##### UTXO Input

A <i>UTXO Input</i> is an input that references an unspent output of a previous transaction. This UTXO is uniquely identified by its _Output ID_, defined by the _Transaction ID_ of the creating transaction and the corresponding output index. Each <i>UTXO Input</i> must be accompanied by an <i>Unlock</i> that is allowed to unlock the referenced output.

#### Inputs Commitment

The `Inputs Commitment` field of the _Transaction Essence_ is a cryptographic commitment to the content of the consumed outputs (inputs). It consists of the BLAKE2b-256 hash of the concatenated output hashes.

In the `Inputs` field, they are only referenced by _Output ID_. While the _Output ID_ technically depends on the actual output's content, a client cannot validate this without access to the original transaction.
For the `Inputs Commitment`, the client must be aware of the outputs’ content to produce a semantically valid transaction. This protects clients against [eclipse attacks that would result in loss of funds](https://github.com/iotaledger/tips/discussions/51).

#### Outputs

The `Outputs` field holds the outputs that are created by the <i>Transaction Payload</i>. Different output types must all have an `Amount` field denoting the number of IOTA coins to deposit.

The following table lists all the output types that are currently supported as well as links to the corresponding specification. The _SigLockedSingleOutput_ as well as the _SigLockedDustAllowanceOutput_ introduced in Chrysalis Phase 2 [TIP-7](https://wiki.iota.org/tips/tips/TIP-0007/) have been removed and are no longer supported.

| Output Name | Type Value | TIP                                                                              |
| ----------- | ---------- | -------------------------------------------------------------------------------- |
| Basic       | 3          | [TIP-41](https://github.com/iotaledger/tips/blob/tip41/tips/TIP-0041/tip-0041.md#basic-output)      |
| Account     | 4          | [TIP-42](https://github.com/iotaledger/tips/blob/tip42/tips/TIP-0042/tip-0042.md#account-output)    |
| Foundry     | 5          | [TIP-44](https://github.com/iotaledger/tips/blob/tip44/tips/TIP-0044/tip-0044.md#foundry-output)    |
| NFT         | 6          | [TIP-43](https://github.com/iotaledger/tips/blob/tip43/tips/TIP-0043/tip-0043.md#nft-output)        |
| Delegation  | 7          | [TIP-40](https://github.com/iotaledger/tips/blob/tip40/tips/TIP-0040/tip-0040.md#delegation-output) |

#### Allotments

The `Allotments` field contains the list of all Mana allotments, the `Account ID`, and corresponding values that convert Mana provided by the inputs in the form of stored Mana in inputs or potential Mana derived from the inputs' IOTA tokens.
Mana listed in this field will be added upon the commitment of the slot in which the transaction was issued in the form of _Block Issuance Credits_ to the account's _BIC_ value.

Note that _Block Issuance Credits_ are used to pay for the block issuance. They are burned on the slot commitment of the
issuance slot. The good practice would be to always allot enough Mana to cover for the block issuance.

#### Payload

The _Transaction Essence_ can contain another payload as described in general in [TIP-46](https://github.com/iotaledger/tips/blob/tip46/tips/TIP-0046/tip-0046.md).

The following table lists all the payload types that can be nested inside a _Transaction Essence_ as well as links to the corresponding specification:

| Name        | Type Value | TIP                                                 |
| ----------- | ---------- | --------------------------------------------------- |
| Tagged Data | 5          | [TIP-23](https://wiki.iota.org/tips/tips/TIP-0023/) |

### Unlocks

The `Unlocks` field holds the unlocks unlocking inputs within a _Transaction Essence_.

The following table lists all the unlock types that are currently supported, as well as links to the corresponding specifications. The _Signature Unlock_ and the _Reference Unlock_ are also specified.

| Unlock Name | Type Value | TIP                                                                                    |
| ----------- | ---------- | -------------------------------------------------------------------------------------- |
| Signature   | 0          | [TIP-45](https://github.com/iotaledger/tips/blob/tip45/tips/TIP-0045/tip-0045.md#signature-unlock)           |
| Reference   | 1          | [TIP-45](https://github.com/iotaledger/tips/blob/tip45/tips/TIP-0045/tip-0045.md#reference-unlock)           |
| Account     | 2          | [TIP-42](https://github.com/iotaledger/tips/blob/tip42/tips/TIP-0042/tip-0042.md#account-locking--unlocking) |
| NFT         | 3          | [TIP-43](https://github.com/iotaledger/tips/blob/tip43/tips/TIP-0043/tip-0043.md#nft-locking--unlocking)     |

#### Signature Unlock

The <i>Signature Unlock</i> holds a signature signing the BLAKE2b-256 hash of the <i>Transaction Essence</i> (including the optional payload). It is serialized as follows:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Unlock Type</td>
    <td>uint8</td>
    <td>
      Set to <strong>value 0</strong> to denote a <i>Signature Unlock</i>.
    </td>
  </tr>
  <tr>
    <td>Signature <code>oneOf</code></td>
    <td colspan="2">
      <details>
        <summary>Ed25519 Signature</summary>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Signature Type</td>
            <td>uint8</td>
            <td>
              Set to <strong>value 0</strong> to denote an <i>Ed25519 Signature</i>.
            </td>
          </tr>
          <tr>
            <td>Public Key</td>
            <td>ByteArray[32]</td>
            <td>The Ed25519 public key of the signature.</td>
          </tr>
          <tr>
            <td>Signature</td>
            <td>ByteArray[64]</td>
            <td>The Ed25519 signature signing the Blake2b-256 hash of the serialized <i>Transaction Essence</i>.</td>
          </tr>
        </table>
      </details>
    </td>
  </tr>
</table>

##### Unlock syntactic validation

- `Signature` must contain an _Ed25519 Signature_.
- The _Signature Unlock_ must be unique, i.e., there must not be any other _Signature Unlocks_ in the `Unlocks` field of
  the transaction payload with the same signature.

#### Reference Unlock

The <i>Reference Unlock</i> references a previous <i>Unlock</i> (which must not be another <i>Reference Unlock</i>). It **must** be used if multiple inputs can be unlocked via the same <i>Unlock</i>. It is serialized as follows:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Unlock Type</td>
    <td>uint8</td>
    <td>
      Set to <strong>value 1</strong> to denote a <i>Reference Unlock</i>.
    </td>
  </tr>
  <tr>
    <td>Reference</td>
    <td>uint16</td>
    <td>Represents the index of a previous unlock.</td>
  </tr>
</table>

### Signature

The _Ed25519 Signature_ is supported. It is serialized as follows:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>uint8</td>
    <td>
      Set to <strong>value 0</strong> to denote an <i>Ed25519 Signature</i>.
    </td>
  </tr>
  <tr>
    <td>Public Key</td>
    <td>ByteArray[32]</td>
    <td>The Ed25519 public key of the signature.</td>
  </tr>
  <tr>
    <td>Signature</td>
    <td>ByteArray[64]</td>
    <td>The Ed25519 signature computed according to <a href="#signature-creation">Signature Creation</a>.</td>
  </tr>
</table>

#### Signature Creation

The _Signature_ field over the block is computed as follows:

- Let `Block Header Hash` be the BLAKE2b-256 hash over the serialized _block header_ .
- Let `Block Hash` be the BLAKE2b-256 hash over the serialized content of the _Block_ field.
- Let `Signing Input` be the concatenation of `Block Header Hash` and `Block Hash`.
- Let the resulting signature be the Ed25519 signature of `Signing Input`.