---
image: /img/integration-services/logo/integration_services.png
description: This section will guide in setting up the Integration Service API using Node.js.
keywords:
- how to
- nodejs
- setup API
- configure
- .env
---

# Local Setup

This section will guide you in setting up the Integration Services API using node.js. It is mainly relevant for developers who want to contribute to the project or create a project fork.

## Requirements

Please make sure to have the following dependencies installed before moving forward:

* [node.js](https://nodejs.org/) min. v16.17.0
* [docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Download the Project

Freshly clone the project by running the following command:

```bash
git clone https://github.com/iotaledger/integration-services.git
```

## Configure API

Use the Integration Services CLI to configure the API. The CLI configures your `.env` and `mongo-init.json` files.

1. Navigate to the root directory: 

```bash
cd integration-services
```
2. Configure the API: 

```bash
npx @iota/is-cli@latest setup-node
```

### Start the MongoDB

Now you can start docker-compose in the same root directory to setup your mongo database.

```
docker-compose up -d mongo
```

This must only be run once to start the MongoDB you can always check if the MongoDB container is running by running `docker ps` which should generate a similar output as:

```
CONTAINER ID   IMAGE         COMMAND                  CREATED        STATUS       PORTS                                              NAMES
f15ab2571369   mongo:latest  "docker-entrypoint.s…"   7 weeks ago    Up 7 weeks   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp      api_mongo_1
```

### Setup SSI-Bridge

1. Move into the folder `api/ssi-bridge`.
2. Run the following commands to install dependencies, build the project, set up the API, and finally start the SSI-Bridge:

```bash
npm install
```

```bash
npm run setup-api
```

```bash
npm run start
```

3. To check if the service started run in your terminal:

```bash
curl http://localhost:3001/info
```

### Set up the Audit-Trail Gateway

1. Move into the folder `api/audit-trail-gw`.
2.  Run the following commands to install dependencies, build the project, set up the API, and finally start the Audit-Trail Gateway:

```bash
npm install
```

```bash
npm run setup-api
```

```bash
npm run start
```

3. To check if the service started run in your terminal:

```bash
curl http://localhost:3002/info
```

## FAQ

***I accidentally stopped the mongo db container (the database cannot be reached) can I start it again?***

Yes, the container can be started again by running `docker start <container-id>` <br/>
-> The container id can be found by running `docker ps -a`
