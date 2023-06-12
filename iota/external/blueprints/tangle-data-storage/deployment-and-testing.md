# Deploy and Test the Tangle Data Storage Demo

**To start storing data in the IPFS node and the Tangle, deploy the application and use our graphical user interface to upload file data, retrieve file data, and compare hashes to verify the contents.**

## Prerequisites

To test and deploy this application, you need the following:

- Node.js installed on your device
- A database on [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- An [IPFS node](https://docs.ipfs.io/introduction/overview/)

To edit this application for your own needs, you need knowledge of JavaScript, Node.js, and React.js.

## Deploy the Tangle Data Storage App

To deploy this application on your local network, complete the following instructions. These deployment instructions are also hosted on [GitHub](https://github.com/iotaledger/poc-ipfs/blob/master/README.md).

1. Clone the GitHub repository

    ```bash
    git clone https://github.com/iotaledger/poc-ipfs.git
    cd poc-ipfs
    ```

2. Change into the `api` directory and install the dependencies

    ```bash
    cd api
    npm i
    ```

3. Copy the `src/data/config.template.json` file to the `dist/data` directory and rename it to `config.local.json`

4. Open the `config.local.json` file and configure the API server

    |**Configuration option**|**Description**|**Notes**|
    |:---|:-----|:----|
    |`node` (required)|The IOTA network settings|When choosing a node, consider the IOTA network that you want to use|
    |`ipfs` (required)|Set the `provider` field to the URL of your IPFS node. If your IPFS node requires an authentication token, set this in the `token` field.||
    |`dynamoDbConnection` (required)| Set these fields to the settings for your DynamoDB instance|This database is needed to keep track of transaction data so that it is never lost in the Tangle after a snapshot|
    |`allowedDomains`| Set this field to the domains that may access the API.||

5. From the `api` directory, start the API server in development mode

    ```bash
    npm run start-dev
    ```

6. Change into the `client` directory and install the dependencies

    ```bash
    cd ../client
    npm i
    ```

7. Rename the `public/data/config.template.json` file to `config.local.json`

8. Open the `config.local.json` file and configure the client application

    |**Configuration option**|**Description**|**Notes**|
    |:---|:-----|:----|
    |`apiEndpoint` (required)|Set this field to the URL of the API server that you just started|By default, the API listens on the following URL: `http:localhost:4000`|
    |`ipfsGateway`|Set this field to the IPFS gateway that you want to use to get files from the IPFS network|The default gateway is `https://ipfs.io/ipfs/:hash`|
    |`tangleExplorer`| Set these fields to the URL of the Tangle explorer that you want to use to search for messages on the front end|The default Tangle explorer is `https://explorer.iota.org`|
    |`googleAnalyticsId`| If you have Google Analytics set up for your client, set this field to your Google Analytics ID||

9. Run the client application

    ```bash
    npm run start
    ```

When the client connects to the API, the following page will be opened in your default web browser:

![Upload File for IOTA IPFS Data Storage PoC](/img/blueprints/data-storage-upload.png)

:::info:
The file size limitation is only for the purposes of this blueprint. You can edit this blueprint to allow any file size.
:::

This page is the front end to the application, which you can use to test it.

## Test the Tangle Data Storage App

1. Select a file, and see that the other fields are automatically populated with metadata

    ![Upload File for IOTA IPFS Data Storage PoC - Populated](/img/blueprints/data-storage-upload2.png)

2. Click **Upload** to store the metadata on the IPFS node and the Tangle. If everything went well, you should see a confirmation message.

    ![Uploaded File for IOTA IPFS Data Storage PoC](/img/blueprints/data-storage-upload-finished.png)

3. To validate a file, go to the Retrieve File page.

    ![Retrieve File for IOTA IPFS Data Storage PoC](/img/blueprints/data-storage-upload-retrieve.png)

4. Enter a message ID and click **RETRIEVE**. The message ID will be passed to the API, which will get the IPFS hash from the message's `IndexationPayload` field, which is used to download the file and validate its SHA256 hash against the one stored in the message.

    ![Retrieve File for IOTA IPFS Data Storage PoC](/img/blueprints/data-storage-upload-validated.png)

This completes the full lifecycle for storing, retrieving, and validating a file. The file metadata, SHA256 hash and IPFS hash that are stored in a transaction in the Tangle are immutable. If the file contents that you retrieve from the IPFS node don't match the ones in the Tangle, then the contents of that file can no longer be trusted.

## Next Steps

[Run your own node](https://wiki.iota.org/chrysalis-docs/node_software) and configure the application to connect to it.
