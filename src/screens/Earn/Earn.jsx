import React from "react";
import "./style.css";
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader"; // Adjust the path according to your project structure

// A recycleable component, SwapView defines the difference
export const Earn = () => {
  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}
        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
