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
import RouterABI from './components/RouterABI.json';
import Web3 from 'web3';

const Card = ({ updateShouldRenderParamCard }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUpA, setButtonPopUpA] = useState(false);
    const [buttonPopUpB, setButtonPopUpB] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);
    const [price, setPrice] = useState("Fetching price...")

    const {
        selectedTokenA, setSelectedTokenA,
        selectedTokenB, setSelectedTokenB,
    } = useAppContext();

    const { account, connectWallet } = useWallet();

    const [inputValueA, setInputValueA] = useState('');
    const [inputValueB, setInputValueB] = useState('');

    // Web3 and Contract Setup
    const web3 = new Web3(window.ethereum); // Assuming the user has MetaMask
    const router = new web3.eth.Contract(RouterABI, '0x0D2AE4BFb4Fd2F6c48B65f900c7550BB49909f2B'); // Router address for Uniswap V2 on Polygon

    // Fetch tokenB amount based on tokenA input
    const fetchTokenOutput = async (inputAmount) => {
        if (!selectedTokenA || !selectedTokenB || !inputAmount) return;

        try {
            const amountsOut = await router.methods.getAmountsOut(
                web3.utils.toWei(inputAmount.toString(), 'ether'), // Convert token amount to Wei
                [selectedTokenA.address, selectedTokenB.address]
            ).call();

            const outputAmount = web3.utils.fromWei(amountsOut[1], 'ether'); // Convert Wei back to token amount
            setInputValueB(outputAmount);
        } catch (error) {
            console.error('Error fetching output amount:', error);
            setInputValueB('0'); // Reset or handle errors appropriately
        }
    };

    useEffect(() => {
        fetchTokenOutput(inputValueA);
    }, [inputValueA, selectedTokenA, selectedTokenB]);

    const handleClick = () => {
        setClicked(!clicked);
        const tempToken = selectedTokenA;
        setSelectedTokenA(selectedTokenB);
        setSelectedTokenB(tempToken);

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

    const shouldRenderPriceView = selectedTokenA && selectedTokenB;

    useEffect(() => {
        const shouldRender = selectedTokenA && selectedTokenB && (inputValueA || inputValueB);
        updateShouldRenderParamCard(shouldRender);
    }, [selectedTokenA, selectedTokenB, inputValueA, inputValueB, updateShouldRenderParamCard]);

    const togglePopupA = () => setButtonPopUpA(!buttonPopUpA);
    const togglePopupB = () => setButtonPopUpB(!buttonPopUpB);
    const togglePopupSettings = () => setButtonPopUp2(!buttonPopUp2);
    const togglePopupConfirm = () => setButtonPopUp3(!buttonPopUp3);

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
                    <SelectTokenPopup isTokenA={true} closePopup={togglePopupA} />
                </Popup>
                <Popup trigger={buttonPopUpB} setTrigger={setButtonPopUpB}>
                    <SelectTokenPopup isTokenA={false} closePopup={togglePopupB} />
                </Popup>
                <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                    <ConfirmSwapPopup 
                        tokenA={selectedTokenA} 
                        tokenB={selectedTokenB} 
                        inputValueA={inputValueA} 
                        inputValueB={inputValueB}
                    />
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
