// LazySlippageProvider.js
import React from 'react';
import { SlippageProvider } from './SlippageContext';

const LazySlippageProvider = ({ children }) => {
  return <SlippageProvider>{children}</SlippageProvider>;
};

export default LazySlippageProvider;
