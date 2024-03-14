---
sidebar_label: wallet
title: iota_sdk.wallet.wallet
---

## WalletOptions Objects

```python
@json

@dataclass
class WalletOptions()
```

Options for the Wallet builder.

## Wallet Objects

```python
class Wallet()
```

An IOTA Wallet.

**Attributes**:

- `handle` - The wallet handle.

### \_\_init\_\_

```python
def __init__(options: WalletOptions)
```

Initialize `self`.

### get\_handle

```python
def get_handle()
```

Return the wallet handle.

### backup

```python
def backup(destination: str, password: str)
```

Backup storage.

### change\_stronghold\_password

```python
def change_stronghold_password(password: str)
```

Change stronghold password.

### clear\_stronghold\_password

```python
def clear_stronghold_password()
```

Clear stronghold password.

### is\_stronghold\_password\_available

```python
def is_stronghold_password_available() -> bool
```

Return whether a Stronghold password is available.

### destroy

```python
def destroy()
```

Destroys the wallet instance.

### emit\_test\_event

```python
def emit_test_event(event) -> bool
```

Helper function to test events.

### get\_client

```python
def get_client()
```

Get the client associated with the wallet.

### get\_secret\_manager

```python
def get_secret_manager()
```

Get the secret manager associated with the wallet.

### listen

```python
def listen(handler, events: Optional[List[int]] = None)
```

Listen to wallet events, empty array or None will listen to all events.
The default value for events is None.

### clear\_listeners

```python
def clear_listeners(events: Optional[List[int]] = None)
```

Remove wallet event listeners, empty array or None will remove all listeners.
The default value for events is None.

### restore\_backup

```python
def restore_backup(source: str, password: str)
```

Restore a backup from a Stronghold file.
Replaces `client_options`, `coin_type`, `secret_manager` and wallet.
Returns an error if the wallet was already created. If Stronghold is used
as the secret_manager, the existing Stronghold file will be overwritten.
Be aware that if a mnemonic was stored, it will be lost.

### set\_client\_options

```python
def set_client_options(client_options)
```

Update the options of the wallet client.

### set\_stronghold\_password

```python
def set_stronghold_password(password: str)
```

Set stronghold password.

### set\_stronghold\_password\_clear\_interval

```python
def set_stronghold_password_clear_interval(interval_in_milliseconds: int)
```

Set stronghold password clear interval.

### start\_background\_sync

```python
def start_background_sync(options: Optional[SyncOptions] = None,
                          interval_in_milliseconds: Optional[int] = None)
```

Start background syncing.

### stop\_background\_sync

```python
def stop_background_sync()
```

Stop background syncing.

### store\_mnemonic

```python
def store_mnemonic(mnemonic: str)
```

Store mnemonic.

### update\_node\_auth

```python
def update_node_auth(url: str, auth=None)
```

Update the authentication for the provided node.

### accounts

```python
def accounts() -> List[OutputData]
```

Returns the accounts of the wallet.

### burn

