---
title: Glossary
description: Glossary of all specialized names and phrases used in the IOTA
  Technology. If you dont understand a wording you will find answers here.
---

# Glossary

## A

- **Address Checksum:** Checksum validation is a way to determine if an address is valid and does not contain typos.
- **Adaptive PoW** (In development for IOTA 1.5): With this feature, the coordinator can issue a milestone and simultaneously set the future PoW score. This means that if the network is not fully utilized, the PoW will be reduced to the point where it can be executed by microdevices. Accordingly, the coordinator can also raise the PoW difficulty in case of high utilization and thus make an attack very expensive.
- **Auto peering:** A mechanism that allows nodes to automatically select their neighbors without manual intervention by the node operator.
- **API(Application Programming Interfaces):** The way for applications to interact with the Tangle.
- **Atomic Transactions:** Instead of the bundle construct, IOTA 1.5 uses simpler Atomic Transactions. An Atomic Transaction includes everything related to a transaction in a single message instead of splitting it up (Bundles). This reduces network overhead and signature verification load, improves spam protection and rate control, and shortens the length of Merkle proofs (for future sharding). It also reduces implementation overhead and increases maintainability of the core node software.
- **Application Layer (IOTA 2.0):** The top layer of the 3-layer communication protocol. The IOTA protocol allows a variety of external applications to run on the Message Tangle. Anyone can design an application and users can decide which applications to run on their nodes. These applications will all use the communication layer to transmit and store data.
- **Approval Switch (IOTA 2.0):** When a message is selected as a parent, we can choose from the strong or weak tip pool. This mechanism is called Approval Switch.
- **Approval Weight (IOTA 2.0):** A message gets Mana-weight by approving the message directly or indirectly. However, only strong parents can pass on the mana weight to the past, while weak parents receive the weight from their weak children but do not pass it on.
- **Approvers (IOTA 2.0):** Parents are approved by their referencing messages called approvers. It is thus a reverse mapping of parents. As in the parents’ definition, an approver might be either strong or weak.

## B

- **Balance:** Funds on the addresses (account). These are always available and cannot be deleted or forgotten.
- **Blockchain Bottleneck:** The more transactions are issued, the more the block rate and size become a bottleneck in the system. It is no longer possible to capture all incoming transactions in a prompt manner. Attempts to speed up block rates result in more orphaned blocks (blocks are left behind) and reduce the security of the blockchain.
- **Branch (IOTA 2.0):** A version of the ledger that temporarily coexists with other versions, each spawned by conflicting transactions.
- **Bee:** Node software developed by the IOTA foundation using the Rust programming language.
- **Bootstrapping attack:** An attack in which a node downloads malicious snapshot files, including invalid transactions and balances.

## C

- **Curl:** This is one of the hash functions currently in use. It is based on the “sponge” construction of the Keccak inventors (SHA-3).
- **Confirmed:** Confirmed transactions. In IOTA 1.5, messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that the Coordinator node has validated. To allow the nodes to recognize the milestones, all nodes that participate in the same IOTA network are configured with the Merkle root address of a Coordinator that they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether the trusted Coordinator signs them. To make sure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones at regular intervals. This way, nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.
- **CTPS:** Confirmed transactions per second.
- **Cumulative Weight:** A system for valuing transactions. Each additional transaction that references a transaction increases its cumulative weight. When tips are selected, a path through transactions that has a higher cumulative weight is preferred.
- **Chronicle:** A permanode solution of the IOTA Foundation. It allows to store all transactions reaching a node in a distributed database that is secure and scales well. Chronicle is used to store the Tangle’s unlimited data flow and make it queryable. In other words, permanence allows the entire history of the Tangle to be stored indefinitely and makes that data easily accessible.
- **Consensus:** Agreement on a specific date or value in distributed multi-agent systems, in the presence of faulty processes.
- **Coordinator (only up to IOTA 2.0):** A trusted entity, as protection against malicious transactions. The Tangle is not yet a final product, it is still in beta. The network currently relies on a kind of shield, the so-called coordinator. It is open-source and runs on a Hornet node. The COO acts as a centralized, voluntary, and temporary alternative consensus mechanism for the Tangle. To do this, the COO sends honest transactions to the full nodes at regular intervals. These packets contain a signed message with no value, called a milestone. The full nodes in the Tangle consider a transaction as confirmed only if it is approved by a milestone. Important: The coordinator can only confirm transactions, but he cannot bypass the consensus rules. To create, freeze or steal tokens is not possible for him. This fixed rule and the COO address is hardcoded on each full node, so the coordinator’s influence on the tangle is very limited, since the tangle is also constantly monitored by all the other full nodes. > The Coo will be switched off with the IOTA 2.0 upgrade.
- **Communication Layer (IOTA 2.0):** This layer stores and communicates information. This layer contains the distributed ledger or tangle. The rate control and timestamps are also located in this layer.
- **Core Object type (IOTA 2.0):** An object type that must be parsed by all nodes. Parsers are computer programs responsible for decomposing and converting an input into a format more suitable for further processing.
- **Core Application (IOTA 2.0):** Core application that must be executed by all nodes, for example the value transfer application.
- **Child (IOTA 2.0):** A transaction that gets referenced by Parents.
- **Chrysalis:** The name of the IOTA 1.5 network upgrade.

