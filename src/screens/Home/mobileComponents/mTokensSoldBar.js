import React, { useState } from 'react';

const MTokensSoldBar = () => {
  const [tokensSold, setTokensSold] = useState(330000000);
  const totalTokens = 1000000000;

  const percentageSold = (tokensSold / totalTokens) * 100;

  const frame7Style = {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    position: 'relative',
    width: '310px', // adjusted width as per your MTokenPurchaseFrame component
  };

  const rectangleWrapperStyle = {
    backgroundColor: '#dedede',
    borderRadius: '99px',
    height: '10px', // adjust height here to fit mobile design
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
  };

  const rectangleStyle = {
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    borderRadius: '99px',
    height: '100%',
    width: `${percentageSold}%`,
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const textWrapper9Style = {
    color: '#272624',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '18px', // reducing the font size for mobile layout
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '18px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '0px',
    left: '0',
  };

  const textWrapper10Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '14px', // reducing the font size for mobile layout
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '14px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '0px',
    left: '0',
  };

  return (
    <div style={frame7Style}>
      <div style={rectangleWrapperStyle}>
        <div style={rectangleStyle} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={textWrapper9Style}>Tokens Sold</div>
        <div style={textWrapper10Style}>{`${tokensSold.toLocaleString()} / ${totalTokens.toLocaleString()}`}</div>
      </div>
    </div>
  );
};

export default MTokensSoldBar;
