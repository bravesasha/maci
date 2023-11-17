"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7500],{9363:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(5893),n=t(1151);const r={title:"MACI Circuits",description:"Introduction to the core zk-SNARK circuits of MACI",sidebar_label:"Circuits",sidebar_position:6},c="Circuits",l={id:"v1.x/circuits",title:"MACI Circuits",description:"Introduction to the core zk-SNARK circuits of MACI",source:"@site/docs/v1.x/circuits.md",sourceDirName:"v1.x",slug:"/v1.x/circuits",permalink:"/maci/docs/v1.x/circuits",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v1.x/circuits.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"MACI Circuits",description:"Introduction to the core zk-SNARK circuits of MACI",sidebar_label:"Circuits",sidebar_position:6},sidebar:"docSidebar",previous:{title:"Integrating",permalink:"/maci/docs/v1.x/integrating"},next:{title:"Command-line interface",permalink:"/maci/docs/v1.x/cli"}},d={},a=[{value:"Message processing",id:"message-processing",level:3},{value:"Vote tallying",id:"vote-tallying",level:3},{value:"Subsisdy",id:"subsisdy",level:3},{value:"Compile circuits",id:"compile-circuits",level:2},{value:"Measure the circuit sizes",id:"measure-the-circuit-sizes",level:2},{value:"Download the <code>.ptau</code> file",id:"download-the-ptau-file",level:2},{value:"Generate <code>.zkey</code> files",id:"generate-zkey-files",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"circuits",children:"Circuits"}),"\n",(0,i.jsx)(s.p,{children:"MACI has three zk-SNARK circuits:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ProcessMessages.circom"}),", which takes a batch of messages, and updates the\nstate and ballot trees according to the contents of said messages."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"TallyVotes.circom"}),", which counts votes from users' ballots, batch by batch."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Subsidy.circom"}),", which implements ",(0,i.jsx)(s.a,{href:"https://hackmd.io/@chaosma/H1_9xmT2K",children:"pairwise subsidy"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Each circuit is parameterised and it is important to set the right parameters\nto your use case. For example, if you want to support up to 3125 messages, the message tree depth parameter should be set to ",(0,i.jsx)(s.code,{children:"5"})," (as ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^5 = 3125"}),")."]}),"\n",(0,i.jsxs)(s.p,{children:["Next, navigate to the ",(0,i.jsx)(s.code,{children:"cli/"})," directory and edit ",(0,i.jsx)(s.code,{children:"zkeys.config.yml"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"This config file defines the parameters required for MACI's circuits."}),"\n",(0,i.jsx)(s.h3,{id:"message-processing",children:"Message processing"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"#"}),(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"State tree depth"}),(0,i.jsx)(s.td,{children:"Should be set to 10. Allows 9,765,625 signups."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:"Message tree depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," votes or key-change messages."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:"Message batch tree depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," messages to be processed per batch."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"3"}),(0,i.jsx)(s.td,{children:"Vote option tree depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," vote options."]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"vote-tallying",children:"Vote tallying"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"#"}),(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"State tree depth"}),(0,i.jsx)(s.td,{children:"Should be set to 10. Allows 9,765,625 signups."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:"State leaf batch depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," users' votes to be processed per batch."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:"Vote option tree depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," vote options."]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"subsisdy",children:"Subsisdy"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"#"}),(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"State tree depth"}),(0,i.jsx)(s.td,{children:"Should be set to 10. Allows 9,765,625 signups."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsx)(s.td,{children:"State leaf batch depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," users' votes to be processed per batch."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2"}),(0,i.jsx)(s.td,{children:"Vote option tree depth"}),(0,i.jsxs)(s.td,{children:["Allows ",(0,i.jsx)(s.code,{className:"language-math math-inline",children:"5^n"})," vote options."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"compile-circuits",children:"Compile circuits"}),"\n",(0,i.jsx)(s.p,{children:"Run:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx zkey-manager compile -c ./zkeys.config.yml\n"})}),"\n",(0,i.jsx)(s.p,{children:"The larger the trees, the more time this process may take. You may also need a\nmachine with a very large amount of memory."}),"\n",(0,i.jsx)(s.h2,{id:"measure-the-circuit-sizes",children:"Measure the circuit sizes"}),"\n",(0,i.jsxs)(s.p,{children:["The size of a circuit is denoted by its number of constraints. The larger this\nnumber, the more time it takes to compile it, generate its ",(0,i.jsx)(s.code,{children:".zkey"})," file, and\nperform phase 2 contributions."]}),"\n",(0,i.jsx)(s.p,{children:"Run this command to measure a circuit:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx snarkjs r1cs info CIRCUIT_NAME.circom\n"})}),"\n",(0,i.jsxs)(s.h2,{id:"download-the-ptau-file",children:["Download the ",(0,i.jsx)(s.code,{children:".ptau"})," file"]}),"\n",(0,i.jsxs)(s.p,{children:["This file should be the result of the Perpetual Powers of Tau trusted setup\ncontribution which ",(0,i.jsx)(s.a,{href:"https://blog.hermez.io/hermez-cryptographic-setup/",children:"Hermez Network\nselected"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Run:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx zkey-manager downloadPtau -c ./zkeys.config.yml\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"zkey-manager"})," will select the smallest ",(0,i.jsx)(s.code,{children:".ptau"})," file that fits the largest\ncircuit specified in ",(0,i.jsx)(s.code,{children:"zkeys.config.yml"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"generate-zkey-files",children:["Generate ",(0,i.jsx)(s.code,{children:".zkey"})," files"]}),"\n",(0,i.jsx)(s.p,{children:"Run:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx zkey-manager genZkeys -c ./zkeys.config.yml\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This generates the initial ",(0,i.jsx)(s.code,{children:".zkey"})," files for each circuit."]}),"\n",(0,i.jsx)(s.p,{children:"You should perform at least one contribution to each circuit, even if you\nchoose not to perform a multi-party trusted setup."})]})}function o(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>c});var i=t(7294);const n={},r=i.createContext(n);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);