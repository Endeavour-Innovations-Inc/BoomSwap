import React from "react";
import "./style.css";
import NavbarButtons from "../Home/components/NavbarButtons";
import TelegramButton from "../Home/components/TelegramButton";
import ConnectToMetamask from "../Home/components/MetamaskButton";
import LanguageSelector from "../Home/components/LangSelector";
import SwapView from "./components/SwapView";

// A recycleable component, SwapView defines the difference
export const Trade = () => {
  return (
    <div className="converter">
      <div className="div">
        <SwapView />
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="frame-3">
          <NavbarButtons /> 
          <TelegramButton />
          <div className="connect-metamask-wrapper">
            <ConnectToMetamask />
          </div>
        </div>
        <div className="overlap-5">
          <div className="frame-5">
            <LanguageSelector />
          </div>
          <div className="text-wrapper-13">© 2023 BoomFinance</div>
        </div>
      </div>
    </div>
  );
};