## D

- **Data:** The tangle is a way of proving the integrity of data (verifiability of completeness and origin) in a trustworthy manner. At present, there are several cryptographic methods that make this possible, but security gaps are repeatedly discovered here, making data vulnerable to manipulation. This is a major problem, especially in cloud computing, where third-party audit tools are sometimes even used (for a fee) to ensure this data integrity. This is exactly where IOTA comes in and offers a relatively easy way to escape this with its protocol and without fees.
- **Data transactions:** These are confirmed directly and are notarized. With the help of “notarization”, it can be proven that an electronic document existed in a certain form at a certain time and has not been changed since its creation. When a notarization is created, a unique hash (fingerprint) of a document is calculated and stored together with a timestamp in the IOTA ledger (tangle) in an immutable manner.
- **Data storage:** Just like the internet, the IOTA protocol does not store data or in other words, the Tangle is not a data storage. If someone wants to store the history of transactions in a decentralized way, they can build a second-layer solution for this themselves or pay third parties for this storage. For the basic layer, IOTA focuses on performance, throughput, and security rather than building a global database.
- **Distributed Ledger Technology (DLT):** This is a database architecture that allows owners of digital assets to transfer and document them from peer to peer. Each transfer in a DLT is stored as a record in a distributed ledger (database). This database is stored in all nodes of a network.
- **DevNet:** The DevNet (developer network) is a pure test network to research and test a Tangle without Coordinator.
- **Decay:** Both Mana and pending Mana decay proportionally to its value, preventing Mana from growing indefinitely over time.
- **Double-spending:** Double-spending is a threat to a digital money system, where the same single digital token can be spent more than once. Unlike physical money, a digital token consists of a digital file that can be duplicated or counterfeited.
- **dRNG (Decentralized Random Number Generator):** This random number generator is required in Fast Probabilistic Consensus (FPC) to make the consensus model more resilient to attacks. In the case of conflicting transactions, the FPC votes on the transactions in question in several rounds. The threshold at which a node changes its mind in this vote is 50% +/- a small random deviation (using dRNG). In order to avoid stalemate or a specific outcome in the voting, this additional random component prevents potentially malicious nodes from influencing the voting process.
- **Dust Protection (IOTA 1.5):** Someone who wants to harm IOTA could automatically send 1i for years to repeatedly recreated addresses, driving up the ledger’s memory requirements to the point where a full-node would eventually only run on large servers. In Chrysalis if you want to create a microtransaction (<1Mi) you need to activate dust on the receiving address. That will allow you to receive a certain amount of dust. Also, the addresses with Colored Coins have to be tokenized. After the Coordicide, there will be another solution for IOTA 2.0.
- **Directed Acyclic Graph (DAG):** A directed acyclic graph is DLT structure that consists of edges and vertices that never form a closed loop. The IOTA architecture "the Tangle" is a form of directed acyclic graph.

## E

- **Eclipse attack:** A cyber-attack that aims to isolate a specific node rather than attack the entire network.
- **ETH Virtual Machine:** A VM is what executes the Smart Contract code so that it runs deterministically. The language in which you run the code provides hooks to access the sandbox on which the VM runs. In the case of IOTA, this is the ISCP sandbox, which only provides access to IOTA tokens, thus consensus also runs on IOTA tokens. It is only the VM that IOTA works with, foreign tokens have nothing to do with a VM running the SC code, not the ETH VM, nor the Cartesi VM.
- **Epoch (IOTA 2.0):** A time interval used for a specific type of consensus mana. At the end of each epoch, a snapshot is taken of the state of mana distribution on the network. Since this tool uses the timestamp of messages, each node can eventually reach a consensus on the mana distribution of an epoch.

