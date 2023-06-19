---
description: 'Smart contracts can be invoked through their entry points, from outside via a request, or from inside via a
call.'
image: /img/logo/WASP_logo_dark.png
keywords:

- smart contracts
- requests
- on-ledger
- off-ledger
- calls
- invocation
- explanation

---

# Calling a Smart Contract

## Entry Points

Like any other computer program, a smart contract will lie dormant until someone or something instructs it to activate.
In the case of smart contracts, the most common way to activate them is to call one of
their [entry points](./smart-contract-anatomy.md#entry-points). It is the same as calling a program's function. It will
take a set of instructions of the smart contract and execute it over the current chain's state. _View entry points_ can
only read the state, while _full entry points_ can read and write to it.

To invoke a smart contract from outside the chain, the _sender_ (some entity that needs to be identified by a
private/public key pair) has to wrap the call to the entry point into a _request_.
The request has to be cryptographically signed and submitted to the [consensus](./consensus.md) procedure to let the
chain's committee evaluate it and engrave the outcome of its execution into a new state update.

Upon receiving a request, the committee will execute the wrapped call fully or reject the request with all its potential
changes, never modifying the state halfway. This means that every single request is an atomic operation.

### Synchronous Composability

After being invoked by a request, the smart contract code is allowed to invoke entry points of other smart contracts on
the same chain. This means it can _call_ other smart contracts.

Smart contract calls are deterministic and synchronous, meaning they always produce the same result and execute all
instructions immediately after another.
If a smart contract calls another smart contract, the resulting set of instructions is also deterministic and
synchronous. This means that for a request, it makes no difference if a smart contract's entry point contains the whole
set of instructions or if it is composed by multiple calls to different smart contracts of the chain.

Being able to combine smart contracts in this way is called *synchronous composability*.

---

## Requests

A request contains a call to a smart contract and a signature of the sender. The sender also owns the assets and funds
processed within the request.
Unlike calls between smart contracts, requests are not executed immediately.
Instead, they must wait until the chain's validator nodes include them in a request batch.
This means that requests have a delay and are executed in an unpredictable order.

### Asynchronous Composability

Requests are not sent by humans exclusively. Smart contracts can also create requests.
For example, a user can send a request to a smart contract that, in turn, sends a request to a decentralized third-party
exchange which would will the user's funds from one currency to another and send them back through another request.

This is called *asynchronous composability*.

### On-Ledger Requests

An on-ledger request is a Layer 1 transaction that validator nodes retrieve from the Tangle. The Tangle acts as an
arbiter between users and chains and guarantees that the transaction is valid, making it the only way to transfer assets
to a chain or between chains. However, it is the slowest way to invoke a smart contract.

### Off-Ledger Requests

If all necessary assets are in the chain already, it is possible to send a request directly to that chain's validator
nodes.
This way, you don’t have to wait for the Tangle to process the message, significantly reducing the overall confirmation
time.
Due to the shorter delay, off-ledger requests are preferred over on-ledger requests unless you need to move assets
between chains or Layer 1 accounts.

---

## Gas

Gas expresses the "cost" of running a request in a chain. Each operation (arithmetics, write to disk, dispatch events,
etc.) has an associated gas cost.

For users to specify how much they're willing to pay for a request, they need to specify a `GasBudget` in the request.
This gas budget is the "maximum operations that this request can execute" and will be charged as a fee based on the
chain's current [fee policy](core_contracts/governance.md#fee-policy).

The funds to cover the gas used will be charged directly from the user's on-chain account.

---

## Allowance

Any funds sent to the chain via on-ledger requests are credited to the sender's account.

For contracts to use funds owned by the *caller*, the *caller* must specify an `Allowance` in the request. Contracts can
then claim any of the allowed funds using the sandbox `TransferAllowedFunds` function.

The Allowance properly looks like the following:

```go
{
  FungibleTokens: {
    BaseToken: uint64
    NativeTokens: [{TokenID, uint256}, ...]
  }
  NFTs: [NFTID,...]
}
```
