import React from "react";
import "./style.css";
import Card from "./components/Card/Card"; // trade view component
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader"; // Adjust the path according to your project structure
import LiquiditySwitch from "./components/LiquiditySwitch";

// A recycleable component, SwapView defines the difference
export const Trade = () => {

  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}
        <div style={{ marginTop: '100px' }}>
          <LiquiditySwitch />
        </div>
        <div className="body">
            <Card />
        </div>
        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
