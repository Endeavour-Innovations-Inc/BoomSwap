import React, { useState } from 'react';

const MConnectToMetamask = () => {
  const [account, setAccount] = useState('');

  const isMobile = window.innerWidth <= 768;

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
    gap: isMobile ? '4px' : '6px',
    justifyContent: 'center',
    padding: isMobile ? '6px 8px' : '8px 10px',
    position: 'relative',
    width: isMobile ? '150px' : '200px',
    height: '22px',
  };

  const textStyle = {
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: isMobile ? '12px' : '15px',
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

export default MConnectToMetamask;
