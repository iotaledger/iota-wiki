---
tags:
  - documentation
  - docker
  - guide
---

# Run `INX Chronicle` using Docker

This guide describes the necessary steps to set up and run `Chronicle` as an INX plugin of a `Hornet` node to persist _Tangle_ data, gather time series analytics using `InfluxDB`, and display it in meaningful ways using `Grafana`.

## Prerequisites

1. A recent release of Docker enterprise or community edition. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/engine/install/).
2. [Docker Compose V2](https://docs.docker.com/compose/install/).

## Preparation

Create the necessary directories for all `Hornet` and `Chronicle` databases:

```
./docker/create_dirs.sh
```

## Configuration

Configure the docker images via command-line arguments by editing the `docker-compose.yml` file.

Refer to the Chronicle CLI (run `inx-chronicle --help`) for details about configuring Chronicle via command-line arguments.

See the [Hornet Wiki](/hornet/references/configuration/) for details about configuring `Hornet`.

## Environment

Chronicle's docker setup uses several environment variables. These must be configured in order to run the docker compose file as-is. These variables can be defined in a `.env` file and specified to docker using the `--env-file` flag.

```ini
MONGODB_USERNAME=root
MONGODB_PASSWORD=root
MONGODB_CONN_STR=mongodb://root:root@mongo:27017
INFLUXDB_URL=http://influx:8086
INFLUXDB_USERNAME=admin
INFLUXDB_PASSWORD=password
JWT_PASSWORD=password
JWT_SALT=saltines
```

```sh
docker compose -f docker/docker-compose.yml --env-file .env up
```

For more information, see the [docker docs](https://docs.docker.com/compose/environment-variables).

## Docker Image Build Variants

Chronicle has two build variants, which can be selected using the corresponding YML override file.

### Production

```sh
docker compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up
```

### Debug

```sh
docker compose -f docker/docker-compose.yml up
```

## Analytics and Metrics

To run the images needed to support the Metrics and Analytics dashboards, run `docker compose` using the `metrics` profile:

```sh
docker compose -f docker/docker-compose.yml --profile metrics up
```

Access the Grafana dashboard at `http://localhost:3000/`.
