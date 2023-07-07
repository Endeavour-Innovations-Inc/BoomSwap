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
    left: '180px', // Position it to the right of the .group element
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
    fontSize: '12px', // Add this line to make the font smaller
    fontFamily: '"TT Firs Neue-Regular", Helvetica', // Add this line to change the font-family
  };

  return (
    <div style={buttonStyle} onClick={connectWallet}>
      {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect Wallet'}
    </div>
  );
};

export default MConnectToMetamask;
