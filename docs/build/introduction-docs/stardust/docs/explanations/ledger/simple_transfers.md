---
tags:
  - Ledger
  - UTXO
  - explanation
description: Simple Transfers in Stardust.
image: /img/logo/preview.png
---

# Simple Transactions

## Transfer of Funds

A simple transaction moves funds from one user account to another. On a high level, transactions must define 3 things:

- **Inputs**: previously created unpsent transaction outputs holding funds that the transaction consumes,
- **Unlock Blocks**: they hold the signatures authorizing the consumption of inputs,
- **Outputs**: newly created outputs holding transferred funds.

In Stardust a simple transfer may be realized with an output type called [Basic Output](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#basic-output).
Just like every other output type, Basic Outputs define the base token funds they hold in the _Amount_ field. They have
to have at least one [Unlock Condition](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#unlock-conditions)
defined: the [Address Unlock Condition](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#address-unlock-condition).

It means that in order to unlock the output in a transaction, one has to present a valid signature for the given address.
The signature signs the whole content of the transaction, thereby authorizing the consumption of inputs but also
declaring the intention to create new outputs.

Transaction A simply:

- consumes as input a _Basic Output_ with _100i_ locked under _ownerAddress_,
- provides an _Unlock_, namely a _Signature Unlock_ that contains a valid signature of the transaction content corresponding
  to the private key behind _ownerAddress_,
- creates a new _Basic Output_ with _100i_ locked under the recipients address, namely _recipientAddress_.

![Transaction A - Changing owner](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_A.svg)

## Transfer of Funds with Expiration

The first new _Unlock Condition_ we are going to look at is the [Expiration Unlock Condition](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#expiration-unlock-condition).
It lets the creator of the output define an _Expiration Deadline_. Before the deadline, the recipient can consume and
unlock the output in a transaction, but once the deadline expired, only the _Return Address_ defined in the
_Expiration Unlock Condition_ can unlock it.

Transaction B defines an output that can only be unlocked by the recipient in a transaction that is confirmed by a
milestone where _Milestone Unix Timestamp_ is less, than the _Unix Time_ defined in the _Expiration Unlock Condition_.

![Transaction B - Sending funds with expiration](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_B.svg)

Transaction C shows how the recipient can consume the output before the deadline and take the funds into full, unconditional
custody.

![Transaction C - Recipient claims non-expired funds](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_C.svg)

Transaction D depicts how the original sender claims an expired output. Note, that it is not necessary for the sender
to sweep the funds into their own wallet, they can just treat it as funds they have full custody of.

![Transaction D - Original sender claims expired funds](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_D.svg)

## Timelocking Funds in Transfers

With Stardust, it is possible to lock funds away based on time. When an output has a [Timelock Unlock Condition](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#timelock-unlock-condition)
defined, not even its rightful owner can unlock it before the timelock expires. Just like in the case of the Transaction C and D,
the notion of time in the ledger is determined by the timestamp of the milestone that confirms the transaction.

Transaction E creates an output owned by the recipient but timelocked until _May 24 2022 18:00:00_.

![Transaction E - Sending funds with timelock](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_E.svg)

The recipient has no way to unlock the output before the deadline. Once the timelock expired, the funds can be moved, as
depicted on Transaction F.

![Transaction F - Recipient unlocks timelocked funds](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_F.svg)

## Storage Deposit Returns in Transfers

Stardust introduces a new system to protect the ledger size and hence node storage resources, called Byte-cost based
Storage Deposit System. You can read more about it in [TIP-19](https://github.com/iotaledger/protocol-rfcs/blob/master/tips/TIP-0019/tip-0019.md).
In short, every output in the ledger need to carry enough base tokens to cover for its network storage use.

Implicitly this means that an output has to have a minimum amount of base tokens, otherwise it is considered invalid.
The exact minimum depends on the size of the output and the protocol parameter _Virtual Byte Cost_. The implication of
this is that is no longer possible to store microfunds in an output. So suppose you wanted to send 1i (0.000001 MIOTA):
is it still possible?

The answer is yes. With the [Storage Deposit Return Unlock Condition](https://github.com/iotaledger/tips/blob/master/tips/TIP-0018/tip-0018.md#storage-deposit-return-unlock-condition)
it is possible to define spending constraints on outputs that you create. Let's assume that the minimum amount of funds
that need to be present in an output is 100i. If you wanted to send only 1i to the recipient, you would transfer
101i to the recipient's address with the extra condition that she can only use the funds if she refunds you in the
very same transaction with 100i.

Transaction G show the creation of an output with _Storage Deposit Return Unlock Condition_. Notice, that _Basic Output #11_
holds 101i, and the unlock condition defines the _Return Amount_ of 100i to _ReturnAddress_ _ownerAddress_. All in all,
the recipient can only freely use 1i when she consumes the output in Transaction H.

![Transaction G - Sending microfunds](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_G.svg)

In order for the recipient to claim the 1i, she needs to sweep it into one of her own outputs. Therefore, she consumes
_Basic Output #12_ in the transaction that holds her funds. On the output side, she has to have _Basic Output #13_ that
refunds the original sender, plus she creates _Basic Output #14_ into which she sweeps the 1i.

![Transaction H - Receiving microfunds](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_H.svg)

What forces the recipient to post and execute Transaction H? Nothing. She can just keep the sender's 100i in limbo forever.
That is why it is handy that you can combine _unlock conditions_. For example, the sender can add an expiration
condition to _Basic Output #11_. Once the output is expired, the recipient won't be able to claim the 1i and the sender
takes full custody of the 101i in the output.

## Sender Feature

Next to _Unlock Conditions_, Stardust allows to define optional _Features_ on outputs of a transfer that do not impact
the actual unlocking of the created output. The _Sender_ feature is one of such features, which lets the creator of the output
define an explicit _Sender Address_ attribute for an output.

The _Sender_ attribute is validated on protocol level. Validation ensures that the transaction that created the output
unlocked the _Sender_ address on the input side. Therefore, this feature is a protocol validated proof that the output
was created by someone who controls the _Sender_ address.

Transaction J shows how one can add a sender attribute to a created output. Note, that Transaction J would be invalid
if:

- _Basic Output #15_ wouldn't be locked to _senderAddress_, or
- _Basic Output #16_ would define _Sender_ as anything else than _senderAddress_ from _Basic Output #15_.

![Transaction J - Sender Feature](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_J.svg)

On-ledger (originating from L1) requests of IOTA Smart Contracts use this feature heavily, but it is also possible to
fetch outputs created by a specific party with the _Sender Feature_ through the [INX UTXO indexer application](https://github.com/gohornet/inx-indexer)
and [REST API](https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md).

## Metadata Feature

Another handy tool is the _Metadata Feature_ of outputs. This feature makes it possible to store arbitrary data in outputs.
Of course, storing data in outputs increases the minimum base token requirement, but in turn it provides a _data storage_ option
that is 24/7 available on any network node.

As soon as the output with metadata is consumed, it is pruned from nodes' databases and base tokens used as storage
deposit are freed up.

![Transaction K - Metadata Feature](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_K.svg)

## Tag Feature

The _Tag Feature_ makes it possible to associate a maximum 64 bytes long indexation tag with an output. Similarly to
the _Metadata Feature_, the actual _Tag_ is treated as binary data by the protocol.

Note, that by default nodes do not store and expose the indexation by tag, however the [Indexer API](https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md) does. In an "IOTA as a payment method" use case the _Tag_
field could be used as a payment reference field, much like the payment reference option of a regular wire transfer.

![Transaction L - Tag Feature](/img/stardust_explanations/stardust_ledger_anatomy/simple_transaction/tx_L.svg)
