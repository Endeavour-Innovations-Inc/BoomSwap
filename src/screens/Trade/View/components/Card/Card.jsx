import React, { useState } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import { AiOutlineArrowDown, AiTwotoneSetting, AiOutlineDown } from "react-icons/ai";
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
import LazyAppProvider from "../../../Controller/LazyAppProvider";
import "./Card.css";

const Card = () => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);

    const { account, connectWallet } = useWallet();
    const { selectedToken } = useAppContext();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleSwapOrConnect = () => {
        if (account) {
            setButtonPopUp3(true);
        } else {
            connectWallet();
        }
    };

    return (
        <LazyAppProvider>
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
                <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <SelectTokenPopup />
                </Popup>
                <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                    <ConfirmSwapPopup />
                </Popup>

                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Trade tokens in an instant
                    </div>
                </div>
                <div className="label" onClick={() => setButtonPopUp(true)}>
                    {selectedToken ? (
                        <>
                            <img src={selectedToken.image} alt={selectedToken.name} style={{ width: '20px' }} />
                            <label htmlFor="inputText">{selectedToken.name}</label>
                        </>
                    ) : (
                        <label htmlFor="inputText">Select a currency</label>
                    )}
                    <AiOutlineDown />
                </div>
                <Input placeholder="0.0" numbersOnly={true} />

                <span className="arrow" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
                    {hover ? <LinearArrowsTransferVertical /> : (clicked ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />)}
                </span>

                <div className="label" onClick={() => setButtonPopUp(true)}>
                    <label htmlFor="inputText">Select a currency</label>
                    <AiOutlineDown />
                </div>
                <Input style={{ textAlign: 'left' }} placeholder="0.0" numbersOnly={true} />
                <PriceView />
                <SlippageTolerance />
                <Button name={account ? "swap" : "connect wallet"} onClick={handleSwapOrConnect} />
            </div>
        </LazyAppProvider>
    );
};

export default Card;
