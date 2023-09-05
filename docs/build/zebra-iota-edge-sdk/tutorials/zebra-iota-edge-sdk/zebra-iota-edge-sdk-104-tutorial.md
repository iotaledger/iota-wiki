# Zebra-IOTA-Edge-SDK : Identity Enabler : 104 Tutorial

<h2>Device onboarding</h2>

In this tutorial you will learn how to use the **Identity Enabler** of the Zebra-IOTA Edge SDK to onboard supply chain devices.

Before reading this tutorial you should have first read the [Decentralized Identity introduction tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md) and the [identity management Holder Application tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md).

## Introduction

The _DeviceID_ _Application_ provides a blueprint of how devices can be onboarded to participate in supply chain processes by obtaining a new decentralized identity verified by the organization owning the device. This process is aimed at improving auditability, data provenance and traceability all the way from device events to business events.

Particularly, once a new Device Identity is available, the concerned device can start reporting authenticated [scan events](../track-trace-ledger-api/track-trace-ledger-api-tutorial-101.md) (after having been previously registered to the [Track & Trace Ledger APIs](../track-trace-ledger-api/track-trace-ledger-api-tutorial-103.md)) that can be immutably recorded on the IOTA Tangle. Those events could later be transformed into [EPCIS 2.0 events](../track-trace-ledger-api/track-trace-ledger-api-tutorial-201.md).

## Prerequisites

The prerequisites for running this tutorial are described on [part 1](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#prerequisites) of this series.

## Getting started

An overview of the structure of the SDK is described on [part 1](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#getting-started) of this series.

## How to run in a browser

Run the Holder application in your browser with the below commands:

```console
# Clone the repository
git clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK

# Set up the project
cd Zebra-Iota-Edge-SDK/identity-enabler/deviceId-mobile-app
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
cd Zebra-Iota-Edge-SDK/identity-enabler/deviceId-mobile-app
npm install

# Build and run
npm run android
```

Afterwards you need to go to the Android Studio and compile, install and execute the corresponding Android application. After successfully running the application you will be shown a simple wizard that you will need to complete. See below.

## DataWedge profile

If you want to run this application integrated with a Zebra Scanner you need to [import](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db) the corresponding DataWedge profile or configure a new one similar to the one on the screen capture below. The associated application shall be `“org.iota.zebra.device_id”`.

Note: On a non DataWedge device you can simulate a DataWedge scanning through the adb command line tool as follows:

```console
adb shell am startservice -a org.iota.zebra.device_id.intent.action.SCAN -e com.symbol.datawedge.source scanner -e com.symbol.datawedge.data_string <scanned_string>
```

<p align="center">
<img alt="Data Wedge Profile 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image3.png" width="30%"/>
<img alt="Data Wedge Profile 2" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image18.png" width="30%"/>
<img alt="Data Wedge Profile 3" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image22.png" width="30%"/>
</p>

Note: Also you should have previously defined a [DataWedge profile for the Holder Application](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md#datawedge-profile).

Additional information on how Zebra DataWedge can be integrated is found at the [introductory tutorial](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md#zebra-datawedge-integration).

## Onboard a device

The first step to onboard a device is to obtain a new DID document. This process is conducted through a wizard, and is similar to the one we already described for the [_Holder Application_](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md#create-an-identity). See below.

<p align="center">
<img alt="Identity device 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image21.png" width="30%"/>
<img alt="Identity device 2" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image23.png" width="30%"/>
<img alt="Identity device 3" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image17.png" width="30%"/>
</p>

After having obtained a new Decentralized Identity, which includes verification methods (i.e. public / private keys), the next step is to get a new Verifiable Credential that will contain all the claims associated with the device (serial number, manufacturer, etc.). Thus, it is first required that the device presents its claims to an issuer. In this case the issuer will be **the organization owning the device**. Such an organization will check for the ownership of the DID and the claims made. And, after a verification process, a new Verifiable Credential will be issued and signed. The issuer of such a Verifiable Credential will be the organization owning the device and the subject the device itself.

In our blueprint application the process described above is conducted as shown below. From the _DeviceID Application_ it is requested a new DeviceID credential. For that purpose, the device generates a QR code that encodes all its claims.

<p align="center">
<img alt="Request Credential 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image16.png" width="30%" align="center"/>
</p>

Afterwards, such QR code is scanned by the [_Holder Application_](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md) that will verify the claims, the ownership of the DID and will finally issue a new credential.

<p align="center">
<img alt="Device ID Credential" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image8.png" width="30%"/>
<img alt="Device ID Claims" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image20.png" width="30%"/>
</p>

Once the new Credential is ready it is shared from the _Holder Application_ through a scannable DataMatrix code and imported by the _DeviceID application_.

<p align="center">
<img alt="Onboard device 1" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image4.png" width="30%"/>
<img alt="Onboard device 2" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image12.png" width="30%"/>
<img alt="Onboard device 3" src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/104/image17.png" width="30%"/>
</p>

**Important Note**: In this version of the SDK we are using the _Holder Application_ itself as _Issuer Application_. Thus, in the end the device’s Credential is signed with the identity we have previously generated at the _Holder Application_. However, in a real solution there should be a specific _Issuer Application_ for this purpose. In the next version of the SDK we plan to provide a new blueprint for an _Issuer Application_.

### Show me the code

The code that makes it possible the Device onboarding is a combination of the previous code we have shown in other parts of this tutorial, such as the [identity generation](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md#show-me-the-code) or [credential issuance](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md#show-me-the-code-1).
