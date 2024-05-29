---
description: How to get NFT metadata on L1
image: /img/logo/WASP_logo_dark.png
tags:
  - NFT
  - EVM
  - how-to
---

# Get NFT Metadata

This guide explains how to utilize the `getIRC27NFTData` function within a smart contract to fetch information about a specific IRC27 NFT on the IOTA Network. The function resides in the ISCSandbox contract and returns details pertaining to the requested NFT.

1. Understanding the `getIRC27NFTData` Function

The `getIRC27NFTData` function retrieves metadata for an IRC27 NFT based on its identifier. IRC27 is a series of standards to support interoperable and universal NFT systems throughout the IOTA ecosystem.

## Function Signature:
```solidity
function getIRC27NFTData(bytes memory nftID) public view returns (IRC27NFT memory irc27NftData);
```
## Parameters:
`NFTID id`: This parameter represents the unique identifier of the IRC27 NFT you intend to retrieve information about.
## Return Value:
The function returns a data structure of type IRC27NFT. This structure incorporates two elements:
1. `nft`: This element provides details regarding the underlying on-chain NFT. It's of type `ISCNFT`.
2. `metadata`: This element offers information specific to the IRC27 standard. It's of type `IRC27NFTMetadata`.

## Here's a step-by-step breakdown of how to leverage getIRC27NFTData to acquire IRC27 NFT metadata:

2. Fetching IRC27 NFT Metadata:

Create a function called fetchNFTData in your contract that calls getIRC27NFTData and processes its return value.

```solidity
// Function to get NFT data
    function fetchNFTData(bytes memory nftID) public view returns (IRC27NFT memory irc27NftData) {
        bytes32 id = bytes32(nftID);
        NFTID nftIDTyped = NFTID.wrap(id);
        irc27NftData = ISC.sandbox.getIRC27NFTData(nftIDTyped);
        return irc27NftData;
    }
```
3. Encoding URI Data in IRC27NFTMetadata

The `IRC27NFTMetadata` struct holds detailed metadata, including the URI and other fields like name and description. Encoding this data correctly is crucial for ensuring the integrity and accessibility of the NFT's metadata.

```solidity
struct IRC27NFTMetadata {
    string uri;
    string name;
    string description;
}
```

4. Implementing URI Encoding

The OpenZeppelin Contracts library provides a `Base64` utility that simplifies encoding URI data. Here's how to implement URI encoding:

## Implementation:

```solidity
function encodeNFTMetadata(
    string memory _standard,
    string memory _version,
    string memory _mimeType,
    string memory _uri,
    string memory _name,
    string memory _description
) 
    public 
    pure 
    returns (IRC27NFTMetadata memory) 
{
    // Create JSON representation
    string memory json = string(abi.encodePacked(
        '{"name":"', _name,
        '","description":"', _description,
        '","image":"', _uri,
        '"}'
    ));

    // Base64 encode the JSON string
    string memory encodedURI = string(abi.encodePacked(
        "data:application/json;base64,", 
        Base64.encode(bytes(json))
    ));

    // Return the metadata struct
    return IRC27NFTMetadata({
        standard: _standard,
        version: _version,
        mimeType: _mimeType,
        uri: encodedURI,
        name: _name,
        description: _description
    });
}
```

## Full Example Contract
Combining all the above steps, here’s a complete example:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Base64.sol";
import "@iota/iscmagic/ISC.sol";
import "@iota/iscmagic/ISCTypes.sol";

contract NFTMetadata {

function fetchNFTData(bytes memory nftID) public view returns (IRC27NFT memory irc27NftData) {
        require(nftID.length == 32, "NFT ID must be 32 bytes");
        bytes32 id = bytes32(nftID);
        NFTID nftIDTyped = NFTID.wrap(id);
        irc27NftData = ISC.sandbox.getIRC27NFTData(nftIDTyped);
        return irc27NftData;
    }

function encodeNFTMetadata(
    string memory _standard,
    string memory _version,
    string memory _mimeType,
    string memory _uri,
    string memory _name,
    string memory _description
) 
    public 
    pure 
    returns (IRC27NFTMetadata memory) 
{
    // Create JSON representation
    string memory json = string(abi.encodePacked(
        '{"name":"', _name,
        '","description":"', _description,
        '","image":"', _uri,
        '"}'
    ));

    // Base64 encode the JSON string
    string memory encodedURI = string(abi.encodePacked(
        "data:application/json;base64,", 
        Base64.encode(bytes(json))
    ));

    // Return the metadata struct
    return IRC27NFTMetadata({
        standard: _standard,
        version: _version,
        mimeType: _mimeType,
        uri: encodedURI,
        name: _name
    });
}
}
```
## Example Usage

To mint a new NFT and fetch its metadata, you would use the above functions within a larger contract that handles NFT minting and management.

MINT AN NFT

Mint your first NFT following our Mint an NFT Guide