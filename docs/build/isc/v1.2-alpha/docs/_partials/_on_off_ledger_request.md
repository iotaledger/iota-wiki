### On-Ledger Requests

An on-ledger request is a Layer 1 transaction that validator nodes retrieve from the Tangle. The Tangle acts as an
arbiter between users and chains and guarantees that the transaction is valid, making it the only way to transfer assets
to a chain or between chains.

### Off-Ledger Requests

If all necessary assets are in the chain already, it is possible to send a request directly to that chain's validator
nodes.
This way, you don’t have to wait for the Tangle to process the message, significantly reducing the overall confirmation
time.
Due to the shorter delay, off-ledger requests are preferred over on-ledger requests unless you need to deposit assets to the chain.