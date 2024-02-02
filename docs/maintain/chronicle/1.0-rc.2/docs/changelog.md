---
description: Changelog for Chronicle
image: /img/logo/bee_logo.png
tags:
  - Rust
  - Discord
  - Permanode
  - IOTA
  - Development
---

# Changelog

## [1.0.0-rc.1](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.37...v1.0.0-rc.1) (2023-03-22)

### Bug Fixes

- **inx:** prevent writing potentially wrong node configuration to db ([#1208](https://github.com/iotaledger/inx-chronicle/issues/1208)) ([2c33e3f](https://github.com/iotaledger/inx-chronicle/commit/2c33e3fcae993e7cffeffc4840f838c93496d8ae))

## [1.0.0-beta.37](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.36...v1.0.0-beta.37) (2023-03-20)

### ⚠ BREAKING CHANGES

- **db:** use address for unlock condition indexes (#1189)
- **cli:** consolidate fill analytics once again (#1186)

### Features

- **cli:** consolidate fill analytics once again ([#1186](https://github.com/iotaledger/inx-chronicle/issues/1186)) ([5c4733f](https://github.com/iotaledger/inx-chronicle/commit/5c4733f7896a2f43044c6241aa86c34801b36559))

### Bug Fixes

- **api:** only perform write ops if a write feature is enabled ([#1200](https://github.com/iotaledger/inx-chronicle/issues/1200)) ([81db125](https://github.com/iotaledger/inx-chronicle/commit/81db125cad43e8b030512e1c8047d64fad325cd5))
- **db:** remove parents index and fix the query ([#1195](https://github.com/iotaledger/inx-chronicle/issues/1195)) ([87eaa5e](https://github.com/iotaledger/inx-chronicle/commit/87eaa5ef67900a7d457560e7df821e95debd58ec))
- **db:** use address for unlock condition indexes ([#1189](https://github.com/iotaledger/inx-chronicle/issues/1189)) ([d4fc220](https://github.com/iotaledger/inx-chronicle/commit/d4fc220c03aa1ccd9f77a80859a60d59963a42e0))
- **logging:** cannot migrate error message ([#1199](https://github.com/iotaledger/inx-chronicle/issues/1199)) ([6cbde1b](https://github.com/iotaledger/inx-chronicle/commit/6cbde1b45c981b4814774c4c395870e0a51f82c9))

## [1.0.0-beta.36](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.35...v1.0.0-beta.36) (2023-03-10)

### ⚠ BREAKING CHANGES

- **analytics:** properly take the base token analytics after each milestone (#1179)

### Bug Fixes

- **analytics:** properly take the base token analytics after each milestone ([#1179](https://github.com/iotaledger/inx-chronicle/issues/1179)) ([02d28b3](https://github.com/iotaledger/inx-chronicle/commit/02d28b3c39d8c2b57437d0e538a4ea749e7d856c))
- **db:** indexer query by tag ([#1171](https://github.com/iotaledger/inx-chronicle/issues/1171)) ([3c894a3](https://github.com/iotaledger/inx-chronicle/commit/3c894a37bc91d6968da6adad2878aecc49b80833))

## [1.0.0-beta.35](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.34...v1.0.0-beta.35) (2023-03-03)

### Bug Fixes

- **cli:** fix regression at startup ([#1162](https://github.com/iotaledger/inx-chronicle/issues/1162)) ([aaa7986] (https://github.com/iotaledger/inx-chronicle/commit/aaa79864253df72139be686fb7b43c13b1f88038))

## [1.0.0-beta.34](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.33...v1.0.0-beta.34) (2023-03-02)

### Bug Fixes

- **db:** add block parents index ([#1160](https://github.com/iotaledger/inx-chronicle/issues/1160)) ([7fd515f](https://github.com/iotaledger/inx-chronicle/commit/7fd515f8eb1fbd7a8e54afe3632738b617509612))
- **db:** fix slow get block children query ([#1158](https://github.com/iotaledger/inx-chronicle/issues/1158)) ([587e9ab](https://github.com/iotaledger/inx-chronicle/commit/587e9ab9d41e5dfb0521da2b74dc688a85ae2338))

## [1.0.0-beta.33](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.32...v1.0.0-beta.33) (2023-02-28)

### ⚠ BREAKING CHANGES

- **api:** add payload type to `block_by_milestone` (#1116)
- **analytics:** rework analytics (#1049)

### Features

- **api:** add payload type to `block_by_milestone` ([#1116](https://github.com/iotaledger/inx-chronicle/issues/1116)) ([d5b9f55](https://github.com/iotaledger/inx-chronicle/commit/d5b9f55fbe0662ee553adf08ac0ccdffee4d37d1))
- **analytics:** rework analytics ([#1049] (https://github.com/iotaledger/inx-chronicle/issues/1049)) ([8870176](https://github.com/iotaledger/inx-chronicle/commit/88701768831400cdb98653965839677407cba1a3))

### Bug Fixes

- **docs:** Remove `config.toml` remnants ([#1135](https://github.com/iotaledger/inx-chronicle/issues/1135)) ([14a67e9] (https://github.com/iotaledger/inx-chronicle/commit/14a67e9e5462b885c04a9adfe7580e6a014971e6))
- **inx:** node config updates ([#1110](https://github.com/iotaledger/inx-chronicle/issues/1110)) ([f48936b] (https://github.com/iotaledger/inx-chronicle/commit/f48936bec1b121415ca7524019f7f08d21a697fc))

## [1.0.0-beta.32](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.31...v1.0.0-beta.32) (2023-02-06)

### ⚠ BREAKING CHANGES

- **db:** migration version checking (#1097)

### Features

- **grafana:** explicitly state datasource UIDs ([#991](https://github.com/iotaledger/inx-chronicle/issues/991)) ([315bf0c](https://github.com/iotaledger/inx-chronicle/commit/315bf0cb40e349c208c2f5d6e59eedeb2dcd9aa6))

### Bug Fixes

- **db:** migration version checking ([#1097](https://github.com/iotaledger/inx-chronicle/issues/1097)) ([4d1bc3e](https://github.com/iotaledger/inx-chronicle/commit/4d1bc3eb6be969d477328bbabe89e842ee8d723f)), closes [#1098](https://github.com/iotaledger/inx-chronicle/issues/1098)

## [1.0.0-beta.31](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.30...v1.0.0-beta.31) (2023-02-01)

### ⚠ BREAKING CHANGES

- **indexer:** add indexed id to fix implicit aliases and nfts (#1075)

### Bug Fixes

- **analytics:** only calculate analytics after chronicle is synced ([#1065](https://github.com/iotaledger/inx-chronicle/issues/1065)) ([3568cfe](https://github.com/iotaledger/inx-chronicle/commit/3568cfecdbc962be7f697adc634126c247e79ff4))
- **ci:** fix `format` arguments ([#1042](https://github.com/iotaledger/inx-chronicle/issues/1042)) ([77c03cd](https://github.com/iotaledger/inx-chronicle/commit/77c03cda5569efad14dc0da51611fad512eca592))
- **ci:** generalize license template regex ([#1058](https://github.com/iotaledger/inx-chronicle/issues/1058)) ([bf57230](https://github.com/iotaledger/inx-chronicle/commit/bf57230509bec9f08c06d4f9e75708a173e21439))
- **db:** slow newest/oldest milestone query ([#1071](https://github.com/iotaledger/inx-chronicle/issues/1071)) ([5e3b9f9](https://github.com/iotaledger/inx-chronicle/commit/5e3b9f9e55edcc5218b8de543be40057b0d974f1))
- **grafana:** remove deprecated panel ([#1040](https://github.com/iotaledger/inx-chronicle/issues/1040)) ([87f5b42](https://github.com/iotaledger/inx-chronicle/commit/87f5b4229bce635fab88fda3e9bfa347a9d2bdeb))
- **indexer:** add indexed id to fix implicit aliases and nfts ([#1075](https://github.com/iotaledger/inx-chronicle/issues/1075)) ([c37a5cb](https://github.com/iotaledger/inx-chronicle/commit/c37a5cb72342fcb7285666760984873c0cc71211))

## [1.0.0-beta.30](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.29...v1.0.0-beta.30) (2023-01-17)

### Features

- **analytics:** selective analytics for INX connections ([#1035](https://github.com/iotaledger/inx-chronicle/issues/1035)) ([b76c425](https://github.com/iotaledger/inx-chronicle/commit/b76c425b4dccb839ac793bfd21635f72979fdb52))
- **api:** add block metadata route for included transactions ([#1033](https://github.com/iotaledger/inx-chronicle/issues/1033)) ([b02ad42](https://github.com/iotaledger/inx-chronicle/commit/b02ad42408a8cae6ea40bbcf26b2273badc267cd))

## [1.0.0-beta.29](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.28...v1.0.0-beta.29) (2023-01-13)

### ⚠ BREAKING CHANGES

- **config:** Remove ambiguity from CLI config (#1010)
- remove `loki` (#1009)
- **config:** re-design and clean-up configuration (#979)

### Features

- **config:** Remove ambiguity from CLI config ([#1010](https://github.com/iotaledger/inx-chronicle/issues/1010)) ([399457d](https://github.com/iotaledger/inx-chronicle/commit/399457d917ee823c18d3ceacde4b56b1d943072e))
- **refactor:** add additional clippy lints ([#989](https://github.com/iotaledger/inx-chronicle/issues/989)) ([6ec481c](https://github.com/iotaledger/inx-chronicle/commit/6ec481cc2200c7e7990770c2f20ace336bc0b3e7))
- remove `loki` ([#1009](https://github.com/iotaledger/inx-chronicle/issues/1009)) ([d9ec6ec](https://github.com/iotaledger/inx-chronicle/commit/d9ec6ecdda7bcb1e0ff35ca899ff27f8d566ae74))

### Bug Fixes

- **analytics:** add `total_byte_cost` to ledger size analytics ([#1028](https://github.com/iotaledger/inx-chronicle/issues/1028)) ([dcda7d6](https://github.com/iotaledger/inx-chronicle/commit/dcda7d6bb2681be0a2c48de546d9b88934cc8b38))
- **analytics:** computation of daily active addresses ([#1005](https://github.com/iotaledger/inx-chronicle/issues/1005)) ([77e3537](https://github.com/iotaledger/inx-chronicle/commit/77e35378fb21e21f9447ec0eea11fe531ccbdf59))
- **api:** revert axum upgrade ([#1021](https://github.com/iotaledger/inx-chronicle/issues/1021)) ([761a4f2](https://github.com/iotaledger/inx-chronicle/commit/761a4f22cee77ba429c6cf5e9f3ec05113fefa0b))
- **ci:** fix coverage workflow ([#1027](https://github.com/iotaledger/inx-chronicle/issues/1027)) ([ab38091](https://github.com/iotaledger/inx-chronicle/commit/ab38091b8bc5262f370f1c89680eb258c4dbad21))
- **db:** output activity analytics query ([#1029](https://github.com/iotaledger/inx-chronicle/issues/1029)) ([5c14d88](https://github.com/iotaledger/inx-chronicle/commit/5c14d88266e4daa18df86713f71ba044427cbef0))

### Code Refactoring

- **config:** re-design and clean-up configuration ([#979](https://github.com/iotaledger/inx-chronicle/issues/979)) ([af57aa3](https://github.com/iotaledger/inx-chronicle/commit/af57aa3609fae1501d9d4746b2545eb4d6312a0e))

## [1.0.0-beta.28](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.27...v1.0.0-beta.28) (2022-12-19)

### ⚠ BREAKING CHANGES

- **analytics:** correctly count aliases and NFT activity (#943)
- **influxdb:** divide analytics and metrics databases (#942)

### Features

- **analytics:** compute daily active addresses ([#968](https://github.com/iotaledger/inx-chronicle/issues/968)) ([04015f3](https://github.com/iotaledger/inx-chronicle/commit/04015f3b47f3de39bc65f7cc4e4f84576810642c))
- **analytics:** enable analytics selection in `fill-analytics` ([#949](https://github.com/iotaledger/inx-chronicle/issues/949)) ([0a8c841](https://github.com/iotaledger/inx-chronicle/commit/0a8c841044e3604b5c1bb46b457f3fafa1bc743b))
- **analytics:** separate base token activity analytic into `booked` and `transferred` counts ([#960](https://github.com/iotaledger/inx-chronicle/issues/960)) ([5a533bd](https://github.com/iotaledger/inx-chronicle/commit/5a533bdbe48dfbc3bacf7fa55b876de29e6780f8))
- **api:** add proof-of-inclusion (PoI) endpoints ([#854](https://github.com/iotaledger/inx-chronicle/issues/854)) ([62545a2](https://github.com/iotaledger/inx-chronicle/commit/62545a2bc47482efe27c8cf8833793e39df9d163))
- **api:** update axum to 0.6 ([#948](https://github.com/iotaledger/inx-chronicle/issues/948)) ([f77ccfa](https://github.com/iotaledger/inx-chronicle/commit/f77ccfa9d2c1a77539d19dc37ed0f4fb41e4b1e8))
- **grafana:** add time interval to panel titles ([#964](https://github.com/iotaledger/inx-chronicle/issues/964)) ([865c042](https://github.com/iotaledger/inx-chronicle/commit/865c0421c03b865cad4627ea73df9778d7c66d2f))
- **influxdb:** divide analytics and metrics databases ([#942](https://github.com/iotaledger/inx-chronicle/issues/942)) ([7e0c0da](https://github.com/iotaledger/inx-chronicle/commit/7e0c0da45adea75fe5235b1bf51220911984f891))

### Bug Fixes

- **analytics:** correctly count aliases and NFT activity ([#943](https://github.com/iotaledger/inx-chronicle/issues/943)) ([e5b5f0b](https://github.com/iotaledger/inx-chronicle/commit/e5b5f0b61c8bcc2c52dbed3037f26ba3ffdd5b89))
- **clippy:** fix clippy box default warning ([#980](https://github.com/iotaledger/inx-chronicle/issues/980)) ([774d76b](https://github.com/iotaledger/inx-chronicle/commit/774d76b577245a5b630e3a62e501f4b2b21473d5))
- **db:** use `$match` in `get_utxo_changes` ([#977](https://github.com/iotaledger/inx-chronicle/issues/977)) ([45bbdaf](https://github.com/iotaledger/inx-chronicle/commit/45bbdafa44b141da8968b4ba0cab6c4c98b83255))
- **grafana:** use `mean` instead of `last` for times ([#934](https://github.com/iotaledger/inx-chronicle/issues/934)) ([242b353](https://github.com/iotaledger/inx-chronicle/commit/242b353768df6f68b4b02851f6251bafec392d7e))

## [1.0.0-beta.27](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.26...v1.0.0-beta.27) (2022-11-25)

### Features

- **grafana:** annotate sync time with milestone index ([#930](https://github.com/iotaledger/inx-chronicle/issues/930)) ([cf8393c](https://github.com/iotaledger/inx-chronicle/commit/cf8393c8aabe11a35683a2ad73fdbd2fcb3b4cd2))

### Bug Fixes

- **db:** improve performance of analytics queries ([#900](https://github.com/iotaledger/inx-chronicle/issues/900)) ([48a74a1](https://github.com/iotaledger/inx-chronicle/commit/48a74a109ffbd72c338ff22f87142fca42b73bfe))
- **logging:** set up logging before subcommands are executed ([#927](https://github.com/iotaledger/inx-chronicle/issues/927)) ([7464781](https://github.com/iotaledger/inx-chronicle/commit/746478169bdbad470b8b45a2e7753c0bb02e3168))

## [1.0.0-beta.26](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.25...v1.0.0-beta.26) (2022-11-23)

### ⚠ BREAKING CHANGES

- **influxdb:** consolidate queries (#921)

### Features

- **api:** add blocks by milestone endpoints ([#876](https://github.com/iotaledger/inx-chronicle/issues/876)) ([be1b9cb](https://github.com/iotaledger/inx-chronicle/commit/be1b9cbe81e73a2415944ffe33c6dc1ac3c63418)), closes [#922](https://github.com/iotaledger/inx-chronicle/issues/922) [#923](https://github.com/iotaledger/inx-chronicle/issues/923)
- **influxdb:** consolidate queries ([#921](https://github.com/iotaledger/inx-chronicle/issues/921)) ([ec9f1c0](https://github.com/iotaledger/inx-chronicle/commit/ec9f1c0035af5b980e5650f656793379ad9cc2bd))

## [1.0.0-beta.25](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.24...v1.0.0-beta.25) (2022-11-21)

### ⚠ BREAKING CHANGES

- **influx:** remove unnecessary `tag` fields (#909)
- **analytics:** correctly calculate alias and NFT analytics (#887)

### Features

- **cli:** add analytics timings to `fill-analytics` CLI command ([#898](https://github.com/iotaledger/inx-chronicle/issues/898)) ([de6f640](https://github.com/iotaledger/inx-chronicle/commit/de6f6409bc2ff1384f205ce29f178a1dd816ea6e))
- **cli:** split `influxdb` feature properly ([#870](https://github.com/iotaledger/inx-chronicle/issues/870)) ([0cd627c](https://github.com/iotaledger/inx-chronicle/commit/0cd627cfaf9f43e28b0fb28e589d94c6223b6367))
- **docker:** add `service_healthy` condition to `docker-compose.yml` ([#903](https://github.com/iotaledger/inx-chronicle/issues/903)) ([77df296](https://github.com/iotaledger/inx-chronicle/commit/77df29622312e433ca97392978d977e22cb6477f))
- **error:** clean up errors with `eyre` lib ([#811](https://github.com/iotaledger/inx-chronicle/issues/811)) ([b4f803b](https://github.com/iotaledger/inx-chronicle/commit/b4f803b15b5520edd8ec2985787c7c5d4f9a6d79))
- **grafana:** improve display of `sync_time` ([#895](https://github.com/iotaledger/inx-chronicle/issues/895)) ([3ad260c](https://github.com/iotaledger/inx-chronicle/commit/3ad260c7643610fa9a4f0959a8137b30a5a3b7cf))

### Bug Fixes

- **analytics:** correctly calculate alias and NFT analytics ([#887](https://github.com/iotaledger/inx-chronicle/issues/887)) ([dce3d1c](https://github.com/iotaledger/inx-chronicle/commit/dce3d1c2d5afa508792a1fad518e11c98dde49c8))
- **db:** total byte cost calculation ([#897](https://github.com/iotaledger/inx-chronicle/issues/897)) ([a28623d](https://github.com/iotaledger/inx-chronicle/commit/a28623de1a62c97a2ecd69dc4444e9ef6273e04e))
- **docker:** scale InfluxDB to bigger data ([#889](https://github.com/iotaledger/inx-chronicle/issues/889)) ([86d87b3](https://github.com/iotaledger/inx-chronicle/commit/86d87b33e634331e21d07c1d7dbe6fef1831cfde))
- **docs:** cleanup explorer docs ([#917](https://github.com/iotaledger/inx-chronicle/issues/917)) ([c2f8d30](https://github.com/iotaledger/inx-chronicle/commit/c2f8d3073b61ebcb4a8075be50bb7dfddb7b6138))
- **grafana:** Further improves the performance of the analytics dashboard ([#905](https://github.com/iotaledger/inx-chronicle/issues/905)) ([925b1a3](https://github.com/iotaledger/inx-chronicle/commit/925b1a3f4f68ea70bfc0c60bdb9a530332fa9e49))
- **grafana:** show both `metrics` and `analytics` time ([#914](https://github.com/iotaledger/inx-chronicle/issues/914)) ([d390de6](https://github.com/iotaledger/inx-chronicle/commit/d390de68f64bb3ee53340a992b7e9ca4bffce18d))
- **influx:** remove unnecessary `tag` fields ([#909](https://github.com/iotaledger/inx-chronicle/issues/909)) ([6a5975d](https://github.com/iotaledger/inx-chronicle/commit/6a5975d1098d509a88c63e90d262c56ea04fa58f))
- **inx:** dedicated `analytics_time` in `sync_time` metrics ([#888](https://github.com/iotaledger/inx-chronicle/issues/888)) ([e94c171](https://github.com/iotaledger/inx-chronicle/commit/e94c171586c13ba9481e01908572df97fd91293c))
- **inx:** reorder sync process to always insert milestone last ([#907](https://github.com/iotaledger/inx-chronicle/issues/907)) ([4b97af7](https://github.com/iotaledger/inx-chronicle/commit/4b97af7ec9efd5721f3ecc9a5ae825fe43db27cc))

## [1.0.0-beta.24](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.23...v1.0.0-beta.24) (2022-11-11)

### ⚠ BREAKING CHANGES

- **deps:** update `iota-types` to change packing order of `RentStructure` (#877)

### Features

- **cli:** add helpful CLI commands ([#866](https://github.com/iotaledger/inx-chronicle/issues/866)) ([7e4ab39](https://github.com/iotaledger/inx-chronicle/commit/7e4ab393f239e646548bc9b49442e9a7af349fd8))
- **grafana:** add analytics and improve dashboard ([#882](https://github.com/iotaledger/inx-chronicle/issues/882)) ([303b2e8](https://github.com/iotaledger/inx-chronicle/commit/303b2e82f65cffe6a4a93aa9d94df70f7617bea8))
- **grafana:** add remaining stats ([#842](https://github.com/iotaledger/inx-chronicle/issues/842)) ([8ea9d19](https://github.com/iotaledger/inx-chronicle/commit/8ea9d19e28a9f23eec66715a11a97f068224fa7d))
- **tracing:** add loki ([#867](https://github.com/iotaledger/inx-chronicle/issues/867)) ([fdbcea6](https://github.com/iotaledger/inx-chronicle/commit/fdbcea6cee729796a8ce4909869ccc506938b549))

### Bug Fixes

- **analytics:** flip claimed to unclaimed analytics ([#871](https://github.com/iotaledger/inx-chronicle/issues/871)) ([bf6bca7](https://github.com/iotaledger/inx-chronicle/commit/bf6bca7423cb352d08a5208e5a921db06bdf259d))
- **deps:** update `iota-types` to change packing order of `RentStructure` ([#877](https://github.com/iotaledger/inx-chronicle/issues/877)) ([a34ee18](https://github.com/iotaledger/inx-chronicle/commit/a34ee180a6bc75ed64a0847d75f4f7283f03e73d))
- **docker:** change name of data folder ([#864](https://github.com/iotaledger/inx-chronicle/issues/864)) ([de5a12a](https://github.com/iotaledger/inx-chronicle/commit/de5a12a2aded7ad52529e6da7a8b006320b82e60))

## [1.0.0-beta.23](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.22...v1.0.0-beta.23) (2022-11-04)

### ⚠ BREAKING CHANGES

- **analytics:** use InfluxDB for milestone sync time (#838)
- **cli:** refactor CLI and environment vars
- **analytics:** add missing stats (#821)
- **analytics:** add time-series analytics (#805)
- **cli:** rework CLI args usage (#725)

### Features

- **analytics:** add missing stats ([#821](https://github.com/iotaledger/inx-chronicle/issues/821)) ([c655fde](https://github.com/iotaledger/inx-chronicle/commit/c655fdeda1aa156c32abae75670ef14f212f0457))
- **analytics:** add time-series analytics ([#805](https://github.com/iotaledger/inx-chronicle/issues/805)) ([e965092](https://github.com/iotaledger/inx-chronicle/commit/e9650923518064f4e84dbef2b4956f7f67481b3b))
- **analytics:** use InfluxDB for milestone sync time ([#838](https://github.com/iotaledger/inx-chronicle/issues/838)) ([30353e7](https://github.com/iotaledger/inx-chronicle/commit/30353e7972b300aa1505a509ceb1b578110f8c6a))
- **cli:** add `fill-analytics` command ([#841](https://github.com/iotaledger/inx-chronicle/issues/841)) ([0d0e2de](https://github.com/iotaledger/inx-chronicle/commit/0d0e2de743ad8a0ca0260d0b8772ff70e08fea09))
- **cli:** group CLI arguments and change INX config ([#830](https://github.com/iotaledger/inx-chronicle/issues/830)) ([c758809](https://github.com/iotaledger/inx-chronicle/commit/c758809065fce9ef905758d04722d5bea6fe5f01))
- **cli:** rework CLI args usage ([#725](https://github.com/iotaledger/inx-chronicle/issues/725)) ([ffa43d6](https://github.com/iotaledger/inx-chronicle/commit/ffa43d658e429c2b91232d6db502dda159e851f9))
- **deps:** remove dependency on `bee-inx` ([#804](https://github.com/iotaledger/inx-chronicle/issues/804)) ([65284b7](https://github.com/iotaledger/inx-chronicle/commit/65284b7c32a4de205bc44fe3da6cd7f72380c552))
- **deps:** switch from `bee` to `iota-types` ([#813](https://github.com/iotaledger/inx-chronicle/issues/813)) ([469dd4f](https://github.com/iotaledger/inx-chronicle/commit/469dd4f437102e5406d0b030cc42e27b1e68c05d))
- **grafana:** add InfluxDB data source ([#833](https://github.com/iotaledger/inx-chronicle/issues/833)) ([6115593](https://github.com/iotaledger/inx-chronicle/commit/6115593cc9b8593d1340bc4dafa9f62507af2223))
- **inx:** remove `LedgerUpdateStream` and manual chunks iter ([#782](https://github.com/iotaledger/inx-chronicle/issues/782)) ([8270bae](https://github.com/iotaledger/inx-chronicle/commit/8270baeb9e15a79d869f345b3a73a442135cefa1))
- **test:** add even more db query tests ([#806](https://github.com/iotaledger/inx-chronicle/issues/806)) ([55a6882](https://github.com/iotaledger/inx-chronicle/commit/55a68824c04843398f5665fb489ce64f42796817))
- **test:** add more db query tests ([#699](https://github.com/iotaledger/inx-chronicle/issues/699)) ([9ffccbb](https://github.com/iotaledger/inx-chronicle/commit/9ffccbbc8db5b62950974fa40141916b40a084ba))
- **tracing:** set max tracing level for release build to debug ([#837](https://github.com/iotaledger/inx-chronicle/issues/837)) ([f3b8e04](https://github.com/iotaledger/inx-chronicle/commit/f3b8e04eb62de84b59d3a21a444840267459391d))
- **types:** improve and test encoding of `KIND` ([#816](https://github.com/iotaledger/inx-chronicle/issues/816)) ([9c1b2b3](https://github.com/iotaledger/inx-chronicle/commit/9c1b2b386dcfed9f1f9c8d11a1634f5c315c4330))

### Bug Fixes

- **api:** missing base token data in info response ([#807](https://github.com/iotaledger/inx-chronicle/issues/807)) ([a853b3e](https://github.com/iotaledger/inx-chronicle/commit/a853b3e642523411bd2a4d3b359d15f369f2be25))
- **build:** add missing feature dependencies ([#840](https://github.com/iotaledger/inx-chronicle/issues/840)) ([18d3b7e](https://github.com/iotaledger/inx-chronicle/commit/18d3b7e24c1e586d0952a906ac5fc8d780c0a0fc))
- **db:** fix unwind stage in receipt queries ([#786](https://github.com/iotaledger/inx-chronicle/issues/786)) ([4ab1951](https://github.com/iotaledger/inx-chronicle/commit/4ab19514df4de529f154185910b75a4eb17215a5))
- **inx:** fix missing milestone field ([#817](https://github.com/iotaledger/inx-chronicle/issues/817)) ([6ed564d](https://github.com/iotaledger/inx-chronicle/commit/6ed564dbae89ca405162c61fe01d77a0e641d558))
- **security:** disable `rustc-serialize` feature ([#823](https://github.com/iotaledger/inx-chronicle/issues/823)) ([2e0d4f4](https://github.com/iotaledger/inx-chronicle/commit/2e0d4f48a268466dffeba342a1cf7be2fcdfe8cb))
- **shutdown:** fix shutdown logic ([#800](https://github.com/iotaledger/inx-chronicle/issues/800)) ([3af58ea](https://github.com/iotaledger/inx-chronicle/commit/3af58eafd046295c423156ddcf23e5d5388c8221))

## [v1.0.0-beta.22](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.21...v1.0.0-beta.22) (2022-10-05)

### ⚠ BREAKING CHANGES

- **db:** direct dto conversion (#752)

### Features

- **api:** additional raw endpoints ([#757](https://github.com/iotaledger/inx-chronicle/issues/757)) ([e27e38f](https://github.com/iotaledger/inx-chronicle/commit/e27e38f5e6ba78d858f91882a5a016a39302b98b))
- **db:** add created index statistics to log ([#760](https://github.com/iotaledger/inx-chronicle/issues/760)) ([ae2205d](https://github.com/iotaledger/inx-chronicle/commit/ae2205dbfb04ff2ff6afa26101cdad430ead5c92))
- **db:** add document count to `MongoDbCollectionExt` trait ([#719](https://github.com/iotaledger/inx-chronicle/issues/719)) ([7d284fd](https://github.com/iotaledger/inx-chronicle/commit/7d284fd333ee8aa36a6de94d0f6d40417bde650d))
- **docker:** bump Hornet to `v2.0-rc` ([#754](https://github.com/iotaledger/inx-chronicle/issues/754)) ([b7c9fd1](https://github.com/iotaledger/inx-chronicle/commit/b7c9fd1500968bd47fe071484ce1c7cc912c3d5c))
- improve MongoDb connection string handling ([#769](https://github.com/iotaledger/inx-chronicle/issues/769)) ([c1c9eaf](https://github.com/iotaledger/inx-chronicle/commit/c1c9eaf3467cf11f0aff5443cf45c8d0b016eea2))

### Bug Fixes

- **api:** deserialization error in `api/analytics/v2/ledger/storage-deposit` ([#762](https://github.com/iotaledger/inx-chronicle/issues/762)) ([7be594e](https://github.com/iotaledger/inx-chronicle/commit/7be594e5e7e4ad6230341a4a0d9a105ea8ac2f1e))
- **inx:** fix ledger output rent structure logic ([#759](https://github.com/iotaledger/inx-chronicle/issues/759)) ([9bafb00](https://github.com/iotaledger/inx-chronicle/commit/9bafb0091045b96e9be5584d3d8d2045a4f5be47)), closes [#761](https://github.com/iotaledger/inx-chronicle/issues/761) [#85](https://github.com/iotaledger/inx-chronicle/issues/85)
- revert `deny_unknown_fields` for top-level of config ([#773](https://github.com/iotaledger/inx-chronicle/issues/773)) ([e62f837](https://github.com/iotaledger/inx-chronicle/commit/e62f8374f9f15129b6a5fcc6dd72f1b084f80891))
- **types:** conditionally import `context` ([#774](https://github.com/iotaledger/inx-chronicle/issues/774)) ([5086c7b](https://github.com/iotaledger/inx-chronicle/commit/5086c7b0115150bff40afcd6b3673cebc565cee1))

### Miscellaneous Chores

- **db:** direct dto conversion ([#752](https://github.com/iotaledger/inx-chronicle/issues/752)) ([ce584ac](https://github.com/iotaledger/inx-chronicle/commit/ce584acf3954dd9ab05ab8a97385282089c85e9c))

## [v1.0.0-beta.21](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2022-09-27)

### Features

- **inx:** update to latest version of `packable` and `bee-inx` ([#729](https://github.com/iotaledger/inx-chronicle/issues/729)) ([d6d1120](https://github.com/iotaledger/inx-chronicle/commit/d6d11206cd4691f3d5a9ba228cb21fab6d079d36)), closes [#735](https://github.com/iotaledger/inx-chronicle/issues/735)

### Bug Fixes

- **db:** add index on `metadata.block_id` ([#744](https://github.com/iotaledger/inx-chronicle/issues/744)) ([46509d6](https://github.com/iotaledger/inx-chronicle/commit/46509d6aa7a4ec1a3b4dba2d2494a18546581093))

## [v1.0.0-beta.20](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2022-09-23)

### Bug Fixes

- **db:** enforce transaction blocks output lookup sort order ([#730](https://github.com/iotaledger/inx-chronicle/issues/730)) ([aeddb04](https://github.com/iotaledger/inx-chronicle/commit/aeddb046d891f322e0e25c8014491e576929c630))

## [v1.0.0-beta.19](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2022-09-22)

### Features

- **api:** allow configuring argon for JWT ([#601](https://github.com/iotaledger/inx-chronicle/issues/601)) ([d696a6a](https://github.com/iotaledger/inx-chronicle/commit/d696a6ae73bcae17de38cd33c4b666875aae4764))
- **metrics:** add MongoDB panel to Grafana ([#712](https://github.com/iotaledger/inx-chronicle/issues/712)) ([1c43dba](https://github.com/iotaledger/inx-chronicle/commit/1c43dbaf30f671b073b4cd44e2b53470a19b02d5))

### Bug Fixes

- **db:** create indexes on `.milestone_index` ([#717](https://github.com/iotaledger/inx-chronicle/issues/717)) ([692e6c4](https://github.com/iotaledger/inx-chronicle/commit/692e6c45c8eccf421f95d6eea3b3fd89143777b5))
- **db:** revert 493ab8e due to regression ([#716](https://github.com/iotaledger/inx-chronicle/issues/716)) ([45f08e2](https://github.com/iotaledger/inx-chronicle/commit/45f08e227fcaeabe2ef4c38610ab2459ad5126a4))
- **db:** use `_id` instead of `metadata.output_id` ([#718](https://github.com/iotaledger/inx-chronicle/issues/718)) ([fec5b66](https://github.com/iotaledger/inx-chronicle/commit/fec5b66a1910948bb65afe8e1c26b0c17a6c9206))

## [1.0.0-beta.18](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.17...1.0.0-beta.18) (2022-09-20)

### Features

- add `claiming` endpoint to `anlytics/v2` ([#692](https://github.com/iotaledger/inx-chronicle/issues/692)) ([4ecad7b](https://github.com/iotaledger/inx-chronicle/commit/4ecad7b594220e49b8dbc36e8ca2fa0aa5dda50c))
- **db:** use a materialized view for ledger updates ([#698](https://github.com/iotaledger/inx-chronicle/issues/698)) ([493ab8e](https://github.com/iotaledger/inx-chronicle/commit/493ab8e2caf06be95a8b51568ba1b7dd6a496827))

### Bug Fixes

- **ci:** fix `canary` build and re-enable `docs` ([#690](https://github.com/iotaledger/inx-chronicle/issues/690)) ([973349f](https://github.com/iotaledger/inx-chronicle/commit/973349f4c6b2f400b15a3b802b849d154c2ce680))

## [1.0.0-beta.17](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2022-09-15)

### Features

- **db:** separate ledger/protocol_param logic from collections ([#677](https://github.com/iotaledger/inx-chronicle/issues/677)) ([81178c8](https://github.com/iotaledger/inx-chronicle/commit/81178c8b822d3f2c2a9182976d42b2dcfd2f32b0))

## [1.0.0-beta.16](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2022-09-14)

### ⚠ BREAKING CHANGES

- **db:** separate database collections into individual types (#626) (#650)

### Features

- **api:** add milestone activity endpoint ([#678](https://github.com/iotaledger/inx-chronicle/issues/678)) ([c107174](https://github.com/iotaledger/inx-chronicle/commit/c107174f9579f437317ad8d121c74de079393a21))
- **api:** add milestones endpoint to explorer API ([#666](https://github.com/iotaledger/inx-chronicle/issues/666)) ([3d221bf](https://github.com/iotaledger/inx-chronicle/commit/3d221bf9b858fd317094c1623aadbf668f6f0f2f)), closes [#633](https://github.com/iotaledger/inx-chronicle/issues/633)
- **api:** add routes endpoint ([#537](https://github.com/iotaledger/inx-chronicle/issues/537)) ([b1719c3](https://github.com/iotaledger/inx-chronicle/commit/b1719c362d2a76ab143be759401d2a3282a87589))
- **ci:** add swagger validation CI ([#675](https://github.com/iotaledger/inx-chronicle/issues/675)) ([4153113](https://github.com/iotaledger/inx-chronicle/commit/4153113ca4d1e043abf29b6db8a997319070b03c))
- **db:** remove outputs from blocks table ([#664](https://github.com/iotaledger/inx-chronicle/issues/664)) ([4329690](https://github.com/iotaledger/inx-chronicle/commit/4329690267a9ca0a0a3f6849a56514a76fea88eb)), closes [#632](https://github.com/iotaledger/inx-chronicle/issues/632)
- **db:** separate database collections into individual types ([#626](https://github.com/iotaledger/inx-chronicle/issues/626)) ([#650](https://github.com/iotaledger/inx-chronicle/issues/650)) ([5d5499d](https://github.com/iotaledger/inx-chronicle/commit/5d5499d834ed2c23fede23c7d2ad8c61dfbae4af))
- **telemetry:** add jaeger support ([#575](https://github.com/iotaledger/inx-chronicle/issues/575)) ([e1e4dc8](https://github.com/iotaledger/inx-chronicle/commit/e1e4dc8dc1d5cc33f7ab4afb2382708dba857d06))

### Bug Fixes

- **ci:** fix coverage CI and update mongo version ([#658](https://github.com/iotaledger/inx-chronicle/issues/658)) ([e231e09](https://github.com/iotaledger/inx-chronicle/commit/e231e09c672ad6bfb6ae714ff5aea6d3a93c2095))
- **tracing:** remove console ([#660](https://github.com/iotaledger/inx-chronicle/issues/660)) ([a514fc9](https://github.com/iotaledger/inx-chronicle/commit/a514fc9378c9ae832cbf4893f9f07e34c049bbdd))

## [1.0.0-beta.15](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2022-09-09)

### Bug Fixes

- **ci:** start mongo in coverage CI ([cbca6a3](https://github.com/iotaledger/inx-chronicle/commit/cbca6a3ad43126ae0b236dd00e26d21ea581b184))
- **config:** fix wrong config reset ([#642](https://github.com/iotaledger/inx-chronicle/issues/642)) ([9c468dd](https://github.com/iotaledger/inx-chronicle/commit/9c468dd6c758706b76191fc42e9ab75f3b9c1b99))

## [1.0.0-beta.14](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2022-08-30)

### Features

- **db:** add some basic db tests ([#567](https://github.com/iotaledger/inx-chronicle/issues/567)) ([68d03af](https://github.com/iotaledger/inx-chronicle/commit/68d03af30a10e7747211e5764251140718d5198e))
- **db:** make connection pool size configurable ([#613](https://github.com/iotaledger/inx-chronicle/issues/613)) ([fca6560](https://github.com/iotaledger/inx-chronicle/commit/fca6560ce00c26029f16b93459284333b72a14de))
- **inx:** check for stale database before syncing ([#616](https://github.com/iotaledger/inx-chronicle/issues/616)) ([a6d8b41](https://github.com/iotaledger/inx-chronicle/commit/a6d8b41d69432778da7aeb48916aed9e40b7145f))

### Bug Fixes

- **ci:** install protoc in `udeps` workflow ([#617](https://github.com/iotaledger/inx-chronicle/issues/617)) ([f245971](https://github.com/iotaledger/inx-chronicle/commit/f245971dfd36bb295cdbc7b4a1d4fdaac97e0a01))

## [1.0.0-beta.13](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2022-08-29)

### Features

- **db:** use `db.run_command` for faster bulk updates ([#604](https://github.com/iotaledger/inx-chronicle/issues/604)) ([efa5499](https://github.com/iotaledger/inx-chronicle/commit/efa5499a6d48440276d6345cc2d7e520391f44b7))

## [1.0.0-beta.12](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2022-08-26)

### ⚠ BREAKING CHANGES

- **db:** proper use of `_id` fields (#596)

### Features

- **bin:** add `INX_ADDR` environment var ([#599](https://github.com/iotaledger/inx-chronicle/issues/599)) ([4b19464](https://github.com/iotaledger/inx-chronicle/commit/4b194640015e68d098fb9fb0d03c9817a0ad3d8e)), closes [#595](https://github.com/iotaledger/inx-chronicle/issues/595) [#596](https://github.com/iotaledger/inx-chronicle/issues/596)
- **db:** proper use of `_id` fields ([#596](https://github.com/iotaledger/inx-chronicle/issues/596)) ([c8d4abe](https://github.com/iotaledger/inx-chronicle/commit/c8d4abee396de4750b15de47057f4031ca2bc3ea))

### Bug Fixes

- **api:** remove `u32` from `transaction-included-block` endpoint ([#595](https://github.com/iotaledger/inx-chronicle/issues/595)) ([9a0c4d6](https://github.com/iotaledger/inx-chronicle/commit/9a0c4d6366f13c166865980fe018f51c3c376c1b))
- **inx:** stop excess polling in the ledger update stream ([#602](https://github.com/iotaledger/inx-chronicle/issues/602)) ([baec10b](https://github.com/iotaledger/inx-chronicle/commit/baec10bf0fa14c160ddd196e0eb0d3ee8479d894))

## [1.0.0-beta.11](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2022-08-24)

### Features

- **analytics:** add nft and native token activity endpoints ([#560](https://github.com/iotaledger/inx-chronicle/issues/560)) ([74f53d0](https://github.com/iotaledger/inx-chronicle/commit/74f53d0a8bdc7316dccb6a64c5c105d559e5f4e7))
- **api:** add `max_page_size` configuration ([#563](https://github.com/iotaledger/inx-chronicle/issues/563)) ([ca7091d](https://github.com/iotaledger/inx-chronicle/commit/ca7091d6ed18cc973471f084984fb47fca17e10e))
- **db:** use `insertMany` for initial unspent outputs ([#566](https://github.com/iotaledger/inx-chronicle/issues/566)) ([146d5b8](https://github.com/iotaledger/inx-chronicle/commit/146d5b83616b35cfd489faa80c757cacce26e6fb)), closes [#587](https://github.com/iotaledger/inx-chronicle/issues/587)
- **metrics:** use `metrics` create and provide Grafana dashboard ([#577](https://github.com/iotaledger/inx-chronicle/issues/577)) ([e55eb0c](https://github.com/iotaledger/inx-chronicle/commit/e55eb0c91ff3111218a6bb9fbc2e18cec36a86fd))

### Bug Fixes

- **api:** unify Indexer responses to `IndexerOutputsResponse` ([#585](https://github.com/iotaledger/inx-chronicle/issues/585)) ([5e1edab](https://github.com/iotaledger/inx-chronicle/commit/5e1edab2dcae1930b8968ed63beccc7301857025))
- **ci:** install `protoc` in `coverage` workflow ([#574](https://github.com/iotaledger/inx-chronicle/issues/574)) ([45c93cb](https://github.com/iotaledger/inx-chronicle/commit/45c93cbc388dd487c2bcd866e5b1f75f41b34c8b))
- **ci:** use `cargo-hack` in `canary` builds ([#570](https://github.com/iotaledger/inx-chronicle/issues/570)) ([706f018](https://github.com/iotaledger/inx-chronicle/commit/706f018c611eea25d3bbcfd560d4283293918bc4))

## [1.0.0-beta.10](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2022-08-17)

### Features

- **analytics:** add `richest-addresses` and `token-distribution` endpoints ([#523](https://github.com/iotaledger/inx-chronicle/issues/523)) ([99049b6](https://github.com/iotaledger/inx-chronicle/commit/99049b6dbe36943418d5cfc2ae676d6520840927))
- **docker:** `production` builds and support `hornet-nest` ([#557](https://github.com/iotaledger/inx-chronicle/issues/557)) ([70fe622](https://github.com/iotaledger/inx-chronicle/commit/70fe622607f2024ee0eec67c35994cd5f1083090))
- **metrics:** use `tracing` instead of `log` ([#554](https://github.com/iotaledger/inx-chronicle/issues/554)) ([3a585ad](https://github.com/iotaledger/inx-chronicle/commit/3a585ad2f83905d49e8714cba77091ca1010b17f))

## [1.0.0-beta.9](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2022-08-16)

### Bug Fixes

- **api:** update Indexer API query params ([#548](https://github.com/iotaledger/inx-chronicle/issues/548)) ([9451e88](https://github.com/iotaledger/inx-chronicle/commit/9451e8813c97d3f77090d9f80c9f0fda311f2fdf))
- **inx:** stream mapper ([#532](https://github.com/iotaledger/inx-chronicle/issues/532)) ([4d6a13a](https://github.com/iotaledger/inx-chronicle/commit/4d6a13a5176ba9aa76520e6f4f97137a84f30292))

## [1.0.0-beta.8](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2022-08-05)

### Bug Fixes

- **api:** activity analytics ([#529](https://github.com/iotaledger/inx-chronicle/issues/529)) ([a9b294a](https://github.com/iotaledger/inx-chronicle/commit/a9b294a47f0f633d027e31b127f9fded7d06dc4a))
- **inx:** stream-based mapper ([#528](https://github.com/iotaledger/inx-chronicle/issues/528)) ([0d29b37](https://github.com/iotaledger/inx-chronicle/commit/0d29b379d37a9b5f29bb58fa351c7cc25b40b8fb))

## [1.0.0-beta.7](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2022-08-04)

### Features

- **analytics:** implement ledger and most activity-based analytics ([#482](https://github.com/iotaledger/inx-chronicle/issues/482)) ([755f9d2](https://github.com/iotaledger/inx-chronicle/commit/755f9d2efe0006da5f0bd0f7a72bd6d8f07360be))
- **inx:** switch to stream-based updates ([#524](https://github.com/iotaledger/inx-chronicle/issues/524)) ([8ded3c0](https://github.com/iotaledger/inx-chronicle/commit/8ded3c0b3400e25e46443ac7b1aa7ea77e0b5da3))

### Bug Fixes

- **api:** remove `gaps` endpoint ([#511](https://github.com/iotaledger/inx-chronicle/issues/511)) ([2befce8](https://github.com/iotaledger/inx-chronicle/commit/2befce8639653b402227ebd1b7214cac7cfc9954))

## [1.0.0-beta.6](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2022-08-02)

### ⚠ BREAKING CHANGES

- **db:** use transactions and batch inserts where possible (#510)

### Features

- **db:** use transactions and batch inserts where possible ([#510](https://github.com/iotaledger/inx-chronicle/issues/510)) ([0e255bd](https://github.com/iotaledger/inx-chronicle/commit/0e255bd422e877beeadddc4e044d61d11bf21b8d))
- **docker:** add `depends_on` for `inx-chronicle` ([#512](https://github.com/iotaledger/inx-chronicle/issues/512)) ([6674cb4](https://github.com/iotaledger/inx-chronicle/commit/6674cb41bd427629a6f5fba82f34a1b02c4d0c2f))

### Bug Fixes

- **db:** 500 on hitting the `balance/` endpoint ([#491](https://github.com/iotaledger/inx-chronicle/issues/491)) ([fe4a71c](https://github.com/iotaledger/inx-chronicle/commit/fe4a71c59eadf2c8281474ee94b5f3a437882159))

## [1.0.0-beta.5](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-08-01)

### Features

- **api:** deny unknown query fields ([#492](https://github.com/iotaledger/inx-chronicle/issues/492)) ([7258d58](https://github.com/iotaledger/inx-chronicle/commit/7258d58b4fcdc6c59ed9cce0d8213c2ff8ced9e9))
- **db:** better reporting and logging ([#493](https://github.com/iotaledger/inx-chronicle/issues/493)) ([8eaddc6](https://github.com/iotaledger/inx-chronicle/commit/8eaddc6e8eb7cca46eb9ff348a63b9b40a85b2fd))
- **docker:** use `replSet` in `docker-compose` ([#506](https://github.com/iotaledger/inx-chronicle/issues/506)) ([13ed2c5](https://github.com/iotaledger/inx-chronicle/commit/13ed2c5a22ab51e6c8d3b1ff24a620f521a7ecc5))
- **inx:** add time logging ([#508](https://github.com/iotaledger/inx-chronicle/issues/508)) ([df329a3](https://github.com/iotaledger/inx-chronicle/commit/df329a3b12ea0e285fbcb6f2e8d5d251bec57d53))

### Bug Fixes

- **api:** re-enable utxo-changes route ([#490](https://github.com/iotaledger/inx-chronicle/issues/490)) ([3697f27](https://github.com/iotaledger/inx-chronicle/commit/3697f27f761a2547fbcf0ea528c9ed01d2407ac6))
- **db:** better indexation for `insert_ledger_updates` ([#507](https://github.com/iotaledger/inx-chronicle/issues/507)) ([dd4d796](https://github.com/iotaledger/inx-chronicle/commit/dd4d79626bf246a9d2c8c351a70b29be39a3e8bd))
- **inx:** remove `ConeStream` and `Syncer` ([#500](https://github.com/iotaledger/inx-chronicle/issues/500)) ([4dc2aa1](https://github.com/iotaledger/inx-chronicle/commit/4dc2aa15433b8a118b336c10e72d2f06e6d989dc))

## [1.0.0-beta.4](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2022-07-28)

### Bug Fixes

- **inx:** sync gaps with single milestone ([#487](https://github.com/iotaledger/inx-chronicle/issues/487)) ([d689c8c](https://github.com/iotaledger/inx-chronicle/commit/d689c8c33e190304f6e070e7ae5d1632507b824a))

## [1.0.0-beta.3](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2022-07-28)

### Bug Fixes

- **db:** projection in `get_gaps` ([#485](https://github.com/iotaledger/inx-chronicle/issues/485)) ([9170c11](https://github.com/iotaledger/inx-chronicle/commit/9170c11ef76ea579b146104bd6d63ed7f531a86c))
- **indexer:** correct parsing error in indexer output by id ([#481](https://github.com/iotaledger/inx-chronicle/issues/481)) ([eb212ec](https://github.com/iotaledger/inx-chronicle/commit/eb212ecbb9a632aeabe4af927893535e3ff3e184))

## [1.0.0-beta.2](https://github.com/iotaledger/inx-chronicle/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2022-07-27)

### ⚠ BREAKING CHANGES

- **db:** fix status and milestone queries (#478)

### Bug Fixes

- **db:** fix status and milestone queries ([#478](https://github.com/iotaledger/inx-chronicle/issues/478)) ([44aece3](https://github.com/iotaledger/inx-chronicle/commit/44aece32bfc01cc4629e6e43cf0f9cdd2ceae75d))
- **inx:** better error reporting ([#479](https://github.com/iotaledger/inx-chronicle/issues/479)) ([14329b6](https://github.com/iotaledger/inx-chronicle/commit/14329b62f331e1c7474a653bffbf35f52f0e6f27))

## [1.0.0-beta.1](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.15...v1.0.0-beta.1) (2022-07-27)

### ⚠ BREAKING CHANGES

- **db:** combine milestone index and timestamp (#476)
- **db:** remove `output_id` and `block_id` (#471)

### Features

- **api:** implement `balance/` endpoint ([#388](https://github.com/iotaledger/inx-chronicle/issues/388)) ([57ec3aa](https://github.com/iotaledger/inx-chronicle/commit/57ec3aade1d74c0a365ed538da933e4ca936e286))
- **indexer:** add Indexer API ([#429](https://github.com/iotaledger/inx-chronicle/issues/429)) ([822b0a5](https://github.com/iotaledger/inx-chronicle/commit/822b0a592bb114a7318bac0874ec13e9c3d9cee5))
- **inx:** use `bee-inx` ([#470](https://github.com/iotaledger/inx-chronicle/issues/470)) ([1426dc8](https://github.com/iotaledger/inx-chronicle/commit/1426dc878d764fd3c81195c52a9e205028a9f710))

### Bug Fixes

- **api:** add max page size and tests ([#468](https://github.com/iotaledger/inx-chronicle/issues/468)) ([ed797eb](https://github.com/iotaledger/inx-chronicle/commit/ed797eb70494324ba198a648eb0acb689b409d86))
- **api:** fix missing camel case renaming ([#457](https://github.com/iotaledger/inx-chronicle/issues/457)) ([d0446d2](https://github.com/iotaledger/inx-chronicle/commit/d0446d2a8f5fcd9e59d5642585cb8d3a1e9d3e92))
- **db:** fix block children endpoint ([#475](https://github.com/iotaledger/inx-chronicle/issues/475)) ([0ad9ba0](https://github.com/iotaledger/inx-chronicle/commit/0ad9ba098d8467865fefed2675874f73289da136))
- **db:** remove `output_id` and `block_id` ([#471](https://github.com/iotaledger/inx-chronicle/issues/471)) ([d5041a6](https://github.com/iotaledger/inx-chronicle/commit/d5041a63fe6133f144bb9806faca63622212a818))
- **types:** inputs commitment conversion ([#459](https://github.com/iotaledger/inx-chronicle/issues/459)) ([ceb736b](https://github.com/iotaledger/inx-chronicle/commit/ceb736b33b442b44d1a50a8f642bfad45296e5b0))

### Miscellaneous Chores

- **db:** combine milestone index and timestamp ([#476](https://github.com/iotaledger/inx-chronicle/issues/476)) ([8470cae](https://github.com/iotaledger/inx-chronicle/commit/8470caef7f1a6255c3b75abbb654fa0c77331cb1))

## [0.1.0-alpha.15](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.14...v0.1.0-alpha.15) (2022-07-19)

### ⚠ BREAKING CHANGES

- **db:** remove duplicates from transaction history (#445)

### Bug Fixes

- **ci:** qualify `Report` to avoid build errors ([#454](https://github.com/iotaledger/inx-chronicle/issues/454)) ([160b6af](https://github.com/iotaledger/inx-chronicle/commit/160b6aff63fc42460d08c41170c2adb19964a1f4))
- **db:** remove duplicates from transaction history ([#445](https://github.com/iotaledger/inx-chronicle/issues/445)) ([813dbb2](https://github.com/iotaledger/inx-chronicle/commit/813dbb2ce1de228d51cc9ec9689a1382bc0d5060))

## [0.1.0-alpha.14](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.13...v0.1.0-alpha.14) (2022-07-15)

### Bug Fixes

- **ci:** improve feature handling and CI ([#428](https://github.com/iotaledger/inx-chronicle/issues/428)) ([633767d](https://github.com/iotaledger/inx-chronicle/commit/633767d9cf45840ff29f66e6c3f25cbab7b770b2))
- **db:** ledger updates sort order ([#441](https://github.com/iotaledger/inx-chronicle/issues/441)) ([df0786d](https://github.com/iotaledger/inx-chronicle/commit/df0786da13bfaca016c6da741925c5fc33ff553b))

## [0.1.0-alpha.13](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.12...v0.1.0-alpha.13) (2022-07-14)

### Bug Fixes

- **api:** improve `is_healthy` checking ([#436](https://github.com/iotaledger/inx-chronicle/issues/436)) ([683efa4](https://github.com/iotaledger/inx-chronicle/commit/683efa48396445e72b9274532de3e908dd8dfc25))

## [0.1.0-alpha.12](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.11...v0.1.0-alpha.12) (2022-07-12)

### Features

- **analytics:** enable `/addresses` endpoint ([#420](https://github.com/iotaledger/inx-chronicle/issues/420)) ([fc082cd](https://github.com/iotaledger/inx-chronicle/commit/fc082cdd9c5e3e186c46df6cf13bc45bb71e8678))

### Bug Fixes

- **api:** remove `inx` from `is_healthy` check ([#415](https://github.com/iotaledger/inx-chronicle/issues/415)) ([6a7bdce](https://github.com/iotaledger/inx-chronicle/commit/6a7bdce3cb22d682a2d4537842a9e47d09136280))
- properly merge `ENV` and `config.template.toml` ([#418](https://github.com/iotaledger/inx-chronicle/issues/418)) ([3167d8d](https://github.com/iotaledger/inx-chronicle/commit/3167d8de47a7dd70f9052a302e8a3fb6aad59f54))

## [0.1.0-alpha.11](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.10...v0.1.0-alpha.11) (2022-07-11)

### Features

- **config:** set `api`, `inx`, `metrics` features dynamically ([#397](https://github.com/iotaledger/inx-chronicle/issues/397)) ([3140767](https://github.com/iotaledger/inx-chronicle/commit/31407675d1890e1edbfd94ed770a58dcb9366e45))
- **metrics:** differentiate b/n `metrics` and `metrics-debug` ([#403](https://github.com/iotaledger/inx-chronicle/issues/403)) ([6839203](https://github.com/iotaledger/inx-chronicle/commit/68392034f6b62559d6992866a2a90c9b3728ece9))

### Bug Fixes

- add `ErrorLevel` trait to specify error log levels ([#405](https://github.com/iotaledger/inx-chronicle/issues/405)) ([3cc1cac](https://github.com/iotaledger/inx-chronicle/commit/3cc1cace9edcc1e5edae16185ce4abb4cc7a1b99))
- **api:** add ledger index to output queries ([#336](https://github.com/iotaledger/inx-chronicle/issues/336)) ([f35d103](https://github.com/iotaledger/inx-chronicle/commit/f35d1036870b957f0695277a92c93fb87eea71a0))
- **db:** add `unlock_condition` to `id_index` ([#402](https://github.com/iotaledger/inx-chronicle/issues/402)) ([e0145b3](https://github.com/iotaledger/inx-chronicle/commit/e0145b376ee12cdae792af62283e9c2e669804d7))
- **metrics:** correctly set Prometheus targets ([#404](https://github.com/iotaledger/inx-chronicle/issues/404)) ([250ccbf](https://github.com/iotaledger/inx-chronicle/commit/250ccbfcbcb2b9e8dc9ecffb37bff1e6df3ff23f))

## [0.1.0-alpha.10](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.9...v0.1.0-alpha.10) (2022-07-06)

### Features

- **api:** implement `is_healthy` check for `health/` API endpoint ([#339](https://github.com/iotaledger/inx-chronicle/issues/339)) ([7c95e56](https://github.com/iotaledger/inx-chronicle/commit/7c95e564121008904765641a3bce8047e07d1a33))

### Bug Fixes

- **db:** fix sorted paginated ledger update queries ([#371](https://github.com/iotaledger/inx-chronicle/issues/371)) ([7595aea](https://github.com/iotaledger/inx-chronicle/commit/7595aea36289d048be485d86838a816828e5c89d))
- **db:** prevent duplicate inserts of `LedgerUpdateDocument`s ([#373](https://github.com/iotaledger/inx-chronicle/issues/373)) ([d961653](https://github.com/iotaledger/inx-chronicle/commit/d961653b5e484ec25f07d2568ee0ce981c34ca96))
- **platform:** support shutdown in Docker environment ([#366](https://github.com/iotaledger/inx-chronicle/issues/366)) ([8cead0e](https://github.com/iotaledger/inx-chronicle/commit/8cead0e89cb9678d75114780cba70c03dfa9cbd2))

## [0.1.0-alpha.9](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.8...v0.1.0-alpha.9) (2022-06-30)

### Features

- **api:** add `ledger/updates/by-milestone` endpoint ([#326](https://github.com/iotaledger/inx-chronicle/issues/326)) ([dbef5f1](https://github.com/iotaledger/inx-chronicle/commit/dbef5f13573a6021d20e8ff38022a13d47073e95))
- **api:** support sort option in queries ([#363](https://github.com/iotaledger/inx-chronicle/issues/363)) ([db116f3](https://github.com/iotaledger/inx-chronicle/commit/db116f3aca5fb43a466ea574637f49c3f2d130fb))

### Bug Fixes

- **api:** add serde rename on fields ([#362](https://github.com/iotaledger/inx-chronicle/issues/362)) ([5a8bab7](https://github.com/iotaledger/inx-chronicle/commit/5a8bab7ff11e3f6d6195f44c9cc3bec87479ef93))
- **config:** print file path on file read error ([#354](https://github.com/iotaledger/inx-chronicle/issues/354)) ([09849bc](https://github.com/iotaledger/inx-chronicle/commit/09849bc5d7d9a906f542386c5544e2374a1cf590))

## [0.1.0-alpha.8](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.7...v0.1.0-alpha.8) (2022-06-27)

### ⚠ BREAKING CHANGES

- **runtime:** allow adding streams to own event loop (#284)

### Features

- **api:** add JWT authentication ([#281](https://github.com/iotaledger/inx-chronicle/issues/281)) ([6510cb1](https://github.com/iotaledger/inx-chronicle/commit/6510cb1747a4cc1de3420b53e0df216740452a1f)), closes [#205](https://github.com/iotaledger/inx-chronicle/issues/205)
- **api:** implement the raw bytes endpoint for milestones ([#340](https://github.com/iotaledger/inx-chronicle/issues/340)) ([0134fc4](https://github.com/iotaledger/inx-chronicle/commit/0134fc471381d32cb6ea74b4904dd5e327884e04))
- **inx:** more detailed logging of INX events ([#349](https://github.com/iotaledger/inx-chronicle/issues/349)) ([986cdbf](https://github.com/iotaledger/inx-chronicle/commit/986cdbf6d8524caf9d47f141562fe59436f3f932))
- **runtime:** allow adding streams to own event loop ([#284](https://github.com/iotaledger/inx-chronicle/issues/284)) ([c50db14](https://github.com/iotaledger/inx-chronicle/commit/c50db14c73b341441382f95d96157d724e45a732))

### Bug Fixes

- **api:** clean up receipt route handlers and db queries ([#344](https://github.com/iotaledger/inx-chronicle/issues/344)) ([aa09e5c](https://github.com/iotaledger/inx-chronicle/commit/aa09e5c0baab48d83351755224584fe317d55733))
- **doc:** fully document `config.template.toml` ([#345](https://github.com/iotaledger/inx-chronicle/issues/345)) ([ebd200c](https://github.com/iotaledger/inx-chronicle/commit/ebd200cb4b7e8db425148b91c9fe832d9c54522a))

## [0.1.0-alpha.7](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.6...v0.1.0-alpha.7) (2022-06-22)

### ⚠ BREAKING CHANGES

- **api:** TIP compliance for `history` API fields (#314)

### Bug Fixes

- **api:** rename `explorer` to `history` ([#313](https://github.com/iotaledger/inx-chronicle/issues/313)) ([517e53e](https://github.com/iotaledger/inx-chronicle/commit/517e53edbfcffa0da5d6cca1220a16b2f220bf53))
- **api:** TIP compliance for `history` API fields ([#314](https://github.com/iotaledger/inx-chronicle/issues/314)) ([ae2db5d](https://github.com/iotaledger/inx-chronicle/commit/ae2db5d90f214fc337bb6ba8920f161a6dafbc69))

## [0.1.0-alpha.6](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2022-06-21)

### ⚠ BREAKING CHANGES

- **api:** rename API `v2` to `core` (#308)
- **api:** fix endpoint prefixes (#302)
- **runtime:** make actors abortable from init (#279)

### Features

- **analytics:** add transaction analytics ([#292](https://github.com/iotaledger/inx-chronicle/issues/292)) ([8af160f](https://github.com/iotaledger/inx-chronicle/commit/8af160f32659f3fe15c65a98dc96e921ef51b75f))
- **runtime:** make actors abortable from init ([#279](https://github.com/iotaledger/inx-chronicle/issues/279)) ([3784e7d](https://github.com/iotaledger/inx-chronicle/commit/3784e7d840e9c7c8dc4d3fbb26bd19da799925a0))

### Bug Fixes

- **api:** fix endpoint prefixes ([#302](https://github.com/iotaledger/inx-chronicle/issues/302)) ([b9ec4f9](https://github.com/iotaledger/inx-chronicle/commit/b9ec4f96a30859da6ffc6463b9c15817dcfce0f9))
- **api:** rename API `v2` to `core` ([#308](https://github.com/iotaledger/inx-chronicle/issues/308)) ([a37b208](https://github.com/iotaledger/inx-chronicle/commit/a37b2080d756fbbb033804cac31759968ab1d264))

### Performance Improvements

- **inx:** remove clones in ledger update stream ([#298](https://github.com/iotaledger/inx-chronicle/issues/298)) ([f5606cb](https://github.com/iotaledger/inx-chronicle/commit/f5606cbdcc94ae05ed9c660d5d40aced766939a8))

## [0.1.0-alpha.5](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2022-06-15)

### Features

- add partial index for transaction id ([#293](https://github.com/iotaledger/inx-chronicle/issues/293)) ([dca0e88](https://github.com/iotaledger/inx-chronicle/commit/dca0e881e1cdf6390bce987b321416d010246932))

### Bug Fixes

- **db:** fix compound `transaction_id_index` ([#290](https://github.com/iotaledger/inx-chronicle/issues/290)) ([afc9dbb](https://github.com/iotaledger/inx-chronicle/commit/afc9dbb56051f2d1ae1227a484efa7045b807714))

## [0.1.0-alpha.4](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2022-06-15)

### Bug Fixes

- **db:** make `transaction_id_index` unique ([#287](https://github.com/iotaledger/inx-chronicle/issues/287)) ([622eba3](https://github.com/iotaledger/inx-chronicle/commit/622eba320d991dcbff0f49390c8b2acc3e50d250))
- **metrics:** use `with_graceful_shutdown` for metrics server ([#285](https://github.com/iotaledger/inx-chronicle/issues/285)) ([b91c1af](https://github.com/iotaledger/inx-chronicle/commit/b91c1af989369385c46bc3541ddf079d8294379a))

## [0.1.0-alpha.3](https://github.com/iotaledger/inx-chronicle/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2022-06-14)

### ⚠ BREAKING CHANGES

- **db:** fix uniqueness in `ledger_index` (#278)

### Bug Fixes

- **db:** fix uniqueness in `ledger_index` ([#278](https://github.com/iotaledger/inx-chronicle/issues/278)) ([b5b7367](https://github.com/iotaledger/inx-chronicle/commit/b5b73679658cd858869094463d4950f72b2427f1))

## [0.1.0-alpha.2](https://github.com/iotaledger/inx-chronicle/compare/3880235ca0fc51d19884ad4bd32ceaea958b4b7d...v0.1.0-alpha.2) (2022-06-14)

### ⚠ BREAKING CHANGES

- **db:** database improvements and cleanup (#253)
- **docker:** save MongoDB in `volume` (#264)
- **docker:** fix and document ports (#239)
- **inx:** check network name properly (#241)
- **config:** allow configuring database name (#240)
- **db:** replace `projections` with `aggregate` pipelines (#233)
- **db:** add cone white flag order (#232)
- syncer based on `inx::ReadMilestoneConeMetadata` (#177)
- **db:** store `Address` instead of `AliasAddress` in `Unlock` (#186)
- bump `inx` and update `MilestoneIndex` (#184)
- consolidate `db::model` and `types` (#181)
- rename `Block` and update `inx` (#163)
- **dto:** correct some structural issues with the dtos and add tests (#154)
- **collector:** add collector config and solidifier names (#134)
- **dto:** switch to `prefix_hex` for IDs (#135)
- improve compliance with core API spec (#116)
- remove `Archiver` (#125)

### Features

- add `incoming_requests` API metric ([#162](https://github.com/iotaledger/inx-chronicle/issues/162)) ([1f9de59](https://github.com/iotaledger/inx-chronicle/commit/1f9de59fc6e28a18141fd3a022bdc393a9228ba6))
- add `tokio-console` tracing ([#115](https://github.com/iotaledger/inx-chronicle/issues/115)) ([dc4ae5c](https://github.com/iotaledger/inx-chronicle/commit/dc4ae5cf1fdd32f7174bf461218f55f342524bc7))
- add manual actor name impls ([#204](https://github.com/iotaledger/inx-chronicle/issues/204)) ([24ab7a2](https://github.com/iotaledger/inx-chronicle/commit/24ab7a237657f59eab14d6454f30fd9ab462722e))
- **build:** optimize production builds ([#173](https://github.com/iotaledger/inx-chronicle/issues/173)) ([67a07e9](https://github.com/iotaledger/inx-chronicle/commit/67a07e91919f5cc67b3a6657ba7998ad261cca3b))
- **collector:** add collector config and solidifier names ([#134](https://github.com/iotaledger/inx-chronicle/issues/134)) ([095921b](https://github.com/iotaledger/inx-chronicle/commit/095921b59f521ec4681a42dadfdce52105e7ad1d))
- **config:** allow configuring database name ([#240](https://github.com/iotaledger/inx-chronicle/issues/240)) ([e13fe42](https://github.com/iotaledger/inx-chronicle/commit/e13fe4216d7bfcf5f31c5f0e5da76b0357830bd5))
- **db:** add cone white flag order ([#232](https://github.com/iotaledger/inx-chronicle/issues/232)) ([6b936b5](https://github.com/iotaledger/inx-chronicle/commit/6b936b556e79c4fc8171f362cc22a83653e1fbf2))
- **db:** database improvements and cleanup ([#253](https://github.com/iotaledger/inx-chronicle/issues/253)) ([2f4d54a](https://github.com/iotaledger/inx-chronicle/commit/2f4d54ad0880de7714c07013bd19222a69bf152a)), closes [#244](https://github.com/iotaledger/inx-chronicle/issues/244)
- **docker:** save MongoDB in `volume` ([#264](https://github.com/iotaledger/inx-chronicle/issues/264)) ([2f62df6](https://github.com/iotaledger/inx-chronicle/commit/2f62df642daf4e8217ec195bcd85c8cd094a88c8))
- **inx:** check network name properly ([#241](https://github.com/iotaledger/inx-chronicle/issues/241)) ([4dcb963](https://github.com/iotaledger/inx-chronicle/commit/4dcb9633bf4b59eaae3c36a28c03b6c64e67abfe))
- **inx:** retry on INX connection errors ([#243](https://github.com/iotaledger/inx-chronicle/issues/243)) ([7173fd3](https://github.com/iotaledger/inx-chronicle/commit/7173fd33ba3cb3b8578400378edd570e04003437))
- **metrics:** add channel metrics to runtime ([#169](https://github.com/iotaledger/inx-chronicle/issues/169)) ([afbf3a4](https://github.com/iotaledger/inx-chronicle/commit/afbf3a4410254f4c306abed8fd43b050c430c990))
- **metrics:** add initial support for metrics ([#123](https://github.com/iotaledger/inx-chronicle/issues/123)) ([c6ed8a6](https://github.com/iotaledger/inx-chronicle/commit/c6ed8a68b09a745a127f57ee57cef6313eda4059))
- **metrics:** add size metric to MongoDB ([#183](https://github.com/iotaledger/inx-chronicle/issues/183)) ([ef8b125](https://github.com/iotaledger/inx-chronicle/commit/ef8b1251be7c1b0844328bbaca876d2f4b5ac1d8))
- **metrics:** add solidification counter metric ([#170](https://github.com/iotaledger/inx-chronicle/issues/170)) ([46f5bcb](https://github.com/iotaledger/inx-chronicle/commit/46f5bcb83afccb1b01cabadb16f150fab59a9b7a))
- **model:** use arrays to store bytes when possible ([#206](https://github.com/iotaledger/inx-chronicle/issues/206)) ([a304a94](https://github.com/iotaledger/inx-chronicle/commit/a304a94125282df0ca38921e9b25531f7b2fd248))
- syncer based on `inx::ReadMilestoneConeMetadata` ([#177](https://github.com/iotaledger/inx-chronicle/issues/177)) ([1a2da15](https://github.com/iotaledger/inx-chronicle/commit/1a2da15b8039176db9f178e4e79428f3f33825ee))
- **types:** add Copy and `Into<Bson>` impls ([#230](https://github.com/iotaledger/inx-chronicle/issues/230)) ([165303c](https://github.com/iotaledger/inx-chronicle/commit/165303c064034a8a20ffd09df8c6217bd60ffaa0))

### Bug Fixes

- `unreachable_pub` instances and add compiler warning ([#143](https://github.com/iotaledger/inx-chronicle/issues/143)) ([ea77593](https://github.com/iotaledger/inx-chronicle/commit/ea77593b1cfc82d55b46ebaf98b6eeabe830de02))
- **api:** clean up `impl_success_response` ([#130](https://github.com/iotaledger/inx-chronicle/issues/130)) ([e5097d7](https://github.com/iotaledger/inx-chronicle/commit/e5097d719584c837fb8b958d29b0a8ce8018f7a8))
- bump `inx` and update `MilestoneIndex` ([#184](https://github.com/iotaledger/inx-chronicle/issues/184)) ([01c6926](https://github.com/iotaledger/inx-chronicle/commit/01c6926403a84dbc22f168f69c73041d8ccf0940))
- **ci:** create images on `release` instead of `tags` ([#272](https://github.com/iotaledger/inx-chronicle/issues/272)) ([62f9f6c](https://github.com/iotaledger/inx-chronicle/commit/62f9f6cbdad3a0cb0847e19ab918fdcb08ea608c))
- **collector:** merge the collector and inx ([#141](https://github.com/iotaledger/inx-chronicle/issues/141)) ([1406a9f](https://github.com/iotaledger/inx-chronicle/commit/1406a9f6e87ec64c638d3ace15567ed45924b7a4))
- **collector:** re-add list of `visited` messages ([#131](https://github.com/iotaledger/inx-chronicle/issues/131)) ([02bcdbb](https://github.com/iotaledger/inx-chronicle/commit/02bcdbb541999ebdb261b2ee9f5484f2f32c5ef0))
- consolidate `db::model` and `types` ([#181](https://github.com/iotaledger/inx-chronicle/issues/181)) ([65ae364](https://github.com/iotaledger/inx-chronicle/commit/65ae364a2407f1979b21f5d89e4c26ca126434a0))
- **db:** Rename `message_id` to `_id` ([#172](https://github.com/iotaledger/inx-chronicle/issues/172)) ([d5da16a](https://github.com/iotaledger/inx-chronicle/commit/d5da16a3780c7298e1fe62d36c5707321b7d5bc0))
- **db:** replace `projections` with `aggregate` pipelines ([#233](https://github.com/iotaledger/inx-chronicle/issues/233)) ([d7d1643](https://github.com/iotaledger/inx-chronicle/commit/d7d1643a57f418fec5550ad8c24a63986a2c91a6))
- **db:** store `Address` instead of `AliasAddress` in `Unlock` ([#186](https://github.com/iotaledger/inx-chronicle/issues/186)) ([f3c52a6](https://github.com/iotaledger/inx-chronicle/commit/f3c52a662322443115808464bd3bea8f247772a1))
- **deps:** update Hornet to `v2.0.0-alpha14` ([#189](https://github.com/iotaledger/inx-chronicle/issues/189)) ([7f21210](https://github.com/iotaledger/inx-chronicle/commit/7f2121071730e4cc75fcb79b5fe43c7c890758e9))
- **docker:** fix `Dockerfile` ([#194](https://github.com/iotaledger/inx-chronicle/issues/194)) ([d0be40e](https://github.com/iotaledger/inx-chronicle/commit/d0be40e8e53484433fb74e85a2f357a2628b38ef))
- **docker:** revert to `--release` profile due to `cargo-chef` ([#220](https://github.com/iotaledger/inx-chronicle/issues/220)) ([82be5ec](https://github.com/iotaledger/inx-chronicle/commit/82be5ec027e9ec8d75d4f15397784f25edb4f414))
- **dto:** correct some structural issues with the dtos and add tests ([#154](https://github.com/iotaledger/inx-chronicle/issues/154)) ([cef8e8a](https://github.com/iotaledger/inx-chronicle/commit/cef8e8a3b681fae49ad0cecc586a13508cd2a048))
- **dto:** switch to `prefix_hex` for IDs ([#135](https://github.com/iotaledger/inx-chronicle/issues/135)) ([5c85c2a](https://github.com/iotaledger/inx-chronicle/commit/5c85c2ab7de9095282ccbb4016be59613152a36c))
- improve compliance with core API spec ([#116](https://github.com/iotaledger/inx-chronicle/issues/116)) ([84ec1af](https://github.com/iotaledger/inx-chronicle/commit/84ec1af49bad3b27be84144c42d697e52974dbf0))
- Make `solidifiers` immutable ([#159](https://github.com/iotaledger/inx-chronicle/issues/159)) ([8c55537](https://github.com/iotaledger/inx-chronicle/commit/8c5553720c2d8d5d09f90d519643bbe9ad989684))
- rename `Block` and update `inx` ([#163](https://github.com/iotaledger/inx-chronicle/issues/163)) ([e12a925](https://github.com/iotaledger/inx-chronicle/commit/e12a925f3392883ec39cec69ee147e26d10da4a3))
- **runtime:** use `warn!` instead of `error!` ([#271](https://github.com/iotaledger/inx-chronicle/issues/271)) ([6389916](https://github.com/iotaledger/inx-chronicle/commit/638991612392d9eb16b4920cc7ba42fcc3f1082c))
- **syncer:** clamp the syncer milestones properly ([#203](https://github.com/iotaledger/inx-chronicle/issues/203)) ([8cf40c5](https://github.com/iotaledger/inx-chronicle/commit/8cf40c5817cfbdd67f61dfe269500b281df33014))
- update `bee-metrics` and log first error for process metrics ([#176](https://github.com/iotaledger/inx-chronicle/issues/176)) ([09d1cd1](https://github.com/iotaledger/inx-chronicle/commit/09d1cd108000cfe81217d5708c6604ed530a3658))

### Reverts

- Revert "Remove cross-plattform Docker images (#60)" (#62) ([3880235](https://github.com/iotaledger/inx-chronicle/commit/3880235ca0fc51d19884ad4bd32ceaea958b4b7d)), closes [#60](https://github.com/iotaledger/inx-chronicle/issues/60) [#62](https://github.com/iotaledger/inx-chronicle/issues/62)

### Miscellaneous Chores

- **docker:** fix and document ports ([#239](https://github.com/iotaledger/inx-chronicle/issues/239)) ([9c68717](https://github.com/iotaledger/inx-chronicle/commit/9c68717d364ef2d2908ead76fdd17e62f6786648))
- remove `Archiver` ([#125](https://github.com/iotaledger/inx-chronicle/issues/125)) ([9249cf1](https://github.com/iotaledger/inx-chronicle/commit/9249cf1b643d1e45e4286e3942564d347492351b))
