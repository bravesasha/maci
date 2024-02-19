"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6096],{7333:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=l(5250),s=l(720);const r={},i="TallyNonQv",d={id:"solidity-docs/TallyNonQv",title:"TallyNonQv",description:"The TallyNonQv contract is used during votes tallying",source:"@site/versioned_docs/version-v1.x/solidity-docs/TallyNonQv.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/TallyNonQv",permalink:"/docs/solidity-docs/TallyNonQv",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/TallyNonQv.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"TallyFactory",permalink:"/docs/solidity-docs/TallyFactory"},next:{title:"TallyNonQvFactory",permalink:"/docs/solidity-docs/TallyNonQvFactory"}},a={},c=[{value:"TREE_ARITY",id:"tree_arity",level:3},{value:"tallyCommitment",id:"tallycommitment",level:3},{value:"tallyBatchNum",id:"tallybatchnum",level:3},{value:"sbCommitment",id:"sbcommitment",level:3},{value:"verifier",id:"verifier",level:3},{value:"vkRegistry",id:"vkregistry",level:3},{value:"poll",id:"poll",level:3},{value:"messageProcessor",id:"messageprocessor",level:3},{value:"ProcessingNotComplete",id:"processingnotcomplete",level:3},{value:"InvalidTallyVotesProof",id:"invalidtallyvotesproof",level:3},{value:"AllBallotsTallied",id:"allballotstallied",level:3},{value:"NumSignUpsTooLarge",id:"numsignupstoolarge",level:3},{value:"BatchStartIndexTooLarge",id:"batchstartindextoolarge",level:3},{value:"TallyBatchSizeTooLarge",id:"tallybatchsizetoolarge",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"genTallyVotesPackedVals",id:"gentallyvotespackedvals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values",level:4},{value:"isTallied",id:"istallied",level:3},{value:"Return Values",id:"return-values-1",level:4},{value:"genTallyVotesPublicInputHash",id:"gentallyvotespublicinputhash",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"updateSbCommitment",id:"updatesbcommitment",level:3},{value:"tallyVotes",id:"tallyvotes",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"verifyTallyProof",id:"verifytallyproof",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"computeMerkleRootFromPath",id:"computemerklerootfrompath",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"verifySpentVoiceCredits",id:"verifyspentvoicecredits",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Return Values",id:"return-values-5",level:4},{value:"verifyTallyResult",id:"verifytallyresult",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Return Values",id:"return-values-6",level:4}];function h(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tallynonqv",children:"TallyNonQv"}),"\n",(0,n.jsx)(t.p,{children:"The TallyNonQv contract is used during votes tallying\nand by users to verify the tally results."}),"\n",(0,n.jsx)(t.h3,{id:"tree_arity",children:"TREE_ARITY"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"uint256 TREE_ARITY\n"})}),"\n",(0,n.jsx)(t.h3,{id:"tallycommitment",children:"tallyCommitment"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"uint256 tallyCommitment\n"})}),"\n",(0,n.jsx)(t.p,{children:"The commitment to the tally results. Its initial value is 0, but after\nthe tally of each batch is proven on-chain via a zk-SNARK, it should be\nupdated to:"}),"\n",(0,n.jsx)(t.p,{children:"hash2(\nhashLeftRight(merkle root of current results, salt0)\nhashLeftRight(number of spent voice credits, salt1),\n)"}),"\n",(0,n.jsx)(t.p,{children:"Where each salt is unique and the merkle roots are of arrays of leaves\nTREE_ARITY ** voteOptionTreeDepth long."}),"\n",(0,n.jsx)(t.h3,{id:"tallybatchnum",children:"tallyBatchNum"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"uint256 tallyBatchNum\n"})}),"\n",(0,n.jsx)(t.h3,{id:"sbcommitment",children:"sbCommitment"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"uint256 sbCommitment\n"})}),"\n",(0,n.jsx)(t.h3,{id:"verifier",children:"verifier"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"contract IVerifier verifier\n"})}),"\n",(0,n.jsx)(t.h3,{id:"vkregistry",children:"vkRegistry"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"contract IVkRegistry vkRegistry\n"})}),"\n",(0,n.jsx)(t.h3,{id:"poll",children:"poll"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"contract IPoll poll\n"})}),"\n",(0,n.jsx)(t.h3,{id:"messageprocessor",children:"messageProcessor"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"contract IMessageProcessor messageProcessor\n"})}),"\n",(0,n.jsx)(t.h3,{id:"processingnotcomplete",children:"ProcessingNotComplete"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error ProcessingNotComplete()\n"})}),"\n",(0,n.jsx)(t.p,{children:"custom errors"}),"\n",(0,n.jsx)(t.h3,{id:"invalidtallyvotesproof",children:"InvalidTallyVotesProof"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error InvalidTallyVotesProof()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"allballotstallied",children:"AllBallotsTallied"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error AllBallotsTallied()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"numsignupstoolarge",children:"NumSignUpsTooLarge"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error NumSignUpsTooLarge()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"batchstartindextoolarge",children:"BatchStartIndexTooLarge"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error BatchStartIndexTooLarge()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"tallybatchsizetoolarge",children:"TallyBatchSizeTooLarge"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"error TallyBatchSizeTooLarge()\n"})}),"\n",(0,n.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"constructor(address _verifier, address _vkRegistry, address _poll, address _mp) public payable\n"})}),"\n",(0,n.jsx)(t.p,{children:"Create a new Tally contract"}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_verifier"}),(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"The Verifier contract"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_vkRegistry"}),(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"The VkRegistry contract"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_poll"}),(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"The Poll contract"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_mp"}),(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"The MessageProcessor contract"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"gentallyvotespackedvals",children:"genTallyVotesPackedVals"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function genTallyVotesPackedVals(uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize) public pure returns (uint256 result)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Pack the batch start index and number of signups into a 100-bit value."}),"\n",(0,n.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_numSignUps"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_batchStartIndex"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyBatchSize"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"result"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"an uint256 representing the 3 inputs packed together"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"istallied",children:"isTallied"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function isTallied() public view returns (bool tallied)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Check if all ballots are tallied"}),"\n",(0,n.jsx)(t.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tallied"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"whether all ballots are tallied"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"gentallyvotespublicinputhash",children:"genTallyVotesPublicInputHash"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function genTallyVotesPublicInputHash(uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize, uint256 _newTallyCommitment) public view returns (uint256 inputHash)\n"})}),"\n",(0,n.jsx)(t.p,{children:"generate hash of public inputs for tally circuit"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_numSignUps"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_batchStartIndex"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyBatchSize"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_newTallyCommitment"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inputHash"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"hash of public inputs"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"updatesbcommitment",children:"updateSbCommitment"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function updateSbCommitment() public\n"})}),"\n",(0,n.jsx)(t.p,{children:"Update the state and ballot root commitment"}),"\n",(0,n.jsx)(t.h3,{id:"tallyvotes",children:"tallyVotes"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function tallyVotes(uint256 _newTallyCommitment, uint256[8] _proof) public\n"})}),"\n",(0,n.jsx)(t.p,{children:"Verify the result of a tally batch"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_newTallyCommitment"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the new tally commitment to be verified"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_proof"}),(0,n.jsx)(t.td,{children:"uint256[8]"}),(0,n.jsx)(t.td,{children:"the proof generated after tallying this batch"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"verifytallyproof",children:"verifyTallyProof"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function verifyTallyProof(uint256[8] _proof, uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize, uint256 _newTallyCommitment) public view returns (bool isValid)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Verify the tally proof using the verifying key"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_proof"}),(0,n.jsx)(t.td,{children:"uint256[8]"}),(0,n.jsx)(t.td,{children:"the proof generated after processing all messages"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_numSignUps"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"number of signups for a given poll"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_batchStartIndex"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the number of batches multiplied by the size of the batch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyBatchSize"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"batch size for the tally"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_newTallyCommitment"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the tally commitment to be verified at a given batch index"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isValid"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"whether the proof is valid"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"computemerklerootfrompath",children:"computeMerkleRootFromPath"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function computeMerkleRootFromPath(uint8 _depth, uint256 _index, uint256 _leaf, uint256[][] _pathElements) internal pure returns (uint256 current)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Compute the merkle root from the path elements\nand a leaf"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_depth"}),(0,n.jsx)(t.td,{children:"uint8"}),(0,n.jsx)(t.td,{children:"the depth of the merkle tree"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_index"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the index of the leaf"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_leaf"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the leaf"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_pathElements"}),(0,n.jsx)(t.td,{children:"uint256[][]"}),(0,n.jsx)(t.td,{children:"the path elements to reconstruct the merkle root"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"The merkle root"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"verifyspentvoicecredits",children:"verifySpentVoiceCredits"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function verifySpentVoiceCredits(uint256 _totalSpent, uint256 _totalSpentSalt, uint256 _resultCommitment) public view returns (bool isValid)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Verify the number of spent voice credits from the tally.json"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_totalSpent"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"spent field retrieved in the totalSpentVoiceCredits object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_totalSpentSalt"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the corresponding salt in the totalSpentVoiceCredit object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_resultCommitment"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"hashLeftRight(merkle root of the results.tally, results.salt) in tally.json file"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isValid"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the provided values are valid"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"verifytallyresult",children:"verifyTallyResult"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-solidity",children:"function verifyTallyResult(uint256 _voteOptionIndex, uint256 _tallyResult, uint256[][] _tallyResultProof, uint256 _tallyResultSalt, uint8 _voteOptionTreeDepth, uint256 _spentVoiceCreditsHash) public view returns (bool isValid)\n"})}),"\n",(0,n.jsx)(t.p,{children:"Verify the result generated from the tally.json"}),"\n",(0,n.jsx)(t.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_voteOptionIndex"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the index of the vote option to verify the correctness of the tally"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyResult"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"Flattened array of the tally"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyResultProof"}),(0,n.jsx)(t.td,{children:"uint256[][]"}),(0,n.jsx)(t.td,{children:"Corresponding proof of the tally result"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_tallyResultSalt"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"the respective salt in the results object in the tally.json"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_voteOptionTreeDepth"}),(0,n.jsx)(t.td,{children:"uint8"}),(0,n.jsx)(t.td,{children:"depth of the vote option tree"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"_spentVoiceCreditsHash"}),(0,n.jsx)(t.td,{children:"uint256"}),(0,n.jsx)(t.td,{children:"hashLeftRight(number of spent voice credits, spent salt)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"return-values-6",children:"Return Values"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isValid"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the provided proof is valid"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},720:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>i});var n=l(79);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);