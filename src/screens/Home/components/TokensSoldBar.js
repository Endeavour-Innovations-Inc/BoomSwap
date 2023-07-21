import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const TokensSoldBar = () => {
  const [tokensSold, setTokensSold] = useState(0);
  const [tokensForSale, setTokensForSale] = useState(0);
  const [tokensForSaleLeft, setTokensForSaleLeft] = useState(0);
  const [error, setError] = useState(null);

  const contractAddress = '0x10C7B45C6052E52061Ed50b042d30726668a28F0'; // Replace with your contract address
  const ABI = [{"inputs":[{"internalType":"contract IERC20Burnable","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approveAndLoad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"firstWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"formLPPairs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBNBSpentOnTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokensForSaleLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokensLoadedForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loadTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loaded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"salesStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secondWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20Burnable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBNBSpent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.enable();
  
          // We don't know window.ethereum exists until after it's injected into window, so we won't reference window.ethereum until useEffect has run
          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(ABI, contractAddress);
          const tokensSold = await contract.methods.getTokensSold().call();
          const tokensForSale = await contract.methods.getTotalTokensForSale().call();
          const tokensForSaleLeft = await contract.methods.getTokensForSaleLeft().call();
  
          console.log("Tokens Sold before conversion: ", tokensSold);
          console.log("Tokens For Sale before conversion: ", tokensForSale);
          console.log("Tokens For Sale Left before conversion: ", tokensForSaleLeft);
  
          setTokensSold(tokensSold.toString());
          setTokensForSale(tokensForSale.toString());
          setTokensForSaleLeft(tokensForSaleLeft.toString());
        } catch (error) {
          console.error("Error loading blockchain data: ", error);
          // handle error here
        }
      } else {
        console.log('MetaMask not found. Please install it from https://metamask.io/download.html');
        // handle lack of Metamask installation here
      }
    }
  
    loadBlockchainData();
  }, []);  

  const percentageSold = (tokensSold / tokensForSale) * 100;

  if (error) {
    return <div>{error}</div>
  }

  const frame7Style = {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    width: 'fit-content',
  };

  const rectangleWrapperStyle = {
    backgroundColor: '#dedede',
    borderRadius: '99px',
    height: '4px',
    minWidth: '1291px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
  };

  const rectangleStyle = {
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    borderRadius: '99px',
    height: '4px',
    width: `${percentageSold}%`,
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const textWrapper9Style = {
    color: '#272624',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '28px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '28px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '0px', // Adjusted position
    left: '0', // Align to the left
  };

  const textWrapper10Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '16px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '10px', // Adjusted position
    right: '0', // Align to the right
  };

  return (
    <div style={frame7Style}>
      <div style={rectangleWrapperStyle}>
        <div style={rectangleStyle} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '1291px' }}>
        <div style={textWrapper9Style}>Tokens Sold</div>
        <div style={textWrapper10Style}>{`${tokensSold.toLocaleString()} / ${tokensForSale.toLocaleString()}`}</div>
      </div>
    </div>
  );
};

export default TokensSoldBar;
