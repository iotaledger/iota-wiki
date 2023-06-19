---
image: /img/integration-services/logo/integration_services.png
description: In the context of e-commerce and the ENSURESEC project, you can use the SSI-Bridge to verify identities for products, customer, sellers, and clients.   
keywords:
- explanation
- ecommerce
- scanner device
- customer
- credentials
- decentralized identity
- shopping app
- products authenticity credentials
---
# Use Cases

In the context of the [ENSURESEC](https://www.ensuresec.eu/) e-commerce ecosystem, the proposed use cases will use the
Ecommerce-SSI Bridge to implement the following workflows.

## Secure Goods Distribution

### Delivery Company Identity and Scanners Verification

**Problem**: Protection of a Delivery. Company X wants to protect its goods from being handled by unauthorized carriers,
and threats or frauds in the distribution chain.

1. An authorized employee of delivery company X uses the Ecommerce-SSI Bridge to register
   an [identity (DID)](https://wiki.iota.org/identity.rs/decentralized_identifiers/overview) for their organization.
2. An e-commerce operator verifies the delivery company’s organization identity and uses the Bridge to issue a
   credential for the company to deliver on their behalf. The credential contains the company organization DID and is
   signed by the e-commerce operator’s private key which had been previously associated with the operator’s identity.
3. The authorized employee of the verified delivery company registers a DID for each scanner (i.e. android scanners)
   used by the company couriers.
4. The authorized employee uses the Ecommerce-SSI Bridge to issue authorization credentials to the scanner devices used
   to handle deliveries. These credentials are stored locally in the scanner devices.
5. When a courier hands over the delivery, the scanner device uses the Ecommerce-SSI Bridge to present its credential to
   the e-commerce operator.
6. The e-commerce operator uses the Ecommerce-SSI Bridge to verify that the parcel was only handled by an authorized
   courier, and it was not stolen or diverted in transit. This is possible because of the verification of the device
   handling the scanning of the delivery.
7. (optional) The customer can acquire the courier’s scanner device credential in the form of a QR code. The QR code
   can be read using a mobile phone and the Ecommerce-SSI Bridge to verify that the scanner device belongs to a delivery
   company authorized by the e-commerce operator. This allows for verifying authentic deliveries.

### Customer Identity and Delivery Verification

**Problem**: Proof of Collection. Customers and e-commerce providers want to guarantee goods are collected by the right
customer and avoid threats and frauds in the distribution chain.

1. A customer creates a decentralized identity (DID) using a mobile application. This application can be a standalone
   credential wallet or an e-commerce shopping app.
2. The customer performs a purchase on an e-commerce site.
3. The e-commerce site uses the Ecommerce-SSI Bridge to issue a proof of purchase credential to the customer, which is
   saved to the customer’s phone.
4. The customer receives the product delivery and presents the credential in a QR code to the courier scanner.
5. The courier acquires the credential and uses the Ecommerce-SSI Bridge to verify its authenticity. The delivery is safely
   handed over to the right customer.
6. (optional) The customer acquires the courier’s scanner credential (see [ Delivery Company Identity and Scanners Verification]( #delivery-company-identity-and-scanners-verification))
   and uses the Ecommerce-SSI Bridge to verify that it belongs to an authorized delivery company assuring the customer
   knows the delivery is legitimate.

The two scenarios above become even more interesting in the case of automated (i.e., drones) delivery and could even
include product identification.

## Secure E-commerce Sales

### Customer Identity and Credential Age Verification

**Problem**: Verify a customer’s identity and avoid collecting and storing personal information. This would increase
compliance and reduce liability for e-commerce and small sellers.

1. An authorized bank employee registers an organization decentralized identity (DID) for its bank.
2. A customer creates a decentralized identity (DID) using a mobile application which could be a standalone credential
   wallet or an e-commerce shopping app.
3. The customer requests an Issuer (e.g. a bank) to issue a credential stating their age.
4. The Issuer uses previously verified information about the user held on local record and the Ecommerce-SSI Bridge to
   create and issue a verifiable credential to the customer.
5. The customer (namely Owner) downloads the credential in their app using a credential wallet.
6. The customer purchases an item that requires age verification on an e-commerce site.
7. The customer provides their credential to the e-commerce website using the Ecommerce-SSI Bridge.
8. The e-commerce site uses the Ecommerce-SSI Bridge to verify the credential and authorize the purchase.

A similar scenario can be applied in the online purchase of dedicated drugs for specific health conditions. A general practitioner could
issue a credential to the customer stating their condition.

### Seller Identity Verification

**Problem**: Verify a seller's identity. This verification would reduce small sellers' compliance burden and reputation
risks.

1. An e-commerce site allows an employee, which the seller previously authorized, to create a decentralized identity (DID
   for organization) using the Ecommerce-SSI Bridge.
2. The seller requests an Issuer (e.g. its bank) to issue a credential stating its Know Your Customer (KYC) status.
3. The seller presents the credentials to the e-commerce site operator using the Ecommerce-SSI Bridge.
4. The e-commerce site operator verifies the seller’s credentials using the Ecommerce-SSI Bridge and allows the seller
   to trade on its marketplace

### Product Identity and Authenticity

**Problem**: Verify product authenticity. This verification would reduce counterfeit.

1. An e-commerce site allows the seller to create a decentralized identity for each of its products (DID for objects)
   using the Ecommerce-SSI Bridge.
2. The e-commerce site allows the seller to create and sign an authenticity credential associated with a given product
   identity using the Ecommerce-SSI Bridge.
3. A user app allows a customer to obtain the product authenticity credential. The customer could achieve this by
   scanning a QR code from an e-commerce site, or it can even be directly attached to a purchased product.
4. A user app allows the customer to verify the signature of the product authenticity credential using the Ecommerce-SSI
   Bridge, allowing verification of the seller's identity.

### [Try out our demo, implemented using the SSI bridge APIs](https://eshop-poc.solutions.iota.org/)