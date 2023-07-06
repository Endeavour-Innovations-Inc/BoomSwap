import React, { useState } from 'react';

const MTokensSoldBar = () => {
  const [tokensSold, setTokensSold] = useState(330000000);
  const totalTokens = 1000000000;

  const percentageSold = (tokensSold / totalTokens) * 100;

  const frame7Style = {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    width: '100%', // use full width of the parent component
  };
  
  const rectangleWrapperStyle = {
    backgroundColor: '#dedede',
    borderRadius: '99px',
    height: '4px',
    minWidth: '100%', // use full width of the parent component
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
  };

  const rectangleStyle = {
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    borderRadius: '99px',
    height: '4px',
    width: `${percentageSold}%`,
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const textWrapper9Style = {
    color: '#3f3f3f', 
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '14px', 
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '24px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '0px',
    left: '0',
};

const textWrapper10Style = {
    color: '#3f3f3f',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '0',
    lineHeight: '24px',
    whiteSpace: 'nowrap',
    position: 'relative',
    top: '24px', // Adjust the position so it's directly below "Tokens Sold"
    left: '0', // Align to the left, same as "Tokens Sold"
};

  return (
        <div style={frame7Style}>
        <div style={rectangleWrapperStyle}>
        <div style={rectangleStyle} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}> {/* use full width of the parent component */}
        <div style={textWrapper9Style}>Tokens Sold</div>
        <div style={textWrapper10Style}>{`${tokensSold.toLocaleString()} / ${totalTokens.toLocaleString()}`}</div>
        </div>
    </div>
  );
};

export default MTokensSoldBar;
