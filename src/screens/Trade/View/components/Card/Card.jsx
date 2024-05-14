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
import ERC20ABI from './components/ERC20ABI.json'; // Make sure you have the ERC20 ABI
import Web3 from 'web3';

const getImplementationAddress = async (proxyAddress) => {
    const web3 = new Web3(window.ethereum);
    const proxy = new web3.eth.Contract([
        {
            "constant": true,
            "inputs": [],
            "name": "implementation",
            "outputs": [{ "name": "", "type": "address" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ], proxyAddress);

    const implementationAddress = await proxy.methods.implementation().call();
    console.log(`Implementation address: ${implementationAddress}`);
    return implementationAddress;
};

const fetchGasPrice = async () => {
    try {
        const response = await fetch('https://ethgasstation.info/api/ethgasAPI.json?api-key=YOUR_API_KEY');
        const data = await response.json();
        // EthGasStation returns gas prices in gwei * 10, so divide by 10 to get the price in gwei
        const averageGasPrice = data.average / 10;
        console.log(`Average Gas Price: ${averageGasPrice} gwei`);
        return Web3.utils.toWei(averageGasPrice.toString(), 'gwei');
    } catch (error) {
        console.error('Error fetching gas price from EthGasStation:', error);
        // Fallback to a default value
        return Web3.utils.toWei('30.005', 'gwei');
    }
};

const Card = ({ updateShouldRenderParamCard, updateSwapDetails }) => {
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [buttonPopUpA, setButtonPopUpA] = useState(false);
    const [buttonPopUpB, setButtonPopUpB] = useState(false);
    const [buttonPopUp2, setButtonPopUp2] = useState(false);
    const [buttonPopUp3, setButtonPopUp3] = useState(false);
    const [price, setPrice] = useState("Fetching price...");
    const [isApproved, setIsApproved] = useState(false);
    const [balance, setBalance] = useState(null);
    const [gasPrice, setGasPrice] = useState(null);

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

    // Fetch the current gas price from EthGasStation
    useEffect(() => {
        const getGasPrice = async () => {
            const fetchedGasPrice = await fetchGasPrice();
            setGasPrice(fetchedGasPrice);
        };
        getGasPrice();
    }, []);

    // Fetch tokenB amount based on tokenA input
    const fetchTokenOutput = async (inputAmount) => {
        if (!selectedTokenA || !selectedTokenB || !inputAmount) return;

        try {
            const amountsOut = await router.methods.getAmountsOut(
                web3.utils.toWei(inputAmount.toString(), 'ether'), // Convert token amount to Wei
                [selectedTokenA.address, selectedTokenB.address]
            ).call();

            const outputAmountWei = amountsOut[1];
            const outputAmount = web3.utils.fromWei(outputAmountWei, 'ether'); // Convert Wei back to token amount
            setInputValueB(outputAmount);

            // Assuming calculation based on fetched data
            const calculatedMinReceived = parseFloat(outputAmount) * 0.99; // Assuming 1% slippage tolerance
            const calculatedPriceImpact = "<0.01%"; // Placeholder value
            const calculatedLPFee = parseFloat(outputAmount) * 0.003; // Assuming 0.3% fee
            const calculatedRoute = `${selectedTokenA.name} > ${selectedTokenB.name}`;

            updateSwapDetails({
                minimumReceived: calculatedMinReceived.toFixed(6).toString(),
                priceImpact: calculatedPriceImpact,
                liquidityProviderFee: calculatedLPFee.toFixed(6).toString(),
                route: calculatedRoute
            });
        } catch (error) {
            console.error('Error fetching output amount:', error);
            setInputValueB('0'); // Reset or handle errors appropriately
        }
    };

    const fetchTokenBalance = async () => {
        if (!selectedTokenA || !account) return;

        try {
            const implementationAddress = await getImplementationAddress(selectedTokenA.address);
            const tokenContract = new web3.eth.Contract(ERC20ABI, implementationAddress);
            const balanceWei = await tokenContract.methods.balanceOf(account).call();
            const balance = web3.utils.fromWei(balanceWei, 'ether');
            setBalance(balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
            setBalance(null);
        }
    };

    useEffect(() => {
        fetchTokenOutput(inputValueA);
        fetchTokenBalance();
    }, [inputValueA, selectedTokenA, selectedTokenB, account]);

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

    const handleApprove = async () => {
        if (!selectedTokenA || !inputValueA || !gasPrice) return;

        try {
            const tokenAddress = selectedTokenA.address;
            console.log(`Selected token address: ${tokenAddress}`);

            const tokenContract = new web3.eth.Contract(ERC20ABI, tokenAddress);
            console.log(`Token contract methods:`, tokenContract.methods);

            await tokenContract.methods.approve(router.options.address, web3.utils.toWei(inputValueA, 'ether')).send({
                from: account,
                gas: 3000000, // Adjust gas limit as needed
                gasPrice: gasPrice // Use fetched gas price
            });
            setIsApproved(true);
        } catch (error) {
            console.error('Error approving token:', error);
        }
    };

    const handleSwap = async () => {
        if (!selectedTokenA || !selectedTokenB || !inputValueA || !account || !gasPrice) return;

        try {
            const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current time

            await router.methods.swapExactTokensForTokens(
                web3.utils.toWei(inputValueA, 'ether'), // Amount of token A to swap
                0, // Minimum amount of token B to receive (set to 0 for now, you can adjust this for slippage)
                [selectedTokenA.address, selectedTokenB.address], // Path
                account, // Recipient
                deadline // Deadline
            ).send({
                from: account,
                gas: 3000000, // Adjust gas limit as needed
                gasPrice: gasPrice // Use fetched gas price
            });
            console.log('Swap successful');
        } catch (error) {
            console.error('Error swapping tokens:', error);
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

    const handleMaxClick = () => {
        setInputValueA(balance);
    };

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
                        handleSwap={handleSwap}
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
                  suffix={<button onClick={handleMaxClick}>Max</button>} // Add Max button
                />
                <div>
                    {balance !== null && <p>Balance: {balance} {selectedTokenA ? selectedTokenA.name : ''}</p>}
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
                  value={inputValueB}
                  onChange={(e) => setInputValueB(e.target.value)} 
                />
                {shouldRenderPriceView && <PriceView tokenA={selectedTokenA} tokenB={selectedTokenB} price={price} />}
                <SlippageTolerance />
                {account ? (
                    selectedTokenA && selectedTokenB ? (
                        <div className="button-container">
                            {!isApproved ? (
                                <>
                                    <Button className="half-button" name="approve" onClick={handleApprove} />
                                    <Button className="half-button" name="swap" disabled />
                                </>
                            ) : (
                                <Button className="full-button" name="swap" onClick={handleSwapOrConnect} />
                            )}
                        </div>
                    ) : (
                        <Button name="select tokens" disabled />
                    )
                ) : (
                    <Button name="connect wallet" onClick={handleSwapOrConnect} />
                )}
            </div>
        </>
    );
};

export default Card;
