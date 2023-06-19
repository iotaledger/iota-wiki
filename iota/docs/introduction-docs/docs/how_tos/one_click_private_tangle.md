---
description: On this page, you will learn how to use a set of Docker-based tools and pre-configured setups to deploy a (hornet-based) Chrysalis Private Tangle in "one-click" to cloud environments or platforms.
image: /img/logo/Chrysalis_logo_dark.png
keywords:
- tangle
- AWS
- Docker 
- VM
- how to
---

# Deploy Your Own Tangle

In this tutorial, you will learn how to use a set of Docker-based tools and pre-configured setups to deploy your own ([hornet-based](https://github.com/gohornet/hornet)) Chrysalis Tangle in **"one-click"** to cloud environments or platforms.

## Background

IOTA [mainnet](../reference/networks/mainnet.md) and [devnet](../reference/networks/devnet.md) are public IOTA Networks where you can develop your own applications. Due to scalability or data locality reasons, sometimes it is necessary to run your own *local* IOTA Tangle (aka Private Tangle). In the future, the (child) Tangle may also be *anchored* to the IOTA mainnet, through Data Sharding (a feature currently under research and development by the IOTA Foundation). To automate and simplify the deployment of a Chrysalis Tangle, some tools, publicly available in the [one-click-tangle](https://github.com/iotaledger/one-click-tangle) repository, have been developed. We have also integrated them for use in the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B095WQQTNG/) and, in the future, on other Cloud marketplaces.

## MVP Deployment Architecture

The figure below depicts a minimum viable deployment architecture of a Chrysalis Tangle using [Docker](https://docker.io). 

![Private Tangle Architecture](/img/tutorials/one-click-private-tangle-architecture.png "Private Tangle Architecture")

There are three main nodes identified: 

* The **Coordinator**: This node emits milestones periodically and has to be bootstrapped and set up appropriately. With the IOTA 2.0 update, the Coordinator will no longer used as explained [here](https://coordicide.iota.org/). 

* The **Spammer**: A node that periodically sends messages to your Tangle, thus enabling a minimal message load to support transaction approval as per the IOTA protocol. 

* The **Regular Hornet Node** (`node1`): An initial node that is exposed to the outside through the IOTA protocol (port `14265`) to be the recipient of messages or to peer with other Nodes (through port `15600`) that can later join your Tangle. 

These three nodes are peered amongst each other as our architecture is based on Docker, so that each node runs within a Docker Container and all containers are attached to the same network named `private-tangle`.

To facilitate adding extra nodes to your Tangle, an [autopeering](https://wiki.iota.org/hornet/post_installation/peering#autopeering) entry node is automatically created. Furthermore, the `Spammer` and the `node1` enable by default autopeering so that they can be peered with any extra node later added. The autopeering entry node listens on the *UDP* port `14626`.

In addition, to make your Tangle easier to use, a Tangle Explorer can be deployed, conveniently, similar to the one at [https://explorer.iota.org](https://explorer.iota.org). As a result, all the participants in the network are able to browse and visualize messages or IOTA Streams channels. The Tangle Explorer deployment involves two containers, one with the REST API listening at port `4000` and one with the Web Application exposed to the host at port `8082`. The Tangle Explorer also uses MQTT to watch what is happening on your Tangle. This is the rationale for having a connection between the Explorer's REST API Container and the Hornet Node through port `1881`. 

The Hornet Dashboard (available through HTTP port `8081`) is also useful as a way to monitor and ensure that your Tangle Nodes are in sync and performing well.

The summary of containers that will be running and the exposed (actually in use) Docker ports are below: 


| Component           | Container name    |  Docker Ports in use                         |
| ------------------- | ----------------- | :------------------------------------------- | 
| Hornet Initial Node | `node1`           | `14265`, `15600`, `8081`, `1881`, `14626/udp`|
| Coordinator         | `coo`             | `15600`                                      |
| Spammer             | `spammer`         | `14265`, `15600`, `14626/udp`                |
| Autopeering Entry N.| `node-autopeering`| `14626/udp`                                  |
| Explorer API        | `explorer-api`    | `4000`                                       |
| Explorer Web App    | `explorer-webapp` | `8082:80`                                    |


The network policies for those containers should be configured as follows:


| Component           | Container name    |  Outgoing Traffic To                                       |
| ------------------- | ----------------- | :--------------------------------------------------------- |
| Hornet Initial Node | `node1`           | `coo:15600`, `spammer:15600`, `node-autopeering:14626/udp` |
| Coordinator         | `coo`             | `node1:15600`, `spammer:15600`                             |
| Spammer             | `spammer`         | `coo:15600`, `node1:15600`, `node-autopeering:14626/udp`   |
| Autopeering Entry N.| `node-autopeering`| any autopeered node (`14626/udp`)                          |
| Explorer API        | `explorer-api`    | `node1:14265`, `node1:1881`                                |
| Explorer Web App    | `explorer-webapp` |                                                            |



| Container name      |  Port       | Incoming Traffic from               |
| ------------------- | ----------- | :---------------------------------- |
| `node1`             | `14265`     | outside clients, `explorer-api`     |
| `node1`             | `15600`     | other (auto)peers, `coo`, `spammer` |
| `node1`             | `8081`      | outside clients                     |
| `node1`             | `1881`      | `explorer-api`                      |
| `node1`             | `14626/udp` | `node-autopeering`                  |
| `coo`               | `15600`     | `node1`, `spammer`                  |
| `spammer`           | `14265`     | `spammer`                           |
| `spammer`           | `15600`     | `coo`, `node1`, other (auto)peers   |
| `spammer`           | `14626/udp` | `node-autopeering`                  |
| `node-autopeering`  | `14626/udp` | any autopeered node                 |
| `explorer-api`      | `4000`      | outside clients                     |
| `explorer-webapp`   | `8082:80`   | outside clients                     |


The summary of services exposed to the outside world (through the host) is as follows: 


| Service          | Container name    | Host TCP Port | Host UDP Port |
| ---------------- | ----------------- | ------------- | ------------- |
| IOTA Protocol    | `node1`           | `14265`       |               |
| IOTA Gossip      | `node1`           | `15600`       |               |
| IOTA Autopeering | `node-autopeering`|               | `14626`       |
| Hornet Dashboard | `node1`           | `8081`        |               |
| MQTT             | `node1`           | `1881`        |               |
| Explorer API     | `explorer-api`    | `4000`        |               |
| Explorer Web App | `explorer-webapp` | `8082`        |               |


The deployment architecture described above can be easily transitioned to production-ready by incorporating a reverse proxy leveraging [NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/#). As a result, the amount of ports exposed to the outside world can be reduced or load balancing between the nodes of your Tangle can be achieved. IOTA intends to provide automatic, "one-click" deployment of this kind of enhanced architectures in a future version of this software. 

To support the deployment of an IOTA Tangle, the IOTA Community has developed a set of shell scripts and configuration templates to make it easier to deploy a (Docker based) Tangle with the architecture described above. You can also customize the [default configuration files](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config) if, for instance, you want to enable extra [Hornet plugins](https://wiki.iota.org/hornet/post_installation#configuration-files). 

But now let us see how we can launch our Tangle via a "single-click". We have two options: through the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/B095WQQTNG/) or through any [Docker-enabled machine](#one-click-private-tangle-on-any-docker-enabled-vm). 


## Deploying Your Tangle in "One Click" on AWS

To materialize on AWS using the deployment architecture described above, go to the AWS Marketplace and install this [product](https://aws.amazon.com/marketplace/pp/B095WQQTNG/) and follow the [instructions](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/README_AWS.md). That's it! 

Behind the scenes, the process will launch all the Docker containers (through docker-compose), create a key pair for the Coordinator, configure the Coordinator public key for the initial node, generate an initial IOTA Address holding all IOTAs, the identity for our Nodes, etc., meaning our [deployment architecture](#mvp-deployment-architecture-of-a-private-tangle) and all the steps described [here](https://wiki.iota.org/hornet/getting_started/private_tangle), but **fully automated**, with "one-click"!.

Below are the parameters of this "one-click" installation (further details can be found at [here](https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net/config)):

* One Private Key for signing milestones and just one milestone signer (the Coordinator).
* Coordinator Milestones Period: `60` seconds, check [this line of code](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-coo.json#L120).
* Spammer Settings, check [these lines of code](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-spammer.json#L118).

Further instructions for AWS deployments can be found [one our github page](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/README_AWS.md). If you want to know lower-level details of the AWS installation, how to do it yourself in any Docker-enabled VM, and what happens under the scenes, please continue reading. 

## Deploying Your Tangle in "One Click" on any Docker-enabled VM

### Prerequisites

First, you will need [Docker](https://www.docker.com) and Docker Compose. **Docker Compose** is a tool for defining and running multi-container Docker applications. Yaml files are used to configure the required services. This means all container services can be brought up in a single command. Docker Compose is installed by default as part of Docker for Windows and Docker for Mac, however, Linux users will need to follow the instructions found [here](https://docs.docker.com/compose/install/).

You can check your current **Docker** and **Docker Compose** versions using the following commands:

```console
docker-compose -v
docker version
```

Please ensure that you are using Docker version `18.03` or higher and Docker Compose `1.21` or higher and upgrade if
necessary.

### Clone the Script Repository

To start with, you need to clone the [one-click-tangle](https://github.com/iotaledger/one-click-tangle) repository as follows:

```console
git clone https://github.com/iotaledger/one-click-tangle
cd one-click-tangle
```

Then, ensure that the `private-tangle.sh` script has execution permissions:

```console
cd one-click-tangle/hornet-private-net
chmod +x ./private-tangle.sh
```

### Run your New Tangle

To start your Tangle through the command line:

```console
./private-tangle.sh install
```

You can optionally pass the amount of time (in seconds) to wait for the Coordinator bootstrap step. This step enables the Coordinator to bootstrap by emitting its first milestone.

Behind the scenes, our process will create the identity for the Coordinator, the keys that will be used for signing milestones, an initial IOTA Address holding all IOTAs, the identity of our Nodes, etc meaning all the steps described [here](https://wiki.iota.org/hornet/getting_started/private_tangle), but fully automated. 

After the process finishes, you should see the following docker containers up and running:

```console
docker ps -a
```

```console
8474fd9ced97   gohornet/hornet:latest    "/app/hornet" 29 hours ago   Up 29 hours   8081/tcp, 14265/tcp, 15600/tcp, 14626/udp spammer                                                                            
8804bfd795ec   gohornet/hornet:latest    "/app/hornet" 2 days ago     Up 2 days     0.0.0.0:8081->8081/tcp, 0.0.0.0:14265->14265/tcp, 1883/tcp, 0.0.0.0:15600->15600/tcp, 14626/udp   node1
96b2047a6ebe   gohornet/hornet:latest    "/app/hornet" 2 days ago     Up 2 days     8081/tcp, 14265/tcp, 15600/tcp, 14626/udp coo
d527976593c5   gohornet/hornet:latest   "/app/hornet"   8 hours ago   Up 8 hours   1883/tcp, 8081/tcp, 14265/tcp, 15600/tcp, 0.0.0.0:14626->14626/udp node-autopeering
```

Alternatively, the following files should have been created for you:

The P2P identities that can be used to peer these Nodes with other Nodes:

* `coo.identity.txt`. The P2P identity of the Coordinator. 
* `node1.identity.txt`. The P2P identity of the node1. 
* `spammer.identity.txt`. The P2P identity of the Spammer. 
* `node-autopeering.identity.txt`. The P2P identity of the autopeering Entry Node. 

The address that holds all the IOTAs and its corresponding keys:

* `key-pair.txt`. The Ed25519 Key pair corresponding to the address that holds all the IOTAs. 
* `address.txt`. The address that holds all IOTAs initially. 

The Coordinator's cryptographic materials:

* `coo-milestones-key-pair.txt`. The Ed25519 key pair used by the Coordinator to sign milestones. Keep it safe!
* `coo-milestones-public-key.txt`. The Ed25519 public key that can be used to verify the Coordinator's milestones. 

The initial snapshot for your Tangle:

* `snapshots/private-tangle/full_snapshot.bin`. It contains just one IOTA address that holds all IOTAs. 

If you browse to `http://localhost:8081` you can test out the Hornet Dashboard.

You can find the database files of your Tangle at `db/private-tangle`. 

When a snapshot is created, `1000000000` tokens are sent to the treasury. `2779529283277761` out of the total number of tokens, which is `2779530283277761`, are sent to the mint address. To change the amount that is allocated to the treasury, you can change the value 
[here](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/private-tangle.sh#L191). 

The total amount of tokens allocated to the treasury should not be equal to the total supply of tokens which is `2779530283277761`. Otherwise, the mint address will have zero tokens. 

### Operate your Tangle

You operate your Tangle by issuing one of the following commands:

```console
./private-tangle.sh [start|stop|update]
```

### Tangle Explorer

Once we have your Tangle up and running, you can install and run a Tangle Explorer as follows:  

```console
cd ../explorer
./tangle-explorer.sh install ../hornet-private-net
```

The Tangle Explorer will automatically be configured with the parameters of your Tangle and once the docker build process finishes, you should find the following additional docker containers up and running:

```console
dd4bcad67c5e        iotaledger/explorer-webapp   "docker-entrypoint.s…"   2 days ago          Up 2 days           0.0.0.0:8082->80/tcp                                                                   explorer-webapp
7c22023f4316        iotaledger/explorer-api      "docker-entrypoint.s…"   2 days ago          Up 2 days           0.0.0.0:4000->4000/tcp                                                                 explorer-api
```

You can now get access to your Tangle Explorer through `http://localhost:8082`. 

## Adding Extra Nodes to your Tangle

For convenience, a script is also available to add new Nodes to an already running Tangle. 

To do so, you can follow these steps:

```console
cd ./extra-nodes
chmod +x ./private-hornet.sh
./private-hornet.sh install "my-node:14266:15601:8082"
```

The main parameter is a Node connection string. This string has different fields separated by a colon (`:`). The first field is the (container and host) name of your Node and, at installation time, it can be followed, optionally, by the TCP port numbers corresponding to the API endpoint, the peering endpoint, and the dashboard endpoint. 

If no port numbers are provided, meaning only the container name is supplied, no ports will be exposed to the host. In addition, you can omit some of the ports, but the separator `:` has to be kept, for instance, if you only want to  expose the dashboard port to the host you can run:

```console
./private-hornet.sh install "my-node:::8082"
```

After executing the commands described above, a new Docker container (named `my-node`) executing a Hornet node will be running. This Hornet node will be automatically peered. The snapshot, Coordinator's public keys, and autopeering entry node address will be taken from the snapshot and configuration folders of your Tangle. 

:::note

In case you want to spin a node from a different machine (or base folder), you would need to manually pass those parameters, including a [multiaddr](https://wiki.iota.org/hornet/post_installation/peering#addressing-peer-neighbors) peer address of a node to peer with (for instance `node1`) you want to peer with, as explained [here](https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net/extra-nodes). 

:::

## Limitations and Troubleshooting

Mac OS users should install GNU sed, for instance, using `brew install --default-names gnu-sed`. 

There could be limitations in the number of peers triggered by the maximum number of unknown peers parameter. To overcome it, you may need to change [this configuration property](https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-node.json#L127). 

## Next Steps

Try using one of the [client libraries](../explanations/libraries.md) to send transactions to the nodes in your Tangle. 
