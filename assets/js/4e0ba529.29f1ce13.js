"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7653],{2221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),s=n(1151);const r={},a="Minimum Anti-Collusion Infrastructure",o={id:"v0.x/introduction",title:"Minimum Anti-Collusion Infrastructure",description:"Barry WhiteHat, Kendrick Tan, Kobi Gurkan, Chih-Cheng Liang, and Koh Wei Jie",source:"@site/docs/v0.x/introduction.md",sourceDirName:"v0.x",slug:"/v0.x/introduction",permalink:"/maci/docs/v0.x/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/docs/v0.x/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Latest Audit",permalink:"/maci/docs/v1.x/audit"},next:{title:"Contract",permalink:"/maci/docs/v0.x/contract"}},h={},c=[{value:"Introduction",id:"introduction",level:2},{value:"High-level process",id:"high-level-process",level:2},{value:"Technical process",id:"technical-process",level:2},{value:"Availability and visibility of messages",id:"availability-and-visibility-of-messages",level:2},{value:"System components",id:"system-components",level:2},{value:"Roles",id:"roles",level:3},{value:"Cryptographic operations",id:"cryptographic-operations",level:3},{value:"Key generation",id:"key-generation",level:4},{value:"Command signing and encryption",id:"command-signing-and-encryption",level:4},{value:"Glossary",id:"glossary",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"minimum-anti-collusion-infrastructure",children:"Minimum Anti-Collusion Infrastructure"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Barry WhiteHat, Kendrick Tan, Kobi Gurkan, Chih-Cheng Liang, and Koh Wei Jie"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#high-level-process",children:"High-level process"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#technical-process",children:"Technical process"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#availability-and-visibility-of-messages",children:"Availability and visibility of messages"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#system-components",children:"System components"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#roles",children:"Roles"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#cryptographic-operations",children:"Cryptographic operations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#key-generation",children:"Key generation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#command-signing-and-encryption",children:"Command signing and encryption"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#glossary",children:"Glossary"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["This specification is for an implementation of Minimum Anti-Collusion Infrastructure (MACI). Originally proposed by Vitalik Buterin in ",(0,i.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"this ethresear.ch post"}),", systems built with MACI make collusion among participants difficult, while retaining the censorship resistance and correct-execution benefits of smart contracts. Although MACI can provide collusion resistance only if the coordinator is honest, a dishonest coordinator can neither censor nor tamper with its execution."]}),"\n",(0,i.jsx)(t.p,{children:"Note that MACI presumes an identity system where each legitimate member controls a unique Ethereum private key."}),"\n",(0,i.jsx)(t.h2,{id:"high-level-process",children:"High-level process"}),"\n",(0,i.jsx)(t.p,{children:"Whitelisted voters named Alice, Bob, and Charlie register to vote by sending their public key to a smart contract. Additionally, there is a central coordinator Dave, whose public key is known to all."}),"\n",(0,i.jsxs)(t.p,{children:["A later version of MACI will have to mitigate a ",(0,i.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413/3",children:"vote-buying attack"})," where a user may be bribed immediately when the voting period starts, such that their very first message is influenced by a briber. One solution to this is to have the contract to mandate that the first message that each participant sends is to change their key (see below). For the sake of simplicity, however, this specification will not address this issue."]}),"\n",(0,i.jsx)(t.p,{children:"When Alice casts her vote, she signs her vote with her private key, encrypts her signature with Dave's public key, and submits the result to the smart contract."}),"\n",(0,i.jsx)(t.p,{children:"Each voter may change her keypair at any time. To do this, she creates and signs a key-change command, encrypts it, and sends it to the smart contract. This makes it impossible for a briber to ever be sure that their bribe has any effect on the bribee's vote."}),"\n",(0,i.jsx)(t.p,{children:"If Bob, for instance, bribes Alice to vote a certain way, she can simply use the first public key she had registered \u2060\u2014 which is now void \u2060\u2014 to cast a vote. Since said vote is encrypted, as was the key-changing message which Alice had previously sent to Dave, Bob has no way to tell if Alice had indeed voted the way he wanted her to."}),"\n",(0,i.jsx)(t.p,{children:"Even if Alice reveals the cleartext of her vote to Bob, she just needs to not show him the updated key command that she previously used to invalidate that key. In short, as long as she had submitted a single encrypted command before her vote, there is no way to tell if said vote is valid or not."}),"\n",(0,i.jsx)(t.h2,{id:"technical-process",children:"Technical process"}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the ",(0,i.jsx)(t.a,{href:"#Glossary",children:"Glossary"})," for defintions of terms."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The coordinator deploys the MACI contract to an Ethereum blockchain and starts the sign-up period. The same transaction that deploys the contract also stores the value of an empty vote option tree."}),"\n",(0,i.jsxs)(t.li,{children:["To sign up, each user creates an EdDSA keypair and invokes the contract's ",(0,i.jsx)(t.code,{children:"signUp()"})," function. Alternatively, there is a mechanism where some contract function checks if the user owns a particular ERC721 token and adds them to the whitelist. It in turn generates a new leaf to the state tree and updates the state tree root."]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The signup period ends after a fixed amount of time. From that point onwards, users may no longer invoke ",(0,i.jsx)(t.code,{children:"signUp()"})," in this contract."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Each user votes. To do this, they:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Sign their command using the key which they had signed up with and then use a random (ephemeral) key as well as the coordinator's public key to generate a shared key (via ECDH) encrypt it."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If they are bribed, the user should sign it using an old public key which has already been replaced with a new one."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Otherwise, the user should use the most current public key they have registered."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Submit the the message, as well as the epheremal public key in the clear to the contract using its ",(0,i.jsx)(t.code,{children:"publishMessage()"})," function, which hashes the command and inserts it into the message tree."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The coordinator processes all the commands after the voting period ends."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For each batch of commands, they perform the following steps:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Generate a new state root which is the result of:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For each valid command, in reverse order, update the state leaf accordingly"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Ignore all invalid commands"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Update leaf 0 with a random leaf"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Generate a zk-SNARK proof that this state root transition is valid. (Note that "state root" refers to the root of the state tree in the contract, not the Ethereum state root as defined in the Yellow Paper.)'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["An invalid message can one which is signed by a public key which a user had already replaced with another key, among other criteria. To allow a bribee to plausibly claim that they have voted correctly even if they use an old public key, we insert a random leaf at index ",(0,i.jsx)(t.code,{children:"0"})," whether or not the message is valid."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/kNQR9ks.png",alt:""})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Figure 1: The relationship between each users, the coordinator, the contract functions, as well as the state tree and the message tree."})}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsx)(t.li,{children:"When the voting period ends, the coordinator tallies all the votes. It then generates zk-SNARK proof that the computed result is valid without revealing the plaintext of the votes. While this specification specifically describes a quadratic voting use case, the circuit used to generate this proof should differ based on the particular nature of the voting system."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"availability-and-visibility-of-messages",children:"Availability and visibility of messages"}),"\n",(0,i.jsx)(t.p,{children:"The coordinator may decrypt all commands."}),"\n",(0,i.jsx)(t.p,{children:"Each participant may only decrypt their own messages, and should not be able to decrypt other users' messages or access their commands."}),"\n",(0,i.jsx)(t.p,{children:"No-one else should be able to decrypt any messages."}),"\n",(0,i.jsx)(t.h2,{id:"system-components",children:"System components"}),"\n",(0,i.jsx)(t.h3,{id:"roles",children:"Roles"}),"\n",(0,i.jsx)(t.p,{children:"There are two roles: users and a coordinator."}),"\n",(0,i.jsx)(t.h3,{id:"cryptographic-operations",children:"Cryptographic operations"}),"\n",(0,i.jsx)(t.h4,{id:"key-generation",children:"Key generation"}),"\n",(0,i.jsx)(t.p,{children:"Each user owns an EdDSA keypair, as does the coordinator. Every user should have a copy of the coordinator's public key, which is stored and available from the smart contract. Likewise, the coordinator should have a copy of each user's public key, which they publish on-chain to sign up."}),"\n",(0,i.jsxs)(t.p,{children:["We define an EdDSA private key as a random value (initially 256 bits large) modulo the snark field size as described in ",(0,i.jsx)(t.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-197.md",children:"EIP197"}),". This results in a key size of roughly 253 bits and no more than 254 bits. Additionally, we use ",(0,i.jsx)(t.a,{href:"http://cvsweb.openbsd.org/cgi-bin/cvsweb/~checkout~/src/lib/libc/crypt/arc4random_uniform.c",children:"this efficient algorithm"})," to prevent modulo bias."]}),"\n",(0,i.jsx)(t.h4,{id:"command-signing-and-encryption",children:"Command signing and encryption"}),"\n",(0,i.jsx)(t.p,{children:"The following steps are needed to sign and encrypt a message:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Hash the command"}),"\n",(0,i.jsx)(t.li,{children:"Sign the hash with the user's EdDSA private key"}),"\n",(0,i.jsx)(t.li,{children:"Generate an ECDH shared key using a random private key (the ephemeral key) and the coordinator's public key."}),"\n",(0,i.jsx)(t.li,{children:"Encrypt both the signature and the data included in the command with the shared key"}),"\n",(0,i.jsxs)(t.li,{children:["Note that when we call ",(0,i.jsx)(t.code,{children:"publishMessage"}),", we pass in the encrypted data, the signing public key, and random public key."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsx)(t.p,{children:"Some terms in this specification are similar to one another but should not be used interchangably. This glossary should help to resolve such ambiguities."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Term"}),(0,i.jsx)(t.th,{children:"Meaning"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command"}),(0,i.jsx)(t.td,{children:"Unencrypted data whose fields include the user's public key, vote etc."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Message"}),(0,i.jsxs)(t.td,{children:["An encrypted command and signature (",(0,i.jsx)(t.code,{children:"Encrypt([Command, Signature], Key)"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"State"}),(0,i.jsx)(t.td,{children:"The mapping between each user's public key and the full set of information about which options they voted for and the weight per vote. Note that this does not refer to the Ethereum state as defined in the Yellow Paper."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Vote"}),(0,i.jsx)(t.td,{children:"The options which the user voted for"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Vote option"}),(0,i.jsx)(t.td,{children:"One out of many possible choices which a user may vote for"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Vote option tree"}),(0,i.jsx)(t.td,{children:"The unique tree of weights that each user assigns to vote options. This represents the full set of information about which options a user had voted for and how many voice credits they had spent per vote."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Voice credit"}),(0,i.jsx)(t.td,{children:"One unit which denotes the strength of a user's vote for a particular option. In a quadratic voting use case, users start out with a limited number of voice credits and spend them on votes."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);