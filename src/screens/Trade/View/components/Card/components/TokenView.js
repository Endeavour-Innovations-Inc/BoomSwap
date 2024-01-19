import React from 'react';

const TokenView = ({ croImg, price }) => {
  const tokenContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ensure the container takes the full width
    gap: '10px',
    cursor: 'pointer',
  };

  const tokenImgStyle = {
    width: '30px',
    height: '30px',
  };

  const tokenInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexGrow: 1, // This will make the token info container grow and push the price to the right
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
    <div style={tokenContainerStyle}>
      <div style={tokenInfoStyle}>
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
        <span>{price}</span>
      </div>
    </div>
  );
};

export default TokenView;
