import React, { useState, useEffect } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import { AiOutlineArrowDown, AiTwotoneSetting, AiOutlineDown, AiOutlineArrowUp } from "react-icons/ai";
import { LinearArrowsTransferVertical } from "../../../../../icons/LinearArrowsTransferVertical";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { useWallet } from "../../../../CommonComp/WalletContext";
import SlippageTolerance from "../Card/components/SlippageTolerance";
import SettingsPopup from "../Card/components/SettingsPopup";
import { SelectTokenPopup } from "../Card/components/SelectTokenPopup";
import ConfirmSwapPopup from "../Card/components/ConfirmSwapPopup";
import PriceView from "../Card/components/PriceView";
import { useAppContext } from '../../../Controller/AppContext';
import "./AddLiquidity.css"; // Make sure you have this file

import Web3 from 'web3';
import BN from 'bn.js';

// Define fetchGasPrice function here or import it if it's in another file
const fetchGasPrice = async () => {
    try {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);

            // Fetch the base gas price
            const gasPriceHex = await window.ethereum.request({ method: 'eth_gasPrice' });
            console.log(`Gas Price from MetaMask (hex): ${gasPriceHex} wei`);

            // Convert hex to a number
            const gasPriceWei = parseInt(gasPriceHex, 16);
            console.log(`Gas Price from MetaMask (decimal): ${gasPriceWei} wei`);

            // Multiply the gas price by 1.2 to make it more aggressive
            const aggressiveFactor = 1.2;
            const aggressiveGasPriceWei = Math.floor(gasPriceWei * aggressiveFactor);
            console.log(`Aggressive Gas Price (decimal): ${aggressiveGasPriceWei} wei`);

            // Convert the result to hex
            const aggressiveGasPriceHex = web3.utils.toHex(aggressiveGasPriceWei);
            console.log(`Aggressive Gas Price (hex): ${aggressiveGasPriceHex} wei`);

            // Convert to Gwei for readability
            const aggressiveGasPriceGwei = web3.utils.fromWei(aggressiveGasPriceHex, 'gwei');
            console.log(`Aggressive Gas Price from MetaMask: ${aggressiveGasPriceGwei} gwei`);

            return aggressiveGasPriceHex;
        } else {
            console.error('MetaMask is not installed');
            // Fallback to a default value
            return Web3.utils.toWei('30.005', 'gwei');
        }
    } catch (error) {
        console.error('Error fetching gas price from MetaMask:', error);
        // Fallback to a default value
        return Web3.utils.toWei('30.005', 'gwei');
    }
};

const AddLiquidity = ({ updateShouldRenderParamCard, updateLiquidityDetails }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUpA, setButtonPopUpA] = useState(false);
    const [buttonPopUpB, setButtonPopUpB] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);
    const [price, setPrice] = useState("Fetching price...");
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState('');
    const [gasPrice, setGasPrice] = useState(null);
    const [tokenBalances, setTokenBalances] = useState({}); // Define tokenBalances state

    const {
        selectedTokenA, setSelectedTokenA,
        selectedTokenB, setSelectedTokenB,
    } = useAppContext();

    const { account, connectWallet } = useWallet();

    const [inputValueA, setInputValueA] = useState('');
    const [inputValueB, setInputValueB] = useState('');

    // Web3 and Contract Setup
    const web3 = new Web3(window.ethereum); // Assuming the user has MetaMask

    // Fetch the current gas price from EthGasStation
    useEffect(() => {
        const getGasPrice = async () => {
            const fetchedGasPrice = await fetchGasPrice();
            setGasPrice(fetchedGasPrice);
        };
        getGasPrice();
    }, []);

    const handleClick = () => {
        setClicked(!clicked);
        const tempToken = selectedTokenA;
        setSelectedTokenA(selectedTokenB);
        setSelectedTokenB(tempToken);

        const tempValue = inputValueA;
        setInputValueA(inputValueB);
        setInputValueB(tempValue);
    };

    const handleAddLiquidityOrConnect = () => {
        if (account) {
            setButtonPopUp3(true);
        } else {
            connectWallet();
        }
    };

    const handleAddLiquidity = async () => {
        console.log('Executing add liquidity...');
        // Add the logic for adding liquidity here
        // This can include interacting with a smart contract using Web3 or Ethers.js
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

    const handleMaxClick = () => {
        if (selectedTokenA) {
            setInputValueA(tokenBalances[selectedTokenA.name] || ''); // Use the balance of the selected token
        }
    };

    return (
        <>
            <div className="card">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>Add Liquidity</h2>
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
                    <SelectTokenPopup isTokenA={true} closePopup={togglePopupA} setTokenBalances={setTokenBalances} /> {/* Pass setTokenBalances */}
                </Popup>
                <Popup trigger={buttonPopUpB} setTrigger={setButtonPopUpB}>
                    <SelectTokenPopup isTokenA={false} closePopup={togglePopupB} setTokenBalances={setTokenBalances} /> {/* Pass setTokenBalances */}
                </Popup>
                <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                    <ConfirmSwapPopup 
                        tokenA={selectedTokenA} 
                        tokenB={selectedTokenB} 
                        inputValueA={inputValueA} 
                        inputValueB={inputValueB}
                        handleSwap={handleAddLiquidity} // Pass handleAddLiquidity function
                    />
                </Popup>

                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Add liquidity to the pool
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
                    value={inputValueA || ''} // Ensure value is never null
                    onChange={(e) => setInputValueA(e.target.value)}
                    suffix={<button onClick={handleMaxClick} style={{ backgroundColor: 'black', color: '#ffb237' }}>Max</button>} // Add Max button
                />
                <div>
                    {balance !== '' && <p>Balance: {balance} {selectedTokenA ? selectedTokenA.name : ''}</p>}
                </div>

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
                    value={inputValueB || ''} // Ensure value is never null
                    onChange={(e) => setInputValueB(e.target.value)} 
                />
                {shouldRenderPriceView && <PriceView tokenA={selectedTokenA} tokenB={selectedTokenB} price={price} />}
                <SlippageTolerance />
                {account ? (
                    selectedTokenA && selectedTokenB ? (
                        inputValueA && inputValueB ? (
                            <div className="button-container">
                                <Button className="full-button" name="add liquidity" onClick={handleAddLiquidityOrConnect} />
                            </div>
                        ) : (
                            <Button name="enter amount" disabled />
                        )
                    ) : (
                        <Button name="select tokens" disabled />
                    )
                ) : (
                    <Button name="connect wallet" onClick={handleAddLiquidityOrConnect} />
                )}
            </div>
        </>
    );
};

export default AddLiquidity;
