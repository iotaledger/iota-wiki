"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,h=m["".concat(o,".").concat(p)]||m[p]||u[p]||s;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),s=a(54411),l=a(43305);const i={keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},o="Smart Contract State",c={unversionedId:"guide/schema/state",id:"guide/schema/state",title:"Smart Contract State",description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/state.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/state",permalink:"/smart-contracts/guide/schema/state",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/state.mdx",tags:[],version:"current",frontMatter:{keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Type Definitions",permalink:"/smart-contracts/guide/schema/typedefs"},next:{title:"Triggering Events",permalink:"/smart-contracts/guide/schema/events"}},d={},u=[],m={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-state"},"Smart Contract State"),(0,r.kt)("p",null,"The smart contract state storage on the host consists of a single key/value map. Both key\nand value are raw data bytes. As long as you access the data in the same way that you used\nto store it, you will always get valid data back. The schema tool will create a type-safe\naccess layer to make sure that data storage and retrieval always uses the expected data\ntype."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," section in the schema definition file contains a number of field definitions\nthat together define the variables that are stored in the state storage. Each field\ndefinition uses a JSON key/value pair to define the name and data type of the field.\nThe JSON key defines the field name. The JSON value (a string) defines the field's data\ntype, and can be followed by an optional comment that describes the field."),(0,r.kt)("p",null,"The schema tool will use this information to generate the specific code that accesses the\nstate variables in a type-safe way. Let's examine the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend"),"\nexample in more detail:"),(0,r.kt)(s.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"state:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\n")))),(0,r.kt)("p",null,"Let's start with the simplest state variables. ",(0,r.kt)("inlineCode",{parentName:"p"},"totalFactor")," is an Int64, and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," is\nan AgentID. Both are predefined ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/types"},"WasmLib value types"),"."),(0,r.kt)("p",null,"Then you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"memberList")," variable. The empty brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," indicate that this is an\narray. The brackets immediately follow the homogenous type of the elements in the array,\nwhich in this case is the predefined Address value type."),(0,r.kt)("p",null,"Finally, you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"members")," variable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"map[]")," indicate that this is a map. Between\nthe brackets is the homogenous type of the keys, which in this case are of the predefined\nAddress type. The brackets are immediately followed by the homogenous type of the values\nin the map, which in this case are of the predefined Int64 type."),(0,r.kt)("p",null,"Here is part of the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"state.xx")," that the schema tool has generated. The\nMutableDividendState struct defines a type-safe interface to access each of the state\nvariables through mutable proxies:"),(0,r.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type MutableDividendState struct {\n    id int32\n}\n\nfunc (s MutableDividendState) MemberList() ArrayOfMutableAddress {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS)\n    return ArrayOfMutableAddress{objID: arrID}\n}\n\nfunc (s MutableDividendState) Members() MapAddressToMutableInt64 {\n    mapID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMembers], wasmlib.TYPE_MAP)\n    return MapAddressToMutableInt64{objID: mapID}\n}\n\nfunc (s MutableDividendState) Owner() wasmlib.ScMutableAgentID {\n    return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n\nfunc (s MutableDividendState) TotalFactor() wasmlib.ScMutableInt64 {\n    return wasmlib.NewScMutableInt64(s.id, idxMap[IdxStateTotalFactor])\n}\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct MutableDividendState {\n    pub(crate) id: i32,\n}\n\nimpl MutableDividendState {\n    pub fn member_list(&self) -> ArrayOfMutableAddress {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBER_LIST), TYPE_ARRAY | TYPE_ADDRESS);\n        ArrayOfMutableAddress { obj_id: arr_id }\n    }\n\n    pub fn members(&self) -> MapAddressToMutableInt64 {\n        let map_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBERS), TYPE_MAP);\n        MapAddressToMutableInt64 { obj_id: map_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn total_factor(&self) -> ScMutableInt64 {\n        ScMutableInt64::new(self.id, idx_map(IDX_STATE_TOTAL_FACTOR))\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class MutableDividendState extends wasmlib.ScMapID {\n\n    memberList(): sc.ArrayOfMutableAddress {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS);\n        return new sc.ArrayOfMutableAddress(arrID)\n    }\n\n        members(): sc.MapAddressToMutableInt64 {\n        let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateMembers], wasmlib.TYPE_MAP);\n        return new sc.MapAddressToMutableInt64(mapID);\n    }\n\n        owner(): wasmlib.ScMutableAgentID {\n        return new wasmlib.ScMutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n\n        totalFactor(): wasmlib.ScMutableInt64 {\n        return new wasmlib.ScMutableInt64(this.mapID, sc.idxMap[sc.IdxStateTotalFactor]);\n    }\n}\n")))),(0,r.kt)("p",null,"As you can see, the schema tool has generated a proxy interface for the mutable ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend"),"\nstate, called ",(0,r.kt)("inlineCode",{parentName:"p"},"MutableDividendState"),". It has a 1-to-1 correspondence to the ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\nsection in the schema definition file. Each member function accesses a type-safe proxy\nobject for the corresponding variable. In addition, the schema tool generates any\nnecessary intermediate map and array proxy types that force the usage of their respective\nhomogenous types. In the above example both ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayOfMutableAddress")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"MapAddressToMutableInt64")," are examples of such automatically generated proxy types.\nSee the full ",(0,r.kt)("inlineCode",{parentName:"p"},"state.xx")," for more details."),(0,r.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/events"},"triggering\nevents"),"."))}p.isMDXComponent=!0},43305:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s="tabItem__kUE";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},54411:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(67294),s=a(86010),l=a(51048),i=a(33609),o=a(1943),c=a(72957);const d="tabList_fbd4",u="tabItem_v5XY";function m(e){var t,a;const{lazy:l,block:m,defaultValue:p,values:h,groupId:b,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===p?p:null!=(t=null!=p?p:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,o.U)(),[I,M]=(0,r.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==I&&g.some((t=>t.value===e))&&M(e)}const A=e=>{const t=e.currentTarget,a=S.indexOf(t),n=g[a].value;n!==I&&(x(t),M(n),null!=b&&T(b,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;a=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>S.push(e),onKeyDown:D,onFocus:A,onClick:A},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);