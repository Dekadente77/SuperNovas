import React from "react"
import '../styles/Global.css';
import '../styles/Metamask.css'
import {Button, TextField, Fab} from '@material-ui/core';
import detectEthereumProvider from '@metamask/detect-provider';
const Web3 = require('web3');

// TEST
// const OPENSEA_WEB = "https://testnets.opensea.io/assets/0xbEA8123277142dE42571f1fAc045225a1D347977/";
 //const NFT_CONTRACT_ADDRESS = "0xbEA8123277142dE42571f1fAc045225a1D347977"; //test

// MAINNET
//const OPENSEA_WEB = "https://opensea.io/assets/0xbEA8123277142dE42571f1fAc045225a1D347977/";
const NFT_CONTRACT_ADDRESS = "0xc13F4F0F865bAc08F62654B57E38669EbC4747a3";
const CRATES_CONTRACT_ADDRESS = "0xC50F11281b0821E5a9AD3DD77C33Eaf82d3094f4";
const NFT_ABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BASE_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DystoAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "END",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "INITIAL_ISSUANCE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_CLAIM",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "START",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lastUpdate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "punkid",
				"type": "uint256"
			}
		],
		"name": "punkCreds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "reservedCreds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleIsActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "newState",
				"type": "bool"
			}
		],
		"name": "setSaleState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownwer",
				"type": "address"
			}
		],
		"name": "totalAvailable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unclaimedCreds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const CRATES_ABI =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "newState",
				"type": "bool"
			}
		],
		"name": "setSaleState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "BurnAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CredsAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DystoAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "exists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleIsActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownwer",
				"type": "address"
			}
		],
		"name": "totalAvailable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const style = {
  backgroundColor: '#ffff02',
  color: '#000000',
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'lemon',
  boxShadow: 'none',
  borderRadius: '10px',
  marginTop: '20px',

  '&:hover': {
      backgroundColor: '#8CFF9B',
      color: '#ffffff',
      boxShadow: 'none',
  }
}; 

const styleClaim = {
    backgroundColor: '#ffff02',
    color: '#000000',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'lemon',
    boxShadow: 'none',
    borderRadius: '10px',
    margin: '0 10px 0 0',
  
    '&:hover': {
        backgroundColor: '#27D3CB',
        color: '#ffffff',
        boxShadow: 'none',
    }
  };

const styleBuy = {
    backgroundColor: '#ffff02',
	top: '-350px',
    position: 'relative',
    color: '#000000',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'lemon',
    boxShadow: 'none',
    borderRadius: '10px',
	display: 'none',
  
    '&:hover': {
        backgroundColor: '#8CFF9B',
        color: '#ffffff',
        boxShadow: 'none',
    }
  };
  
  const inputProps = {
    min: 1,
    max: 20
  };

