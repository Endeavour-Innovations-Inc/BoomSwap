import React, { useState } from 'react';

const MConnectToMetamask = () => {
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
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1000,
    alignItems: 'center',
    backgroundColor: '#271f15',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    padding: '6px 8px',
    width: '150px',
    height: '22px',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={buttonStyle} onClick={connectWallet}>
      {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect to MetaMask'}
    </div>
  );
};

export default MConnectToMetamask;
