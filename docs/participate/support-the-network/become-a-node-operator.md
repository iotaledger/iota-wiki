---
title: Become a node operator
description: Running a node is the best way to use IOTA. This topic provides a checklist of steps for running a reliable node.
---


# Getting started as a node


**Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of connecting to and trusting someone else's node, and you help the IOTA network become more distributed. This topic provides a checklist of steps for running a reliable node.**


## Setting up a reliable architecture

To handle high rates of transactions per second, nodes need enough computational power to run reliably, including the following minimum requirements:


* A dual-core CPU
* 2 GB RAM
* SSD storage


The amount of storage you need will depend on whether you plan on pruning transactions from your local database.

## Securing your device


The security of the device that's running your node is essential to stop attackers from gaining access to it.
You should consider doing the following before running a node on your device:

* Securing SSH logins
* Blocking unnecessary ports
* 
### Securing SSH logins

If you log into your device through SSH, you should use measures to protect it from unauthorized access.
Many guides have been written about this subject. For more information, see 
[10 Steps to Secure Open SSH](https://blog.devolutions.net/2017/4/10-steps-to-secure-open-ssh).

### Blocking unnecessary ports

Attackers can abuse any open ports on your device.

To secure your device against attacks on unused open ports, you should close all ports except those in use.
To do so, you can use a firewall. 

All operating systems include firewall options. By having a firewall in place, you can completely block unused and unnecessary ports.


### Deciding whether to enable remote proof of work

When you're configuring your node, you may have the option to allow it to do proof of work. When this feature is enabled, clients can ask your node to do remote proof of work.

Proof of work takes time and uses your node's computational power. So, you may want to keep this feature disabled by default.

### Load balancing

If you run more than one node, it's best practice to ensure that API requests are distributed among them.
To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer.

This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. But, on the backend, the nodes with the most spare computational power will process the request and return the response.

### Choosing a node software

To join an IOTA network, you need to run one of the available node software.

On the one hand, there are currently different IOTA networks active: 

- The primary `Mainnet` (you might have heard the term "Chrysalis" or "IOTA 1.5") where for example, the real tradable IOTA token belongs to
- The `DevNet` on which new and not fully tested features are developed and tested. This is intended to ultimately lead the way to "IOTA 2.0"
- There are further internal and community-driven networks for more specific test-runs, but those are out of scope for now ;)


There are different implementations of the IOTA node software:

- `Bee`: This software is mainly developed by the IOTA Foundation developers and is written in Rust. It is currently available for the `Mainnet.`
- `Hornet`: This software is a mainly community-driven implementation written in Go and is primarily meant to work with the `Mainnet.`
- `GoShimmer`: This software is currently the only node-software available for participating in the 'IOTA DevNet 2.0'. It is also not able to use GoShimmer for the Mainnet

Thus if you want to run a Mainnet-node, you can choose between `Bee` and `Hornet`


For a description of each node software as well as links to guides and tutorials for running them, see [Node Software](https://wiki.iota.org/docs/participate/support-the-network/node-software).
