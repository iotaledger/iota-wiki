# IOTA Track & Trace Ledger APIs 201 Tutorial : Business Events

In this tutorial you will learn how to use the IOTA Track & Trace Ledger APIs to create trusted and decentralized supply chains using IOTA and business events compliant with [GS1 EPCIS 2.0](https://github.com/gs1/EPCIS/).

If you are already familiar with [GS1 EPCIS](https://www.gs1.org/docs/epc/EPCIS_Guideline.pdf) you can directly jump to the [Use Case](#use-case). An introduction to IOTA can be found on the [101 Tutorial](track-trace-ledger-api-tutorial-101.md#dlt-technologies-and-iota).

## Introduction

The overall goal of EPCIS is to enable disparate supply chain actors to create and share event visibility data (in the form of business events), both within and across enterprises. Such events represent the _WHAT, WHERE, WHEN and WHY_ about an object in the supply chain. EPCIS 2.0 serializes events into [JSON-LD](https://json-ld.org/primer/latest/), a JSON-based format that enables extensibility through Linked Data. EPCIS also defines a vocabulary ([Core Business Vocabulary](https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-r-2016-09-29.pdf)) that defines general purpose business terms with well-defined semantics across industries.

Business Events are complementary to Device Events, already introduced by the [101 Tutorial](track-trace-ledger-api-tutorial-101.md#tutorial-part-i--barcode-scan-transactions). A Business Event carries semantic information whereas a Device Event is closer to the [AIDC](track-trace-ledger-api-tutorial-101.md#automatic-identification-technologies) domain. The relationship between Device Events and Business Events is depicted by the figure below.

Typically, one or more Device Events (for instance RFID Read Device Events) yield to a Business Event. The transformation from a Device Event to a Business Event needs contextual or situational information that might depend on each application. Particularly, Business Events need _Reference ("Master") Data_ to refer to. _Reference Data_ can represent business locations, read points, devices, product classes, etc. In contrast to event visibility data, that is continuously generated, additions or changes to Reference Data happen sporadically.

![Common Record of Truth](/img/track-trace-ledger-api/tangle-supply-chain-common-record-of-truth.png 'Common Record of Truth')

## Use Case

The focus of our tutorial will be a use case concerning the automotive industry. Concretely, a part (for instance a car engine) that is manufactured by a tier-1 supplier and then mounted by an OEM on a car, as conceptually depicted by the figure above.

For the purpose of our tutorial, the process starts when our part manufacturing process is completed at the supplier's factory. Once it has been being encoded and labeled (using RFID, for instance), the part in question goes to the supplier's warehouse where it is stored. Eventually, such part will shipped to the OEM via a logistics service provider. Afterwards, the part will be received at the OEM's Factory and finally mounted on a target car.

This complex process can be modelled through EPCIS Business Events. Furthermore, using the IOTA DLT a single source of truth can be immutably recorded on the Tangle, allowing the different actors (supplier, logistics, OEM, etc.) to build interoperable, trusted, transparent and accountable supply chains using a decentralised approach.

As this process is rather complex we will only model three events:

- The storage of the part at the Supplier's Warehouse
- The shipping of the part from the Supplier to the OEM (without taking into account the logistics interactions)
- The reception of the part by the OEM

In addition, we need to model the following business locations as Reference Data:

- The Supplier's Factory
- `Door 1` of the Supplier's Factory Warehouse from which parts enter into the Warehouse
- `Door 2` of the Supplier's Factory Warehouse from which parts exit the Warehouse and are shipped
- The OEM's Factory

## Zebra Savanna Track and Trace Ledger API Overview

[Zebra Savanna](https://www.zebra.com/es/es/solutions/intelligent-edge-solutions/savanna.html) is a cloud platform, available to developers, that offers different APIs as a service that can facilitate building advanced cloud applications that exploit AIDC (RFID, barcode, etc.) technologies. Zebra Savanna has been conceived to work seamlessly with Zebra devices, but can also be used within other contexts.

Under its sandbox environment, Zebra Savanna has published a new API, the [Track and Trace Ledger API](https://developer.zebra.com/apis/iota-0) which allows to automatically publish and consume Device Events (read, scan, print) and Business Events to an IOTA Ledger (the Tangle). As a result, supply chain use cases such as the one described above can be easily developed.

## Tutorial Prerequisites

In order to execute this tutorial the following prerequisites have to be met:

- Zebra Savanna developer account. You have to go to [https://developer.zebra.com](https://developer.zebra.com) and then sign up to obtain a new account.
- Zebra Savanna API Key. After signing up/in You need to go to [https://developer.zebra.com/user/me/apps](https://developer.zebra.com/user/me/apps) in order to register a new application and obtain an API Key that will have to be used to get access to the API.

The tutorial uses cUrl commands throughout, but is also available as [Postman documentation](https://documenter.getpostman.com/view/579084/TVYJ5GcY). IOTA hashes (ids) shown might have been ellipsed for the sake of legibility.

Last but not least, it is important to note that the current API implementation sandbox makes use of the IOTA’s **Devnet** network. This network is composed of a limited number of nodes, mainly contributed by the IOTA Foundation. Security and confidentiality of transactions issued in this network are the same as per the IOTA Mainnet.

## Tutorial Part I : Reference Data

Using your API Key you can create the different business locations we are going to refer to. Reference Data is represented using a vocabulary that import terms both from GS1 and [schema.org](https://schema.org).

### Create supplier business locations (Reference Data)

Here we create three different locations: the main Factory location and two sub-site locations: `Door 1` and `Door 2` of the Factory's Warehouse. You can observe that locations are uniquely identified by a [SGLN](https://gs1it.org/content/public/e0/6d/e06d1d13-2d4e-4900-98a7-b9f15a4023a6/gs1_epc_tds_i1_13.pdf) a standard location identifier which format is defined by GS1.

Please note that we could have created the Warehouse itself as child location of the Factory and then the referred `Door 1` and `Door 2` as subsidiaries of the Warehouse. We have not done that way for the sake of simplicity.

Request 1:

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "urn:epc:id:sgln:9524678.90000.0",
    "type": "BizLocation",
    "name": "Supplier Factory Spain",
    "description": "Supplier Factory in Spain specialized in engines",
    "geo": {
        "type": "GeoCoordinates",
        "addressCountry": "ES",
        "latitude": 44,
        "longitude": -8
    }
}
'
```

Response:

```
201 Created

Location: /master-data/urn:epc:id:sgln:9524678.90000.0
```

Request 2:

Here we create a subsidiary location of the Supplier Factory, the `Door 1` of the Warehouse. You can observe how the `site` field is used to indicate the parent location (the formerly created entity). The `sst` field is used to label the location, in this case `209` indicates that it is a receiving area. Such code lists are defined by the GS1 Core Business Vocabulary.

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "urn:epc:id:sgln:9524678.90000.WarehouseD1",
    "type": "BizLocation",
    "name": "Warehouse D1",
    "description": "Door from which goods enter into the Warehouse",
    "site": "urn:epc:id:sgln:9521678.90000.0",
    "sst": "209"
}
'
```

Response:

```
201 Created

Location: /master-data/urn:epc:id:sgln:9524678.90000.WarehouseD1
```

Request 3:

Here we create a subsidiary location of the Supplier Factory, the `Door 2` of the Warehouse. You can observe how the `subsite` field is used to indicate the parent location. The `sst` field is used to categorize the location, in this case `210` indicates that it is a shipping area. Such codes are defined by the GS1 Core Business Vocabulary.

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2",
    "type": "BizLocation",
    "name": "Warehouse D2",
    "description": "Door from which goods leave the Warehouse",
    "site": "urn:epc:id:sgln:9524678.90000.0",
    "sst": "210"
}
'
```

Response:

```
201 Created

Location: /master-data/uurn:epc:id:sgln:9524678.90000.WarehouseD2
```

### Create OEM business locations (Reference Data)

In this case we are only capturing the location of the OEM's Factory and not any of their internal facilities, even though in a real case we should.

Request:

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "urn:epc:id:sgln:9524987.20000.0",
    "type": "BizLocation",
    "name": "OEM Factory Germany",
    "description": "OEM Factory in Germany assembling cars",
    "geo": {
        "type": "GeoCoordinates",
        "addressCountry": "DE",
        "latitude": 52,
        "longitude": 13
    }
}
'
```

Response:

```
201 Created

Location: /master-data/urn:epc:id:sgln:9524987.20000.0
```

### Query Reference Data

Reference Data can be queried by identifier using a GET request as shown below:

Request:

```shell
curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/master-data/urn:epc:id:sgln:9521678.90000.WarehouseD2' \
--header 'apikey: <your_api_key>'
```

Response:

200 OK

```json
{
  "name": "Warehouse D2",
  "description": "Door from which goods leave the Warehouse",
  "site": "urn:epc:id:sgln:9524678.90000.0",
  "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2",
  "type": "BizLocation",
  "sst": "210"
}
```

Other queries for Reference Data are also available, such as querying by type of Entity (at the moment only `BizLocation` is supported) and by geo-location coordinates.

## Tutorial Part II : Recording Business Events on the Tangle

Through HTTP REST POST operations stakeholders can record EPCIS Business Events to the IOTA Tangle, thus building the supply chain data trail of objects (parts, goods, etc.). The figure shown above depicts this concept together with the conceptual relationship between Device Events (covered by the 101 Tutorial) and Business Events, subject of the present one.

### Part storing into the Supplier's Warehouse

The first business event that is going to be recorded is the storing of the part on the Supplier's Warehouse as described below. The origin of such business event could be, for instance, an RFID Read Device Event originated by an RFID Reader present at `Door 1` of the Warehouse. Such a Device Event could have been also recorded on the Tangle as described by the [101 Tutorial](track-trace-ledger-api-tutorial-101.md#tutorial-part-ii--rfid-read-transactions)

Request:

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/events' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    "type": "ObjectEvent",
    "epcList": [
        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"
    ],
    "action": "OBSERVE",
    "eventTime": "2021-03-31T10:25:53.276Z",
    "eventTimeZoneOffset": "+01:00",
    "readPoint": { "id": "urn:epc:id:sgln:9524678.90000.WarehouseD1" },
    "bizLocation": { "id": "urn:epc:id:sgln:9524678.90000.0" },
    "bizStep": "storing"
}
'
```

```
202 Accepted
```

Response header:

```
Location: /operation-log/e7eabd033...
```

After executing the API operation, an asynchronous task (which can last tens of seconds) will be launched so that Business Events concerning the item are started to be tracked on the Tangle and the data is properly stored on the DLT. To follow the progress of such an operation under the `location` header you will find a resource that provides access to a log entry where you can follow the operation's status. For instance, if you perform

```shell
curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/operation-log/774b824637986...' \
--header 'apikey: <Your API Key>'
```

you can get access to the status of the operation that, _once completed_, will look like as follows:

```json
{
  "created": "2021-08-06T09:22:54.146Z",
  "completed": "2021-08-06T09:23:12.659Z",
  "id": "e7eabd033...",
  "epcOrValue": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",
  "operationType": "EPCIS",
  "subOperationType": "publish",
  "status": "ok",
  "operationResult": "{\"transactionId\":\"21510478d3a4f9347ccfbef4\",\"locator\":\"urn:iota-streams:devnet:4f2b1e84d92a507cbf41de82468d4ecc2edae2d971ab47663cffee191c04cee20000000000000000:3d4d5fea1c70d380dbd5e196:58e297f427ba545c941ef136\"}"
}
```

You can observe the part (`urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012`) is being identified using a [VDA 5530 Object identifier](https://www.vda.de/en/services/Publications/vda-5530-abv-according-to-iso-19987-%28epcis%29-v1.0-september-2017.html). Our implementation supports VDA Identifiers, GS1 EPC Identifiers and [Digital Link](https://www.gs1us.org/DesktopModules/Bring2mind/DMX/Download.aspx?Command=Core_Download&EntryId=2117) Identifiers.

The `readPoint` (Warehouse's `Door 1`) and `bizLocation` (the Supplier's Factory) have been set to the business locations we already created.

The Business Event has been recorded on the Tangle (adding the corresponding `recordTime`) under a IOTA Stream created for that purpose. The details of the IOTA Streams Channel is provided under the `operationResult` field of the log entry together with the event ID (`transactionID`).

### Part Shipping by the Supplier

The next event recorded is the shipping of the part by the supplier. In this case the `readPoint` is the Warehouse's Door 2 and the `bizLocation` is again the Supplier's Factory. Again, this business event could have been generated using a Read or Scanning Device present at `Door 2` of the Warehouse.

Request:

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/events' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    "type": "ObjectEvent",
    "epcList": [
        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"
    ],
    "action": "OBSERVE",
    "eventTime": "2021-04-01T12:35:15.100Z",
    "eventTimeZoneOffset": "+01:00",
    "readPoint": { "id": "urn:epc:id:sgln:9524678.90000.WarehouseD2" },
    "bizStep": "shipping",
    "disposition": "in_progress"
}
'
```

```
202 Accepted
```

Response header:

```
Location: /operation-log/65bade2b5...
```

### Part Reception by the OEM

Once the logistics service provider arrives at the OEM site the part is delivered and received by the OEM. The corresponding business event, which origin will be again another device event is detailed below. In this case we only set the `bizLocation`(the OEM's Factory) as we have not modelled the internal subsidiary locations.

Request:

```shell
curl --location --request POST 'https://sandbox-api.zebra.com/v2/ledger/tangle/events' \
--header 'apikey: <your_api_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "@context": "https://ref.gs1.org/standards/epcis/epcis-context.jsonld",
    "type": "ObjectEvent",
    "epcList": [
        "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"
    ],
    "action": "OBSERVE",
    "eventTime": "2021-04-02T16:15:10.200Z",
    "eventTimeZoneOffset": "+01:00",
    "bizLocation": { "id": "urn:epc:id:sgln:9524987.20000.0" },
    "bizStep": "receiving",
    "disposition": "in_progress"
}
'
```

```
202 Accepted
```

Response header:

```
Location: /operation-log/63cffee1...
```

### Querying the Supply Chain Data Trail of our part

At any time we can query the supply chain data trail of our part by just by issuing an HTTP GET Request. In the example below we ask for just the last (`lastN=1`) business event known, operation that would be done by someone that needs to know the current location of the part.

Remember that the sequence of business events is recorded on the Tangle, thus authenticity, confidentiality and immutability are preserved, enabling transparent, trusted and decentralized supply chains where multiple actors seamlessly intervene.

Request:

```shell
curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/events/urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012?lastN=1' \
--header 'apikey: <your_api_key>' \
```

Response:

200 OK

```json
{
  "@context": ["https://ref.gs1.org/standards/epcis/epcis-context.jsonld"],
  "type": "EPCISDocument",
  "eventList": [
    {
      "type": "ObjectEvent",
      "epcList": ["urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"],
      "action": "OBSERVE",
      "eventTime": "2021-04-02T16:15:10.200Z",
      "eventTimeZoneOffset": "+01:00",
      "bizLocation": {
        "id": "urn:epc:id:sgln:9542987.20000.0"
      },
      "bizStep": "receiving",
      "disposition": "in_progress",
      "recordTime": "2021-04-02T16:16:15.220Z",
      "eventID": "21510478..."
    }
  ]
}
```

You can observe that an ID (the corresponding IOTA Streams message ID) and a `recordTime` has been added. Remember that you can also use the `limit` parameter to get access to the different events on a paginated basis.

### Obtaining details of the Streams Channel used to track a part

As it happens with Device Events, applications that want to consume Events directly from the Tangle have the possibility of obtaining the details of the IOTA Streams Channel used to keep the supply chain data trail of an item.

Request:

```shell
curl --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/events/channels/urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012' \
--header 'apikey: <your_api_key>' \
```

Response:

```json
{
  "locator": "urn:iota-streams:devnet:4f2b1e84d92a...:3d4d5fea1c70d380dbd5e196:58e297f427ba545c941ef136"
}
```

The URN returned with the locator provides the IOTA Streams channel ID that can be used to retrieve the different events from the Tangle (using the corresponding libraries such as [anchors](https://github.com/iotaledger/tangle.js/tree/main/libs/anchors)).

Note: The Streams Channel used to anchor the data on the Tangle is a **private channel** with a pre-shared key that is equal to
the API Key of the client. Thus, if you want to later fetch the transaction's data using the Streams libraries you need to subscribe to the Channel using such a pre-shared key. The seed of the channel's author is managed internally by the API, thus you will not get access to it.

## Next Steps

In [Tutorial 103](./track-trace-ledger-api-tutorial-103.md) you can learn how to use the IOTA Identity Framework, so that actors are able to prove that their identity is verified and endorsed by trusted parties and is communicated peer-to-peer without the need for observers, both increasing privacy and trust. Thanks to IOTA Identity, we are also be able to link Device Events Data Trails and Business Events Data Trails improving traceability and accountability of supply chain processes.

## Business Events API Roadmap

The Track and Trace Ledger API (sandbox version) opens up a new world of business opportunities and applications thanks to the combination of IOTA and EPCIS 2.0. IOTA Foundation and Zebra technologies intend to continue working on improving and polishing the API by making it enterprise-ready and available on ZebraNet, a IOTA network specifically devoted to Zebra Savanna developers.

We plan to extend the number of EPCIS Events supported (`AggregationEvent`, `TransformationEvent`) and indexing and search capabilities to enable event filtering.
