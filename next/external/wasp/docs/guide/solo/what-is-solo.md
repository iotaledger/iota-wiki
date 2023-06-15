---
description: 'Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain
protocols.'
image: /img/logo/WASP_logo_dark.png
keywords:

- testing framework
- golang
- rust
- inter-chain protocols
- validate smart contracts
- install
- how-to

---

# Testing Smart Contracts with Solo

## What is Solo?

[_Solo_](https://github.com/iotaledger/wasp/tree/develop/packages/solo) is a testing framework that allows developers to
validate real smart contracts and entire inter-chain protocols before deploying them on the distributed network.

## Installation

### Prerequisites

[Go (version 1.19)](https://tip.golang.org/doc/go1.19). As _Solo_ tests are written in Go, you must 
[install Go](https://go.dev/doc/install).

### Access the Solo Framework

You can access the Solo package by cloning the [Wasp repository](#clone-the-wasp-repository)
or [installing the Solo package](#install-the-solo-package).

#### Clone the Wasp Repository

_Solo_ is part of the [_Wasp_ codebase repository](https://github.com/iotaledger/wasp.git). You can access the Solo
framework by cloning the repository with the following command:

```shell
git clone https://github.com/iotaledger/wasp.git
```

After you have cloned the repository, you can access the Solo package in the `/packages/solo` folder.

#### Install the Solo Package

You can install the Solo package separately using the following command:

```shell
go get github.com/iotaledger/wasp/packages/solo
```

:::tip Go Docs

You can browse the Solo Go API reference (updated to the `master` branch) in 
[go-docs](https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo).

:::

### Example Contracts

You will need a smart contract to test along with Solo.
You can find example implementations of Rust/Wasm smart contracts, including source code and tests, in the Wasp
repository’s [contracts/wasm folder](https://github.com/iotaledger/wasp/tree/develop/contracts/wasm).

For information on creating Wasm smart contracts, refer to the [Wasm VM chapter](../wasm_vm/intro.mdx).

The following sections will present some Solo usage examples. You can find the example code in
the [Wasp repository](https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples).

### Run `*_test` Files

You can run `*_test` files by moving to their directory and running the following command:

```bash
go test
```

If you run this command from the `/documentation/tutorial-examples` folder, you will run the 
[Tutorial Test](https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples/tutorial-test.go), which
contains all the examples explained in the following sections. 
