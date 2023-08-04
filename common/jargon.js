module.exports = {
  'address checksum':
    'Checksum validation is a method to ensure an address is valid and free of typographical errors.',
  'dynamic pow':
    '(In development for IOTA 1.5 and Shimmer): This feature enables the coordinator to issue a milestone while simultaneously setting the future PoW score. If the network is underutilized, the PoW will decrease to a level manageable by microdevices. Conversely, the coordinator can increase the PoW difficulty during high utilization, making attacks prohibitively expensive.',
  'auto peering':
    "A mechanism enabling nodes to select their neighbors automatically, without the node operator's manual intervention.",
  'API(application programming interfaces)':
    'These interfaces facilitate interactions between applications and the Tangle.',
  'atomic transactions':
    'Instead of the bundle construct, IOTA and Shimmer use simpler Atomic Transactions. These transactions encapsulate all related information within a single message, reducing network overhead, improving spam protection and rate control, and simplifying Merkle proofs. This simplification also lowers implementation overhead and enhances the maintainability of the core node software.',
  'application layer':
    '(iota 2.0) The top layer of the 3-layer communication protocol. The IOTA protocol supports various external applications running on the Message Tangle. Applications can be designed by anyone, and users decide which applications to run on their nodes. All applications use the communication layer to transmit and store data.',
  'approval switch':
    '(iota 2.0) This mechanism allows for a selection between the strong or weak tip pool when a message is selected as a parent.',
  'approval weight':
    '(iota 2.0) A message receives Mana-weight by direct or indirect approval. However, only strong parents can pass on the mana weight to the past, while weak parents receive the weight from their weak children but do not pass it on.',
  approvers:
    "(iota 2.0) Parents are approved by their referencing messages, known as approvers. It's essentially a reverse mapping of parents. An approver might be either strong or weak, as in the parents' definition.",
  balance:
    'The funds on the addresses (account). These are always available and cannot be deleted or forgotten.',
  'blockchain bottleneck':
    'As more transactions are issued, the block rate and size become bottlenecks in the system. It becomes increasingly difficult to promptly process all incoming transactions. Attempts to speed up block rates result in more orphaned blocks (blocks left behind), reducing the security of the blockchain.',
  branch:
    '(iota 2.0) This term refers to a version of the ledger that temporarily coexists with other versions, each spawned by conflicting transactions.',
  bee: '(Deprecated) Node software developed by the IOTA foundation, written in the Rust programming language.',
  'bootstrapping attack':
    'An attack where a node downloads malicious snapshot files, including invalid transactions and balances.',
  curl: "This is one of the currently used hash functions. It's based on the 'sponge' construction invented by the creators of Keccak (SHA-3).",
  confirmed:
    "Transactions are considered confirmed in the Tangle only when they are directly or indirectly referenced by a milestone validated by the Coordinator node. Nodes can recognize milestones because they're all configured with the Merkle root address of a Coordinator they trust to confirm messages. Using this address, nodes can validate the signatures in milestones to verify whether the trusted Coordinator signed them. To ensure that new messages always have a chance of being confirmed, the Coordinator regularly sends indexed milestones. This allows nodes to compare the indexes of their milestones and check whether they are synchronized with the rest of the network.",
  ctps: 'Confirmed transactions per second.',
  'cumulative weight':
    'A system for valuing transactions. The cumulative weight of a transaction increases with each additional transaction that references it. A path through transactions with a higher cumulative weight is preferred when selecting tips.',
  chronicle:
    "A permanode solution from the IOTA Foundation. It enables storing all transactions reaching a node in a secure and scalable distributed database. Chronicle allows the Tangle's unlimited data flow to be stored indefinitely and makes it easily accessible.",
  consensus:
    'Agreement on a specific date or value in distributed multi-agent systems, even in the presence of faulty processes.',
  coordinator:
    "(only up to iota 2.0) A trusted entity used as protection against malicious transactions. The Tangle is still in its beta phase and relies on the coordinator. This is open-source and runs on a Hornet node. The COO acts as a centralized, voluntary, and temporary alternative consensus mechanism for the Tangle by regularly sending honest transactions to the full nodes. These transactions contain a signed message with no value, called a milestone. Full nodes consider a transaction as confirmed only if it is approved by a milestone. The coordinator can confirm transactions but can't bypass consensus rules. Hence, creating, freezing, or stealing tokens is impossible for it. The coordinator's influence on the tangle is limited as the tangle is continuously monitored by all other full nodes. The COO will be switched off with the IOTA 2.0 upgrade.",
  'communication layer':
    '(iota 2.0) This layer stores and communicates information. It contains the distributed ledger or Tangle. The rate control and timestamps are also located in this layer.',
  'core object type':
    '(iota 2.0) This is an object type that all nodes must parse. Parsers are computer programs that decompose and convert input into a format more suitable for further processing.',
  'core application':
    '(iota 2.0) A core application is an application that all nodes must execute. For instance, the value transfer application.',
  child: '(iota 2.0) A transaction that is referenced by Parents.',
  chrysalis: 'The name of the IOTA 1.5 network upgrade.',
  stardust: 'The name of the first Shimmer network upgrade.',
  data: 'The Tangle proves the integrity of data (verifiability of completeness and origin) in a reliable manner. Current cryptographic methods for this have repeated security vulnerabilities, making data prone to manipulation. This is especially problematic in cloud computing where sometimes third-party audit tools are even used (for a fee) to ensure this data integrity. IOTA and Shimmer offer a relatively straightforward and fee-free solution to this with their protocol.',
  'data transactions':
    'These are confirmed directly and are notarized. With the help of "notarization", it can be proven that an electronic document existed in a certain form at a certain time and has not been changed since its creation. When a notarization is created, a unique hash (fingerprint) of a document is calculated and stored together with a timestamp in the ledger (Tangle) in an immutable manner.',
  'data storage':
    'Contrary to the internet, neither the IOTA nor Shimmer protocols serve as data storage. The Tangle is not designed as a data repository. If one wishes to maintain a decentralized transaction history, they can either design a second-layer solution themselves or commission third parties for this task. At its core, IOTA and Shimmer prioritize performance, throughput, and security over acting as a global database.',
  'distributed ledger technology (dlt)':
    'DLT is a database system that enables the peer-to-peer transfer and recording of digital assets. Each transaction within a DLT is recorded in a distributed ledger, which is maintained across all network nodes.',
  devnet:
    'DevNet, or developer network, is a dedicated test network to experiment with and test a Tangle that operates without a Coordinator.',
  decay:
    'Both Mana and pending Mana decay in proportion to their value, ensuring that Mana does not perpetually accumulate over time.',
  'double-spending':
    'Double-spending represents a major threat to digital currency systems. It involves spending the same digital token more than once. Digital tokens, unlike physical currency, comprise digital files that can be easily duplicated or counterfeited.',
  'drng (decentralized random number generator)':
    'dRNG is crucial for the Fast Probabilistic Consensus (FPC) as it fortifies the consensus model against attacks. For conflicting transactions, the FPC conducts several rounds of voting. The decision threshold for nodes is 50% plus or minus a slight random deviation generated by dRNG. This randomness prevents potential adversaries from manipulating the vote.',
  'dust protection':
    '(iota 1.5) To prevent IOTA from being exploited, one might continually send 1i to newly generated addresses for years, causing the ledger’s memory requirements to surge until only large servers could operate a full node. With Chrysalis, microtransactions (<1Mi) require the recipient address to enable dust. This permits a limited amount of dust transactions. Additionally, addresses with Colored Coins must be tokenized. Post-Coordicide, IOTA 2.0 will introduce a different solution.',
  'directed acyclic graph (dag)':
    'A directed acyclic graph (DAG) is a DLT structure made up of vertices and edges that never create a closed loop. The Tangle is a type of DAG.',
  'eclipse attack':
    'An eclipse attack seeks to isolate a specific node rather than targeting the entire network.',
  'eth virtual machine':
    "A virtual machine (VM) executes Smart Contract code to ensure deterministic outcomes. The programming language used to run the code provides hooks to the VM's sandbox. In Shimmer's context, this is the ISC sandbox, limited to Shimmer tokens, thereby ensuring consensus revolves around these tokens. The VM handles the execution of the smart contract code, unrelated to the token type, be it ETH VM or Cartesi VM.",
  epoch:
    "(iota 2.0) An epoch is a set time interval reserved for a specific consensus mana type. At every epoch's conclusion, the network captures a snapshot of the mana distribution. Given that this tool leverages timestamps of messages, each node can eventually agree on an epoch’s mana allocation.",
  faucet:
    'A faucet is a reservoir of tokens. Users can easily request a limited quantity of tokens for testing purposes, which proves particularly useful for app developers.',
  firefly:
    'Firefly is a wallet designed to cater to the present and future needs of the IOTA and Shimmer ecosystems.',
  finality:
    "Finality indicates that once a transaction has been executed, it's irreversible and finalized. This is the juncture where the transaction parties recognize its completion. Finality can be deterministic or probabilistic.",
  'full nodes (hornet)':
    "Full nodes constitute the network's backbone. For a full node to be part of the peer-to-peer network, it must always be online and connected to other full nodes. Moreover, it has to synchronize its transaction database with every other full node in the network. Full nodes process transactions from clients (like wallets and DApps), append them to the ledger, and share them with all other network nodes.",
  'future cone':
    'The future cone refers to all messages that directly or indirectly reference a particular message.',
  fork: 'In IT, a fork represents a new development direction taken after branching out from an original project. The source code, or portions of it, is then developed independently from the parent project.',
  'fpc(fast probabilistic consensus)':
    'FPC is a consensus mechanism that employs a random number and node opinions to achieve consensus. In On-Tangle Voting, FPC is utilized only in specific edge cases. For more details, refer to OTVFPCS.',
  'genesis transaction':
    "The Genesis transaction is the inaugural transaction that spawned all IOTA and Shimmer tokens, distributing them to the purchasers' addresses.",
  'goshimmer (no main net)':
    'GoShimmer is a prototype of IOTA’s coordinator-less version written in the Go language. GoShimmer encapsulates various Coordicide modules, like auto peering, node identities, Mana, among others. It serves as a testing ground for the first alpha version and the testnet. Components tested in GoShimmer are systematically integrated with Hornet.',
  'generic data object':
    '(iota 2.0) This is the most elementary object type. All unrecognized data objects are treated as generic data objects.',
  history:
    'History refers to the compilation of transactions that were directly or indirectly authorized by a specific transaction.',
  'hash values':
    'Checksums generated from the encryption of variable-length messages. Hash values act like unique fingerprints for a long data set, with each message assigned a specific hash value.',
  hooks:
    'Interfaces that allow external program code to be integrated into an existing application to extend its functionality, modify its flow, or intercept certain events.',
  'hornet node':
    'A community-developed IOTA Node written in the Go programming language. Additionally, the coordinator runs as a plugin via Hornet.',
  'hornet node (shimmer)':
    'A Shimmer Node, also written in the Go programming language. Similarly to the IOTA Node, the coordinator runs as a plugin via Hornet.',
  'inclusion state':
    'Determines whether a transaction has been accepted and confirmed by the network. For any given transaction and a list of tips, the inclusion state is true if the tip refers to that transaction.',
  'local snapshots':
    'Local snapshots help limit the memory requirements of nodes by allowing them to independently delete old, confirmed transactions from their databases, leaving behind a small file with the balances of respective addresses. This feature facilitates faster synchronization, reduces system resource requirements, and eliminates the need to wait for global snapshots for database cleanup.',
  layer:
    'In DLT, a 2nd-layer refers to a secondary framework or protocol built on top of an existing distributed ledger. These secondary layers allow for additional applications to be executed without putting excessive strain on the base layer. Smart Contracts, for example, are executed on these second layers.',
  'local modifiers':
    'User-defined conditions that nodes can consider during tip selection. In IOTA and Shimmer, nodes may not necessarily have the same view of the tangle. They can use various types of locally available information to enhance security.',
  'merkle tree':
    'A Merkle tree is a data structure employed in computer science. In cryptocurrencies, Merkle trees are utilized for efficient and secure data encoding.',
  mainnet:
    'The publicly accessible IOTA network where tradable IOTA tokens on cryptocurrency exchanges are used.',
  milestone:
    '(IOTA 1.5) Milestones are messages signed and issued by the coordinator. They are instrumental in ensuring healthy growth of the Tangle and guaranteeing finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the status of that transaction and its entire history as confirmed.',
  message:
    "A message is a core data type that represents a vertex in the communication layer's DAG. It contains properties like references to other messages, the sender's public key, the issuing time of the message, the payload (interpretable by higher layers), the nonce for PoW requirement, and a signature. A message is not forwarded until it becomes \"solid,\" i.e., its history is known to the node. Messages must meet a PoW requirement, which currently involves finding a nonce so that the hash of the message's fields (excluding the signature) has a certain number of leading zeros.",
  'message overhead':
    'The extra information (metadata) that must be sent along with the actual data. This may include signatures, polls, and any other data transmitted over the network that is not the transaction itself.',
  mana: '(iota 2.0) When a value transaction is processed, a quantity named Mana is "pledged" to a specified node ID. This quantity correlates with the amount of IOTA involved in the transaction. The only way to acquire Mana is by persuading a token holder to pledge it to you. As such, Mana serves as a Delegated Proof of Token Ownership and offers robust Sybil protection due to its challenging acquisition process.',
  markers:
    '(iota 2.0) A local tool that enhances efficiency in certain calculations, such as the computation of approval weight or determining the presence of specific messages in the past or future cone of another message.',
  'messages per second (mps)':
    'Represents the number of messages dispatched to the network every second.',
  'nakamoto consensus':
    "Named after Bitcoin's creator, Satoshi Nakamoto, this consensus describes the use of a cryptographic puzzle (Proof-of-Work) to replace coordination/communication between known agents. Solving the puzzle determines the subsequent agent's action.",
  neighbors:
    'Directly connected network nodes that can exchange messages without intermediary nodes.',
  nodes:
    'A node is any computer that communicates with other nodes in the network using specific software. Essentially, nodes act as connection points for data transfers. The Tangle employs various node types, including full nodes (Hornet, Bee), permanodes (Chronicle), and smart contract nodes (Wasp).',
  'network layer':
    '(iota 2.0) This layer oversees the lower levels of Internet communication, such as TCP. It manages node connections through the Auto-peering, Peer Discovery modules, and the Gossip protocol.',
  'network id':
    'An identifier enabling user-specific subtangles. Nodes can only recognize messages from the network ID stipulated in their configuration file.',
  orphan:
    'A transaction (or block) lacking references from any subsequent transaction (or block). Orphans are unconfirmed and remain excluded from consensus.',
  object:
    '(iota 2.0) The fundamental unit of information in the IOTA protocol. Each object possesses a type, size, and data.',
  oracles:
    'Oracles establish a secure, decentralized bridge between digital and physical realms. They introduce off-chain data to decentralized applications and smart contracts within the network.',
  otv: "(iota 2.0) On Tangle Voting, known as the multiverse consensus articulated by Hans Moog. It's a novel consensus mechanism allowing nodes to vote on conflicts by publishing a message to the tangle.",
  otvfpcs:
    '(iota 2.0) On Tangle Voting with FPCS (Fast Probabilistic Consensus on a Set) is a method designed to resolve metastability. In IOTA 2.0, achieving high approval weight signals finality. If this weight is sufficiently high, the message/transaction is confirmed. With OTVFPC, OTV forms the initial opinion. If node opinions remain divided over time, FPC initiates to resolve this metastable state, expediting transaction finality.',
  parents:
    'A message can directly reference up to 8 preceding messages, known as its parents. In IOTA 2.0, a parent might be either strong or weak (see approval switch).',
  'parallel reality ledger state':
    '(iota 2.0) A state to monitor tangle conflicts. Two conflicting but causally valid ledger entries (e.g., Double Spend) are placed into separate "realities." These represent potential but exclusive future ledger states. The consensus mechanism, aided by FPC, operates until most nodes\' perceptions align, leading to the acceptance of one true ledger state.',
  'partition tolerant':
    'A segment of the Tangle can operate offline, disconnected from the main tangle for a duration, and later reconnect once an Internet connection resumes.',
  'past cone':
    'The set of messages that are directly or indirectly referenced by a given message is termed its past cone.',
  'parasite chain attacks':
    'A double-spending attack targeting the Tangle. Attackers attempt to reverse a transaction by creating an alternate Tangle where the funds remain unspent, seeking to convince the network majority to accept this version as legitimate.',
  permanode:
    'This node type permanently retains the entire transaction history, potentially with external storage aids, or selectively stores specific transactions (selective permanode).',
  pending:
    'A transaction that has been propagated through the network but not yet confirmed.',
  'peer to peer network':
    'A decentralized network comprising distinct nodes interconnected and engaged in data exchange.',
  peering:
    'The procedure of detecting and establishing connections with other network nodes.',
  payload:
    '(iota 2.0) A message field specifying the type. Examples include value payload (TransactionType type), FPC opinion payload (StatementType type), dRNG payload (Payload), Salt declaration payload, generic data payload.',
  'private tangle':
    "A private tangle functions akin to a test network entirely under the operator's control. It allows companies and developers to test their applications in a controlled environment, free from external influences and away from prying eyes. There is no interoperability between a private Tangle and the IOTA or Shimmer Tangle, prohibiting any transmission between them. Each private Tangle operates as an independent network with its own nodes, tokens, and coordinator.",
  'proof of work (pow)':
    'A computationally intensive mathematical operation that prevents spam attacks by requiring a costly cryptographic puzzle solution that is, nonetheless, easy to validate.',
  'proof of inclusion (poi)':
    'PoI enables proving that a transaction was indirectly referenced by another without needing to present the entire chain of transactions linking them. Instead, a sequence of hashes replaces actual transaction data to validate the inclusion of a transaction in the referenced subtangle.',
  pruning:
    'In computer science, pruning refers to the simplification, truncation, and optimization of decision trees. In Shimmer, this is achieved by local snapshots on each full node. Confirmed transactions are removed from the database, leaving only a list of balances for each address.',
  'public and private keys':
    'These are essential components of cryptographic systems utilizing key pairs, consisting of public keys, which can be shared, and private keys known only to the owner. The generation of these keys depends on cryptographic algorithms based on mathematical problems yielding one-way functions. Security depends on the private key remaining private. Public keys derived from the private key can be shared and used to verify ownership of the private key without revealing it. In IOTA and Shimmer, public keys function as addresses.',
  rebroadcast:
    'Rebroadcasting involves retransmitting a transaction. If a node goes offline while a transaction is being sent, it may not relay the transactions to its neighbors, making these transactions invisible to the network. Consequently, these transactions will never be referenced by the coordinator and hence never confirmed. Resending a bundle refers to transmitting the same bundle to a node, providing another opportunity for your transactions to be relayed to the network.',
  'reusable addresses':
    'Following the IOTA 1.5 Chrysalis upgrade and the introduction of the Ed25519 signature scheme, reusable addresses are now possible.',
  reattachment:
    'The process of resending a transaction through the reselection of a tip, referencing newer tips, and performing PoW again.',
  salt: "In cryptography, a salt is a random string appended to plaintext before further processing, thereby enhancing input entropy (disorder). It's commonly used in password storage and transmission to bolster information security.",
  sandbox: 'A controlled environment where programs can be tested safely.',
  'software as a service (saas)':
    'SaaS is a subset of cloud computing, based on the principle that the software and IT infrastructure are managed by an external service provider and leased to the customer as a service.',
  'smart contract':
    'Smart contracts are programs that execute contracts automatically.',
  'smart contract chain':
    'Smart contracts operate through a contract chain, which represents the contract state. Every request to a smart contract adds a new block to this chain. These updates are confirmed in one block, also containing all past states. The chain can contain multiple Smart Contracts all working on the same global state. Essentially, the Contract chain is a blockchain anchored on the Tangle. IOTA Smart Contracts are similar to "classic" Smart Contracts but feature multiple parallel chains that use the same native IOTA and Shimmer tokens, enabling trusted interoperability between different applications.',
  'solidification time':
    'Solidification time is when a node has received the entire history of a transaction.',
  'splitting attacks':
    'An attack in which a malicious node tries to split the Tangle into two branches. Splitting attacks aim to slow down the consensus process or enable double spending.',
  sharding:
    'Sharding is a type of database partitioning that divides a large database into smaller, more manageable segments, or shards. Each shard contains a unique set of account balances, and nodes are assigned to individual shards to validate transactions. The goal is to increase transaction throughput and thus address scalability issues.',
  signatures:
    'Signatures prove ownership of an address. Nodes require this proof to validate a transaction. To prove ownership, input transactions must be signed with the private key used to create the address.',
  solidity:
    '(iota 2.0) A message is marked as solid if its entire past cone up to the Genesis (or the latest snapshot) is known.',
  subtangle:
    'A consistent section of the Tangle (i.e., a subset of messages / value objects) such that each contained message/value object also contains its referenced messages/value objects.',
  streams:
    "IOTA Streams is a second layer data transfer protocol used for various types of data transfer, including streaming data. It allows devices to encrypt entire data streams and anchor them in the IOTA Tangle. IOTA's consensus protocol ensures the integrity and authenticity of these message streams. This makes IOTA Streams particularly useful in industries where integrity, privacy, and immutability are crucial.",
  'sybil attack':
    'An attempt to take control of a peer-to-peer network by creating multiple false identities.',
  snapshot:
    'A snapshot is a special feature of the Tangle that removes all transactions, keeping only those with a balance > 0. Metadata like tags and messages are also deleted, leaving a list of addresses and balances. After a snapshot, nodes use this list as the new "genesis" or starting point for the Tangle. This reduces the size of the Tangle, allowing nodes to use less memory. Full nodes can perform "Local Snapshots" independently and at their own discretion.',
  tangle:
    'The Tangle is the core underlying data structure of IOTA. In mathematical terms, it is a directed acyclic graph (DAG). The Tangle is the distributed ledger storing all transactions.',
  'ternary system':
    'A trit (trinary digit) can have three states: -1, 0 and 1. Three trits result in one tryte, which can thus represent 27 combinations. In IOTA, the letters A-Z (26 in total) and the number 9 are used for this purpose.',
  token:
    'The digital currency form (cryptocurrency) of IOTA. It is a powerful tool for transferring value between people and machines. The total number of IOTA tokens is 2,779,530,283,277,761. The base units are Pi, Ti, Gi, Mi, ki, i',
  'trinity (iota 1.0)': 'The deprecated IOTA Wallet',
  tip: 'A transaction that has not yet been approved.',
  'tip selection':
    'The process of selecting previous transactions to reference in a new transaction. These references allow a transaction to tie into the existing data structure. IOTA and Shimmer only enforce that a transaction approves up to eight other transactions, the tip selection strategy is left to the user (with a suitable default provided by Shimmer).',
  'tip transaction':
    'A solid end transaction that has not yet become a parent.',
  transaction:
    '(iota 2.0) A message that contains a Token transfer as a payload. The transferred tokens can be native IOTA Tokens or native IOTA Assets.',
  'utxo model':
    'UTXO stands for "unspent transaction output". It is a type of addressing model that tracks not only the credits on an address but also their origins and destinations when spent. Each token on an address is uniquely identifiable, and each output names the exact token it wants to move. This model enables faster and more accurate conflict resolution, enhancing the protocol\'s resilience and security.',
  'value layer':
    '(iota 2.0) The Value layer builds on the Communication layer. It works exclusively with payloads of type Value object. This layer has several responsibilities: forming the ledger state, processing, validating and outputting transactions, conflict detection, conflict resolution via FPC, forming a DAG from value objects, tip selection (on value object tips).',
  'value transactions':
    'Value transactions either withdraw tokens from an address or deposit them to an address. Nodes verify these transactions to ensure that the sender owns the Shimmer tokens and that additional tokens are not generated. To do this, the following checks are performed: All Shimmer tokens withdrawn from an address are also deposited into one or more other addresses; the value of each transaction does not exceed the total global supply; signatures are valid.',
  'version number': '(iota 2.0) Indicates the correct format of each type.',
  'white-flag approach':
    '(iota 1.5) A simplified, conflict-avoiding approach that improves the speed and efficiency of tip selection, eliminates certain attacks, and significantly reduces the need for reattachments.',
  wasp: 'Wasp is the node software that implements Smart Contracts on the Tangle.',
};
