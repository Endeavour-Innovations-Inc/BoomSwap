import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from '../../Button/Button'; // Adjust the path as needed
import croImg from "../../images/cro.png"

const ConfirmSwapPopup = () => {
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
            <img src={croImg} alt="" style={priceImgImgStyle} />
            <span>0.99393</span>
          </div>                
          <div className="swapName">CRO</div>
        </div>  
        <div className="arrDown">
          <AiOutlineArrowDown />
        </div>     
        <div style={swapStyle} className="swap">
          <div style={priceImgStyle} className="priceImg">
            <img src={croImg} alt="" style={priceImgImgStyle} />
            <span>0.99393</span>
          </div>                
          <div className="swapName">CRO</div>
        </div> 
        <Button name="confirm swap" />               
      </div>
    </div>
  );
};

export default ConfirmSwapPopup;
