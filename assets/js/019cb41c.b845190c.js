"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4011],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],r={description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/iota-wiki.png",keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO","explanation"]},l="Nodes 101",d={unversionedId:"explanations/nodes_101",id:"explanations/nodes_101",title:"Nodes 101",description:"Introducing nodes and what they can do in the IOTA network (Tangle).",source:"@site/content/nodes/explanations/nodes_101.md",sourceDirName:"explanations",slug:"/explanations/nodes_101",permalink:"/nodes/explanations/nodes_101",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/content/nodes/explanations/nodes_101.md",tags:[],version:"current",lastUpdatedAt:1659306152,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{description:"Introducing nodes and what they can do in the IOTA network (Tangle).",image:"/img/iota-wiki.png",keywords:["IOTA Node","Hornet Node","messages","syncing","synchronizing","UTXO","explanation"]},sidebar:"nodes",previous:{title:"API Reference",permalink:"/nodes/api_reference"},next:{title:"Security 101",permalink:"/nodes/explanations/security_101"}},c={},h=[{value:"Attaching New Messages to the Tangle",id:"attaching-new-messages-to-the-tangle",level:2},{value:"Synchronizing With the Rest of the Network",id:"synchronizing-with-the-rest-of-the-network",level:2},{value:"Deciding Which Messages Are Confirmed",id:"deciding-which-messages-are-confirmed",level:2},{value:"Keeping a Record of the Balances on Addresses Via <code>UTXO</code>",id:"keeping-a-record-of-the-balances-on-addresses-via-utxo",level:2},{value:"Exposing APIs for Clients",id:"exposing-apis-for-clients",level:2},{value:"HTTP Rest API",id:"http-rest-api",level:3},{value:"Event API",id:"event-api",level:3}],p={toc:h};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodes-101"},"Nodes 101"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node 101",src:n(13320).Z,width:"862",height:"200"})),(0,i.kt)("p",null,"The IOTA network is a distributed type of network called Tangle. The network is distributed among several servers\ncalled nodes which are the backbone of an IOTA network."),(0,i.kt)("p",null,"Nodes are responsible for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Providing an API to interact with the Tangle/IOTA network."),(0,i.kt)("li",{parentName:"ul"},"Validating ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions"},"messages")," and ledger mutations for consistency."),(0,i.kt)("li",{parentName:"ul"},"Providing data for other nodes to synchronize to the latest state of the network.")),(0,i.kt)("h2",{id:"attaching-new-messages-to-the-tangle"},"Attaching New Messages to the Tangle"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"message")," is a data structure that is actually being broadcast in the IOTA network and represents a vertex in the\nTangle graph. When nodes receive a new message, they attach it to the Tangle by adding the message to their local database."),(0,i.kt)("p",null,"As a result, at any point in time, all nodes may have different messages in their local databases. These messages make\nup a node's view of the Tangle."),(0,i.kt)("p",null,"To distribute the messages across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,i.kt)("h2",{id:"synchronizing-with-the-rest-of-the-network"},"Synchronizing With the Rest of the Network"),(0,i.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with other nodes called neighbors to form a\nsingle source of truth."),(0,i.kt)("p",null,"When one node, no matter where it is in the world, receives a message, it will try to ",(0,i.kt)("em",{parentName:"p"},"gossip")," it to all its neighbors. This way, all of the nodes will eventually see all the messages, and store them in their local databases."),(0,i.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones. If the node has the history of messages that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received."),(0,i.kt)("p",null,"When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,i.kt)("h2",{id:"deciding-which-messages-are-confirmed"},"Deciding Which Messages Are Confirmed"),(0,i.kt)("p",null,"Messages remain pending until the node is sure of their validity."),(0,i.kt)("p",null,"Even when a message is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend."),(0,i.kt)("p",null,"When nodes detect double spends, they must decide which message to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol."),(0,i.kt)("h2",{id:"keeping-a-record-of-the-balances-on-addresses-via-utxo"},"Keeping a Record of the Balances on Addresses Via ",(0,i.kt)("inlineCode",{parentName:"h2"},"UTXO")),(0,i.kt)("p",null,"All nodes keep a record of the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#unspent-transaction-output-utxo"},"Unspent Transaction Outputs (UTXO)")," so they can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a transaction is not transferring more IOTA tokens than are available on the address."),(0,i.kt)("li",{parentName:"ul"},"Respond to clients' requests for their balance."),(0,i.kt)("li",{parentName:"ul"},"Once the node has confirmed a transaction with the Tangle, update the node's record of balances. ")),(0,i.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for Clients"),(0,i.kt)("p",null,"Nodes come with two sets of low-level APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP(rest) API."),(0,i.kt)("li",{parentName:"ul"},"Event API.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Developers do not need to communicate with nodes using a mentioned low-level API. Developers can leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/libraries/overview/"},"iota client libraries")," that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level.")),(0,i.kt)("h3",{id:"http-rest-api"},"HTTP Rest API"),(0,i.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get tip messages."),(0,i.kt)("li",{parentName:"ul"},"Attach new messages to the Tangle."),(0,i.kt)("li",{parentName:"ul"},"Do proof of work (POW)."),(0,i.kt)("li",{parentName:"ul"},"Get messages from the Tangle.")),(0,i.kt)("h3",{id:"event-api"},"Event API"),(0,i.kt)("p",null,"The Event API allows clients to poll nodes for new messages and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}u.isMDXComponent=!0},13320:function(e,t,n){t.Z=n.p+"assets/images/banner_nodes_101-9a0a66e0bbafccc87b8561d94134f8db.svg"}}]);