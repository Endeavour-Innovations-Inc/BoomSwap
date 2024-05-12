import React, { createContext, useState, useContext, useEffect } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  const POLYGON_MAINNET_ID = '0x89'; // Network ID for Polygon Mainnet

  useEffect(() => {
    const handleChainChanged = (chainId) => {
      // Check if the current chainId is equal to the Polygon Mainnet ID
      setIsCorrectNetwork(parseInt(chainId, 16) === parseInt(POLYGON_MAINNET_ID, 16));
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
        if (parseInt(networkId, 10).toString(16) !== POLYGON_MAINNET_ID) {
          setIsCorrectNetwork(false);
          try {
            // Attempt to switch to Polygon Mainnet
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: POLYGON_MAINNET_ID }],
            });
            setIsCorrectNetwork(true);
          } catch (switchError) {
            // If the network has not been added to MetaMask, add it
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: POLYGON_MAINNET_ID,
                  rpcUrls: ['https://polygon-rpc.com/'], // Example RPC URL
                  chainName: 'Polygon Mainnet',
                  nativeCurrency: {
                    name: 'Matic',
                    symbol: 'MATIC',
                    decimals: 18,
                  },
                  blockExplorerUrls: ['https://polygonscan.com/'],
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
