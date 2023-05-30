---
description: 'Running a node is the best way to use Shimmer. This topic provides a checklist of steps for running a reliable node.'
image: /img/shimmer-wiki.png
---

# Become a Node Operator

![Node Operator](/img/Banner/banner_node_operator.svg)

**Running a node is the best way to use Shimmer. By doing so, you have direct access to the Tangle instead of having to connect to and trust someone else's node, and you help the Shimmer network to become more distributed. This topic provides a checklist of steps for running a reliable node.**

## Minimum Requirements

Nodes need enough computational power to reliably handle high rates of transactions per second, including the following minimum requirements:

- 4 cores or 4 vCPU.
- 8 GB RAM.
- SSD storage.
- A public IP address.

The amount of storage you need will depend on whether you plan on pruning transactions from your local database.

## Secure your device

The security of the device running your node is essential to stop attackers from gaining access to it. You should consider doing the following before running a node on your device:

- Securing SSH logins
- Blocking unnecessary ports

### Secure SSH logins

If you log into your device through SSH, you should use measures to protect it from unauthorized access. Many guides have been written about this subject. For more information, see [10 Steps to Secure Open SSH](https://blog.devolutions.net/2017/04/10-steps-to-secure-open-ssh).

### Block Unnecessary Ports

Attackers can abuse any open ports on your device. To secure your device against attacks on unused open ports, you should close all ports except those in use. To do so, you can use a firewall. All operating systems include firewall options. With a firewall, you can completely block unused and unnecessary ports.

## Enable Remote Proof of Work

When configuring your node, you may have the option to allow it to do proof of work. When this feature is enabled, clients can ask your node to do remote proof of work.

Proof of work takes time and uses your node's computational power. So, you may want to keep this feature disabled by default.

## Load Balancing

If you run more than one node, it's best practice to make sure that API requests are distributed among all of them. To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer.

This way, you can have one domain name for your reverse proxy server to which all nodes will send their API calls. But, on the backend, the nodes with the most unused computational power will process the request and return the response.
