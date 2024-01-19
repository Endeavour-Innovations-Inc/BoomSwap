import React from "react";

const SlippageTolerance = () => {
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
        <span>Slippage Tolerance</span>
      </div>
      <div style={slipPercentStyle}>
        <span>0.5%</span>
      </div>
    </div>
  );
};

export default SlippageTolerance;
