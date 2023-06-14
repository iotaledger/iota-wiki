---
image: /img/integration-services/logo/integration_services.png
keywords:
- how to
- subscribe to channel
- immutable data channel
- Channel
- Subscriber
- authorize
- Identity
- CLI
- Verifiable Credential
description: How to create Identities, Channels and how to subscribe to a channel, authorize a Subscriber and write data into a Channel.
---
# Create Identities

In this example we will show how to create Identities, Channels and how to subscribe to a channel, authorize a Subscriber and write data into a Channel.


### Create json files

First create two files `identityA.json` and `identitiyB.json` for creating these Identities with the CLI in the next step. Rename the `username` field in `identityB.json` into `actorB`.

```json
{
  "username": "actorA",
  "claimType": "User",
  "claim": {
    "name": "John",
    "surname": "Smith"
  }
}
```

### Create the Identities
```sh
is create-identity -i how_tos/identityA.json -o identityA.json 
```
```sh
is create-identity -i how_tos/identityB.json -o identityB.json 
```

### Create a Channel

Next we will create a private Channel with a topic `logs` and the source `device` and save the created Channel in a file called `channelA.json`. For public Channels add the option `-pC`. For public Channels a subscriber is automatically authorized to the Channel but can't write into it. The user can read the history of this channel with the command `is read-channel-history`.

```sh
is create-channel -i identityA.json -t logs -s device -o channelA.json test-channel
```

### Write to Channel

The creator of the Channel can directly write into it.

```sh
is write-channel -i identityA.json -p "hello world" -c channelA.json
```

### Request Subscription

Other users need to subscribe to a Channel first.
```sh
is subscribe-channel -i identityB.json -c channelA.json
```

### Authorize Subscription

The creator of the Channel authorizes a subscriber.
```sh
is authorize-subscription -i identityA.json -c channelA.json <Id of identityB>
```

### Write Message as a Subscriber

After the authorization the subscriber can write into the Channel.
```sh
is write-channel -i identityB.json -p "Can you hear me?" -c channelA.json
```

### Read Channel

The subscriber can read the Channel entries but only ones created after he/she was authorized to the Channel.
```sh
is read-channel -i identityB.json -c channelA.json
```

### Read History of Channel

The user can also read the history of a Channel.
```sh
is read-channel-history -i identityB.json -c channelA.json -sK <preshared key of channelA> 
```

Especially if the Channel is `public` it is the only way for the subscriber to read from the Channel. For that add the option `-pC` and remove the option for the preshared Key `-sK`.

```sh
is read-channel-history -i identityB.json -c channelA.json -pC
```

### Revoke Subscription

At any time the creator of a Channel can revoke the Subscription of other users.
```sh
is revoke-subscription -i identityA.json -c channelA.json -sI <Id of identityB>
```

### Find Subscription

We can also double check if the Subscription is revoked by simply trying to find it.
```sh
is find-subscription -i identityA.json -c channelA.json -sI <Id of identityB> 
```

### Help

```sh
is help
```
For one specific command
```sh
is <command> --help
```
