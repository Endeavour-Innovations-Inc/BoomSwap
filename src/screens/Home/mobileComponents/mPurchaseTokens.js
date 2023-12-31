import React, { useState, useEffect } from 'react';
import { LiArrowUpRight } from "../../../icons/LiArrowUpRight";
import { LinearArrowsTransferVertical } from "../../../icons/LinearArrowsTransferVertical";
import { ethers } from 'ethers';
import { globalTokenSold, setGlobalTokenSold } from './mSharedData';

const MTokenPurchaseFrame = () => {
  const [bnbAmount, setBnbAmount] = useState('');
  const [tokenPrice, setTokenPrice] = useState('');
  const [tokenQuantity, setTokenQuantity] = useState('');
  const [contract, setContract] = useState(null);
  const tokenPriceInDollars = 0.01; // needs to be custom and to be retrieved from the smart contract
  const [tokenContract, setTokenContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [tokensSold, setTokensSold] = useState(null);
  const [tokensForSale, setTokensForSale] = useState(null);
  const [tokensForSaleLeft, setTokensForSaleLeft] = useState(null);

  const tokenContractAddress = '0x06D5e700D749D3503a76A66c49Aa1671ca8D1688'; // Replace with your token contract address
  const contractAddress = '0xbe80C7dde09E5B93506831795AB023B8dE72Af87'; // Replace with your contract address
  
  const ABI = [{"inputs":[{"internalType":"contract IERC20Burnable","name":"_token","type":"address"},{"internalType":"contract IPancakeSwapV2Router","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approveAndLoad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"firstWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"formLPPairs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"loadTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loaded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IPancakeSwapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"salesStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secondWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"thirdWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20Burnable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

  const T_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log(ethers);  // add this line
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, ABI, signer);
          const tokenContract = new ethers.Contract(tokenContractAddress, T_ABI, signer);

          setContract(contract);
          setTokenContract(tokenContract);
          setProvider(provider);
          setSigner(signer);
        } catch (error) {
          console.error("Error connecting wallet: ", error);
        }
      } else {
        console.log('Ethereum compatible browser not found. Please install MetaMask or similar.');
      }
    }

    connectWallet();
  }, []);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Initialize provider
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          // Initialize signer
          const signer = provider.getSigner();

          // Initialize contract
          const contract = new ethers.Contract(contractAddress, ABI, signer);

          // Initialize token contract
          const tokenContract = new ethers.Contract(tokenContractAddress, T_ABI, signer); 

          // Set state
          setContract(contract);
          setTokenContract(tokenContract);
          setProvider(provider);
          setSigner(signer);

        } catch (error) {
          console.error("Error loading blockchain data: ", error);
        }
      } else {
        console.log('MetaMask not found. Please install it from https://metamask.io/download.html');
      }
    }

    loadBlockchainData();
  }, []);
  
  useEffect(() => {
    if (bnbAmount) {
      setTokenQuantity(bnbAmount * 100000); // If 0.01 BNB is 1000 tokens, then 1 BNB is 100000 tokens
    } else {
      setTokenQuantity('');
    }
  }, [bnbAmount]);
  
  useEffect(() => {
    if (tokenQuantity) {
      setBnbAmount(tokenQuantity / 100000); // If 1000 tokens is 0.01 BNB, then 1 token is 0.01/1000 = 0.00001 BNB
    } else {
      setBnbAmount('');
    }
  }, [tokenQuantity]); 

  const purchaseTokens = async () => {
    try {  
      // Convert bnbAmount to Wei 
      const amountInWei = ethers.utils.parseEther(bnbAmount.toString());

      // Get the current sales stage from the contract
      const salesStage = await contract.salesStage();

      let rate; 
      switch(salesStage.toNumber()) {
        case 1: 
          rate = ethers.utils.parseEther('1000').div(ethers.utils.parseEther('0.01')); 
          break;
        case 2: 
          rate = ethers.utils.parseEther('1000').div(ethers.utils.parseEther('0.02')); 
          break;
        case 3: 
          rate = ethers.utils.parseEther('1000').div(ethers.utils.parseEther('0.04')); 
          break;
        default:
          throw new Error("Invalid sales stage");
      }

      const calculatedTokenAmount = amountInWei.mul(rate);
      setGlobalTokenSold(ethers.utils.formatEther(calculatedTokenAmount)); // Update the global state variable
      console.log("Value after setting: ", globalTokenSold);

      // Now we can call the buyTokens function
      const buyTx = await contract.buyTokens({
        value: amountInWei
      });
  
      const buyReceipt = await buyTx.wait();
      console.log('Purchase Transaction Receipt: ', buyReceipt);
  
      console.log('Tokens purchased!');
    } catch (error) {
      console.error('Error purchasing tokens: ', error);
    }
  };

  // Below are .css elements

  const frameWrapperStyle = {
    backgroundColor: '#e6e6e6',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'center', // Center align items vertically
    padding: '20px', // Add some padding around the content
    width: '330px', // Set the width to match the frame
    height: '435px', // Set the height to match the frame
  };

  const frame8Style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items horizontally
    gap: '12px',
    width: '100%', // Take the full width of the parent container
  };

  const group14Style = {
    height: '50px',
    minWidth: '201px',
    position: 'relative',
  };

  const textWrapper11Style = {
    color: '#272624',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '28px',
    fontWeight: '500',
    left: '32px',
    letterSpacing: '0',
    lineHeight: '28px',
    position: 'absolute',
    top: '0',
    whiteSpace: 'nowrap',
  };

  const textWrapper12Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
    left: '0',
    letterSpacing: '0',
    lineHeight: '16px',
    position: 'absolute',
    top: '34px',
    whiteSpace: 'nowrap',
  };

  const frame9Style = {
    alignItems: 'center',
    border: '1px solid #d0d0d0',
    borderRadius: '6px',
    display: 'flex',
    padding: '0px',
    position: 'relative',
    width: '310px', // Updated to be close to the frame width
    height: '50px',
    boxSizing: 'border-box',
    marginBottom: '10px', // Add some margin at the bottom
  };

  const textWrapper14Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '24px',
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  };

  const button3Style = {
    alignItems: 'flex-end',
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    borderRadius: '8px',
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    padding: '12px 0px',
    position: 'relative',
    width: '310px', // Updated to be close to the frame width
    cursor: 'pointer',
  };

  const textWrapper3Style = {
    color: '#ffffff',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'relative',
    width: 'fit-content',
  };

  const inputStyle = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '24px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: '100%', // Set width to 100% of the container
    height: '100%', // Set height to 100% of the container
    borderRadius: '6px', // Rounded corners
    border: 'none', // Remove the border
    padding: '10px', // Adjust padding
    boxSizing: 'border-box',
  };

  return (
    <div style={frameWrapperStyle}>
      <div style={frame8Style}>
        <div style={group14Style}>
          <div style={textWrapper11Style}>BoomToken</div>
          <p style={textWrapper12Style}>Purchase tokens in an instant</p>
        </div>
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Amount BNB"
            value={bnbAmount}
            onChange={(e) => {
              let value = e.target.value;
              if (value === '0') {
                value = '0.1';
              }
              if (!isNaN(value) && Number(value) >= 0) {
                setBnbAmount(value);
              }
            }}              
          />
        </div>
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Token Price"
            value={`$${tokenPriceInDollars}`}
            readOnly
          />
        </div>
        <LinearArrowsTransferVertical className="icon-instance-node" />
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Token Quantity For Purchase"
            value={tokenQuantity}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '') {
                setTokenQuantity('');
              } else if (!isNaN(value) && Number(value) > 0 && Number.isInteger(Number(value))) {
                setTokenQuantity(value);
              }
            }}   
          />
        </div>
        <div style={button3Style} onClick={purchaseTokens}>
            <div style={textWrapper3Style}>Purchase Tokens</div>
            <LiArrowUpRight className="icon-instance-node" color="white" />
        </div>
      </div>
    </div>
  );
};

export default MTokenPurchaseFrame;
