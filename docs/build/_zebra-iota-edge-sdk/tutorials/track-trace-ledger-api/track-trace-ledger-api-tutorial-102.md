# IOTA Track & Trace Ledger APIs 102 Tutorial : Consuming Events

## Introduction

In this tutorial you will learn advanced features of the Track & Trace Ledger APIs concerning consumption of Device Events recorded on the Tangle.

As a continuation to [Tutorial 101](track-trace-ledger-api-tutorial-101.md), we will look into:

1. Retrieving a given number of transactions (`lastN`).
2. Pagination (`limit`). Retrieving a subset of transactions.
3. Retrieving Streams channel information. This feature makes it easy for the consuming clients to implement their own functions by the use of the IOTA Streams libraries to retrieve transactions from the IOTA Tangle. E.g. By using the ['anchors'](https://github.com/iotaledger/tangle.js/tree/main/libs/anchors) utility library Powered by [IOTA Streams](https://github.com/iotaledger/streams).

We will use the following identifiers in this example:

1. Barcode Scanner device id - `Zebra-MC-9200-PA12` and `iphone-A-456789`
2. Barcode Printer device id - `ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224`
3. RFID Reader device id - `MC333R-GI4HG4EU-Vall-1` and `FX9600-Bur-1`
4. RFID Printer device id - `ZQ630-1616588083570`
5. Barcode value - `3700123300014` and `991616586826831`
6. RFID EPC - `urn:epc:id:sgtin:9524444.100000.10` and `4ae80b6a6c81616588146032`

## Tutorial Part I : Barcode Scan Transactions

### List all Barcode Values Scanned

This API endpoint allows you to retrieve a list of all the barcode values that have been scanned corresponding to a given API Key.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan' \
--header 'apikey: <Your API Key>'
```

Response:

```json
[
  {
    "created": "2021-03-24T16:16:20.842Z",
    "updated": "2021-03-24T16:22:31.549Z",
    "totalEventNumber": 3,
    "value": "3700123300014"
  },
  {
    "created": "2021-03-24T12:19:15.883Z",
    "updated": "2021-03-24T12:19:28.813Z",
    "totalEventNumber": 1,
    "value": "991616586826831"
  }
]
```

As seen above, the list of barcode values and the total number of transaction events recorded on the Tangle for each barcode value.

### List all Barcode Scanners Used

Thi API allows you to get a list of all the Barcode scanners devices associated with a given API Key.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/device' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "deviceId": "Zebra-MC-9200-PA12",
    "created": "2021-03-24T16:22:10.500Z",
    "updated": "2021-03-24T16:22:31.549Z",
    "totalEventNumber": 1
  },
  {
    "deviceId": "iphone-A-456789",
    "created": "2021-03-24T16:16:21.346Z",
    "updated": "2021-03-24T16:21:54.731Z",
    "totalEventNumber": 2
  }
]
```

As seen above, you get a list of all the scanners and the total number of transaction events recorded on the Tangle for each device.

### Retrieve the last transaction involving a Barcode Value

This API endpoint allows you to retrieve the last transaction involving a value. By including the URL query parameter `lastN`, the API allows you to retrieve the most recent `N` transactions. In this case we want to retrieve the most recent transaction, so we set the `lastN` parameter equal to `1`.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/3700123300014?lastN=1' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "symbology": "LABEL-TYPE-UPCA",
    "value": "3700123300014",
    "timestamp": "2021-04-11T13:23:28.714Z",
    "deviceId": "Zebra-MC-9200-PA12",
    "type": "scanTransaction",
    "jsonData": {
      "custom": true,
      "timestamp": 1618147420297
    },
    "id": "1a32f9..."
  }
]
```

As seen above we can successfully retrieve the last transaction involving a barcode value.

### Retrieve the transactions of a Scanner using pagination

This API endpoint allows you use pagination to retrieve Barcode scanning devices transactions. By including the URL parameter `limit`, the API allows you to retrieve pages of `N` transactions. In this case we set the limit to `1`, thus we get a response of 1 transaction and a `link` in the headers showing the start message root of the next page of transactions.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/device/Zebra-MC-9200-PA12?limit=1' \
--header 'apikey: <your API Key>'
```

Response

```json
[
  {
    "transactionId": "1a32f9...",
    "value": "3700123300014",
    "deviceId": "Zebra-MC-9200-PA12",
    "type": "scanTransaction",
    "id": "ae80baf..."
  }
]
```

Response headers

```
link -> </scan/3700123300014?startRoot=656b49...&limit=1>; rel="next"; type="application/json"
```

As seen above, one can use the information in the header to retrieve the next page of transactions. Pagination is also available for transactions involving a `value` and `EPC`

### Obtain the details of the Streams Channel used to track a Barcode Value

