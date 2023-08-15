---
description: Learn about the five principles behind IOTA 2.0.
image: /img/iota-wiki.png
keywords:
  [
    'explanation',
    'IOTA 2.0',
    'accessibility',
    'Parallelism',
    'Volume and Velocity',
    'Social Dynamics',
    'Sustainable Economics',
  ]
---

# Five Principles

Within a myriad of open source DLT's, cloning an existing solution and changing a few parameters would be very easy – as
demonstrated by numerous DLT projects. But when aiming to achieve digital autonomy for everyone on a global scale, a
specific set of characteristics is required that none of the existing solutions offer.

To achieve our goal of an architecture that serves everyone equally and impartially, we identified certain requirements
necessary to enable everyone's digital autonomy. These requirements are summarized in the five IOTA 2.0 Design
Principles described in this section of the wiki.

They were our north star that we followed to make our design choices. The unique features of our architecture all derive
from these five principles.

# Principle 1: Accessibility

In every Distributed Ledger Technology (DLT), there's a group of participants which we will call block producers. By
producing blocks, they perform the following essential tasks:

1. They aggregate new data submitted to the ledger by users.
2. They affirm the information already present in the ledger.
   As the middlemen between the ledger and its users, block producers have a dominant role in the DLT's operation.

Because of their dominance, block producers put users' digital autonomy at risk. Users seek affordable transaction
rates, while block producers profit by imposing fees and capitalizing on the network usage by others. Since these
interests cannot be rectified, users must be able to become block producers. This would allow users to interact with the
ledger directly, eliminating the need for any middlemen. By combining users and block producers into one unified group,
the inherent clash of priorities is rendered moot. We define this concept as "accessibility."

Accessibility provides numerous advantages and is a foundational feature of several IOTA Unique Selling Points (USPs):

- It increases users adaptability and control of their assets and infrastructure.
- Besides an initial investment of tokens, there is no additional cost for users to access the system.
- The interests of various actors in IOTA are harmonized, providing a foundational layer of security and equilibrium to
  the protocol.

True accessibility requires high rate of block generation, as this determines the potential number of block producers.
In traditional blockchain systems, only one block can be appended at a time. Given a consistent network delay, the
system's responsiveness declines if blocks are produced too rapidly. This effectively caps block generation,
irrespective of the computational power and bandwidth at hand. Typically, the block generation rate doesn't exceed one
block per second, which means that linear blockchains are incapable of becoming more accessible, unless block generation
can be parallelised, which is not possible in a linear blockchain

In contrast, IOTA uses a Directed Acyclic Graph (DAG) for its block structure. Here, several blocks can be
simultaneously appended in parallel, allowing the rate of block generation to match the transaction processing speed,
which can adapt over time based as a network resources increases. This might result in rates up to thousands of blocks
per second, substantially surpassing traditional blockchain speeds. Thus, within a DAG framework, the number of block
producers, and hence accessibility will expand as technological advancements allow the block production to become higher
and higher.

# Principle 2: Parallelism

The DAG architecture, while more accessible in nature, introduces the issue of block concurrency. Specifically, when
multiple blocks are produced simultaneously in the network, they need to be processed accordingly. This challenge is
actually an opportunity: the DAG architecture allows parallel and continuous, or stream, processing of these blocks,
capitalizing on their simultaneous arrival.

In traditional blockchains, with blocks bound by a strict sequential order, both parallel and stream processing is
impossible. This is because each block represents a batch, and although the transactions in each block can be processed
in parallel, there is a fundamental tradeoff:

1. The block rate is low and the transactions in each block are only processed in big parallelizable batches; or,
2. he block rate is fast with continuous small batches, but each batch must be processed sequentially.

However, with IOTA 2.0, we do not have this trade off. Small blocks issued at a high rate are processed on arrival and
in parallel. This allows for the most efficient use of available computational resources due to continuous processing
instead of high peaks to process blocks, followed by machines idling until the next block is to be processed.

Naturally, this introduces a potential problem: how should the system deal with double spends introduced simultaneously?

To address this problem, the IOTA Foundation introduced a novel solution: the Parallel Reality-Based Ledger. Here, any
double spends and their ensuing dependencies are meticulously tracked in a data structure aptly termed the "conflict
DAG". This conflict DAG tracks votes issued by validators until the conflicts are resolved, allowing the tangle (the
block DAG) to continue to grow unhindered.

In addition, IOTA's unique data structures makes it ideal for handling computationally demanding tasks. Consequently,
the IOTA protocol is designed to be a workhorse for heavy tasks, such as the integration of zero-knowledge proofs or
rollups. This positions IOTA as an optimal, scalable backbone for other systems like sidechains and bridges, priming it
to cater to the expansive transactions requisites of a rapidly evolving global digital economy.

# Principle 3: Volume and Velocity

DLTs aim to revolutionize how data and value are exchanged across global networks. To be truly transformative and
compete with or even surpass traditional systems, it's essential for DLTs to handle a high volume of transactions
quickly. The global economy operates at an immense scale, with countless transactions occurring every second. If DLTs
are to serve as the backbone of this intricate system, they must be prepared to accommodate these vast numbers without
hiccups and by reflecting reality, which is not happening sequentially and in perfect order.

Moreover, the promise of DLTs often centers on their ability to offer more efficient, transparent, and secure
transactions than their conventional counterparts. Fast confirmation times are crucial in this context. In the real
world, whether it's a financial transaction, a supply chain update, or a data exchange, delays can lead to operational
inefficiencies, lost opportunities, and financial costs. By ensuring rapid confirmations, DLTs can provide users with
the assurance that their operations will proceed smoothly and timely.

