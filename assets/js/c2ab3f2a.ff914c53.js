"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10881],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,o(o({ref:e},s),{},{components:r})):n.createElement(b,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92414:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o=void 0,c={unversionedId:"libraries/java/api/MqttManager",id:"libraries/java/api/MqttManager",title:"MqttManager",description:"withTopic(topic): MqttTopicManager",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MqttManager",permalink:"/iota.rs/libraries/java/api/MqttManager",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"withTopic(topic): MqttTopicManager",id:"withtopictopic-mqtttopicmanager",level:3},{value:"withTopics(topics): MqttTopicManager",id:"withtopicstopics-mqtttopicmanager",level:3},{value:"unsubscribe(): void",id:"unsubscribe-void",level:3},{value:"disconnect(): void",id:"disconnect-void",level:3}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"withtopictopic-mqtttopicmanager"},"withTopic(topic): ",(0,a.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,a.kt)("p",null,"Add a new topic to the list."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topic"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#topic"},"Topic")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"withtopicstopics-mqtttopicmanager"},"withTopics(topics): ",(0,a.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,a.kt)("p",null,"Add a collection of topics to the list."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topics"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#topic"},"Topic[]")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"unsubscribe-void"},"unsubscribe(): void"),(0,a.kt)("p",null,"Unsubscribes from all subscriptions."),(0,a.kt)("h3",{id:"disconnect-void"},"disconnect(): void"),(0,a.kt)("p",null,"Disconnects the broker.\nThis will clear the stored topic handlers and close the MQTT connection."))}u.isMDXComponent=!0}}]);