This API allows you to retrieve the IOTA Streams channel that contains all read transactions of a respective Barcode value.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/channels/3700123300014' \
--header 'apikey: <your API Key>'
```

Response

```json
{
  "locator": "urn:iota-streams:devnet:1c696e5533bdc7...:2201556d9ea2a31145475b5b:5d3eae80b9be9fbcaf4d788e"
}
```

With the above information, one can use the IOTA Streams libraries, for instance the [anchors library](https://github.com/iotaledger/tangle.js/tree/main/libs/anchors), to retrieve the transactions from their own application. In this case the network is `devnet` and it is followed by the channel ID. You need to take into account that the Streams Channel used is an encrypted one, thus the channel ID has three colon-separated components: the channel address, the announce message ID and the keyload message ID. The usage of the Javascript libraries might facilitate the consumption of Track and Trace Ledger data in different application contexts, for instance, to enable a more efficient refresh of a Web UI.

## Tutorial Part II : RFID Read Transactions

### List all EPCs Read

This API allows you to retrieve a list of all the RFID tags EPCs that have been read and associated to the given API Key as follows:

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "created": "2021-03-24T15:24:17.356Z",
    "updated": "2021-03-24T16:45:49.284Z",
    "totalEventNumber": 3,
    "epc": "urn:epc:id:sgtin:9524444.100000.10"
  },
  {
    "created": "2021-03-24T12:42:35.565Z",
    "updated": "2021-03-24T12:42:46.868Z",
    "totalEventNumber": 1,
    "epc": "4ae80b6a6c81616588146032"
  }
]
```

As seen above the list of all the RFID tags EPCs and the total number of transaction events recorded on the Tangle for each RFID EPC.

### List all RFID Readers Used

This API allows you to retrieve a list of all the RFID Readers (devices) associated to the given API Key

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/device' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "deviceId": "FX9600-Bur-1",
    "created": "2021-03-24T16:45:38.920Z",
    "updated": "2021-03-24T16:45:49.284Z",
    "totalEventNumber": 1
  },
  {
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "created": "2021-03-24T15:24:17.900Z",
    "updated": "2021-03-24T16:44:28.225Z",
    "totalEventNumber": 2
  }
]
```

As seen above, the list of RFID readers and the total number of transaction events recorded on the Tangle for each device.

### Retrieve the last transaction involving an RFID EPC

This API endpoint allows you to retrieve the last transaction involving an RFID EPC. By including the URL parameter `lastN`, the API allows you to retrieve the most recent `N` transactions. In this case we want to retrieve the most recent transaction, so we set the `lastN` parameter equal to `1`.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/urn:epc:id:sgtin:9524444.100000.10?lastN=1' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "antennaId": "1",
    "peakRssi": -42,
    "epc": "urn:epc:id:sgtin:9524444.100000.10",
    "timestamp": "2021-04-11T13:21:57.152Z",
    "location": {
      "latitude": 44,
      "longitude": -8
    },
    "type": "readTransaction",
    "jsonData": {
      "timestamp": 1618147330641
    },
    "id": "1c696e55..."
  }
]
```

As seen above we can successfully retrieve the last transaction involving an RFID EPC.

### Retrieve the transactions of a Reader using pagination

This API endpoint allows you to use pagination to retrieve RFID readers devices transactions. By including the URL parameter `limit`, the API allows you to retrieve pages of `N` transactions. In this case we set the limit to `1`, thus we get a response of 1 transaction and a `link` in the headers showing the start message root of the next page of transactions.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/device/MC333R-GI4HG4EU-Vall-1?limit=1' \
--header 'apikey: <your API Key>'
```

Response body:

```json
[
  {
    "transactionId": "1c696e55...",
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "epc": "urn:epc:id:sgtin:9524444.100000.10",
    "type": "readTransaction",
    "id": "2201556d..."
  }
]
```

Response headers:

```
link →</read/urn:epc:id:sgtin:9524444.100000.10?startRoot=5d3eae...&limit=1>; rel="next"; type="application/json"
```

As seen above, one can use the information in the header to retrieve the next page of transactions.

### Obtain the details of the Streams Channel used to track an EPC

This API allows you to retrieve the details of the IOTA Streams channel that contains all read transactions of a respective RFID EPC.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/channels/urn:epc:id:sgtin:9524444.100000.10' \
--header 'apikey: <your API Key>'
```

Response

```json
{
  "locator": "urn:iota-streams:devnet:d0d508c7ce84b...:4d14480f2fe8f7fbad65e12f:137bf7689bde186fc9ffef8c"
}
```

