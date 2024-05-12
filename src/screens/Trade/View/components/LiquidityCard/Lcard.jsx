import React, { useState, useEffect } from "react";
import "./Lcard.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineQuestionCircle, AiOutlineDown, AiOutlineArrowUp} from "react-icons/ai"
import { LinearArrowsTransferVertical } from "../../../../../icons/LinearArrowsTransferVertical";

import Popup from "../Popup/Popup";
import { useState } from "react";
import SettingsPopup from "../Card/components/SettingsPopup"; // Adjust the path according to your project structure
import { useAppContext } from '../../../Controller/AppContext';
import Input from "../Input/Input";
import { useWallet } from "../../../../CommonComp/WalletContext";
import SlippageTolerance from "../Card/components/SlippageTolerance";
import Button from "../Button/Button";


const Lcard = ({ updateShouldRenderParamCard }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUpA, setButtonPopUpA] = useState(false);
    const [buttonPopUpB, setButtonPopUpB] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);

    const {
        selectedTokenA, setSelectedTokenA,
        selectedTokenB, setSelectedTokenB,
    } = useAppContext();

    const { account, connectWallet } = useWallet();

    const handleClick = () => {
        setClicked(!clicked);

        // Swap the tokens
        const tempToken = selectedTokenA;
        setSelectedTokenA(selectedTokenB);
        setSelectedTokenB(tempToken);

        // Swap the input values
        const tempValue = inputValueA;
        setInputValueA(inputValueB);
        setInputValueB(tempValue);
    };

    const handleSwapOrConnect = () => {
        if (account) {
            setButtonPopUp3(true);
        } else {
            connectWallet();
        }
    };

    // Determine if PriceView should be rendered
    const shouldRenderPriceView = selectedTokenA && selectedTokenB;

    const [inputValueA, setInputValueA] = useState(''); // State for the first input field
    const [inputValueB, setInputValueB] = useState(''); // State for the second input field

    // Update whether ParamCard should be rendered
    useEffect(() => {
        const shouldRender = selectedTokenA && selectedTokenB && (inputValueA || inputValueB);
        console.log({ selectedTokenA, selectedTokenB, inputValueA, inputValueB, shouldRender });
        updateShouldRenderParamCard(shouldRender);
    }, [selectedTokenA, selectedTokenB, inputValueA, inputValueB, updateShouldRenderParamCard]);    

    console.log("Selected Tokens in Card:", selectedTokenA, selectedTokenB);

    return (
        <>
        <div className="lcard">
            <div className="cardHeadingPrimary">
                        <div className="Primary1">
                            <h2>Your Liquidity</h2>
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
                        </div>
                        <div className="cardHeadingSecondary">
                            <div className="secondaryText">
                                Remove Liquidity to receive tokens back
                            </div>
                        </div>
                        {/* Insert Liquidity components below */}
                        <div className="label" onClick={() => setButtonPopUpA(true)}>
                    {selectedTokenA ? (
                        <>
                            <img src={selectedTokenA.image} alt={selectedTokenA.name} style={{ width: '20px' }} />
                            <label htmlFor="inputText">{selectedTokenA.name}</label>
                        </>
                    ) : (
                        <label htmlFor="inputText">Select a currency</label>
                    )}
                    <AiOutlineDown />
                </div>
                <Input 
                  style={{ textAlign: 'left' }} 
                  placeholder="0.0" 
                  numbersOnly={true} 
                  value={inputValueA}
                  onChange={(e) => setInputValueA(e.target.value)} 
                />

                <span className="arrow" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
                    {hover ? <LinearArrowsTransferVertical /> : (clicked ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />)}
                </span>

                <div className="label" onClick={() => setButtonPopUpB(true)}>
                    {selectedTokenB ? (
                        <>
                            <img src={selectedTokenB.image} alt={selectedTokenB.name} style={{ width: '20px' }} />
                            <label htmlFor="inputText">{selectedTokenB.name}</label>
                        </>
                    ) : (
                        <label htmlFor="inputText">Select a currency</label>
                    )}
                    <AiOutlineDown />
                </div>
                <Input 
                  style={{ textAlign: 'left' }} 
                  placeholder="0.0" 
                  numbersOnly={true} 
                  value={inputValueB}
                  onChange={(e) => setInputValueB(e.target.value)} 
                />
                {shouldRenderPriceView && <PriceView />}
                <SlippageTolerance />
                <Button name={account ? "swap" : "connect wallet"} onClick={handleSwapOrConnect} />
        </div>
        </>
    )
}

export default Lcard