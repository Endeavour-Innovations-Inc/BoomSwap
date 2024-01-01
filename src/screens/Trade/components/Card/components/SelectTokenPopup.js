import React from "react";
import Input from '../../Input/Input'; // Adjust the path as needed
import croImg from "../../images/cro.png"

export const SelectTokenPopup = () => {
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

  const tokensStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 0',
  };

  const tokenImgNameStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    cursor: 'pointer',
  };

  const tokenImgStyle = {
    width: '30px',
    height: '30px',
  };

  const tokenNonFadeStyle = {
    fontWeight: 700,
  };

  const tokenFadeStyle = {
    fontWeight: 400,
    fontSize: '14px',
    color: 'var(--colorLightGrey)',
  };

  return (
    <>
      <div style={popHeadingStyle} className="popHeading">
        <h2 style={popHeadingTextStyle} className="popHeadingText">Select a Token</h2>
      </div>
      <div className="popBody" style={popBodyStyle}>
        <Input 
          placeholder="Search name or paste address"
          style={{ textAlign: 'left' }}
        />
        <div style={tokensStyle} className="tokens">
          <div style={tokenImgNameStyle} className="tokenImgName">
            <div style={tokenImgStyle} className="tokenImg">
              <img src={croImg} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="tokenName">
              <div style={tokenNonFadeStyle} className="tokenNonFade">
                <span>CRO</span>
              </div>
              <div style={tokenFadeStyle} className="tokenFade">
                <span>CRO</span>
              </div>
            </div>
          </div>
          <div className="tokenPrice">
            <span>0.000009</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTokenPopup;
