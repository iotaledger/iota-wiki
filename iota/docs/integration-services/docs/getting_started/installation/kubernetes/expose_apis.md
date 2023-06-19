---
image: /img/integration-services/logo/integration_services.png
description: Access your Integration Services API using ingress, port forwarding, a load balancer service or an Ingress Controller.  
keywords:
- minikube nginx ingres
- ingres controller
- kubectl port
- cluster
- nginx
---

# Expose APIs

Once you have deployed the service in the Kubernetes cluster and are ready to serve requests, there are different ways
to access to the APIs.

## Minikube Nginx Ingress

In minikube, you can install Nginx Ingress Controller by running the following command:

```bash
minikube addons enable ingress
````

You can run the following command to install Ingress resource:

```bash
kubectl apply -f kubernetes/optional/ingress.yaml
```

You can query the deployed ingress with the following command:

```bash
kubectl get ingress
```

After a while, you should get an output similar to:

```log
NAME                      CLASS    HOSTS                          ADDRESS        PORTS   AGE
integration-service-api   <none>   ensuresec.solutions.iota.org   192.168.49.2   80      10m
```

After this, you can query the to query the deployed API by running the following command:

```bash
curl -H 'Host: ensuresec.solutions.iota.org' http://192.168.49.2/info
```

You can avoid using the `Host` header by mapping the host/IP association in your `/etc/hosts`. In that case you could
use directly `http://ensuresec.solutions.iota.org/info` in your default browser.

If you want to change the domain name, please visit the[ configuration section](configuration.md) for more information.

## Port Forwarding

The service can even be exposed outside the cluster by using the `kubectl port forward` command:

```bash
kubectl port-forward svc/integration-service-api 3000:3000
```

This command will expose APIs on port 3000 of the local host.

If you prefer to use visual tool we suggest you
use [Kube Forwarder](https://kube-forwarder.pixelpoint.io/).

## Load Balancer Service

This is the best solution for deployments in cloud providers (AWS, Azure, GCP, etc.).

You will need to set the value `LoadBalancer` for the `.spec.type` field
of [kubernetes/is-service.yaml](https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-service.yaml)
before deploying.

This way, the Cloud Provider will be instructed to create an external endpoint for that service and will specify it in
the `EXTERNAL-IP` column of the Service details.

This is an example output of running `kubectl get svc` on a EKS (AWS Kubernetes cluster) on AWS:

```log
NAME                      TYPE           CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)          AGE
integration-service-api   LoadBalancer   10.100.219.204   <UNIQUE-NUMBER>.us-west-2.elb.amazonaws.com   3000:30733/TCP   22h
kubernetes                ClusterIP      10.100.0.1       <none>                                                                   443/TCP          7d1h
mongodb-service           ClusterIP      10.100.175.101   <none>                                                                   27017/TCP        22h
```

## Kubernetes Ingress

When you use minikube, you can install an Ingress Controller by running the following command:

```bash
addons enable
```

However, the Kubernetes ecosystem has different Ingress Controllers.

You can find a list of popular Kubernetes ingress controllers in
the [official Kubernetes website](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/).

