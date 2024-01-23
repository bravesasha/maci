"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2800],{3772:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var l=s(5250),r=s(2459);const n={},i="MACI",d={id:"solidity-docs/MACI",title:"MACI",description:"A contract which allows users to sign up, and deploy new polls",source:"@site/versioned_docs/version-v1.x/solidity-docs/MACI.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/MACI",permalink:"/docs/solidity-docs/MACI",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/MACI.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"Solidity Docs",permalink:"/docs/solidity-docs/"},next:{title:"MessageProcessor",permalink:"/docs/solidity-docs/MessageProcessor"}},c={},a=[{value:"stateTreeDepth",id:"statetreedepth",level:3},{value:"STATE_TREE_SUBDEPTH",id:"state_tree_subdepth",level:3},{value:"TREE_ARITY",id:"tree_arity",level:3},{value:"BLANK_STATE_LEAF_HASH",id:"blank_state_leaf_hash",level:3},{value:"nextPollId",id:"nextpollid",level:3},{value:"polls",id:"polls",level:3},{value:"numSignUps",id:"numsignups",level:3},{value:"numStateLeaves",id:"numstateleaves",level:3},{value:"topupCredit",id:"topupcredit",level:3},{value:"pollFactory",id:"pollfactory",level:3},{value:"messageProcessorFactory",id:"messageprocessorfactory",level:3},{value:"tallyFactory",id:"tallyfactory",level:3},{value:"subsidyFactory",id:"subsidyfactory",level:3},{value:"stateAq",id:"stateaq",level:3},{value:"signUpGatekeeper",id:"signupgatekeeper",level:3},{value:"initialVoiceCreditProxy",id:"initialvoicecreditproxy",level:3},{value:"PollContracts",id:"pollcontracts",level:3},{value:"SignUp",id:"signup",level:3},{value:"DeployPoll",id:"deploypoll",level:3},{value:"onlyPoll",id:"onlypoll",level:3},{value:"CallerMustBePoll",id:"callermustbepoll",level:3},{value:"PoseidonHashLibrariesNotLinked",id:"poseidonhashlibrariesnotlinked",level:3},{value:"TooManySignups",id:"toomanysignups",level:3},{value:"MaciPubKeyLargerThanSnarkFieldSize",id:"macipubkeylargerthansnarkfieldsize",level:3},{value:"PreviousPollNotCompleted",id:"previouspollnotcompleted",level:3},{value:"PollDoesNotExist",id:"polldoesnotexist",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"signUp",id:"signup-1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"deployPoll",id:"deploypoll-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values",level:4},{value:"mergeStateAqSubRoots",id:"mergestateaqsubroots",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"mergeStateAq",id:"mergestateaq",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"getStateAqRoot",id:"getstateaqroot",level:3},{value:"Return Values",id:"return-values-2",level:4},{value:"getPoll",id:"getpoll",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-3",level:4}];function o(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"maci",children:"MACI"}),"\n",(0,l.jsx)(t.p,{children:"A contract which allows users to sign up, and deploy new polls"}),"\n",(0,l.jsx)(t.h3,{id:"statetreedepth",children:"stateTreeDepth"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint8 stateTreeDepth\n"})}),"\n",(0,l.jsx)(t.p,{children:"The state tree depth is fixed. As such it should be as large as feasible\nso that there can be as many users as possible.  i.e. 5 ** 10 = 9765625\nthis should also match the parameter of the circom circuits."}),"\n",(0,l.jsx)(t.h3,{id:"state_tree_subdepth",children:"STATE_TREE_SUBDEPTH"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint8 STATE_TREE_SUBDEPTH\n"})}),"\n",(0,l.jsx)(t.p,{children:"IMPORTANT: remember to change the ballot tree depth\nin contracts/ts/genEmptyBallotRootsContract.ts file\nif we change the state tree depth!"}),"\n",(0,l.jsx)(t.h3,{id:"tree_arity",children:"TREE_ARITY"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint8 TREE_ARITY\n"})}),"\n",(0,l.jsx)(t.h3,{id:"blank_state_leaf_hash",children:"BLANK_STATE_LEAF_HASH"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint256 BLANK_STATE_LEAF_HASH\n"})}),"\n",(0,l.jsx)(t.p,{children:"The hash of a blank state leaf"}),"\n",(0,l.jsx)(t.h3,{id:"nextpollid",children:"nextPollId"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint256 nextPollId\n"})}),"\n",(0,l.jsx)(t.p,{children:"Each poll has an incrementing ID"}),"\n",(0,l.jsx)(t.h3,{id:"polls",children:"polls"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"mapping(uint256 => address) polls\n"})}),"\n",(0,l.jsx)(t.p,{children:"A mapping of poll IDs to Poll contracts."}),"\n",(0,l.jsx)(t.h3,{id:"numsignups",children:"numSignUps"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"uint256 numSignUps\n"})}),"\n",(0,l.jsx)(t.p,{children:"The number of signups"}),"\n",(0,l.jsx)(t.h3,{id:"numstateleaves",children:"numStateLeaves"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"mapping(uint256 => uint256) numStateLeaves\n"})}),"\n",(0,l.jsx)(t.p,{children:"A mapping of block timestamps to the number of state leaves"}),"\n",(0,l.jsx)(t.h3,{id:"topupcredit",children:"topupCredit"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract TopupCredit topupCredit\n"})}),"\n",(0,l.jsx)(t.p,{children:"ERC20 contract that hold topup credits"}),"\n",(0,l.jsx)(t.h3,{id:"pollfactory",children:"pollFactory"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract IPollFactory pollFactory\n"})}),"\n",(0,l.jsx)(t.p,{children:"Factory contract that deploy a Poll contract"}),"\n",(0,l.jsx)(t.h3,{id:"messageprocessorfactory",children:"messageProcessorFactory"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract IMessageProcessorFactory messageProcessorFactory\n"})}),"\n",(0,l.jsx)(t.p,{children:"Factory contract that deploy a MessageProcessor contract"}),"\n",(0,l.jsx)(t.h3,{id:"tallyfactory",children:"tallyFactory"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract ITallySubsidyFactory tallyFactory\n"})}),"\n",(0,l.jsx)(t.p,{children:"Factory contract that deploy a Tally contract"}),"\n",(0,l.jsx)(t.h3,{id:"subsidyfactory",children:"subsidyFactory"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract ITallySubsidyFactory subsidyFactory\n"})}),"\n",(0,l.jsx)(t.p,{children:"Factory contract that deploy a Subsidy contract"}),"\n",(0,l.jsx)(t.h3,{id:"stateaq",children:"stateAq"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract AccQueue stateAq\n"})}),"\n",(0,l.jsx)(t.p,{children:"The state AccQueue. Represents a mapping between each user's public key\nand their voice credit balance."}),"\n",(0,l.jsx)(t.h3,{id:"signupgatekeeper",children:"signUpGatekeeper"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract SignUpGatekeeper signUpGatekeeper\n"})}),"\n",(0,l.jsx)(t.p,{children:"Address of the SignUpGatekeeper, a contract which determines whether a\nuser may sign up to vote"}),"\n",(0,l.jsx)(t.h3,{id:"initialvoicecreditproxy",children:"initialVoiceCreditProxy"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"contract InitialVoiceCreditProxy initialVoiceCreditProxy\n"})}),"\n",(0,l.jsx)(t.p,{children:"The contract which provides the values of the initial voice credit\nbalance per user"}),"\n",(0,l.jsx)(t.h3,{id:"pollcontracts",children:"PollContracts"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"struct PollContracts {\n  address poll;\n  address messageProcessor;\n  address tally;\n  address subsidy;\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"signup",children:"SignUp"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"event SignUp(uint256 _stateIndex, struct DomainObjs.PubKey _userPubKey, uint256 _voiceCreditBalance, uint256 _timestamp)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"deploypoll",children:"DeployPoll"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"event DeployPoll(uint256 _pollId, struct DomainObjs.PubKey _pubKey, struct MACI.PollContracts pollAddr)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"onlypoll",children:"onlyPoll"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"modifier onlyPoll(uint256 _pollId)\n"})}),"\n",(0,l.jsx)(t.p,{children:"Only allow a Poll contract to call the modified function."}),"\n",(0,l.jsx)(t.h3,{id:"callermustbepoll",children:"CallerMustBePoll"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error CallerMustBePoll(address _caller)\n"})}),"\n",(0,l.jsx)(t.p,{children:"custom errors"}),"\n",(0,l.jsx)(t.h3,{id:"poseidonhashlibrariesnotlinked",children:"PoseidonHashLibrariesNotLinked"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error PoseidonHashLibrariesNotLinked()\n"})}),"\n",(0,l.jsx)(t.h3,{id:"toomanysignups",children:"TooManySignups"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error TooManySignups()\n"})}),"\n",(0,l.jsx)(t.h3,{id:"macipubkeylargerthansnarkfieldsize",children:"MaciPubKeyLargerThanSnarkFieldSize"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error MaciPubKeyLargerThanSnarkFieldSize()\n"})}),"\n",(0,l.jsx)(t.h3,{id:"previouspollnotcompleted",children:"PreviousPollNotCompleted"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error PreviousPollNotCompleted(uint256 pollId)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"polldoesnotexist",children:"PollDoesNotExist"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"error PollDoesNotExist(uint256 pollId)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"constructor(contract IPollFactory _pollFactory, contract IMessageProcessorFactory _messageProcessorFactory, contract ITallySubsidyFactory _tallyFactory, contract ITallySubsidyFactory _subsidyFactory, contract SignUpGatekeeper _signUpGatekeeper, contract InitialVoiceCreditProxy _initialVoiceCreditProxy, contract TopupCredit _topupCredit, uint8 _stateTreeDepth) public payable\n"})}),"\n",(0,l.jsx)(t.p,{children:"Create a new instance of the MACI contract."}),"\n",(0,l.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_pollFactory"}),(0,l.jsx)(t.td,{children:"contract IPollFactory"}),(0,l.jsx)(t.td,{children:"The PollFactory contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_messageProcessorFactory"}),(0,l.jsx)(t.td,{children:"contract IMessageProcessorFactory"}),(0,l.jsx)(t.td,{children:"The MessageProcessorFactory contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_tallyFactory"}),(0,l.jsx)(t.td,{children:"contract ITallySubsidyFactory"}),(0,l.jsx)(t.td,{children:"The TallyFactory contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_subsidyFactory"}),(0,l.jsx)(t.td,{children:"contract ITallySubsidyFactory"}),(0,l.jsx)(t.td,{children:"The SubsidyFactory contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_signUpGatekeeper"}),(0,l.jsx)(t.td,{children:"contract SignUpGatekeeper"}),(0,l.jsx)(t.td,{children:"The SignUpGatekeeper contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_initialVoiceCreditProxy"}),(0,l.jsx)(t.td,{children:"contract InitialVoiceCreditProxy"}),(0,l.jsx)(t.td,{children:"The InitialVoiceCreditProxy contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_topupCredit"}),(0,l.jsx)(t.td,{children:"contract TopupCredit"}),(0,l.jsx)(t.td,{children:"The TopupCredit contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_stateTreeDepth"}),(0,l.jsx)(t.td,{children:"uint8"}),(0,l.jsx)(t.td,{children:"The depth of the state tree"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"signup-1",children:"signUp"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function signUp(struct DomainObjs.PubKey _pubKey, bytes _signUpGatekeeperData, bytes _initialVoiceCreditProxyData) public\n"})}),"\n",(0,l.jsx)(t.p,{children:"Allows any eligible user sign up. The sign-up gatekeeper should prevent\ndouble sign-ups or ineligible users from doing so.  This function will\nonly succeed if the sign-up deadline has not passed. It also enqueues a\nfresh state leaf into the state AccQueue."}),"\n",(0,l.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_pubKey"}),(0,l.jsx)(t.td,{children:"struct DomainObjs.PubKey"}),(0,l.jsx)(t.td,{children:"The user's desired public key."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_signUpGatekeeperData"}),(0,l.jsx)(t.td,{children:"bytes"}),(0,l.jsx)(t.td,{children:"Data to pass to the sign-up gatekeeper's     register() function. For instance, the POAPGatekeeper or     SignUpTokenGatekeeper requires this value to be the ABI-encoded     token ID."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_initialVoiceCreditProxyData"}),(0,l.jsx)(t.td,{children:"bytes"}),(0,l.jsx)(t.td,{children:"Data to pass to the     InitialVoiceCreditProxy, which allows it to determine how many voice     credits this user should have."})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"deploypoll-1",children:"deployPoll"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function deployPoll(uint256 _duration, struct Params.MaxValues _maxValues, struct Params.TreeDepths _treeDepths, struct DomainObjs.PubKey _coordinatorPubKey, address _verifier, address _vkRegistry, bool useSubsidy) public returns (struct MACI.PollContracts pollAddr)\n"})}),"\n",(0,l.jsx)(t.p,{children:"Deploy a new Poll contract."}),"\n",(0,l.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_duration"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"How long should the Poll last for"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_maxValues"}),(0,l.jsx)(t.td,{children:"struct Params.MaxValues"}),(0,l.jsx)(t.td,{children:"The maximum number of vote options, and messages"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_treeDepths"}),(0,l.jsx)(t.td,{children:"struct Params.TreeDepths"}),(0,l.jsx)(t.td,{children:"The depth of the Merkle trees"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_coordinatorPubKey"}),(0,l.jsx)(t.td,{children:"struct DomainObjs.PubKey"}),(0,l.jsx)(t.td,{children:"The coordinator's public key"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_verifier"}),(0,l.jsx)(t.td,{children:"address"}),(0,l.jsx)(t.td,{children:"The Verifier Contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_vkRegistry"}),(0,l.jsx)(t.td,{children:"address"}),(0,l.jsx)(t.td,{children:"The VkRegistry Contract"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"useSubsidy"}),(0,l.jsx)(t.td,{children:"bool"}),(0,l.jsx)(t.td,{children:"If true, the Poll will use the Subsidy contract"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"pollAddr"}),(0,l.jsx)(t.td,{children:"struct MACI.PollContracts"}),(0,l.jsx)(t.td,{children:"a new Poll contract address"})]})})]}),"\n",(0,l.jsx)(t.h3,{id:"mergestateaqsubroots",children:"mergeStateAqSubRoots"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function mergeStateAqSubRoots(uint256 _numSrQueueOps, uint256 _pollId) public\n"})}),"\n",(0,l.jsx)(t.p,{children:"Allow Poll contracts to merge the state subroots"}),"\n",(0,l.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_numSrQueueOps"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"Number of operations"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_pollId"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"The ID of the active Poll"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"mergestateaq",children:"mergeStateAq"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function mergeStateAq(uint256 _pollId) public returns (uint256 root)\n"})}),"\n",(0,l.jsx)(t.p,{children:"Allow Poll contracts to merge the state root"}),"\n",(0,l.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_pollId"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"The active Poll ID"})]})})]}),"\n",(0,l.jsx)(t.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"root"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"The calculated Merkle root"})]})})]}),"\n",(0,l.jsx)(t.h3,{id:"getstateaqroot",children:"getStateAqRoot"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function getStateAqRoot() public view returns (uint256 root)\n"})}),"\n",(0,l.jsx)(t.p,{children:"Return the main root of the StateAq contract"}),"\n",(0,l.jsx)(t.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"root"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"The Merkle root"})]})})]}),"\n",(0,l.jsx)(t.h3,{id:"getpoll",children:"getPoll"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-solidity",children:"function getPoll(uint256 _pollId) public view returns (address poll)\n"})}),"\n",(0,l.jsx)(t.p,{children:"Get the Poll details"}),"\n",(0,l.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"_pollId"}),(0,l.jsx)(t.td,{children:"uint256"}),(0,l.jsx)(t.td,{children:"The identifier of the Poll to retrieve"})]})})]}),"\n",(0,l.jsx)(t.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"poll"}),(0,l.jsx)(t.td,{children:"address"}),(0,l.jsx)(t.td,{children:"The Poll contract object"})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},2459:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var l=s(79);const r={},n=l.createContext(r);function i(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);