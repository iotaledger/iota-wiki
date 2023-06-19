---
description: There currently are 6 core smart contracts that are always deployed on each  chain, root, _default, accounts, blob, blocklog, and governance.
image: /img/Banner/banner_wasp_core_contracts_overview.png
keywords:
- smart contracts
- core
- initialization
- request handling
- on-chain ledger
- accounts
- data
- receipts
- reference
--- 
# Core Contracts

![Wasp Node Core Contracts Overview](/img/Banner/banner_wasp_core_contracts_overview.png)

There are currently 7 core smart contracts that are always deployed on each
chain. These are responsible for the vital functions of the chain and
provide infrastructure for all other smart contracts:

- [`root`](./root.md): Responsible for the initialization of the chain, maintains registry of deployed contracts.

- [`accounts`](./accounts.md): Manages the on-chain ledger of accounts.

- [`blob`](./blob.md): Responsible for the registry of binary objects of arbitrary size.

- [`blocklog`](./blocklog.md): Keeps track of the blocks and receipts of requests that were processed by the chain.

- [`governance`](./governance.md): Handles the administrative functions of the chain. For example: rotation of the committee of validators of the chain, fees and other chain-specific configurations.

- [`errors`](./errors.md): Keeps a map of error codes to error messages templates. These error codes are used in request receipts.

- [`evm`](./evm.md): Provides the necessary infrastructure to accept Ethereum
  transactions and execute EVM code.
