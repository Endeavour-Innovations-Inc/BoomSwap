import React from "react";
import "./style.css";
import SlideSwitch from "./components/SlideSwitch"; // Make sure this path is correct
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader";
import ITOcard from "./components/Card/ITOcard";


export const ITO = () => {
  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}
        <h1 className="ito-heading">Initial Token Offering</h1> {/* Heading with white text */}
        <SlideSwitch />

        <div className="body">
          <ITOcard />
        </div>

        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
