# Native Tokens and Foundries

Stardust introduces the concept of native tokens, or also called user-defined custom tokens. These tokens are minted
into existence by token foundries, represented as [_Foundry Outputs_](https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md#foundry-output) on protocol level. The foundry defines the
supply control rules, that is, how many tokens can ever be created.

All outputs in the ledger support holding native tokens, therefore to transact with native tokens users don't need the
approval of the foundry. Once native tokens are minted, they function as digital cash. The foundry acts as the central
bank controlling supply via minting new tokens or buying back tokens from the market to be melted, hence decreasing the
available supply. Users have the ability to burn native tokens in their possession, which is equivalent to sending
the to-be burnt tokens to the zero address.

Foundries can only be created and controlled by alias accounts. Smart contract chains therefore can also act as token issuers
on L1 and leverage the framework for L2 asset wrapping and inter-L2-chain transfers.

## Creating a Foundry

As mentioned above, only an alias can create new foundries, therefore the process starts with an existing _Alias Output_.
To create a new foundry, simply state transition the alias and create a new _Foundry Output_ on the output side of the
transaction.

Transaction A shows an example transaction that creates a foundry:

- The controlling alias is state transitioned, its _State Index_ and _Foundry Counter_ are incremented.
- To cover for the storage deposit of the created _Foundry Output_, the alias deposits 100i into the output.
- The _Serial Number_ of the foundry must correspond to the updated _Foundry Counter_. Each foundry created by the alias
  is unique because of the unique _Serial Number_.
- The foundry uses the _Simple Token Scheme_ as a supply control rule. It defines an upper cap (_Maximum Supply_) for
  tokens in circulation.
- _Minted Tokens_ defines how many tokens have been minted by the foundry. Since we don't immediately mint tokens in this
  transaction, it is set to 0.
- _Melted Tokens_ defines how many tokens have been melted by the foundry. At creation there are no tokens to be melted,
  therefore this must be 0.
- Foundries support only one unlock condition, namely the _Immutable Alias Address Unlock Condition_. It can never be changed
  during the lifetime of the foundry, therefore the issuer role can only be transferred via the controlling alias.
- Metadata about the token may be put in the _Immutable Metadata Feature_ of the foundry. For example, it may hold an
  [IRC30](/tips/tips/TIP-0030) compatible JSON file.
  By hosting token metadata on-chain in a foundry output, we make the data available on all network nodes 24/7. There is
  no need for additional, off-chain metadata servers.

![Transaction A - Creating a Foundry](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_A.svg)

## Minting tokens

Now that we have the foundry, it's time to mint native tokens. We simply need to transition the foundry in a transaction,
declare that we mint tokens and place them in an output of our choice.

Tokens controlled by a foundry have a globally unique identifier, called _Token ID_, that is derived from the properties
of the foundry. To get the _Token ID_, one has to concatenate:

- the serialized _Alias Address_ that controls the foundry (33 bytes),
- the _Serial Number_ of the foundry,
- and the _Token Scheme Type_.

By knowing the _Token ID_, one can fetch current unspent foundry output from the Indexer API defined in [TIP-26](https://github.com/iotaledger/tips/blob/indexer-api/tips/TIP-0026/tip-0026.md).

Transaction B mints all available tokens in the foundry.

- _Minted Tokens_ in _Foundry Output #2_ is increased by the number of minted tokens, namely 1000.
- 500 tokens are minted into _Basic Output #1_ and locked to _mintAddress_.
- 500 tokens are minted into _Basic Output #2_ and locked to _vestAddress_. Additionally, a timelock is specified on
  the output so that these token can only be unlocked after May 24 2023 18:00:00.

![Transaction B - Minting tokens](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_B.svg)

## Melting tokens

Melting tokens removes them from the circulating supply. Melting can only be carried out if the foundry is included in
the transaction.

Transaction C assumes that the token issuer is in control of _mintAddress_ where the to-be melted tokens are locked.
250 tokens are being melted in foundry.

- _Melted Tokens_ of _Foundry Output #3_ is increased by the amount of melted tokens, 250.
- _Basic Output #3_ has only 250 tokens remaining. The input side of the transaction contains 500 tokens, but the output
  side only 250. By increasing _Melted Tokens_ on _Foundry Output #3_ the transaction becomes balanced.
- Looking at _Foundry Output #3_ we can determine that the circulating supply of the token is _Minted Tokens_ - _Melted Tokens_ = 750.
- In a subsequent transaction we could mint 250 tokens to reach _Maximum Supply_ again.

![Transaction C - Melting tokens](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_C.svg)

## Burning tokens

Burning tokens by token holders without the involvement of the foundry is possible to prevent losing access to the
storage deposit of the underlying tokens. What would happen if _mintAddress_ in _Basic Output #3_ is not controlled by the
issuer, but some other entity?

They obviously can't melt the tokens without controlling the foundry, therefore they can't free up the base tokens (IOTA/SMR)
in _Basic Output #3_. Unless the issuer buys back the tokens or someone else relieves the user by taking the tokens and
refunding the storage deposit, it is locked forever. Burning makes it possible to "forget" about these tokens and free
up the storage deposit.

Burnt tokens are no longer tracked in the ledger, therefore burning is conceptually equivalent to sending to the zero address
without a storage deposit.

Transaction D burns all tokens in _Basic Output #3_. Notice that _mintAddress_ doesn't have to have the approval of the
foundry and the controlling alias account.

![Transaction D - Burning tokens](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_D.svg)

## Transferring native tokens with storage deposit

Transferring native tokens is similar to transferring base tokens. The output that you create on the receiver's address
however needs to have base tokens to cover for the storage deposit. Therefore, there are two ways to transfer native tokens:

- Sending native tokens together with the required storage deposit. The sender loses access to the storage deposit.
- Sending native tokens with _Storage Deposit Return Unlock Condition_. The receiver has to claim the transfer by refunding
  the storage deposit of the sender. The sender doesn't lose the storage deposit.

The former method is depicted in Transaction E. Due to claiming in the latter method, it is called a conditional transfer, depicted in Transaction F.
![Transaction E - Transferring native tokens with storage deposit](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_E.svg)

## Conditional transfer of native tokens

In order not to lose access to the storage deposit, two additional unlock conditions are defined on
_Basic Output #7_ in Transaction F:

- A _Storage Deposit Return Unlock Condition_ that forces the consumer of the output to refund _Return Amount_ of base tokens to _Return Address_,
- and an __Expiration Unlock_ Condition_ that defines a time window until the recipient has to claim the transfer. If they don't do so,
  ownership of _Basic Output #7_ bounces back to the sender and the _Storage Deposit Return Unlock Condition_ is ignored.
- The expiration time is compared to the timestamp of the confirming milestone to decide whether the unlock is valid or not.

Transaction F shows the creation of a conditional transfer:
![Transaction F - Conditional transfer of native tokens](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_F.svg)

Once the "offer" is created, the recipient can claim the transfer until the expiration deadline. Transaction G shows
a successful claiming.

- Note that the recipient needs to sweep the native tokens into an output they already own to cover for the storage deposit, hence _Basic Output #8_ is unlocked in the transaction.
- _Basic Output #9_ refunds the sender with the storage deposit used to create _Basic Output #7_.

![Transaction G - Claiming conditional transfer](/img/stardust_explanations/stardust_ledger_anatomy/native_tokens_foundries/tx_G.svg)
