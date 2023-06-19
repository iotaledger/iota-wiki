---
description: 'IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified
by an AgentID.'
image: /img/tutorial/accounts.png
keywords:

- smart contracts
- on-chain account
- ownership
- accounts Contract
- explanation

---

# How Accounts Work

On the L1 Ledger, like with any DLT, we have **trustless** and **atomic** transfers of assets between addresses on the
ledger.

Tokens controlled by an address can be moved to another address by providing a valid signature using the private key
that controls the source address.

In IOTA Smart Contracts, [each chain has a L1 address](../states#digital-assets-on-the-chain) (also known as the _Chain
ID_) which enables it to control L1 assets (base tokens, native tokens and NFTs).
The chain acts as a custodian of the L1 assets on behalf of different entities, thus providing a _L2 Ledger_.

The L2 ledger is a collection of _on-chain accounts_ (sometimes called just _accounts_).
L2 accounts can be owned by different entities, identified by a unique _Agent ID_.
The L2 ledger is a mapping of Agent ID => balances of L2 assets.

## Types of Accounts

### L1 Address

Any L1 address can be the owner of a L2 account.
The Agent ID of an L1 address is just the address,

e.g. `iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf`.

Tokens in an address account can only be moved through a request signed by the private key of the L1 address.

### Smart Contract

Any smart contract can be the owner of a L2 account. Recall that a smart
contract is uniquely identified in a chain by a [_hname_](../smart-contract-anatomy#identifying-a-smart-contract).
However, the hname is not enough to identify the account since a smart contract on another chain could own it.

Thus, the Agent ID of a smart contract is composed as the contract hname plus the [_chain
ID_](../states#digital-assets-on-the-chain), with syntax `<hname>@<chain-id>`. For
example: `cebf5908@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd`.

Note that this allows trustless transfers of assets between smart contracts on the same or different chains.

Tokens in a smart contract account can only be moved by that smart contract.

### The Common Account

The chain owns a unique L2 account, called the _common account_.
The common account is controlled by the chain owner (defined in the chain root contract) and is used to store funds
collected by fees or sent to the chain L1 address.

The Agent ID of the common account is `<hname=0>@<chain-id>`. For
example: `00000000@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd`.

### Ethereum Address

An L2 account can also be owned by an Ethereum address. See [EVM](../../evm/introduction) for more information.
The Agent ID of an Ethereum address is just the address prefixed with `0x`,
e.g. `0xd36722adec3edcb29c8e7b5a47f352d701393462`.

Tokens in an Ethereum account can only be moved by sending an Ethereum transaction signed by the same address.

## The Accounts Contract

The [`accounts` core contract](../core_contracts/accounts) is responsible for managing the L2 ledger.
By calling this contract, it is possible to:

- [View current account balances](./view-account-balances.mdx)
- [Deposit funds to the chain](./how-to-deposit-to-a-chain.mdx)
- [Withdraw funds from the chain](./how-to-withdraw-from-a-chain.mdx)
- [Harvest](./the-common-account.mdx) - can only be called by the chain owner, to move funds from the chain common
  account to their account.

## Example

The following diagram illustrates an example situation.
The the IDs and hnames are shortened for simplicity.

[![Example situation. Two chains are deployed, with three smart contracts and one address.](/img/tutorial/accounts.png)](/img/tutorial/accounts.png)

Two chains are deployed, with IDs `chainA` and `chainB`.
`chainA` has two smart contracts on it (with hnames `3037` and `2225`), and `chainB` has one smart contract (`7003`).

There is also an address on the L1 Ledger: `iota1a2b3c4d`.
This address controls 1337 base tokens and 42 `Red` native tokens on the L1 Ledger.

The same address also controls 42 base tokens on `chainA` and 8 `Green` native tokens on `chainB`.

So, the owner of the private key behind the address controls three different accounts: the L1 account and one L2 account
on each chain.

Smart contract `7003@chainB` has five base tokens on its native chain and controls eleven base tokens on chain A.
