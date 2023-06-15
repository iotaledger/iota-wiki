# Getting Started

## Prerequisites

To run Chronicle, you need the following:

- A Linux LTS operating system such as [Ubuntu](https://ubuntu.com/download#download)

- 4 GB RAM

- At least 32 GB of disk space

- 64-bit processor

- Preferred a 10 Gbps network connection

- At least 2 CPU cores (recommended)

- [Rust](https://www.rust-lang.org/tools/install)

- At least one Scylla node (version 4 or greater) running on a different device in the same private network as Chronicle. See the [Scylla documentation](https://docs.scylladb.com/getting-started/) for a tutorial on setting one up. For information about securing your Scylla nodes, see the [Scylla security documentation](https://docs.scylladb.com/operating-scylla/security/).

- The `build-essentials` packages

    You can install these packages for Debian based distros, using the following command:

    ```bash
    sudo apt-get install build-essential gcc make cmake cmake-gui cmake-curses-gui pkg-config openssl libssl-dev
    ```
    For other Linux distros, please refer to your package manager to install the build-essential pkgs

- (Optional) An IDE that supports Rust autocompletion. We recommend [Visual Studio Code](https://code.visualstudio.com/Download) with the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) extension

- If you want to load historical transactions into your permanode, you can download the files from the [IOTA Foundation's archive](https://dbfiles.iota.org/?prefix=mainnet/history/).

We also recommend updating Rust to the latest stable version:

```bash
rustup update stable
```

## Installation

Either download the provided executable (you should only do this if you do not wish to use the filtering functionality), or build it yourself.

### Building Chronicle

Clone this repository:

```bash
git clone https://github.com/iotaledger/chronicle.rs
```

```bash
cargo build --release
```

If you wish to use the filter functionality, enable the `filter` feature in [chronicle](https://github.com/iotaledger/chronicle.rs/blob/main/chronicle/Cargo.toml)

```bash
cargo build --release --features filter
```

### Configuring Chronicle

Chronicle uses a [RON](https://github.com/ron-rs/ron) file to store configuration parameters, called `config.ron`. An example is provided as [config.example.ron](https://github.com/iotaledger/chronicle.rs/blob/main/config.example.ron) with default values. See <a href="#config-reference">Config Reference</a> for more details about the config file.

### Running Chronicle

See [Building Chronicle](#Building-Chronicle).


```bash
cd target/release && cp /path/to/your/config.ron ./
```

```bash
cargo run --release
```