"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),u=a,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",image:"/img/logo/goshimmer_light.png",keywords:["dependency","plugins","plugin system","code","internal logic","package","adapter design pattern","adapter","circular dependency"]},o="Dependency of Packages and Plugins",s={unversionedId:"implementation_design/packages_plugins",id:"implementation_design/packages_plugins",title:"Dependency of Packages and Plugins",description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",source:"@site/content/build/goshimmer/develop/documentation/docs/implementation_design/packages_plugins.md",sourceDirName:"implementation_design",slug:"/implementation_design/packages_plugins",permalink:"/goshimmer/implementation_design/packages_plugins",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/implementation_design/packages_plugins.md",tags:[],version:"current",frontMatter:{description:"GoShimmer uses the adapter design pattern to easily switch between different implementations and internal interfaces just by using a different plugin, without having to rewrite the code using it.",image:"/img/logo/goshimmer_light.png",keywords:["dependency","plugins","plugin system","code","internal logic","package","adapter design pattern","adapter","circular dependency"]},sidebar:"docs",previous:{title:"Event Driven Model",permalink:"/goshimmer/implementation_design/event_driven_model"},next:{title:"Plugin System",permalink:"/goshimmer/implementation_design/plugin"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependency-of-packages-and-plugins"},"Dependency of Packages and Plugins"),(0,a.kt)("p",null,"In GoShimmer, new features are added through the ",(0,a.kt)("a",{parentName:"p",href:"/goshimmer/implementation_design/plugin"},"plugin system"),".\nWhen creating a new plugin, it must implement an interface shared with all other plugins, so it's easy to add new\nplugins and change their internal implementation without worrying about compatibility.\nBecause of this, to make the code clean and easily manageable the plugin's internal logic has to be implemented in a different package.\nThis is an example of an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adapter_pattern"},"adapter design pattern")," that is often used in plugin systems.\nIt's really useful in a prototype software like GoShimmer, because it's possible to easily switch between different implementations\nand internal interfaces just by using a different plugin, without having to rewrite the code using it. "),(0,a.kt)("p",null,"When creating a new plugin, the logic should be implemented in a separate package stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," directory.\nThe package should contain all struct and interface definitions used, as well as the specific logic.\nIt should not reference any ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," packages from the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin/")," directory as this could lead to circular dependencies between packages."),(0,a.kt)("p",null,"There are no special interfaces or requirements that packages in the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/")," directory are forced to follow. However, they should be independent of other packages if possible,\nto avoid problems due to changing interfaces in other packages."))}d.isMDXComponent=!0}}]);