import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Wallet

## Example Code

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

1. Build
   a [`SecretManager`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/client/secret/enum.SecretManager.html).
   This example uses
   the [`StrongholdSecretManager`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/client/secret/stronghold/type.StrongholdSecretManager.html),
   but you can choose any of
   the [supported options](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/client/secret/enum.SecretManagerDto.html):

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/how_tos/wallet/create_wallet.rs#L38-l40
```

</div>

2. Store a mnemonic to secure
   your [`Wallet`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/struct.Wallet.html). This
   examples uses the one stored in
   the [`.env`](https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/.env.example#L7-L8) file:

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/how_tos/wallet/create_wallet.rs#L46
```

</div>

3. Define
   the [`ClientOptions`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/struct.Wallet.html#method.client_options)
   for the node URL specified in the `.env` by chaining a call
   to [`with_node()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/client/builder/struct.ClientBuilder.html#method.with_node):

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/how_tos/wallet/create_wallet.rs#L48
```

</div>

4. Use
   the [`Wallet::builder()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/struct.WalletBuilder.html)
   with chained calls to
   [`.with_secret_manager()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/builder/struct.WalletBuilder.html#method.with_secret_manager)
   to specify the `SecretManager` created on step 1,
   [`.with_storage_path()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/builder/struct.WalletBuilder.html#method.with_storage_path)
   to specify the database's path,  
   [`.with_client_options()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/builder/struct.WalletBuilder.html#method.with_client_options)
   to specify
   the [`Client`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/client/core/struct.Client.html)
   options, and
   [`.with_bip_path()`](file:///home/lucas/Documents/IOTA/iota-sdk/target/doc/iota_sdk/wallet/core/builder/struct.WalletBuilder.html#method.with_bip_path)
   to set the BIP44 path:

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/how_tos/wallet/create_wallet.rs#L51-L57
```

</div>

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

1. Build
   a [`SecretManager`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/SecretManager/).
   This example uses
   the [`StrongholdSecretManager`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/StrongholdSecretManager/),
   but you can choose any of
   the [supported options](http://localhost:3000/iota-sdk/2.0/references/nodejs/api_ref/#secretmanagertype):

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts#L33-L40
```

</div>

2. Store a mnemonic to secure
   your [`Wallet`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/Wallet/). This
   examples uses the one stored in
   the [`.env`](https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/.env.example#L7-L8) file:

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts#L45
```

</div>

3. Use the [`SecretManager`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/SecretManager/) you created in
   step 2 a `Ed255519` address by calling
   the [`generateEd25519Addresses`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/SecretManager/#generateed25519addresses)
   function:

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts#L47-L55
```

</div>

4. Define the [`WalletOptions`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/) to use
   the [`address`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/#address) that you
   created on step 3,
   the [`storagePath`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/#storagepath) that
   is defined in
   the `.env` file,
   the [`clientOptions`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/#clientoptions)
   to use the [`node`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/INode/) URL defined in the `.env`
   file,
   the [`bipPath.coinType`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/#bippath)
   to use the IOTA [`CoinType`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/Bip44/#cointype) and
   the `strongholdSecretManager` that you created in step 1 as
   a [`secretManager`](http://localhost:3000/iota-sdk/2.0/references/nodejs/interfaces/WalletOptions/#secretmanager):

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts#L57-L67
```

</div>

5. Create the [`Wallet`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/Wallet/) by
   calling [`Wallet.create()`](http://localhost:3000/iota-sdk/2.0/references/nodejs/classes/Wallet/#create):

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts#L69
```

</div>

</TabItem>
<TabItem value="python" label="Python">

1. Instantiate
   new [`ClientOptions`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/types/client_options/) ot
   use the `node_url` defined in
   the [`.env`](https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/.env.example) file, or default
   to the [Shimmer Testnet](https://wiki.iota.org/build/networks-endpoints/#public-testnet):

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py#L11-L12
```

</div>

2. Instantiate
   a [`StrongholdSecretManager`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/secret_manager/#strongholdsecretmanager-objects)
   as a [`secret_manager`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/secret_manager), using the
   variables defined in
   the [`.env`](https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/.env.example):

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py#L11-L12
```

</div>

3. Use
   the [`SecretManager`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/secret_manager/)
   to store a mnemonic from the `.env` file:

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py#L23
```

</div>

4. Define the [`Bip44`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/types/signature/#bip44-objects)
   path
   with the Shimmer `CoinType`:

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py#L25-L27
```

</div>

4. Define
   the [`WalletOptions`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/wallet/#walletoptions-objects) to
   use the variables you defined in the previous steps and create
   the [`Wallet`](http://localhost:3000/iota-sdk/2.0/references/python/iota_sdk/wallet/):

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py#L29-L36
```

</div>

</TabItem>
</Tabs>

## Full Example Code

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

```rust reference
https://github.com/iotaledger/iota-sdk/blob/2.0/sdk/examples/how_tos/wallet/create_wallet.rs
```

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/nodejs/examples/how_tos/wallet/create-wallet.ts
```

</TabItem>
<TabItem value="python" label="Python">

```python reference
https://github.com/iotaledger/iota-sdk/blob/2.0/bindings/python/examples/how_tos/wallet/create_wallet.py
```

</TabItem>
</Tabs>

### Expected Output

```
Generated new wallet
```