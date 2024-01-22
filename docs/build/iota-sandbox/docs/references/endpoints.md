# Endpoints

Once you have [installed](../getting-started.md#install-the-iota-sandbox-using-docker),
[bootstrapped](../getting-started.md#bootstrap), 
and [started](../getting-started.md#start-the-iota-sandbox) the IOTA Sandbox,
you can access the following endpoints:

## Hornet

Dashboard: `http://localhost/`  
API: `http://localhost/`

## Faucet

Frontend: `http://localhost/faucet/`  
API: `http://localhost/faucet/`

## Wasp

:::info Profile

Wasp is not active by default. You need to enable the `wasp` profile to use it.

:::

Dashboard: `http://localhost/wasp/`  
API: `http://localhost/wasp/api/`

## Chronicle

API: `http://localhost/chronicle/`

## EVM Toolkit

:::info Profile

EVM Toolkit is not active by default. You need to enable the `evm-toolkit` profile to use it.

:::
:::info Port

The EVM Toolkit is available on port `8082` by default. You can change it in the `.env` file.

Frontend: `http://localhost:8082/`

## Grafana

Frontend: `http://localhost/grafana/`
