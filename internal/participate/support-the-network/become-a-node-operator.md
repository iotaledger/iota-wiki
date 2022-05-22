---
title: Become a Node Operator
description: Running a node is the best way to use IOTA. This topic provides a
  checklist of steps for running a reliable node.
image: /img/participate/banner/banner_node_operator.png
---

# Become a Node Operator

![Node Operator](/img/participate/banner/banner_node_operator.png)

**Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to connect to and trust someone else's node, and you help the IOTA network to become more distributed. This topic provides a checklist of steps for running a reliable node.**

## Minimum Requirements

To handle high rates of transactions per second, nodes need enough computational power to run reliably, including the following minimum requirements:

- A dual-core CPU
- 2 GB RAM
- SSD storage

The amount of storage you need will depend on whether you plan on pruning transactions from your local database.

## Securing your device

The security of the device that's running your node is important to stop attackers from gaining access to it. You should consider doing the following before running a node on your device:

- Securing SSH logins
- Blocking unnecessary ports

### Securing SSH logins

If you log into your device through SSH, you should use measures to protect it from unauthorized access. Many guides have been written about this subject. For more information, see [10 Steps to Secure Open SSH](https://blog.devolutions.net/2017/04/10-steps-to-secure-open-ssh).

### Blocking Unnecessary Ports

Attackers can abuse any open ports on your device. To secure your device against attacks on unused open ports, you should close all ports except those that are in use. To do so, you can use a firewall. All operating systems include firewall options. By having a firewall in place, you can completely block unused and unnecessary ports.

## Choosing a Node Software

To join an IOTA network, you need to run one of the available node softwares. For a description of each node software as well as links to guides and tutorials for running them, see [Node software](/participate/support-the-network/node-software).

## Enable Remote Proof of Work

When you're configuring your node, you may have the option to allow it to do proof of work. When this feature is enabled, clients can ask your node to do remote proof of work.

Proof of work takes time and uses your node's computational power. So, you may want to keep this feature disabled by default.

## Load Balancing

If you run more than one node, it's best practice to make sure that API requests are distributed among all of them. To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer.

This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. But, on the backend, the nodes with the biggest amount of unused computational power will process the request and return the response.
