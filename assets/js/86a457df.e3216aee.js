"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,u=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"CredentialInfo",sidebar_label:"CredentialInfo"},o=void 0,s={unversionedId:"specs/didcomm/resources/credential-info",id:"specs/didcomm/resources/credential-info",title:"CredentialInfo",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/resources/credential-info.md",sourceDirName:"specs/didcomm/resources",slug:"/specs/didcomm/resources/credential-info",permalink:"/identity.rs/0.5/specs/didcomm/resources/credential-info",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/resources/credential-info.md",tags:[],version:"current",frontMatter:{title:"CredentialInfo",sidebar_label:"CredentialInfo"},sidebar:"docs",previous:{title:"Termination",permalink:"/identity.rs/0.5/specs/didcomm/protocols/termination"},next:{title:"Problem Reports",permalink:"/identity.rs/0.5/specs/didcomm/resources/problem-reports"}},l={},p=[{value:"CredentialType2021",id:"credentialtype2021",level:3},{value:"Examples",id:"examples",level:4},{value:"Unresolved Questions",id:"unresolved-questions",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CredentialInfo")," objects allow parties to negotiate which kinds of ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"verifiable credentials")," they want to issue or exchange. ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"Verifiable credential")," kinds can be described by different attributes such as the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#contexts"},(0,r.kt)("inlineCode",{parentName:"a"},"@context"))," fields or the structure of the data in the payload. ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialInfo")," provides methods to specify the identifying characteristics of a credential."),(0,r.kt)("p",null,"Currently, only ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialType2021")," is prescribed but additional ",(0,r.kt)("inlineCode",{parentName:"p"},"CredentialInfo")," methods may be introduced in the future, e.g. to account for selective disclosure of particular fields. If full schema negotiation of credentials is required, refer to the external ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/presentation-exchange/spec/v1.0.0/"},"Presentation Exchange 1.0 specification"),"."),(0,r.kt)("h3",{id:"credentialtype2021"},"CredentialType2021"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"CredentialType2021"))),(0,r.kt)("p",null,"Negotiates ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"verifiable credentials")," using their ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," and optional ",(0,r.kt)("a",{parentName:"p",href:"https://json-ld.org/"},"JSON-LD")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#contexts"},(0,r.kt)("inlineCode",{parentName:"a"},"@context")),". The ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#issuer"},(0,r.kt)("inlineCode",{parentName:"a"},"issuer"))," field may also be included depending on the protocol and usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credentialInfoType": string,  // REQUIRED\n  "@context": [string],          // OPTIONAL\n  "type": [string],              // REQUIRED\n  "issuer": [string],            // OPTIONAL\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"credentialInfoType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String indicating the ",(0,r.kt)("inlineCode",{parentName:"td"},"CredentialInfo")," method, MUST be ",(0,r.kt)("inlineCode",{parentName:"td"},'"CredentialType2021"'),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#contexts"},(0,r.kt)("inlineCode",{parentName:"a"},"@context"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array of ","[JSON-LD][contexts]",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#contexts"},"CONTEXT")," referenced in the credential."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array of credential ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#types"},"types")," specifying the kind of credential offered.",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#issuer"},(0,r.kt)("inlineCode",{parentName:"a"},"issuer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array of credential ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#issuer"},"issuer")," ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DIDs")," or ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#dfn-uri"},"URIs"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," MAY be under-specified depending on the protocol but SHOULD always include the most general types. For example, a credential with the types ",(0,r.kt)("inlineCode",{parentName:"p"},'["VerifiableCredential", "DriversLicence", "EUDriversLicence", "GermanDriversLicence"]')," could be specified as ",(0,r.kt)("inlineCode",{parentName:"p"},'["VerifiableCredential", "DriversLicence"]'),". "),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," The ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#issuer"},(0,r.kt)("inlineCode",{parentName:"a"},"issuer"))," field MAY either be the single issuer of an existing credential, one or more issuers that a ",(0,r.kt)("a",{parentName:"p",href:"../protocols/presentation#roles"},"verifier")," would trust during a ",(0,r.kt)("a",{parentName:"p",href:"../protocols/presentation"},"presentation"),", or one or more trusted issuers that a ",(0,r.kt)("a",{parentName:"p",href:"../protocols/issuance#roles"},"holder")," requests to sign their credential during an ",(0,r.kt)("a",{parentName:"p",href:"../protocols/issuance"},"issuance"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#issuer"},(0,r.kt)("inlineCode",{parentName:"a"},"issuer"))," field is OPTIONAL as the ",(0,r.kt)("a",{parentName:"p",href:"../protocols/presentation#roles"},"holder")," may not want to reveal too much information up-front about the exact credentials they possess during a ",(0,r.kt)("a",{parentName:"p",href:"../protocols/presentation"},"presentation"),"; they may want a non-repudiable signed request from the verifier first. "),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Indicate a "UniversityDegreeCredential" from a specific issuer:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credentialInfoType": "CredentialType2021", \n  "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n  "issuer": ["did:example:76e12ec712ebc6f1c221ebfeb1f"]\n}\n')),(0,r.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Should we implement ",(0,r.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vp-request-spec/"},"https://w3c-ccg.github.io/vp-request-spec/")," as a ",(0,r.kt)("inlineCode",{parentName:"li"},"CredentialInfo"),"?"),(0,r.kt)("li",{parentName:"ul"},"Should we implement ",(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/presentation-exchange/spec/v1.0.0/"},"https://identity.foundation/presentation-exchange/spec/v1.0.0/")," as a ",(0,r.kt)("inlineCode",{parentName:"li"},"CredentialInfo"),"?")))}c.isMDXComponent=!0}}]);