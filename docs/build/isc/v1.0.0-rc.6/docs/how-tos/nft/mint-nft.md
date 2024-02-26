---
description: How to mint L1 NFT
image: /img/logo/WASP_logo_dark.png
tags:
  - NFT
  - EVM
  - how-to
---
import ExampleCodeIntro from '../../_partials/how-tos/token/_example_code_intro.md';

# Mint an NFT
## About NFTs

The Stardust update allows you to create your own NFT. There ias also the [IRC27](/tips/tips/TIP-0027) for NFTs. This guide will show you how to create an IRC27 L1 NFT using a L2 smart contract.

## Example Code

<ExampleCodeIntro/>

2. Get the senders AgentID:

```solidity
ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();
```

3. Create a `IRC27Metadata` struct intitialised with all the needed data:

```solidity
IRC27NFTMetadata memory metadata = IRC27NFTMetadata({
    standard: "IRC27",
    version: "v1.0",
    mimeType: _mimeType,
    uri: _uri,
    name: _name
});
```

4. Create all the data for the core contract call. To do that, we create a new `ISCDict` with 2 parameters like specified in the reference docs for [`mintNFT`](../../reference/core-contracts/accounts.md#mintnfti-immutabledata-a-agentid-c-collectionid-w-withdrawonmint)
`I` is the immutable metadata we fill with the IRC27 metadata and
`a` is the AgendID of the owner of the NFT

```solidity
ISCDict memory params = ISCDict(new ISCDictItem[](2));
params.items[0] = ISCDictItem("I", bytes(IRC27NFTMetadataToString(metadata)));
params.items[1] = ISCDictItem("a", agentID.data);
```

:::info IRC27NFTMetadataToString

The full example below contains the `IRC27NFTMetadataToString` which just converts the IRC27Metadata struct into a string.

:::

5. Call the magic contract `call` function with all the parameters. We need to specify the core contract we want to call, which in our case is [`account`](../../reference/core-contracts/accounts.md) and the function for [minting an NFT](../../reference/core-contracts/accounts.md#mintnfti-immutabledata-a-agentid-c-collectionid-w-withdrawonmint)

```solidity
ISCDict memory ret = ISC.sandbox.call(
    ISC.util.hn("accounts"),
    ISC.util.hn("mintNFT"),
    params,
    allowance
);
```

6. The call return value will contain a mintID which we can use in for example another contract function to get the actual L1 NFT ID once it got created with the [`accounts.NFTIDbyMintID`](../../reference/core-contracts/accounts.md#nftidbymintidd-mintid) function

```solidity
function getNFTIDFromMintID(bytes memory mintID) public view returns (bytes memory) {
    ISCDict memory params = ISCDict(new ISCDictItem[](1));
    params.items[0] = ISCDictItem("D", mintID);

    ISCDict memory ret = ISC.sandbox.callView(
        ISC.util.hn("accounts"),
        ISC.util.hn("NFTIDbyMintID"),
        params
    );
    return ret.items[0].value;
} 
```

### Full Example Code 

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@iota/iscmagic/ISC.sol";

contract NFTContract {
    event MintedNFT(bytes mintID);

    function mintNFT(string memory _name, string memory _mimeType, string memory _uri, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;

        ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();

        IRC27NFTMetadata memory metadata = IRC27NFTMetadata({
            standard: "IRC27",
            version: "v1.0",
            mimeType: _mimeType,
            uri: _uri,
            name: _name
        });

        ISCDict memory params = ISCDict(new ISCDictItem[](2));
        params.items[0] = ISCDictItem("I", bytes(IRC27NFTMetadataToString(metadata)));
        params.items[1] = ISCDictItem("a", agentID.data);

        ISCDict memory ret = ISC.sandbox.call(
            ISC.util.hn("accounts"),
            ISC.util.hn("mintNFT"),
            params,
            allowance
        );
        emit MintedNFT(ret.items[0].value);
    }

    function getNFTIDFromMintID(bytes memory mintID) public view returns (bytes memory) {
        ISCDict memory params = ISCDict(new ISCDictItem[](1));
        params.items[0] = ISCDictItem("D", mintID);

        ISCDict memory ret = ISC.sandbox.callView(
            ISC.util.hn("accounts"),
            ISC.util.hn("NFTIDbyMintID"),
            params
        );
        return ret.items[0].value;
    } 

    function IRC27NFTMetadataToString(IRC27NFTMetadata memory metadata)
        public
        pure
        returns (string memory)
    {
        return string.concat(
            '{"standard": "',
            metadata.standard,
            '", "version": "',
            metadata.version,
            '", "type": "',
            metadata.mimeType,
            '", "uri": "',
            metadata.uri,
            '", "name": "',
            metadata.name,
            '"}');
    }
}
```
