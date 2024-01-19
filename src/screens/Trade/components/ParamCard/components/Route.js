import React from "react";
import {IoRefreshSharp} from "react-icons/io5";

// Copied from slippage tolerance 1-1
const Route = () => {
  const slipTolerance = {
    display: "flex",
    justifyContent: "space-between",
  };

  const slipStyle = {
    color: "var(--colorPurple)", // Replace with the actual color value if not defined in CSS
    fontSize: "12px",
    fontWeight: 700,
  };

  const datastyle = {
    color: "var(--colorOrangeBright)", // Replace with the actual color value if not defined in CSS
    fontWeight: 600,
  };

  return (
    <div style={slipTolerance}>
      <div style={slipStyle}>
        <span>Route</span>
      </div>
      <div style={datastyle}>
        <span>CRO - BOOM</span>
        <IoRefreshSharp/>
      </div>
    </div>
  );
};

export default Route;
