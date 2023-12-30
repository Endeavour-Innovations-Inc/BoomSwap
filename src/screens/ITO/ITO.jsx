import React from "react";
import "./style.css";
import NavbarButtons from "../Home/components/NavbarButtons";
import TelegramButton from "../Home/components/TelegramButton";
import ConnectToMetamask from "../Home/components/MetamaskButton";
import SlideSwitch from "./components/SlideSwitch"; // Make sure this path is correct
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure

export const ITO = () => {
  return (
    <div className="converter">
      <div className="div">
        <div className="ito-header">
          <h1>Initial Token Offering</h1>
          <p>Join the Latest Project Launches</p>
        </div>

        <SlideSwitch />

        <div className="content-box">
          {/* Content of the rectangle goes here */}
        </div>

        <div className="frame-3">
          <NavbarButtons /> 
          <TelegramButton />
          <div className="connect-metamask-wrapper">
            <ConnectToMetamask />
          </div>
        </div>

        {/* Footer */}
        <CommonFooter />
      </div>
    </div>
  );
};
