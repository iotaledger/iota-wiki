# IOTA Track & Trace Ledger APIs 101 Tutorial : Device Events

In this tutorial you will learn how to use the IOTA Track & Trace Ledger APIs to create trusted and decentralized supply chains using IOTA and Automatic Identification Technologies. If you are already familiar with [barcode and RFID technologies](#automatic-identification-technologies) you can directly jump to read the section on the [IOTA Tangle and DLT](#dlt-technologies-and-iota). If you are already familiar with IOTA and DLT or RFID you can jump directly to the [tutorial](#tutorial-prerequisites).

## Introduction

Automatic Physical Item Identification is one important aspect when it comes to decentralised trade and supply chains leveraging Distributed Ledger Technologies (a.k.a. blockchains). In this tutorial we are going to provide an introduction to different automatic identification technologies and how they can be seamlessly integrated with an IOTA Ledger (the Tangle) through simple but yet powerful REST APIs. The _Track and Trace Ledger API_ is offered as a service (currently in a sandbox-preview version mode) by Zebra Technologies and the IOTA Foundation, through the _Zebra Savanna Data Services_ platform. Actually, such APIs are a thin wrapper on top of the **IOTA Streams** technology, a second layer DLT protocol.

The tutorial starts with an introduction to Automatic Identification Technologies, DLTs and IOTA. Then, some of the potential applications of those technologies are briefly discussed. Finally, a programming tutorial on the _Track and Trace Ledger API_ is given, together with an introduction to the usage of IOTA APIs and Web-based explorer tools.

## Automatic Identification Technologies

### Overview

The problem of Automatic Identification and Data Capture (AIDC) has been tackled since the 1970s, with the introduction of linear barcodes. The final aim is to identify (i.e. the recognition of one entity versus another) and capture data (including but not limited to a Digital ID) about trade items facilitating tracking, processing, and inventory processes. For instance, in the retail domain, at the supermarket (or any other point-of-sale) the cashier checks out consumer goods by just scanning a linear barcode printed within the item’s label. AIDC technologies allow for greater safety, reliability, speed and efficiency of supply chains.
AIDC technologies include different variants of barcodes, QR Codes, smart cards, biometrics, RFID or even machine learning / deep learning techniques. In this first tutorial we will be focusing on barcodes and RFID.
There are two different concerns to be addressed in AIDC:

- **Identification Scheme** i.e. representation scheme used for ID data. For instance if the identification scheme is numeric, it should define how many digits are used in total and what is the meaning of each digit or group of digits. Error check digits might also be present.

- **Data Carrier**. A Data Carrier is a means to represent AIDC data in a machine readable form. RFID is a data carrier technology based on electronic tags whereas a barcode is a data carrier based on printed symbols.

### Barcodes

A number of national and global standardisation bodies have developed barcode technical standards, namely the JTC1 subcommittee of ISO/IEC. Those standards are complemented and extended with others that have to do with global business communication such as [GS-1](https://www.gs1.org/).

In addition to the identification scheme used, the symbology is an important concern when it comes to barcode usage. **Symbology** determines how ID data is encoded, so that it is **machine-readable**. For instance, linear barcode symbologies use some pattern of adjacent, varying width, parallel, rectangular dark bars and pale spaces.

The combination of a symbology together with an identification scheme yields different kinds of barcodes. For instance, the _EAN/UPC Composite_ symbology family includes, among others, the **EAN-13** barcode (that can carry GTIN-13 identifiers) and the **UPC-A** barcode (that can carry GTIN-12 identifiers).

_EAN-13_ barcodes are those which are normally found in consumer goods and its identification scheme is composed by the following elements, as specified by the GS-1 Global Trade Identification Number 13 (GTIN-13) standard:

- A [company prefix](https://www.gs1.org/standards/id-keys/company-prefix) composed by the country of origin plus a manufacturer code (assigned by the country authority). This can take 7 digits or more.

- The next digits, up to the 12th, encode the product code. The product code is self-assigned by the manufacturer.

- The last digit (the 13th) is a [control digit](https://www.gs1.org/services/check-digit-calculator) used to verify that a barcode has been scanned correctly.

This [GS-1 search service](https://gepir.gs1.org/index.php/search-by-gtin) allows you to decode some barcodes.

Sometimes barcodes include (printed) a human readable interpretation i.e. characters, such as letters and numbers. They are there just in case they need to be read and manipulated by humans.

Barcode decoding is realised through specialised electronic devices (_scanners_) that generate identification events to be consumed by an application. A scanner has to provide to the application the symbology used, the identification scheme (i.e what kind of barcode has been identified) and the ID data. Zebra Technologies is one of the leading providers of scanning technology for professional usage. In addition, the advent of smartphone devices equipped with powerful cameras and CPUs/GPUs capable of executing machine learning algorithms has also brought scanning capabilities to consumers and end users.

### RFID

[RFID](https://rainrfid.org/wp-content/uploads/2020/01/What-is-RAIN-E-Book-Winter-2019-Spring-2020_v3.1.pdf) is an AIDC technology that relies on radio frequency (RF) waves. RFID is composed of:

- RFID Tags. They are very tiny electronic devices incorporated into or attached to any kind of object (products, tools, animals, goods, etc.). RFID tags are capable of storing (in a non-volatile memory) and transmitting digital data.

- A specialized device, _RFID Reader_ and antennas.

There are different classes of tags suitable to different applications and they can operate at different radio frequencies. They can be summarised as follows:

- _Passive Tags_ which are enabled to transmit their data when they are close to a Reader. They are cheaper and smaller which makes them easy to incorporate or attach to items. Reading ranges can vary from centimetres to tens of metres. Storage capacity is low (in the range of hundreds of bytes).

- _Active Tags_ which contain a battery that provides the energy to the antenna, which is necessary to send encoded radio waves to the Reader.

Active tags are more expensive, have higher capacity (in the range of Kilobytes) and are used to track high value items that have to be scanned over longer distances (in the range of hundreds of meters).

Tags may either be read-only, having a factory-assigned serial number or may be read/write, where object-specific data can be written into the tag by the system user. “Blank” tags may be written by the end user using an RFID Printer.

RFID is similar to barcode technology in concept but presents several differences that makes it suitable for item level tracking in supply chains:

- RFID does not require a visible tag or label to read its stored data, and as a result, data can be gathered without manual intervention.

- The RFID Reader can automatically receive information from multiple tags. As a consequence, it is possible to capture the information concerning an entire shipment or pallet composed by multiple items.

- The RFID Reader can operate at greater distances and tagged objects can be read in different orientations.

- Tags can store more data than barcodes, i.e. not only an ID but also other characteristics of an item such as, size, weight, production date, etc.

To ensure _interoperability_, RFID is a technology regulated by [different ISO/IEC standards and by EPCGlobal](https://www.electronics-notes.com/articles/connectivity/rfid-radio-frequency-identification/standards-iec-iso-epcglobal.php), a GS-1 initiative.

The data stored by an RFID tag usually includes an _Electronic Product Code_ (EPC). An EPC is aimed at being a universal identifier (ID) for any physical object. EPCs can have multiple representations, human-readable (for instance as URIs) or machine-readable (binary encoding within the memory of RFID tags). The [GS1’s EPC Tag Data Standard](https://www.gs1.org/standards/epc-rfid/tds) (TDS) specifies data formats and encodings for EPCs to be stored on passive RFID (UHF Gen 2) Tags. It is important to note that RFID tags may contain other data besides EPC identifiers (and in some applications may not carry an EPC identifier at all).

## DLT Technologies and IOTA

A _Ledger_ is an information store that keeps final and definitive (_immutable_) records of transactions. A _Distributed Ledger_ is a type of ledger that is shared, replicated, and synchronized in a distributed and decentralized manner. A decentralised system is a distributed system wherein control is distributed among the persons or organizations participating in the operation of the system.

[IOTA](https://iota.org/) is an open source DLT that enables sharing of any type of data (including IoT data) guaranteeing traceability of their source, alongside with integrity and immutability of the shared information, and dedicated access management, e.g., who can read what. This is possible using 2nd Layer ledger protocols,supported by the [IOTA Streams Framework](https://blog.iota.org/iota-streams-update-september-2020-c3b8668e231e). These types of transactions are called data (or zero-value) transactions.

In contrast with traditional blockchain-based DLTs, IOTA is based on a Directed Acyclic Graph, the Tangle. This [video](https://www.youtube.com/watch?v=ivWqqfzunhI) explains how the IOTA’s Tangle works. [Here](https://docs.iota.org/docs/getting-started/1.1/introduction/overview) you can find a get started guide intended to IOTA’s developers with additional references.

### Applications of AIDC Technologies and DLT

AIDC Technologies, such as RFID or barcodes, combined with DLT technologies, such as IOTA, can be enablers of a new generation of _decentralised applications_. The final aim is to utilize the (directly or indirectly) captured information through AIDC to build a digital representation (_Digital Twin_) of physical items and their context (location, ownership, etc.). Such Digital Twin representation can be published on a DLT, a secure, decentralised and trusted database that preserves integrity and acts as the single source of truth. Therefore, the DLT actually allows multiple stakeholders to share data in real time across the supply chain (on a B2B or B2C scenario).

One example is the track and trace of different physical items to optimise or to make a process more visible and transparent. See for instance this [video](https://www.youtube.com/watch?v=v-4-4ZN88-k) from Zebra Technologies and IOTA. A tyre, which has an RFID tag attached, is followed using RFID. Thus, every time the tyre passes through a touch point (factory, warehouse, transportation, garage), the tyre movement is recorded by the RFID reader and published to the IOTA Ledger, until it reaches the final car where it will be mounted. Later, the driver (the consumer) can also get access and know all the lifecycle of the tyre being used in her car. Similar traceability processes could be enabled with other products of interest to businesses and consumers, for instance food traceability from the farm to the table.

Another example is paperless trade involving multiple countries and stakeholders. You can watch [this video](https://www.youtube.com/watch?v=bnAfclXTaeI) where IOTA Foundation and Trade Mark East Africa are digitising cross border trading using a decentralised system based on IOTA. In this case IOTA and Zebra are using RFID technologies to generate different events that track the evolution of consignments (and their individual items) along the supply chain and global trade stakeholders. The combination of AIDC and DLT allows to increase competitiveness by making trade processes more efficient, reducing delivery disputes and uncertainty.

## Zebra Savanna Track and Trace Ledger API Overview : Device Events

[Zebra Savanna](https://www.zebra.com/es/es/solutions/intelligent-edge-solutions/savanna.html) is a cloud platform, available to developers, that offers different APIs as a service that can facilitate building advanced cloud applications that exploit AIDC (RFID, barcode, etc.) technologies. Zebra Savanna has been conceived to work seamlessly with Zebra devices, but can also be used within other contexts.

Under its sandbox environment, Zebra Savanna has published a new API, the [Track and Trace Ledger API](https://developer.zebra.com/apis/iota-0) which allows to automatically publish and consume scan (barcode), read (RFID) or print transactions (possibly originated from Zebra devices) to an IOTA Ledger (the Tangle). As a result new applications such as those described above can be easily developed.

## Tutorial Prerequisites

In order to execute this tutorial the following prerequisites have to be met:

- Zebra Savanna developer account. You have to go to [https://developer.zebra.com](https://developer.zebra.com) and then sign up to obtain a new account.
- Zebra Savanna API Key. After signing up/in You need to go to [https://developer.zebra.com/user/me/apps](https://developer.zebra.com/user/me/apps) in order to register a new application and obtain an API Key that will have to be used to get access to the API.

The tutorial uses cUrl commands throughout, but is also available as [Postman documentation](https://documenter.getpostman.com/view/579084/TVYJ5GcY). All the IOTA hashes (ids) shown have been ellipsed for the sake of legibility.

The tutorial performs a walkthrough over the different APIs offered: the scan API which allows to record Device Events (transactions) originating from different devices: barcode scan devices, RFID Readers and printers.

Last but not least, it is important to note that the current API implementation sandbox makes use of the IOTA’s **Devnet** network. This network is composed of a limited number of nodes, mainly contributed by the IOTA Foundation. Security and confidentiality of transactions issued in this network are the same as per the IOTA Mainnet.

## Tutorial Part I : Barcode scan transactions

### Create a new barcode scan transaction

Using your API Key a new barcode scan transaction (device event) can be published to the Track and Trace Ledger. It is the same operation that would be executed by a scanning device (Zebra scanner, mobile phone, etc.) once a barcode has been scanned. You can observe that the payload includes the identifier of the scanning device (under the key `deviceId`), the type of transaction (`scanTransaction`), the device’s generated timestamp, the symbology, the value read (observe that is is an EAN-13 barcode), the location (optional) and other extended information that an application may need (`jsonData` field, which is optional).

Request:

```shell
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan' \
--header 'apikey: <Your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
   "symbology": "EAN-13",
   "value": "3700123300014",
   "timestamp": "2020-10-14T16:10:07.652Z",
   "location":{
      "latitude": 44.1,
      "longitude": -8
   },
   "deviceId": "iphone-A-456789",
   "type": "scanTransaction"
}'
```

```
202 Accepted
```

Response header:

```
Location: /operation-log/774b824637986d...
```

After executing the API operation, an asynchronous task (which can last tens of seconds) will be launched so that the item is started to be tracked on the Tangle and the data is properly stored on the DLT. To follow the progress of such an operation under the `location` header you will find a resource that provides access to a log entry where you can follow the operation's status. For instance, if you perform

```shell
curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/operation-log/774b824637986...' \
--header 'apikey: <Your API Key>'
```

you can get access to the status of the operation that, _once completed_, will look like as follows:

```json
{
  "created": "2021-08-05T06:59:14.376Z",
  "completed": "2021-08-05T06:59:46.577Z",
  "id": "774b824637986d...",
  "epcOrValue": "3700123300014",
  "operationType": "scan",
  "subOperationType": "publish",
  "status": "ok",
  "operationResult": "{\"transactionId\":\"8f66478e4c9c75f1b56f2b3e\",\"locator\":\"urn:iota-streams:devnet:0773c093968256f...:6ca9c4b217ce9510ab1311c8:ea3451da6be1b53bcaeddbdf\"}"
}
```

Note: When the operation has not been completed yet, the operation log entry will have a `status` key with value `pending` and no `operationResult`. You need to take into account that the average duration of operations is around twenty seconds.

Note: For monitoring the operation's progress you will need to poll the referred entry log resource. In the future, the API itself will provide a Websocket / Webhook mechanism to notify operations completion, so that polling can be avoided.

If everything went well the `status` key will contain the `ok` string and the `operationResult` member will contain a JSON string that
can be parsed to obtain the transaction identifier `8f66478e4c9c75f1b56f2b3e`. In addition, each ID involved during scan processes is associated with an Streams Channel (found under the `locator` field), so that it is very easy to track what is happening with a particular item . As a result, through the functionality offered by IOTA Streams, one can access the Streams channel associated with the scan item and retrieve all transactional data, i.e. the data is stored on the Tangle guaranteeing immutability and confidentiality.

### Get the details of a barcode scan transaction

We can obtain the details of our scan transaction by using the identifier obtained after creating the barcode scan transaction and the value of the barcode as seen in the previous step. Behind the scenes, the API will query the IOTA Tangle and obtain our data. You can observe that the query has provided some extra details about our transaction under the `jsonData` field: A server-side timestamp.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/transaction/3700123300014/8f66478e4c...' \
--header 'apikey: <Your API Key>'
```

Response:

```json
{
  "symbology": "EAN-13",
  "value": "3700123300014",
  "timestamp": "2020-10-14T16:10:07.652Z",
  "deviceId": "iphone-A-456789",
  "type": "scanTransaction",
  "location": {
    "latitude": 44.1,
    "longitude": -8
  },
  "jsonData": {
    "timestamp": 1616588356605
  },
  "id": "8f66478e4c..."
}
```

Later, we could scan the same item, from another location and using another device `Zebra-MC-9200-PA12`, and a similar transaction would be issued.

### Obtain a list of the scan transactions associated to an item

You can know what has been happening with an item (i.e. transactions involved) just by supplying the item’s barcode value to the API as follows. As a result you will obtain an array list with all the transactions involving such an item.

Request:

```
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/3700123300014' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "symbology": "EAN-13",
    "value": "3700123300014",
    "timestamp": "2021-03-24T16:10:07.652Z",
    "location": {
      "latitude": 44.1,
      "longitude": -8
    },
    "deviceId": "iphone-A-456789",
    "type": "scanTransaction",
    "jsonData": {
      "timestamp": 1616602581884
    },
    "id": "dba665b80..."
  },
  {
    "symbology": "EAN-13",
    "value": "3700123300014",
    "timestamp": "2021-03-24T19:11:07.652Z",
    "location": {
      "latitude": 46.7,
      "longitude": -4
    },
    "deviceId": "Zebra-MC-9200-PA12",
    "type": "scanTransaction",
    "jsonData": {
      "timestamp": 1616602930894
    },
    "id": "8f66478e4c..."
  }
]
```

### Obtain a list of the transactions made with a scanning device

The API is designed so that it is also possible to know all the transactions that have originated from a particular scanning device. For such purpose, a dedicated Stream Channel is also maintained for each scanning device.

You can observe that a device transaction contains a reference to the corresponding transaction at item level (`transactionId` field).
Using such transaction ID you can get access to all the transaction details through the API call previously described.
As it happens with item value ID transactions described above, the information can be accessed directly through the Tangle using the [IOTA Streams](https://github.com/iotaledger/Streams) framework and [utility libraries](https://github.com/iotaledger/tangle.js/tree/main/libs/anchors).

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/device/Zebra-MC-9200-PA12' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "transactionId": "dba665b80...",
    "value": "3700123300014",
    "deviceId": "Zebra-MC-9200-PA12",
    "type": "scanTransaction",
    "id": "6dcc57d..."
  }
]
```

## Tutorial Part II : RFID Read Transactions

### Create a new RFID read transaction

Every time an RFID reader reads an RFID tag a new device event (transaction) to the Tangle is generated as follows.

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "urn:epc:id:sgtin:9524444.100000.10",
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

Response Header:

```
Location: /operation-log/9fd5b55c8c1...
```

You can see that for RFID data the type of transaction is `readTransaction` and it includes the **EPC** just read. Other technical information about the antenna involved, signal and device is also provided. The location where the transaction happened is also sent, in this case as GPS coordinates.

The response obtained is the same as it happens with barcode scanning transactions. The `location` header includes a reference to an operation log entry that will allow to follow the operation progress. Once the operation is completed a new Streams channel to track the concerned EPC (`urn:epc:id:sgtin:9524444.100000.10`) will be created and the data will be recorded immutably. As it happens with barcode scanning transactions, there is a transaction id which corresponds to the messageID on the IOTA Streams Channel.

Now imagine that the tracked item (a consignment in this case) has now reached another location, a customs post, for instance. At that new location its RFID tag is read and another transaction is generated:

Request:

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "deviceId": "FX9600-Bur-1",
  "antennaId": "78904512",
  "peakRssi": -52,
  "epc": "urn:epc:id:sgtin:9524444.100000.10",
  "timestamp": "2020-10-15T06:50:48.801Z",
  "type": "readTransaction",
  "location": {
    "latitude": 42.35022,
    "longitude": -3.67527
  }
}'
```

Response header:

```
Location: /operation-log/0daf15259898...
```

The `location` header contains a reference to the operation log entry.

```
202 Accepted
```

Finally, our initial reader scans another physical item which EPC is `urn:epc:id:sgtin:9524141.012345.Serial`.

### Obtain a list of the RFID read transactions of an EPC

We can obtain a list of all the read transactions involving an EPC, `urn:epc:id:sgtin:9524444.100000.10`, as shown below. You can observe that we get the data of both transactions, and as a result, we are obtaining all the trace that has been followed by our consignment across the trade and supply chain. Similarly as it happens with scan transactions.

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/urn:epc:id:sgtin:9524444.100000.10' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "antennaId": "19495783",
    "peakRssi": -42,
    "epc": "urn:epc:id:sgtin:9524444.100000.10",
    "timestamp": "2020-10-09T12:33:59.452Z",
    "type": "readTransaction",
    "location": {
      "latitude": 41.65518,
      "longitude": -4.72372
    },
    "jsonData": {
      "timestamp": 1602744088719
    },
    "id": "61c4e0..."
  },
  {
    "deviceId": "FX9600-Bur-1",
    "antennaId": "78904512",
    "peakRssi": -52,
    "epc": "urn:epc:id:sgtin:9524444.100000.10",
    "timestamp": "2020-10-15T06:50:48.801Z",
    "type": "readTransaction",
    "location": {
      "latitude": 42.35022,
      "longitude": -3.67527
    },
    "jsonData": {
      "timestamp": 1602744668677
    },
    "id": "4d14480f2..."
  }
]
```

### Get the details of an RFID read transaction

You can get the details of the read transaction as follows:

Request:

```shell
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/transaction/urn:epc:id:sgtin:9524444.100000.10/4d14480f2...' \
--header 'apikey: <your API Key>'
```

Response:

```json
{
  "deviceId": "MC333R-GI4HG4EU-Vall-1",
  "antennaId": "19495783",
  "peakRssi": -42,
  "epc": "urn:epc:id:sgtin:9524444.100000.10",
  "timestamp": "2020-10-09T12:33:59.452Z",
  "type": "readTransaction",
  "location": {
    "latitude": 41.65518,
    "longitude": -4.72372
  },
  "jsonData": {
    "timestamp": 1616599458467
  },
  "id": "4d14480f2..."
}
```

### Obtain a list of the read RFID transactions performed by an RFID Reader

We could get access to all the read transactions performed by our first RFID Reader, identified as `MC333R-GI4HG4EU-Vall-1`. Remember that each Reader has an independent Stream Channel assigned, so that we can retrieve all its activity (preserving data integrity and authenticity). You can observe that all the transactions we have made so far involving such a reader are listed. You can also observe that there is a pointer (`transactionId`) to the corresponding EPC transaction.

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/device/MC333R-GI4HG4EU-Vall-1' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "transactionId": "4d14480f2...",
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "epc": "urn:epc:id:sgtin:9524444.100000.10",
    "type": "readTransaction",
    "id": "6dcc57..."
  },
  {
    "transactionId": "61c4e070...",
    "deviceId": "MC333R-GI4HG4EU-Vall-1",
    "epc": "4ae80b6a6c81616588146032",
    "type": "readTransaction",
    "id": "840fc19..."
  }
]
```

## Tutorial Part III : print transactions

### Create a new print transaction

A Zebra printer can either be a barcode printer or RFID printer. Every time that a printer prints either a barcode or to an RFID tag, a new device event (transaction) related to either the barcode value or the RFID tag EPC is generated. Such transaction could later be used to verify the authenticity of the tag and hence of labeled item.

For barcode printers, the **value** and **symbology** must be supplied where as for the RFID printer the **epc** is supplied.

The `jsonData` field can be used to append any relevant information coming from the printers as illustrated below. For instance, the raw data (in the example below expressed in ZPL language) and the type/format of the data or a hash of it to avoid privacy issues.

Request: barcode value printer example

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/print' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "printTransaction",
    "value": "881616588083571",
    "symbology": "EAN-13",
    "deviceId": "ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224",
    "timestamp": "2021-03-24T12:14:43.570Z",
    "jsonData": {
      "rawDataType": "ZPL",
      "rawData": "^XA^PW583^LL200^LS0^LH0,40^FO480,40^FT480,98^A0I,31,31^FH^FDX Laboratory UL^FS^BY2,3,58^FT530,35^B3I,N,,N,N^FD00614141007349^FS^FT349,9^A0I,28,28^FH^FD00614141007349^FS^PQ1,0,1,Y^XZ"
  }
}'
```

Request: RFID printer example

```sh
curl -i --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/print' \
--header 'apikey: <your API Key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "printTransaction",
    "deviceId": "ZQ630-1616588083577",
    "timestamp": "2021-03-24T12:14:43.570Z",
    "epc": "1ae00b6a6c81617588083570",
    "jsonData": {
        "proof": "44194b0ad488c8ef4b78403bc2184b4a0b2619bd0b1934f40c0a00b9c0c101f2"
    }
}'
```

```
202 Accepted
```

Response Header:

```
Location: /operation-log/5aa5dbf517e...
```

You can see that for printers data, the type of transaction is `printTransaction` and includes either the **EPC** of the RFID tag (this time encoded as an hex value representing 96 bits) or the **Barcode Value** and **symbology** of the barcode to print. The printer device id is also provided.

The response obtained is similar to scan and read transactions, i.e. the resource log entry that allows to follow the operation's progress.
Once the operation has been completed, in the `operationResult` of the log entry you will find a transaction id corresponding to the message ID on the Streams Channel that is being used to record transactions involving the concerned EPC (`1ae00b6a6c81617588083570`) or value (`881616588083571`).

Also you will find the Streams channel IOTA network, `devnet` and channel ID. This information can be used to access the Streams channel and retrieve all transactions related to the printed RFID EPC or Barcode Value.

### Get a list of the print transactions related to an RFID EPC or Barcode value

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/1ae00b6a6c81616588083570' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "type": "printTransaction",
    "deviceId": "ZQ630-1616588083570",
    "timestamp": "2021-03-24T12:14:43.570Z",
    "epc": "1ae00b6a6c81616588083570",
    "jsonData": {
      "timestamp": 1616588092970,
      "proof": "44194b0ad488c8ef4b78403bc2184b4a0b2619bd0b1934f40c0a00b9c0c101f2"
    },
    "id": "656b49d..."
  }
]
```

As seen above we are able to retrieve a list of all print transactions related to `1ae00b6a6c81616588083570`.

### Get the details of a print transaction

You can get the details of a print transaction of an associated EPC or value as follows e.g for a epc `1ae00b6a6c81616588083570` and identifying the transaction id. similarly ou can observe that the query has provided some extra details about our transaction under the `jsonData` field: A server-side timestamp.

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/transaction/1ae00b6a6c81616588083570/656b49d...' \
--header 'apikey: <your API Key>'
```

Response:

```json
{
  "type": "printTransaction",
  "deviceId": "ZQ630-1616588083570",
  "timestamp": "2021-03-24T12:14:43.570Z",
  "epc": "1ae00b6a6c81616588083570",
  "jsonData": {
    "timestamp": 1616588092970,
    "proof": "44194b0ad488c8ef4b78403bc2184b4a0b2619bd0b1934f40c0a00b9c0c101f2"
  },
  "id": "656b49d..."
}
```

### Get a list of the RFID tag EPC or barcode value print transactions by the respective printer

Each printer has an independent Streams Channel assigned as well enabling us to retrieve all its activities (preserving data integrity and authenticity). We can retrieve a list of all print transactions from device `ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224` as shown below.

Request:

```sh
curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/device/ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224' \
--header 'apikey: <your API Key>'
```

Response:

```json
[
  {
    "transactionId": "656b49d...",
    "type": "printTransaction",
    "value": "881616588083570",
    "deviceId": "ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224",
    "id": "2df2720..."
  },
  {
    "transactionId": "e453d1...",
    "type": "printTransaction",
    "value": "881616588083571",
    "deviceId": "ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224",
    "id": "1a32f9..."
  }
]
```

We can successfully get a list a all the print transactions associated with a device.

## Next Steps

You can learn how to use more advanced features of the Track & Trace APIs in [Tutorial 102](track-trace-ledger-api-tutorial-102.md#Introduction).

You can learn how to register **Business Events** (serialized as GS1 EPCIS 2.0) on the Tangle by continue reading the [201 Tutorial](track-trace-ledger-api-tutorial-201.md).

## Device Events API Roadmap

The Track and Trace Ledger API (sandbox version) opens up a new world of business opportunities and applications thanks to the combination of IOTA and AIDC technology. IOTA Foundation and Zebra technologies intend to continue working on improving and polishing the API by making it enterprise-ready and available on ZebraNet, an IOTA network specifically devoted to Zebra Savanna developers. Some of the upcoming planned features are targeted to improved performance, scalability and robustness. For instance, transaction filtering by date and further alignment / harmonization with GS1 or other Global Trade and Supply Chain industry standards.
