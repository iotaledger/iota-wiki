# INX Interface Interaction

In this tutorial, you will learn how to interact with the IOTA Node Extension ([INX](https://github.com/iotaledger/inx)) interface via JavaScript (NodeJS) with both simple requests and streaming requests. The extension uses the [inx.proto](https://github.com/iotaledger/inx/blob/develop/proto/inx.proto) file to generate the required gRPC client to connect to HORNET. [gRPC](https://grpc.io/) is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment.

### Prerequisites

- Network
  - Running a node in [Shimmer Beta Network](https://blog.shimmer.network/shimmer-beta-network-is-live/)
- Development Environment and Libraries
  - Installed [Node.js](https://nodejs.org/en/)

---

### Set Up

#### Prepare development environment

Create a new folder for the tutorial in a location of your choice and navigate to it:

```bash
mkdir inx-interaction
cd inx-interaction
```

Run the Node.js initializer to configure the project:

```bash
npm init --yes
```

Overwrite the `package.json` file with the following content:

```yaml
{
  'name': 'inx-interaction',
  'version': '1.0.0',
  'description': '',
  'main': 'index.js',
  'dependencies':
    {
      '@grpc/grpc-js': '^1.5.5',
      '@koa/router': '^10.1.1',
      'koa': '^2.13.4',
      'koa-logger': '^3.2.1',
    },
  'scripts': { 'test': 'echo "Error: no test specified" && exit 1' },
  'author': '',
  'license': 'Apache-2.0',
}
```

Install new dependencies:

```bash
npm install
```

---

#### Prepare configuration file

Create new file `config.js` and add the following code:

```javascript
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './inx.proto';

const INX_ADDRESS = 'localhost:9029';

const protoOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

// Load the `inx.proto` file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, protoOptions);
const INX = grpc.loadPackageDefinition(packageDefinition).inx.INX;

// Instantiate an INX client
const client = new INX(INX_ADDRESS, grpc.credentials.createInsecure());

module.exports = client;
```

---

#### Prepare proto file

Copy the `inx-proto` file from [here](https://github.com/iotaledger/inx/blob/develop/proto/inx.proto) into your folder. The `inx-proto` file contains the definition of all available endpoints and below you will see a few example of both simple requests and streaming requests.

---

### Prepare and run files for simple requests

#### Create new file `ReadBlock.js` and add the following code

```javascript
const client = require('./config.js');

// Some console output will be printed in a different color for better readability
const consoleColor = '\x1b[36m%s\x1b[0m';

async function run() {
  // Fetch random tip
  const TipsRequest = { count: 1, allowSemiLazy: false };

  const tipBlockId = await new Promise((resolve, reject) => {
    client.RequestTips(TipsRequest, function (error, answer) {
      if (error) {
        reject(error);
      } else {
        console.log(consoleColor, 'Random tip');
        console.log(answer, '\n');

        const blockId = answer.tips[0].id.toString('hex');
        resolve(blockId);
      }
    });
  });

  // Fetch block
  const blockIdBuff = Buffer.from(tipBlockId.toString(), 'hex');
  const blockId = { id: blockIdBuff };

  await client.ReadBlock(blockId, function (error, answer) {
    if (error) {
      console.log(error);
    } else {
      console.log(consoleColor, 'Block');
      console.log(answer, '\n');
    }
  });

  // Fetch block metadata
  await client.ReadBlockMetadata(blockId, function (error, answer) {
    if (error) {
      console.log(error);
    } else {
      console.log(consoleColor, 'Block Metadata');
      console.log(answer, '\n');
    }
  });
}

run().catch((err) => console.error(err));
```

#### Run `ReadBlock.js`

```sh
node ./ReadBlock.js
```

---

#### Create new file `ReadNodeConfiguration.js` and add the following code

```javascript
const client = require('./config.js');

// Some console output will be printed in a different color for better readability
const consoleColor = '\x1b[36m%s\x1b[0m';

async function run() {
  // Fetch and log node configuration
  await client.ReadNodeConfiguration({}, function (error, answer) {
    if (error) {
      console.log(error);
    } else {
      console.log(consoleColor, 'Node Configuration');
      console.log(answer, '\n');
    }
  });
}

run().catch((err) => console.error(err));
```

#### Run `ReadNodeConfiguration.js`

```sh
node ./ReadNodeConfiguration.js
```

---

#### Create new file `ReadNodeStatus.js` and add the following code

```javascript
const client = require('./config.js');

// Some console output will be printed in a different color for better readability
const consoleColor = '\x1b[36m%s\x1b[0m';

async function run() {
  // Fetch and log node status
  await client.ReadNodeStatus({}, function (error, answer) {
    if (error) {
      console.log(error);
    } else {
      console.log(consoleColor, 'Node Status');
      console.log(answer, '\n');
    }
  });
}

run().catch((err) => console.error(err));
```

#### Run `ReadNodeStatus.js`

```sh
node ./ReadNodeStatus.js
```

---

### Prepare and run files for streaming requests

#### Create new file `ListenToBlocks.js` and add the following code

```javascript
const client = require('./config.js');

// Listen to the stream of blocks
// Further Options:
// client.ListenToSolidBlocks();
// client.ListenToReferencedBlocks();

var call = client.ListenToBlocks();
call.on('data', function (answer) {
  console.log(answer);
});
call.on('end', function () {
  // The server has finished sending
});
call.on('error', function (error) {
  // An error has occurred and the stream has been closed.
});
call.on('status', function (status) {
  // process status
});
```

#### Run `ListenToBlocks.js`

```sh
node ./ListenToBlocks.js
```

---

#### Create new file `ListenToLatestMilestones.js` and add the following code

```javascript
const client = require('./config.js');

// Listen to the stream of latest milestones
var call = client.ListenToLatestMilestones();
call.on('data', function (answer) {
  console.log(answer);
});
call.on('end', function () {
  // The server has finished sending
});
call.on('error', function (error) {
  // An error has occurred and the stream has been closed.
});
call.on('status', function (status) {
  // process status
});
```

#### Run `ListenToLatestMilestones.js`

```sh
node ./ListenToLatestMilestones.js
```

---

#### Create new file `ReadUnspentOutputs.js` and add the following code

```javascript
const client = require('./config.js');

// Listen to the stream of latest milestones
var call = client.ReadUnspentOutputs();
call.on('data', function (answer) {
  console.log(answer);
});
call.on('end', function () {
  // The server has finished sending
});
call.on('error', function (error) {
  // An error has occurred and the stream has been closed.
});
call.on('status', function (status) {
  // process status
});
```

#### Run `ReadUnspentOutputs.js`

```sh
node ./ReadUnspentOutputs.js
```

---

Feel free to try out additional endpoints of the interface as defined in the [inx-proto](https://github.com/iotaledger/inx/blob/develop/proto/inx.proto) file.
