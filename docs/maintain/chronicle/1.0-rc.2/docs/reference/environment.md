---
tags:
  - documentation
  - reference
  - environment
  - variables
---

# Environment Variables

Currently Chronicle supports the following environment variables:

- `MONGODB_CONN_STR`: sets the MongoDb connection string including credentials;
- `MONGODB_DB_NAME`: sets the name of Chronicle's MongoDB main database;
- `INFLUXDB_URL`: sets the url to Chronicle's InfluxDb time-series database;
- `INFLUXDB_USERNAME`: sets the InfluxDb user;
- `INFLUXDB_PASSWORD`: sets the InfluxDb password;
- `INX_URL`: sets the url to an INX server (e.g a _Hornet node_) providing live data;
- `JWT_IDENTITY`: sets the filepath to a JWT identity file;
- `JWT_PASSWORD`: sets the JWT password;
- `JWT_SALT`: sets the JWT salt;
