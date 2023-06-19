---
description: How to run a Wasp node in using Docker. Build the image, configure it, run it.
image: /img/Banner/banner_wasp_using_docker.png
keywords:

- Smart Contracts
- Running a node
- docker
- image
- build
- configure
- arguments

---

# Docker (Standalone)

![Wasp Node using Docker](/img/Banner/banner_wasp_using_docker.png)

This page describes the configuration of a single Wasp node in combination with Docker.

The docker setup comes preconfigured and should work as is, differing setups might require a different configuration.

In this case the following instructions should be read [Running a Node](running-a-node.md).

## Introduction

## Running a Wasp Node

### Install and Build Your Node

To run a Wasp node with Docker you will need to:

1. Check out the project:

```shell
git clone https://github.com/iotaledger/wasp.git
```

2. Switch to the `develop` branch:

```shell
cd wasp
git checkout develop
```

:::note

We use the Docker Buildkit features to build images, as makes it possible to cache dependencies which improves build times. 

You can enable this with `DOCKER_BUILDKIT=1`

:::

3. Build the main image:

```shell
DOCKER_BUILDKIT=1 docker build -t wasp-node .
````

### Default Configuration

The build process will copy the [docker_config.json](https://github.com/iotaledger/wasp/blob/develop/docker_config.json)
file into the image, which will be used when the node gets started.

By default, the build process will use `-tags rocksdb` as a build argument.You can modify this argument  
with `--build-arg BUILD_TAGS=<tags>`.

Depending on the use case, you may need to change the default Hornet [configuration](node-config.md). You can do so by
editing the [docker_config.json](https://github.com/iotaledger/wasp/blob/develop/docker_config.json) file:

```json
"inx": {
  "address": "localhost:9029",
  "maxConnectionAttempts": 30
},
```

### Run Your Node

After the build process has finished, you can start your Wasp node by running:

```shell
docker run wasp-node
```

#### Configuration of built images

After the build process has been completed, you can still inject a different configuration file into a new
container by running:

```shell
docker run -v $(pwd)/alternative_docker_config.json:/etc/wasp_config.json wasp-node
```

You can also add further configuration using arguments:

```shell
docker run wasp-node --l1.inxAddress="alt_hornet:9029"
```

To get a list of all available arguments, run the node with the argument '--help'

```shell
docker run wasp-node --help
```
