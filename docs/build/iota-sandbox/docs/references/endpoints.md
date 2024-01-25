---
title: Endpoints
description: Endpoints of the IOTA Sandbox
keywords:
  - api
  - passwords
  - users
  - credentials
  - endpoints
  - reference
---

# Endpoints

Once you have [installed](../getting-started.md#install-the-iota-sandbox-using-docker),
[bootstrapped](../getting-started.md#bootstrap), 
and [started](../getting-started.md#start-the-iota-sandbox) the IOTA Sandbox,
you can access the following endpoints:

## Hornet

### Dashboard 

```plaintext
http://localhost/
```

#### Default Credentials

**Username**: `admin`  
**Password**: `admin`

### API

```plaintext
http://localhost/
```

## Faucet

### Frontend

```plaintext
http://localhost/faucet/
```  

### API

```plaintext
http://localhost/faucet/
```

## Wasp

### Dashboard 

```plaintext
http://localhost/wasp/
```

#### Default Credentials

**Username**: `wasp`  
**Password**: `wasp`

### API

```plaintext
http://localhost/wasp/api/
```

## Chronicle

### API 

```plaintext
http://localhost/chronicle/
```

## EVM Toolkit

:::info Profile

The EVM Toolkit is not active by default. You need to enable the `evm-toolkit` profile to use it.

:::
:::info Port

The EVM Toolkit is available on port `8082` by default. You can change it in the `.env` file.

:::

### Frontend 

```plaintext
http://localhost:8082/
```

## Grafana

### Frontend 

```plaintext
http://localhost/grafana/
```

#### Default Credentials

**Username**: `admin`  
**Password**: `admin`