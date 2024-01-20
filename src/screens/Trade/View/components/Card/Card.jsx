import React from "react";
import "./Card.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineDown} from "react-icons/ai"
import { LinearArrowsTransferVertical } from "../../../../../icons/LinearArrowsTransferVertical";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { useState } from "react";
import { useWallet } from "../../../../CommonComp/WalletContext"; // Adjust the import path as needed

import SlippageTolerance from "./components/SlippageTolerance"; // Adjust the path according to your project structure
import SettingsPopup from "./components/SettingsPopup"; // Adjust the path according to your project structure
import { SelectTokenPopup } from "./components/SelectTokenPopup";
import ConfirmSwapPopup from "./components/ConfirmSwapPopup";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import PriceView from "./components/PriceView";

import LazySlippageProvider from "../../../Controller/LazySlippageProvider";

const Card = () => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [buttonPopUp2, setButtonPopUp2] = useState(false)
    const [buttonPopUp3, setButtonPopUp3] = useState(false)

    const { account, connectWallet } = useWallet(); // Use the wallet context

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleSwapOrConnect = () => {
        if (account) {
            setButtonPopUp3(true); // Open the swap popup if connected
        } else {
            connectWallet(); // Connect wallet if not connected
        }
    };

    return (
        <LazySlippageProvider>
            <div className="card">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>BoomSwap</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting
                        onClick={() => {setButtonPopUp2(true)}}
                        />
                        <IoRefreshSharp/>
                    </div>
                    {/* Settings window is defined here */}
                    <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                        <SettingsPopup />
                    </Popup>
                    {/* Token Selection Defined Here */}
                    <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                        <SelectTokenPopup />
                    </Popup>
                    {/* Swap Confirmation Defined Here */}
                    <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                        <ConfirmSwapPopup />
                    </Popup>
                </div>
                    <div className="cardHeadingSecondary">
                        <div className="secondaryText">
                            Trade tokens in an instant
                        </div>
                    </div>
                    <div className="label" onClick={() => {setButtonPopUp(true)}}>
                    <label htmlFor="inpuText">Select a currency</label>
                    <AiOutlineDown />
                </div>
                    <Input 
                    placeholder="0.0"
                    numbersOnly={true}
                    />

                    {/* Arrow Button */}
                    <span 
                    className="arrow"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={handleClick}
                    >
                    {hover 
                        ? (<><LinearArrowsTransferVertical/></>) // Two-sided arrow with one arrow pointing up and the other pointing down
                        : clicked 
                        ? <AiOutlineArrowUp />
                        : <AiOutlineArrowDown />
                    }
                    </span>

                    <div className="label" onClick={() => {setButtonPopUp(true)}}>
                    <label htmlFor="inpuText">Select a currency</label>
                    <AiOutlineDown />
                </div>
                <Input 
                    style={{ textAlign: 'left' }}
                    placeholder="0.0"
                    numbersOnly={true}
                />  
                    <PriceView />
                    <SlippageTolerance />
                    <Button 
                        name={account ? "swap" : "connect wallet"} 
                        onClick={handleSwapOrConnect} 
                    />
                </div>
        </LazySlippageProvider>
    )
}

export default Card