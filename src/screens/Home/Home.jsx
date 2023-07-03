import React from "react";
import { Ru } from "../../components/Ru";
import { LiArrowUpRight } from "../../icons/LiArrowUpRight";
import { LinearArrowsTransferVertical } from "../../icons/LinearArrowsTransferVertical";
import "./style.css";
import ConnectToMetamask from './components/MetamaskButton';
import TelegramButton from './components/TelegramButton';
import AddToMetamask from "./components/AddToMetamaskButton";
import TokenPurchaseFrame from "./components/PurchaseTokensFrame";
import TokensSoldBar from "./components/TokensSoldBar";
import LanguageSelector from "./components/LangSelector";
import NavbarButtons from "./components/NavbarButtons";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <NavbarButtons />
            <div className="frame-2">
              <div className="group">
                <TelegramButton />
              </div>
              <div className="button">
                <ConnectToMetamask />
              </div>
            </div>
          </div>
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="frame-3">
              <h1 className="h-1">Welcome to BoomFinance ICO</h1>
              <p className="we-provide-software">
                We Provide Software Development and Staffing Services. Expand <br />
                the boundaries of your business using high-tech development services from Top 1 Dubai &amp; Miami
                Blockchain Development company.
              </p>
              <div className="button-2">
                <AddToMetamask />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="ellipse-2" />
                <img className="img" alt="Group" src="/img/group-5048.png" />
                <div className="group-wrapper">
                  <div className="group-2">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-3">
                        <img className="group-3" alt="Group" src="/img/group-4.png" />
                        <div className="div-wrapper">
                          <div className="overlap-4">
                            <img className="group-4" alt="Group" src="/img/group-3.png" />
                            <img className="group-5" alt="Group" src="/img/group-2.png" />
                            <img className="group-6" alt="Group" src="/img/group-1.png" />
                            <img className="group-7" alt="Group" src="/img/group.png" />
                            <div className="group-8">
                              <div className="overlap-group-2">
                                <img className="vector-2" alt="Vector" src="/img/vector.svg" />
                                <img className="test" alt="Test" src="/img/test-2.png" />
                                <img className="test-2" alt="Test" src="/img/test-1.png" />
                                <img className="test-3" alt="Test" src="/img/test.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="/img/vector-2.png" />
        <div className="overlap-5">
          <div className="menu">
          </div>
          <div className="frame-4">
            <LanguageSelector />
          </div>
          <div className="text-wrapper-6">© 2023 BoomFinance</div>
        </div>
        <div className="buy-now">Buy Now</div>
        <div className="frame-6">
          <div className="group-9">
            <div className="overlap-group-3">
              <div className="text-wrapper-7">Install MetaMask</div>
              <img className="img-2" alt="Mask group" src="/img/mask-group-2.png" />
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-group-3">
              <div className="text-wrapper-8">Connect your wallet</div>
              <img className="img-2" alt="Mask group" src="/img/mask-group-1.png" />
            </div>
          </div>
          <div className="group-11">
            <div className="overlap-6">
              <div className="group-9">
                <div className="overlap-group-3">
                  <p className="p">Enter the amount of BNB you want to spend.</p>
                </div>
              </div>
              <img className="img-2" alt="Mask group" src="/img/mask-group.png" />
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-6">
              <div className="group-9">
                <div className="overlap-group-3">
                  <p className="press-the-buy-now">Press the &#39;Buy Now&#39; button to purchase tokens</p>
                </div>
              </div>
              <img className="img-2" alt="Group" src="/img/group-34897.png" />
            </div>
          </div>
        </div>
        <div className="frame-7">
          <TokensSoldBar />
        </div>
        <div className="frame-wrapper">
          <TokenPurchaseFrame />
        </div>
      </div>
    </div>
  );
};
