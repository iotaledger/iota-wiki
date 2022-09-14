"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={description:"Software Transactional Memory and Transactional Concurrency",image:"/img/logo/Stronghold_icon.png",keywords:["stm","concurrency","lockless","explanation"]},i="Software Transactional Memory and Transactional Concurrency",c={unversionedId:"explanations/transactional-concurrency",id:"explanations/transactional-concurrency",title:"Software Transactional Memory and Transactional Concurrency",description:"Software Transactional Memory and Transactional Concurrency",source:"@site/content/build/stronghold.rs/develop/documentation/docs/explanations/transactional-concurrency.md",sourceDirName:"explanations",slug:"/explanations/transactional-concurrency",permalink:"/stronghold.rs/explanations/transactional-concurrency",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/content/build/stronghold.rs/develop/documentation/docs/explanations/transactional-concurrency.md",tags:[],version:"current",frontMatter:{description:"Software Transactional Memory and Transactional Concurrency",image:"/img/logo/Stronghold_icon.png",keywords:["stm","concurrency","lockless","explanation"]},sidebar:"mySidebar",previous:{title:"Runtime Extensions",permalink:"/stronghold.rs/explanations/runtime-extensions"},next:{title:"Stronghold Engine Retrospective Document",permalink:"/stronghold.rs/explanations/retrospective"}},s={},l=[{value:"Software Transactional Memory",id:"software-transactional-memory",level:2},{value:"The Actor Model",id:"the-actor-model",level:3},{value:"Software Transactional Memory (STM)",id:"software-transactional-memory-stm",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software-transactional-memory-and-transactional-concurrency"},"Software Transactional Memory and Transactional Concurrency"),(0,r.kt)("p",null,"Writing software that runs on CPUs with more than one core is the norm nowadays. Software libraries heavily use concurrent code, separating sequential steps of work into concurrent, possibly parallel executed packages of work. Therefore, we need the means to synchronize the work on specific points to keep a consistent state across all threads. This section explains a relatively new approach for optimistic locking without the fear of deadlocks: software transactional memory."),(0,r.kt)("h2",{id:"software-transactional-memory"},"Software Transactional Memory"),(0,r.kt)("p",null,"Today\u2019s computing power derives from many CPU cores doing work in parallel. Any software that doesn\u2019t use present-day concurrency will be less performant than software that does. Stronghold is no different, and Rust is an excellent programming language that offers a lot of concurrency and asynchronous primitives."),(0,r.kt)("h3",{id:"the-actor-model"},"The Actor Model"),(0,r.kt)("p",null,"Stronghold employs a well known concurrency architecture: the actor model. The basic idea of the actor model is to have isolated actors, each taking care of some functionality. Actors receive messages with data to act upon and return data when they finish processing it. Since each actor contains its own state and concurrency is achieved by not directly calling functions but by polling messages, most of the undesirable concurrency problems are taken care of. Dead-locks will never occur. "),(0,r.kt)("p",null,"The actor system is almost ubiquitous in the target architecture. Many modern languages have the actor model built in with an excellent supervisor, among other tools. With Rust, the integration involves a lot of boilerplate code. But it\u2019s for each user to decide whether or not the actor model approach is favorable. We wanted to know whether we could provide a simple interface, ideally some primitive types to work on with simple function calls, but still run in a concurrent setup without the headaches that come with locks and mutexes. "),(0,r.kt)("h2",{id:"software-transactional-memory-stm"},"Software Transactional Memory (STM)"),(0,r.kt)("p",null,"A newer approach is using Software Transactional Memory (STM). STMs have been around for quite some time. In STMs, each operation on memory happens in an atomic transaction. Whenever memory is modified, this modification is written into a log. While inside a transaction, reading from memory also is done through a log. The transaction has finished when all changes recorded inside the log have been committed to the actual memory. A transaction fails if another thread tries to modify the targeted piece of memory between operations. A failed transaction can be re-run any number of times. "),(0,r.kt)("p",null,"This approach guarantees that modifications to memory are always consistent, but it comes with a restriction. Since transactions can be retried, operations inside a transaction must be idempotent and should not have any side effects. In an extreme case, think of a function that launches an ICMB: you can not reverse the process. Another edge case concerning STM-based approaches is interleaving transactions, where reads and writes are alternating between two threads. In a worst-case scenario, both transactions would retry indefinitely."))}u.isMDXComponent=!0}}]);