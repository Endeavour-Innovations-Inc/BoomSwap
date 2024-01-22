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
  const [shouldRenderParamCard, setShouldRenderParamCard] = useState(false);

  // Function to be called by Card to update shouldRenderParamCard
  const updateShouldRenderParamCard = (value) => {
    console.log("Updating shouldRenderParamCard to:", value);
    setShouldRenderParamCard(value);
  };

  return (
    <div className="converter">
      <div className="div">
        <CommonHeader />
        <LazyAppProvider>
          <div style={{ marginTop: '100px' }}>
            <LiquiditySwitch active={activeView} onToggle={setActiveView} />
          </div>
          <div className="body">
            {activeView === 'swap' ? <Card updateShouldRenderParamCard={updateShouldRenderParamCard} /> : <Lcard />}
          </div>
          {/* Conditionally render ParamCard based on shouldRenderParamCard state */}
          {activeView === 'swap' && shouldRenderParamCard && <ParamCard />}
        </LazyAppProvider>
        <CommonFooter />
      </div>
    </div>
  );
};
