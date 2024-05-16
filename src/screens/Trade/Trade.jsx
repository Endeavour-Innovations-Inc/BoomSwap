import React, { useState } from "react";
import "./Trade.css";
import Card from "./View/components/Card/Card";
import Lcard from "./View/components/LiquidityCard/Lcard.jsx";
import AddLiquidity from "./View/components/AddLiquidity/AddLiquidity";
import CommonFooter from "../CommonComp/CommonFooter";
import CommonHeader from "../CommonComp/CommonHeader";
import LiquiditySwitch from "./View/components/LiquiditySwitch";
import ParamCard from "./View/components/ParamCard/ParamCard.jsx";
import LazyAppProvider from "../Trade/Controller/LazyAppProvider.js";

export const Trade = () => {
  const [activeView, setActiveView] = useState('swap'); // 'swap', 'liquidity', or 'addLiquidity'
  const [shouldRenderParamCard, setShouldRenderParamCard] = useState(false);
  const [swapDetails, setSwapDetails] = useState({
    minimumReceived: "",
    priceImpact: "",
    liquidityProviderFee: "",
    route: ""
  });

  const updateShouldRenderParamCard = (value) => {
    console.log("Updating shouldRenderParamCard to:", value);
    setShouldRenderParamCard(value);
  };

  const handleSwapDetailsUpdate = (details) => {
    setSwapDetails(details);
  };

  const handleLiquidityViewChange = (view) => {
    setActiveView(view);
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
            {activeView === 'swap' ? (
              <Card 
                updateShouldRenderParamCard={updateShouldRenderParamCard}
                updateSwapDetails={setSwapDetails}
              />
            ) : activeView === 'liquidity' ? (
              <Lcard 
                updateShouldRenderParamCard={updateShouldRenderParamCard}
                onAddLiquidity={() => handleLiquidityViewChange('addLiquidity')}
              />
            ) : (
              <AddLiquidity 
                updateShouldRenderParamCard={updateShouldRenderParamCard}
              />
            )}
          </div>
          {activeView === 'swap' && shouldRenderParamCard && (
            <ParamCard swapDetails={swapDetails} />
          )}
        </LazyAppProvider>
        <CommonFooter />
      </div>
    </div>
  );
};
