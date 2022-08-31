"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[81609],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,g=k["".concat(p,".").concat(s)]||k[s]||m[s]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},62563:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p=void 0,d={unversionedId:"configuration",id:"configuration",title:"configuration",description:"\x3c!---",source:"@site/content/build/inx-coordinator/develop/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/inx-coordinator/develop/configuration",draft:!1,editUrl:"https://github.com/iotaledger/inx-coordinator/edit/develop/documentation/content/build/inx-coordinator/develop/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Welcome to INX-Coordinator",permalink:"/inx-coordinator/develop/welcome"}},u={},m=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="inx"></a> 2. INX',id:"-2-inx",level:2},{value:'<a id="coordinator"></a> 3. Coordinator',id:"-3-coordinator",level:2},{value:'<a id="coordinator_signing"></a> Signing',id:"-signing",level:3},{value:'<a id="coordinator_quorum"></a> Quorum',id:"-quorum",level:3},{value:'<a id="coordinator_checkpoints"></a> Checkpoints',id:"-checkpoints",level:3},{value:'<a id="coordinator_tipsel"></a> Tipselection',id:"-tipselection",level:3},{value:'<a id="migrator"></a> 4. Migrator',id:"-4-migrator",level:2},{value:'<a id="receipts"></a> 5. Receipts',id:"-5-receipts",level:2},{value:'<a id="receipts_validator"></a> Validator',id:"-validator",level:3},{value:'<a id="receipts_validator_api"></a> API',id:"-api",level:3},{value:'<a id="receipts_validator_coordinator"></a> Coordinator',id:"-coordinator",level:3},{value:'<a id="profiling"></a> 6. Profiling',id:"-6-profiling",level:2}],k={toc:m};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"description: This section describes the configuration parameters and their types for INX-Coordinator.\nkeywords:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IOTA Node "),(0,l.kt)("li",{parentName:"ul"},"Hornet Node"),(0,l.kt)("li",{parentName:"ul"},"Coordinator"),(0,l.kt)("li",{parentName:"ul"},"Configuration"),(0,l.kt)("li",{parentName:"ul"},"JSON"),(0,l.kt)("li",{parentName:"ul"},"Customize"),(0,l.kt)("li",{parentName:"ul"},"Config"),(0,l.kt)("li",{parentName:"ul"},"reference")),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"INX-Coordinator uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,l.kt)("p",null,"You can change the path of the config file by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"inx-coordinator")," executable."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-coordinator -c config_defaults.json\n")),(0,l.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-coordinator -h --full\n")),(0,l.kt)("h2",{id:"-1-application"},(0,l.kt)("a",{id:"app"})," 1. Application"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5m"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "stopGracePeriod": "5m"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-2-inx"},(0,l.kt)("a",{id:"inx"})," 2. INX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-3-coordinator"},(0,l.kt)("a",{id:"coordinator"})," 3. Coordinator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stateFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the state file of the coordinator"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"coordinator.state"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval milestones are issued"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5s"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#coordinator_signing"},"signing")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for signing"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#coordinator_quorum"},"quorum")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#coordinator_checkpoints"},"checkpoints")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#coordinator_tipsel"},"tipsel")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for Tipselection"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-signing"},(0,l.kt)("a",{id:"coordinator_signing"})," Signing"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provider"),(0,l.kt)("td",{parentName:"tr",align:null},"The signing provider the coordinator uses to sign a milestone (local/remote)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"local"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The address of the remote signing provider (insecure connection!)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:12345"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the timeout between signing retries"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"2s"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the number of signing retries to perform before shutting down the node"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10")))),(0,l.kt)("h3",{id:"-quorum"},(0,l.kt)("a",{id:"coordinator_quorum"})," Quorum"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the coordinator quorum is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout until a node in the quorum must have answered"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"2s"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the quorum groups used to ask other nodes for correct ledger state of the coordinator."),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"see example below")))),(0,l.kt)("h3",{id:"-checkpoints"},(0,l.kt)("a",{id:"coordinator_checkpoints"})," Checkpoints"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTrackedBlocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum amount of known blocks for milestone tipselection. If this limit is exceeded, a new checkpoint is issued."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10000")))),(0,l.kt)("h3",{id:"-tipselection"},(0,l.kt)("a",{id:"coordinator_tipsel"})," Tipselection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minHeaviestBranchUnreferencedBlocksThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum threshold of unreferenced blocks in the heaviest branch"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxHeaviestBranchTipsPerCheckpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum amount of checkpoint blocks with heaviest branch tips that are picked if the heaviest branch is not below 'MinHeaviestBranchUnreferencedBlocksThreshold' before"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"randomTipsPerCheckpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of checkpoint blocks with random tips that are picked if a checkpoint is issued and at least one heaviest branch tip was found, otherwise no random tips will be picked"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"heaviestBranchSelectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum duration to select the heaviest branch tips"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"100ms"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "coordinator": {\n      "stateFilePath": "coordinator.state",\n      "interval": "5s",\n      "signing": {\n        "provider": "local",\n        "remoteAddress": "localhost:12345",\n        "retryTimeout": "2s",\n        "retryAmount": 10\n      },\n      "quorum": {\n        "enabled": false,\n        "timeout": "2s",\n        "groups": {}\n      },\n      "checkpoints": {\n        "maxTrackedBlocks": 10000\n      },\n      "tipsel": {\n        "minHeaviestBranchUnreferencedBlocksThreshold": 20,\n        "maxHeaviestBranchTipsPerCheckpoint": 10,\n        "randomTipsPerCheckpoint": 3,\n        "heaviestBranchSelectionTimeout": "100ms"\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-4-migrator"},(0,l.kt)("a",{id:"migrator"})," 4. Migrator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the migrator plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stateFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the state file of the migrator"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"migrator.state"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiptMaxEntries"),(0,l.kt)("td",{parentName:"tr",align:null},"The max amount of entries to embed within a receipt"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryCooldownPeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The cooldown period for the service to ask for new data from the legacy node in case the migrator encounters an error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5s"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "migrator": {\n      "enabled": false,\n      "stateFilePath": "migrator.state",\n      "receiptMaxEntries": 110,\n      "queryCooldownPeriod": "5s"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-5-receipts"},(0,l.kt)("a",{id:"receipts"})," 5. Receipts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#receipts_validator"},"validator")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for validator"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-validator"},(0,l.kt)("a",{id:"receipts_validator"})," Validator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#receipts_validator_api"},"api")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for API"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#receipts_validator_coordinator"},"coordinator")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for coordinator"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-api"},(0,l.kt)("a",{id:"receipts_validator_api"})," API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the legacy node API to query for white-flag confirmation data"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"http://localhost:14266"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout of API calls"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5s"')))),(0,l.kt)("h3",{id:"-coordinator"},(0,l.kt)("a",{id:"receipts_validator_coordinator"})," Coordinator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the legacy coordinator"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZ"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"merkleTreeDepth"),(0,l.kt)("td",{parentName:"tr",align:null},"Depth of the Merkle tree of the coordinator"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"24")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "receipts": {\n      "validator": {\n        "api": {\n          "address": "http://localhost:14266",\n          "timeout": "5s"\n        },\n        "coordinator": {\n          "address": "UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZ",\n          "merkleTreeDepth": 24\n        }\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-6-profiling"},(0,l.kt)("a",{id:"profiling"})," 6. Profiling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')))}s.isMDXComponent=!0}}]);