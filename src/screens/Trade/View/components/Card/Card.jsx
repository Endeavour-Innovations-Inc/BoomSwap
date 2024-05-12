import React, { useState, useEffect } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import { AiOutlineArrowDown, AiTwotoneSetting, AiOutlineDown, AiOutlineArrowUp } from "react-icons/ai";
import { LinearArrowsTransferVertical } from "../../../../../icons/LinearArrowsTransferVertical";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { useWallet } from "../../../../CommonComp/WalletContext";
import SlippageTolerance from "./components/SlippageTolerance";
import SettingsPopup from "./components/SettingsPopup";
import { SelectTokenPopup } from "./components/SelectTokenPopup";
import ConfirmSwapPopup from "./components/ConfirmSwapPopup";
import PriceView from "./components/PriceView";
import { useAppContext } from '../../../Controller/AppContext';
import "./Card.css";

const Card = ({ updateShouldRenderParamCard }) => {
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

    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
          // Example fetching logic
          // This should be replaced with your actual API call or smart contract interaction
          // const price = await someAPI.getPrice(selectedTokenA.id, selectedTokenB.id);
          setPrice("10"); // Example price, replace with actual data fetching logic
        };
    
        if (selectedTokenA && selectedTokenB) {
          fetchPrice();
        }
      }, [selectedTokenA, selectedTokenB]);

    return (
        <>
            <div className="card">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>BoomSwap</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting onClick={() => setButtonPopUp2(true)} />
                        <IoRefreshSharp />
                    </div>
                </div>
                <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                    <SettingsPopup />
                </Popup>
                <Popup trigger={buttonPopUpA} setTrigger={setButtonPopUpA}>
                    <SelectTokenPopup isTokenA={true} />
                </Popup>
                <Popup trigger={buttonPopUpB} setTrigger={setButtonPopUpB}>
                    <SelectTokenPopup isTokenA={false} />
                </Popup>
                <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                    <ConfirmSwapPopup />
                </Popup>

                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Trade tokens in an instant
                    </div>
                </div>
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
                {shouldRenderPriceView && <PriceView tokenA={selectedTokenA} tokenB={selectedTokenB} price={price} />}
                <SlippageTolerance />
                <Button name={account ? "swap" : "connect wallet"} onClick={handleSwapOrConnect} />
            </div>
        </>
    );
};

export default Card;
