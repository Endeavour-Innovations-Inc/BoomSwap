import React, { createContext, useState, useContext, useEffect } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  const MUMBAI_NETWORK_ID = '0x13881'; // Network ID for Mumbai Testnet

  useEffect(() => {
    const handleChainChanged = (chainId) => {
      setIsCorrectNetwork(parseInt(chainId, 16) === parseInt(MUMBAI_NETWORK_ID, 16));
    };

    if (window.ethereum) {
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const networkId = await window.ethereum.request({ method: 'net_version' });
        if (parseInt(networkId, 10).toString(16) !== MUMBAI_NETWORK_ID) {
          setIsCorrectNetwork(false);
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: MUMBAI_NETWORK_ID }],
            });
            setIsCorrectNetwork(true);
          } catch (switchError) {
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: MUMBAI_NETWORK_ID,
                  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
                  // Add other required parameters like chainName, nativeCurrency, etc.
                }],
              });
              setIsCorrectNetwork(true);
            } else {
              console.error(switchError);
              setIsCorrectNetwork(false);
            }
          }
        } else {
          setIsCorrectNetwork(true);
        }

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
        setIsCorrectNetwork(false);
      }
    } else {
      alert('Please install MetaMask to use this feature!');
      setIsCorrectNetwork(false);
    }
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet, isCorrectNetwork }}>
      {children}
    </WalletContext.Provider>
  );
};
