---
description: The ISC Magic Contract allows EVM contracts to access ISC functionality.
image: /img/logo/WASP_logo_dark.png
keywords:
  - configure
  - using
  - EVM
  - magic
  - Ethereum
  - Solidity
  - metamask
  - JSON
  - RPC
---

# The ISC Magic Contract

[EVM and ISC are inherently very different platforms](../../getting-started/compatibility.md).
Some EVM-specific actions (e.g., manipulating Ethereum tokens) are disabled, and EVM contracts can access ISC-specific
functionality through the \_[ISC Magic Contract](../../reference/magic-contract.md)\_\_.

The Magic contract is an EVM contract deployed by default on every ISC chain, in the EVM genesis block, at
address `0x1074000000000000000000000000000000000000`.
The implementation of the Magic contract is baked-in in
the [`evm`](../../reference/core-contracts/evm.md) [core contract](../../reference/core-contracts/overview.md);
i.e. it is not a pure-Solidity contract.

The Magic contract has several methods, which are categorized into specialized
interfaces: `ISCSandbox`, `ISCAccounts`, `ISCUtil` and so on.
You can access these interfaces from any Solidity contract by importing
the [ISC library](https://www.npmjs.com/package/@iota/iscmagic):

```sh
yarn add @iota/iscmagic
```

You can import it into your contracts like this:

```solidity
import "@iota/iscmagic/ISC.sol";
```

The Magic contract also provides proxy ERC20 contracts to manipulate ISC base
tokens and native tokens on L2.
