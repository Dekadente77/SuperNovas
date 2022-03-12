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
const NFT_CONTRACT_ADDRESS = "0x1a30C93f924dFF2D5ed41641fc04601F38accD2D";
const NFT_ABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "baseTokenURI",
				"type": "string"
			}
		],
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
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
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
				"name": "owner",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numSuperNovas",
				"type": "uint256"
			}
		],
		"name": "getSuperNovas",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "numSuperNovas",
				"type": "uint8"
			}
		],
		"name": "mintAllowList",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintFreeList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
		"inputs": [],
		"name": "pausePrivateSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pauseSale",
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
				"internalType": "uint256",
				"name": "numSuperNovas",
				"type": "uint256"
			}
		],
		"name": "reserveAirdrop",
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
				"name": "tokenId",
				"type": "uint256"
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
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
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
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			}
		],
		"name": "setAllowList",
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
				"internalType": "string",
				"name": "baseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			}
		],
		"name": "setFreeList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startPrivateSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
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
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"name": "hasPrivateSaleStarted",
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
		"name": "hasSaleStarted",
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
				"name": "owner",
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
		"name": "MAX_GIRLS",
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
		"name": "minted",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "numAllowMint",
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
				"name": "addr",
				"type": "address"
			}
		],
		"name": "numFreeMint",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
	
    position: 'relative',
    color: '#000000',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'lemon',
    boxShadow: 'none',
    borderRadius: '10px',
  
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
      numFreeMint: 0,
	  numAllowMint: 0,
      isSendingTransaction: false,
      purchaseNumber: "1",
      hasSaleStarted: false,
	  hasPrivateSaleStarted: false,
      isMainnet: true,
      statusString: null,
      defaultValue: 1,
      minted: 0,
    }
    this.textInput = {value: 1};
    this.updateInput = this.updateInput.bind(this);
  
  }


  async handleClick() {
    await this.getSuperNovas(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }

  async handleWL() {
    await this.mintAllowList(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }

  async handleFree() {
    await this.mintFreeList(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
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


  getSuperNovas = (contractAddress, contractABI, numPurchase) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      this.connect();
      return;
    }
    numPurchase=parseInt(numPurchase);
	const amount = Web3.utils.toBN('40000000000000000')*numPurchase;

    this.setState({
      isSendingTransaction: true,
    });

  
      const encodedAdoptFunction = this.nftContract.methods.getSuperNovas(numPurchase).encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: amount,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('SuperNovas mint failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint failed!"
          });
        } else {
          console.log('Payment successful', transactionId);
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint successful! Please check Metamask for details and refresh when its done."
          });
        }
      }).on("confirmation", (confirmationNumber, receipt) => {
          console.log("on confirmation", confirmationNumber);
          window.location.reload(false);

      });
   
  }






  

  mintAllowList = (contractAddress, contractABI, numPurchase) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      this.connect();
      return;
    }
    numPurchase=parseInt(numPurchase);
	const amount = Web3.utils.toBN('30000000000000000')*numPurchase;

    this.setState({
      isSendingTransaction: true,
    });

  
      const encodedAdoptFunction = this.nftContract.methods.mintAllowList(numPurchase).encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: amount,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('SuperNovas mint failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint failed!"
          });
        } else {
          console.log('Payment successful', transactionId);
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint successful! Please check Metamask for details and refresh when its done."
          });
        }
      }).on("confirmation", (confirmationNumber, receipt) => {
          console.log("on confirmation", confirmationNumber);
          window.location.reload(false);

      });
   
  }

  mintFreeList = (contractAddress, contractABI) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      this.connect();
      return;
    }


    this.setState({
      isSendingTransaction: true,
    });

  
      const encodedAdoptFunction = this.nftContract.methods.mintFreeList().encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: 0,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('SuperNovas mint failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint failed!"
          });
        } else {
          console.log('Payment successful', transactionId);
          this.setState({
            isSendingTransaction: false,
            statusString: "SuperNovas mint successful! Please check Metamask for details and refresh when its done."
          });
        }
      }).on("confirmation", (confirmationNumber, receipt) => {
          console.log("on confirmation", confirmationNumber);
          window.location.reload(false);

      });
   
  }


  updateInitialStates = () => { 
    this.updatenumFreeMint();
	this.updatenumWLMint();
    this.updateHasSaleStarted();
	this.updateHasPrivateSaleStarted();
	this.updateMinted();
  }

  updatenumWLMint = () => {
    console.log("called numAllowMint");
    this.nftContract.methods.numAllowMint(this.state.currentAccount).call().then((numAllowMint) => {
      this.setState({
        numAllowMint: numAllowMint,
      });
    });
  }

  updatenumFreeMint = () => {
    console.log("called numFreeMint");
    this.nftContract.methods.numFreeMint(this.state.currentAccount).call().then((numFreeMint) => {
      this.setState({
        numFreeMint: numFreeMint,
      });
    });
  }

  updateHasSaleStarted = () => {
    this.nftContract.methods.hasSaleStarted().call().then((hasSaleStarted) => {
      this.setState({
        hasSaleStarted: hasSaleStarted
      });
    });
  }
  
  updateHasPrivateSaleStarted = () => {
    this.nftContract.methods.hasPrivateSaleStarted().call().then((hasPrivateSaleStarted) => {
      this.setState({
        hasPrivateSaleStarted: hasPrivateSaleStarted
      });
    });
  }

  updateMinted = () => {
    this.nftContract.methods.minted().call().then((minted) => {
      this.setState({
        minted: minted
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

		<h1 style={{color: '#FFFFFF'}}><br/><br/>Mint SuperNovas</h1>
    
          <form noValidate autoComplete="off">
		       <TextField style={{maxWidth: "100px"}} inputProps={{ style: { background: "#fff", marginBottom: "20px"}, min: 0, max: 10 }} variant="filled" onChange={this.updateInput} defaultValue={this.state.defaultValue}  margin="dense" size="small" requiered="true" type="number" max="10" min="0"/>&nbsp;<br/>
                {this.state.hasSaleStarted &&
                  <Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleClick()}><b>Public Mint</b></Button>
                } 
				&nbsp;
				{this.state.hasPrivateSaleStarted && this.state.numAllowMint > 0 &&
                  <Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleWL()}><b>WL Mint</b></Button>
                } 
				{this.state.hasPrivateSaleStarted && this.state.numFreeMint > 0  &&
                   <div> <br/><br/><Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleFree()}><b>Free Mint</b></Button></div>
                } 
				
				
				 
				 
			  <br/><br/>
            
              
          </form>

		  <div className="Peque"><b style={{color: '#f17123',}}>{this.state.minted}/3333 Minted</b><br/><br/></div>

        </div>
      </div>
     
    );
  }
 
}

export default ClaimButtons;