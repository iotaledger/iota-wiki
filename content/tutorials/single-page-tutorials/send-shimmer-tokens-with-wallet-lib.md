# Send Shimmer Tokens with wallet.rs


## Introduction

This tutorial shows how to get Shimmer Testnet tokens and send them to another address. 

### What you will learn

- Create an Stronghold account
- Generate an Shimmer Address
- Get some Shimmer Testnet Tokens
- Fetch your Balance
- Send Tokens to another address


## Setup Environment
First step is to clone and prepare the wallet.rs repository. Be sure, you have the newest version of rust!

```bash=
git clone https://github.com/iotaledger/wallet.rs
cd wallet.rs
```

Open it in your favourite code editor, in this case - we will using Visual Studio Code (VSC) so we can open the code with this command

```bash=
code .
```

Open the examples directory and the first example `01_create_wallet.rs` and read the code a bit.
If you don't understand everything - dont worry, we will go through the code line by line.

If you're done. we need to create a valid `.env` file, so let's remove the example ending a the `.env.example` file to and name it to `.env`. Don't forget the point at the beginning, it's a "dot env '' file. 

Now, set a new MNEMONIC and choose a stronghold password. For example

```bash=
NONSECURE_USE_OF_DEVELOPMENT_MNEMONIC="spot rain split grant habit office increase friend useful arrest entry obey gas amateur teach"
STRONGHOLD_PASSWORD="my_super_secure_password"
````

### Shimmer Alphanet Connection

You can use the example with a custom node, or use the public Shimmer Alphanet which is reachable here:

> **https://api.alphanet.iotaledger.net/**

You need to replace the localhost part in Line 33 in the `ClientOptions`.
```rust=
// Create the account manager with the secret_manager and client options
let client_options = ClientOptions::new()
    .with_node("https://api.alphanet.iotaledger.net/")?
    .with_node_sync_disabled();
```


That's all for the preparation - let's start with the fun stuff!

## Create an account

Just run the first example, you can choose your account name (Alias) in Line 45.

```bash=
cargo run --example 01_create_wallet
```

This should take a while and print this in your console, if you get the message `Generated a new account`everything worked correct!
```bash=
cargo run --example 01_create_wallet
    Finished dev [unoptimized + debuginfo] target(s) in 1.56s
     Running `target/debug/examples/01_create_wallet`
