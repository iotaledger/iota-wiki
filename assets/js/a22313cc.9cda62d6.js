"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10640],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=s,p=d["".concat(l,".").concat(g)]||d[g]||h[g]||i;return t?a.createElement(p,r(r({ref:n},u),{},{components:t})):a.createElement(p,r({ref:n},u))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const i={description:"Sequencing is the methodology built within streams to allow message identifiers to be sequentially generated regardless of the shape of the channel",image:"/img/overview/layered_overview.svg",keywords:["explanation","sequencing","single branch","multi branch","message id","channels"]},r="Sequencing",o={unversionedId:"explanations/channels_protocol/sequencing",id:"explanations/channels_protocol/sequencing",title:"Sequencing",description:"Sequencing is the methodology built within streams to allow message identifiers to be sequentially generated regardless of the shape of the channel",source:"@site/content/build/streams/develop/documentation/docs/explanations/channels_protocol/sequencing.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/sequencing",permalink:"/streams/explanations/channels_protocol/sequencing",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/explanations/channels_protocol/sequencing.md",tags:[],version:"current",frontMatter:{description:"Sequencing is the methodology built within streams to allow message identifiers to be sequentially generated regardless of the shape of the channel",image:"/img/overview/layered_overview.svg",keywords:["explanation","sequencing","single branch","multi branch","message id","channels"]},sidebar:"docs",previous:{title:"Keyloads",permalink:"/streams/explanations/channels_protocol/keyloads"},next:{title:"Rust API Reference",permalink:"/streams/reference/rust_api_reference"}},l={},c=[{value:"Single Branch Sequencing",id:"single-branch-sequencing",level:2},{value:"Multi Branch Sequencing",id:"multi-branch-sequencing",level:2}],u={toc:c};function h(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sequencing"},"Sequencing"),(0,s.kt)("p",null,"Sequencing is the methodology built within streams to allow message identifiers to be sequentially generated regardless\nof the shape of the channel. Messages are identified by an indexation position within the Tangle, and they are\ngenerated using a combination of these pieces of information:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Application instance (channel identifier)."),(0,s.kt)("li",{parentName:"ul"},"Public key of the publisher."),(0,s.kt)("li",{parentName:"ul"},"Previous message id (The message being linked to)."),(0,s.kt)("li",{parentName:"ul"},"Branch number (identifier for the specific branch)."),(0,s.kt)("li",{parentName:"ul"},"Sequencing number (the sequencing position of the publisher).")),(0,s.kt)("p",null,"As messages are posted to and read from the channel, a local state for the user implementation will update with the message\nidentifier, branch and sequencing numbers for each publishing party. This allows user implementations to derive and\nsearch for the next message in the sequence to keep in sync."),(0,s.kt)("h2",{id:"single-branch-sequencing"},"Single Branch Sequencing"),(0,s.kt)("p",null,"In a single branch implementation, sequencing state of each user will be updated to the same state. This means that\nregardless of the publisher, the state of each user will update the previous message id to the new message link, and the\nsequencing number will be incremented by one."),(0,s.kt)("p",null,"Sequence states before Msg1 is sent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"               Author        Sub1\nPrev Msg Id     Msg0         Msg0 \nBranch No.        0            0\nSeq. No.          2            2       <- Users start from 2, 0 and 1 are reserved for subscriptions and announcements\n")),(0,s.kt)("p",null,"Msg1 is then sent by the author using the above stated author state."),(0,s.kt)("p",null,"Sequence states after Msg1 is sent:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"               Author        Sub1\nPrev Msg Id     Msg1         Msg1 \nBranch No.        0            0\nSeq. No.          3            3     \n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It is recommended that a single branch be used with only a single publisher to avoid out of sync parties from\nissuing and retrieving messages from an incorrect sequencing combination (i.e. Sub1 sends a message linked to Msg1 and Sub2\nsends a message linked to that same Msg1 before seeing and registering the message from Sub1, thus forking the stream).\nMultiple publishers can be used, but it is important to ensure that they do not try to send messages in parallel to\navoid this conflict. In the future this may be an enforced limitation on single branch implementations to remove the\npossibility altogether.")),(0,s.kt)("h2",{id:"multi-branch-sequencing"},"Multi Branch Sequencing"),(0,s.kt)("p",null,"In a multi branch implementation, the sequencing state of each user will be updated independently after each message is sent.\nIn order to track the linking of messages of individual publishers within a tree-like structure, a secondary message is\nsent in tandem with every data message. This message is called a sequencing message, and contains the essence necessary\nfor a user to derive the correct message id of a sequenced message. The sequencing messages are issued to an anchored\nbranch generated during the creation of the channel. As a new message is generated by a user, a sequencing message is\nissued to this anchored branch to allow users a reference guide to the location of the issued data packet."))}h.isMDXComponent=!0}}]);