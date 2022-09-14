"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24149],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=u(n),s=l,k=g["".concat(p,".").concat(s)]||g[s]||m[s]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41835:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},i=void 0,o={unversionedId:"configuration",id:"configuration",title:"configuration",description:"\x3c!---",source:"@site/content/build/inx-poi/develop/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/inx-poi/develop/configuration",draft:!1,editUrl:"https://github.com/gohornet/inx-poi/edit/develop/documentation/content/build/inx-poi/develop/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Welcome to INX-POI",permalink:"/inx-poi/develop/welcome"},next:{title:"API Reference",permalink:"/inx-poi/develop/api_reference"}},p={},u=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="app_shutdown"></a> Shutdown',id:"-shutdown",level:3},{value:'<a id="app_shutdown_log"></a> Log',id:"-log",level:3},{value:'<a id="logger"></a> 2. Logger',id:"-2-logger",level:2},{value:'<a id="inx"></a> 3. INX',id:"-3-inx",level:2},{value:'<a id="restapi"></a> 4. RestAPI',id:"-4-restapi",level:2},{value:'<a id="profiling"></a> 5. Profiling',id:"-5-profiling",level:2}],d={toc:u};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"description: This section describes the configuration parameters and their types for INX-POI.\nkeywords:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IOTA Node "),(0,l.kt)("li",{parentName:"ul"},"Hornet Node"),(0,l.kt)("li",{parentName:"ul"},"POI"),(0,l.kt)("li",{parentName:"ul"},"Proof-Of-Inclusion"),(0,l.kt)("li",{parentName:"ul"},"Proof"),(0,l.kt)("li",{parentName:"ul"},"Inclusion"),(0,l.kt)("li",{parentName:"ul"},"Configuration"),(0,l.kt)("li",{parentName:"ul"},"JSON"),(0,l.kt)("li",{parentName:"ul"},"Customize"),(0,l.kt)("li",{parentName:"ul"},"Config"),(0,l.kt)("li",{parentName:"ul"},"reference")),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"INX-POI uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,l.kt)("p",null,"You can change the path of the config file by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"inx-poi")," executable."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-poi -c config_defaults.json\n")),(0,l.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-poi -h --full\n")),(0,l.kt)("h2",{id:"-1-application"},(0,l.kt)("a",{id:"app"})," 1. Application"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#app_shutdown"},"shutdown")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for shutdown"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-shutdown"},(0,l.kt)("a",{id:"app_shutdown"})," Shutdown"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5m"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#app_shutdown_log"},"log")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for log"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-log"},(0,l.kt)("a",{id:"app_shutdown_log"})," Log"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to store self-shutdown events to a log file"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The file path to the self-shutdown log"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"shutdown.log"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "shutdown": {\n        "stopGracePeriod": "5m",\n        "log": {\n          "enabled": true,\n          "filePath": "shutdown.log"\n        }\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-2-logger"},(0,l.kt)("a",{id:"logger"})," 2. Logger"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum enabled logging level"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"info"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableCaller"),(0,l.kt)("td",{parentName:"tr",align:null},"Stops annotating logs with the calling function's file name and line number"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableStacktrace"),(0,l.kt)("td",{parentName:"tr",align:null},"Disables automatic stacktrace capturing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stacktraceLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"The level stacktraces are captured and above"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"panic"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encoding"),(0,l.kt)("td",{parentName:"tr",align:null},'The logger\'s encoding (options: "json", "console")'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"console"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputPaths"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of URLs, file paths or stdout/stderr to write logging output to"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableEvents"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevents log messages from being raced as events"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "logger": {\n      "level": "info",\n      "disableCaller": true,\n      "disableStacktrace": false,\n      "stacktraceLevel": "panic",\n      "encoding": "console",\n      "outputPaths": [\n        "stdout"\n      ],\n      "disableEvents": true\n    }\n  }\n')),(0,l.kt)("h2",{id:"-3-inx"},(0,l.kt)("a",{id:"inx"})," 3. INX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxConnectionAttempts"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of times the connection to INX will be attempted before it fails (1 attempt per second)"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"30")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029",\n      "maxConnectionAttempts": 30\n    }\n  }\n')),(0,l.kt)("h2",{id:"-4-restapi"},(0,l.kt)("a",{id:"restapi"})," 4. RestAPI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the POI HTTP server listens"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9687"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"advertiseAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The address of the POI HTTP server which is advertised to the INX Server (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debugRequestLoggerEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the debug logging for requests should be enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "restAPI": {\n      "bindAddress": "localhost:9687",\n      "advertiseAddress": "",\n      "debugRequestLoggerEnabled": false\n    }\n  }\n')),(0,l.kt)("h2",{id:"-5-profiling"},(0,l.kt)("a",{id:"profiling"})," 5. Profiling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')))}m.isMDXComponent=!0}}]);