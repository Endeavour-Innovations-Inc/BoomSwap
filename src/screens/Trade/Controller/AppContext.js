import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [slippageTolerance, setSlippageTolerance] = useState('0.1'); // Default slippage tolerance
  const [selectedToken, setSelectedToken] = useState(null); // Default selected token

  const handleSetSelectedToken = (tokenData) => {
    console.log('Selected Token in AppProvider:', tokenData); // Add this line
    setSelectedToken(tokenData);
  };

  return (
    <AppContext.Provider value={{ 
      slippageTolerance, 
      setSlippageTolerance,
      selectedToken, 
      setSelectedToken: handleSetSelectedToken
    }}>
      {children}
    </AppContext.Provider>
  );
};
