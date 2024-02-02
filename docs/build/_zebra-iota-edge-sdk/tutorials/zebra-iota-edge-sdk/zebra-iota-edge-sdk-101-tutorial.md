# Zebra-IOTA-Edge-SDK : Identity Enabler : 101 Tutorial

<h2>Understanding Decentralized Identities</h2>

In this tutorial series you will learn how to use the **Identity Enabler** of the Zebra-IOTA Edge SDK to issue, verify and manage decentralized and interoperable identities for people, organizations or devices. If you are already familiar with the IOTA Tangle and / or the concepts behind Decentralized Identity you can jump directly to the [tutorial introduction](#the-zebra-iota-edge-sdk-overview).

Other parts in this series are:

- [102 - Managing Credentials](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md)
- [103 - Verifying Credentials](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial.md)
- [104 - Device onboarding](../zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial.md)

## Introduction to Digital Identities

Based on its [technical definition](https://www.justaskgemalto.com/en/what-is-digital-identity/) a **digital identity** “is the information on an entity used by computer systems to represent an external agent. That agent may be a person, organization, application, or device.”

The details collected about an identity (for example name, email address, DoB, credit card number, vaccinations taken for personal identities) during the identity creation phase represent what are called the **identity claims**. An identity is associated with zero, one or multiple claims.

<p align="center">
  <img src="https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/101/image2.png" width="50%" alt="Decentralized Identity Overview"/>
</p>

Different roles can be distinguished (see figure above):

- Identity **Subject**. The agent in question (person, organization, device, …).
- Identity **Holder**. The entity that presents an identity, (usually the Identity Subject) to a Verifier (see below).
- Identity **Issuer**. The entity that, after verifying the identity claims made (with a process usually named _Know Your Customer, KYC_), issues an identity, for instance, the public authorities when it comes to national IDs or vaccination certificates.
- Identity **Verifier**: The entity that verifies the authenticity of an identity presented by a Holder. For instance, a restaurant verifying a health passport to grant admission to the holder.

Once an identity is issued it can be used to access a number of services that accept that identity. These services are therefore able to verify that the presented identity exists and it is authentic. In case this ability to verify a given identity is only accessible to the original identity issuer, the digital identity is called a _centralized digital identity_. An example of this is the identity that our Internet Provider issued to us (through a username and password) to access the Internet and to pay our bills online.

## Decentralized Digital Identities

There are novel application scenarios where a subject has to prove its own identity and check those of other parties in the context of **heterogeneous** and global, distributed application services. This requires that the subject’s digital identity and claims are verified without the need to create new digital identities (one for each service or geography) and to repeat the different issuance and claim verification process.

This requires the creation of a new model for issuing and verifying digital identities. A model that allows any verifier to verify subject’s identities issued by different issuers and that _avoids duplication_ in the creation of verified claims. And this is where **Decentralized Identities** come into play.

Decentralized digital identities (DIDs) are a new type of digital identities that allow for the creation of identity and their claims verification in a decentralized way. This does not require any one to one integration between identity issuers and identity verifiers. As a result DIDs allow for high scalability and reduction of time and costs, as claims already proofed against a given identity issuer are not required to be proofed again against a different one (e.g. a company operating in a different country).

DIDs build on basic principles:

- Identity and its claims are controlled by the Identity Holder, which is usually equal to the Identity Subject;
- Identity Verifiers rely on digital signatures to trust the authority of Identity Issuers and the claims that they verify;
- Verified claims about the Identity Subject are issued in the form of digital certificates signed by Identity Issuers and can be stored directly by the subject/holder;
- The public key cryptographic materials are anchored to a Distributed Ledger (such as IOTA) to ensure multiple stakeholders access and self-sovereign control on them.
- Acting as Issuer, Subject, Holder, or Verifier requires neither registration nor approval by any authority, as the trust involved is bilateral between parties.

## Applications of Decentralized Identities

There are several applications of decentralized identities in different domains:

- **Personal Information Management**: The main application is self-sovereign identities as a privacy improvement. In fact, self-sovereign identities allow individuals to manage their identities (securely stored on their devices) without the intervention of a central authority or issuer. For instance, health credentials could be verified by a restaurant without interacting with a government service endpoint. For a more detailed description of this domain of application, please check the [IOTA-Zebra joint whitepaper](https://github.com/JamesSwinton/Zebra-IOTA-VerifiableCredentials/blob/main/Papers/IOTA%20-%20HealthPass%20-%20adoption%20paper.pdf) on health passports and the summary in this [blogpost](https://blog.iota.org/digital-green-certificates-a-decentralized-and-interoperable-infrastructure/).

- **Trade Certificates**: Verifiable claims anchored to decentralized identities can be used to represent digitally different kinds of certificates associated with trade items. For instance:

  - A phytosanitary certificate is waived to allow entrance of a foreign shipment through a customs post.
  - An Electric Vehicle Battery testing certificate is presented by a manufacturer to make claims about the testing made, thus guaranteeing and committing to a proper functioning of the device within a certain timeframe.
  - An organisation seeking to prove compliance of a product to certain quality standards can request for certification by a third-party auditor by means of a certificate associated with the product. Subsequently, a customer may verify the certificate as well as the issuing auditor’s identity independently. The identities of the organisations, products and possibly the customer are represented by a Decentralised Identity over which they have full ownership.

- **Decentralized Identity (DID) for Organizations**: The main application is the “DID for organizations in global trade” use case. For instance, a trader from Kenya creates its decentralized digital identity (DID) and receives a number of Credentials from Kenyan authorities after the requested verification processes. Some of these Credentials are also accepted by the EU authorities. Once starting to trade in Argentina, the same trader does not require new credentials as the existing ones are already matching those required by the Argentinian authorities, who can verify their authenticity in a decentralized way, without the need to integrate with any of the Kenya or EU Identity Issuers. You can watch this video which shows how we are applying it to the [TLIP Project](https://www.youtube.com/watch?v=bnAfclXTaeI) jointly developed by TradeMark East Africa and IOTA.

- **Decentralized Device Identity**. Any device, such as a printer, scanner or RFID reader used in supply chains, may be issued a decentralized identity and associated credentials by the organization owning it. As a result all interactions made with that device can be recorded and audited, increasing the level of traceability, accountability, security and trust in the daily operations of an organization. For instance, a Zebra scanner in a warehouse can be assigned a decentralized identity, including certain verifiable credentials. When the device generates supply chain events, for instance scanning trade items (pallets, cases, etc.), a new record, signed with the keys bound to the identity of such a device, can be recorded and anchored to a distributed ledger such as IOTA. As a result, any associated business operation could be traceable all the way from an origin device to the corresponding business transaction. The Zebra-IOTA SDK already includes a reference application ([DeviceID Application](zebra-iota-edge-sdk-104-tutorial.md)) structured around a wizard that allows onboarding devices owned by an organization (see below).

- **Supply Chain Credentials**. Currently there are many supply chain processes that are actually conducted without the proper level of security or with no digitisation at all. We can imagine a truck driver arriving into a warehouse requesting to load / unload some pallets and showing just a document on paper with the transportation order. These kind of processes involve identity, trust and change of custody records between multiple parties each one holding their own decentralized identity: the warehouse manager, the truck driver, the logistics service provider, the supplier company and the customer company, for instance:

  - The logistics service provider has to issue a credential to the truck driver so that he is authorized to transport certain pallets
  - The truck driver needs to present a credential to the warehouse manager conveying that he is entitled to load/unload the right pallets
  - The warehouse manager needs to verify the truck’s driver credential to allow the load / unload
  - The logistics service provider needs to prove that the goods were loaded and later delivered to the customer
  - The supplier needs to prove that the goods were handed over to the logistics service provider and later received to the customer

As the amount of stakeholders and their interrelationships can be huge, the only viable solution to these problems is the usage of decentralized identities. The Zebra-IOTA Edge SDK already provides application blueprints that can be extended to meet the scenarios described above.

## DLT Technologies and IOTA

A Ledger is an information store that keeps final and definitive (immutable) records of transactions. A Distributed Ledger is a type of ledger that is shared, replicated, and synchronized in a distributed and decentralized manner. A decentralised system is a system wherein control is shared among the persons or organizations participating in the operation of the system.

IOTA is an open source, scalable and permissionless DLT that enables sharing of data guaranteeing traceability of their source, alongside with integrity and immutability of the shared information, and dedicated access management, e.g., who can read what. This is possible using complementary frameworks such as the [IOTA Identity Framework](https://blog.iota.org/iota-identity-beta-release/).

In contrast with traditional blockchain-based DLTs, IOTA is based on a Directed Acyclic Graph, the Tangle. [This video](https://www.youtube.com/watch?v=ivWqqfzunhI) explains how IOTA's Tangle works. [Here](https://wiki.iota.org) you can find a get started guide intended for IOTA's developers with additional references.

## The IOTA Identity Framework

The IOTA Identity Framework is an implementation of the W3C Decentralized Identity standards leveraging IOTA Tangle. Such standards are composed of two different specifications:

- [DID specification](https://www.w3.org/TR/did-core/). Defines a new URI scheme, the **did** scheme, that allows associating dereferenceable URIs to identities. In addition, the specification defines the syntax and structure of a JSON document, the DID document, that contains all the cryptographic materials or metadata associated with an identity identified by a DID URI. Such a JSON document is the result of dereferencing the DID URI.

  Different DID methods can be defined, being “iota” one of them, which allows anchoring a DID document to the IOTA Distributed Ledger and managing all its lifecycle (creation, retrieval, update, etc.).

  For instance, `did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE` is an example of IOTA DID. You can view the associated DID document at [https://explorer.iota.org/mainnet/identity-resolver/did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE](https://explorer.iota.org/mainnet/identity-resolver/did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE) . As you can see the most important part of a DID document are the verification methods which contain public keys that can be later used to verify credentials or signatures in general.

  Using the IOTA Identity library one can create and later retrieve (by dereferencing the DID URI) these documents and point to specific parts of it, for instance specific public keys that can be used to verify credentials issued by the entity controlling the DID.

- [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) specification. Defines a JSON(-LD) document format to represent credentials issued by an entity (identified by a DID) to a certain subject (identified by another DID). Those credentials contain several claims represented by JSON-LD properties and values. In addition, a Verifiable Credential contains other metadata such as the issuance or expiration date and the verifiable signature of the issuer, that can be used by the verifier to check for its authenticity. The IOTA Identity Framework provides a library that facilitates the issuance and verification of W3C Verifiable Credentials.

The IOTA Identity framework handles all the interactions with the IOTA Tangle where the DID documents are published and anchored to. In the context of Verifiable Credentials, the Tangle acts as the _Verifiable Data Registry_. The IOTA Tangle is well-suited as it provides guarantees of data integrity and immutability and, therefore, trust between participating parties but without incurring any fees.

The IOTA Identity Framework is coded in [Rust](https://github.com/iotaledger/identity.rs) but has also defined WASM (Javascript) bindings which facilitate its usage to Mobile and Web Developers. In fact, the Zebra Edge SDK is using those bindings to implement the functionality described by this tutorial.

## The Zebra-IOTA Edge SDK: Overview

The Zebra-IOTA Edge SDK is composed of different open source modules (enablers) that facilitate the creation of applications that exploit IOTA’s DLT capabilities on edge devices, in particular Zebra Devices. The enabler described by this tutorial (_Identity Enabler_) is the one corresponding to decentralized identities. It is based on the IOTA Identity Framework and makes it easier to develop solutions on the edge that exploit the capabilities of decentralized identities for people, devices or organizations.

The Identity Enabler is composed of a set of **reference applications** that can be used as a \_scaffold / blueprint \_for developers, and as guidance on how to solve the most common problems around decentralized identity, such as credential issuance or verification using the APIs offered by the IOTA Identity Framework.

The SDK uses Web Technologies for the user interface of the aforementioned reference applications. In particular, those applications are coded in [TypeScript](https://www.typescriptlang.org/), using the [Svelte framework](https://svelte.dev). To package the Web Applications as Android applications, the [Capacitor framework](https://capacitorjs.com/) is used. That means that you can run these applications in your favourite browser as Web Applications or in your Android device or emulator.

### Prerequisites

In order to follow this tutorial series and experiment with the Zebra Edge SDK Identity Enabler you would need the following software artefacts installed on your local development environment:

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or yarn package managers
- [Android Studio](https://developer.android.com/studio)
- Android development tools: [adb](https://developer.android.com/studio/command-line/adb) command line tool, Android emulator ([AVD](https://developer.android.com/studio/run/managing-avds))
- Ideally a Zebra Android device equipped with camera/scanning capabilities and the [DataWedge](https://techdocs.zebra.com/datawedge/11-1/guide/about/) connector. This tutorial has been developed using the [TC21](https://www.zebra.com/gb/en/products/mobile-computers/handheld/tc21-tc26.html) device executing Android 10. It also has been tested with an old regular Android 5.1.1 device.
- The codebase has been tested using the Android System Webview runtimes corresponding to versions 95 (on the Android 5.1.1) and 96 (TC21).
- DataWedge profiles for the different applications. They can be downloaded from [here](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db) and then imported into your own Zebra device. The profile for each application shall be configured as follows:
  - Intent Output: Enabled
  - Intent Action: `org.iota.zebra.<verifier|holder|device_id>.intent.action.SCAN`
  - Intent category: `org.iota.zebra.intent.category.DATAWEDGE`
  - Intent delivery: Send via **`startService`**

In the case of the TC21 device we deliberately updated the Android System Webview runtime to version 96. Despite being restricted from Google Play, we managed to install it manually through this [portal](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-96-0-4664-104-release/android-system-webview-96-0-4664-104-4-android-apk-download/) (please note that **64 bit** **ARM** versions should be downloaded).

If you are going to extend the reference applications, or develop your own applications we recommend that you install the [VSCode](https://code.visualstudio.com/) environment together with the following plugins:

- Prettier: [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Svelte: [https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- ES Lint: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

If you want to do a more exhaustive debugging you can use the adb command line tool:

```
adb logcat | grep -F "`adb shell ps | grep org.iota.zebra | tr -s [:space:] ' ' | cut -d' ' -f2`"
```

### Getting started

Under the [identity-enabler](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK) folder, there is one subfolder for each of the reference applications. For each application the `src` directory contains the application source code and static web assets. Additionally, each application has a `config.ts` file with settings and contains an Android application in the `android` directory.

```
.
├── identity-enabler
│   ├── deviceId-mobile-app
│   │   ├── android
│   │   │   ├── app
│   │   │   └── gradle
│   │   └── src
│   ├── holder-mobile-app
│   │   ├── android
│   │   │   ├── app
│   │   │   └── gradle
│   │   └── src
│   └── verifier-mobile-app
│   	  ├── android
│   	  │   ├── app
│   	  │   └── gradle
│   	  └── src
```

The specific code that deals with the IOTA Identity framework is at the [IdentityService](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/src/services/identityService.ts) wrapper class. We will explain the specific details of that class under the corresponding application tutorial section. In addition there is a “show me the code” button on each application screen that you can use to find relevant code snippets in context.

During the tutorial we will explain how the applications can make use of the [IOTA Identity](https://github.com/iotaledger/identity.rs) Framework to solve the decentralized identity functionalities. However, we will not explain the details concerning the implementation of the user interface through the Svelte Framework. Nonetheless, we can recommend this [Svelte tutorial](https://svelte.dev/tutorial/).

### Zebra DataWedge Integration

The SDK solves the problem of bridging [Zebra DataWedge](https://techdocs.zebra.com/datawedge/11-1/guide/about/) and the Web Application code. The main idea is that there is a [DataWedge service](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/android/app/src/main/java/org/iota/zebra/verifier/datawedge/DataWedgeService.java) that is awakened whenever a new DataWedge intent is triggered (if properly configured through a DataWedge profile as previously explained). Afterwards, the Service triggers a data observation event (with the scanned string) to the [main Android Activity](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/android/app/src/main/java/org/iota/zebra/verifier/MainActivity.java#L64) which receives it and executes the [`onScan`](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/App.svelte#L22) method at the Web View. Such a method will react to the scanned data accordingly. For those devices which do not incorporate a scanner with DataWedge capabilities, the scanning can proceed through the regular device’s camera (open through the [Media Device Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)) and the [zxing-js library](https://github.com/zxing-js/library) library. For that purpose there is a Svelte [Scanner](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/components/Scanner.svelte) component and a Svelte [Scan](https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/pages/Scan.svelte) page that can be easily reused.

## Roadmap

The IOTA Foundation and Zebra Technologies are working continuously to improve and extend the Zebra-IOTA Edge SDK.

First of all, by Q2 2022 we plan to release an additional enabler to facilitate the development of applications on the edge based on [GS1 EPCIS 2.0](https://blog.iota.org/epcis-2-0-a-global-standard-to-build-trusted-and-decentralized-supply-chains-with-iota/). The overall goal of EPCIS is to enable disparate supply chain actors to create and share event visibility data (in the form of business events), both within and across enterprises. The **EPCIS Enabler**, in combination with the Identity Enabler, will allow anchoring these events directly from devices to the IOTA DLT. As a result, immutability and trust between actors will be guaranteed, enhancing supply chain digitisation on a decentralized basis.

When it comes to the specific functions of the Identity Enabler, we plan to extend it with an _Issuer Application_ blueprint and to integrate other credential transport mechanisms such as **NFC**.

Finally, on the business development side of things we invite Zebra ISVs to get in touch with us to start creating novel edge solutions along supply chains leveraging this SDK.

## Next Steps

If you want to know how you can generate and manage identities and credentials using the UI toolkit and libraries offered by
the SDK, please continue reading the [102 Tutorial](zebra-iota-edge-sdk-102-tutorial.md).
