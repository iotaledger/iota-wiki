# Step by step examples

In these step by step examples, we present how to create a wallet and do some of the most common use cases.

It is advised to do them all at least once in the given order to understand the workflow.

## Setup

Initialize the wallet with a given node and a randomly generated mnemonic.

```sh title=Input
./wallet init --node <NODE_API_URL>
```

```sh title=Output
> INFO  Mnemonic stored successfully
```

Create a main account.

```sh title=Input
./wallet new main
```

```sh title=Output
> INFO  Created account "main"
```

Exit from the "main" account.

```sh title=Input
> Account "main": exit
```

Note: exiting from an account is omitted from now on for the rest of this guide.

Create a savings account.

```sh title=Input
./wallet new savings
```

```sh title=Output
> INFO  Created account "savings"
```

## Tokens

Enter the "main" account and get some funds from the _faucet_.

```sh title=Input
./wallet main

> Account "main": faucet <FAUCET_ENQUEUE_API_URL>
> Account "main": sync
```

```sh title=Output
> INFO  Synced: Balance ...
```

### Send an amount

Enter the "savings" account and get an address.

```sh title=Input
./wallet savings

> Account "savings": addresses
```

```sh title=Output
> INFO  Address 0: <rms123abc...>
```

Enter the "main" account and send some amount to the "savings" address.

```sh title=Input
./wallet main

> Account "main": send <rms123abc...> 1000000
```

```sh title=Output
> INFO  Transaction sent:
> transaction id: 0x...
> Some(BlockId(0x...))
```

Enter the "savings" account and check the balance.

```sh title=Input
./wallet savings

> Account "savings": balance
```

```sh title=Output
> INFO  Balance ...
```

## Native tokens

### Mint

Enter the "main" account and mint native tokens with foundry metadata.

```sh title=Input
./wallet main

> Account "main": mint-native-token 1000 1000 --foundry-metadata-hex <0xabcdef...>
```

```sh title=Output
> INFO  Native token minting transaction sent:
> transaction id: 0x...
> Some(BlockId(0x...))
```

### Send

Enter the "savings" account and generate a new address.

```sh title=Input
./wallet savings

> Account "savings": new-address
```

```sh title=Output
> INFO  Address 2: <rms456def...>
```

Enter the "main" account and synchronize the account balances.

```sh title=Input
./wallet main

> Account "main": sync
```

```sh title=Output
> INFO  Synced: Balance ...TokenId([TOKEN_ID])...
```

Send native tokens from the "main" account to the new "savings" address.

```sh title=Input
> Account "main": send-native-token <rms456def...> <TOKEN_ID> 100
```

```sh title=Output
> INFO  Native token transaction sent:
> transaction id: 0x...
> Some(BlockId(0x...))
```

## NFTs

### Mint

Enter the "main" account and mint an NFT.

```sh title=Input
./wallet main

> Account "main": mint-nft
```

```sh title=Output
> INFO  NFT minting transaction sent:
> transaction id: 0x...
> Some(BlockId(0x...))
```

### Send

Enter the "savings" account and generate a new address.

```sh title=Input
./wallet savings

> Account "savings": new-address
```

```sh title=Output
> INFO  Address 3: <rms789ghi...>
```

Enter the "main" account and synchronize the account balances.

```sh title=Input
./wallet main

> Account "main": sync
```

```sh title=Output
> INFO  Synced: Balance ...NftId([NFT_ID])...
```

Send the NFT to the new "savings" address.

```sh title=Input
> Account "main": send-nft <rms789ghi...> <NFT_ID>
```

```sh title=Output
> INFO  Nft transaction sent:
> transaction id: 0x...
> Some(BlockId(0x...))
```

## Transactions

Enter the "main" account and list all transactions.

```sh title=Input
./wallet main

> Account "main": transactions
```

```sh title=Output
> INFO  Transaction...
```