## F

- **Faucet:** A pool of tokens (funds). Upon uncomplicated request, one gets a limited number of tokens for testing, especially for developers of own apps this is a great help.
- **Firefly:** Firefly is a wallet, intended to serve as a platform for the current and future IOTA ecosystem.
- **Finality:** The property that once a transaction has been completed, there is no way to reverse or change it. This is the moment when the parties involved in a transfer can consider the transaction completed. Finality can be deterministic or probabilistic.
- **Full nodes (Hornet, Bee):** They form the core (infrastructure) of the IOTA network. In order to participate in the peer-to-peer network, the full node must always be online and connected to neighbors (other full nodes). In addition, the transaction database must be synchronized with all other full nodes in the network. The role of full nodes is to interact with clients (wallets, DApps, etc.) and attach their transactions to the ledger, make transactions known to all other full nodes in the network, validate transactions and store them in the ledger.
- **Future Cone:** All messages that directly or indirectly reference a message are called its future cone.
- **Fork:** In IT, this is a new development branch after a project is split into a second follow-on project; the source code or parts of it are developed independently of the original parent project.
- **FPC(Fast Probabilistic Consensus):** Consensus that uses a random number and node opinions to reach consensus. In On-Tangle Voting, it is only used in a specific edge case. Check out OTVFPCS.

## G

- **Genesis transaction:** The Genesis transaction is the first transaction that created all IOTA tokens and distributed them to the addresses of the buyers.
- **GoShimmer (No Main net):** Prototype of the coordinator less version of IOTA written in the Go programming language. GoShimmer implements the various modules of Coordicide, such as auto peering, node identities, Mana, etc. GoShimmer serves as a test environment for the first alpha version and the test network. Everything tested here will be gradually merged with Hornet and Bee.
- **Generic Data Object (IOTA 2.0):** The most basic object type. All unrecognized data objects are defined this way.

## H

- **History:** The list of transactions that were directly or indirectly authorized by a particular transaction.
- **Hash values:** Checksums that are applied to the encryption of messages of variable length. Hash values are like fingerprints of a very long data set. Each message is assigned a very specific hash value.
- **Hooks:** An interface that allows foreign program code to be integrated into an existing application to extend it, change its flow, or intercept certain events.
- **Hornet Node (IOTA 1.5):** Community-developed IOTA Node written in the Go programming language. In addition, the coordinator also runs as a plugin via Hornet.

## I

- **Inclusion state:** Used to determine if a transaction has been accepted and confirmed by the network. Especially for a transaction and a list of tips: Inclusion state is true if the tip refers to this transaction.

## L

- **Local Snapshots:** Local snapshots are used to limit the memory requirements of the nodes. For this purpose, on the individual nodes old, already confirmed, transactions are deleted from the database. What remains is only a small file (list) with the balances on the respective addresses. Nodes perform the snapshot independently and at their own discretion. This feature allows faster synchronization, lower system resource requirements and no more waiting for global snapshots to clean up the database.
- **Layer:** In DLT a 2nd-layer refers to a secondary framework or protocol built on top of an existing distributed ledger. On these second layers, other applications can be executed without putting too much strain on the base layer. In IOTA, for example, these are the Smart Contracts and IOTA Streams.
- **Local Modifiers:** User-defined conditions that can be considered by nodes during tip selection. In IOTA, nodes do not necessarily have the same view of the tangle. Different types of information that are only available to them locally can be used to strengthen security.

## M