```python
def burn(
        burn: Burn,
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

A generic function that can be used to burn native tokens, nfts, foundries and aliases.

### prepare\_burn

```python
def prepare_burn(
        burn: Burn,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

A generic `prepare_burn()` function that can be used to prepare the burn of native tokens, nfts, foundries and accounts.

### prepare\_burn\_native\_token

```python
def prepare_burn_native_token(
        token_id: HexStr,
        burn_amount: int,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Burn native tokens. This doesn&#x27;t require the foundry output which minted them, but will not increase
the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it&#x27;s
recommended to use melting, if the foundry output is available.

### prepare\_burn\_nft

```python
def prepare_burn_nft(
        nft_id: HexStr,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Burn an nft output.

### claim\_outputs

```python
def claim_outputs(
        output_ids_to_claim: List[OutputId]) -> TransactionWithMetadata
```

Claim outputs.

### prepare\_claim\_outputs

```python
def prepare_claim_outputs(
        output_ids_to_claim: List[OutputId]) -> PreparedTransaction
```

Claim outputs.

### consolidate\_outputs

```python
def consolidate_outputs(
        params: ConsolidationParams) -> TransactionWithMetadata
```

Consolidate outputs.

### prepare\_consolidate\_outputs

```python
def prepare_consolidate_outputs(
        params: ConsolidationParams) -> PreparedTransaction
```

Consolidate outputs.

### create\_account\_output

```python
def create_account_output(
        params: Optional[CreateAccountOutputParams] = None,
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Create an account output.

### prepare\_create\_account\_output

```python
def prepare_create_account_output(
        params: Optional[CreateAccountOutputParams] = None,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Create an account output.

### melt\_native\_token

```python
def melt_native_token(
        token_id: HexStr,
        melt_amount: int,
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Melt native tokens. This happens with the foundry output which minted them, by increasing it&#x27;s
`melted_tokens` field.

### prepare\_melt\_native\_token

```python
def prepare_melt_native_token(
        token_id: HexStr,
        melt_amount: int,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Melt native tokens. This happens with the foundry output which minted them, by increasing it&#x27;s
`melted_tokens` field.

### prepare\_destroy\_account

```python
def prepare_destroy_account(
        account_id: HexStr,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Destroy an account output.

### prepare\_destroy\_foundry

```python
def prepare_destroy_foundry(
        foundry_id: HexStr,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Destroy a foundry output with a circulating supply of 0.

### get\_balance

```python
def get_balance() -> Balance
```

Get wallet balance information.

### get\_output

```python
def get_output(output_id: OutputId) -> OutputData
```

Get output.

### get\_foundry\_output

```python
def get_foundry_output(token_id: HexStr)
```

Get a `FoundryOutput` by native token ID. It will try to get the foundry from the wallet, if it isn&#x27;t in the wallet it will try to get it from the node.

### claimable\_outputs

```python
def claimable_outputs(outputs_to_claim: List[OutputId])
```

Get outputs with additional unlock conditions.

### get\_transaction

```python
def get_transaction(transaction_id: TransactionId) -> TransactionWithMetadata
```

Get transaction.

### address

```python
def address() -> str
```

Get the address of the wallet.

### outputs

```python
def outputs(
        filter_options: Optional[FilterOptions] = None) -> List[OutputData]
```

Returns all outputs of the wallet.

### pending\_transactions

```python
def pending_transactions()
```

Returns all pending transactions of the wallet.

### implicit\_account\_creation\_address

```python
def implicit_account_creation_address() -> str
```

Returns the implicit account creation address of the wallet if it is Ed25519 based.

### implicit\_account\_transition

```python
def implicit_account_transition(
        output_id: OutputId) -> TransactionWithMetadata
```

Transitions an implicit account to an account.

### prepare\_implicit\_account\_transition

```python
def prepare_implicit_account_transition(
        output_id: OutputId) -> PreparedTransaction
```

Prepares to transition an implicit account to an account.

### implicit\_accounts

```python
def implicit_accounts() -> List[OutputData]
```

Returns the implicit accounts of the wallet.

### incoming\_transactions

```python
def incoming_transactions() -> List[TransactionWithMetadata]
```

Returns all incoming transactions of the wallet.

### transactions

```python
def transactions() -> List[TransactionWithMetadata]
```

Returns all transaction of the wallet.

### unspent\_outputs

```python
def unspent_outputs(
        filter_options: Optional[FilterOptions] = None) -> List[OutputData]
```

Returns all unspent outputs of the wallet.

### mint\_native\_token

```python
def mint_native_token(
        token_id: HexStr,
        mint_amount: int,
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Mint additional native tokens.

### prepare\_mint\_native\_token

```python
def prepare_mint_native_token(
        token_id: HexStr,
        mint_amount: int,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Mint additional native tokens.

### create\_native\_token

```python
def create_native_token(
    params: CreateNativeTokenParams,
    options: Optional[TransactionOptions] = None
) -> CreateNativeTokenTransaction
```

Create native token.

### prepare\_create\_native\_token

```python
def prepare_create_native_token(
    params: CreateNativeTokenParams,
    options: Optional[TransactionOptions] = None
) -> PreparedCreateTokenTransaction
```

Create native token.

### mint\_nfts

```python
def mint_nfts(
        params: List[MintNftParams],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Mint NFTs.

### prepare\_mint\_nfts

```python
def prepare_mint_nfts(
        params: List[MintNftParams],
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Mint NFTs.

### prepare\_output

```python
def prepare_output(
    params: OutputParams,
    transaction_options: Optional[TransactionOptions] = None
) -> Union[BasicOutput, NftOutput]
```

Prepare an output for sending.
If the amount is below the minimum required storage deposit, by default the remaining amount will automatically
be added with a StorageDepositReturn UnlockCondition, when setting the ReturnStrategy to `gift`, the full
minimum required storage deposit will be sent to the recipient.
When the assets contain an nft_id, the data from the existing nft output will be used, just with the address
unlock conditions replaced

### prepare\_send

```python
def prepare_send(
        params: List[SendParams],
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Prepare to send base coins.

### create\_delegation

```python
def create_delegation(
    params: CreateDelegationParams,
    options: Optional[TransactionOptions] = None
) -> CreateDelegationTransaction
```

Create a delegation.

### prepare\_create\_delegation

```python
def prepare_create_delegation(
    params: CreateDelegationParams,
    options: Optional[TransactionOptions] = None
) -> PreparedCreateDelegationTransaction
```

Prepare to create a delegation.

### delay\_delegation\_claiming

```python
def delay_delegation_claiming(delegation_id: HexStr,
                              reclaim_excess: bool) -> TransactionWithMetadata
```

Delay a delegation&#x27;s claiming.

### prepare\_delay\_delegation\_claiming

```python
def prepare_delay_delegation_claiming(
        delegation_id: HexStr, reclaim_excess: bool) -> PreparedTransaction
```

Prepare to delay a delegation&#x27;s claiming.

### begin\_staking

```python
def begin_staking(
        params: BeginStakingParams,
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Begin staking.

### prepare\_begin\_staking

```python
def prepare_begin_staking(
        params: BeginStakingParams,
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Prepare to begin staking.

### extend\_staking

```python
def extend_staking(account_id: HexStr,
                   additional_epochs: int) -> TransactionWithMetadata
```

Extend staking by additional epochs.

### prepare\_extend\_staking

```python
def prepare_extend_staking(account_id: HexStr,
                           additional_epochs: int) -> PreparedTransaction
```

Prepare to extend staking by additional epochs.

### end\_staking

```python
def end_staking(account_id: HexStr) -> TransactionWithMetadata
```

End staking and claim rewards.

### prepare\_end\_staking

```python
def prepare_end_staking(account_id: HexStr) -> PreparedTransaction
```

Prepare to end staking and claim rewards.

### announce\_candidacy

```python
def announce_candidacy(account_id: HexStr) -> BlockId
```

Announce a staking account&#x27;s candidacy for the staking period.

### send\_transaction

```python
def send_transaction(
        outputs: List[Output],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Send a transaction.

### prepare\_transaction

```python
def prepare_transaction(
        outputs: List[Output],
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Prepare transaction.

### wait\_for\_transaction\_acceptance

```python
def wait_for_transaction_acceptance(transaction_id: TransactionId,
                                    interval=None,
                                    max_attempts=None) -> BlockId
```

Checks the transaction state for a provided transaction id until it&#x27;s accepted. Interval in milliseconds. Returns the block id that
contains this transaction.

### send

```python
def send(amount: int,
         address: str,
         options: Optional[TransactionOptions] = None
         ) -> TransactionWithMetadata
```

Send base coins.

### send\_with\_params

```python
def send_with_params(
        params: List[SendParams],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Send base coins to multiple addresses or with additional parameters.

### send\_native\_tokens

```python
def send_native_tokens(
        params: List[SendNativeTokenParams],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Send native tokens.

### prepare\_send\_native\_tokens

```python
def prepare_send_native_tokens(
        params: List[SendNativeTokenParams],
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Send native tokens.

### send\_nft

```python
def send_nft(
        params: List[SendNftParams],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Send nft.

### prepare\_send\_nft

```python
def prepare_send_nft(
        params: List[SendNftParams],
        options: Optional[TransactionOptions] = None) -> PreparedTransaction
```

Send nft.

### send\_outputs

```python
def send_outputs(
        outputs: List[Output],
        options: Optional[TransactionOptions] = None
) -> TransactionWithMetadata
```

Send outputs in a transaction.

### set\_alias

```python
def set_alias(alias: str)
```

Set alias.

### set\_default\_sync\_options

```python
def set_default_sync_options(options: SyncOptions)
```

Set the fallback SyncOptions for wallet syncing.
If storage is enabled, will persist during restarts.

### sign\_transaction

```python
def sign_transaction(
    prepared_transaction_data: PreparedTransactionData
) -> SignedTransactionData
```

Sign a transaction.

### sign\_and\_submit\_transaction

```python
def sign_and_submit_transaction(
    prepared_transaction_data: PreparedTransactionData
) -> TransactionWithMetadata
```

Validate the transaction, sign it, submit it to a node and store it in the wallet.

### submit\_and\_store\_transaction

```python
def submit_and_store_transaction(
        signed_transaction_data: SignedTransactionData
) -> TransactionWithMetadata
```

Submit and store transaction.

### sync

```python
def sync(options: Optional[SyncOptions] = None) -> Balance
```

Sync the wallet by fetching new information from the nodes.
Will also reissue pending transactions and consolidate outputs if necessary.
A custom default can be set using set_default_sync_options.

