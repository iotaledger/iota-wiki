---
sidebar_label: account
title: iota_wallet.account
---

## Account Objects

```python
class Account()
```

### build_alias_output

```python
def build_alias_output(amount, native_tokens, alias_id, state_index,
                       state_metadata, foundry_counter, unlock_conditions,
                       features, immutable_features)
```

Build alias output.

### build_basic_output

```python
def build_basic_output(amount, native_tokens, unlock_conditions, features)
```

Build basic output.

### build_foundry_output

```python
def build_foundry_output(amount, native_tokens, serial_number, token_scheme,
                         unlock_conditions, features, immutable_features)
```

Build foundry output.

### build_nft_output

```python
def build_nft_output(amount, native_tokens, nft_id, unlock_conditions,
                     features, immutable_features)
```

BuildNftOutput.

### burn_native_token

```python
def burn_native_token(token_id, burn_amount, options=None)
```

Burn native tokens. This doesn&#x27;t require the foundry output which minted them, but will not increase
the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it&#x27;s
recommended to use melting, if the foundry output is available.

### burn_nft

```python
def burn_nft(nft_id, options=None)
```

Burn an nft output. Outputs controlled by it will be swept before if they don&#x27;t have a storage
deposit return, timelock or _expiration unlock_ condition. This should be preferred over burning, because after
burning, the foundry can never be destroyed anymore.

### consolidate_outputs

```python
def consolidate_outputs(force, output_consolidation_threshold)
```

Consolidate outputs.

### create_alias_output

```python
def create_alias_output(alias_output_options, options)
```

Create an alias output.

### destroy_alias

```python
def destroy_alias(alias_id, options=None)
```

Destroy an alias output. Outputs controlled by it will be swept before if they don&#x27;t have a
storage deposit return, timelock or expiration unlock condition. The amount and possible native tokens will be
sent to the governor address.

### destroy_foundry

```python
def destroy_foundry(foundry_id, options=None)
```

Destroy a foundry output with a circulating supply of 0.
Native tokens in the foundry (minted by other foundries) will be transacted to the controlling alias

### generate_addresses

```python
def generate_addresses(amount, options=None)
```

Generate new addresses.

### get_outputs_with_additional_unlock_conditions

```python
def get_outputs_with_additional_unlock_conditions(outputs_to_claim)
```

Get outputs with additional unlock conditions.

### get_output

```python
def get_output(output_id)
```

Get output.

### get_transaction

```python
def get_transaction(transaction_id)
```

Get transaction.

### addresses

```python
def addresses()
```

List addresses.

### addresses_with_unspent_outputs

```python
def addresses_with_unspent_outputs()
```

Returns only addresses of the account with unspent outputs.

### outputs

```python
def outputs(filter_options=None)
```

Returns all outputs of the account.

### unspent_outputs

```python
def unspent_outputs(filter_options=None)
```

Returns all unspent outputs of the account.

### incoming_transactions

```python
def incoming_transactions()
```

Returns all incoming transactions of the account.

### transactions

```python
def transactions()
```

Returns all transaction of the account.

### pending_transactions

```python
def pending_transactions()
```

Returns all pending transactions of the account.

### decrease_native_token_supply

```python
def decrease_native_token_supply(token_id, melt_amount, options=None)
```

Melt native tokens. This happens with the foundry output which minted them, by increasing it&#x27;s
`melted_tokens` field.

### increase_native_token_supply

```python
def increase_native_token_supply(token_id,
                                 mint_amount,
                                 increase_native_token_supply_options=None,
                                 options=None)
```

Mint more native token.

### mint_native_token

```python
def mint_native_token(native_token_options, options=None)
```

Mint native token.

### minimum_required_storage_deposit

```python
def minimum_required_storage_deposit(output)
```

Minimum required storage deposit.

### mint_nfts

```python
def mint_nfts(nfts_options, options=None)
```

Mint nfts.

### get_balance

```python
def get_balance()
```

Get account balance information.

### prepare_send_amount

```python
def prepare_send_amount(addresses_with_amount, options=None)
```

Prepare send amount.

### prepare_transaction

```python
def prepare_transaction(outputs, options=None)
```

Prepare transaction.

### retry_transaction_until_included

```python
def retry_transaction_until_included(transaction_id,
                                     interval=None,
                                     max_attempts=None)
```

Retries (promotes or reattaches) a transaction sent from the account for a provided transaction id until it&#x27;s
included (referenced by a milestone). Returns the included block id.

### sync

```python
def sync(options=None)
```

Sync the account by fetching new information from the nodes.
Will also retry pending transactions and consolidate outputs if necessary.

### send_amount

```python
def send_amount(addresses_with_amount, options=None)
```

Send amount.

### send_micro_transaction

```python
def send_micro_transaction(addresses_with_micro_amount, options=None)
```

Send micro transaction.

### send_native_tokens

```python
def send_native_tokens(addresses_native_tokens, options=None)
```

Send native tokens.

### send_nft

```python
def send_nft(addresses_nft_ids, options=None)
```

Send nft.

### set_alias

```python
def set_alias(alias)
```

Set alias.

### sign_transaction_essence

```python
def sign_transaction_essence(prepared_transaction_data)
```

Sign a transaction essence.

### submit_and_store_transaction

```python
def submit_and_store_transaction(signed_transaction_data)
```

Submit and store transaction.

### claim_outputs

```python
def claim_outputs(output_ids_to_claim)
```

Claim outputs.

### send_outputs

```python
@send_message_routine
def send_outputs(outputs, options=None)
```

Send outputs in a transaction.

### request_funds_from_faucet

```python
def request_funds_from_faucet(url=None, address=None)
```

Requests funds from the faucet
