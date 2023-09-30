# Non-fungible Tokens

A non-fungible token (NFT) is a globally unique token representing ownership of any distinct asset.
Non-fungible tokens are implemented in Stardust as a standalone output type called [_NFT Output_](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#nft-output).
Once minted, the _NFT Output_ gets assigned a unique _NFT ID_ by the protocol based on the minting transaction. Issuers may
choose to define immutable properties on the output upon minting, such as:

- the [issuer](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#issuer-feature) identity, namely the address of the issuer,
- [metadata](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#metadata-feature) treated as binary data by the protocol.

A distinct feature of L1 NFTs is the ability to function as standalone wallets. Each NFT owns an address derived from its
unique _NFT ID_, called _NFT Address_. NFT addresses look pretty much like regular Ed25519 addresses when encoded in bech32,
except they [always start with](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#address-unlock-condition)
the character `z` after the separator. (`iota1z...`, `smr1z...`).

If _NFT ID_ is a protocol generated value, how can funds locked under the _NFT Address_ be unlocked in a transaction?
The trick is to prove ownership of the _NFT Output_ that defines _NFT ID_ and hence _NFT Address_. To unlock an output
locked to _NFT Address_, the owner has to include the NFT itself in the transaction. If the unlock of the NFT output is valid,
it means that the owner authorized the transaction, therefore it may consume further outputs locked under that _NFT Address_.

Once minted, only the owner of the _NFT Output_ may unlock it to include it in transactions. When an _NFT Output_ is unlocked
in a transaction but the output side doesn't contain it, the NFT gets burned. Any funds locked under its address are lost
forever, since it is impossible to recreate the same output with the same _NFT ID_. Always check if the NFT owns something before burning it!

_NFT Outputs_ support all possible (mutable) _Features_ and _Unlock Conditions_, just like _Basic Outputs_. Therefore,
you can define [timelocks](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#timelock-unlock-condition),
[expiration](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#expiration-unlock-condition)
and [storage deposit return](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#storage-deposit-return-unlock-condition)
conditions on NFTs, but also features like [sender](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#sender-feature),
[metadata](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#metadata-feature) or [tag](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#tag-feature). With such a powerful feature set, NFTs become first-class citizens in the ledger and also support
smart contract chain interactions.

## NFTs as native tokens?

The alert reader might be wondering: can't we just set the maximum supply of a [native token](./foundry.md) to one to have a unique native token, therefore an NFT?
The answer is yes, we could do that, but this approach has its limitations compared to the output based approach:

- NFTs link the actual owned asset via metadata to the token. Metadata of a native token sits in the foundry output,
  while the native token itself may reside in any other output. Therefore, the NFT and its metadata are detached from each other.
- The owner of the NFT as a native token has no control of the foundry, therefore it is impossible to melt the native token
  without the involvement of the issuer. The owner may still burn it, but then the storage deposit of the foundry can never be refunded.
- Native tokens can not own other asset in the ledger.

## Minting an NFT

Transaction A displays the minting of an NFT on protocol level. For the sake of simplicity, we only define an immutable
issuer and metadata upon minting, but it would be possible to add any unlock conditions or mutable feature as well.

Minting must respect the following constraints:

- _NFT ID_ must be zeroed out. The protocol will replace it with the blake2b-256 hash of the _Output ID_ upon booking.
- _Issuer_ address must be unlocked on the input side,
- _Immutable Metadata_ length must not exceed _Maximum Metadata Length_ defined in [TIP-22 (IOTA)](https://github.com/Wollac/protocol-rfcs/blob/protocol-parameters/tips/TIP-0022/tip-0022.md) or [TIP-32 (Shimmer)](https://github.com/iotaledger/tips/blob/shimmer-params/tips/TIP-0032/tip-0032.md).

It is recommended to use one of the _IRC_ standards to define NFT metadata. See [IRC-27](https://github.com/Kami-Labs/tips/blob/main/tips/TIP-0027/tip-0027.md)
for instance on how to define basic metadata linked to the NFT.

![Transaction A - Minting an NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_A.svg)

## Transferring NFT

Transaction B sends the newly issued _NFT Output #1_ to the _recipient_.

- _NFT ID_ is all zeros in _NFT Output #1_, since it has just been minted in Transaction A. While the value of the field ([explicit NFT ID](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#additional-transaction-semantic-validation-rules-3)) is
  all zeroes, based on the protocol rules we know that the [implicit NFT ID](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#additional-transaction-semantic-validation-rules-3)
  can be calculated from the _Output ID_ of _NFT Output #1_.
- When the minted NFT is transferred for the first time, _NFT ID_ must be set as the implicit NFT ID of the mint output. Therefore, _NFT Output #2_
  sets the value of the _NFT ID_ field as the blake2b-256 hash of _NFT Output #1 ID_. If you miss this step and leave it as all zeroes,
  the protocol interprets the transaction as the burning of the minted NFT and the creation of a new NFT.
- Notice, that the immutable features are not allowed to change. Their values are carried together with the NFT until it is burned.
- To change ownership of the NFT, unlock the address of the _Address Unlock Condition_ (_owner_) in the transaction and set a new one (_recipient_) on the output side.
- Without further unlock conditions, _owner_ loses the 100i storage deposit which is now controlled by _recipient_. When an NFT is sold via a marketplace, it is the
  platform that decides how to handle the storage deposit, whether the buying price accounts for it or the owner should be refunded by the recipient via a _Storage Deposit Return Unlock Condition_.

![Transaction B - Transferring NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_B.svg)

### Why can't NFT ID be set directly upon minting?

It was shown in Transaction A that _NFT ID_ must be zeroed out on minting, and via Transaction B that it has to be set to
the protocol generated value in the first transfer. The reason for this is the chicken and egg situation rooted in how
unique values are generated on protocol level:

Unique _NFT ID_ is computed from _Output ID_, that is computed from the minting transaction content. The transaction content contains
the value of the _NFT ID_ field of the output. On minting, the _NFT ID_ is set to zero to signal the minting operation. As soon as the transaction is
prepared (don't even need to submit it yet) the _Output ID_ is known. Therefore, _NFT ID_ can be computed locally, but
it is not possible to place it inside the minting output, as that would alter the transaction content, hence the _Output ID_
and the _NFT ID_ itself.

## Transferring NFT with storage deposit return

Transaction C shows a conditional transfer of an NFT. By defining a _Storage Deposit Return Unlock Condition_ and an
_Expiration Unlock Condition_, the recipient has to claim the NFT transfer in a transaction that:

- Refunds the storage deposit to the _owner_ address,
- within the timeframe specified in the expiration condition.

Should the recipient fail to claim the transfer in time, the ownership of _NFT Output #3_ falls back to the _owner_
address defined in the _Expiration Unlock Condition_. An expired output can be unlocked by this address without having
to fulfill the _Storage Deposit Return Unlock Condition_.

Transaction C defines that _recipient_ has to claim the output in a transaction such that:

- _owner_ is refunded with 100i via a _Basic Output_,
- the claiming transaction may only be carried out until _May 24 2022 18:00:00_.

![Transaction C - Transferring NFT with storage deposit return](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_C.svg)

## Claiming a conditional NFT transfer

Transaction D shows how _recipient_ can claim the conditional transfer initiated in Transaction C:

- _recipient_ has to fund the transaction with the to-be refunded storage deposit, therefore _Basic Output #2_ is unlocked
  on the input side.
- _NFT Output #4_ removes the additional unlocks from the NFT and places it solely into the ownership of _recipient_.
- _Basic Output #3_ refunds _owner_ with the storage deposit defined in the _Storage Deposit Return Unlock Condition_ of
  _NFT Output #3_.
- Transaction D is only valid if the confirming milestone has a timestamp earlier than the one defined in the
  _Expiration Unlock Condition_ of _NFT Output #3_.
- Since both _NFT Output #3_ and _Basic Output #2_ are unlocked by _recipient_ address, it is enough to sign the transaction
  once in _Signature Unlock #1_ and reference this unlock in _Reference Unlock #2_.

![Transaction D - Claiming a conditional NFT transfer](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_D.svg)

## Burning an NFT

The owner of the NFT may choose to burn it to retrieve the storage deposit of the _NFT Output_. Burning on protocol
level simply means that the _NFT Output_ is unlocked in a transaction, but it doesn't appear on the output side.

Transaction E shows how to burn an NFT and claim its storage deposit into a _Basic Output_.

:::warning
Before burning an NFT, always check whether its _NFT Address_ owns something in the ledger. Otherwise, you may lose those
funds forever!
:::

![Transaction E - Burning an NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_E.svg)

## NFT as a wallet

Each NFT has its own unique _NFT ID_ that also functions as an address on protocol level. The address can be deterministically
generated from the ID as outlined in [TIP-31](https://github.com/iotaledger/tips/blob/main/tips/TIP-0031/tip-0031.md), basically
prepending _NFT ID_ with the _NFT Address Type_ and encoding it as a [Bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) string.

What this means is that any output (except for a foundry) can be locked to an _NFT Address_ in the protocol. An _NFT Address_
is a first class citizen on protocol level, just like an _Ed25519 Address_.

To unlock outputs locked under an _NFT Address_, the owner of the NFT must also unlock the _NFT Output_ that defines it,
hence proving ownership of the address. Note, that this is a significant difference compared to _Ed25519 Addresses_, where
ownership is proved via a signing the transaction with a private key

### Unlocking funds owned by the NFT

Transaction F shows how one can unlock an output locked to an _NFT Address_. Notice, that _Basic Output #4_ contains
not only base tokens, but also native tokens. An _NFT Output_ supports holding these native token directly in the output itself,
but it would also be possible to place them in any output after _Basic Output #4_ is unlocked. It is the decision of the
owner of the NFT to define what outputs to create in the transaction.

Just like any other output, an _NFT Output_ supports holding up to _Max Native Token Count_ (defined in [TIP-22](https://github.com/Wollac/protocol-rfcs/blob/protocol-parameters/tips/TIP-0022/tip-0022.md#detailed-design) for IOTA and [TIP-32](https://github.com/iotaledger/tips/blob/shimmer-params/tips/TIP-0032/tip-0032.md#global-parameters) for Shimmer).
In case you need to store more native tokens, distribute them in _Basic Outputs_ that are owned by the NFT.

![Transaction F - Unlocking funds owned by the NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_F.svg)

### Transferring NFT owned by the NFT

So far in the examples the NFTs were always owned by a private key backed address, therefore they were unlocked via a signature.
What happens when an NFT is owned by another NFT?

Similarly to Transaction F, the NFT that owns the other one must be unlocked in the transaction to prove the ownership.
Transaction G shows how the "owner NFT" can unlock the "owned NFT" and transfer it to a new recipient.

![Transaction G - Transferring NFT owned by the NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_G.svg)

:::warning
It is possible to introduce circular ownership with _NFT Addresses_ (and also with _Alias Addresses_). In such a case,
NFT A is owned by NFT B, while NFT B is owned by NFT A. This would mean that unlocking them in a transaction doesn't
require a signature, therefore anyone could unlock them that leads to race conditions on protocol level.

To prevent this undesired property, the protocol forces an _NFT Unlock_ to only be able to reference a previous _Unlock_. As a result,
circular ownership becomes a deadlock, as neither NFTs can be unlocked anymore.

Wallets and applications should implement mitigation strategies to prevent a deadlock: always perform circular ownership
checks before sending an NFT to another NFT!
:::

## NFT Collections

NFTs rarely exist in isolation, usually they are part of a bigger set, a collection. In smart contract based NFTs like ERC1155, a
collection and the NFTs in it are all tracked in a single contract. In UTXO based systems like IOTA/Shimmer however this
is not possible, so a new way of linking together NFTs is needed.

Stardust protocol allows linking NFTs together via the _Issuer Feature_. Since NFTs are first class citizens in the protocol,
they can function as issuers themselves. This feature is exploited for L1 NFT collections.

### Creation of a Collection NFT

A Collection NFT is a just a normal _NFT Output_ but with special purpose: it is used to mint all NFTs in the collection.
The Collection NFT becomes the _Issuer_ of the _NFT Outputs_ representing NFTs within the collection.

It is possible to:

- Permanently lock the Collection NFT to prevent any future minting. No diluting is ever possible by issuers.
- Lock the Collection NFT for some time to prevent minting,
- Deposit the Collection NFT into a L2 chain where minting activity can be governed via smart contracts or DAOs.

Transaction H mints a Collection NFT the same way as Transaction A mints a regular one. The metadata makes it clear
that the intended use of this NFT is to serve as a Collection NFT.

- _name_ defines the name of the collection,
- _uri_ points to a website with more information about the project. Note, that _type_ defines the resource type for _uri_.

![Transaction H - Creation of a Collection NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_H.svg)

### Minting NFTs within the collection

NFTs within the collection must be minted in a way that their _issuer_ is the Collection NFT. Therefore, we include
_NFT Output #10_, the freshly minted Collection NFT from Transaction H in Transaction J, and define the _Issuer Feature_
of all minted NFTs to hold the _NFT Address_ of the Collection NFT.

We also place unique metadata in each NFT within the collection. The metadata is formatted according to IRC27 and contains
information about:

- where the asset represented by the NFT resides,
- the issuer or artist,
- the collection the NFT belongs to,
- optional royalty addresses,
- and custom attributes.

Transaction J mints a very limited collection, there are only 3 items _NFT Output #12, #13 and #14_. The issuer must
also provide the storage deposit for the newly minted NFTs, therefore _Basic Output #7_ is consumed in the transaction.

![Transaction J - Minting NFTs within the collection](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_J.svg)

:::note
If you need to mint more than _Max Outputs Count_ ([TIP-22](https://github.com/Wollac/protocol-rfcs/blob/protocol-parameters/tips/TIP-0022/tip-0022.md#detailed-design) IOTA, [TIP-32](https://github.com/iotaledger/tips/blob/shimmer-params/tips/TIP-0032/tip-0032.md#global-parameters) Shimmer) NFTs, you must do it via chaining together more transactions.
:::

Once the minting transaction confirms, it is possible to fetch all NFT outputs within the collection via the [Indexer API TIP-26](https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md). The following query returns all NFT outputs (their _Output IDs_)
that have been issued by the Collection NFT:

```
GET <indexer-base-url>/api/indexer/v1/outputs/nft?issuer=<collection-nft-address>
```

### Locking Collection NFT

The best way to ensure scarcity of collections is to prevent future minting activity. It is possible to lock the
Collection NFT in the ledger for some time via a _Timelock Unlock Condition_, or for eternity by sending it to the zero address.

The zero address is an Ed25519 address where the hash of the Ed255129 public key is all zeroes, therefore there exists no
private key that could successfully unlock it.

![Transaction K - Locking Collection NFT](/img/stardust_explanations/stardust_ledger_anatomy/nft_transaction/tx_K.svg)
