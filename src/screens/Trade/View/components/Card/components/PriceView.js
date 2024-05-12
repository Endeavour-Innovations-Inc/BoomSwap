import React from "react";
import { IoRefreshSharp } from "react-icons/io5";

const PriceView = ({ tokenA, tokenB, price }) => {
  const slipToleranceStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const slipTextStyle = {
    color: "var(--colorPurple)",
    fontSize: "12px",
    fontWeight: 700,
  };

  const slipPercentStyle = {
    color: "var(--colorOrangeBright)",
    fontWeight: 800,
  };

  return (
    <div style={slipToleranceStyle}>
      <div style={slipTextStyle}>
        <span>Price</span>
      </div>
      <div style={slipPercentStyle}>
        <span>{price ? `${price} ${tokenA.name} per ${tokenB.name}` : "Fetching price..."}</span>
        <IoRefreshSharp />
      </div>
    </div>
  );
};

export default PriceView;
