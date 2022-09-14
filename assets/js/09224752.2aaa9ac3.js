"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(i,".").concat(p)]||d[p]||g[p]||o;return n?s.createElement(v,a(a({ref:t},u),{},{components:n})):s.createElement(v,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"libraries/java/api/MetricsDto",id:"libraries/java/api/MetricsDto",title:"MetricsDto",description:"newMessages(): long",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MetricsDto.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MetricsDto",permalink:"/iota.rs/libraries/java/api/MetricsDto",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MetricsDto.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"newMessages(): long",id:"newmessages-long",level:3},{value:"receivedMessages(): long",id:"receivedmessages-long",level:3},{value:"knownMessages(): long",id:"knownmessages-long",level:3},{value:"receivedMessageRequests(): long",id:"receivedmessagerequests-long",level:3},{value:"receivedMilestoneRequests(): long",id:"receivedmilestonerequests-long",level:3},{value:"receivedHeartbeats(): long",id:"receivedheartbeats-long",level:3},{value:"sentMessages(): long",id:"sentmessages-long",level:3},{value:"sentMessageRequests(): long",id:"sentmessagerequests-long",level:3},{value:"sentMilestoneRequests(): long",id:"sentmilestonerequests-long",level:3},{value:"sentHeartbeats(): long",id:"sentheartbeats-long",level:3},{value:"droppedPackets(): long",id:"droppedpackets-long",level:3}],u={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"newmessages-long"},"newMessages(): long"),(0,r.kt)("p",null,"The amount of new messages received"),(0,r.kt)("h3",{id:"receivedmessages-long"},"receivedMessages(): long"),(0,r.kt)("p",null,"The amount of received messages"),(0,r.kt)("h3",{id:"knownmessages-long"},"knownMessages(): long"),(0,r.kt)("p",null,"The amount of received known messages"),(0,r.kt)("h3",{id:"receivedmessagerequests-long"},"receivedMessageRequests(): long"),(0,r.kt)("p",null,"The amount of received requested messages"),(0,r.kt)("h3",{id:"receivedmilestonerequests-long"},"receivedMilestoneRequests(): long"),(0,r.kt)("p",null,"The amount of received requested milestones"),(0,r.kt)("h3",{id:"receivedheartbeats-long"},"receivedHeartbeats(): long"),(0,r.kt)("p",null,"The amount of received heartbeats"),(0,r.kt)("h3",{id:"sentmessages-long"},"sentMessages(): long"),(0,r.kt)("p",null,"The amount of sent messages"),(0,r.kt)("h3",{id:"sentmessagerequests-long"},"sentMessageRequests(): long"),(0,r.kt)("p",null,"The amount of sent messages requests"),(0,r.kt)("h3",{id:"sentmilestonerequests-long"},"sentMilestoneRequests(): long"),(0,r.kt)("p",null,"The amount of sent milestone requests"),(0,r.kt)("h3",{id:"sentheartbeats-long"},"sentHeartbeats(): long"),(0,r.kt)("p",null,"The amount of sent heartbeats"),(0,r.kt)("h3",{id:"droppedpackets-long"},"droppedPackets(): long"),(0,r.kt)("p",null,"The amount of dropped packets"))}g.isMDXComponent=!0}}]);