class ClaimButtons extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentAccount: null,
      totalAllowance: 0,
      isSendingTransaction: false,
      purchaseNumber: "1",
      hasSaleStarted: false,
      isMainnet: true,
      statusString: null,
      defaultValue: 1,
      isAuthClaim: 0,
    }
    this.textInput = {value: 1};
    this.updateInput = this.updateInput.bind(this);
  
  }


  async handleClick() {
    await this.buyCrates(CRATES_CONTRACT_ADDRESS, CRATES_ABI,this.textInput.value);
  }

  async handleAprobal() {
    await this.aprobalCrates(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }

  async handleClaim() {
    await this.claimCreds(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }


  async componentDidMount() {
    
    if (this.ethereum) {
      return;
    }
    
    this.ethereum = await detectEthereumProvider();
    if (this.ethereum === null || this.ethereum !== window.ethereum ) {
      console.log("ethereum provider not detected");
      this.setState({
        currentAccount: null,
      });
      return;
    }

    this.web3 = new Web3(this.ethereum);

    if (this.web3 === null) {
      console.log('web 3 not found');
      return;
    }
    this.nftContract = new this.web3.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );

    this.cratesContract = new this.web3.eth.Contract(
      CRATES_ABI,
      CRATES_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );

    this.connect()

    /**********************************************************/
    /* Handle chain (network) and chainChanged (per EIP-1193) */
    /**********************************************************/
    const chainId = await this.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== "0x1") {
      this.setState({isMainnet: false})
    }

    this.ethereum.on('chainChanged', handleChainChanged);
    this.ethereum.on('accountsChanged', handleChainChanged);
    function handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload();
    }

    /***********************************************************/
    /* Handle user accounts and accountsChanged (per EIP-1193) */
    /***********************************************************/
    this.ethereum
      .request({ method: 'eth_accounts' })
      .then((accounts) => this.handleAccountsChanged(accounts))
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });

    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    this.ethereum.on('accountsChanged', () => this.handleAccountsChanged);
    

  }

  handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      this.setState({
        currentAccount: null,
      });
    } else if (accounts[0] !== this.state.currentAccount) {
      this.setState({
        currentAccount: accounts[0],
      });
      this.updateInitialStates();
    }

  }

  connect = () => {
    console.log(this.ethereum);
    if (this.ethereum === null || this.ethereum === undefined) {
      alert("no wallet");
      return;
    }
    if (this.state.currentAccount) {
      console.log("account already connected");
      return;
    }
    this.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts) => this.handleAccountsChanged(accounts))
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        
      } else {
        console.error(err);
      }
    });
  }


  buyCrates = (contractAddress, contractABI, numPurchase) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      this.connect();
      return;
    }
    numPurchase=parseInt(numPurchase);


    this.setState({
      isSendingTransaction: true,
    });

  
      const encodedAdoptFunction = this.cratesContract.methods.mint(numPurchase).encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: 0,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('Crates mint failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "Crates mint failed!"
          });
        } else {
          console.log('Payment successful', transactionId);
          this.setState({
            isSendingTransaction: false,
            statusString: "Crates mint successful! Please check Metamask for details and refresh when its done."
          });
        }
      }).on("confirmation", (confirmationNumber, receipt) => {
          console.log("on confirmation", confirmationNumber);
          window.location.reload(false);

      });
   
  }













  

  aprobalCrates = (contractAddress, contractABI, numPurchase) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      this.connect();
      return;
    }
    numPurchase=parseInt(numPurchase);
    if (numPurchase > 20 || numPurchase < 1) {
      return;
    }

    this.setState({
      isSendingTransaction: true,
    });

      const amount = Web3.utils.toBN('77000000000000000000000000');
      const encodedAdoptFunction = this.nftContract.methods.approve(CRATES_CONTRACT_ADDRESS,amount).encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: 0,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('approve failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "Payment failed!"
          });
        } else {
          console.log('approve successful', transactionId)
          this.setState({
            isSendingTransaction: false,
            statusString: "approve successful!."
          });
          
        }
      });

  }

  claimCreds = (contractAddress, contractABI) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      return;
    }
 

    this.setState({
      isSendingTransaction: true,
    });

    this.nftContract.methods.totalAvailable(this.state.currentAccount).call().then((unitPrice) => {
      const encodedAdoptFunction = this.nftContract.methods.claim().encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: 0,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "Transaction failed!"
          });
        } else {
          console.log('Payment successful', transactionId)
          this.setState({
            isSendingTransaction: false,
            statusString: "Claim successful! Please check Metamask for details and refresh when its done."
          });
        }
      });
    });
  }


  updateInitialStates = () => { 
    this.updateTotalAllowance();
    this.updateHasSaleStarted();
    this.updateIsAuthClaim();
  }

  updateTotalAllowance = () => {
    console.log("called totalAllowance");
    this.nftContract.methods.allowance(this.state.currentAccount,CRATES_CONTRACT_ADDRESS).call().then((totalAllowance) => {
      totalAllowance = parseInt(Web3.utils.fromWei(totalAllowance, 'ether'));
      this.setState({
        totalAllowance: totalAllowance,
      });
    });
  }

  updateHasSaleStarted = () => {
    this.nftContract.methods.saleIsActive().call().then((hasSaleStarted) => {
      this.setState({
        hasSaleStarted: hasSaleStarted
      });
    });
  }

  updateIsAuthClaim = () => {
    this.nftContract.methods.totalAvailable(this.state.currentAccount).call().then((isAuthClaim) => {
      const credsAvaliable = Web3.utils.fromWei(isAuthClaim, 'ether');
      console.log(credsAvaliable);
      this.setState({
        isAuthClaim: credsAvaliable
      });
    });
  }




  updateInput(evt){
    this.textInput={value: evt.target.value};   
  }

  render() { 
    return (
      <div>
        <div className="sticky-cta">
           <div className='metamask'> {this.state.hasSaleStarted}
               {this.state.currentAccount ? (
                       <Fab style={style} variant="extended">
                             <b>{this.state.currentAccount.substring(0, 6)}...{this.state.currentAccount.substring(this.state.currentAccount.length -4)}</b>
                       </Fab>
                 ) :
                       <Fab style={style} variant="extended" onClick={() => this.connect()}>
                           <b>Connect metamask</b>
                       </Fab>

                 }
             </div>
        </div>
        <div className="App" >
    
          <form noValidate autoComplete="off">
             
        
              {this.state.totalAllowance > 0 ? (
                  <Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleClick()}><b>Mint Supernovas</b></Button>
                 ) :
                  <div><br/>
                  <Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleClick()}><b>Mint SuperNovas</b></Button>&nbsp;
				  <TextField style={{maxWidth: "100px"}} inputProps={{ style: { color: "#fff" } }} variant="filled" onChange={this.updateInput} defaultValue={this.state.defaultValue}  margin="dense" size="small" requiered="true" type="number"/>
                  </div>
              } 
			  <br/><br/>
            
              
          </form>

        </div>
      </div>
     
    );
  }
 
}

export default ClaimButtons;