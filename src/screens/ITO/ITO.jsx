import React from "react";
import "./style.css";
// import SlideSwitch from "./components/SlideSwitch"; // Make sure this path is correct
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader";

export const ITO = () => {
  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}
        <h1 className="ito-heading">Initial Token Offering</h1> {/* Heading with white text */}
        <SlideSwitch />

        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