[riker::system] Starting actor system: System[riker]
[riker::system] Actor system [9811b844-2930-4ae4-be3f-61876eea24fb] [riker] started
[iota_wallet::account_manager::builder] [AccountManagerBuilder]
[iota_wallet::storage::manager] get_account_manager_data
[iota_wallet::storage::manager] save_account_manager_data
[iota_wallet::account_manager] creating account
[iota_wallet::account::builder] [ACCOUNT BUILDER] creating new account Alice with index 0
[reqwest::connect] starting new connection: https://api.alphanet.iotaledger.net/
[rustls::client::hs] No cached session for DnsName(DnsName(DnsName("api.alphanet.iotaledger.net")))
[rustls::client::hs] Not resuming any session
[rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
[rustls::client::tls13] Not resuming
[rustls::client::tls13] TLS1.3 encrypted extensions: [Protocols([6832])]
[rustls::client::hs] ALPN protocol is Some(b"h2")
[rustls::client::tls13] Ticket saved
[reqwest::async_impl::client] response '200 OK' for https://api.alphanet.iotaledger.net/api/v2/info
[iota_wallet::account::handle] [save] saving account to database
**Generated a new account**
[rustls::conn] Sending warning alert CloseNotify
```

This will create two new things in your directory - a stronghold and a folder with a DB to track your state. That's because wallet.rs is a stateful library. 


### Example 01_create_wallet in Detail

Let's take a deeper look into the code
```rust=
// Setup Stronghold secret_manager
let mut secret_manager = StrongholdSecretManager::builder()
    .password(&env::var("STRONGHOLD_PASSWORD").unwrap())
    .snapshot_path(PathBuf::from("wallet.stronghold"))
    .try_build()?;
```
In this line, we create a secret_manager which handles the creation of the Account and takes care of the security. Within the next lines, we will set a mnemonic, which is a secure password with a good human readability.  



### Generate Address

In the next step, we will generate a new address. We need this address for sending some Alphanet Tokens to it. TO generate an new address, just run the second example like this:
```bash=
cargo run --example 02_generate_address
```

This is how your console should look like

```bash=
[riker::system] Starting actor system: System[riker]
[riker::system] Actor system [a0527bd1-521e-42b2-882e-cde7fdd2eadd] [riker] started
[iota_wallet::account::operations::address_generation] [ADDRESS GENERATION] generating 1 addresses
[iota_wallet::account::operations::address_generation] [ADDRESS GENERATION] storing account 0
[iota_wallet::account::handle] [save] saving account to database
Generated address: rms1qqtkaevcr205mcn6ae08reljxgd57mqd5xru7krn7scvc6jeagtzu0x6s8z
```

You can see, all Alphanet addresses begin with "rms1" which is reverse for shimmer (smr).

### Get some Alphanet Tokens

You can get some Alphanet Tokens on the online faucet or with the third example, please check that you're using the correct Node Url!

- [Online Web Faucet](https://faucet.alphanet.iotaledger.net/)
- Run `cargo run --example  03_get_funds`

If you ran the example, please be sure you have the correct faucet URL - for the public Testnet, you can sue this URL: [https://faucet.alphanet.iotaledger.net/api/enqueue](https://faucet.alphanet.iotaledger.net/api/enqueue)

### Check the balance
Now you should have some tokens and to validate that, we can ask the wallet.rs which balance our account have. Just run the next example to validate that!


```bash=
cargo run --example 04_get_balance
```

You should see something like this in your logs! If yes - congratulations! You have some Shimmer Testnet Tokens!

```bash=
AccountBalance { total: 1000000000, available: 1000000000, required_storage_deposit: 213000, native_tokens: NativeTokens(BoxedSlicePrefix([])), nfts: [], aliases: [], foundries: [], potentially_locked_outputs: {} }

```
If no coins appear, try the faucet again and use the other faucet described above. If this still does not work - please raise a message in [our Discord!](https://discord.iota.org/).


### Send Tokens

Now we have some tokens and we can send them around. Ask a friend. if he can send you the address and you will send some Shimmer Testnet Tokens. 

In this case, we will send our lovly Developer Advocate Kumar Anirudha some tokens! Let's go!

Open the next example `05_transaction.rs` and change the address in line 31 - in your case, we use `rms1qran2dq9pvmp7shxpgj9c5jn9ygxwc3zpcge3rl3rkac2lyp98xuyylf6s6`.

Now we can run the example with just this command:

```bash=
cargo run --example 05_transaction
```

This could take some time - and you should see something like this, after the transaction:

```bash=
Transaction: 0x9d0cbb183bd38bb3e4d00c714da5f62015af4d273c48b971371cb3669f873b90 Block sent: http://localhost:14265/api/v2/blocks/0x1e4ba0c2c1316d8fb3e199040bff3c643ab160c6dcad8afe67385475fd881b0e
```

This was everything! You can replace the `http://localhost:14265` part with the explorer and discover the transaction more `https://explorer.alphanet.iotaledger.net/alphanet/block`
For this example, here is the transaction made by the turorial :[https://explorer.alphanet.iotaledger.net/alphanet/block/0x1e4ba0c2c1316d8fb3e199040bff3c643ab160c6dcad8afe67385475fd881b0e](https://explorer.alphanet.iotaledger.net/alphanet/block/0x1e4ba0c2c1316d8fb3e199040bff3c643ab160c6dcad8afe67385475fd881b0e)


## What's next?

You now can create an account, generate your address and transfering Tokens. Now you can go further and create some Native Tokens, Non-fungible tokens (NFTs) and develop your own application with Rust! Have fun and good luck!

