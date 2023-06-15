---
description: How to install a Wasp node on Linux, macOS and Windows.
image: /img/logo/WASP_logo_dark.png
keywords:

- Wasp
- Installing wasp
- Go-lang
- Hornet
- windows
- macOS
- linux

---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Install Wasp

You can install and run your Wasp node by cloning the repository and building the application. The instructions below
will build both the Wasp node and the Wasp CLI to interact with the node from the command line.

Alternatively, you can run a prebuilt Wasp node using one of the provided docker setups:

- [Wasp standalone Docker image](docker_standalone.md)
- pre-configured local [Wasp and Hornet node setup using Docker Compose](../development_tools/docker_preconfigured.md).

## Requirements

- [Git](https://git-scm.com/).
- [Go 1.19](https://golang.org/doc/install).
- [solc](https://docs.soliditylang.org/en/v0.8.9/installing-solidity.html) >= 0.8.11.

## Clone the Wasp Repository

You can get the source code of the latest Wasp version from
the [official repository](https://github.com/iotaledger/wasp) or by running the following command:

```shell
git clone https://github.com/iotaledger/wasp
```

## Check Out Your Version of Choice

If you want to use the latest ISC features, you should use the `develop` branch instead of the default `main` branch.
You can check out `develop` by running the following command from the project root:

```shell
git checkout develop
```

## Build and Install Wasp

### Linux/macOS

Once you have [cloned the repository](#clone-the-wasp-repository)
and [checked out your version of choice](#check-out-your-version-of-choice), you can build and install both `wasp`
and `wasp-cli` by running the following commands from the project's root:

```shell
make install
```

### macOS arm64 (M1 Apple Silicon)

[`wasmtime-go`](https://github.com/bytecodealliance/wasmtime-go) hasn't supported macOS on arm64 yet, so you should
build your own wasmtime library. You can follow the README in `wasmtime-go` to build the library.
Once you have built the wasmtime library, you can run the following commands to install the Wasp node:

```shell
go mod edit -replace=github.com/bytecodealliance/wasmtime-go=<wasmtime-go path>
make install
```

### Microsoft Windows

On Windows, we recommend you to use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) and follow
the [Linux/macOS](#linuxmacos) instructions above.

##  Add Binaries to Path

The install command will place the applications binaries in `$GOPATH/bin`.
Ensure that the directory is part of your `$PATH` environment variable.
If needed, you can include this location in `$PATH` by adding the following line to your `~/.bash_profile`:

```shell
export PATH=$PATH:$(go env GOPATH)/bin
```

To apply changes made to a profile file, either restart your terminal application or execute:

```bash
source ~/.bash_profile
```
