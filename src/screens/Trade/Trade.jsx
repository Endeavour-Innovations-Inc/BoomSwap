import React from "react";
import { Ic24Refresh } from "./Ic24Refresh";
import { Ru } from "./Ru";
import "./style.css";

export const Converter = () => {
  return (
    <div className="converter">
      <div className="div">
        <div className="overlap">
          <img className="base" alt="Base" src="base.png" />
          <div className="button">
            <img className="connect-wallet" alt="Connect wallet" src="connect-wallet.png" />
          </div>
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
          <Ic24Refresh className="refresh" />
        </div>
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="frame-3">
          <div className="navbar">
            <div className="text-wrapper-9">Trade</div>
            <div className="text-wrapper-9">Earn</div>
            <div className="text-wrapper-9">Dashboard</div>
            <div className="text-wrapper-9">ITO</div>
          </div>
          <div className="frame-4">
            <div className="group">
              <img className="vector-2" alt="Vector" src="image.svg" />
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-10">Connect to MetaMask</div>
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <div className="menu">
            <div className="text-wrapper-11">Trade</div>
            <div className="text-wrapper-9">Earn</div>
            <div className="text-wrapper-9">Dashboard</div>
            <div className="text-wrapper-9">ITO</div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <Ru RU="RU-2.svg" className="RU-instance" />
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
