import React, { createContext, useState, useContext } from 'react';

const SlippageContext = createContext();

export const useSlippage = () => useContext(SlippageContext);

export const SlippageProvider = ({ children }) => {
  const [slippageTolerance, setSlippageTolerance] = useState('0.5'); // Default value

  return (
    <SlippageContext.Provider value={{ slippageTolerance, setSlippageTolerance }}>
      {children}
    </SlippageContext.Provider>
  );
};
