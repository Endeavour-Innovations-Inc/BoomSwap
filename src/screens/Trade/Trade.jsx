import React from "react";
import "./style.css";
import NavbarButtons from "../Home/components/NavbarButtons";
import TelegramButton from "../Home/components/TelegramButton";
import ConnectToMetamask from "../Home/components/MetamaskButton";
import LanguageSelector from "../Home/components/LangSelector";
// import SwapView from "./components/SwapView";
import Card from "./components/Card/Card"; // trade view component
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader"; // Adjust the path according to your project structure

// A recycleable component, SwapView defines the difference
export const Trade = () => {

  return (
    <div className="converter">
      <div className="div">
        <div className="body">
            <Card />
        </div>
        <CommonHeader /> {/* Footer */}
        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
