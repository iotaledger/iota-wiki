---
description: Learn how to configure a Wasp node.
image: /img/logo/WASP_logo_dark.png
keywords:

- Smart Contracts
- Configuring a node
- Go-lang
- Hornet
- Requirements
- Configuration
- Dashboard
- Grafana
- Prometheus

---

# Node Configuration

You can configure your node/s using the [`config.json`](https://github.com/iotaledger/wasp/blob/master/config.json)
configuration file. If you plan to run several nodes in the same host, you will need to adjust the port configuration.

## Hornet

Wasp requires a Hornet node to communicate with the L1 Tangle.

You can use any [publicly available node](https://wiki.iota.org/wasp/guide/chains_and_nodes/testnet),
or [set up your own node](https://wiki.iota.org/hornet/getting_started),
or [create a private tangle](https://wiki.iota.org/hornet/how_tos/private_tangle).

## Hornet Connection Settings

`l1.inxAddress` specifies the Hornet INX address (default port: `9029`)

## Authentication

By default, Wasp accepts any API request coming from `127.0.0.1`. The Dashboard uses basic auth to limit access.

Both authentication methods have 'root' permissions and would allow any request.

You can disable the authentication per endpoint by setting `scheme` to `none` on any `auth` block such as `webapi.auth`
or `dashboard.auth`
. [Example configuration](https://github.com/iotaledger/wasp/blob/6b9aa273917c865b0acc83df9a1935f49498e43d/docker_config.json#L58)
.

The following schemes are supported:

- none
- ip
- basic
- jwt

### JWT

A new authentication scheme `JWT` was introduced but should be treated as **experimental**.

With this addition, the configuration was slightly modified, and a new plugin `users` was introduced.

Both the basic and JWT authentication pull their valid users from the `users` plugin.

Furthermore, the API and the Dashboard can use one of the three authentication schemes independently.

Users are currently stored inside the configuration (under `users`), and the passwords are saved as clear text for the
time being.

The default configuration contains one user "wasp" with API and Dashboard permissions.

While the basic authentication only validates username and password, the JWT authentication validates permissions
additionally.

To enable the JWT authentication change `webapi.auth.scheme` and/or `dashboard.auth.scheme` to `jwt`.

If you have enabled JWT for the webapi, you need to call `wasp-cli login` before making any requests.

One login has a duration of exactly 24 hours by default. You can change this setting in the configuration at (
webapi/dashboard)`.auth.jwt.durationHours`

## Peering

Wasp nodes connect to other Wasp peers to form committees. There is exactly one TCP connection between two Wasp nodes
participating in the same committee. Each node uses the `peering.port` setting to specify the port used for peering.

`peering.netid` must have the form `host:port`, with a `port` value equal to `peering.port`, and where `host` must
resolve to the machine where the node is running and be reachable by other nodes in the committee. Each node in a
committee must have a unique `netid`.

## Publisher

`nanomsg.port` specifies the port for the [Nanomsg](https://nanomsg.org/) event publisher. Wasp nodes publish important
events in smart contracts, such as state transitions, incoming and processed requests, etc. Any Nanomsg client can
subscribe to these messages.

<details>
  <summary>More Information on Wasp and Nanomsg</summary>
  <div>

Each Wasp node publishes important events via a [Nanomsg](https://nanomsg.org/) message stream (just like ZMQ is used in
IRI). In the future, Wasp will possibly support [ZMQ](https://zeromq.org/) and [MQTT](https://mqtt.org/) publishers too.

Any Nanomsg client can subscribe to the message stream. In Go, you can use the `packages/subscribe` package provided in
Wasp for this.

You can configure the Publisher port in the `config.json` file using the `nanomsg.port` setting.

The Message format is simply a string consisting of a space-separated list of tokens; the first token is the message
type. Below is a list of all message types published by Wasp (you can search for `publisher.Publish` in the code to see
the exact places where each message is published).

| Message                                                                       | Format                                                                                                              |
|:------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
| Chain record has been saved in the registry                                   | `chainrec <chain ID> <color>`                                                                                       |
| Chain committee has been activated                                            | `active_committee <chain ID>`                                                                                       |
| Chain committee dismissed                                                     | `dismissed_committee <chain ID>`                                                                                    |
| A new SC request reached the node                                             | `request_in <chain ID> <request tx ID> <request block index>`                                                       |
| SC request has been processed (i.e. corresponding state update was confirmed) | `request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>` |
| State transition (new state has been committed to DB)                         | `state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>`                                |
| Event generated by a SC                                                       | `vmmsg <chain ID> <contract hname> ...`                                                                             |

  </div>
</details>

## Web API

`webapi.bindAddress` specifies the bind address/port for the Web API used by `wasp-cli` and other clients to interact
with the Wasp node.

## Dashboard

`dashboard.bindAddress` specifies the bind address/port for the node dashboard, which can be accessed with a web
browser.

## Prometheus

`prometheus.bindAddress` specifies the bind address/port for the prometheus server, where it's possible to get multiple
system metrics.

By default, Prometheus is disabled. You can enable it by setting `prometheus.enabled` to `true`.

## Grafana

Grafana provides a dashboard to visualize system metrics. It can use the prometheus metrics as a data source.
