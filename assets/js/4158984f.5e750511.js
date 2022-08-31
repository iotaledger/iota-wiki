"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84292],{3905:function(M,e,t){t.d(e,{Zo:function(){return u},kt:function(){return a}});var N=t(67294);function i(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function I(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function D(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){i(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function o(M,e){if(null==M)return{};var t,N,i=function(M,e){if(null==M)return{};var t,N,i={},I=Object.keys(M);for(N=0;N<I.length;N++)t=I[N],e.indexOf(t)>=0||(i[t]=M[t]);return i}(M,e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(N=0;N<I.length;N++)t=I[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(i[t]=M[t])}return i}var n=N.createContext({}),j=function(M){var e=N.useContext(n),t=e;return M&&(t="function"==typeof M?M(e):D(D({},e),M)),t},u=function(M){var e=j(M.components);return N.createElement(n.Provider,{value:e},M.children)},g={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},T=N.forwardRef((function(M,e){var t=M.components,i=M.mdxType,I=M.originalType,n=M.parentName,u=o(M,["components","mdxType","originalType","parentName"]),T=j(t),a=i,z=T["".concat(n,".").concat(a)]||T[a]||g[a]||I;return t?N.createElement(z,D(D({ref:e},u),{},{components:t})):N.createElement(z,D({ref:e},u))}));function a(M,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var I=t.length,D=new Array(I);D[0]=T;var o={};for(var n in e)hasOwnProperty.call(e,n)&&(o[n]=e[n]);o.originalType=M,o.mdxType="string"==typeof M?M:i,D[1]=o;for(var j=2;j<I;j++)D[j]=t[j];return N.createElement.apply(null,D)}return N.createElement.apply(null,t)}T.displayName="MDXCreateElement"},43809:function(M,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return n},default:function(){return a},frontMatter:function(){return o},metadata:function(){return j},toc:function(){return g}});var N=t(87462),i=t(63366),I=(t(67294),t(3905)),D=["components"],o={id:"dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",keywords:["Dust","Chrysalis","Legacy"]},n="The Evolution of Dust Protection on IOTA",j={unversionedId:"future/dust-protection",id:"future/dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",source:"@site/internal/learn/future/dust-protection.md",sourceDirName:"future",slug:"/future/dust-protection",permalink:"/learn/future/dust-protection",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/internal/learn/future/dust-protection.md",tags:[],version:"current",lastUpdatedAt:1659306152,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{id:"dust-protection",title:"Dust Protection",description:"Introduction to the history of dust protection in IOTA",keywords:["Dust","Chrysalis","Legacy"]},sidebar:"learn",previous:{title:"Role of the IOTA Token",permalink:"/learn/future/role-of-iota"},next:{title:"Non-fungible Tokens (NFTs)",permalink:"/learn/future/nfts"}},u={},g=[{value:"IOTA 1.0",id:"iota-10",level:2},{value:"IOTA 1.5",id:"iota-15",level:2},{value:"New Tokenisation Framework",id:"new-tokenisation-framework",level:2},{value:"Bonus",id:"bonus",level:4},{value:"Final note",id:"final-note",level:4}],T={toc:g};function a(M){var e=M.components,o=(0,i.Z)(M,D);return(0,I.kt)("wrapper",(0,N.Z)({},T,o,{components:e,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"the-evolution-of-dust-protection-on-iota"},"The Evolution of Dust Protection on IOTA"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"IOTA Dust Protection",src:t(76145).Z,width:"862",height:"200"})),(0,I.kt)("p",null,"This short note attempts to explain how dust protection has evolved with the needs of the IOTA network."),(0,I.kt)("h2",{id:"iota-10"},"IOTA 1.0"),(0,I.kt)("p",null,"An account-based ledger.\nEach address has a balance of tokens."),(0,I.kt)("p",null,"There is no dust protection.\nTherefore addresses could hold any amount, down to 1 IOTA, and transactions could be as small as 1 IOTA."),(0,I.kt)("p",null,"The ledger state was therefore likely to bloat."),(0,I.kt)("h2",{id:"iota-15"},"IOTA 1.5"),(0,I.kt)("p",null,"IOTA switches to a UTXO-based ledger.\nEach address can now hold multiple ",(0,I.kt)("a",{parentName:"p",href:"/learn/about-iota/messages#utxo"},"UTXOs"),", each with its own balance. For a more extensive description of UTXOs check ",(0,I.kt)("a",{parentName:"p",href:"https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819"},"this")," medium article.\nThe address balance is calculated as the total of the UTXO balances on that address."),(0,I.kt)("p",null,"Recognising the risk of ledger bloat, a dust protection mechanism is introduced.\nWhen thinking about dust we now have to think about UTXOs rather than addresses. This is really tricky as we will see."),(0,I.kt)("p",null,'The basic rule of IOTA 1.5 dust protection is that "UTXOs cannot hold under 1 million IOTA (1 Mi)".\nTry to remember this very important rule as it makes sending amounts under 1 Mi very tricky!'),(0,I.kt)("p",null,"To understand why this is tricky, let's look at an example where I try to send 10i to an address that already contains 5 Mi. You may assume that you could add 10i to that 5 Mi, so that you have a total of 5.00001 Mi, which respects the basic dust protection rule.\nBut no!"),(0,I.kt)("p",null,"Each UTXO is actually a self-contained pot, which only contains the output from a transaction. And in this case that pot would only contain the 10i you sent (ie the output of that transaction). So, as the UTXO only contains 10i, you have broken the dust protection rule.\n(You may need to re-read that a few times to understand it properly)"),(0,I.kt)("p",null,'To overcome this problem, a special UTXO called a "dust allowance output" was introduced. Users could now lock 1- 10 Mi on a dust allowance output, and could then receive up to 10 dust UTXOs per Mi deposited, on the associated address.\neg I create a dust allowance output with 2 Mi locked on Address A. You can now send up to 20 dust transactions (a dust transaction is anything under 1 Mi) to Address A.\nUsers can also sweep the dust UTXOs - this means combining multiple dust UTXOs into a single UTXO (eg 1i + 1i + 1i -> 3i on 1 UTXO). This frees up spare UTXOs on your dust-enabled address.'),(0,I.kt)("p",null,"This was a reasonable interim solution, but unfortunately it is not compatible with IOTA 2.0, as it requires total ordering of the Tangle (to determine if the transaction is valid, and that the dust protection rules are fulfilled). IOTA 2.0 does not have total ordering."),(0,I.kt)("h2",{id:"new-tokenisation-framework"},"New Tokenisation Framework"),(0,I.kt)("p",null,"Various new UTXO types are introduced, which can add different amounts of data to the ledger (eg for NFTs, native assets, aliases), without requiring any IOTA by themselves. Therefore there is a very high risk of ledger bloat.\nThe 1.5 dust protection is also not ready for IOTA 2.0. Therefore a new dust protection scheme is proposed, which deals with both issues."),(0,I.kt)("p",null,"The rules of the new dust protection are:"),(0,I.kt)("ol",null,(0,I.kt)("li",{parentName:"ol"},"Any UTXO must contain a minimum deposit (for the sake of simplicity, let's make this 1 Mi for our examples)."),(0,I.kt)("li",{parentName:"ol"},"The amount of data any UTXO can hold is proportional to the amount of IOTA on that UTXO. The IOTA acts as a deposit to secure that data on the Tangle, and you can add more IOTA to add more data. The actual cost of IOTA per byte is currently being decided, and can change over time.")),(0,I.kt)("p",null,'To send amounts smaller than 1 Mi, or to send native assets, we introduce a new system of "conditional sending", which does not require total ordering of the Tangle (and is therefore ready for IOTA 2.0).\nLet\'s look at how this works if I want to send 10i to an address which already holds 5 Mi (assuming the minimum deposit is 1 Mi). As before I cannot just send 10i, because the UTXO will have a value of 10i (well below the minimal amount of 1 Mi).\nI cannot use a special dust-UTXO as in 1.5, because these need total ordering of the Tangle.\nInstead I use "conditional sending":'),(0,I.kt)("ol",null,(0,I.kt)("li",{parentName:"ol"},"I send the 10i together with the minimal deposit amount (1 Mi) - a total of 1.00001 Mi (which meets the dust protection criteria) - to the target address."),(0,I.kt)("li",{parentName:"ol"},"This is however a special type of transaction which needs a further step to complete. It has to be \"claimed\" by the recipient. 2 things can therefore happen to this transaction:\na) The 10i is claimed by the recipient - the 10i is transferred together with the recipient's own minimal deposit to a new valid UTXO. The recipient needs their own 1 Mi deposit to claim the 10i. At the same time the sender's 1 Mi deposit is returned to the sender.\nb) The 10i is not claimed in a reasonable time period (set by the sender), and the total amount of 1.00001 Mi can now be reclaimed or spent by the sender (the mechanism is a bit more complex but this is the simplest way of describing it).")),(0,I.kt)("h4",{id:"bonus"},"Bonus"),(0,I.kt)("p",null,"This conditional sending can also be used as a safety net to prevent sending to the wrong address. It is a common problem in crypto that funds are sometimes transferred to the incorrect address due to mistyping of the address - often this address has no owner and the tokens are lost forever! If this were to happen in a conditional send however, then the tokens are very unlikely to be claimed in the set time period, and the total amount can be claimed by the sender. A very useful feature!"),(0,I.kt)("h4",{id:"final-note"},"Final note"),(0,I.kt)("p",null,"We are also looking at other mechanisms for microtransactions which make the process simpler, while still respecting the dust protection rules. We hope to share more with you soon."))}a.isMDXComponent=!0},76145:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDg2MiAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yOTFfNTQwOCkiPgo8cmVjdCB3aWR0aD0iODYyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzQwQTFBQyIvPgo8cGF0aCBkPSJNMCAwSDg2MlYyMDBIMFYwWiIgZmlsbD0iIzExMUYzQiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2MSAxSDFWMTk5SDg2MVYxWk0wIDBWMjAwSDg2MlYwSDBaIiBmaWxsPSIjMjkzODU2Ii8+CjxwYXRoIGQ9Ik0yOTYuNSA4Mi41QzIyOS4zMDYgOTYuODQ0OCAyMTMuNjY3IDE3Ny4zMzMgMTY2IDIwMC41TDQ1NyAyMTIuNUM0NDIuODMzIDIxMS44MzMgNjkwLjkgMjE1Ljc3MyA2NzYgMjAwLjVDNjI2LjY3IDE0OS45MzUgNzA4Ljk2MSAxMjAuMjczIDc2MSA3Mi41Qzc5MS41IDQ0LjUgNjI2IDI2LjUgNTczLjUgNUM1MzEuNSAtMTIuMiAzOTggLTkuODMzMzMgMzM2LjUgLTYuNDk5OTlMMzEzIC0xLjk5OTk5QzMwMy4zMzMgMTAgMzQxIDczIDI5Ni41IDgyLjVaIiBmaWxsPSJ1cmwoI3BhaW50MF9hbmd1bGFyXzI5MV81NDA4KSIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjk2LjUgODIuMzYxM0MyMjkuMzA2IDk2LjcwNjEgMjEzLjY2NyAxNzcuMTk1IDE2NiAyMDAuMzYxTDQ1NyAyMTIuMzYxQzQ0Mi44MzMgMjExLjY5NSA0MjQuNCAyMDAuNjM0IDQwOS41IDE4NS4zNjFDMzYwLjE3IDEzNC43OTYgNTE0LjA2NiAxNDkuODIgNTc4LjUgMTIwLjg2MUM2MjMgMTAwLjg2MSA2MjYgMjYuMzYxMyA1NzMuNSA0Ljg2MTMzQzUzMS41IC0xMi4zMzg3IDM5OCAtOS45NzIgMzM2LjUgLTYuNjM4NjdMMzEzIC0yLjEzODY3QzMwMy4zMzMgOS44NjEzMyAzNDEgNzIuODYxMyAyOTYuNSA4Mi4zNjEzWiIgZmlsbD0idXJsKCNwYWludDFfYW5ndWxhcl8yOTFfNTQwOCkiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzNi41NjEgLTYuMTQxMjNMMzEzLjI3OSAtMS42ODMwOUMzMTIuMjYxIC0wLjMxNiAzMTEuODI0IDEuNzg0MDIgMzExLjg0MSA0LjU0NDc2QzMxMS44NTggNy4zODY5NiAzMTIuMzU2IDEwLjgzMjYgMzEzLjA5MyAxNC42OTczQzMxMy42MTUgMTcuNDM3MiAzMTQuMjU5IDIwLjM4OTYgMzE0LjkzMiAyMy40NzI2QzMxNi4xNDcgMjkuMDQyNSAzMTcuNDU1IDM1LjAzODcgMzE4LjMwNyA0MC45Nzc4QzMxOS42MzMgNTAuMjE2NSAzMTkuODg0IDU5LjQ2NDIgMzE2Ljk1OCA2Ny4wMTg1QzMxNC4wMTQgNzQuNjE5NiAzMDcuODc5IDgwLjQ0MzQgMjk2LjYwNCA4Mi44NTAzQzI2My4yMDMgODkuOTgxIDI0Mi41OSAxMTMuNTQ4IDIyNC4zMyAxMzguMzVDMjIxLjU5NCAxNDIuMDY1IDIxOC45MSAxNDUuODEgMjE2LjI0MyAxNDkuNTMyQzIxMC4wMjMgMTU4LjIxMSAyMDMuODk2IDE2Ni43NTkgMTk3LjQzNCAxNzQuNDg4QzE4OC42NDEgMTg1LjAwNyAxNzkuMTg3IDE5NC4wNiAxNjcuOTQzIDE5OS45NDFMNDQ4LjkxNiAyMTEuNTI4QzQ0My44OTcgMjEwLjE2OSA0MzguNTk3IDIwNy44NDQgNDMzLjI3NSAyMDQuNzcyQzQyNC45ODkgMTk5Ljk4OSA0MTYuNjIgMTkzLjM3NiA0MDkuMTQyIDE4NS43MUM0MDIuOTUyIDE3OS4zNjUgMzk5Ljg2IDE3My45NjQgMzk5LjQ1OCAxNjkuMzAzQzM5OS4wNTEgMTY0LjU4NyA0MDEuNDAyIDE2MC43NjEgNDA1Ljc0MSAxNTcuNjE5QzQxMC4wNjQgMTU0LjQ4NyA0MTYuNDE1IDE1MS45ODggNDI0LjE3NCAxNDkuODg1QzQzMS45NDIgMTQ3Ljc4IDQ0MS4xNjUgMTQ2LjA2MiA0NTEuMjYzIDE0NC41MTVDNDYxLjE3NCAxNDIuOTk2IDQ3MS45NDEgMTQxLjY0IDQ4My4wMTQgMTQwLjI0Nkw0ODMuNjQyIDE0MC4xNjdDNDk0Ljk0IDEzOC43NDQgNTA2LjU0NyAxMzcuMjc3IDUxNy44OTkgMTM1LjU1MUM1NDAuNjEzIDEzMi4wOTggNTYyLjI1NCAxMjcuNjE1IDU3OC4yOTUgMTIwLjQwNUM2MDAuMzI1IDExMC41MDQgNjEyLjEyMyA4Ny4wODg2IDYxMS44NzUgNjMuNDI5MUM2MTEuNjI3IDM5Ljc4NCA1OTkuMzQ1IDE1Ljk4NTkgNTczLjMxMSA1LjMyNDA0QzU2Mi44NzkgMS4wNTIxMiA1NDYuNzE5IC0yLjAxOTU0IDUyNy4zNDMgLTQuMTYzNThDNTA3Ljk4IC02LjMwNjIyIDQ4NS40NDkgLTcuNTE4MTggNDYyLjMgLTguMDg4ODJDNDE2LjAyMSAtOS4yMjk2NyAzNjcuMzAzIC03LjgwNjU3IDMzNi41NjEgLTYuMTQxMjNaTTQ1Ni45NzkgMjEyLjg2MUw0NTcuMDIzIDIxMS44NjJDNDUwLjA1IDIxMS41MzQgNDQxLjk3OSAyMDguNjQxIDQzMy43NzUgMjAzLjkwNkM0MjUuNTc3IDE5OS4xNzQgNDE3LjI4IDE5Mi42MiA0MDkuODU4IDE4NS4wMTJDNDAzLjcxNiAxNzguNzE2IDQwMC44MjYgMTczLjUyNiA0MDAuNDU0IDE2OS4yMTdDNDAwLjA4NyAxNjQuOTYzIDQwMi4xNjkgMTYxLjQ0MSA0MDYuMzI3IDE1OC40MjhDNDEwLjUwMiAxNTUuNDA1IDQxNi43MTIgMTUyLjk0MyA0MjQuNDM2IDE1MC44NUM0MzIuMTUgMTQ4Ljc2IDQ0MS4zMzEgMTQ3LjA0OCA0NTEuNDE0IDE0NS41MDNDNDYxLjMxMSAxNDMuOTg3IDQ3Mi4wNjYgMTQyLjYzMyA0ODMuMTQ0IDE0MS4yMzhMNDgzLjc2NyAxNDEuMTU5QzQ5NS4wNjMgMTM5LjczNyA1MDYuNjgzIDEzOC4yNjggNTE4LjA0OSAxMzYuNTRDNTQwLjc3MSAxMzMuMDg2IDU2Mi41MyAxMjguNTg3IDU3OC43MDUgMTIxLjMxN0M2MDEuMTc1IDExMS4yMTkgNjEzLjEyNyA4Ny4zODQxIDYxMi44NzUgNjMuNDE4NkM2MTIuNjIzIDM5LjQzODcgNjAwLjE1NSAxNS4yMzY4IDU3My42ODkgNC4zOTg2M0M1NjMuMTIxIDAuMDcwNTM5NSA1NDYuODQzIC0zLjAxMTk2IDUyNy40NTMgLTUuMTU3NTFDNTA4LjA1MSAtNy4zMDQ0NSA0ODUuNDg5IC04LjUxNzQ5IDQ2Mi4zMjUgLTkuMDg4NTJDNDE1Ljk5NiAtMTAuMjMwNiAzNjcuMjMzIC04LjgwNTE0IDMzNi40NzMgLTcuMTM3OTNMMzM2LjQzOSAtNy4xMzYxTDMxMi43MjYgLTIuNTk1MjNMMzEyLjYxMSAtMi40NTIzM0MzMTEuMjkxIC0wLjgxNDAyNiAzMTAuODIzIDEuNjI5NzYgMzEwLjg0MSA0LjU1MDk1QzMxMC44NTkgNy40ODgwNSAzMTEuMzcxIDExLjAwNzIgMzEyLjExIDE0Ljg4NDdDMzEyLjY0MyAxNy42NzczIDMxMy4yOTMgMjAuNjU0MSAzMTMuOTY4IDIzLjc0ODRDMzE1LjE3OCAyOS4yOTA0IDMxNi40NjkgMzUuMjA5IDMxNy4zMTggNDEuMTE5OUMzMTguNjM4IDUwLjMxODcgMzE4Ljg1NSA1OS4zNTIyIDMxNi4wMjYgNjYuNjU3M0MzMTMuMjE1IDczLjkxNTYgMzA3LjM3MSA3OS41MjkzIDI5Ni4zOTYgODEuODcyNEMyNjIuNjAzIDg5LjA4NjUgMjQxLjc5OSAxMTIuOTM2IDIyMy41MjUgMTM3Ljc1N0MyMjAuNzcxIDE0MS40OTYgMjE4LjA3NyAxNDUuMjU1IDIxNS40MDUgMTQ4Ljk4NEMyMDkuMTk1IDE1Ny42NDkgMjAzLjEwNCAxNjYuMTQ3IDE5Ni42NjcgMTczLjg0N0MxODcuNDY4IDE4NC44NTEgMTc3LjYwNyAxOTQuMTY0IDE2NS43ODEgMTk5LjkxMkwxNjUuOTc5IDIwMC44NjFMNDU2Ljk3OSAyMTIuODYxWiIgZmlsbD0iIzBGQzFCNyIvPgo8cGF0aCBkPSJNMzUzIDU2LjVDMzUzIDU3Ljg4MDcgMzUxLjg4MSA1OSAzNTAuNSA1OUMzNDkuMTE5IDU5IDM0OCA1Ny44ODA3IDM0OCA1Ni41QzM0OCA1NS4xMTkzIDM0OS4xMTkgNTQgMzUwLjUgNTRDMzUxLjg4MSA1NCAzNTMgNTUuMTE5MyAzNTMgNTYuNVoiIGZpbGw9IiNEN0UxRjQiLz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiIG9wYWNpdHk9IjAuNyI+CjxwYXRoIGQ9Ik02MjAgOTcuNUM2MjAgOTguODgwNyA2MTguODgxIDEwMCA2MTcuNSAxMDBDNjE2LjExOSAxMDAgNjE1IDk4Ljg4MDcgNjE1IDk3LjVDNjE1IDk2LjExOTMgNjE2LjExOSA5NSA2MTcuNSA5NUM2MTguODgxIDk1IDYyMCA5Ni4xMTkzIDYyMCA5Ny41WiIgZmlsbD0iI0Q3RTFGNCIvPgo8L2c+CjxwYXRoIGQ9Ik00NTQgNzQuNUM0NTQgNzUuODgwNyA0NTIuODgxIDc3IDQ1MS41IDc3QzQ1MC4xMTkgNzcgNDQ5IDc1Ljg4MDcgNDQ5IDc0LjVDNDQ5IDczLjExOTMgNDUwLjExOSA3MiA0NTEuNSA3MkM0NTIuODgxIDcyIDQ1NCA3My4xMTkzIDQ1NCA3NC41WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMjc1IDg3LjVDMjc1IDg4Ljg4MDcgMjczLjg4MSA5MCAyNzIuNSA5MEMyNzEuMTE5IDkwIDI3MCA4OC44ODA3IDI3MCA4Ny41QzI3MCA4Ni4xMTkzIDI3MS4xMTkgODUgMjcyLjUgODVDMjczLjg4MSA4NSAyNzUgODYuMTE5MyAyNzUgODcuNVoiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTQ2NS42MjQgMzMuNzY1NkM0NjYuMDY4IDM1LjA3MjggNDY1LjM2OSAzNi40OTI5IDQ2NC4wNjIgMzYuOTM3NEM0NjIuNzU1IDM3LjM4MiA0NjEuMzM0IDM2LjY4MjggNDYwLjg5IDM1LjM3NTZDNDYwLjQ0NSAzNC4wNjg0IDQ2MS4xNDUgMzIuNjQ4MyA0NjIuNDUyIDMyLjIwMzdDNDYzLjc1OSAzMS43NTkyIDQ2NS4xNzkgMzIuNDU4NCA0NjUuNjI0IDMzLjc2NTZaIiBmaWxsPSIjRDdFMUY0Ii8+CjxwYXRoIGQ9Ik0yMTYgNTEuNUMyMTYgNTIuODgwNyAyMTQuODgxIDU0IDIxMy41IDU0QzIxMi4xMTkgNTQgMjExIDUyLjg4MDcgMjExIDUxLjVDMjExIDUwLjExOTMgMjEyLjExOSA0OSAyMTMuNSA0OUMyMTQuODgxIDQ5IDIxNiA1MC4xMTkzIDIxNiA1MS41WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMzk4LjE3NCAxOC42ODA2QzM5OC42MTkgMTkuOTg3OCAzOTcuOTE5IDIxLjQwNzkgMzk2LjYxMiAyMS44NTI0QzM5NS4zMDUgMjIuMjk3IDM5My44ODUgMjEuNTk3OCAzOTMuNDQgMjAuMjkwNkMzOTIuOTk2IDE4Ljk4MzQgMzkzLjY5NSAxNy41NjMzIDM5NS4wMDIgMTcuMTE4N0MzOTYuMzA5IDE2LjY3NDIgMzk3LjcyOSAxNy4zNzM0IDM5OC4xNzQgMTguNjgwNloiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTE5MCAxMTdDMTkwIDExOS43NjEgMTg3Ljc2MSAxMjIgMTg1IDEyMkMxODIuMjM5IDEyMiAxODAgMTE5Ljc2MSAxODAgMTE3QzE4MCAxMTQuMjM5IDE4Mi4yMzkgMTEyIDE4NSAxMTJDMTg3Ljc2MSAxMTIgMTkwIDExNC4yMzkgMTkwIDExN1oiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTM5NC42NDkgODkuMDY0QzM5NS41MzkgOTEuNjc4NCAzOTQuMTQgOTQuNTE4NSAzOTEuNTI2IDk1LjQwNzdDMzg4LjkxMSA5Ni4yOTY5IDM4Ni4wNzEgOTQuODk4MyAzODUuMTgyIDkyLjI4NEMzODQuMjkzIDg5LjY2OTYgMzg1LjY5MSA4Ni44Mjk1IDM4OC4zMDYgODUuOTQwM0MzOTAuOTIgODUuMDUxMSAzOTMuNzYgODYuNDQ5NyAzOTQuNjQ5IDg5LjA2NFoiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTI4NSAyNUMyODUgMjcuNzYxNCAyODIuNzYxIDMwIDI4MCAzMEMyNzcuMjM5IDMwIDI3NSAyNy43NjE0IDI3NSAyNUMyNzUgMjIuMjM4NiAyNzcuMjM5IDIwIDI4MCAyMEMyODIuNzYxIDIwIDI4NSAyMi4yMzg2IDI4NSAyNVoiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTI4NSAxNTVDMjg1IDE1Ny43NjEgMjgyLjc2MSAxNjAgMjgwIDE2MEMyNzcuMjM5IDE2MCAyNzUgMTU3Ljc2MSAyNzUgMTU1QzI3NSAxNTIuMjM5IDI3Ny4yMzkgMTUwIDI4MCAxNTBDMjgyLjc2MSAxNTAgMjg1IDE1Mi4yMzkgMjg1IDE1NVoiIGZpbGw9IiNEN0UxRjQiLz4KPHBhdGggZD0iTTQ5Ni44MjYgOTQuNDUwN0M0OTcuNzE1IDk3LjA2NTEgNDk2LjMxNiA5OS45MDUyIDQ5My43MDIgMTAwLjc5NEM0OTEuMDg4IDEwMS42ODQgNDg4LjI0NyAxMDAuMjg1IDQ4Ny4zNTggOTcuNjcwN0M0ODYuNDY5IDk1LjA1NjMgNDg3Ljg2OCA5Mi4yMTYxIDQ5MC40ODIgOTEuMzI3QzQ5My4wOTYgOTAuNDM3OCA0OTUuOTM3IDkxLjgzNjQgNDk2LjgyNiA5NC40NTA3WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMzMxIDEyMEMzMzEgMTIyLjc2MSAzMjguNzYxIDEyNSAzMjYgMTI1QzMyMy4yMzkgMTI1IDMyMSAxMjIuNzYxIDMyMSAxMjBDMzIxIDExNy4yMzkgMzIzLjIzOSAxMTUgMzI2IDExNUMzMjguNzYxIDExNSAzMzEgMTE3LjIzOSAzMzEgMTIwWiIgZmlsbD0iI0Q3RTFGNCIvPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iMC43Ij4KPHBhdGggZD0iTTY2MSA0MkM2NjEgNDQuNzYxNCA2NTguNzYxIDQ3IDY1NiA0N0M2NTMuMjM5IDQ3IDY1MSA0NC43NjE0IDY1MSA0MkM2NTEgMzkuMjM4NiA2NTMuMjM5IDM3IDY1NiAzN0M2NTguNzYxIDM3IDY2MSAzOS4yMzg2IDY2MSA0MloiIGZpbGw9IiNEN0UxRjQiLz4KPC9nPgo8cGF0aCBkPSJNNTI5LjEwNiA0Ni41MDNDNTI5Ljk5NSA0OS4xMTczIDUyOC41OTcgNTEuOTU3NSA1MjUuOTgyIDUyLjg0NjdDNTIzLjM2OCA1My43MzU4IDUyMC41MjggNTIuMzM3MyA1MTkuNjM5IDQ5LjcyMjlDNTE4Ljc0OSA0Ny4xMDg2IDUyMC4xNDggNDQuMjY4NCA1MjIuNzYyIDQzLjM3OTNDNTI1LjM3NyA0Mi40OTAxIDUyOC4yMTcgNDMuODg4NiA1MjkuMTA2IDQ2LjUwM1oiIGZpbGw9IiNEN0UxRjQiLz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiIG9wYWNpdHk9IjAuNyI+CjxwYXRoIGQ9Ik03NjAuMDc3IDYzLjczMzdDNzYwLjk2NyA2Ni4zNDgxIDc1OS41NjggNjkuMTg4MiA3NTYuOTU0IDcwLjA3NzRDNzU0LjMzOSA3MC45NjY2IDc1MS40OTkgNjkuNTY4IDc1MC42MSA2Ni45NTM3Qzc0OS43MjEgNjQuMzM5MyA3NTEuMTE5IDYxLjQ5OTEgNzUzLjczNCA2MC42MUM3NTYuMzQ4IDU5LjcyMDggNzU5LjE4OCA2MS4xMTk0IDc2MC4wNzcgNjMuNzMzN1oiIGZpbGw9IiNEN0UxRjQiLz4KPC9nPgo8cGF0aCBkPSJNMTM0IDM1QzEzNCAzNy43NjE0IDEzMS43NjEgNDAgMTI5IDQwQzEyNi4yMzkgNDAgMTI0IDM3Ljc2MTQgMTI0IDM1QzEyNCAzMi4yMzg2IDEyNi4yMzkgMzAgMTI5IDMwQzEzMS43NjEgMzAgMTM0IDMyLjIzODYgMTM0IDM1WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNMTAyIDEyNC41QzEwMiAxMjUuODgxIDEwMC44ODEgMTI3IDk5LjUgMTI3Qzk4LjExOTMgMTI3IDk3IDEyNS44ODEgOTcgMTI0LjVDOTcgMTIzLjExOSA5OC4xMTkzIDEyMiA5OS41IDEyMkMxMDAuODgxIDEyMiAxMDIgMTIzLjExOSAxMDIgMTI0LjVaIiBmaWxsPSIjRDdFMUY0Ii8+CjxwYXRoIGQ9Ik0yMTYgMTgxLjVDMjE2IDE4Mi44ODEgMjE0Ljg4MSAxODQgMjEzLjUgMTg0QzIxMi4xMTkgMTg0IDIxMSAxODIuODgxIDIxMSAxODEuNUMyMTEgMTgwLjExOSAyMTIuMTE5IDE3OSAyMTMuNSAxNzlDMjE0Ljg4MSAxNzkgMjE2IDE4MC4xMTkgMjE2IDE4MS41WiIgZmlsbD0iI0Q3RTFGNCIvPgo8cGF0aCBkPSJNNDQwLjAzMyAxNDEuNzU3QzQ0MC40NzggMTQzLjA2NCA0MzkuNzc5IDE0NC40ODQgNDM4LjQ3MiAxNDQuOTI5QzQzNy4xNjQgMTQ1LjM3MyA0MzUuNzQ0IDE0NC42NzQgNDM1LjMgMTQzLjM2N0M0MzQuODU1IDE0Mi4wNiA0MzUuNTU0IDE0MC42NCA0MzYuODYyIDE0MC4xOTVDNDM4LjE2OSAxMzkuNzUxIDQzOS41ODkgMTQwLjQ1IDQ0MC4wMzMgMTQxLjc1N1oiIGZpbGw9IiNEN0UxRjQiLz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiIG9wYWNpdHk9IjAuNyI+CjxwYXRoIGQ9Ik02OTkuNTM5IDY5LjM2NjhDNjk5Ljk4MyA3MC42NzQgNjk5LjI4NCA3Mi4wOTQxIDY5Ny45NzcgNzIuNTM4N0M2OTYuNjcgNzIuOTgzMyA2OTUuMjUgNzIuMjg0IDY5NC44MDUgNzAuOTc2OEM2OTQuMzYgNjkuNjY5NiA2OTUuMDYgNjguMjQ5NiA2OTYuMzY3IDY3LjgwNUM2OTcuNjc0IDY3LjM2MDQgNjk5LjA5NCA2OC4wNTk3IDY5OS41MzkgNjkuMzY2OFoiIGZpbGw9IiNEN0UxRjQiLz4KPC9nPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2MSAxSDFWMTk5SDg2MVYxWk0wIDBWMjAwSDg2MlYwSDBaIiBmaWxsPSIjMjkzODU4Ii8+CjwvZz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX2FuZ3VsYXJfMjkxXzU0MDgiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYwLjI1IDgyLjUpIHJvdGF0ZSgxMDYuODc1KSBzY2FsZSgxMjQuODc3IDIxNi4zMDgpIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Q3RTFGNCIvPgo8c3RvcCBvZmZzZXQ9IjAuNTEyMTQ4IiBzdG9wLWNvbG9yPSIjMEZDMUI3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Q3RTFGNCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9hbmd1bGFyXzI5MV81NDA4IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDM5Mi41IDkxKSByb3RhdGUoMTcxLjM0KSBzY2FsZSgyNTIuMzc3IDIyOS41MzUpIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Q3RTFGNCIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMC40Njg3NSIgc3RvcC1jb2xvcj0iIzEzOEU4NyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEN0UxRjQiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI5MV81NDA4Ij4KPHJlY3Qgd2lkdGg9Ijg2MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);