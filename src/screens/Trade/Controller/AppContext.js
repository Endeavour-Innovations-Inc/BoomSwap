import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [slippageTolerance, setSlippageTolerance] = useState('0.1');
  const [selectedTokenA, setSelectedTokenA] = useState(null);
  const [selectedTokenB, setSelectedTokenB] = useState(null);

  return (
    <AppContext.Provider value={{ 
      slippageTolerance, 
      setSlippageTolerance,
      selectedTokenA, 
      setSelectedTokenA,
      selectedTokenB, 
      setSelectedTokenB
    }}>
      {children}
    </AppContext.Provider>
  );
};
