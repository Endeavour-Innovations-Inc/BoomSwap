import React from "react";
import "./style.css";
import NavbarButtons from "../Home/components/NavbarButtons";
import TelegramButton from "../Home/components/TelegramButton";
import ConnectToMetamask from "../Home/components/MetamaskButton";

export const Trade = () => {
  return (
    <div className="converter">
      <div className="div">
        <div className="overlap">
          <div className="boom-token">Boomtoken</div>
          <div className="frame">
            <div className="overlap-group">
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <div className="text-wrapper">0.0</div>
                    <div className="text-wrapper-2">Balance</div>
                    <div className="text-wrapper-3">0</div>
                  </div>
                  <div className="text-wrapper-4">Select A Currency</div>
                  <img className="chevron-down" alt="Chevron down" src="chevron-down.svg" />
                </div>
              </div>
              <div className="text-wrapper-5">0%</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <div className="select-a-currency">Select A Currency</div>
                  <div className="overlap-4">
                    <div className="text-wrapper-6">Balance</div>
                    <div className="rectangle" />
                    <div className="text-wrapper">0.0</div>
                    <div className="text-wrapper-7">0</div>
                  </div>
                  <img className="img" alt="Chevron down" src="chevron-down-2.svg" />
                </div>
              </div>
              <div className="frame-2">
                <div className="arrow-wrapper">
                  <img className="arrow" alt="Arrow" src="arrow-1.svg" />
                </div>
              </div>
              <div className="text-wrapper-8">Slippage Tolerance</div>
            </div>
          </div>
          <img className="setting" alt="Setting" src="setting-1.png" />
        </div>
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="frame-3">
          <NavbarButtons />
          <TelegramButton />
          <ConnectToMetamask />
            
        </div>
        <div className="overlap-5">
          <div className="frame-5">
            <div className="frame-6">
              <img className="vector-3" alt="Vector" src="vector-332.svg" />
            </div>
            <div className="text-wrapper-12">РУС</div>
          </div>
          <div className="text-wrapper-13">© 2023 VierTrust</div>
        </div>
      </div>
    </div>
  );
};
