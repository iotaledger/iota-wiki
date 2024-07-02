module.exports = {
  access:
    'The ability to write to the ledger by issuing blocks.  In other contexts, it means who has permission to a particular digital asset.',
  accessibility:
    'The ease of use and availability of a system or technology for users.',
  'accessible Writing':
    'In IOTA 2.0, users can feelessly mint their own blocks, meaning that almost anyone can be a block producer. This requires a high block creation not typically possible with blockchains.',
  account:
    'A component of the system used for economic activity in the protocol, including staking for validation, claiming Mana rewards, and holding credits to issue blocks.',
  'account Outputs':
    'UTXOs that map unique identifier to a mutable state. These outputs can be used by a user to hold funds, issue blocks, stake, and delegate.',
  'address checksum':
    'Checksum validation is a method to ensure an address is valid and free of typographical errors.',
  'Address Unlock Condition':
    ' A type of output unlock performed via a Signature Unlock in a transaction by signing the hash of the transaction data.',
  'adversarial validators':
    'Validators whose actions deviate from the protocol.',
  API: 'Application Programming Interfaces; These interfaces facilitate interactions between applications and the Tangle.',
  'application layer':
    'Handles block contents and payloads, especially significant for consensus and ledger state maintenance. All applications use the communication layer to transmit and store data.',
  'approval weight':
    'Measure of approval of each conflicting  transaction using the voting power of the validation blocks "issuer".',
  approvers:
    "In IOTA 2.0, parents are approved by their referencing messages, known as approvers. It's essentially a reverse mapping of parents. An approver might be either strong or weak, as in the parents definition.",
  'atomic transactions':
    'Instead of the bundle construct, IOTA and Shimmer use simpler Atomic Transactions. These transactions encapsulate all related information within a single message, reducing network overhead, improving spam protection and rate control, and simplifying Merkle proofs. This simplification also lowers implementation overhead and enhances the maintainability of the core node software.',
  autopeering:
    "A mechanism enabling nodes to select their neighbors automatically, without the node operator's manual intervention.",
  automation:
    'The use of technology or systems to perform tasks or processes without human intervention.',
  balance:
    'The funds on the addresses (account). These are always available and cannot be deleted or forgotten.',
  'balances Check':
    'A validation check within the VM to ensure that generated outputs match the consumed inputs.',
  bee: '(Deprecated) Node software developed by the IOTA foundation, written in the Rust programming language.',
  BIC: 'Block Issuance Credit; BIC are a form of Mana stored in Accounts that are burnt as spam protection.',
  block:
    'Data objects processed by nodes: they contain single transactions. A block is composed of 1) block header (auxiliary information to identify the block); 2) transaction/data;  3) signature.',
  'block factory':
    'Creates new blocks based on payloads by selecting tips for approval, generating slot commitments, registering timestamps and signing the information.',
  'block header':
    'The block header is all of the fields in the block wrapper except for the block and signature',
  'block inbox':
    'The initial destination for incoming blocks that need to be parsed and processed.',
  'block issuers':
    'Entities responsible for creating and issuing new blocks into the network.',
  'block metadata':
    'Additional information locally (i.e., in the node) associated with a block',
  'block reception':
    'The process of receiving blocks, either created locally by a node or received from a neighbor.',
  'block signature':
    'Digital signatures attached to blocks to ensure their authenticity.',
  'block time':
    'Block Time refers to the average amount of time it takes for a new block to be added to a blockchain. This metric is critical as it determines the network speed and efficiency in processing transactions and maintaining consensus.',
  'block wrapper':
    'The block wrapper is additional data around the typical blocks giving  important metadata, including the version, time, and block issuer. This  metadata allows nodes to follow the right version of the Tangle, to verify the timestamp of blocks, and to identify the creator of each  block.',
  'blockchain bottleneck':
    'As more transactions are issued, the block rate and size become bottlenecks in the system. It becomes increasingly difficult to promptly process all incoming transactions. Attempts to speed up block rates result in more orphaned blocks (blocks left behind), reducing the security of the blockchain.',
  booker:
    'Responsible for Tangle and ledger order, managing received blocks, and identifying conflicts. Creates conflicts in the ledger.',
  'bootstrapping attack':
    'An attack where a node downloads malicious snapshot files, including invalid transactions and balances.',
  'bootstrapping phase':
    'The initial phase of the IOTA 2.0 network where rewards and delegation mechanisms are designed to encourage early contributions to the network"s security.',
  'causal order':
    'The order of events in the Tangle that reflects the causal relationships between transactions.',
  'chain-switching rule':
    'The Chain-Switching Rule is an algorithm that allows nodes to switch their Slot Commitment Chain to the heaviest one, resolving divergent network conditions and discrepancies in the commitments.',
  chronicle:
    "A permanode solution from the IOTA Foundation. It enables storing all transactions reaching a node in a secure and scalable distributed database. Chronicle allows the Tangle's unlimited data flow to be stored indefinitely and makes it easily accessible.",
  chrysalis: 'The name of the IOTA 1.5 network upgrade.',
  collateral:
    'Assets or tokens locked up as a security deposit when participating in validation or consensus.',
  'commitment field':
    'A field in a block that contains a hash of information from older slots and is used for creating Slot Commitment Chains.',
  'committee rotation':
    'The procedures and mechanisms involved in the periodic change or reshuffling of validator committees. Normally committee rotation happens every epoch.',
  'communication layer':
    'Manages how blocks connect with each other to form the Tangle, regulated by the Rate Control and Congestion Control.',
  cone: 'The past cone is all the elements referenced by an element of a DAG. The future cone: all the elements that reference an element of a DAG.',
  confirmation:
    'The stages for a block (transaction) to be secured are Pre-Acceptance, Acceptance, Pre-Confirmation, Confirmation, and Slot Finalization. Pre-acceptance (pre-confirmation) requires approval by an online (total) supermajority of the validator committee. Acceptance (confirmation) requires approval by an online (total) supermajority of pre-accepted (pre-confirmed) blocks. Slot Finalization requires Confirmation of a block that includes the corresponding slot commitment.',
  'confirmation process':
    'The procedure through which blocks and transaction are approved by the validator committee.',
  confirmed:
    "Transactions are considered confirmed in the Tangle only when they are directly or indirectly referenced by a milestone validated by the Coordinator node. Nodes can recognize milestones because they're all configured with the Merkle root address of a Coordinator they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether the trusted Coordinator signed them. To ensure that new messages always have a chance of being confirmed, the Coordinator regularly sends indexed milestones. This allows nodes to compare the indexes of their milestones and check whether they are synchronized with the rest of the network.",
  'conflict set':
    'A collection of conflicting transactions that require resolution and are tracked during the booking process.',
  'conflicting transactions': 'Transactions that consume the same UTXO.',
  'congestion Control Mechanism':
    'An algorithm to regulate the influx of blocks in the network to maximize throughput and minimize delays.',
  consensus:
    'Agreement between nodes on the inclusion of blocks in the Tangle and validation of transactions.',
  'consensus flags':
    'Consensus flags for a block represent confidence levels about whether the block is successfully gossiped and included in the Tangle by the network. They include Pre-Acceptance, Acceptance, Pre-Confirmation, Confirmation, and Finalization',
  'consensus mechanism':
    'An algorithm for achieving agreement among nodes in a network about a subject (e.g., the state of the network or the validity of transactions)',
  'consumer-grade hardware':
    'Hardware components or devices that are affordable for individual consumers.',
  coordinator:
    "(only up to iota 2.0) A trusted entity used as protection against malicious transactions. The Tangle is still in its beta phase and relies on the coordinator. This is open-source and runs on a Hornet node. The COO acts as a centralized, voluntary, and temporary alternative consensus mechanism for the Tangle by regularly sending honest transactions to the full nodes. These transactions contain a signed message with no value, called a milestone. Full nodes consider a transaction as confirmed only if it is approved by a milestone. The coordinator can confirm transactions but can't bypass consensus rules. Hence, creating, freezing, or stealing tokens is impossible for it. The coordinator's influence on the tangle is limited as the tangle is continuously monitored by all other full nodes. The COO will be switched off with the IOTA 2.0 upgrade.",
  cryptocurrency:
    'A digital or virtual form of currency maintained by a distributed ledger.',
  CTPS: 'Confirmed transactions per second.',
  'cumulative weight':
    'A system for valuing transactions. The cumulative weight of a transaction increases with each additional transaction that references it. A path through transactions with a higher cumulative weight is preferred when selecting tips.',
  curl: 'This is one of the currently used hash functions. It\'s based on the "sponge" construction invented by the creators of Keccak (SHA-3).',
  data: 'The Tangle proves the integrity of data (verifiability of completeness and origin) in a reliable manner. Current cryptographic methods for this have repeated security vulnerabilities, making data prone to manipulation. This is especially problematic in cloud computing where sometimes third-party audit tools are even used (for a fee) to ensure this data integrity. IOTA and Shimmer offer a relatively straightforward and fee-free solution to this with their protocol.',
  'data flow':
    'The process of how data, specifically blocks, moves through the protocol, from reception or creation to acceptance in The Tangle.',
  'data storage':
    'Contrary to the internet, neither the IOTA nor Shimmer protocols serve as data storage. The Tangle is not designed as a data repository. If one wishes to maintain a decentralized transaction history, they can either design a second-layer solution themselves or commission third parties for this task. At its core, IOTA and Shimmer prioritize performance, throughput, and security over acting as a global database.',
  'data structure':
    'A data structure is a way of organizing data so that it can be efficiently and effectively used. The Tangle uses a variety of data  structures, including blocks, payloads, transactions, and commitments, to store and process data.',
  'data transactions':
    'These are confirmed directly and are notarized. With the help of "notarization", it can be proven that an electronic document existed in a certain form at a certain time and has not been changed since its creation. When a notarization is created, a unique hash (fingerprint) of a document is calculated and stored together with a timestamp in the ledger (Tangle) in an immutable manner.',
  decay:
    'The gradual reduction of Mana over time to prevent a monopoly and encourage continuous contribution of work. Both Mana and pending Mana decay in proportion to their value, ensuring that Mana does not perpetually accumulate over time.',
  'decentralized democracy':
    'Ensuring fair opportunities and accessibility to network resources and functionalities for all participants.',
  DeFi: 'Decentralized Finance; A financial system built on decentralized technology that provides financial services without intermediaries.',
  'decentralized networks':
    'Networks where control and decision-making authority are distributed among multiple nodes rather than being centralized.',
  DRR: 'Deficit Round Robin; An algorithm used in the IOTA2.0 node"s scheduler to dequeue and prioritize blocks for gossiping.',
  delegation:
    'The process of token holders entrusting their delegated stake to a validator to act on their behalf and get rewarded with Mana.',
  'deterministic Finality':
    'Also known as  “provable” or “absolute”, finality. An absolute level of certainty that once a transaction is added to the ledger, it cannot be changed or reverted. Deterministic Finality can be faster than other types of finality but halts when there is a network split or the activity of the network is low. ',
  'digital assets':
    'Digital possessions or resources, such as cryptocurrencies or tokens.',
  'digital Autonomy':
    'The ability for individuals and entities to have control and sovereignty over their digital lives, including their data, assets, and identity.',
  'digital identities':
    'The online representations or personas of individuals that are associated with their personal information and activities. Typically, these are implemented in a system where identities can certify other entities through a credential wallet.',
  'digital token':
    'A type of digital asset typically built on a blockchain or distributed ledger technology.',
  DAG: 'Directed Acyclic Graph; A data structure consisting of nodes (blocks) connected by edges (references) without cycles, used to represent transactions and their dependencies in The Tangle.',
  DLT: 'Distributed Ledger Technologyl; A type of technology that enables the secure and decentralized storage and sharing of information across a network and allows unaligned parties to maintain a common state. A DLT is a database system that enables the peer-to-peer transfer and recording of digital assets. Each transaction within a DLT is recorded in a distributed ledger, which is maintained across all network nodes.',
  'double-spending':
    'Two transactions that attempt to consume the same UTXO. Double-spending represents a major threat to digital currency systems. It involves spending the same digital token more than once. Digital tokens, unlike physical currency, comprise digital files that can be easily duplicated or counterfeited.',
  'dust protection':
    '(iota 1.5) To prevent IOTA from being exploited, one might continually send 1i to newly generated addresses for years, causing the ledger’s memory requirements to surge until only large servers could operate a full node. With Chrysalis, microtransactions (<1Mi) require the recipient address to enable dust. This permits a limited amount of dust transactions. Additionally, addresses with Colored Coins must be tokenized. Post-Coordicide, IOTA 2.0 will introduce a different solution.',
  'dynamic availability':
    'The ability of the system to continue to accept or confirm transactions despite arbitrary number of validators crashing.',
  'dynamic Pow':
    '(In development for IOTA 1.5 and Shimmer): This feature enables the coordinator to issue a milestone while simultaneously setting the future PoW score. If the network is underutilized, the PoW will decrease to a level manageable by micro-devices. Conversely, the coordinator can increase the PoW difficulty during high utilization, making attacks prohibitively expensive.',
  'eclipse attack':
    'An eclipse attack seeks to isolate a specific node rather than targeting the entire network.',
  epoch:
    'A specific time period during which a dedicated committee is responsible for driving consensus. Epoch consists of multiple slots.',
  'ETH virtual machine':
    "A virtual machine (VM) executes Smart Contract code to ensure deterministic outcomes. The programming language used to run the code provides hooks to the VM's sandbox. In Shimmer's context, this is the ISC sandbox, limited to Shimmer tokens, thereby ensuring consensus revolves around these tokens. The VM handles the execution of the smart contract code, unrelated to the token type, be it ETH VM or Cartesi VM.",
  'expiration Unlock':
    'A type of Output Unlock Condition that makes outputs controlled by a receiver expire after a deadline, meaning that the original sender regains full control of the tokens in the output (also known as "bounce back").',
  exploits:
    'Malicious actions or vulnerabilities that can be used to manipulate or compromise a system or network.',
  'fair access':
    'A property that ensures accessibility to network resources and functionalities for all participants, based in some Sybil protection algorithm.',
  faucet:
    'A faucet is a reservoir of tokens. Users can easily request a limited quantity of tokens for testing purposes, which proves particularly useful for app developers.',
  fees: 'Amount in Mana consumed by users for the creation of blocks.',
  finality:
    'For deterministic finality (like in IOTA 2.0), the state of a block or a transaction being irreversible and secure under any network conditions. For probabilistic finality, the state of a block or a transaction being irreversible and secure with certain set probability.',
  'finality gadget application':
    'Manages flags used for consensus among nodes about transactions and block validity.',
  finalization:
    'The irreversible operation where blocks receive sufficient approval and consensus, ensuring their permanence.',
  firefly:
    'Firefly is a wallet designed to cater to the present and future needs of the IOTA and Shimmer ecosystems.',
  fork: 'In IT, a fork represents a new development direction taken after branching out from an original project. The source code, or portions of it, is then developed independently from the parent project.',
  'fork-choice rule':
    'An algorithm for choosing between several chains; IOTA 2.0"s solution is the Chain-Switching Rule.',
  'foundry outputs':
    'An output type, Foundry Outputs enables you to mint your own tokens on the ledger.',
  'full nodes (Hornet)':
    "Full nodes constitute the network's backbone. For a full node to be part of the peer-to-peer network, it must always be online and connected to other full nodes. Moreover, it has to synchronize its transaction database with every other full node in the network. Full nodes process transactions from clients (like wallets and DApps), append them to the ledger, and share them with all other network nodes.",
  'future cone':
    'The future cone refers to all messages that directly or indirectly reference a particular message.',
  'genesis commitment':
    'Every slot commitment chain starts with the genesis commitment (commitment of slot 0) in order to be considered valid.',
  'genesis slot':
    'The initial slot in the protocol"s timeline from which all subsequent slots are linked.',
  'genesis transaction':
    "The Genesis transaction is the inaugural transaction that spawned all IOTA and Shimmer tokens, distributing them to the purchasers' addresses.",
  'gossip protocol':
    'A protocol for relaying information among nodes in a network.',
  'hash values':
    'Checksums generated from the encryption of variable-length messages. Hash values act like unique fingerprints for a long data set, with each message assigned a specific hash value.',
  history:
    'History refers to the compilation of transactions that were directly or indirectly authorized by a specific transaction.',
  'holding IOTA tokens': 'Owning and keeping IOTA tokens in one"s possession.',
  hooks:
    'Interfaces that allow external program code to be integrated into an existing application to extend its functionality, modify its flow, or intercept certain events.',
  'hornet node':
    'A community-developed IOTA Node written in the Go programming language. Additionally, the coordinator runs as a plugin via Hornet.',
  'hornet node (shimmer)':
    'A Shimmer Node, also written in the Go programming language. Similarly to the IOTA Node, the coordinator runs as a plugin via Hornet.',
  incentivization:
    'The act of providing rewards or incentives to encourage specific behaviors or actions.',
  inclusion:
    'The process of adding blocks in the Tangle. It is based on Acceptance.',
  'inclusion state':
    'Determines whether a transaction has been accepted and confirmed by the network. For any given transaction and a list of tips, the inclusion state is true if the tip refers to that transaction.',
  inflation:
    'The process of increasing the total supply of a cryptocurrency by minting or creating new tokens.',
  'input validity check':
    'Verification within the VM to confirm that consumed inputs are valid and not conflicting.',
  integrity:
    'Assurance that the data stored in the ledger has not been tampered with or altered in any unauthorized way.',
  interoperability:
    'The ability of different systems or technologies to work together seamlessly.',
  'IOTA 2.0':
    'The latest version of the IOTA protocol, built upon years of research and solutions to create a functional and aligned network.',
  'IOTA economy':
    'The economic system and activities surrounding the IOTA network.',
  'IOTA tokens':
    'The digital tokens specific to the IOTA network, granting voting power in the consensus mechanism and governance decisions.',
  'issuer deposit':
    'A small amount of IOTA tokens required to be locked by an account to deal with storage consumption and to enforce dust protection.',
  'issuer feature':
    'Similarly to the Sender Feature, it enables a verified issuer to be defined directly inside an output. However, the Issuer Feature is only available for NFT Outputs.',
  'issuer ID':
    'Information contained in a block, the Issuer ID denotes the account that created the block.',
  'issuing time':
    'A field in the block header that denotes the time at which the block was issued.',
  layer:
    'In DLT, a 2nd-layer refers to a secondary framework or protocol built on top of an existing distributed ledger. These secondary layers allow for additional applications to be executed without putting excessive strain on the base layer. Smart Contracts, for example, are executed on these second layers.',
  'leader ':
    'For a linear blockchain, this is the node that is supposed to add a new block to the blockchain (e.g in the context of Proof-of-Work, this is the first node that solves the cryptographic puzzle). For some DAG-based DLTs, this is the node which block is used to establish a total order on the set of blocks.',
  ledger:
    'A decentralized record or database that stores and verifies transactions or information. It is the state maintained in a DLT.',
  'ledger progress':
    'The timely updating of the ledger with transactions issued by participants.',
  'ledger state':
    'The collective state of the network"s unspent outputs, maintained by the Application Layer and used for consensus.',
  'liquid delegation':
    'A process where voting power is delegated to a validator without locking up tokens, and the delegator is still rewarded with a share of the Mana reward.',
  liveness:
    'The ability of a distributed network to make a continuous progress of the ledger.',
  'local modifiers':
    'User-defined conditions that nodes can consider during tip selection. In IOTA and Shimmer, nodes may not necessarily have the same view of the tangle. They can use various types of locally available information to enhance security.',
  'local snapshots':
    'Local snapshots help limit the memory requirements of nodes by allowing them to independently delete old, confirmed transactions from their databases, leaving behind a small file with the balances of respective addresses. This feature facilitates faster synchronization, reduces system resource requirements, and eliminates the need to wait for global snapshots for database cleanup.',
  mainnet:
    'The publicly accessible IOTA network where tradeable IOTA tokens on cryptocurrency exchanges are used.',
  mana: 'A reward resource generated by holding IOTA tokens. It is utilized for block issuance, access to network throughput, and protecting against Sybil attacks.',
  'mana burn':
    'The process of consuming a specific amount of Mana to create a block. The amount of Mana burned depends on recent congestion level.',
  MEV: 'Maximal or Miner Extractable Value; The potential profit that miners or validators can extract from information they glean from your transaction while it waits in the mempool.',
  mempool:
    'Where transactions are kept in waiting before being processed and where all details of a transaction can be seen by anyone. ',
  'merkle tree':
    'A Merkle tree is a data structure employed in computer science. In cryptocurrencies, Merkle trees are utilized for efficient and secure data encoding.',
  message:
    "A message is a core data type that represents a vertex in the communication layer's DAG. It contains properties like references to other messages, the sender's public key, the issuing time of the message, the payload (interpretable by higher layers), the nonce for PoW requirement, and a signature. A message is not forwarded until it becomes \"solid,\" i.e., its history is known to the node. Messages must meet a PoW requirement, which currently involves finding a nonce so that the hash of the message's fields (excluding the signature) has a certain number of leading zeros.",
  'message overhead':
    'The extra information (metadata) that must be sent along with the actual data. This may include signatures, polls, and any other data transmitted over the network that is not the transaction itself.',
  MPS: 'Messages Per Second; Represents the number of messages dispatched to the network every second.',
  'metadata feature': 'Enables outputs to carry additional data.',
  milestone:
    '(IOTA 1.5) Milestones are messages signed and issued by the coordinator. They are instrumental in ensuring healthy growth of the Tangle and guaranteeing finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the status of that transaction and its entire history as confirmed.',
  'nakamoto consensus':
    "Named after Bitcoin's creator, Satoshi Nakamoto, this consensus describes the use of a cryptographic puzzle (Proof-of-Work) to replace coordination/communication between known agents. Solving the puzzle determines the subsequent agent's action.",
  neighbors:
    'Directly connected network nodes that can exchange messages without intermediary nodes.',
  'network congestion':
    'The level of traffic or demand on a network, affecting the speed and efficiency of transactions.',
  'network ID':
    'An identifier enabling user-specific subtangles. Nodes can only recognize messages from the network ID stipulated in their configuration file.',
  'network identifier':
    'A field in the block header that identifies the network.',
  'network layer':
    'The layer of the IOTA protocol responsible for managing the P2P overlay network, including peer discovery, neighbor selection, and gossip.',
  'network utility':
    'The usefulness and functionality provided by the network to its participants.',
  'NFT Outputs':
    'A type of output that enables you to mint and define metadata for NFTs.',
  node: 'A device or computer that participates in the operation of a network, including processing blocks and transactions and maintaining its integrity through validation.',
  nodes:
    'A node is any computer that communicates with other nodes in the network using specific software. Essentially, nodes act as connection points for data transfers. The Tangle employs various node types, including full nodes (Hornet, Bee), permanodes (Chronicle), and smart contract nodes (Wasp).',
  NFT: 'Non-Fungible Token; A type of digital token that represents ownership or proof of authenticity of a unique item or asset.',
  'non-validator nodes': 'Nodes in the network that are not validators.',
  oracles:
    'Oracles establish a secure, decentralized bridge between digital and physical realms. They introduce off-chain data to decentralized applications and smart contracts within the network.',
  orphan:
    'A transaction (or block) lacking references from any subsequent transaction (or block). Orphans are unconfirmed and remain excluded from consensus.',
  'orphaned block': 'A block that is not accepted becomes orphaned.',
  outbox:
    'A buffer where soon-to-be-scheduled blocks are enqueued before they are gossiped to the network.',
  output:
    'Outputs (“unspent transaction outputs” - UTXOs) make up the ledger state. Transactions update the ledger state by taking as input a set of outputs and producing a new set of outputs.',
  'P2P overlay network':
    'A network where all nodes have equal roles and perform the same actions, running on top of another network like the internet.',
  'parallel processing':
    'The parallel validation of transactions without requiring total ordering. Processing can be done on multiple cores at the same time.',
  'parallel write access':
    'The ability for multiple participants to simultaneously write to the Tangle in the IOTA 2.0 protocol.',
  'parasite chain attacks':
    'A double-spending attack targeting the Tangle. Attackers attempt to reverse a transaction by creating an alternate Tangle where the funds remain unspent, seeking to convince the network majority to accept this version as legitimate.',
  'parent blocks':
    'Blocks that a particular block in the Tangle references as its predecessors.',
  parents:
    'A message can directly reference up to 8 preceding messages, known as its parents. In IOTA 2.0, a parent might be either strong or weak (see approval switch).',
  parser:
    'Initial step of the Data Flow, translates bytes into usable information, filtering out redundant or invalid data.',
  'partition tolerance':
    'The ability of a system to continue working despite a communications break (partition) in the connection between nodes.',
  'partition tolerant':
    'A segment of the Tangle can operate offline, disconnected from the main tangle for a duration, and later reconnect once an Internet connection resumes.',
  'past cone':
    'The set of messages that are directly or indirectly referenced by a given message is termed its past cone.',
  payload:
    'The data carried by a block, which is interpreted by the upper layers of the IOTA 2.0 protocol and used by applications within the IOTA network.',
  'peer discovery':
    'Module in the Network Layer that looks for nodes that participate in the network.',
  'peer to peer network':
    'A decentralized network comprising distinct nodes interconnected and engaged in data exchange.',
  peering:
    'The procedure of detecting and establishing connections with other network nodes.',
  pending:
    'A transaction that has been propagated through the network but not yet confirmed.',
  permanode:
    'This node type permanently retains the entire transaction history, potentially with external storage aids, or selectively stores specific transactions (selective permanode).',
  'permissionless system':
    'A system that allows anyone to participate and interact without requiring authorization or approval.',
  'pre-Acceptance Flag':
    'A block is given the “Pre-Acceptance” flag when an online supermajority of the committee references it (directly or indirectly).',
  'probabilistic finality':
    'With probabilistic finality, finality is reinforced with each block added to the blockchain. The more blocks added after block A, the greater the probability that block A will not be reverted.',
  PoI: 'Proof of Inclusion; PoI enables proving that a transaction was indirectly referenced by another without needing to present the entire chain of transactions linking them. Instead, a sequence of hashes replaces actual transaction data to validate the inclusion of a transaction in the referenced subtangle.',
  PoW: 'Proof of Work; A computationally intensive mathematical operation that prevents spam attacks by requiring a costly cryptographic puzzle solution that is, nonetheless, easy to validate.',
  'protocol version':
    'A field in a block header that denotes which protocol version apply to the block.',
  pruning:
    'Process of removing or discarding unnecessary data (such as blocks and transactions) from the node database.The primary purpose of pruning is to reduce the storage requirements of a blockchain system while retaining essential information for its operation. Normally the removed data is already finalized.',
  'public and private keys':
    'These are essential components of cryptographic systems utilizing key pairs, consisting of public keys, which can be shared, and private keys known only to the owner. The generation of these keys depends on cryptographic algorithms based on mathematical problems yielding one-way functions. Security depends on the private key remaining private. Public keys derived from the private key can be shared and used to verify ownership of the private key without revealing it. In IOTA and Shimmer, public keys function as addresses.',
  'rate setter':
    'A module that determines the fair rate at which an issuer can issue new blocks.',
  reattachment:
    'The process of resending a transaction through the reselection of a tip, referencing newer tips, and performing PoW again.',
  rebroadcast:
    'Rebroadcasting involves retransmitting a transaction. If a node goes offline while a transaction is being sent, it may not relay the transactions to its neighbors, making these transactions invisible to the network. Consequently, these transactions will never be referenced by the coordinator and hence never confirmed. Resending a bundle refers to transmitting the same bundle to a node, providing another opportunity for your transactions to be relayed to the network.',
  references:
    'Connections established by blocks with other blocks, regardless of witness or approval weight.',
  'reusable addresses':
    'Following the IOTA 1.5 Chrysalis upgrade and the introduction of the Ed25519 signature scheme, reusable addresses are now possible.',
  salt: "In cryptography, a salt is a random string appended to plaintext before further processing, thereby enhancing input entropy (disorder). It's commonly used in password storage and transmission to bolster information security.",
  sandbox: 'A controlled environment where programs can be tested safely.',
  scheduler:
    'A component that manages the scheduling of blocks for gossiping, ensuring fairness and preventing spam.',
  'sender feature': 'Used to specify the validated sender of an output.',
  sharding:
    'Sharding is a type of database partitioning that divides a large database into smaller, more manageable segments, or shards. Each shard contains a unique set of account balances, and nodes are assigned to individual shards to validate transactions. The goal is to increase transaction throughput and thus address scalability issues.',
  signatures:
    'Signatures prove ownership of an address. Nodes require this proof to validate a transaction. To prove ownership, input transactions must be signed with the private key used to create the address.',
  slot: 'Time interval of fixed duration. The protocol divides time into non-overlapping slots. For each slot, nodes generate a slot commitment which encapsulates all accepted blocks and transactions issued within this time interval.',
  'slot commitment':
    'Slot commitments are checkmarks of all blocks (and their contents) that occur within slots. A slot commitment always refers to the previous slot commitment, creating a chain.',
  'slot commitment chain':
    'A chain created by a sequence of slot commitments. It is used to determine eligible blocks and finality.',
  'slot commitment ID':
    'A field in a block header that identifies the slot the block commits to.',
  'smart contract':
    'Smart contracts are programs that execute contracts automatically.',
  'smart contract chain':
    'Smart contracts operate through a contract chain, which represents the contract state. Every request to a smart contract adds a new block to this chain. These updates are confirmed in one block, also containing all past states. The chain can contain multiple Smart Contracts all working on the same global state. Essentially, the Contract chain is a blockchain anchored on the Tangle. IOTA Smart Contracts are similar to "classic" Smart Contracts but feature multiple parallel chains that use the same native IOTA and Shimmer tokens, enabling trusted interoperability between different applications.',
  'smart contracts':
    'Contracts with predefined rules encoded on a distributed ledger with conditions that are automatically enforced and executed by the nodes',
  snapshot:
    'A snapshot is a special feature of the Tangle that removes all transactions, keeping only those with a balance > 0. Metadata like tags and messages are also deleted, leaving a list of addresses and balances. After a snapshot, nodes use this list as the new "genesis" or starting point for the Tangle. This reduces the size of the Tangle, allowing nodes to use less memory. Full nodes can perform "Local Snapshots" independently and at their own discretion.',
  'social dynamics':
    'The replication of real-world social dynamics in a digital system, including account-based digital identities and the ability to manage assets and digital identity easily.',
  'solid blocks':
    'Blocks consistently linked to past blocks, ensuring no missing information when reviewing past blocks.',
  solidification:
    'The process of ensuring that a block has all its dependencies and can be considered solid within the Tangle.',
  'solidification time':
    'Solidification time is when a node has received the entire history of a transaction.',
  solidifier:
    'Ensures blocks are consistently linked to past blocks, creating solidity and preventing missing information when tracing back in time.',
  'soul-bound token':
    'Non-transferable tokens representing traits/features/achievements of a person/entity.',
  'splitting attacks':
    'An attack in which a malicious node tries to split the Tangle into two branches. Splitting attacks aim to slow down the consensus process or enable double spending.',
  'staked tokens':
    'Tokens that are locked up as collateral to stabilize voting power distribution and protect the protocol.',
  staking:
    'The process of holding and locking cryptocurrency in a wallet to support the operations and security of a blockchain network.',
  stardust: 'The name of the first Shimmer network upgrade.',
  'state machine':
    'State machines are used in DLTs to model and implement the behavior of the system. For example, a DLT might use a state machine to model the state of the ledger, the state of the participants in the network, and the state of the consensus algorithm.',
  'storage deposit mechanism':
    'The Storage Deposit Mechanism prevents the ledger from bloating by requiring a small deposit for transactions that store additional data (like NFT metadata). This is implemented through a type of Output Unlock Condition known as the Storage Deposit Return. This unlock condition allows a return amount to be specified that has to be refunded to the original transaction sender"s account. The deposited tokens are refunded when the data is no longer needed, i.e., when the output is consumed by removing the additional data.',
  'stream processing':
    'A technique that enables the processing of blocks immediately on arrival.',
  streams:
    "IOTA Streams is a second layer data transfer protocol used for various types of data transfer, including streaming data. It allows devices to encrypt entire data streams and anchor them in the IOTA Tangle. IOTA's consensus protocol ensures the integrity and authenticity of these message streams. This makes IOTA Streams particularly useful in industries where integrity, privacy, and immutability are crucial.",
  subtangle:
    'A consistent section of the Tangle (i.e., a subset of messages / value objects) such that each contained message/value object also contains its referenced messages/value objects.',
  supermajority:
    'A threshold for achieving consensus flags. A supermajority is a subset of the committee that has more than two-thirds of the total voting power.',
  'sybil attacks':
    'Attacks where a malicious entity creates multiple identities or nodes in a network to gain control or disrupt its operation.',
  'sybil protection mechanism':
    'A mechanism that prevents malicious users from overwhelming the network by creating multiple fake identities (Sybil attacks).',
  'synchronous network':
    'A network is synchronous if the duration between the transmission of a data block by one node and its receipt by another node is both predictable and consistently limited. For instance, it may always remain under 0.5 seconds.',
  syncing:
    'A process when a node downloads and verifies the entire history of the Tangle corresponding to a slot commitment chain. This allows to ensure that it has an up-to-date and accurate copy of the ledger.',
  'tag feature':
    'Enables outputs to be tagged with a small amount of data intended to be used as an index.',
  tangle:
    'A data structure based on a DAG used to store blocks and their relations. The Tangle is the core underlying data structure of IOTA.',
  'tangle History':
    'The entire record of blocks and transactions in The Tangle, up to the last available snapshot.',
  'ternary system':
    'A trit (trinary digit) can have three states: -1, 0 and 1. Three trits result in one tryte, which can thus represent 27 combinations. In IOTA, the letters A-Z (26 in total) and the number 9 are used for this purpose.',
  throughput:
    'The rate or capacity at which transactions or data can be processed or transmitted within a given timeframe by the network.',
  'throughput fairness':
    'The principle of granting proportional access to network throughput based on a participant"s Mana holdings in IOTA 2.0.',
  'time-lock unlock':
    'A type of Output Unlock that sets a deadline after which an output can be consumed.',
  tip: 'A block that is not referenced by any other block in the node"s local perception.',
  'tip manager':
    'Adds scheduled blocks to tip pool, maintains tip pool by removing too old or newly approved blocks.',
  'tip pool':
    'Collection of blocks selected by the node for potential selection as a parent.',
  'tip selection':
    'The process of selecting previous transactions to reference in a new transaction. These references allow a transaction to tie into the existing data structure. IOTA and Shimmer only enforce that a transaction approves up to eight other transactions, the tip selection strategy is left to the user (with a suitable default provided by Shimmer).',
  TSA: 'Tip Selection Algorithm; An algorithm determining which tips should be referenced by a newly created block.',
  'tip transaction':
    'A solid end transaction that has not yet become a parent.',
  token:
    'The digital currency form (cryptocurrency) of IOTA. It is a powerful tool for transferring value between people and machines. The total number of IOTA tokens is 2,779,530,283,277,761. The base units are Pi, Ti, Gi, Mi, ki, i',
  tokenomics:
    'The economics and principles governing the behavior, distribution, and value of tokens within a system or network.',
  'total order':
    'Sequential order of transactions typically found in linear chain DLTs.',
  transaction:
    'The record of transferring digital assets or data from one participant to other participant(s).',
  'transaction confirmation':
    'The confirmation of a transaction is defined when a transaction is accepted by the validator committee and one of its attachments (blocks containing this transaction) is confirmed.',
  'transaction payload':
    'The transaction payload is the essence of a transaction that allows to exchange tokens. It is the data that is included in a transaction that specifies the tokens to be exchanged, the parties involved, and the terms of the exchange.',
  'transaction validation':
    'The process of verifying the correctness of a transaction within the protocol.',
  'trinity (iota 1.0)': 'The deprecated IOTA Wallet',
  unconfirmed:
    'Blocks or transactions that have not yet been confirmed by the validator committee. See Confirmation.',
  'unlock conditions':
    'Unlock conditions are special output unlocking logic that need to be satisfied whenever that output is consumed.',
  UTXO: 'Unspent Transaction Output; An Unspent Transaction Output ledger state is one where balances aren"t directly associated with addresses but with the outputs of transactions. In this model, transactions specify the outputs of previous transactions as inputs, which are consumed in order to create new outputs. A transaction must consume the entirety of the specified inputs.',
  'UTXO model':
    'UTXO stands for "unspent transaction output". It is a type of addressing model that tracks not only the credits on an address but also their origins and destinations when spent. Each token on an address is uniquely identifiable, and each output names the exact token it wants to move. This model enables faster and more accurate conflict resolution, enhancing the protocol"s resilience and security.',
  validation:
    'The process of verifying that transactions conform to certain rules set by the protocol.',
  'validation blocks':
    'Validation Blocks is a special type of blocks that are issued by members of the Validator Committee. These block allows to reach consensus in the network.',
  validator:
    'A validator is a participant in a Proof of Stake (PoS) network that stake their tokens in order to validate transactions and blocks and maintain the security of the DLT/blockchain.',
  'validator committee':
    'For an epoch, a committee selection procedure determines a subset of validators, who will carry out the consensus protocol during the epoch. This subset is called the validator committee and the validators included in the said subset are called the committee members for the epoch.',
  'validator registration':
    'The process of registering as a validator by issuing a block with a special payload type. The registration is only considered successful when the registration block and the mutating transaction get accepted',
  'value extraction':
    'The act of taking or deriving value from a system or network without contributing to its growth or sustainability.',
  'value transactions':
    'Value transactions either withdraw tokens from an address or deposit them to an address. Nodes verify these transactions to ensure that the sender owns the Shimmer tokens and that additional tokens are not generated. To do this, the following checks are performed: All Shimmer tokens withdrawn from an address are also deposited into one or more other addresses; the value of each transaction does not exceed the total global supply; signatures are valid.',
  VM: 'Virtual Machine; A component responsible for executing transactions within the ledger.',
  'volume and velocity':
    'The capacity to handle a large number of transactions quickly, with fast confirmation times.',
  'voting power':
    'The influence or weight a validator in the committee has in the consensus process.',
  wasp: 'Wasp is the node software that implements Smart Contracts on the Tangle.',
  'white-flag approach':
    '(iota 1.5) A simplified, conflict-avoiding approach that improves the speed and efficiency of tip selection, eliminates certain attacks, and significantly reduces the need for reattachments.',
  'witness weight':
    'Measure of approval of each block using the voting power of the validation blocks" issuer.',
  'writing to the ledger':
    'The act of creating blocks containing transactions.',
};
