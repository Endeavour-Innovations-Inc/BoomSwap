import React from 'react';

const TokenView = ({ name, croImg, price, balance, onClick }) => {
  const tokenContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ensure the container takes the full width
    gap: '10px',
    cursor: 'pointer', // Indicate it's clickable
    padding: '10px', // Optional for better click area
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
    <div style={tokenContainerStyle} onClick={onClick}>
      <div style={tokenInfoStyle}>
        <div style={tokenImgStyle} className="tokenImg">
          <img src={croImg} alt={name} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="tokenName">
          <div style={tokenNonFadeStyle} className="tokenNonFade">
            <span>{name}</span> {/* Use name prop here */}
          </div>
        </div>
      </div>
      <div className="tokenPrice">
        <span>{price}</span> {/* Display balance instead of hardcoded price */}
      </div>
    </div>
  );
};

export default TokenView;
