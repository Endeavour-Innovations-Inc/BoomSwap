import React from "react";
import { useAppContext } from '../../../../Controller/AppContext'; // Ensure correct path

const SlippageTolerance = () => {
  const { slippageTolerance } = useAppContext();
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
        <span>{slippageTolerance}%</span> {/* Display context value */}
      </div>
    </div>
  );
};

export default SlippageTolerance;
