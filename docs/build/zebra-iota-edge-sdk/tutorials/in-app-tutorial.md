# IOTA Identity Tutorial

This tutorial demonstrates the use of the IOTA Identity Framework to create, share and verify some information about a device in the following sections:

1. Initialize an IOTA Identity client
2. Create identities
3. Create verifiable credentials
4. Create verifiable presentations
5. Verify presentations
6. Putting it all together

For each step, a function is defined that you should be able to reuse in your application(s).

## Before you begin

If you are unfamiliar with W3C Decentralized Identifiers (DID) and Verifiable Credentials (VCs), we recommend reading the overviews of chapters 2, 3.1 and 3.2 of the [IOTA Identity guide](/identity.rs/welcome).

The IOTA Identity framework is implemented in Rust. In order to use it in JavaScript, WASM bindings are available from the NPM package `@iota/identity-wasm`. Please refer to [IOTA Identity WASM - Getting Started](/identity.rs/getting-started/wasm) for set up instructions in both NodeJS and web (browser) contexts. This tutorial assumes a web context, but code comments show where usage is not the same as in NodeJS.

To complete the tutorial, you will need the following imports:

```js
import {
  init,
  Client,
  Config,
  Digest,
  Document,
  KeyCollection,
  KeyPair,
  KeyType,
  Network,
  VerifiableCredential,
  VerifiablePresentation,
  VerificationMethod,
} from '@iota/identity-wasm/web'; // NOTE: Web context.
```

## Initialize an IOTA Identity Client

We will create a client that connects to the IOTA mainnet through one of the IOTA Foundation's nodes. _Data transactions_ (such as identities) are pruned after some time and so we should also configure a Permanode from which identities can be fetched by the client even after a pruning cycle.

```js
async function createClient() {
  // Configure IOTA Identity client to connect to the IOTA mainnet.
  const cfg = Config.fromNetwork(Network.try_from_name('main'));
  cfg.setNode('https://chrysalis-nodes.iota.org');
  cfg.setPermanode('https://chrysalis-chronicle.iota.org/api/mainnet/');

  // Return the client.
  return Client.fromConfig(cfg);
}
```

## Create Identities

Creating an identity involves generating a public-private key pair (`authKeyPair`) that gets used to control access to the DID document on the Tangle. Additionally, a separate key collection is created and added as a verification method for this identity so verifiers may authenticate VCs issued. The `client` parameter can be provided using `createClient` above.

```js
async function createIdentity(client) {
  // Generate a new key pair and DID document for the new identity.
  const authKeyPair = new KeyPair(KeyType.Ed25519);
  const doc = new Document(authKeyPair, client.network().toString());

  // Add a Merkle Key Collection method for the identity, so compromised keys can be revoked.
  const keys = new KeyCollection(KeyType.Ed25519, 8);
  const method = VerificationMethod.createMerkleKey(
    Digest.Sha256,
    doc.id,
    keys,
    'key-collection',
  );

  // Add to the DID Document as a general-purpose verification method.
  doc.insertMethod(method, 'VerificationMethod');

  // Sign the DID document with the auth key. Ensure only the private key holder can manipulate this document.
  doc.sign(authKeyPair);

  // Publish the document to the Tangle.
  await client.publishDocument(doc);

  // Return the new identity data.
  return { authKeyPair, doc, keys, method };
}
```

## Create Verifiable Credentials

A Verifiable Credential consists of some "claims" about a "subject" (DID) that have been attested by an "issuer" (DID). In the case of a self-signed credential, the issuer is also the subject of the credential. The function below takes a claims object and identities (created using `createIdentity`) to produce a signed (verifiable) credential.

