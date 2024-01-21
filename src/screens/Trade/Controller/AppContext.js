import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [slippageTolerance, setSlippageTolerance] = useState('0.1'); // Default slippage tolerance
  const [selectedToken, setSelectedToken] = useState(null); // Default selected token

  return (
    <AppContext.Provider value={{ 
      slippageTolerance, 
      setSlippageTolerance,
      selectedToken, 
      setSelectedToken 
    }}>
      {children}
    </AppContext.Provider>
  );
};
