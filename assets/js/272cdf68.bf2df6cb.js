"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[737],{7468:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(5893),i=s(1151);const o={title:"MACI v0.x Contract",sidebar_label:"MACI Contract",sidebar_position:2},r="Contract",c={id:"contract",title:"MACI v0.x Contract",description:"There is an Ethereum contract (MACI) which provides the following interface:",source:"@site/versioned_docs/version-v0.x/contract.md",sourceDirName:".",slug:"/contract",permalink:"/docs/v0.x/contract",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v0.x/contract.md",tags:[],version:"v0.x",sidebarPosition:2,frontMatter:{title:"MACI v0.x Contract",sidebar_label:"MACI Contract",sidebar_position:2},sidebar:"version-0.x/mySidebar",previous:{title:"Introduction",permalink:"/docs/v0.x/introduction"},next:{title:"MACI Circuits",permalink:"/docs/v0.x/circuits"}},a={},d=[{value:"Merkle trees in storage",id:"merkle-trees-in-storage",level:2},{value:"Vote option trees",id:"vote-option-trees",level:2},{value:"<code>signUp(PubKey _userPubKey, bytes memory _signUpGatekeeperData, bytes memory _initialVoiceCreditProxyData)</code>",id:"signuppubkey-_userpubkey-bytes-memory-_signupgatekeeperdata-bytes-memory-_initialvoicecreditproxydata",level:2},{value:"<code>publishMessage(uint256 _msg, PubKey _encPubKey)</code>",id:"publishmessageuint256-_msg-pubkey-_encpubkey",level:2},{value:"<code>batchProcessMessage(...)</code>",id:"batchprocessmessage",level:2},{value:"<code>proveVoteTallyBatch()</code>",id:"provevotetallybatch",level:2},{value:"State leaves",id:"state-leaves",level:2},{value:"Schema",id:"schema",level:3},{value:"Commands",id:"commands",level:2},{value:"Schema",id:"schema-1",level:3},{value:"About nonces",id:"about-nonces",level:3},{value:"Message verification",id:"message-verification",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"contract",children:"Contract"}),"\n",(0,n.jsxs)(t.p,{children:["There is an Ethereum contract (",(0,n.jsx)(t.code,{children:"MACI"}),") which provides the following interface:"]}),"\n",(0,n.jsx)(t.h2,{id:"merkle-trees-in-storage",children:"Merkle trees in storage"}),"\n",(0,n.jsx)(t.p,{children:"We maintain two Merkle roots in the MACI contract:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Tree root"}),(0,n.jsx)(t.th,{children:"Represents"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"messageTree"})}),(0,n.jsx)(t.td,{children:"Messages \u2060\u2014 both valid and invalid \u2060\u2014 submitted by users."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"stateTree"})}),(0,n.jsx)(t.td,{children:"The current mapping between public keys and votes. Leaf 0 is reserved for a random value."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The zero value (for empty leaves) for each tree is a nothing-up-my-sleeve value: the Keccak256 hash of the string 'Maci':"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"uint256 SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;\nuint ZERO_VALUE = uint256(keccak256(abi.encodePacked('Maci'))) % SNARK_SCALAR_FIELD;\n"})}),"\n",(0,n.jsx)(t.p,{children:"which is equal to:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"5503045433092194285660061905880311622788666850989422096966288514930349325741\n"})}),"\n",(0,n.jsx)(t.h2,{id:"vote-option-trees",children:"Vote option trees"}),"\n",(0,n.jsx)(t.p,{children:"We use a Quinary Merkle tree (5 leaves per node) to store votes."}),"\n",(0,n.jsx)(t.h2,{id:"signuppubkey-_userpubkey-bytes-memory-_signupgatekeeperdata-bytes-memory-_initialvoicecreditproxydata",children:(0,n.jsx)(t.code,{children:"signUp(PubKey _userPubKey, bytes memory _signUpGatekeeperData, bytes memory _initialVoiceCreditProxyData)"})}),"\n",(0,n.jsxs)(t.p,{children:["Signups can only occur during the signup period. The ",(0,n.jsx)(t.code,{children:"signUp"})," function passes the sender's address, along with the ",(0,n.jsx)(t.code,{children:"_signUpGatekeeperData"})," to a ",(0,n.jsx)(t.code,{children:"SignUpGateway"})," contract, which determines whether or not to allow the user to sign up. For instance, this contract can be a simple whitelist."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"signUp"})," function also passes ",(0,n.jsx)(t.code,{children:"_initialVoiceCreditProxyData"})," to an ",(0,n.jsx)(t.code,{children:"InitialVoiceCreditProxy"})," contract which determines how many voice credits the user should have initially. This can be a constant value for all users, or a different credits per user."]}),"\n",(0,n.jsxs)(t.p,{children:["Next, it adds a new leaf to the state tree, starting from index ",(0,n.jsx)(t.code,{children:"1"})," (as index 0 is reserved for invalid leaves). This leaf is the hash of the public key, the user's voice credits, the nonce ",(0,n.jsx)(t.code,{children:"0"}),", and the root of an empty vote option tree."]}),"\n",(0,n.jsx)(t.p,{children:"The sign-up period ends after a predefined deadline. A later version of MACI will allow ongoing sign-ups where state trees will be merged once per week."}),"\n",(0,n.jsx)(t.h2,{id:"publishmessageuint256-_msg-pubkey-_encpubkey",children:(0,n.jsx)(t.code,{children:"publishMessage(uint256 _msg, PubKey _encPubKey)"})}),"\n",(0,n.jsx)(t.p,{children:"This function ensures that the current block time is past the signup period, increments the message counter, and then updates the message root."}),"\n",(0,n.jsx)(t.p,{children:"This function must be public and anyone should be able to call it."}),"\n",(0,n.jsx)(t.h2,{id:"batchprocessmessage",children:(0,n.jsx)(t.code,{children:"batchProcessMessage(...)"})}),"\n",(0,n.jsx)(t.p,{children:"The parameters are:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"uint256 _newStateRoot,\nuint256[] memory _stateTreeRoots,\nPubKey[] memory _ecdhPubKeys,\nuint256[8] memory _proof\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This function accepts a batch update state root transition zk-SNARK proof (",(0,n.jsx)(t.code,{children:"_proof"}),") and public inputs to the zk-SNARK."]}),"\n",(0,n.jsxs)(t.p,{children:["It verifies the proof, updates the processed message counter, and updates the state root in storage with ",(0,n.jsx)(t.code,{children:"newStateRoot"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"If the proof is valid, this means that the coordinator has correctly updated the state tree root according to the commands in the given batch of messages."}),"\n",(0,n.jsx)(t.p,{children:"It also increments the message tree index by the number of commands whose processing is verified by the given zk-SNARK proof."}),"\n",(0,n.jsx)(t.p,{children:"This function should, however, only do so if the processed message counter indicates that all previous messages have already been processed."}),"\n",(0,n.jsx)(t.p,{children:"Although anyone may call this contract function, only the coordinator should know the ECDH shared keys used to encrypt the messages."}),"\n",(0,n.jsx)(t.h2,{id:"provevotetallybatch",children:(0,n.jsx)(t.code,{children:"proveVoteTallyBatch()"})}),"\n",(0,n.jsx)(t.p,{children:"The parameters are:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"uint256 _intermediateStateRoot,\nuint256 _newResultsCommitment,\nuint256[] memory _finalSaltedResults,\nuint256[8] memory _proof\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This allows the coordinator to prove the correctness of their vote tally (in ",(0,n.jsx)(t.code,{children:"_finalSaltedResults"}),"). They do this in batches of state leaves. Each batch of state leaves is accumulated into an intermediate state root, and the Merkle root of all the intermediate state roots is the full state root. The proof shows that the result of adding the votes in the current batch to the culmulative results is computed correctly, but hides the results by salting and hashing them."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"_finalSaltedResults"})," can be any value but for the final batch, it must be the correct quadratic vote tally."]}),"\n",(0,n.jsx)(t.p,{children:"It does not matter that the contract does or does not restrict access to this function as anyone who can produce a valid proof should be able to tally the votes, and it should not be possible for anyone to tamper with the results anyway."}),"\n",(0,n.jsx)(t.h2,{id:"state-leaves",children:"State leaves"}),"\n",(0,n.jsx)(t.p,{children:"Each state leaf contains a user's public key, the Merkle root of their unique vote option tree, the number of voice credits they have left, and the nonce."}),"\n",(0,n.jsxs)(t.p,{children:["The nonce is either 0 or that of their most recent valid command. For instance, a user who has published 0 valid commands has a nonce of ",(0,n.jsx)(t.code,{children:"0"}),", and their first valid command should have the nonce ",(0,n.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Each user's public key is associated with exactly one state leaf. This leaf is the single source of truth of their vote option tree. Additionally, since a user may vote for multiple options, and allocate different amounts of voice credits to each option, we represent their votes as a Merkle tree."}),"\n",(0,n.jsx)(t.h3,{id:"schema",children:"Schema"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Data"}),(0,n.jsx)(t.th,{children:"Bits"}),(0,n.jsx)(t.th,{children:"Comments"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"publicKeyX"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The public key's x-coordinate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"publicKeyY"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The public key's y-coordinate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"voteOptionTreeRoot"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The Merkle root of the tree which represents the options which this particular user voted for."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"voiceCreditBalance"})}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"The number of remaining voice credits that the user can spend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"nonce"})}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"The nonce of the most recently inserted command for this user."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["The schema for leaves of the vote option tree, which we dub ",(0,n.jsx)(t.em,{children:"vote leaves"}),", is as such:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Data"}),(0,n.jsx)(t.th,{children:"Bits"}),(0,n.jsx)(t.th,{children:"Comments"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"votes"})}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"In the quadratic voting use case, this is the square root of the voice credits spent for this option."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"commands",children:"Commands"}),"\n",(0,n.jsx)(t.p,{children:"Each command may convey a key-change request, a vote, or both. There is only one schema for all commands."}),"\n",(0,n.jsx)(t.h3,{id:"schema-1",children:"Schema"}),"\n",(0,n.jsx)(t.p,{children:"Be careful not to confuse the following leaf schema for commands with the state leaf schema. Each user may submit multiple commands, but should only be associated with one state leaf."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Data"}),(0,n.jsx)(t.th,{children:"Bits"}),(0,n.jsx)(t.th,{children:"Comments"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"stateIndex"})}),(0,n.jsx)(t.td,{children:"State tree depth"}),(0,n.jsx)(t.td,{children:"The index of the leaf in the state tree which contains the public key used to sign the message. This is used to point to the state leaf to update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"encPublicKeyX"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The x-coordinate of the ephemeral public key. Its associated private key is used to encrypt the message."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"encPublicKeyY"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The y-coordinate of the ephemeral public key. (We may use 1 bit, depending on the implementation)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"newPublicKeyX"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The new public key's x-coordinate. If no change is required, it should be that of the current key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"newPublicKeyY"})}),(0,n.jsx)(t.td,{children:"253"}),(0,n.jsx)(t.td,{children:"The new public key's y-coordinate. If no change is required, it should be that of the current key. (We may use 1 bit, depending on the implementation)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"voteOptionIndex"})}),(0,n.jsx)(t.td,{children:"Vote option tree depth"}),(0,n.jsx)(t.td,{children:"The index of the leaf in the vote option tree to which this state leaf refers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"newVoteWeight"})}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"In the quadratic voting use case, this is the square root of the number of voice credits a user wishes to spend on this vote."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"nonce"})}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsxs)(t.td,{children:["Prevents replay attacks. Starts from ",(0,n.jsx)(t.code,{children:"0"})," and for each message. A message meant to fool a briber may contain ",(0,n.jsx)(t.em,{children:"any nonce necessary"})," to do so. For more details, see the section on nonces below."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"A useful rule of thumb is that the coordinator -- not the user -- should provide information that they know if they possess it. As such, the command does not contain information such as the Merkle path to the root of the vote option tree, since the coordinator should have it."}),"\n",(0,n.jsx)(t.h3,{id:"about-nonces",children:"About nonces"}),"\n",(0,n.jsx)(t.p,{children:"Messages are processed in reverse order of being published. This has important implications for the way that nonces should be set."}),"\n",(0,n.jsxs)(t.p,{children:["The last valid message per user should have a nonce of ",(0,n.jsx)(t.code,{children:"1"}),". Each valid message that comes before it should have an increasing nonce."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"0"})," and negative values are invalid nonces."]}),"\n",(0,n.jsx)(t.p,{children:"For example, Alice publishes 5 messages, all of which vote for the same option:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"(a) Nonce: 2; vote weight: 10"}),"\n",(0,n.jsx)(t.li,{children:"(b) Nonce: 1; vote weight: 20"}),"\n",(0,n.jsx)(t.li,{children:"(c) Nonce: 3; vote weight: 10"}),"\n",(0,n.jsx)(t.li,{children:"(d) Nonce: 2; vote weight: 1"}),"\n",(0,n.jsx)(t.li,{children:"(e) Nonce: 1; vote weight: 0"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Since messages are processed in reverse order, messages (e), (d), and (c) are valid, but (b) and (a) are not. As such, her option receives 11 votes."}),"\n",(0,n.jsx)(t.p,{children:"(b) is invalid because at the point at which it is processed, the latest nonce is 3, but (b) gives a nonce of (1). The same applies for (a), whose nonce has been seen before."}),"\n",(0,n.jsx)(t.p,{children:"Take another example, where Eve bribes Bob to vote for option 1, but Bob wants to vote for option 2 instead."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"(a) Nonce: 1; vote weight: 10; option: 1"}),"\n",(0,n.jsx)(t.li,{children:"(b) Nonce: 1; vote weight: 10; option: 2"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Bob casts vote (a) and shows it to Eve. Later, he secretly casts (b). Since (b) is processed first, it makes (a) invalid, but Eve has no way to tell."}),"\n",(0,n.jsx)(t.p,{children:"If a user changes their mind, they may have to cast new votes to invalidate their old ones:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"(a) Nonce: 2; vote weight: 10; option: 1"}),"\n",(0,n.jsx)(t.li,{children:"(b) Nonce: 1; vote weight: 10; option: 2"}),"\n",(0,n.jsx)(t.li,{children:"(c) Nonce: 2; vote weight: 5; option: 1"}),"\n",(0,n.jsx)(t.li,{children:"(d) Nonce: 1; vote weight: 5; option: 1"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the above example, if a user changes their mind after casting vote (b), they have to start over."}),"\n",(0,n.jsx)(t.h2,{id:"message-verification",children:"Message verification"}),"\n",(0,n.jsxs)(t.p,{children:["Given a ",(0,n.jsx)(t.code,{children:"command"})," from a user Alice, we say that the state transition from an ",(0,n.jsx)(t.code,{children:"oldStateRoot"})," to a ",(0,n.jsx)(t.code,{children:"newStateRoot"})," is ",(0,n.jsx)(t.em,{children:"valid"})," if and only if (not in order of processing):"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The nonce equals the total number of valid commands from Alice processed by the coordinator in order to produce ",(0,n.jsx)(t.code,{children:"oldStateRoot"}),", minus one. See the section on nonces."]}),"\n",(0,n.jsx)(t.li,{children:"The decrypted message is signed by Alice's current EdDSA private key."}),"\n",(0,n.jsx)(t.li,{children:"The signature is valid. "}),"\n",(0,n.jsx)(t.li,{children:"The specified vote option is indeed a choice that the user may make in the system."}),"\n",(0,n.jsx)(t.li,{children:"The user has enough voice credits left."}),"\n",(0,n.jsxs)(t.li,{children:["Inserting the newly produced state leaf into the current state tree with ",(0,n.jsx)(t.code,{children:"oldStateRoot"})," results in a new state tree with a root equal to ",(0,n.jsx)(t.code,{children:"newStateRoot"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"The state leaf index is less or equal to than the maximum state leaf index (2 ** state tree depth) and is not equal to 0."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);