- **Merkle Tree:** A Merkle tree is a data structure used in computer science applications. In cryptocurrencies, Merkle trees are used to encode more efficiently and securely.
- **Mainnet:** The public usable IOTA network, in which the IOTA tokens are used that are traded on cryptocurrency exchanges.
- **Milestone (IOTA 1.5):** Milestones are messages that are signed and issued by the coordinator. Their main goal is to help the Tangle grow healthily and guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the status of that transaction and its entire history as confirmed.
- **Message:** A message is a core data type that reflects a vertex in the communication layer DAG. It contains the following properties: References to other messages, the sender’s public key, the issuing time of the message, the message sequence number from the node that issued the message, the payload that can be interpreted by higher layers, the nonce that the message uses to satisfy the PoW requirement, a signature that signs all of the above fields. A message is not forwarded until it becomes “solid”, i.e., its history is known to the node. Messages must meet a PoW requirement, which currently is to find a nonce so that the hash of the message’s fields (minus the signature) has a certain number of leading zeros.
- **Message overhead:** The additional information (metadata) that must be sent along with the actual information (data). This can include signatures, polls and anything that is transmitted over the network but is not the transaction itself.
- **Mana (IOTA 2.0):** When a value transaction is processed, a quantity called Mana will be “pledged” to a specified node ID. This quantity is related to the amount of IOTA moved into the transaction. The only way to gain Mana is to convince some token holder to pledge it to you. In this sense, Mana is Delegated Proof of Token Ownership. Mana, therefore, provides adequate Sybil protection because it is difficult to acquire it in arbitrary amounts.
- **Markers (IOTA 2.0):** A tool that exists only locally and allows certain calculations to be performed more efficiently, such as the calculation of the approval weight or the presence of certain messages in the past or future cone of another message.
- **Messages per Second (MPS):** The amount of messages issued to the network every second.

## N

- **Nakamoto Consensus:** Named after the creator of Bitcoin, Satoshi Nakamoto, the Nakamoto Consensus describes the replacement of coordination / communication between known agents with a cryptographic puzzle (Proof-of-Work). Completion of the puzzle determines which agent acts next.
- **Neighbors:** Network nodes that are directly connected and can exchange messages without intermediate nodes.
- **Nodes:** A node is any computer that connects to other nodes in the network via software. In principle, they serve as a connection point for data transfers. The Tangle works with different types of nodes, such as full nodes (Hornet, Bee), permanodes (Chronicle) or smart contract nodes (Wasp).
- **Network Layer (IOTA 2.0):** This layer manages the lower layers of Internet communication such as TCP. In this layer, the connections between the nodes are managed by the Auto peering and Peer Discovery modules and the Gossip protocol.
- **Network ID:** The network ID enables user-specific subtangles in which nodes can only recognize messages from the network ID listed in their configuration file.

## O

- **Orphan:** A transaction (or block) that is not referenced by any subsequent transaction (or block). An orphan is not considered confirmed and will not be part of the consensus.
- **Object (IOTA 2.0):** the most basic unit of information in the IOTA protocol. Each object has a type and size and contains data.
- **Oracles:** Oracles are designed to build a secure bridge between the digital and physical worlds in a decentralized, permissionless way. They bring off-chain data to decentralized applications and smart contracts on the IOTA network.
- **OTV (IOTA 2.0):** On Tangle Voting is the official name for the multiverse consensus described by Hans Moog. It is a new consensus mechanism that allows nodes to vote on conflicts directly by publishing a message to the tangle.
- **OTVFPCS (IOTA 2.0):** On Tangle Voting with FPCS (Fast Probabilistic Consensus on a Set) is a mechanism for breaking metastability, which can be used in addition to OTV (On Tangle Voting). Generally, in IOTA2.0, reaching a high approval weight is the finality criteria. If the approval weight is high enough, the message / transaction is finalized. With OTVFPC the initial opinion is created with OTV, if after some time the opinions of the nodes are still split, for whatever reason, FPC is activated to break this metastable state. The finality of value transactions should be reached faster this way.

## P

