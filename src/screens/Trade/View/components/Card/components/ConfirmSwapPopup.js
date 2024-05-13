import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from '../../Button/Button'; // Adjust the path as needed

const ConfirmSwapPopup = ({ tokenA, tokenB, inputValueA, inputValueB }) => {
  const popHeadingStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
  };

  const popHeadingTextStyle = {
    fontSize: '20px',
  };

  const popBodyStyle = {
    textAlign: 'left',
  };

  const swapStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '17px',
  };

  const priceImgStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  };

  const priceImgImgStyle = {
    width: '20px',
  };

  return (
    <div>
      <div style={popHeadingStyle} className="popHeading">
        <h2 style={popHeadingTextStyle} className="popHeadingText">Confirm Swap</h2>
      </div>
      <div style={popBodyStyle} className="popBody">
        <div style={swapStyle} className="swap">
          <div style={priceImgStyle} className="priceImg">
            <img src={tokenA.image} alt={tokenA.name} style={priceImgImgStyle} />
            <span>{inputValueA}</span>
          </div>                
          <div className="swapName">{tokenA.name}</div>
        </div>  
        <div className="arrDown">
          <AiOutlineArrowDown />
        </div>     
        <div style={swapStyle} className="swap">
          <div style={priceImgStyle} className="priceImg">
            <img src={tokenB.image} alt={tokenB.name} style={priceImgImgStyle} />
            <span>{inputValueB}</span>
          </div>                
          <div className="swapName">{tokenB.name}</div>
        </div> 
        <Button name="confirm swap" />               
      </div>
    </div>
  );
};

export default ConfirmSwapPopup;
