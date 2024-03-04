"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5479],{4070:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var n=i(5250),r=i(720);const d={title:"Keypair",sidebar_label:"Keypair"},l=void 0,t={id:"typedoc/domainobjs/classes/Keypair",title:"Keypair",description:"Notice",source:"@site/versioned_docs/version-v1.x/typedoc/domainobjs/classes/Keypair.md",sourceDirName:"typedoc/domainobjs/classes",slug:"/typedoc/domainobjs/classes/Keypair",permalink:"/docs/typedoc/domainobjs/classes/Keypair",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/typedoc/domainobjs/classes/Keypair.md",tags:[],version:"v1.x",frontMatter:{title:"Keypair",sidebar_label:"Keypair"},sidebar:"version-1.x/mySidebar",previous:{title:"Ballot",permalink:"/docs/typedoc/domainobjs/classes/Ballot"},next:{title:"Message",permalink:"/docs/typedoc/domainobjs/classes/Message"}},c={},a=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"privKey",id:"privkey",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"pubKey",id:"pubkey",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods-1",level:2},{value:"copy",id:"copy",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"fromJSON",id:"fromjson",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"genEcdhSharedKey",id:"genecdhsharedkey",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Notice"})})}),"\n",(0,n.jsx)(s.p,{children:"A KeyPair is a pair of public and private keys\nThis is a MACI keypair, which is not to be\nconfused with an Ethereum public and private keypair.\nA MACI keypair is comprised of a MACI public key and a MACI private key"}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#constructor",children:"constructor"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#privkey",children:"privKey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#pubkey",children:"pubKey"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#copy",children:"copy"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#equals",children:"equals"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#tojson",children:"toJSON"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#fromjson",children:"fromJSON"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair#genecdhsharedkey",children:"genEcdhSharedKey"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors-1",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"new Keypair"}),"(",(0,n.jsx)(s.code,{children:"privKey?"}),"): ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})]}),"\n",(0,n.jsx)(s.p,{children:"Create a new instance of a Keypair"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"privKey?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/PrivKey",children:(0,n.jsx)(s.code,{children:"PrivKey"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the private key (optional)"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Notice"})})}),"\n",(0,n.jsx)(s.p,{children:"if no privKey is passed, it will automatically generate a new private key"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L26",children:"keyPair.ts:26"})}),"\n",(0,n.jsx)(s.h2,{id:"properties-1",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"privkey",children:"privKey"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"privKey"}),": ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/PrivKey",children:(0,n.jsx)(s.code,{children:"PrivKey"})})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L17",children:"keyPair.ts:17"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"pubkey",children:"pubKey"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"pubKey"}),": ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/PubKey",children:(0,n.jsx)(s.code,{children:"PubKey"})})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L19",children:"keyPair.ts:19"})}),"\n",(0,n.jsx)(s.h2,{id:"methods-1",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"copy",children:"copy"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"copy"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})]}),"\n",(0,n.jsx)(s.p,{children:"Create a deep clone of this Keypair"}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})}),"\n",(0,n.jsx)(s.p,{children:"a copy of the Keypair"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L41",children:"keyPair.ts:41"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"equals",children:"equals"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"equals"}),"(",(0,n.jsx)(s.code,{children:"keypair"}),"): ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Check whether two Keypairs are equal"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"keypair"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"the keypair to compare with"})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"boolean"})}),"\n",(0,n.jsx)(s.p,{children:"whether they are equal or not"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L58",children:"keyPair.ts:58"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"tojson",children:"toJSON"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"toJSON"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/interfaces/IJsonKeyPair",children:(0,n.jsx)(s.code,{children:"IJsonKeyPair"})})]}),"\n",(0,n.jsx)(s.p,{children:"Serialize into a JSON object"}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/interfaces/IJsonKeyPair",children:(0,n.jsx)(s.code,{children:"IJsonKeyPair"})})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L75",children:"keyPair.ts:75"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"fromjson",children:"fromJSON"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"fromJSON"}),"(",(0,n.jsx)(s.code,{children:"json"}),"): ",(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})]}),"\n",(0,n.jsx)(s.p,{children:"Deserialize into a Keypair instance"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"json"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/interfaces/IJsonKeyPair",children:(0,n.jsx)(s.code,{children:"IJsonKeyPair"})})})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/Keypair",children:(0,n.jsx)(s.code,{children:"Keypair"})})}),"\n",(0,n.jsx)(s.p,{children:"a keypair instance"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L87",children:"keyPair.ts:87"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"genecdhsharedkey",children:"genEcdhSharedKey"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"genEcdhSharedKey"}),"(",(0,n.jsx)(s.code,{children:"privKey"}),", ",(0,n.jsx)(s.code,{children:"pubKey"}),"): ",(0,n.jsx)(s.code,{children:"EcdhSharedKey"})]}),"\n",(0,n.jsx)(s.p,{children:"Generate a shared key"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"privKey"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/PrivKey",children:(0,n.jsx)(s.code,{children:"PrivKey"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"pubKey"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/docs/typedoc/domainobjs/classes/PubKey",children:(0,n.jsx)(s.code,{children:"PubKey"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"EcdhSharedKey"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c14077/domainobjs/ts/keyPair.ts#L49",children:"keyPair.ts:49"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},720:(e,s,i)=>{i.d(s,{Z:()=>t,a:()=>l});var n=i(79);const r={},d=n.createContext(r);function l(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);