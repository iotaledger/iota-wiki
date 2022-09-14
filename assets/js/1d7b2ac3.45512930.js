"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(54411),s=n(43305);const i={keywords:["testing","solo testing environment","function context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",image:"/img/logo/WASP_logo_dark.png"},l="Testing Smart Contracts",c={unversionedId:"guide/schema/test",id:"guide/schema/test",title:"Testing Smart Contracts",description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/test.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/test",permalink:"/smart-contracts/develop/guide/schema/test",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/test.mdx",tags:[],version:"current",frontMatter:{keywords:["testing","solo testing environment","function context","smart contract functionalities","data types","type conversions","Go"],description:"Testing of smart contracts happens in the Solo testing environment. This enables synchronous, deterministic testing of smart contract functionality without the overhead of having to start nodes, set up a committee, and send transactions over the Tangle",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Posting Asynchronous Requests",permalink:"/smart-contracts/develop/guide/schema/post"},next:{title:"Example Tests",permalink:"/smart-contracts/develop/guide/schema/examples"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-smart-contracts"},"Testing Smart Contracts"),(0,o.kt)("p",null,"Testing of smart contracts happens in the\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/solo/what-is-solo"},"Solo testing environment"),". This enables synchronous,\ndeterministic testing of smart contract functionalities without the overhead of\nhaving to start nodes, set up a committee, and send transactions over the Tangle. Instead,\nyou can use Go's built-in test environment in combination with Solo to deploy chains and\nsmart contracts and simulate transactions."),(0,o.kt)("p",null,"Solo directly interacts with the IOTA Smart Contracts code, and uses all the data types that are\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/documentation/docs/misc/coretypes.md"},"defined in the IOTA Smart Contracts code"),"\ndirectly. Because they run in a sandboxed environment our Wasm smart contracts cannot\naccess these types directly. Therefore, WasmLib implements its\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/types"},"own versions")," of these data types, and the VM layer acts as a data\ntype translator between both systems."),(0,o.kt)("p",null,"The impact of this type transformation used to be that to be able to write tests in the\nsolo environment the user also needed to know about the IOTA Smart Contracts-specific data types and type\nconversion functions, and exactly how to properly pass such data in and out of smart\ncontract function calls. This burdened the user with an unnecessary increased learning\ncurve."),(0,o.kt)("p",null,"With the introduction of the schema tool, we were able to remove this impedance mismatch\nand allow the users to test smart contract functionality in terms of the WasmLib data types\nand functions that they are already familiar with. To that end, we introduced a new IOTA Smart Contracts\nfunction context that specifically works with the Solo testing environment. We aimed to\nsimplify the testing of smart contracts as much as possible, keeping the full Solo\ninterface hidden as much as possible, but available when necessary."),(0,o.kt)("p",null,"The only concession we still have to make is to the language used. Because Solo only works\nin the Go language environment, we have to use the Go language version of the interface\ncode that the schema tool generates when testing our smart contracts. Because WasmLib\nprogramming for Rust, TypeScript, and Go are practically identical, we feel that this is\nnot unsurmountable. They only differ where language idiosyncrasies force differences in\nsyntax or naming conventions. This hurdle used to be a lot bigger, when direct programming\nof Solo had to be used, and type conversions had to be done manually. Now we get to use\nthe generated compile-time type-checked interface to our smart contract functions that we\nare already familiar with."),(0,o.kt)("p",null,"Let's look at the simplest way of initializing a smart contract by using the new\n",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," in a test function:"),(0,o.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDeploy(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n    require.NoError(t, ctx.ContractExists(dividend.ScName))\n}\n")))),(0,o.kt)("p",null,"The first line will automatically create a new chain, and upload and deploy the provided\nexample ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract to this chain. It returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"SoloContext")," for further use. The\nsecond line verifies the existence of the deployed contract on the chain associated with\nthe context."),(0,o.kt)("p",null,"Here is another part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," test code, where you can see how we wrap repetitive\ncalls to smart contract functions that are used in multiple tests:"),(0,o.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func dividendMember(ctx *wasmsolo.SoloContext, agent *wasmsolo.SoloAgent, factor int64) {\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Address().SetValue(agent.ScAddress())\n    member.Params.Factor().SetValue(factor)\n    member.Func.TransferBaseTokens(1).Post()\n}\n\nfunc dividendDivide(ctx *wasmsolo.SoloContext, amount int64) {\n    divide := dividend.ScFuncs.Divide(ctx)\n    divide.Func.TransferBaseTokens(amount).Post()\n}\n\nfunc dividendGetFactor(ctx *wasmsolo.SoloContext, member3 *wasmsolo.SoloAgent) int64 {\n    getFactor := dividend.ScFuncs.GetFactor(ctx)\n    getFactor.Params.Address().SetValue(member3.ScAddress())\n    getFactor.Func.Call()\n    value := getFactor.Results.Factor().Value()\n    return value\n}\n")))),(0,o.kt)("p",null,"As you can see, we pass the SoloContext and the parameters to the wrapper functions,\nthen use the context to create a function descriptor for the wrapped function, pass any\nparameters through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Params")," proxy, and then either post the function request or call\nthe function. Any results returned are extracted through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Results")," proxy, and returned\nby the wrapper."),(0,o.kt)("p",null,"There is hardly difference in the way the function interface is used with the IOTA Smart Contracts\nfunction context in WasmLib and with the SoloContext. This makes for seamless testing of\nsmart contracts."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/schema/examples"},"next section")," we will go deeper into how the helper member functions\nof the SoloContext are used to simplify tests."))}p.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const r="tabItem__kUE";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),r=n(86010),s=n(51048),i=n(33609),l=n(1943),c=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function m(e){var t,n;const{lazy:s,block:m,defaultValue:p,values:h,groupId:f,className:g}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.U)(),[x,S]=(0,o.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&S(e)}const N=e=>{const t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==x&&(O(t),S(a),null!=f&&T(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var o;const t=C.indexOf(e.currentTarget)-1;n=null!=(o=C[t])?o:C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:N,onClick:N},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,s.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);