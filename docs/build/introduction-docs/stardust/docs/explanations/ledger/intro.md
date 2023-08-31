# Stardust Ledger

The ledger is a distributed database that records ownership of funds in the network. Users modify the ledger by
posting transactions to the network that move these funds between user accounts.

IOTA uses the Unspent Transaction Output Model (UTXO) to model ledger entries. A transaction consumes ledger entries
(previously created transaction outputs) and creates new ones. When a UTXO is consumed, it is marked as spent and is
removed from the database, while newly created UTXOs are added. All currently unspent UTXOs comprise the most recent
ledger state.

A UTXO is allowed to be spent if its owner presents a valid digital signature corresponding to the owner of the UTXO
that is generally called the owner address. Stardust extends this concept by letting users define additional
spending constraints on UTXOs, for example that an output can only be spent after a certain time.

In the following, we will demonstrate with example some common types of transactions and in the meantime we will
explore the different kind of constraints and outputs that one might create in the ledger.
