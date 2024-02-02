# Zebra-IOTA-Edge-SDK : Identity Enabler : 103 Tutorial

<h2>Verifying Credentials</h2>

In this tutorial you will learn how to use the **Identity Enabler** of the Zebra-IOTA Edge SDK verify interoperable identities for people, organizations or devices.

Before reading this tutorial you should have first read the [Decentralized Identity introduction tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md) and the [identity management and Holder Application tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md).

## Prerequisites

The prerequisites for running this tutorial are described on [part 1](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#prerequisites) of this series.

## Getting started

An overview of the structure of the SDK is described on [part 1](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#getting-started) of this series.

## Introduction

The _Verifier Application_ provides the blueprint of how a user could, in an interoperable way, verify credentials scanned using their Android device. The app guides the user to scan a data matrix using their camera or Zebra scanning device to verify its validity and keep track of previously scanned credentials.

## How to run in a browser

Run the _Verifier Application_ in your browser with the below commands:

```console
# Clone the repository
git clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK

# Set up the project
cd Zebra-Iota-Edge-SDK/identity-enabler/verifier-mobile-app
npm install

# Build and run
npm run build:dev
npm run start:dev

# Open http://localhost:5002 in your browser
```

## How to run on an Android Device

Before continuing please ensure that you have already installed the Android Studio on your local development machine and is properly configured. Then

```console
# Clone the repository
git clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK

# Set up the project
cd Zebra-Iota-Edge-SDK/identity-enabler/verifier-mobile-app
npm install

# Build and run
npm run android
```

Afterwards you need to go to the Android Studio and compile, install and execute the corresponding Android application. After successfully running the application you will be shown a simple wizard that you will need to complete. And finally you will be ready to verify credentials. See below.

## DataWedge profile

In order to run this application fully integrated with a Zebra Android scanning device you need to set up a DataWedge profile for the `“org.iota.zebra.verifier”` application as follows, or you can import it from [here](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db).

<p align="center">
<img alt="Data Wedge Profile 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image3.png" width="30%"/>
<img alt="Data Wedge Profile 2" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image7.png" width="30%"/>
<img alt="Data Wedge Profile 3" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image19.png" width="30%"/>
</p>

Note: On a non DataWedge device you can simulate a DataWedge scanning through the adb command line tool as follows:

```console
adb shell am startservice -a org.iota.zebra.verifier.intent.action.SCAN -e com.symbol.datawedge.source scanner -e com.symbol.datawedge.data_string <scanned_string>
```

Additional information on how Zebra DataWedge can be integrated is found at the [introductory tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#zebra-datawedge-integration).

## Verify a Credential

In this step, the IOTA Identity framework performs the main function associated with the role of “verifier” in the SSI model: _Verifying a verifiable presentation (a data matrix) containing one or more verifiable credentials._

You can see the steps from the application below. After scanning a Verifiable Presentation encoded as a data matrix code (using the embedded scanner capabilities of a Zebra device or the regular device’s camera and the `zxing-js` library), the IOTA Identity framework will check for tampering and authorship of both the presentation and the contained credential(s) using the embedded proof (digital signature). It is expected for the presentation and credential to be authored by the holder and issuer respectively. Remember that in our formerly described _Holder Application_ the holder issues the credentials to themselves.

Once the credential is deemed as valid it is shown and persisted on the inbox of the application (third capture below) for demonstration purposes. When implementing a concrete solution different actions could be taken when scanning a valid credential.

<p align="center">
<img alt="Credential Verification 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image11.png" width="30%"/>
<img alt="Credential Verification 2" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image13.png" width="30%"/>
<img alt="Credential Verification 3" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/103/image25.png" width="30%"/>
</p>

### Show me the code

Verifying a credential (presented as a Verifiable Presentation) is quite straightforward using the library functions offered by the IOTA Identity Framework.

```typescript
//Create from VP
const verifiablePresentation = VerifiablePresentation.fromJSON(presentation);
const result = await this.getClient().checkPresentation(
  JSON.stringify(verifiablePresentation.toJSON()),
);
return result?.verified;
```

## Next Steps

If you want to learn how you can onboard supply chain devices with their own decentralized identity go to the [104 Tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial.md).
