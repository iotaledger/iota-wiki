---
image: /img/integration-services/logo/integration_services.png
description: This section will guide in setting up the Integration Service API using Java.
keywords:
- how to
- Java
- setup API
- configure
- .env
---

# Local Setup

:::caution
The [Integration Services Java library](https://github.com/albydeca/iota-is-sdk) is still in BETA. Please note that not everything may yet run smoothly.
:::

This section will guide in setting up the Integration Services API using Java.

## Requirements

See project's [POM](https://github.com/albydeca/iota-is-sdk/blob/main/pom.xml). Moreover, the following will be required:

* JDK 16 (recommended)
* A reference to an instance of the [Integration Services API](https://github.com/iotaledger/integration-services)
* Maven

## Download and Build the Project

Build from source:


```bash
git clone git@github.com:albydeca/iota-is-sdk.git
cd iota-is-sdk
mvn clean install
```

or download JAR from [MVNRepository](https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk/0.0.1)

or simply add to your POM if you wish to import the codebase into a wider project:

```xml
<!-- https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk -->
<dependency>
    <groupId>net.gradbase</groupId>
    <artifactId>iota.is.sdk</artifactId>
    <version>0.0.1</version>
</dependency>
```

Gradle more your thing? Please add to your dependencies:

```
implementation group: 'net.gradbase', name: 'iota.is.sdk', version: '0.0.1'
```

## Configuration

Please set up the following files in order to run the code locally:

- `env.properties` - with the following structure:
  ```
  api-key=XXXXXXX
  api-version=vX.X
  api-url=XXXXXXX
  identity-file=adminIdentity.json
  ```
- `adminIdentity.json` - will contain the admin identity object (json file with elements `doc` and `key`)


You are now ready to use the JAR and access the classes. Please remember to keep the `env.properties` *in the same folder as the JAR*.
The JAR can be used as a dependency to run the examples, which, contrary to the node implementation, exist as part of their own package
which depends on this project's JAR (see `examples/pom.xml` in the repo)

Note that the sensitive variables are accessed in the code as follows:

```java
public BaseClient() throws FileNotFoundException, IOException {
    Properties appProps = new Properties();
    appProps.load(new FileInputStream("env.properties"));
    this.apiVersion = appProps.getProperty("api-version");
    this.apiKey = appProps.getProperty("api-key");
    this.baseUrl = appProps.getProperty("api-url") + apiVersion + "/";
    this.jwt = null;
}
```


Anyone who wishes to implement such access in a more convenient way for their needs is welcome to make the changes and submit a pull request.

### Run Integration Services API

The Java SDK assumes the existence of a running instance of the Integration Services API, the endpoint of which is to be specified in the `api-url` part of the config file.

An `adminIdentity.json` is also strongly recommended to make the best use of the codebase. This file should contain the details of a root identity with CRUD capabilities.

The codebase is divided into three parts:

* `IdentityClient` allows the developer to create, update, delete users and add, revoke, and check their credentials, and manage trusted authorities. Self-Sovereign Identity (SSI) developers should make use of this part.
* `ChannelClient` allows the developer to create, delete data channels (IOTA Streams), manage all subscription-related actions for those channels, push and pull data. IoT developers might want to use this to implement M2M communications.
* `examples` provides a set of sample activities that show the potential of what can be done with the codebase, and also acts as a rudimentary test suite. More about these can be found in the [dedicated section](../../../how_tos/integration-services-sdk/introduction.mdx).

