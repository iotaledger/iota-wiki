---
image: /img/integration-services/logo/integration_services.png
description: This section will guide you in setting up the Integration Service API using Docker Compose.
keywords:
    - how to
    - docker compose
    - setup API
    - configure
    - mongo-init.js
    - .env
---

# Local Setup

This section will guide you in setting up the Integration Services API using Docker Compose.

## Requirements

Please make sure to have the following dependencies installed before continuing:

-   [docker](https://docs.docker.com/get-docker/)
-   [docker-compose](https://docs.docker.com/compose/install/)
-   [node.js](https://nodejs.org/) min. v16.17.0
-   [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Download the Project

Clone the project by running the following command:

```bash
git clone https://github.com/iotaledger/integration-services.git
```

## Configuration

Use the Integration Services CLI to configure the API. The CLI configures your `.env` and `mongo-init.json` files.

1. Navigate to the root folder:

```bash
cd integration-services
```

2. Configure the API:

```bash
npx @iota/is-cli@latest setup-docker
```

## Run Integration Services API

You can start the Integration Services API by running the following commands in the same root directory:

```bash
docker-compose --env-file .env up --build
```
It is totally normal to see `error : No root identity found!` while the containers are starting up. After startup there should be no remaining errors.
Now you are done with the docker-compose setup. To make sure that everything works as expected read the next section.

## Test your API

By following this section you can check if the installation was successful.

### Check Container

First we want to test if all docker container started up correctly.

List all container:

```bash
docker-compose ps
```

You should be able to see all container except `api_initialize-audit-trail_1` and `api_initialize-ssi-bridge_1` in a `Up` state.

```
                       Name                                     Command               State                       Ports                    
-------------------------------------------------------------------------------------------------------------------------------------------
integration-services_audit-trail-gw_1                       docker-entrypoint.sh node  ...   Up       3000/tcp                                    
integration-services_initialize-audit-trail_1               docker-entrypoint.sh node  ...   Exit 0                                               
integration-services_initialize-ssi-bridge_1                docker-entrypoint.sh node  ...   Exit 0                                               
integration-services_ssi-bridge_1                           docker-entrypoint.sh node  ...   Up       3000/tcp                                    
is-dashboard                                                docker-entrypoint.sh npm r ...   Up       0.0.0.0:3055->3000/tcp                      
mongo                                                       docker-entrypoint.sh mongod      Up       0.0.0.0:27017->27017/tcp                    
traefik                                                     /entrypoint.sh --api.insec ...   Up       0.0.0.0:3000->80/tcp, 0.0.0.0:8080->8080/tcp
```

### Check Endpoints

Now you can check if you can reach the `audit-trail-gw` and `ssi-brdige` via http by running the following commands:

```bash
curl http://localhost:3000/audit-trail-gw/info
```

```bash
curl http://localhost:3000/ssi-bridge/info
```

## Dashboard

We also supply a dashboard with the Integration Services. You can reach the dashboard in your browser via:

```bash
http://localhost:3000
```

## FAQ

***Im getting errors like `error : could not connect to mongodb` and  `error : MongoError: Authentication failed.` when setting up the container.***

Please make sure to delete all old MongoDB containers in your Integration Services installation you created earlier.
-> All data in your local database will be lost <br/>
-> Stop the container: `docker stop mongo` and delete it `docker rm -v  mongo`