- **Parents:** A message directly references up to 8 previous messages that we call its parents. In IOTA 2.0 a parent can be either strong or weak (see approval switch).
- **Parallel reality ledger state (IOTA 2.0):** This state is used to track conflicts in the tangle. Two new ledger entries that are causally valid but in conflict with each other (ex. Double Spend) are posted into two separate “realities” for this purpose, representing possible but mutually exclusive future ledger states. The consensus mechanism (with FPC, etc.) will now operate until the perception of most nodes tilts in one direction and one of the two possible ledger states is accepted as true.
- **Partition Tolerant:** This means that a part of the Tangle can be disconnected from the main tangle for a certain time and continue to run without an Internet connection. These parts can be reconnected to the main Tangle when the Internet connection is restored.
- **Past Cone:** All messages that are directly or indirectly referenced by a message are called its past cone.
- **Parasite Chain Attacks:** A double spending attack on the Tangle. Here, an attacker attempts to reverse a transaction by setting up an alternate Tangle in which the funds were not spent. He then tries to get the majority of the network to accept the alternative Tangle as the legitimate one.
- **Permanode:** This type of node permanently stores the entire transaction history, possibly with the help of external storage solutions, and possibly only specific transactions (selective permanode).
- **Pending:** A transaction has been seen by the network but not yet confirmed.
- **Peer to Peer Network:** A decentralized network of different network nodes that are connected to each other and exchange data.
- **Peering:** The process of discovering and connecting to other network nodes.
- **Payload (IOTA 2.0):** A field in a message that determines the type. Examples are value payload (TransactionType type), FPC opinion payload (StatementType type), dRNG payload (Payload), Salt declaration payload, generic data payload.
- **Private Tangle:** A private tangle is comparable to a test network under complete control of the operator. This allows companies and developers to test their applications under self-defined environment variables without external influences and protected from prying eyes. There is no interoperability between a private Tangle and the IOTA Tangle. So, sending from one to the other does not work either. Each private Tangle is an independent network with its own nodes, tokens, and coordinator.
- **Proof of Work (PoW):** A time-consuming (expensive) mathematical calculation that uses computational power to prevent spam attacks. It consists of a difficult cryptographic puzzle that is easy to verify.
- **Proof of Inclusion (PoI):** With PoI, one is able to provide evidence that a transaction was indirectly referenced by another transaction without having to present the full chain of actual transactions between the two transactions. This is done by using a sequence of hashes instead of the actual transaction data to prove the inclusion of a transaction (inclusion) in the referenced subtangle.
- **Pruning:** In computer science, this is a term for simplifying, shortening, and optimizing decision trees. In IOTA, this is done by local snapshots on each full node. Old transactions that have already been confirmed are deleted from the database, leaving only a file (list) of credits on each address.
- **Public and private keys:** These are used in cryptographic systems which use key pairs. There are public keys which can be shared and private keys which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical problems to generate one-way functions. Effective security requires keeping the private key to remain only known to the owner. Public keys derived from this private key can be shared and used by others to verify ownership of the private key, without exposing the private key. Public keys function as addresses in IOTA.

## R

- **Rebroadcast:** Repeats the sending of a transaction. While a transaction is being sent to an IOTA node, it may go offline. In this case, the IOTA node may not forward the transactions to its neighbors, and the rest of the network will never see these transactions. As a result, that transaction will never be referenced by the coordinator and thus never confirmed. Resending a bundle means resending the same bundle to an IOTA node. This way you give your transactions another chance to be forwarded to the rest of the network.
- **Reusable Addresses:** With the introduction of the Ed25519 signature scheme, through the IOTA 1.5 Chrysalis upgrade, reusable addresses are now supported.
- **Reattachment:** Resending a transaction by re-selecting a tip and referencing newer tips by repeating PoW.

## S

- **Salt:** In cryptography, salt is a randomly chosen string of characters that is appended to a given plaintext before it is further processed to increase the entropy (disorder) of the input. It is often used for storing and transmitting passwords to increase information security.
- **Sandbox:** An isolated area where programs can be tested.
- **Software as a Service (SaaS):** The SaaS model is a subset of cloud computing. It is based on the principle that the software and IT infrastructure can be operated by an external service provider and rented by the customer as a service.
- **Smart Contract:** Smart contracts are contracts or programs that are automatically executed.
- **Smart Contract Chain:** Smart contracts are processed via a so-called contract chain, the representation of the contract state. A smart contract writes its state every time it is requested, and a new block is added for each of these state updates. All these updates are collected and confirmed in one block. So, the chain also contains all the past states. The chain can contain many Smart Contracts, all working on the same global state of the chain. From this perspective, the Contract chain is essentially a blockchain anchored on the Tangle. IOTA Smart Contracts can be considered “classic” Smart Contracts, but with the added feature that you can have multiple such parallel chains all using the same native IOTA token and trading between them in a trusted manner on the Tangle. This enables trusted interoperability between different applications.
- **Solidification time:** The time of solidification when the entire history of a transaction has been received by a node.
- **Splitting Attacks:** An attack in which a malicious node attempts to split the tangle into two branches. As one of the branches grows, the attacker publishes transactions on the other branch to keep both alive. Splitting attacks attempt to slow down the consensus process or perform double spending.
- **Sharding:** IOTA nodes have an upper limit on transactions per second (TPS) they can process. Through a type of database partitioning (breaking a very large database into smaller ones) into more manageable segments (shards), each shard would contain a unique set of account balances and nodes would then be assigned to individual shards to validate transactions. The goal is that by dividing into more manageable segments, it will increase transaction throughput and thus overcome scalability issues.
- **Signatures:** Signatures prove ownership of an address. Clients (Wallets) need this proof before nodes validate a transaction. To prove ownership, input transactions must be signed with the private key used to create the address.
- **Solidity (IOTA 2.0):** A message is marked as solid if its entire past cone until the Genesis (or the latest snapshot) is known.
- **Subtangle:** A consistent section of the tangle (i.e., a subset of messages / value objects) such that each contained message / value object also contains its referenced messages / value objects.
- **Streams:** IOTA Streams is a multifunctional second layer data transfer protocol that can be used for various types of data transfer (e.g., streaming data). For example, it allows sensors and other devices to encrypt entire data streams and anchor them in the IOTA Tangle. IOTA’s consensus protocol adds integrity and authenticity to these message streams. Given these characteristics, IOTA Streams fills an important need in industries where integrity, privacy, and immutability collide.
- **Sybil Attack:** An attempt to gain control of a peer-to-peer network by forging multiple false identities.
- **Snapshot:** A special feature of the Tangle. A snapshot deletes all transactions. Only transactions with a balance > 0 are kept. The metadata such as tags and messages are also deleted. What is left behind is just a list of addresses and balances. After a snapshot, the nodes use this list as “genesis”, a new starting point for the tangle. This reduces the size of the tangle network, allowing IOTA nodes to use less memory. Full nodes perform what are called “Local Snapshots” independently and at their own discretion.

