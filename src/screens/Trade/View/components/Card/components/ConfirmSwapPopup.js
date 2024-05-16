import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from '../../Button/Button'; // Adjust the path as needed

const ConfirmSwapPopup = ({ tokenA, tokenB, inputValueA, inputValueB, handleSwap }) => {
  const popHeadingStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'white', // Set text color to white
  };

  const popHeadingTextStyle = {
    fontSize: '20px',
  };

  const popBodyStyle = {
    textAlign: 'left',
    color: 'white', // Set text color to white
  };

  const swapStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '17px',
    color: 'white', // Set text color to white
  };

  const priceImgStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    color: 'white', // Set text color to white
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
        <div className="arrDown" style={{ color: 'white' }}> {/* Set arrow color to white */}
          <AiOutlineArrowDown />
        </div>     
        <div style={swapStyle} className="swap">
          <div style={priceImgStyle} className="priceImg">
            <img src={tokenB.image} alt={tokenB.name} style={priceImgImgStyle} />
            <span>{inputValueB}</span>
          </div>                
          <div className="swapName">{tokenB.name}</div>
        </div> 
        <Button name="confirm swap" onClick={handleSwap} />               
      </div>
    </div>
  );
};

export default ConfirmSwapPopup;
