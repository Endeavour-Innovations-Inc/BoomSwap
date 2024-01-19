import React from "react";
import {IoRefreshSharp} from "react-icons/io5";

// Copied from slippage tolerance 1-1
const PriceView = () => {
  const slipToleranceStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const slipTextStyle = {
    color: "var(--colorPurple)", // Replace with the actual color value if not defined in CSS
    fontSize: "12px",
    fontWeight: 700,
  };

  const slipPercentStyle = {
    color: "var(--colorOrangeBright)", // Replace with the actual color value if not defined in CSS
    fontWeight: 800,
  };

  return (
    <div style={slipToleranceStyle}>
      <div style={slipTextStyle}>
        <span>Price</span>
      </div>
      <div style={slipPercentStyle}>
        <span>x Token1 per Token2 </span>
        <IoRefreshSharp/>
      </div>
    </div>
  );
};

export default PriceView;
