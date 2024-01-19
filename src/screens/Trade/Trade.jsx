import React, { useState } from "react";
import "./Trade.css";
import Card from "./components/Card/Card";
import Lcard from "./components/LiquidityCard/Lcard.jsx";
import CommonFooter from "../CommonComp/CommonFooter";
import CommonHeader from "../CommonComp/CommonHeader";
import LiquiditySwitch from "./components/LiquiditySwitch";
import ParamCard from "./components/ParamCard/ParamCard.jsx";

export const Trade = () => {
  const [activeView, setActiveView] = useState('swap'); // 'swap' or 'liquidity'

  return (
    <div className="converter">
      <div className="div">
        <CommonHeader />
        <div style={{ marginTop: '100px' }}>
          <LiquiditySwitch active={activeView} onToggle={setActiveView} />
        </div>
        <div className="body">
          {activeView === 'swap' ? <Card /> : <Lcard />}
        </div>
        <div className="body">
          {activeView === 'swap' ? <ParamCard /> : <div></div>}
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};
