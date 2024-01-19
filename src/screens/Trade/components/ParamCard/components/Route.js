import React from "react";
import { IoRefreshSharp } from "react-icons/io5";

const Route = ({ marginTop = "0px", name = "Route", resultString = "CRO - BOOM" }) => {
  const slipTolerance = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: marginTop,
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
        <span>{name}</span>
      </div>
      <div style={datastyle}>
        <span>{resultString}</span>
        <IoRefreshSharp />
      </div>
    </div>
  );
};

export default Route;
