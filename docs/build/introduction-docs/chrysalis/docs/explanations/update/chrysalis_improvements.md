---
keywords:
  - Coordicide
  - mainnet
  - protocol improvements
  - explanation
description: Specific Chrysalis improvements over IOTA 1.0.
image: /img/logo/Chrysalis_logo_dark.png
---

# Chrysalis Improvements

## White-flag Approach

![White-flag approach](/img/introduction/what_is_chrysalis/01.png)
[The White-flag approach](https://iota.cafe/t/conflict-white-flag-mitigate-conflict-spamming-by-ignoring-conflicts/233), which is used for calculating balances. It is a simpler, conflict-ignoring approach that improved the speed and efficiency of _tip selection_, eliminated many network attacks, and significantly reduced the need for reattachments.

## New Milestone Selection Algorithm

![New Milestone Selection Algorithm](/img/introduction/what_is_chrysalis/02.png)
[A new milestone selection algorithm for the Coordinator](https://iota.cafe/t/coordinator-improvements/310) that focuses on allowing the network to support many more confirmed transactions per second (_CTPS_) than before, with higher computational efficiency.

## URTS Tip Selection

![URTS Tip Selection](/img/introduction/what_is_chrysalis/03.png)
A new [Uniform Random Tip Selection](https://github.com/iotaledger/protocol-rfcs/blob/master/text/0008-uniform-random-tip-selection/0008-uniform-random-tip-selection.md) in node software. It is significantly faster and more efficient than the previous _tip selection_ algorithm.

## Ed25519 Signature Scheme

![Ed25519 Signature Scheme](/img/introduction/what_is_chrysalis/04.png)
[The Ed25519 signature scheme](https://github.com/iotaledger/protocol-rfcs/blob/ee07797acb5940b7dbb5c3411b184ccdc6afdbb1/text/0000-ed25519-signature-scheme/0000-ed25519-signature-scheme.md) has been added to the network, replacing the current Winternitz one time signature scheme (W-OTS) signature scheme. Using an EdDSA signature scheme allows the protocol and clients using the protocol to run more efficiently on established hardware. Unlike W-OTS, the Ed25519 signature scheme also allows for the re-use of private keys, and, with that, introduces _reusable addresses_ to the protocol. This change also dramatically reduces the transaction size, saving network bandwidth and processing time.

## Atomic Transactions

![Atomic Transactions](/img/introduction/what_is_chrysalis/05.png)
[Atomic transactions](https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md) that move the protocol from the current, complicated, bundle construct and use simpler atomic transactions instead. This results in much simpler development, and more adaptable and maintainable code of the core software. In addition, atomic transactions reduce network overhead, reduce transaction validation and signature verification load, and improve spam protection and congestion control.

## Switch to UTXO Model

![Switch to UTXO Model](/img/introduction/what_is_chrysalis/06.png)
[Switch to the UTXO model](https://iota.cafe/t/switching-to-utxo-model-for-balances-colored-coins-easier-conflict-resolution/229) from the current account model. Every coin on an address becomes uniquely identifiable and every spend names the exact coins that it wants to move. This allows for faster and more exact conflict handling and improves resilience and security of the protocol. In addition, switching to UTXO makes other functionalities, such as colored tokens, on the protocol possible in the future.

## Internal Binary Representation

![Internal Binary Representation](/img/introduction/what_is_chrysalis/07.png)
[A switch to an internal binary representation of the trinary transaction](https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md). This allows us to work on binary data for validation, IO, and other processing, without the current reliance on binary-ternary conversions as in the pre-Chrysalis node software. The switch to binary transactions further reduces transaction size, saving network bandwidth and processing time.

## New Node API and Client Libraries

With Chrysalis, we wanted to offer a more standard API on both the node and client library level. Node implementations provide a completely redesigned [RESTful](https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml) and [eventful](https://playground.asyncapi.io/?load=https://raw.githubusercontent.com/luca-moser/protocol-rfcs/rfc/node-event-api/text/0033-node-event-api/0033-node-event-api.yml) API implementations.

Our [client libraries](/build/welcome) provide high-level abstractions that allow developers to build solutions that are easier to develop and cheaper to maintain.

## Full Changelog

You can find a [full list of changes](../../reference/changelog.md) in the reference section.
