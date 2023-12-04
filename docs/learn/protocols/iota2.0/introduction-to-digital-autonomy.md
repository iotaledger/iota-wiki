# Introduction to Digital Autonomy

Within a myriad of open-source _DLT_s on the market, cloning an existing solution and changing a few parameters would be very easy – as demonstrated by numerous competitors. But at the IOTA Foundation, we want to build useful technology that solves real problems. Since every other project has some sort of deficiency, this has forced us to build a novel protocol with a radically different architecture that can unlock the full potential of DLT.

Our methodology for designing this new protocol was simple. First, we identified the key problem that a DLT can solve. Next, we identified how a DLT could solve this problem, which led us to develop the concept of _Digital Autonomy_. Lastly, we identified the five design principles that enable Digital Autonomy and are necessary for DLT to benefit society.

To understand how IOTA 2.0 works, one must first understand the vision conceived via this methodology. As such, in this document, we introduce digital autonomy and explain how IOTA 2.0 is built to achieve it.

:::tip

For more background, three peer-reviewed research papers underpin the theoretical foundation of IOTA 2.0. The Ledger Paper introduces an innovative transaction approach rooted in real-world data, the Networking Paper introduces ‘pre-consensus’ through the IOTA Congestion Control Algorithm (ICCA) to enhance _throughput_ and manage congestion efficiently, and the Consensus Paper guarantees well-informed decision-making by employing the ‘heaviest DAG’ method. Find out more about these papers [in this blog post](https://blog.iota.org/solid-foundation-iota20/).

:::

## What Is the Problem?

The world is becoming increasingly digitized. The internet has changed from being mainly a data transport layer to a collection of devices and machines working synchronously to support various industries. As a result, applications are required to become increasingly interoperable. In addition, almost all aspects of our lives are migrating onto digital platforms, where different entities govern their related data.

To allow platforms and applications to become fully interoperable, the world needs a collaborative system where all parties can maintain a common state. This shared truth ensures consistency, validity, fairness, and efficiency, as every participant operates based on the same information. In our digital age, where interactions transcend geographical borders and traditional jurisdictions, this demand for a universally accepted and transparent system is becoming paramount.

The advantages of such a system are manifold. A common state provides uniformity and simplifies integration, ensuring all participants are “on the same page”. This shared state, when decentralized, offers resilience against systemic failures, transparency for all operations, and a clear audit trail – essential features in an interconnected world.

DLTs have evolved in response to the increasing demand for collaborative computation and interoperable applications. All DLT network participants agree upon a single version of the truth through _consensus_ mechanisms, resulting in a shared, synchronized, and decentralized state.

However, realizing this vision of global _interoperability_ is challenging. Technical barriers, governance issues, and security concerns must be addressed. Yet, given the pace of technological progression, the growing need for decentralized trust systems, and the intrinsic benefits of a globally accessible and shared version of the truth, the emergence of a DLT-based interoperability layer seems not only plausible but inevitable.

## What is Digital Autonomy?

With its vast reach and interconnectedness, a global state can become an instrument of surveillance, manipulation, and control. Intertwined with the lives of the global populace, such a system can extract value from various sectors of the economy. Without safeguards, individuals can find their every action, no matter how trivial, tracked, and manipulated to influence their behaviors and beliefs. In such a landscape, personal agency is diminished, and hidden algorithms and centralized decisions sway users. This unchecked power can also lead to digital monopolies, censorship, and centralization of wealth as markets using this interoperability layer are sapped by fees.

Alarmingly, many DLT projects are sacrificing the core tenets of decentralization for expediency and profit. Some DLTs are controlled through an oligopoly of block-producing validators, and others require high-powered and prohibitively expensive hardware to run a node. To see how tyranny could rise in many blockchains, one only needs to look at the extent to which Maximal Extractable Value (_MEV_) dominates Decentralized Finance (DeFi), the most popular current application of DLT.

Digital autonomy is the antidote to centralized tyranny. It is the ability of individuals to control their online identities, data, and digital interactions. It mirrors traditional notions of liberty in the digital realm, ensuring that our online experiences are as free from manipulation and external control as possible.

In the ever-expanding digital universe, safeguarding digital autonomy becomes imperative. The unchecked rise of centralized platforms has led to myriad issues ranging from data breaches to algorithmic biases to _value extraction_. Digital autonomy pushes back against these challenges, ensuring individuals have the power and means to control their digital footprint.

For a DLT to rise as the global system that prevents power monopolies, it must be designed to champion digital autonomy. A truly global and universally accepted system must provide more than merely technical solutions. It needs to resonate with its vast user base's core values and aspirations. By preserving every user’s digital autonomy, the DLT earns trust and facilitates widespread adoption. It becomes a platform and a foundational pillar for our future digital interactions, a cornerstone for the next era of digital collaboration, and the embodiment of the principles of freedom and self-determination in our increasingly interconnected world.

## What IOTA Is Building: The Five Design Principles of IOTA 2.0

The IOTA Foundation wants to bring digital autonomy to everyone by building a global programmable infrastructure of trust. We are building a secure, easy-to-use system that allows applications to interact seamlessly, that is accessible to users, and that protects them from value extraction by intermediaries. We are building a system processing a high volume at high velocity that can handle global traffic with as little friction as possible. IOTA 2.0 represents the next step of the IOTA protocol in our journey to reach these aims.

To achieve our goal of an architecture that serves everyone equally and impartially, we have identified certain requirements to enable everyone's digital autonomy. These requirements are the five IOTA 2.0 Design Principles.

The principles were the north star that we followed to make our design choices. The unique features of our architecture all derive from these five principles.

### Principle 1: Accessibility

Every DLT has a group of participants, which we will call block producers. By producing blocks, they perform the following essential tasks:

- They aggregate new data submitted to the ledger by users.
- They affirm the information already present in the ledger.
  As the middlemen between the ledger and its users, block producers have a dominant role in the DLT's operation.

Because of their dominance, block producers put users' digital autonomy at risk. Users seek affordable transaction rates, while block producers profit by imposing fees and capitalizing on the network usage by others. Since these interests cannot be rectified, users must be able to become block producers. This would allow users to interact with the ledger directly, eliminating the need for any middlemen. Combining users and block producers into one unified group renders the inherent clash of priorities moot. We define this concept as "accessibility".

Accessibility provides numerous advantages and is a foundational feature of several of IOTA's unique value propositions:

- It increases users' adaptability and control of their assets and infrastructure.
- Besides an initial investment of tokens, there is no additional cost for users to access the system.
- The interests of various actors in IOTA are harmonized, providing a foundational layer of security and equilibrium to the protocol.

True accessibility requires not just a high level of Transactions Per Second but a high rate of block generation, as the block generation rate determines the potential number of block producers. In most traditional blockchain systems, only one block can be appended at a time. Given a consistent network delay, the system's responsiveness declines if blocks are produced too rapidly. This effectively caps block generation, irrespective of the computational power and bandwidth. In most cases, a linear blockchain's block generation rate is at most one block per second. Since block generation cannot be parallelized in such blockchains due to their design, they are incapable of becoming more accessible.

In contrast, IOTA uses a Directed Acyclic Graph (DAG) for its block structure. Here, several blocks can be simultaneously appended in parallel, allowing the rate of block generation to match the transaction rate (TPS) by having each block contain only one transaction. In addition, the maximum TPS can increase over time with protocol upgrades as _consumer-grade hardware_ becomes more powerful and has more bandwidth.

### Principle 2: Parallelism

The _DAG_ architecture, while more accessible in nature, introduces the issue of block concurrency. Specifically, when multiple blocks are produced simultaneously in the network, they must be processed accordingly. This challenge is an opportunity: the DAG architecture combined with our _UTXO_ ledger allows parallel and continuous processing (also called _stream processing_) of these blocks to capitalize on their simultaneous arrival.

In traditional blockchains, with blocks bound by a strict sequential order, both parallel and _stream processing_ is impossible. This is because each block represents a batch, and although the transactions in each block can be processed in parallel, there is a fundamental tradeoff between two extremes:

1. The block rate is low, and the transactions in each block are only processed in big parallelizable batches; or,
2. The block rate is fast with continuous small batches, but each batch must be processed sequentially.

However, IOTA 2.0 is not faced with this trade-off. Small blocks issued at a high rate are processed on arrival **and** in parallel. This allows for more efficient use of available computational resources due to continuous processing instead of high peaks to process blocks followed by machines being idle until the next block is to be processed.

Naturally, this introduces a potential problem: how should the system deal with double spends introduced simultaneously?

To address this problem, the IOTA Foundation introduces a novel solution: the Parallel Reality-Based Ledger. Here, any double spends and their ensuing dependencies are meticulously tracked in a _data structure_ aptly termed the "conflict DAG". This conflict DAG tracks votes issued by validators until the conflicts are resolved, allowing the _Tangle_ (the block DAG) to continue to grow unhindered.

In addition, IOTA's unique data structures make it ideal for handling computationally demanding tasks. Consequently, the IOTA protocol is designed to be a workhorse for heavy tasks, such as the integration of zero-knowledge proofs or rollups. This positions IOTA as an optimal, scalable backbone for other systems like sidechains and bridges, priming it to cater to the expansive transaction requisites of a rapidly evolving global digital economy.

### Principle 3: Volume and Velocity

DLTs aim to revolutionize how data and value are exchanged across global networks. DLTs must handle a high volume of transactions quickly to be truly transformative and compete with or surpass traditional systems. The global economy operates at an immense scale, with countless transactions occurring every second. If DLTs are to serve as the backbone of this intricate system, they must be prepared to accommodate these vast numbers without hiccups and by reflecting reality, which does not happen sequentially and in perfect order.

Moreover, the promise of DLTs often centers on their ability to offer more efficient, transparent, and secure transactions than their conventional counterparts. Fast _confirmation_ times are crucial in this context. In the real world, whether it's a financial transaction, a supply chain update, or a data exchange, delays can lead to operational inefficiencies, lost opportunities, and financial costs. By ensuring rapid confirmations, DLTs can assure users that their operations will proceed smoothly and timely.

Volume refers to the number of transactions a DLT system can handle within a specific timeframe. As mentioned earlier, the global economy functions at a vast scale, with millions of transactions executed every moment across different sectors. To be a viable alternative or even an improvement over traditional systems, DLTs need to have the capacity to handle this enormous volume without experiencing congestion or slowdowns. The higher the volume a DLT can manage, the better it is equipped to serve as a foundational infrastructure for modern digital transactions.

Velocity, on the other hand, refers to the speed at which these transactions are processed, _confirmed_ , and disseminated through the network. While volume gives us a sense of scale, velocity provides insights into efficiency and responsiveness. Rapid _transaction confirmation_ times are crucial for real-time or near-real-time applications in finance, supply chain management, and various other sectors. A DLT that boasts high velocity ensures that users can expect their transactions to be processed swiftly, leading to smoother operations and greater trust in the system.

Both _volume and velocity_ are intertwined. A DLT that can handle a high volume of transactions but lacks velocity will eventually be bogged down in bottlenecks. Conversely, a system that processes transactions quickly but can only manage small volumes is simply unscalable. To truly serve the needs of modern economies and industries, DLTs must achieve both volume and velocity, ensuring they can accommodate the scale and speed of contemporary digital interactions.

Enormous transaction volume is only achievable through techniques like _sharding_. However, optimizing the transaction throughput on readily available, consumer-level hardware is crucial. True decentralization requires a balance between volume and the resources demanded per node. Although high transaction volume is critical for the principle of accessibility, individual users must be able to operate their own _nodes_ if digital autonomy for everyone is to be ensured. Maximizing efficiency is, therefore, the key to mitigating the effects of this inherent trade-off. This underscores the significance of prioritizing efficiency, underlining its centrality to the whole operation.

IOTA 2.0 strives to be efficient and performant, streamlining the life cycle of a transaction. For instance, in IOTA 2.0, blocks begin gaining acceptance via children's blocks as soon as they are created. This allows clients to optimistically accept low-value transactions incredibly quickly. Indeed, the IOTA protocol effectively broadcasts transactions while they are being _confirmed_  continuously and in real-time. Users who want more definite _finality_ can wait longer for their blocks to be embedded deeper in the _Tangle_, thereby gaining more confidence in their validity by following transactions.

Furthermore, as mentioned earlier, a key advantage of our DAG-based architecture is that tiny, single-transaction blocks can be produced rapidly without waiting in a _mempool_ to be clumped together with others to be processed. As such, all transactions can be executed on arrival in a continuous stream. Traditional blockchains batch computations into sequential blocks, which, as discussed earlier, are created slowly and periodically. Thus, nodes have periods of great activity followed by inactivity, leading to under-utilized computational resources.

### Principle 4: Social Dynamics

To be a successful global infrastructure, all users, institutions, businesses, and machines must be able to have a digital twin, i.e., they must be able to make themselves identifiable on the ledger. In other words, _social dynamics_ should be reflected and maintained on the ledger, thereby allowing the protocol to be integrated into the world's social fabric. More specifically, the protocol can then center around the needs of the individual.

A digital twin is a digital representation or model of a real-world entity or system. It can refer to anything, ranging from a physical object, like a car or building, to complex processes, systems, or even people. This concept has gained traction in various sectors, especially with the rise of the Internet of Things (IoT), where physical objects are equipped with sensors to gather data. The idea behind a digital twin is to have a live digital counterpart for a physical entity or asset, updating in real-time based on data received from the physical world.

In order to enable digital twins and replicate social dynamics, the IOTA UTXO ledger will have an account abstraction built on top of it, with each account representing a digital identity that the user can choose to link to a real-life identity to, for example, authenticate towards business partners or entities they interact with. All user-facing interactions with the protocol will be done through this account interface. Accounts will provide static identifiers that a user can take ownership of. These identifiers can be used to record states declared by the individual, to stake, to delegate, and to issue blocks.

The individual’s control of their account embodies their control over their digital self, enabling their digital autonomy.

Our digital space encompasses all our user profiles and interfaces on every app we use. Currently, every app has its own profile, and our relationships and personal settings associated with that profile are stored and maintained by the app developer. For example, in social media and messaging apps, this includes all our contacts and active conversations. If users want to switch apps because of better features on the front end, they cannot bring their social network with them. This locks users into a specific network.

When dApps and accounts are on a DLT, users have a static on-chain place to store their relationships, divorcing the social network (or, more precisely, the databases that maintain these connections) from the front end managing these relationships. So users could migrate their profiles between different front ends. Thus, different front ends developed by different parties can interact and compete on the same social network. For example, users could switch wallets and bring their accounts and funds to their new wallet. Thus, having a static identifier gives users a digital space that is not controlled by any centralized entity – a revolutionary concept.

### Principle 5: Sustainable Economics

In many Proof of Stake (PoS) systems, stakers can invest for short periods, earn rewards, and then sell the rewards for a profit. Although this is very attractive to speculators, the value they extract comes at the expense of the network's other users. Thus, traditional PoS systems are simply vehicles for value extraction for short-term speculators.

In contrast, the IOTA 2.0 protocol has been designed to encourage long-term investment into the IOTA ecosystem rather than short-term value extraction.

Every _DLT_ has natural actors, people who want to use the system, and synthetic actors, people whose only purpose in the system is to make money. The IOTA protocol is optimized for the natural actors to protect them from predatory service providers and value extraction.

As such, our rewards scheme is based not on IOTA tokens, which dilute token holders' assets, but on increased throughput. This has two main advantages. First, it is not inflationary: the rewards do not dilute the user's token holdings. Second, it encourages long-term investment: access cannot be sold for profit until there is an actual demand for access. Thus, users and their assets are the focus of the system.
