import EVMCompatibility from '../_admonitions/_EVM_compatibility.md'

# Supported Virtual Machines & Languages

The current release of IOTA Smart Contracts has support for [EVM/Solidity](#evmsolidity-based-smart-contracts) smart
contracts, as well as experimental [Wasm](#wasm-vm-for-isc) smart contracts, providing compatibility with
existing smart contracts and tooling from other EVM based chains like Ethereum. This allows us to offer the existing 
ecosystem around EVM/Solidity a familiar alternative.

## EVM Smart Contracts

### What is EVM/Solidity?

[EVM](https://ethereum.org/en/developers/docs/evm/) stands for "Ethereum Virtual Machine" and is currently the tried and
tested virtual machine running most smart contract networks.

[Solidity](https://soliditylang.org/) is the programming language of choice for the EVM. It was created for this
specific purpose.

The main benefit of using EVM/Solidity is its sheer amount of resources from years of development. The IOTA
Smart Contracts implementation is fully compatible with all of them. If you have experience developing on other EVM based chains, you will feel right at home. Any existing contracts you've written will need no 
changes to function on IOTA Smart Contracts.

### How IOTA Smart Contracts Work With EVM

Every deployed ISC chain automatically includes a core contract
called [`evm`](../reference/core-contracts/evm.md). This core contract is responsible for running EVM code and
storing the EVM state.

The Wasp node also provides a standard JSON-RPC service, which allows you to interact with the EVM layer using existing
tooling like [MetaMask](https://metamask.io/), [Remix](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/).
Deploying EVM contracts is as easy as pointing your tools to the JSON-RPC endpoint.

<EVMCompatibility />

## Wasm VM for ISC

:::warning Experimental

The Wasm _VM_ is in experimental state, showcasing ISC's "VM plugin" architecture.

Experiment but avoid using it for production applications; opt for [EVM](quick-start.mdx).

:::

IOTA Smart Contracts (ISC) provide a sandboxed environment through an API, facilitating secure and deterministic 
interactions with ISC functions. This API supports any Virtual Machine (VM) aiming to build a system for smart contract 
 code execution on ISC.

![Wasp node ISC Host](/img/wasm_vm/IscHost.png)

You can use a [WebAssembly (Wasm)](https://webassembly.org/) VM as a compilation target, facilitated by the open-source
[Wasmtime runtime](https://wasmtime.dev/). This setup encourages dynamic smart contract operations compiled to Wasm code, 
promoting security and adaptability with different programming languages.

![Wasm VM](/img/wasm_vm/WasmVM.png)

The Wasm VM operates with self-contained `WasmLib` libraries linked to individual Wasm codes, optimizing the ISC sandbox
functionality and smart contract state storage access.

### Supported Functionalities

The ISC sandbox environment offers:

- Smart contract metadata and state data access.
- Request data retrieval for function calls.
- Token management within the contract.
- Utility functions from the host.
- Smooth initiation of other smart contract functions.
- Logging facility.

### Supported Languages

The WasmLib started with [Rust](https://www.rust-lang.org/) support, expanding to include [Go](https://golang.org/) 
and [TypeScript](https://www.typescriptlang.org/) with the help of respective Wasm code generators:

| Language   | Wasm code generator                                |
|------------|----------------------------------------------------|
| Go         | [TinyGo](https://tinygo.org/)                      |
| Rust       | [wasm-pack](https://rustwasm.github.io/wasm-pack/) |
| TypeScript | [AssemblyScript](https://www.assemblyscript.org/)  |

These generators maintain a common subset of their host language, aiming for a unified coding style to simplify the 
initiation into smart contract creation, welcoming developers with a C-style language background to quickly adapt.