## T

- **Tangle:** The Tangle is the underlying core data structure. In mathematical terms it is a directed acyclic graph (DAG). The Tangle is the distributed ledger of IOTA that stores all transactions.
- **Ternary system:** A trit (trinary digit) can have exactly three states (3 x 1 = 3): -1, 0 and 1. Three trits result in one tryte (33 = 27) and can thus represent 27 combinations. In IOTA, the letters A-Z (26 pieces) and the number 9 are used for this purpose.
- **Token:** The digital currency form (cryptocurrency). It is a powerful tool for value transfer between people and machines. Total number: 2,779,530,283,277,761 IOTA. The base units are Pi, Ti, Gi, Mi, ki, i
- **Trinity (IOTA 1.0):** Depreciated IOTA Wallet
- **Tip:** A transaction that has not yet been approved.
- **Tip Selection:** The process of selecting previous transactions to be referenced by a new transaction. In these references, a transaction ties into the existing data structure. IOTA only enforces that a transaction approves up to eight other transactions, the tip selection strategy is left to the user (with a good default provided by IOTA).
- **Tip Transaction:** A solid end transaction that is not yet a parent.
- **Transaction (IOTA 2.0):** A message that contains a Token transfer as a payload. The transferred tokens can be native IOTA Tokens or native IOTA Assets.

## U

- **UTXO model:** This is a so-called addressing model. UTXO stands for “unspent transaction output”, which simply means that you not only keep track of the credits on the address, but also keep track of where the credits come from and where they are sent when they are spent. Each token on an address is thus uniquely identifiable and each issue names the exact token they want to move. This enables faster and more accurate conflict handling and improves the resilience and security of the protocol.

## V

- **Value Layer (IOTA 2.0):** The Value layer builds on the Communication layer. It works exclusively with payloads of type Value object. This layer has several tasks: Forming the ledger state, processing, validation and output of transactions, conflict detection, conflict resolution via FPC, forming a DAG from value objects, tip selection (on value object tips).
- **Value Transactions:** Value transactions either withdraw IOTA tokens from an address or deposit them to an address. Nodes must verify these transactions to ensure that the sender actually owns the IOTA tokens and that additional tokens are never generated. To do this, the following checks are performed: All IOTA tokens withdrawn from an address are also deposited into one or more other addresses; the value of each transaction does not exceed the total global supply; signatures are valid.
- **Version Number (IOTA 2.0):** Indicates the correct format of each type.

## W

- **White-flag approach (IOTA 1.5):** Used to calculate credits. A simpler, conflict-avoiding approach that improves the speed and efficiency of tip selection, eliminates certain attacks, and significantly reduces the need for reattachments.
- **Wasp:** The Wasp node software is an implementation of Smart Contracts on the IOTA Tangle.
