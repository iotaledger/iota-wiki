---
id: energy-efficiency
title: Energy efficiency
description: Energy efficiency of transactions in the IOTA Network.
---

# Energy Efficiency

An important measurement of any distributed ledger technology is the energy cost per transaction. The IOTA network is designed to be lightweight and energy-efficient. This page provides an overview of the process and results of tests conducted by the IOTA Foundation to measure the energy efficiency of the Tangle. To read the full details of the test, this [IOTA Foundation blog post](https://blog.iota.org/internal-energy-benchmarks-for-iota/) covers the process in depth.

## The Tests

The energy benchmark tests were conducted using a Raspberry Pi 3 and 4 running the [Hornet node](https://github.com/gohornet/hornet) software. Hornet was designed to be able to run on low-power devices such as these small computers.

Tests were completed on both a dedicated private Tangle set up for the tests as well as on the main [Chrysalis network](https://chrysalis.iota.org/). For the dedicated testing network, a laptop was used to be the test coordinator and to generate spam transactions for the Pi nodes.

To measure the energy consumed, INA219 current sensors were used to measure the power consumed by the devices while processing transactions. The INA219 data was collected by a BeagleBone Black. This data was then normalized against the power consumed by the devices when idle to determine the cost of processing transactions. Each set of measurements was collected over a period of 10 minutes.

## The Results

The results of the tests are shown below in table 1 and figure 2.

| Device | Average Power | 
| ----------------------------------- | ------------- | 
| Raspberry Pi 3 (Reference) | 2617.35 mW | 
| Raspberry Pi 4 (Reference) | 2785.91 mW | 
| Raspberry Pi 3 (No messages) | 2628.58 mW | 
| Raspberry Pi 4 (No messages) | 2801.58 mW | 
| Raspberry Pi 3 (50 MPS remote PoW) | 2745.52 mW | 
| Raspberry Pi 4 (50 MPS remote PoW) | 2862.21 mW | 
| Raspberry Pi 3 (100 MPS remote PoW) | 2947.90 mW | 
| Raspberry Pi 4 (100 MPS remote PoW) | 2920.55 mW | 
| Raspberry Pi 3 (Mainnet PoW) | 2968.84 mW | 
| Raspberry Pi 4 (Mainnet PoW) | 3095.51 mW |

Table 1: Reference power levels

With these results, the data of the node tests was then normalized against the results from the node without Hornet running and with Hornet running without messages being processed. Table 2 shows the final results of the test.

|device |No messages |50 MPS remote PoW |100 MPS remote PoW |Mainnet PoW | 
| -------------------------------------- | ----------- | ----------------- | ------------------ | ----------- | 
| Raspberry Pi 3 | 11.23 mW | 128.16 mW | 330.55 mW | 351.49 mW | 
| Raspberry Pi 4 | 15.67 mW | 76.30 mW | 134.63 mW | 309.60 mW | 
| Raspberry Pi 3 (normalized from 0 MPS) | | 116.92 mW | 319.32 mW | 340.26 mW | | Raspberry Pi 4 (normalized from 0 MPS) | | 60.62 mW | 118.97 mW | 293.94 mW |

## Results Explained

Using the normalized data of the nodes running at 0 messages per second, the energy cost per message can be calculated with the formula:

**Energy(J) = Power(W) \* Time(s)**

It is important to note that while the devices were performing the mainnet proof of work, they were processing an average of 0.0592 messages per second (RPi 3), and 0.0730 messages per second (RPi 4). For the remote proof-of-work scenarios, the MPS rates were a fixed 50 and 100 messages per second. Table 3 shows the calculated energy cost per message for each test scenario.

| device | 50 MPS remote PoW | 100 MPS remote PoW | Mainnet PoW | 
| -------------- | ----------------------------------- | ------------------------------------ | -------------------------------------- | 
| Raspberry Pi 3 | 116.92 mW \* (1/50) S = **2.33 mJ** | 319.32 mW \* (1/100) S = **3.19 mJ** | 340.26 mW \* (1/.059) S = **5.77 J** | | Raspberry Pi 4 | 60.62 mW \* (1/50) S = **1.21 mJ** | 118.97 mW \* (1/100) S = **1.18 mJ** | 293.94 mW \* (1/0.073) S = **4.026 J** |
