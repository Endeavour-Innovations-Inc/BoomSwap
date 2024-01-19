import React, { useState } from 'react';

const LiquiditySwitch = ({ active, onToggle }) => {
  const slideSwitchStyle = {
    display: 'flex',
    border: '1px solid #ccc', // Border color
    borderRadius: '20px', // Rounded edges
    backgroundColor: '#f0f0f0', // Background color
    marginTop: '1px', // Added top margin
  };

  const buttonStyle = (isActive) => ({
    flex: 1,
    textAlign: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    borderRadius: '20px', // Match parent's border-radius
    backgroundColor: isActive ? '#007bff' : 'transparent', // Active button color
    color: isActive ? 'white' : 'black', // Active text color
  });

  return (
    <div style={slideSwitchStyle}>
      <div style={buttonStyle(active === 'swap')} onClick={() => onToggle('swap')}>
        Swap
      </div>
      <div style={buttonStyle(active === 'liquidity')} onClick={() => onToggle('liquidity')}>
        Liquidity
      </div>
    </div>
  );
};

export default LiquiditySwitch;
