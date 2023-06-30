import React, { useState } from 'react';

const ConnectToMetamask = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask to use this feature!');
    }
  };

  const buttonStyle = {
    alignItems: 'center',
    backgroundColor: '#271f15',
    borderRadius: '8px',
    display: 'flex',
    gap: '6px', // Reduced gap
    justifyContent: 'center',
    padding: '8px 10px', // Reduced padding
    position: 'relative',
    width: '200px', // Reduced width
    height: '22px', // Set the height to match the token
  };

  const textStyle = {
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '24px',
    marginTop: '-1px',
    position: 'relative',
    textFillColor: 'transparent',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div style={buttonStyle} onClick={connectWallet}>
      <div style={textStyle}>
        {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect to MetaMask'}
      </div>
    </div>
  );
};

export default ConnectToMetamask;
