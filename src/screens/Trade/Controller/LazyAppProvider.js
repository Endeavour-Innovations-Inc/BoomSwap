import React from 'react';
import { AppProvider } from './AppContext';

const LazyAppProvider = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default LazyAppProvider;
