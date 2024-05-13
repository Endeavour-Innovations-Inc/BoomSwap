import React, { useState, useEffect, useCallback } from "react";
import Web3 from 'web3';
import { IoRefreshSharp } from "react-icons/io5";
import RouterABI from './RouterABI.json'; // Import ABI from a local JSON file

const PriceView = ({ tokenA, tokenB }) => {
  const [price, setPrice] = useState("Fetching price...");

  const slipToleranceStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const slipTextStyle = {
    color: "var(--colorPurple)",
    fontSize: "12px",
    fontWeight: 700,
  };

  const slipPercentStyle = {
    color: "var(--colorOrangeBright)",
    fontWeight: 800,
  };

  const contractAddress = '0x0D2AE4BFb4Fd2F6c48B65f900c7550BB49909f2B'; // Replace with your contract address

  const getPrice = useCallback(async () => {
    if (window.ethereum && tokenA && tokenB && tokenA.address && tokenB.address) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(RouterABI, contractAddress);

        const amountIn = web3.utils.toWei('1', 'ether'); // Assuming 1 unit of tokenA
        const path = [tokenA.address, tokenB.address];
        const amountsOut = await contract.methods.getAmountsOut(amountIn, path).call();
        const priceOfToken = web3.utils.fromWei(amountsOut[1], 'ether');

        setPrice(`${priceOfToken} ${tokenB.name} per ${tokenA.name}`);
      } catch (error) {
        console.error('Error fetching price:', error);
        setPrice('Error fetching price');
      }
    } else {
      setPrice('MetaMask not found or invalid token data');
    }
  }, [tokenA, tokenB]);

  useEffect(() => {
    getPrice();
  }, [getPrice]); // Only re-run when getPrice changes

  return (
    <div style={slipToleranceStyle}>
      <div style={slipTextStyle}>
        <span>Price</span>
      </div>
      <div style={slipPercentStyle}>
        <span>{price}</span>
        <IoRefreshSharp onClick={getPrice} />
      </div>
    </div>
  );
};

export default PriceView;
