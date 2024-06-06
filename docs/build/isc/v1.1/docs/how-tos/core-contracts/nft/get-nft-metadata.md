---
description: How to get NFT metadata on L1
image: /img/logo/WASP_logo_dark.png
tags:
  - NFT
  - EVM
  - how-to
---
import GetNftMetadata from '../../../_partials/how-tos/token/_get-nft-metadata.md';
import ERC721Admonition from '../../../_admonitions/_ERC721.md';

# Get NFT Metadata

<ERC721Admonition />

This guide explains how to use the [`getIRC27NFTData`](../../../reference/magic-contract/ISCSandbox.md#getirc27nftdata) function within a smart contract to fetch information about a specific IRC27 NFT on the IOTA Network.

<GetNftMetadata />

## Understanding the `getIRC27NFTData` Function

The [`getIRC27NFTData`](../../../reference/magic-contract/ISCSandbox.md#getirc27nftdata) function retrieves metadata for an IRC27 NFT based on its identifier. IRC27 is a series of standards to support interoperable and universal NFT systems throughout the IOTA ecosystem.

## How To Use `getIRC27NFTData`

### 1. Fetch IRC27 NFT Metadata

Create a function called `fetchNFTData` in your contract that calls `getIRC27NFTData` and processes its return value.

```solidity
function fetchNFTData(bytes memory nftID) public view returns (IRC27NFT memory irc27NftData) {
    bytes32 id = bytes32(nftID);
    NFTID nftIDTyped = NFTID.wrap(id);
    irc27NftData = ISC.sandbox.getIRC27NFTData(nftIDTyped);
    return irc27NftData;
}
```
### 2. Encode the URI Data in `IRC27NFTMetadata`

The `IRC27NFTMetadata` struct holds detailed metadata, including the URI and other fields like name and description. Encoding this data correctly is crucial for ensuring the integrity and accessibility of the NFT's metadata.

```solidity
struct IRC27NFTMetadata {string uri; string name;string description;}
```

### 3. Decode the URI Data in IRC27NFTMetadata

The `IRC27NFTMetadata` struct holds detailed metadata, including the URI and other fields like name and description. Decoding this data correctly is crucial for ensuring the integrity and accessibility of the NFT's metadata.

```solidity
function decodeNFTMetadataURI(string memory encodedURI) public pure returns (IRC27NFTMetadata memory) {
    // Ensure the encodedURI has the correct prefix
    require(bytes(encodedURI).length > 29, "Invalid encoded URI length");
    string memory base64JSON = substring(encodedURI, 29, bytes(encodedURI).length);
    
    // Decode the Base64-encoded JSON
    bytes memory decodedBytes = Base64.decode(base64JSON);
    string memory json = string(decodedBytes);
    
    // Extract fields from the JSON string
    string memory name = extractValueFromJSON(json, "name");
    string memory description = extractValueFromJSON(json, "description");
    string memory uri = extractValueFromJSON(json, "image");

    return IRC27NFTMetadata({
        standard: "IRC27",
        version: "1.0",
        mimeType: "application/json",
        uri: encodedURI,
        name: name,
        description: description
    });
}
```

### `substring` Function

The substring function extracts a substring from a given string based on specified start and end indices. This is useful for isolating the Base64-encoded JSON part of the URI.

```solidity

function substring(string memory str, uint startIndex, uint endIndex) internal pure returns (string memory) {
    bytes memory strBytes = bytes(str);
    bytes memory result = new bytes(endIndex - startIndex);
    for (uint i = startIndex; i < endIndex; i++) {
        result[i - startIndex] = strBytes[i];
    }
    return string(result);
}

```

### `extractValueFromJSON` Function

The `extractValueFromJSON` function extracts the value associated with a specific key from a JSON string. This function helps to retrieve individual fields like name, description, and image from the decoded JSON metadata.

```solidity

function extractValueFromJSON(string memory json, string memory key) internal pure returns (string memory) {
    bytes memory jsonBytes = bytes(json);
    bytes memory keyBytes = bytes(key);
    bytes memory result = new bytes(jsonBytes.length);
    uint256 resultIndex = 0;
    bool keyFound = false;

    for (uint256 i = 0; i < jsonBytes.length; i++) {
        if (jsonBytes[i] == keyBytes[0]) {
            uint256 j = 0;
            while (j < keyBytes.length && jsonBytes[i + j] == keyBytes[j]) {
                j++;
            }
            if (j == keyBytes.length && jsonBytes[i + j] == ':') {
                keyFound = true;
                i += j + 1;
            }
        }

        if (keyFound && jsonBytes[i] == '"') {
            i++;
            while (jsonBytes[i] != '"') {
                result[resultIndex++] = jsonBytes[i++];
            }
            break;
        }
    }

    return string(result);
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
    struct IRC27NFT {
        bytes id;
        string uri;
        string name;
        string description;
    }

    struct IRC27NFTMetadata {
        string standard;
        string version;
        string mimeType;
        string uri;
        string name;
        string description;
    }

    function fetchNFTData(bytes memory nftID) public view returns (IRC27NFT memory irc27NftData) {
        require(nftID.length == 32, "NFT ID must be 32 bytes");
        bytes32 id = bytes32(nftID);
        NFTID nftIDTyped = NFTID.wrap(id);
        irc27NftData = ISC.sandbox.getIRC27NFTData(nftIDTyped);
        return irc27NftData;
    }

    function decodeNFTMetadataURI(string memory encodedURI) public pure returns (IRC27NFTMetadata memory) {
        // Ensure the encodedURI has the correct prefix
        require(bytes(encodedURI).length > 29, "Invalid encoded URI length");
        string memory base64JSON = substring(encodedURI, 29, bytes(encodedURI).length);
        
        // Decode the Base64-encoded JSON
        bytes memory decodedBytes = Base64.decode(base64JSON);
        string memory json = string(decodedBytes);
        
        // Extract fields from the JSON string
        string memory name = extractValueFromJSON(json, "name");
        string memory description = extractValueFromJSON(json, "description");
        string memory uri = extractValueFromJSON(json, "image");

        return IRC27NFTMetadata({
            standard: "IRC27",
            version: "1.0",
            mimeType: "application/json",
            uri: encodedURI,
            name: name,
            description: description
        });
    }

    function substring(string memory str, uint startIndex, uint endIndex) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex - startIndex);
        for (uint i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = strBytes[i];
        }
        return string(result);
    }

    function extractValueFromJSON(string memory json, string memory key) internal pure returns (string memory) {
        bytes memory jsonBytes = bytes(json);
        bytes memory keyBytes = bytes(key);
        bytes memory result = new bytes(jsonBytes.length);
        uint256 resultIndex = 0;
        bool keyFound = false;

        for (uint256 i = 0; i < jsonBytes.length; i++) {
            if (jsonBytes[i] == keyBytes[0]) {
                uint256 j = 0;
                while (j < keyBytes.length && jsonBytes[i + j] == keyBytes[j]) {
                    j++;
                }
                if (j == keyBytes.length && jsonBytes[i + j] == ':') {
                    keyFound = true;
                    i += j + 1;
                }
            }

            if (keyFound && jsonBytes[i] == '"') {
                i++;
                while (jsonBytes[i] != '"') {
                    result[resultIndex++] = jsonBytes[i++];
                }
                break;
            }
        }

        return string(result);
    }
}
```