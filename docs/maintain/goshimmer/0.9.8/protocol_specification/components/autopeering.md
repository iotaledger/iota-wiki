---
description: An IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other.
image: /img/protocol_specification/peer_discovery.png
keywords:
  - node
  - neighbors
  - selection
  - pong
  - ping
  - peer
  - peering
  - discovery
  - request
  - accepted
  - salt update
---

# Autopeering

In order to establish connections, an IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other. Each node establishes a communication channel with a small subset of nodes (i.e., neighbors) via a process called `peering`. Such a process must be resilient against eclipse attacks: if all of a node’s neighbors are controlled by an attacker, then the attacker has complete control over the node’s view of the Tangle. Moreover, to prevent or limit sybil-based attacks, the neighbor selection protocol makes use of a scarce resource dubbed Consensus Mana: arbitrary nodes can be created, but it is difficult to produce high mana nodes.

Throughout this section the terms `Node` and `Peer` are used interchangeably to refer to a `Node` device.

The usage of the _Ping_ and _Pong_ mechanism is to be considered as a bidirectional exchange similarly to how described by other standards such as [CoAP](https://core-wg.github.io/coap-sig/) and [WebSocket](https://tools.ietf.org/html/rfc6455#section-5.5.2).

## Node Identities

Every node has a cryptographic identity, a key on the ed25519 elliptic curve. The `blake2b` hash of the public key of the peer serves as its identifier or `node ID`.

## Peer Discovery

The main goal of the _Peer Discovery_ protocol is to expose an interface providing a list of all the verified peers.
To bootstrap the peer discovery, a node _must_ be able to reach one or more entry nodes. To achieve this, the implementation of the protocol _shall_ provide a hard-coded list of trusted **entry nodes** run by the IF or by trusted community members that answer to peer discovery packets coming from new nodes joining the IOTA network. This approach is a common practice of many distributed networks [[Neudecker 2018]](https://ieeexplore.ieee.org/iel7/9739/8649699/08456488.pdf).
Public Key-based Cryptography (PKC) _shall_ be used for uniquely [identifying](#Node_identities) peers and for authenticating each packet.
The usage of the Ping and Pong protocols is that _Ping_ are sent to verify a given peer and, upon reception of a valid _Pong_ as a response from that peer, the peer is verified.
Once a peer has been verified, it can be queried to discover new peers by sending a _DiscoveryRequest_. As a response, a _DiscoveryResponse_ _shall_ be returned, containing a list of new peers. The new peer nodes in this list _shall_ be verified by the receiving application.

This process is summarized in the following figure and detailed in the following subsections:

[![Peer discovery](/img/protocol_specification/peer_discovery.png 'Peer discovery')](/img/protocol_specification/peer_discovery.png)

### Verification

The verification process aims at both verifying peer identities and checking their online status. Each peer _shall_ maintain a list of all the known peers. This list _shall_ be called `known_peer_list`. Elements of any known peer list _shall_ contain a reference to a [Peer](#Peer) and a time at which it _shall_ be verified/re-verified.
As such, the `known_peer_list` can be seen as a time-priority queue. A newly discovered peer gets added to the list at the current time. Whenever a peer is verified, its time value on the `known_peer_list` gets updated to the time at which that peer _shall_ be re-verified.
The intent of this arrangement is to allow the node application to first verify newly discovered (and thus still unverified) peers and then to re-verify older peers (to confirm their online status) by iterating over the `known_peer_list`.
It is worthwhile to note that the order in which the `known_peer_list` is worked through is important. For example, if the peer is added to the front ('head') of the `known_peer_list`, it is possible for an adversary to front-fill the `known_peer_list` with a selection of its own nodes. This is resolved by the use of the time-priority queue.

The verification process always initiates from a _Ping_. Upon reception of a _Ping_, a peer _shall_ check its validity by:

- verifying that the signature of the _Ping_ is valid and discarding the request otherwise;
- checking that the `version` and `network_id` fields match its configuration and discarding the _Ping_ otherwise;
- checking that the `timestamp` field is fresh (i.e., not older than a given time) and discarding the packet otherwise;
- checking that the `dest_addr` matches its IP address and discarding the _Ping_ otherwise.

Upon successful validation of a received _Ping_, a peer _shall_ respond with a _Pong_. In case the sender of the _Ping_ is a new peer from the perspective of the receiving node, the receiver peer _shall_ add it to its `known_peer_list`. This enables the verification process to also occur in the reverse direction.

Upon reception of a _Pong_, a peer _shall_ check its validity by:

- verifying that the signature of the _Pong_ is valid and discarding it otherwise;
- checking that the `req_hash` field matches a request (i.e. _Ping_) previously sent and not expired (i.e., the difference between the timestamp of the _Ping_ and _Pong_ is not greater than a given threshold) and discarding the associated _Ping_ or _Pong_ otherwise;
- checking that the `dest_addr` matches its IP address and discarding the associated _Ping_ or _Pong_ otherwise.

Upon successful validation of a received _Pong_, a peer _shall_:

- add the peer sender of the _Pong_ to a list of verified peers called `verified_peer_list`;
- move the peer entry of the `known_peer_list` to the tail.

### Removal

While verifying a new peer, if no or an invalid _Pong_ is received after `max_verify_attempts` attempts, that node _shall_ be removed from the `known_peer_list`. Each expected reply should have a timeout such that if no answer is received after that, an attempt is considered concluded and counted as failed.

Each peer on the `verified_peer_list` _shall_ be re-verified after `verification_lifetime` hours; while re-verifying a peer, if no or invalid _Pong_ is received after `max_reverify_attempts` attempts, the peer _shall_ be removed from the `verified_peer_list`.

### Discovery

Each peer entry of the `verified_peer_list` may be used to discover new peers. This process is initiated by sending a _DiscoveryRequest_.

Upon reception of a _DiscoveryRequest_, a peer node _shall_ check its validity by:

- checking that the sender of the _DiscoveryRequest_ is a verified peer (i.e. is stored in the `verified_peer_list`) and discarding the request otherwise;
- verifying that the signature of the _DiscoveryRequest_ is valid and discarding the request otherwise;
- checking that the `timestamp` field is fresh (i.e., not older than a given time) and discarding the request otherwise.

Upon successful validation of a received _DiscoveryRequest_, a peer _shall_ reply with a _DiscoveryResponse_.

Upon reception of a _DiscoveryResponse_, a peer _shall_ check its validity by:

- verifying that the signature of the _DiscoveryResponse_ is valid and discarding the response otherwise;
- checking that the `req_hash` field matches a discovery request (i.e. _DiscoveryRequest_) previously sent and not expired (i.e., the difference between the timestamp of the _DiscoveryRequest_ and _DiscoveryResponse_ is not greater than a given threshold) and discarding the response otherwise.

Upon successful validation of a received _DiscoveryResponse_, a node _shall_ add the nodes contained in the `peers` field to the `known_peer_list`.

## Neighbor Selection

The goal of the neighbor selection is to build a node's neighborhood (to be used by the gossip protocol) while preventing attackers from “tricking” other nodes into becoming neighbors. Neighbors are established when one node sends a peering request to another node, which in turn accepts or rejects the request with a peering response.

To prevent attacks, the protocol makes the peering request _verifiably random_ such that attackers cannot create nodes to which the target node will send requests. At its core, the neighbor selection protocol uses both a screening process called _Consensus Mana rank_ and a _score function_ that takes into account some randomness dubbed _private salt_ and _public salt_.
Half of the neighbors will be constituted from nodes that accepted the peering request, while half will be constituted of nodes that will request for the peering. The two distinct groups of neighbors are consequently called:

- Chosen neighbors (outbound). The peers that the node proactively selected through the neighbor selection mechanism.
- Accepted neighbors (inbound). The peers that sent the peering request to the node and were accepted as a neighbor.

### Local Variables

Local variables defined here are included to help in understanding the protocol described in this section. The node application shall handle those variables in some form.

- `saltUpdateInterval`: The time interval at which nodes shall update their salts.
- `responseTimeout`: The time that node waits for a response during one peering attempt.
- `requestExpirationTime`: The time used for the request timestamp validation, if the timestamp is older than this threshold the request is dropped
- `maxPeeringAttempts`: The maximum number of peering requests retries sent to the selected node before the next salt update.

### Mana Rank Interval

Each peer discovered and verified via the _Peer Discovery_ protocol _shall_ have a consensus mana value associated with it. The peer running the _Neighbor Selection_ protocol _shall_ keep this information up-to-date and use it to update a data structure called `manaRank` containing the list of the nodes' identities for each mana value. The aim of this ranking is to select a subset of peers having similar mana to the node preparing the ranking. More specifically, let's define `potentialNeighbors` to be such a subset, that is divided into a `lower` and an `upper` set with respect to a `targetMana` value (i.e., the mana value of the node performing the ranking). By iterating over the `manaRank`, each node _shall_ fill both the `lower` and `upper` sets with nodes' identities having a similar rank to itself, not less/greater than a given threshold `rho` respectively, except when each subset does not reach the minimal size `r`.

The following pseudocode describes a reference implementation of this process:

```
Inputs:
    manaRank: mapping between mana values and the list of nodes' identities with that mana;
    targetMana: the mana value of the node performing the ranking;
    rho: the ratio determining the length of the rank to consider;
    r: the minimum number of nodes' identities to return for both lower and upper sets;
    Largest(r, targetMana): the set of r largest cMana holders less than targetMana;
    Smallest(r, targetMana): the set of r smallest cMana holders greater than targetMana;

Outputs:
    potentialNeighbors: the set of nodes' identities to consider for neighbor selection;
```

```vbnet
FOR mana IN manaRank
    nodeID = manaRank[mana]
    IF mana > targetMana
        IF mana / targetMana < rho
            Append(upperSet, nodeID)
    ELSE IF mana == 0 || mana == targetMana
        BREAK
    ELSE IF targetMana / mana < rho
        Append(lowerSet, nodeID)

IF Len(lowerSet) < r
	// set lowerSet with the r largest mana holders less than targetMana
	lowerSet = Largest(r, targetMana)

IF Len(upperSet) < r
    // set upperSet with the r smallest mana holders greater than targetMana
	upperSet = Smallest(r, targetMana)

potentialNeighbors = Append(upperSet, lowerSet)
RETURN potentialNeighbors

```

### Selection

The maximum number of neighbors is a parameter of the gossip protocol. This section proposes to use a size of 8 equally divided into 4 chosen (outbound) and 4 accepted (inbound) neighbors. It is crucial to decide on a fixed number of neighbors, as the constant number decreases an eclipse probability exponentially. The chosen _k_ is a compromise between having more connections resulting in lower performance and increased protection from an eclipse attack.

The operations involved during neighbor selection are listed in the following:

1.  Get an up-to-date list of verified and known peers from the _Peer Discovery_ protocol.
2.  Use [mana rank](#Mana_rank) to filter the previous list to obtain a list of peers to be potential neighbors.
3.  Use the score function to request/accept neighbors.

The score between two nodes is measured through the score function _s_, defined by:

s(nodeID1, nodeID2, salt) = hash(nodeID1 || nodeID2 || salt), where:

- `nodeID1` and `nodeID2` are the identities of the considered nodes.
- `salt` is the salt value that can be private or public depending on the peering direction (inbound/outbound).
- `hash` is the `blake2b` hash function.
- `||` is the concatanation operation.

Note that the value used as the score is an unsigned integer derived from the first 4 bytes of the byte array after the `hash` function.

In order to connect to new neighbors, each node with ID `ownID` and public salt `pubSalt` keeps a list of potential neighbors derived via [Mana rank](#Mana_rank) that is sorted by their score `d(ownID, ·, pubSalt)`. Then, the node shall send peering requests in _ascending order_, containing its own current public salt and a timestamp representing the issuance time of the request.
The connecting node shall repeat this process until it has established connections to enough neighbors or it finds closer peers. Those neighbors make up its list of chosen neighbors. This entire process is also illustrated in the following pseudocode:

```
Inputs:
    k: desired amount of neighbors;
    c: current list of chosen neighbors;
    p: list of potential peers;
    localID: local nodeID
    pubSalt: local public salt;
```

```vbnet
pSorted = SortByScoreAsc(P, localID, pubSalt)
FOR p IN pSorted
    peeringRequest = SendPeeringRequest(p)
    IF peeringRequest.accepted
        Append(c, p)
        IF Len(c) == Ceil(k/2)
            RETURN
```

More specifically, after sending a peering request a node _shall_:

- wait to get a _Peering Response_ that could be positive or negative.
  - If positive, add the peer to its chosen neighbor list
  - If negative, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached.
  - If after `responseTimeout` no response is received, try again for a fixed `maxPeeringAttempts`. If not successful, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached.

Similar to the previous case, in order to accept neighbors, every node with ID ownID _shall_ generate a private salt `privSalt`.

Upon reception of a _Peering Request_, a peer _shall_ make a decision to accept, reject or discard the request by:

- verifying that the signature of the _Peering Request_ is valid and discard the request otherwise;
- checking that the `timestamp` field is valid (i.e., not older than a given threshold `requestExpirationTime` specified by the node) and discard the request otherwise;
- checking that the _mana_ of the requester peer is within the own [Mana rank](#Mana_rank) and send back a _negative_ _Peering Response_ otherwise;
- checking that the requestor salt matches its hash chain by:
  - taking the difference between the timestamp of the peering request and the time the initial salt was set, and then dividing this number by `saltUpdateInterval`, rounding down;
  - hashing the requester public salt as many times as the number of salt changes;
  - finally, if the result does not match the initial salt, discard the peering request;
- applying a statistical test to the request defined as _s(remoteID, ownID, ζ_remote) < θ_ for a fixed threshold θ, and discard it otherwise.
  - this test determines the effectiveness of the brute force attack when an attacker tries to establish a connection with a desired peer;
  - with θ set to 0.01 an attacker has only 1% of chance of being successful;
- accept the peering request by sending back a _positive_ _Peering Response_ if either one of the following conditions is satisfied, and send back a _negative_ _Peering Response_ otherwise:
  - the current size of the accepted neighbors list is smaller than _Floor(k/2)_;
  - the score defined as _s(ownID, remoteID, privSalt)_ is lower than the current highest score among accepted neighbors. In this case, send a _Peering Drop_ to drop the accepted neighbor with the highest score replaced by the requester peer.

### Neighbor Removal

Neighbor removal can occur for several reasons:

- A node is replacing a neighbor with a better (in terms of score function) one;
- From the gossip layer, the connection with a neighbor is lost;
- If some form of reputation or bad behavior is being monitored, a neighbor could be dropped in case of misbehavior. For example, a node could respond to the peering request but choose not to gossip received blocks.

Independently from the reason, when a peer drops a neighbor _shall_ send a _Peering Drop_ and remove the neighbor from its requested/accepted neighbor list. Upon reception of a _Peering Drop_, the peer _shall_ remove the dropping neighbor from its requested/accepted neighbor list.
