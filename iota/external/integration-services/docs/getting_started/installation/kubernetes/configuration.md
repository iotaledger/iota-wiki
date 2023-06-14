---
image: /img/integration-services/logo/integration_services.png
description: This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes instance.
keywords:
- how to
- integration services kubernetes
- services kubernetes instance
- Kubernetes
- configuration
- MongoDB
- APIs
---
# Configuration

This section describes all the configuration parameters which you can customize in your Integration Service Kubernetes
instance. Please keep in mind that all values must be changed before deployment. If your Kubernetes instance is already
running, you should run the following command to load your most recent configuration:

```bash
kubectl apply -f kubernetes/optional -f kubernetes/ -f kubernetes/kong-gw
```

## Database

You can connect the Integration Service APIs to any MongoDB database by changing the following parameters
in  [kubernetes/is-config.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml) :

- `DATABASE_URL` with the connection string
- `DATABASE_NAME` with the database name

The default values reference a single-instance MongoDB instance that is deployed
using `kubernetes/optional/mongo-*.yaml` files in the `default` namespace.

## Secrets

The Integration Services APIs are protected by a fixed api key. Furthermore, the data on database is encrypted using a
server key.

Both of these keys are defined in
the [is-secrets.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-secrets.yaml)
and are base64 encoded, so you can obtain them with by running the follwing command:

```bash
echo -n ...SERVER_SECRET_KEY or API_KEY... | base64
```

The default values are:

- `7w9gfhb123jngh4gd53z465fewcs569e` as `SERVER_SECRET`.
- `7w9gfhb123jngh4gd53z465fewcs569e` as `JWT_SECRET`.
- `4ed59704-9a26-11ec-a749-3f57454709b9` as `API_KEY`.
- `4ed59704-9a26-11ec-a749-3f57454709b9` as `SSI_BRIDGE_API_KEY`.

## Number of Replicas

You can set up the initial number of replicas in the `.spec.replicas` field
in [kubernetes/audit-trail-deployment.yaml  file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/audit-trail-deployment.yaml) and [kubernetes/ssi-bridge-deployment.yaml  file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/ssi-bridge-deployment.yaml)
.

## Private Tangle

You can reference your own private IOTA node (either from the mainnet tangle or a private one) by the `IOTA_PERMA_NODE`
and `IOTA_HORNET_NODE` fields in
the [kubernetes/is-config.yaml file](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-config.yaml)
.