With the above information, one can use the IOTA Streams utility libraries, such as the [anchors library](https://github.com/iotaledger/tangle.js/tree/main/libs/anchors) to retrieve the transactions from their own application. The usage of the Javascript libraries might facilitate the consumption of Track and Trace Ledger data in different application contexts, for instance, to enable a more efficient refresh of a Web UI.

### Advanced use of EPC Identifiers

1. Example of use of a GS1 EPC represented as URN. The API will validate the issued EPC.

A GS1 EPC can be represented as a `URN` (Uniform Resource Name). e.g. `urn:epc:id:sgtin:9524644.100000.10`. In this case we see that the EPC corresponds to a trade item since it is an `sgtin` URN.

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "urn:epc:id:sgtin:9524644.100000.10",
  "timestamp": "2020-10-09T12:33:59.452Z",
  "type": "readTransaction",
  "location": {
    "latitude": 41.65518,
    "longitude": -4.72372
  }
}'
```

```
202 Accepted
```

Response header:

The `location` header contains a reference to the operation log entry that allows to monitor progress.

```
Location: /operation-log/65b94c6d...
```

As seen above, the example GS1 URN EPC was validated and successfully recorded in the Tangle.

2. Example of use of GS1 EPC represented in hex format.

A GS1 EPC can be represented in hex format, e.g. `4ae80b6a6c81618147317153`. The API will validate the issued EPC. In this case the expected length of the hex format EPC is `24` characters, i.e. `96` bits.

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "4ae80b6a6c81618147317153",
  "timestamp": "2020-10-09T12:33:59.452Z",
  "type": "readTransaction",
  "location": {
    "latitude": 41.65518,
    "longitude": -4.72372
  }
}'
```

```
202 Accepted
```

Response header:

The `location` header contains a reference to the operation log entry that allows to monitor progress.

```
Location: /operation-log/2a3114...
```

As seen above, the example GS1 Hexadecimal EPC was validated and successfully recorded in the Tangle.

3. Example of use of VDA EPC (VDA is the Association of the Automotive Industry in Germany).

An EPC can also be represented as VDA object e.g. `urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012`. The API will validate the issued EPC and extract the relevant data from the VDA as an object. The data validated and extracted include `Data Identifier`, `Company ID`, `Issuing Agency`, `Part Number` and `Serial Number`. The supported VDA Identifiers are those specified by: VDA 4994 (Global Transport Label), VDA 5500, VDA 5510 and VDA5530.

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",
  "timestamp": "2020-10-09T12:33:59.452Z",
  "type": "readTransaction",
  "location": {
    "latitude": 41.65518,
    "longitude": -4.72372
  }
}'
```

```
202 Accepted
```

Response header:

The `location` header contains a reference to the operation log entry that allows to monitor progress.

```
Location: /operation-log/2a3114...
```

As seen above, the example VDA was validated and successfully recorded in the Tangle.

4. Example of a transaction with the location as a Geo URI.

The API also supports locations as Geo URI strings as seen in the example below:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",
  "timestamp": "2020-10-09T12:33:59.452Z",
  "type": "readTransaction",
  "location": "geo:37.786971,-122.399677"
}'
```

```
202 Accepted
```

Response header:

The `location` header contains a reference to the operation log entry that allows to monitor progress.

```
Location: /operation-log/2a3114...
```

## Tutorial Part III : Print Transactions

### Get a list of the RFID tag EPC or barcode values that have been printed

You can get a list of EPCs of all the RFID tags printed and Values of all the Barcodes printed as follows:

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "created": "2021-03-24T12:14:52.401Z",
    "updated": "2021-03-24T12:15:06.576Z",
    "totalEventNumber": 1,
    "epcOrValue": "1ae00b6a6c81617588083570"
  },
  {
    "created": "2021-03-24T12:14:43.959Z",
    "updated": "2021-03-24T12:14:52.214Z",
    "totalEventNumber": 1,
    "epcOrValue": "881616588083570"
  }
]
```

You can see from the response that either the barcode value or the RFID tags EPC is provided and the total number of print transaction events associated. Hence you can use the returned EPC or value to get a list of all transactions associated to it.

### List all Printers Used

You can get a list of all the printers as follows.

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/device' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "deviceId": "ZQ630-1616588083570",
    "created": "2021-03-24T12:14:44.364Z",
    "updated": "2021-03-24T14:01:34.291Z",
    "totalEventNumber": 3
  },
  {
    "deviceId": "ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224",
    "created": "2021-03-24T12:10:11.174Z",
    "updated": "2021-03-24T14:05:22.187Z",
    "totalEventNumber": 2
  }
]
```

As seen above we were able to retrieve a list of all printers and the total number of print events associated to the device.

### Retrieve all printing operations made with a printer using pagination

This API endpoint allows you use pagination to retrieve RFID/Barcode printer devices transactions. By including the url parameter `limit`, the API allows you to retrieve pages of `N` device transactions. In this case we set the limit to `1`, thus we get a response of 1 transaction and a `link` in the headers showing the start message root of the next page of transactions.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/device/ZQ630-1616588083570?limit=1' \
--header 'apikey: <your API Key>'
```

Response body:

```json
[
  {
    "transactionId": "1c696e55...",
    "type": "printTransaction",
    "value": "881618147363842",
    "deviceId": "ZQ630-1616588083570",
    "id": "2201556..."
  }
]
```

Response header:

```
link →</print/device/ZQ630-1616588083570?startRoot=c705240...&limit=1>; rel="next"; type="application/json"
```

As seen above, one can use the information in the header to retrieve the next page of transactions.

## Next Steps

You can learn how to register decentralized identities (DIDs) for supply chain participants by reading [Tutorial 103](track-trace-ledger-api-tutorial-103.md)
