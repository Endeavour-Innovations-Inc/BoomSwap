import React from "react";
import "./style.css";
import SlideSwitch from "./components/SlideSwitch"; // Make sure this path is correct
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader";

export const ITO = () => {
  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}
        <div className="ito-header">
          <h1>Initial Token Offering</h1>
          <p>Join the Latest Project Launches</p>
        </div>

        <SlideSwitch />

        <div className="content-box">
          {/* Content of the rectangle goes here */}
        </div>

        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
