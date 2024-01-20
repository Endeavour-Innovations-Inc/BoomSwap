import React from 'react';
import { useWallet } from '../../CommonComp/WalletContext'; // Adjust the import path as needed

const ConnectToMetamask = () => {
  const { account, connectWallet, isCorrectNetwork } = useWallet(); // Destructure isCorrectNetwork

  const buttonStyle = {
    alignItems: 'center',
    backgroundColor: '#271f15',
    borderRadius: '8px',
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    padding: '8px 10px',
    position: 'relative',
    width: '200px',
    height: '22px',
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
        {!account && 'Connect to MetaMask'}
        {account && isCorrectNetwork && `Connected: ${account.substring(0, 6)}...`}
        {account && !isCorrectNetwork && 'Wrong Network'}
      </div>
    </div>
  );
};

export default ConnectToMetamask;
