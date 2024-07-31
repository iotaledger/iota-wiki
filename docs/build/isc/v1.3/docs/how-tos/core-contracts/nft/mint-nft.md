---
description: How to mint L1 NFT
image: /img/logo/WASP_logo_dark.png
tags:
  - NFT
  - EVM
  - how-to
---
import ExampleCodeIntro from '../../../_partials/how-tos/token/_example_code_intro.md';

# Mint an NFT
## About NFTs

The Stardust update allows you to create your own NFTs. You can also use [IRC27](/tips/tips/TIP-0027) for NFTs. This guide will show you how to create an IRC27 L1 NFT using a L2 smart contract.

## Example Code

<ExampleCodeIntro/>

2. Get the senders AgentID:

The `ISCAgentID` represents the identifier of the agent (user or contract) whose NFTs you want to retrieve. You can get the `AgentID` from the sender by calling `ISC.sandbox.getSenderAccount()`.

```solidity
ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();
```

3. Create an `IRC27Metadata` struct  with all the needed data:

:::tip 
You can refer to [Get NFT Metadata guide](/isc/how-tos/core-contracts/nft/get-nft-metadata/) to understand how to create an `IRC27Metadata` 
:::

The`IRC27Metadata` struct in Solidity is designed to hold the metadata for a Non-Fungible Token (NFT) according to the IRC27 standard. This struct includes various fields that describe the NFT, such as its standard, version, MIME type, URI, and name. Here's how to create and use this struct:

```solidity
IRC27NFTMetadata memory metadata = IRC27NFTMetadata({
    standard: "IRC27",
    version: "v1.0",
    mimeType: _mimeType,
    uri: _uri,
    name: _name
});
```


4. Create all the data for the core contract call. To do so, you should create a new `ISCDict` with 2 parameters like specified in the reference docs for [`mintNFT`](../../../reference/core-contracts/accounts.md#mintnfti-immutabledata-a-agentid-c-collectionid-w-withdrawonmint)
* `I` is the immutable metadata we fill with the IRC27 metadata and
* `a` is the AgendID of the owner of the NFT

```solidity
ISCDict memory params = ISCDict(new ISCDictItem[](2));
params.items[0] = ISCDictItem("I", bytes(IRC27NFTMetadataToString(metadata)));
params.items[1] = ISCDictItem("a", agentID.data);
```

:::info IRC27NFTMetadataToString

The full example below calls the `IRC27NFTMetadataToString` function, which simply converts the IRC27Metadata struct into a string.

:::

5. Call the magic contract `call` function with all the parameters. You should specify the core contract you want to call, which in this case is the [`account`](../../../reference/core-contracts/accounts.md) contract, and the function for [minting an NFT](../../../reference/core-contracts/accounts.md#mintnfti-immutabledata-a-agentid-c-collectionid-w-withdrawonmint)

```solidity
ISCDict memory ret = ISC.sandbox.call(
    ISC.util.hn("accounts"),
    ISC.util.hn("mintNFT"),
    params,
    allowance
);
```

6. The call return value will contain a `mintID` which we can use in, for example, another contract function to get the actual L1 NFT ID once it is created using the [`accounts.NFTIDbyMintID`](../../../reference/core-contracts/accounts.md#nftidbymintidd-mintid) function

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
    // Event emitted when a new NFT is minted
    event MintedNFT(bytes mintID);

    
     /// @notice Mints a new NFT with the provided metadata and storage deposit
     /// @param _name The name of the NFT
     /// @param _mimeType The MIME type of the NFT
     /// @param _uri The URI where the NFT data is stored
     /// @param _storageDeposit The amount of storage deposit required
    
    function mintNFT(string memory _name, string memory _mimeType, string memory _uri, uint64 _storageDeposit) public payable {
        require(msg.value == _storageDeposit*(10**12), "Please send exact funds to pay for storage deposit");

        // Create an ISCAssets object for the allowance with the base tokens
        ISCAssets memory allowance;
        allowance.baseTokens = _storageDeposit;

        // Retrieve the sender's account ID
        ISCAgentID memory agentID = ISC.sandbox.getSenderAccount();

        // Create the metadata for the NFT
        IRC27NFTMetadata memory metadata = IRC27NFTMetadata({
            standard: "IRC27",
            version: "v1.0",
            mimeType: _mimeType,
            uri: _uri,
            name: _name
        });

        // Prepare the parameters dictionary for the ISC call
        ISCDict memory params = ISCDict(new ISCDictItem[](2));
        params.items[0] = ISCDictItem("I", bytes(IRC27NFTMetadataToString(metadata)));
        params.items[1] = ISCDictItem("a", agentID.data);

        // Call the ISC sandbox to mint the NFT
        ISCDict memory ret = ISC.sandbox.call(
            ISC.util.hn("accounts"),
            ISC.util.hn("mintNFT"),
            params,
            allowance
        );

        // Emit the MintedNFT event with the returned mint ID
        emit MintedNFT(ret.items[0].value);
    }

    
     /// @notice Retrieves the NFT ID associated with a given mint ID
     /// @param mintID The mint ID of the NFT
     /// @return The NFT ID associated with the provided mint ID

    function getNFTIDFromMintID(bytes memory mintID) public view returns (bytes memory) {
        // Prepare the parameters dictionary for the ISC call
        ISCDict memory params = ISCDict(new ISCDictItem[](1));
        params.items[0] = ISCDictItem("D", mintID);

        // Call the ISC sandbox to get the NFT ID
        ISCDict memory ret = ISC.sandbox.callView(
            ISC.util.hn("accounts"),
            ISC.util.hn("NFTIDbyMintID"),
            params
        );

        // Return the NFT ID
        return ret.items[0].value;
    } 

    
     /// @notice Converts an IRC27NFTMetadata struct to a JSON string
     /// @param metadata The metadata to convert
     /// @return The JSON string representation of the metadata
    
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
