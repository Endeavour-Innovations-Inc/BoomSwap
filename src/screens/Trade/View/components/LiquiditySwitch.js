import React from 'react';

const LiquiditySwitch = ({ active, onToggle }) => {
  const slideSwitchStyle = {
    display: 'flex',
    border: '1px solid black', // Border color
    borderRadius: '20px', // Rounded edges
    backgroundColor: '#162231', // Background color
    marginTop: '1px', // Added top margin
  };

  const buttonStyle = (isActive) => ({
    flex: 1,
    textAlign: 'center',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    borderRadius: '20px', // Match parent's border-radius
    backgroundColor: isActive ? '#ffb237' : '#162231', // Active button color, Inactive button color
    color: isActive ? 'black' : 'white', // Text color based on active state
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
