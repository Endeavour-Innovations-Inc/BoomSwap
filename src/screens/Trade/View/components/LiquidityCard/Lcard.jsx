import React, { useState, useEffect } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import { AiTwotoneSetting } from "react-icons/ai";
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
import Web3 from 'web3'; // Import Web3
import FactoryABI from '../Card/components/FactoryABI.json'; // Import the Factory ABI
import "./Lcard.css";

const Lcard = ({ updateShouldRenderParamCard }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUpA, setButtonPopUpA] = useState(false);
    const [buttonPopUpB, setButtonPopUpB] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);
    const [liquidityFound, setLiquidityFound] = useState(false); // State to track liquidity

    const {
        selectedTokenA, setSelectedTokenA,
        selectedTokenB, setSelectedTokenB,
    } = useAppContext();    

    const { account, connectWallet } = useWallet();

    const [inputValueA, setInputValueA] = useState(''); // State for the first input field
    const [inputValueB, setInputValueB] = useState(''); // State for the second input field

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

    const handleSwap = async () => {
        console.log('Executing swap...');
        // Add the logic for the swap here
        // This can include interacting with a smart contract using Web3 or Ethers.js
    };

    // Determine if PriceView should be rendered
    const shouldRenderPriceView = selectedTokenA && selectedTokenB;

    // Update whether ParamCard should be rendered
    useEffect(() => {
        const shouldRender = selectedTokenA && selectedTokenB && (inputValueA || inputValueB);
        console.log({ selectedTokenA, selectedTokenB, inputValueA, inputValueB, shouldRender });
        updateShouldRenderParamCard(shouldRender);
    }, [selectedTokenA, selectedTokenB, inputValueA, inputValueB, updateShouldRenderParamCard]);    

    console.log("Selected Tokens in Card:", selectedTokenA, selectedTokenB);

    const togglePopupA = () => setButtonPopUpA(!buttonPopUpA);
    const togglePopupB = () => setButtonPopUpB(!buttonPopUpB);

    useEffect(() => {
        // Fetch liquidity pair tokens
        const fetchLiquidityPairs = async () => {
            if (!account) return;

            const web3 = new Web3(window.ethereum); // Initialize Web3
            const factoryContract = new web3.eth.Contract(
                FactoryABI, // Use the imported Factory ABI
                '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' // Uniswap V2 Factory address (example)
            );

            try {
                const pairAddress = await factoryContract.methods.allPairs(account).call();
                setLiquidityFound(!!pairAddress);
            } catch (error) {
                console.error("Error fetching liquidity pairs:", error);
                setLiquidityFound(false);
            }
        };

        fetchLiquidityPairs();
    }, [account]);

    return (
        <>
            <div className="card">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>Your Liquidity</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting onClick={() => setButtonPopUp2(true)} />
                        <IoRefreshSharp />
                    </div>
                </div>
                <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                    <SettingsPopup />
                </Popup>

                {/* Sample comment */}
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
                        handleSwap={handleSwap} // Pass handleSwap function
                    />
                </Popup>

                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Manage your liquidity positions
                    </div>
                </div>

                {/* Check for liquidity pairs */}
                <div className="liquidity-status">
                    {liquidityFound ? "Liquidity pairs found" : <p className="no-liquidity">No liquidity found</p>}
                </div>

                <Button name={account ? "add liquidity" : "connect wallet"} onClick={handleSwapOrConnect} />
            </div>
        </>
    );
};

export default Lcard;
