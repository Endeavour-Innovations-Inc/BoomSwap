import React, { useState } from "react";
import "./Trade.css";
import Card from "./View/components/Card/Card";
import Lcard from "./View/components/LiquidityCard/Lcard.jsx";
import CommonFooter from "../CommonComp/CommonFooter";
import CommonHeader from "../CommonComp/CommonHeader";
import LiquiditySwitch from "./View/components/LiquiditySwitch";
import ParamCard from "./View/components/ParamCard/ParamCard.jsx";
import LazyAppProvider from "../Trade/Controller/LazyAppProvider.js";

export const Trade = () => {
  const [activeView, setActiveView] = useState('swap'); // 'swap' or 'liquidity'

  return (
    <div className="converter">
      <div className="div">
        <CommonHeader />
        <LazyAppProvider>
        <div style={{ marginTop: '100px' }}>
          <LiquiditySwitch active={activeView} onToggle={setActiveView} />
        </div>
        <div className="body">
          {activeView === 'swap' ? <Card /> : <Lcard />}
        </div>
        <div className="body">
          {activeView === 'swap' ? <ParamCard /> : <div></div>}
        </div>
        </LazyAppProvider>
        <CommonFooter />
      </div>
    </div>
  );
};
