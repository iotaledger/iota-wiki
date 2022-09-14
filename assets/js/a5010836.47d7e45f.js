"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85682],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(h,s(s({ref:t},u),{},{components:o})):n.createElement(h,s({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},59607:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905)),r=o(54411),s=o(43305);const c={description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},i="How to Deposit to a Chain",l={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",title:"How to Deposit to a Chain",description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",tags:[],version:"current",frontMatter:{description:"The `deposit` entry point credits the transferred tokens into your on-chain account.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},u={},p=[],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"Any assets attached to an on-ledger request are automatically deposited to the sender's L2 account before executing the\nrequest.\nSo, to deposit tokens, you only need to send ",(0,a.kt)("em",{parentName:"p"},"any")," on-ledger request with the tokens attached."),(0,a.kt)("p",null,"A commonly needed operation is to only deposit some funds and do nothing else.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entry point of the ",(0,a.kt)("a",{parentName:"p",href:"../core_contracts/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," is a no-op function that serves\nthis purpose."),(0,a.kt)("admonition",{title:"Gas Fees",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All requests are charged a gas fee, so the L2 account may receive fewer tokens than the amount sent.")),(0,a.kt)("admonition",{title:"Storage Deposits",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The IOTA L1 transaction needs a minimum amount of tokens attached for\nstorage deposit. It will fail if the amount transferred is less than this minimum amount.")),(0,a.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"err := chain.DepositBaseTokensToL2(N, wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(s.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N base tokens from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferBaseTokes(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_base_tokens(N).post_to_chain(chainID);\n"))),(0,a.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferBaseTokens(N).PostToChain(chainID)\n")))))}m.isMDXComponent=!0},43305:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(67294),a=o(86010);const r="tabItem__kUE";function s(e){let{children:t,hidden:o,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:o},t)}},54411:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(87462),a=o(67294),r=o(86010),s=o(51048),c=o(33609),i=o(1943),l=o(72957);const u="tabList_fbd4",p="tabItem_v5XY";function d(e){var t,o;const{lazy:s,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),y=(0,c.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(o=v.find((e=>e.props.default)))?void 0:o.props.value)?t:v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,i.U)(),[N,O]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,o=x.indexOf(t),n=g[o].value;n!==N&&(E(t),O(n),null!=f&&T(f,String(n)))},D=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;o=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;o=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:o,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:_,onClick:_},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=o?o:t)}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);