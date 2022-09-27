# Send Shimmer tokens with wallet.rs

## Introduction

This tutorial shows how to get Shimmer testnet tokens and send them to another address.

### What you will learn

- Create a Stronghold account
- Generate a Shimmer address
- Get some Shimmer testnet tokens
- Fetch your balance
- Send tokens to another address

## Setup your environment

[Install Rust](https://doc.rust-lang.org/cargo/getting-started/installation.html) and update to the latest stable version by running `rustup update stable`.

The next step is to clone the `wallet.rs` repository and change to the `develop` branch.

```bash
git clone https://github.com/iotaledger/wallet.rs
cd wallet.rs
git checkout develop
```

Open the repository in your favorite code editor and navigate to the first example in the `examples` directory called `01_create_wallet.rs`.

We will go through the code line by line later, so don't worry if you don't understand it all yet. First we will configure the environment variables the example needs. It will read them from a `.env` file, for which there is an example available in the root of the repository.

In the root of the repository, copy the `.env.example` to a new `.env` file.

```bash
cp .env.example .env
```

If you want, you can change the [BIP39 mnemonic](https://en.bitcoin.it/wiki/BIP_0039) and choose a different password, but be sure to set the node URLs to a Shimmer testnet node (we use the nodes provided by IF in this tutorial). For example:

```
NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC="curve live black weird verb salon box increase hidden bread edit yard match mercy unable depart dismiss wife stock strong estate isolate such gasp"
STRONGHOLD_PASSWORD="some_hopefully_secure_password"
NODE_URL="https://api.testnet.shimmer.network"
FAUCET_URL="https://faucet.testnet.shimmer.network/api/enqueue"
```

## Create an account

Now that we have all details, let's go through the example code.

After including the needed dependencies, we have have the main function that loads the environment variables from the `.env` file we created earlier. It uses the information to set up [Stronghold](/stronghold.rs/welcome) to store our seed safely.

```rust
    // This example uses dotenv, which is not safe for use in production
    dotenv().ok();

    // Setup Stronghold secret_manager
    let mut secret_manager = StrongholdSecretManager::builder()
        .password(&env::var("STRONGHOLD_PASSWORD").unwrap())
        .try_build(PathBuf::from("wallet.stronghold"))?;

    // Only required the first time, can also be generated with `manager.generate_mnemonic()?`
    let mnemonic = env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC").unwrap();

    // The mnemonic only needs to be stored the first time
    secret_manager.store_mnemonic(mnemonic).await?;
```

It then uses the Stronghold manager and client options to create an account manager which we can use to interact with the Shimmer token accounts in our wallet.

```rust
    // Create the account manager with the secret_manager and client options
    let client_options = ClientOptions::new()
        .with_node(&env::var("NODE_URL").unwrap())?
        .with_node_sync_disabled();

    let manager = AccountManager::builder()
        .with_secret_manager(SecretManager::Stronghold(secret_manager))
        .with_client_options(client_options)
        .with_coin_type(SHIMMER_COIN_TYPE)
        .finish()
        .await?;
```

With the account manager set up, we are ready to create an account to receive some tokens. The account is created with alias `Alice`, so we can easily retrieve it at a later time.

```rust
    // Create a new account
    let _account = manager
        .create_account()
        .with_alias("Alice".to_string())
        .finish()
        .await?;
```

Now that we understand the code, let's run it and create our account.

```
cargo run --example 01_create_wallet
```

If everything worked correctly, you will see the message `Generated a new account` and you will find a Stronghold file and a database directory have been created to store the current state of your wallet.

## Generate an address

In this step, we will generate a new address to receive some testnet tokens. For this we will use the second example called `02_generate_address.rs`.

Here again we read the environment variables from the `.env` file and then we recreate the account manager which will use the Stronghold file and database that were created in the previous step.

```rust
    // This example uses dotenv, which is not safe for use in production
    dotenv().ok();

    // Create the account manager
    let manager = AccountManager::builder().finish().await?;
```

Then we will get the account using the alias we set earlier and provide the Stronghold password to unlock it.

```rust
    // Get the account we generated with `01_create_wallet`
    let account = manager.get_account("Alice").await?;

    // Set the stronghold password
    manager
        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())
        .await?;
```

Now we are ready to generate a new address, which will be derived from the mnemonic that we set earlier. For our convenience, we will print the address in [Bech32 format](https://en.bitcoin.it/wiki/Bech32) so we can copy it and use it to send and receive tokens and find the address in the [testnet explorer](https://explorer.testnet.shimmer.network/testnet).

```rust
    let address = account.generate_addresses(1, None).await?;
    println!("Generated address: {}", address[0].address().to_bech32());
```

Let's run it and get our address.

```bash
cargo run --example 02_generate_address
```

You can see all testnet addresses begin with `rms`, which is the reverse of what real Shimmer addresses start with. This is how you can tell testnet and real addresses apart.

## Get some tokens

To get tokens, you can either use the [faucet webpage](https://faucet.testnet.shimmer.network) or use the third example called `03_get_funds.rs` by running `cargo run --example 03_get_funds`. Either way you will receive tokens on the address we just generated.

## Check the balance

Now you should have some tokens. To validate that, we can use the library to inspect our account, like in the fourth example called `04_get_balance.rs`. Same as previously it will recreate the manager and open the account.

```rust
    // Create the account manager
    let manager = AccountManager::builder().finish().await?;

    // Get the account we generated with `01_create_wallet`
    let account = manager.get_account("Alice").await?;
```

Now to find your balance, first your account needs to be synced so your local state is synchronized with the state of your account in the network.

```rust
    // Sync and get the balance
    let _account_balance = account.sync(None).await?;
    // If already synced, just get the balance
    let account_balance = account.balance().await?;
```

Let's run the code and see if we did receive the tokens.

```bash=
cargo run --example 04_get_balance
```

This should show a positive balance. If no tokens appear, try to request tokens from the faucet again. If that still doesn't work, please come over to [our Discord](https://discord.iota.org/) and we'll sort it out.

## Send tokens

Now that we have some tokens, we can send them around. Open the fifth example called `05_transaction.rs`. If you want you can use another testnet address or ask someone in [our Discord](https://discord.iota.org/) to send you their testnet address and change line 31 to that address.

This will again set up a manager, open our account and unlock it using our password.

```rust
    // This example uses dotenv, which is not safe for use in production
    dotenv().ok();

    // Create the account manager
    let manager = AccountManager::builder().finish().await?;

    // Get the account we generated with `01_create_wallet`
    let account = manager.get_account("Alice").await?;

    // Set the stronghold password
    manager
        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())
        .await?;
```

Next we will tell the account manager the amount of tokens we want to send to what address by defining an output. The function to send tokens accepts a list of outputs, so in this case we will provide a list with one entry.

```rust
    // Send a transaction with 1 Mi
    let outputs = vec![AddressWithAmount {
        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),
        amount: 1_000_000,
    }];
    let transaction = account.send_amount(outputs, None).await?;
```

Let's send the transaction.

```bash
cargo run --example 05_transaction
```

This could take some time. The manager will automatically go through your addresses to find enough tokens to match the amount you want to send. Then it will sign the resulting transaction and send it to the node. It will warn you when you don't have enough balance, but otherwise it will show you the transaction ID, which you can use to find your transaction in the [testnet explorer](https://explorer.testnet.shimmer.network/testnet).

Congratulations, you are now able to manage your tokens programmatically!

## What's next?

You now can create an account, generate addresses and transfer tokens. Check out the [documentation](/wallet.rs/welcome) to see what more you can do. Create some native tokens, non-fungible tokens (NFTs) and develop your own application! Have fun and good luck!
