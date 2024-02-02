---
title: Governance Scope
description: Defines exactly in which areas of the Shimmer network governance processes are currently implemented
image: /img/learn/governance/iota_governance.png
tags:
  - Shimmer
  - Governance
  - Specification
---

## Parameters that are open for Community Governance in Shimmer

(Defined by the _IOTA_ Foundation)

This list will be extended with the maturity of the Shimmer protocol by the IF engineering Team with the goal to open more programmable parameters to governance.

Changes are allowed in the following areas:

- Installment and changes to the following protocol parameters as defined by the protocol specifications in [TIP-32](https://github.com/iotaledger/tips/blob/main/tips/TIP-0032/tip-0032.md#detailed-design)

- [Shimmer units](https://github.com/iotaledger/tips/blob/main/tips/TIP-0032/tip-0032.md#shimmer-units)

- [Global Parameters](https://github.com/iotaledger/tips/blob/main/tips/TIP-0032/tip-0032.md#global-parameters)

| Name                       | Value            | Class   | Type   | Description                                                                                         |
| -------------------------- | ---------------- | ------- | ------ | --------------------------------------------------------------------------------------------------- |
| Max Shimmer Genesis Supply | 1813620509061365 | static  | uint64 | Total amount of Shimmer genesis supply denominated in `glow`. 1 `glow` = 0.000001 `SMR`             |
| VByte Cost                 | 100              | dynamic | uint32 | Minimum amount of Shimmer (denominated in `glow`) that need to be deposited per vbyte of an output. |

## The Shimmer Governance Framework also covers decision proccesses in the following sectors

- Installment and changes to the governance processes in Shimmer, but not the scope of governance as described in this document,

  - Such as: proposing, voting mechanics, other technology used, all points presented in the specification section of the Shimmer Governance Framework.
  - Excluded are any core protocol development required to fulfill Shimmer's purpose as a validation network

- Installment, changes, and structure of governance processes used in the Community Treasury DAO / Community Treasury Grant Committee

  - The rules of how the Shimmer Community Treasury should operate can be proposed, defined, and decided on by using the Shimmer Governance Framework.
  - Members of the Shimmer Community Grant Committee can be elected into and removed from the Shimmer Community Grant Committee using the Shimmer Governance Framework.
  - Spending limits and Budget of the Community Treasury Grant Committee can be decided using the Shimmer Governance Framework.
  - The Shimmer Community Grant Committee can be discarded, or its mandate can be extended using the Shimmer Governance Framework.
  - Decisions on spending tokens from the community Treasury that require a community-wide vote as defined in the Shimmer community grant committee process. These are final decisions on Tier 3 and Tier 4 grants that will be presented to the community by the grant committee after evaluation.

- Use of Shimmer tokens from the Community Treasury that fall outside the scope of the Shimmer Community Treasury Committee
