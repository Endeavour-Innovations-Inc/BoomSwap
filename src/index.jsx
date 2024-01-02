import React from "react";
import ReactDOMClient from "react-dom/client";
import { Home } from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Trade } from "./screens/Trade/Trade";
import { Earn } from "./screens/Earn/Earn";
import { ITO } from "./screens/ITO/ITO";
import { WalletProvider } from "./screens/CommonComp/WalletContext.js";
import './index.css';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render( 
  <WalletProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/ito" element={<ITO />} />
      </Routes>
    </Router>
  </WalletProvider>
);