```js
async function createVerifiableCredential(claims, issuer, subject) {
  // Create an unsigned credential.
  const unsignedVc = VerifiableCredential.extend({
    id: `http://example.org/zebra-iota-sdk/1234`,
    type: 'DeviceID',
    issuer: issuer.doc.id.toString(),
    credentialSubject: {
      id: subject.doc.id.toString(),
      ...claims,
    },
  });

  // Sign the credential with issuer's Merkle Key Collection method.
  const signedVc = issuer.doc.signCredential(unsignedVc, {
    method: issuer.method.id.toString(),
    public: issuer.keys.public(0),
    private: issuer.keys.private(0),
    proof: issuer.keys.merkleProof(Digest.Sha256, 0),
  });

  // Return the signed VC.
  return signedVc;
}
```

## Create Verifiable Presentations

A Verifiable Presentation is a container for VCs and may be signed by the holder to prove authorship. This function will sign a presentation containing a single VC, however It's possible for multiple VCs, VCs from different issuers or VCs about different subjects to be encapsulated in a VP. The `vc` and `holder` parameters are the outputs of `createVerifiableCredential` and `createIdentity` respectively.

```js
async function createVerifiablePresentation(vc, holder) {
  // Create an unsigned presentation from the credential.
  const unsignedVp = new VerifiablePresentation(holder.doc, vc);

  // Sign the presentation with issuer's Merkle Key Collection method.
  const signedVp = holder.doc.signPresentation(unsignedVp, {
    method: holder.method.id.toString(),
    public: holder.keys.public(0),
    private: holder.keys.private(0),
    proof: holder.keys.merkleProof(Digest.Sha256, 0),
  });

  // Return the signed VP.
  return signedVp;
}
```

The returned VP can be serialized to string for sharing in the form of, for example, a DataMatrix.

## Verify Verifiable Presentations

The recipient of a VP will want to authenticate the DIDs of the VP holder, VC subject(s) and VC issuer(s). A valid presentation attests that all identities and claims made are authentic and original, however it's still the verifier's responsibility to maintain a list of holders, issuers and/or subjects that they recognize and/or trust. The function below takes a `vpString` and `client` from previous sections to produces the verification result.

```js
async function verifyVerifiablePresentation(vpString, client) {
  // Validate the presentation proof and all relevant DID documents.
  const result = await client.checkPresentation(vpString);

  // Return the result.
  return result;
}
```

## Putting it all together

So far we have only defined functions, time to put them to use. The following function will create a client and two identities - one for a device and one for the manufacturer of the device. Some claims about the device are issued as a VC by the manufacturer before encapsulating in a VP ready for sharing. A recipient (e.g. a customer) checks the VP and, if invalid, an error is thrown.

```js
async function run() {
  // Ensure the WASM library is initialized. The library is cached after first initialization.
  // NOTE: Web context.
  await init('/path/to/identity_wasm_bg.wasm');

  const client = await createClient();
  const device = await createIdentity(client);
  const manufacturer = await createIdentity(client);

  // Make up some information about the device.
  const claims = {
    uuid: 'd8c9934a-1d6a-4c92-ad6b-5bd2f255dc42',
    name: 'Zebra TC21',
    platform: 'Android',
    manufacturer: 'Zebra Technologies',
  };

  // Turn this information into a Verifiable Credential.
  const vc = await createVerifiableCredential(claims, manufacturer, device);

  // Share the Verifiable Credential through a Verifiable Presentation.
  const vp = await createVerifiablePresentation(vc, manufacturer);

  // The VP can be serialized to JSON for sharing (e.g. encoded as a DataMatrix).
  const vpString = JSON.stringify(vp.toJSON());

  // The recipient of the VP can verify that the presentation (and contained credentials) are valid.
  const { verified: vpIsValid, credentials: vcVerificationResults } =
    await verifyVerifiablePresentation(vpString, client);

  if (!vpIsValid) {
    throw new Error('The Verifiable Presentation is invalid.');
  }

  // The recipient can now trust that the credentials contained in the VP are about the
  // above device and have been issued by the above manufacturer.
  for (const vcResult of vcVerificationResults) {
    console.log(vcResult.credential.credentialSubject);
  }
}

// Run the tutorial
run()
  .then(() => console.log('Complete!'))
  .catch((err) => console.error(err));
```

## Further Reading

To engross yourself further, please refer to the [IOTA Identity Wiki](/identity.rs/welcome) and the [GitHub repository](https://github.com/iotaledger/identity.rs).
