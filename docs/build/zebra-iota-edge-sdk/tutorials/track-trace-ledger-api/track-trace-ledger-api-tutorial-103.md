# IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity

In this tutorial, you will learn how to use Decentralized Digital Identities (DIDs). You will be able to create a DID identity (recorded on the Tangle), and a self signed Verifiable Credential as a proof of DID control. This DID and its accompanying Verifiable Credential can be verified from the Tangle, and if _Verified_, the DID will be associated to your API Key. In addition, you will also learn how to present a Verifiable Credential with claims signed by another (possibly trusted) party and which will be automatically associated to your DID.

## Introduction

### Decentralized Identities

A [**Decentralized Identity**](https://www.w3.org/TR/did-core/) is a type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. In contrast to typical, federated identifiers, DIDs have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a DID, the design enables the controller of a DID to prove control over it without requiring permission from any other party.

A [**Verifiable Credential**](https://www.w3.org/TR/vc-data-model/) is a digital document intended to express credentials in a way that is cryptographically secure, respects privacy and machine verifiable.

A [**Verifiable presentation**](https://www.w3.org/TR/vc-data-model/#presentations) expresses data from one or more verifiable credentials, and is packaged in such a way that the authorship of the data is verifiable.

IOTA provides a [Digital Identity Framework](https://www.iota.org/solutions/digital-identity) that builds on the W3C's Recommendations for a digital identity framework. This framework includes three roles:

1. Holder - owners of digital identities. They have ultimate control over their data and choose how much and with whom they share their data with.
2. Issuer - trusted third parties or authorities that generate and issue credentials to holders, such as health records or identity documents.
3. Verifier - any third parties that need to verify the authenticity of a holder's data. A verifier might, for example, need to validate that the holder is who they say they are.

A Verifiable Credential also has [Verifiable Claims](https://www.w3.org/TR/vc-use-cases/#:~:text=The%20Verifiable%20Claims%20Working%20Group%20at%20the%20W3C%20is%20developing,more%20secure%20on%20the%20Web.&text=This%20document%20does%20NOT%20attempt,the%20support%20of%20Verifiable%20Claims.) that are assertions made by a subject, in this case the DID associated to our API Key will be the subject.

In this tutorial we will generate a self signed Verifiable Credential that we will then associate to an API Key thus ensuring the DID ownership of the consuming client and their respective transactions. We will further look into issuing Verifiable Presentations and asserting trusted claims to DIDs.

A [CLI Application](https://www.npmjs.com/package/@tangle-js/tangle-cli) for IOTA Chrysalis is required to allow you to generate a Decentralized Identity, a Verifiable Credential and a Verifiable Presentation for this tutorial.

## Self Signed Verifiable Credentials

### Generate Decentralized Identity

To generate a Decentralized Identity run the below command:

```shell
tcli did create --mainnet
```

This will create a DID on the IOTA Chrysalis Main Net as seen below.

```json
{
  "did": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
  "keys": {
    "public": "ChtA5TW3ddToh55CMpSSz2VC8xUhY5nhFXjUqpeHqC5v",
    "private": "AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh"
  },
  "transactionUrl": "https://explorer.iota.org/mainnet/message/3465ef0fb7c623dd733ba995913ccde9a7eeb8ffa43a0201decb943961216564"
}
```

In addition to the DID URI `did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9`, an Ed25519 public and private key will be generated and the URL to the [transaction](https://explorer.iota.org/mainnet/message/3465ef0fb7c623dd733ba995913ccde9a7eeb8ffa43a0201decb943961216564)

As seen from the Tangle the data recorded is:

```json
{
  "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
  "authentication": [
    {
      "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9#key",
      "controller": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
      "type": "Ed25519VerificationKey2018",
      "publicKeyBase58": "ChtA5TW3ddToh55CMpSSz2VC8xUhY5nhFXjUqpeHqC5v"
    }
  ],
  "created": "2021-05-28T12:32:36Z",
  "updated": "2021-05-28T12:32:36Z",
  "proof": {
    "type": "JcsEd25519Signature2020",
    "verificationMethod": "#key",
    "signatureValue": "BExxmHvDpcZs4ubB1fKb5zVNuygD3SrzG2R8Mm6fwDtsQh8zQH5L9Z9Zs68KeKkhmSmhxiBNeQYDH21N3sqvqbB"
  }
}
```

This can serve as a proof of existence of the identity corresponding to the DID that was created.

### Generate Verifiable Credential

Using an Example of a Wine Manufacturing Company that has a DID, we will generate a Verifiable Credential with Verifiable Claims.

Create a JSON file claims.json as seen below:

```json
{
  "gs1CompanyPrefix": {
    "type": "identifier",
    "value": "9526677"
  },
  "name": {
    "type": "PropertyValue",
    "value": "Good Wine Company"
  },
  "type": "Organization"
}
```

In this case the Wine company will be the Holder of the Digital Identity as well as the Issuer, this next step we will self issue a VC with the above claims.

To issue a VC we will need:

1. The Issuer DID - `did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9`.
2. The Secret - The issuers private key `AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh`.
3. The Subject - The DID of the subject `did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9`.
4. The type - `GlobalIdentifierCredential`.
5. The Verification Method - `did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9#key`.
6. The claims.

Run the following command:

```shell
tcli --mainnet vc issue --issuer=did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9 --subject=did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9 --secret=AEp8NDrN2BYMpUU6DkKRzVDhAN6VrMNNQP96R2FkVwgh --type=GlobalIdentifierCredential --method=#key --claims="$(cat claims.json)" --json
```

This will create a VC as seen below:

```json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "type": ["VerifiableCredential", "GlobalIdentifierCredential"],
  "credentialSubject": {
    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
    "gs1CompanyPrefix": {
      "type": "identifier",
      "value": "9526677"
    },
    "name": {
      "type": "PropertyValue",
      "value": "Good Wine Company"
    },
    "type": "Organization"
  },
  "issuer": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
  "issuanceDate": "2021-05-28T13:33:20Z",
  "proof": {
    "type": "JcsEd25519Signature2020",
    "verificationMethod": "#key",
    "signatureValue": "5v6zRqHGeMF7ihKsJroEEK5vrKZMVhbyPnb7hndh3bABza4eTpTyyZv94g6KHrdcMwoY1182jsmBkBRGZN5weByC"
  }
}
```

Now we have issued a Verifiable Credential which contains claims whose subject is our DID.

With this credential you will proceed to registering the DID to the Track and Trace Ledger API. The Credential will prove that you control the DID. However the API will not recognize this as a trusted Credential and will mark the claims as not trusted since it is self signed and self issued.

## Associate a DID to an API Key

You will associate a DID to an API Key through the self signed Verifiable Credential that you generated earlier.

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
    "credential": {
      "@context": "https://www.w3.org/2018/credentials/v1",
      "type": [
          "VerifiableCredential",
          "GlobalIdentifierCredential"
      ],
      "credentialSubject": {
          "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
          "gs1CompanyPrefix": {
              "type": "identifier",
              "value": "9526677"
          },
          "name": {
              "type": "PropertyValue",
              "value": "Good Wine Company"
          },
          "type": "Organization"
      },
      "issuer": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
      "issuanceDate": "2021-05-28T13:33:20Z",
      "proof": {
          "type": "JcsEd25519Signature2020",
          "verificationMethod": "#key",
          "signatureValue": "5v6zRqHGeMF7ihKsJroEEK5vrKZMVhbyPnb7hndh3bABza4eTpTyyZv94g6KHrdcMwoY1182jsmBkBRGZN5weByC"
      }
    }
  }'
```

Response:

```sh
201 Created
```

Once the Verifiable Credential is posted to the API, the API will verify the credential from the IOTA Chrysalis `mainnet` and if its verified, it is associated to the API key.

In this case the IOTA Track and Trace Ledger API acts as a **Verifier**.

You can also verify the credential using the `tcli` tool by running the following command:

```sh
tcli vc verify --mainnet --vc="$(cat credential.json)"
```

## Retrieve DID associated to an API Key

The API allows you to retrieve the DID associated with an API Key.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \
--header 'apikey: <Your API Key>'
```

Response:

```json
[
  {
    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
    "isTrusted": false,
    "isTrustedIssuer": false
  }
]
```

As seen above, the API was able to extract the API Key supplied in the headers and return the DID. Since it is a Self Issued DID, its marked as _not trusted_ and not a _trusted issuer_. A _trusted issuer_ is a DID that is entitled to issue credentials to other stakeholders so that the system will consider those credentials' claims as trusted.

## Associate a DID to a transaction

Using the same API Key, all transactions from now on will be appended with the DID

Request:

```shell
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan' \
--header 'apikey: <Your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
   "symbology": "EAN-13",
   "value": "3700123300014",
   "timestamp": "2020-10-14T16:10:07.652Z",
   "location":{
      "latitude": 44.1,
      "longitude": -8
   },
   "deviceId": "iphone-A-456789",
   "type": "scanTransaction"
  }'
```

Response:

```
201 Created

Location: /scan/transaction/37001.../VYBVMA...
```

Now if we retrieve the transaction;

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/transaction/991616586826831/VYBVMA...' \
--header 'apikey: <Your API Key>'
```

Response:

```json
{
  "symbology": "EAN-13",
  "value": "3700123300014",
  "timestamp": "2020-10-14T16:10:07.652Z",
  "location": {
    "latitude": 44.1,
    "longitude": -8
  },
  "deviceId": "iphone-A-456789",
  "type": "scanTransaction",
  "jsonData": {
    "originDid": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
    "timestamp": 1622224030522
  },
  "id": "8f66478e4c..."
}
```

The DID has now been appended to the transaction as `originDid`, showing that the transaction was created by an entity that controls the DID.

## Query claims associated to a DID

The API allows you to retrieve the claims assigned to the current API Key.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims' \
--header 'apikey: <Your API Key>'
```

Response:

```json
{
  "gs1CompanyPrefix": {
    "type": "identifier",
    "value": "9526677"
  },
  "name": {
    "type": "PropertyValue",
    "value": "Good Wine Company"
  },
  "type": "Organization"
}
```

You can use the `onlyTrustedClaims` query parameter, to fetch only the claims that are trusted. A claim is trusted if it has been issued by a trusted issuer, such as the one represented by the "GTSC" bootstrap DID (see below).

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims?onlyTrustedClaims=true' \
--header 'apikey: <Your API Key>'
```

In this case the result of the above request will be an empty object as none of the claims are trusted (they have been self-issued).

You can also fetch claims of another DID.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims/did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9
--header 'apikey: <Your API Key>'
```

Response:

```json
{
  "gs1CompanyPrefix": {
    "type": "identifier",
    "value": "9526677"
  },
  "name": {
    "type": "PropertyValue",
    "value": "Good Trucks Logistics"
  },
  "type": "Organization"
}
```

## Retrieve DIDs which claims have a particular value

The API also allows you to retrieve the DIDs which claims have a particular value, by providing the `claimName` and the `claimValue` as URL query Parameters, a list of DIDs which credential contains claims with of the given value will be returned.

In this case we want the DIDs whose `claimName` is `type` and `claimValue` is `Organization`.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity?claimName=type&claimValue=Organization
--header 'apikey: <Your API Key>'
```

Response:

```json
[
  {
    "id": "did:iota:9vy5GXq4eDu4TrotrBTfmQfZzLq7iAYtTRVh2vQrdyM9",
    "isTrusted": false,
    "isTrustedIssuer": false
  }
]
```

As seen above, we get a list or all the registered DIDs whose `claimName` is `type` and `claimValue` is `Organization`.

## Trusted Issuer

The API implementation has bootstrapped a Trusted Issuer DID `did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G`, that can issue trusted credentials so that other participants in the supply chain can be easily onboarded.

As this `GTSC` Credential is a Trusted Issuer, we can control the credentials and claims issued to different DIDs that interact with the API.

Using an Example of a Manufacturer `Car Industries GmbH` whose DID is [`did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL`](https://explorer.iota.org/mainnet/message/030386b7761e36b7391e7ba68e73cde77dacdb9aef67cf0acfc89693a38e59d9), we will issue a Verifiable Credential with the following claims:

```json
{
  "gs1CompanyPrefix": {
    "type": "identifier",
    "value": "0001111"
  },
  "isTrustedIssuer": true,
  "name": {
    "type": "PropertyValue",
    "value": "Car Industries GmbH"
  },
  "type": "Manufacturer"
}
```

Note the claim `isTrustedIssuer` is set to `true`, by issuing a Credential to `Car Industries GmbH` with this claim ensures that the DID is marked as a Trusted Issuer. i.e. all the credential's claims further issued by this DID will be marked as trusted.

Using the below command, we will issue a Verifiable Credential. This means that `GTSC` is the Issuer (Trusted by the Track & Trace Ledger API), `Car Industries GmbH` is the Subject (`did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL`) whose credential is signed by the `GTSC` private key.

```shell
tcli --mainnet vc issue --issuer=did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G --subject=did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL --secret=DRBNjCeAnjQeLKhwxuky5rSm7Fr5jyZsuvMtQzYqnG8Q --type=GlobalIdentifierCredential --expDate=2022-08-02T12:00:00Z --method=#key --claims="$(cat claims.json)" --json
```

The following Credential is issued:

```json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "type": ["VerifiableCredential", "GlobalIdentifierCredential"],
  "credentialSubject": {
    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
    "gs1CompanyPrefix": {
      "type": "identifier",
      "value": "0001111"
    },
    "isTrustedIssuer": true,
    "name": {
      "type": "PropertyValue",
      "value": "Car Industries GmbH"
    },
    "type": "Manufacturer"
  },
  "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",
  "issuanceDate": "2021-08-02T20:50:28Z",
  "expirationDate": "2022-08-02T12:00:00Z",
  "proof": {
    "type": "JcsEd25519Signature2020",
    "verificationMethod": "#key",
    "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"
  }
}
```

Note: the API will not accept Verifiable Credentials that are not self signed, thus `Car Industries GmbH` has to generate a Verifiable Presentation as a proof of control of the holder's DID of the credential.

Using the following command, `Car Industries GmbH` can the create a Verifiable Presentation, signed by their own private key, that they can then use to present to the API in order to associate claims to its DID.

```shell
tcli vc present --mainnet --vc="$(cat credential.json)" --method="#key" --secret="8xb5bP8c1Va5HffU3mYTNa4i8QrV4QKYc8HqS84PCZVd" --json
```

This will generate a Verifiable Presentation as seen below:

```json
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "type": "VerifiablePresentation",
  "verifiableCredential": {
    "@context": "https://www.w3.org/2018/credentials/v1",
    "type": ["VerifiableCredential", "GlobalIdentifierCredential"],
    "credentialSubject": {
      "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
      "gs1CompanyPrefix": {
        "type": "identifier",
        "value": "0001111"
      },
      "isTrustedIssuer": true,
      "name": {
        "type": "PropertyValue",
        "value": "Car Industries GmbH"
      },
      "type": "Manufacturer"
    },
    "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",
    "issuanceDate": "2021-08-02T20:50:28Z",
    "expirationDate": "2022-08-02T12:00:00Z",
    "proof": {
      "type": "JcsEd25519Signature2020",
      "verificationMethod": "#key",
      "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"
    }
  },
  "holder": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
  "proof": {
    "type": "JcsEd25519Signature2020",
    "verificationMethod": "#key",
    "signatureValue": "5W8CbgoTRkHT5P5c56jvgxKjHxqsEkVAdmwk5FBgf1GvD11bEWDHnLrFuDfxJ6uB7jTAWZCaSh5CsBUkfWoqA9sh"
  }
}
```

As seen above we have a presentation showing the holder (`Car Industries GmbH DID`), issuer (`GTSC DID`) and claims (issued to holder by the issuer).

We will now post this Verifiable Presentation to the Track & Trace Ledger API

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
    "credential":  {
      "@context": "https://www.w3.org/2018/credentials/v1",
      "type": "VerifiablePresentation",
      "verifiableCredential": {
        "@context": "https://www.w3.org/2018/credentials/v1",
        "type": [
          "VerifiableCredential",
          "GlobalIdentifierCredential"
        ],
        "credentialSubject": {
          "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
          "gs1CompanyPrefix": {
            "type": "identifier",
            "value": "0001111"
          },
          "isTrustedIssuer": true,
          "name": {
            "type": "PropertyValue",
            "value": "Car Industries GmbH"
          },
          "type": "Manufacturer"
        },
        "issuer": "did:iota:CV6FHjDq9uFNzYKP5LJkfGBcPyNHTKdoEeBhD5JFwL9G",
        "issuanceDate": "2021-08-02T20:50:28Z",
        "expirationDate": "2022-08-02T12:00:00Z",
        "proof": {
          "type": "JcsEd25519Signature2020",
          "verificationMethod": "#key",
          "signatureValue": "p6VgK8ew9uPia4kz9xFoqfoBLkZo7EvYu6mXZWuE7mJe52ygBm6uEwBNrtK66JtGsCB1nm8tHwK1XT5zWgGJngX"
        }
      },
      "holder": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
      "proof": {
        "type": "JcsEd25519Signature2020",
        "verificationMethod": "#key",
        "signatureValue": "5W8CbgoTRkHT5P5c56jvgxKjHxqsEkVAdmwk5FBgf1GvD11bEWDHnLrFuDfxJ6uB7jTAWZCaSh5CsBUkfWoqA9sh"
      }
    }
  }'
```

Response:

```shell
201 Created
```

Once the presentation is verified from the IOTA Tangle mainnet, the API will check the DID of the issuer, and if it is a trusted issuer such as `GTSC`, the claims will be marked as trusted, otherwise the claims will be marked as untrusted. That is, _claims issued by non-trusted (issuers') DID will always be marked as untrusted_.

Below we will confirm this based on the credentials we generated previously:

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/claims' \
--header 'apikey: <Your API Key>'
```

Response:

```json
{
  "gs1CompanyPrefix": {
    "type": "identifier",
    "value": "0001111"
  },
  "isTrustedIssuer": true,
  "name": {
    "type": "PropertyValue",
    "value": "Car Industries GmbH"
  },
  "type": "Manufacturer"
}
```

The `Car Industries GmbH` DID will also be marked as Trusted since it was issued by the `GTSC` DID and also as a "Trusted Issuer" since it was explicitly granted the `isTrustedIssuer` claim by the issuer as seen below. This means that `Car Industries GmbH` itself could later issue trusted credentials to other supply chain participants if necessary.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/actor/identity' \
--header 'apikey: <Your API Key>'
```

Response:

```json
[
  {
    "id": "did:iota:3xnxAzeV88oEMZC1iaqMppTj38cLXwxt8nv1U4XKPwRL",
    "isTrusted": true,
    "isTrustedIssuer": true
  }
]
```

Note: A controller of a DID can be trusted but could not be a trusted issuer. The permission to be a trusted issuer is granted by another trusted issuer, by including in a signed credential the claim `isTrustedIssuer` set to `true`. Such trusted issuer could be the "GTSC" bootstrapped DID, formerly mentioned, or any other existent trusted issuer DID.