Volume refers to the number of transactions that a DLT system can handle within a specific timeframe. As mentioned
earlier, the global economy functions at a vast scale, with millions of transactions executed every moment across
different sectors. To be a viable alternative or even an improvement over traditional systems, DLTs need to have the
capacity to handle this enormous volume without experiencing congestion or slowdowns. The higher the volume a DLT can
manage, the better it is equipped to serve as a foundational infrastructure for modern digital transactions.

Velocity, on the other hand, refers to the speed these transactions are processed, confirmed, and disseminated through
the network. While volume gives us a sense of scale, velocity provides insights into efficiency and responsiveness.
Rapid transaction confirmation times are crucial for real-time or near-real-time applications in finance, supply chain
management, and various other sectors. A DLT that boasts high velocity ensures that users can expect their transactions
to be processed swiftly, leading to smoother operations and greater trust in the system.

Both volume and velocity are intertwined. A DLT that can handle a high volume of transactions but lacks velocity will
eventually be bogged down in bottlenecks. Conversely, a system that processes transactions quickly but can't manage
large volumes is simply unscalable. To truly serve the needs of modern economies and industries, DLTs must achieve both
volume and velocity, ensuring they can accommodate the scale and speed of contemporary digital interactions.

Enormous transaction volume is only achievable through techniques like sharding. However it is crucial to optimize the
transaction throughput on readily available, consumer-level hardware. True decentralization requires a balance between
volume and the resources demanded per node. Although high transaction volume is critical for the principle of
accessibility, individual users must be able to operate their own nodes to ensure digital autonomy for everyone.
Maximizing efficiency therefore is the key to mitigating the effects of this inherent trade-off. This underscores the
significance of prioritizing efficiency, underlining its centrality to the whole operation.

IOTA 2.0 strives to do be efficient and performant, streamlining the life cycle of a transaction. For instance, in IOTA
2.0 blocks begin gaining acceptance via children blocks as soon as they are created. This allows clients to
optimistically accept low-value transactions incredibly quickly. Indeed, the IOTA protocol effectively broadcasts
transactions while they are being confirmed continuously and in real-time. Users who want more definite finality can
wait longer for their blocks to be embedded deeper in the tangle, thereby gaining more confidence of their validity by
following transactions.

Furthermore, as mentioned earlier, a key advantage of our DAG-based architecture is that tiny, single-transaction blocks
can be produced very rapidly without waiting in a mempool to be clumped together with others in order to be processed.
As such, all transactions can be executed on arrival in a continuous stream. Traditional blockchains batch computations
into sequential blocks, which, as discussed earlier, are created slowly and periodically. Thus, nodes have periods of
great activity followed by inactivity, leading to under-utilized computational resources.

# Principle 4: Social Dynamics

A digital twin is a digital representation or model of a real-world entity or system. It can refer to anything, ranging
from a physical object, like a car or building, to complex processes, systems, or even people. This concept has gained
traction in various sectors, especially with the rise of the Internet of Things (IoT), where physical objects are
equipped with sensors to gathering data. The idea behind a digital twin is to have a live digital counterpart for a
physical entity or asset, updating in real-time based on data received from the physical world.

To be a successful global infrastructure, all users, institutions, businesses, and machines must be able to have a
digital twin, i.e. they must be enabled to make themselves identifiable on the ledger. In other words, social dynamics
should be possible to be reflected and maintained on the ledger, thereby allowing the protocol to be integrated into the
social fabric of the world. More specifically, the protocol can then center around the needs of the individual.

The IOTA UTXO model will have an account abstraction built on top of it, with each account representing a digital
identity that the user can choose to link to a real life identity to e.g. authenticate towards business partners or
entities they interact with. All user-facing interactions with the protocol will be done through this account interface.
Accounts will provide static identifiers that a user can take ownership of. These identifiers can be used to record
states declared by the individual, to lock funds, to stake, and to issue blocks.

The individual’s control of their account embodies their control over their digital self, in other words their digital
autonomy.

Our digital space encompasses all of our user profiles and our user interfaces on every app we use. Currently, every app
has its own profile, and our relationships and personal setting associated with that profile are stored and maintained
by the app developer. For example in social media and messaging apps, this includes all your contacts and your active
conversations. If users want to switch apps because of better features on the front end, they cannot bring their social
network with them. This locks users into a specific network.

When DAPPS and accounts on a DLT, users have a static place they can store their relationships on chain, divorcing the
social network (or more precisely, the databases that maintain these connections) from front end managing these
relationships. So users could migrate their profiles between different front ends. Thus, different front ends developed
by different parties can interact and compete on the same social network. For example, one could switch wallets and
bring their account and all their funds with them to their new wallet. Thus having a static identifier gives users a
digital space that is not controlled by any centralized entity- a revolutionary concept.

# Principle 5: Sustainable Economics

In many Proof of Stake (PoS) system, stakers can invest for short periods of time, earn rewards, and then sell these
rewards for a profit. Although this is very attractive to speculators, the value that they extract comes at the expense
of users of the system. Thus traditional PoS systems are simply vehicles for value extraction for short-term
speculators.

The IOTA 2.0 protocol has been designed to encourage long-term investment into the IOTA ecosystem rather than short-term
value extraction.

Every DLT has natural actors, people who want to use the system, and synthetic actors, people whose only purpose in the
system is to make money. The IOTA protocol is optimized for the natural actors to protect them from predatory service
providers and value extraction.

As such, our rewards scheme is based not on rewards in IOTA token which dilute token holders' assets, but on offering
them temporary increased throughput. This system has two main advantages. First, it not inflationary: the rewards do not
dilute the users token holdings. Second, it encourages long term investment: access cannot be sold for profit until
there is an actual demand for access. Thus users and their assets are the focus of the system.

For further information, we refer the reader to our tokenomics white paper [link].
