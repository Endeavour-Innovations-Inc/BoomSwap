import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from '../Home';

const MNavbarButtons = () => {

  const [hoveredButton, setHoveredButton] = useState(null);
  const [pressedButton, setPressedButton] = useState(null);

  const redirectToTrade = () => {
    // Add the link or functionality for the Trade button here
  };

  const redirectToEarn = () => {
    // Add the link or functionality for the Earn button here
  };

  const redirectToDashboard = () => {
    // Add the link or functionality for the Dashboard button here
  };

  const redirectToITO = () => {
    // Add the link or functionality for the ITO button here
  };

  const redirectToOther = () => {
    // Add the link or functionality for the Other button here
  };

  const navbarStyle = {
    alignItems: 'center', // align items vertically in the center
    display: 'flex',
    flexDirection: 'row', // stack items horizontally
    gap: '10px', // minimum space between items
    justifyContent: 'space-between', // distribute space evenly between items
    position: 'relative',
    width: '80%', // adjust this value to make buttons spread more or less
    flexWrap: 'wrap', // allow items to wrap to next line if space is not enough
  };  

  const buttonStyle = (isHovered, isPressed) => ({
    color: '#6f767e',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0',
    lineHeight: '24px',
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    border: 'none',
    background: isHovered ? 'darkgrey' : 'none',
    cursor: 'pointer',
    zIndex: 1000,
    padding: '10px 20px',
    borderRadius: '10px',
    animation: isPressed ? 'blink-animation 0.5s linear' : 'none',
  });

  const blinkAnimation = `
    @keyframes blink-animation {
      0%, 50%, 100% {
        opacity: 1;
      }
      25%, 75% {
        opacity: 0;
      }
    }
  `;

  return (
    <div style={navbarStyle} className="navbar">
      <style>{blinkAnimation}</style>
      <button
        style={buttonStyle(hoveredButton === 'trade', pressedButton === 'trade')}
        onMouseEnter={() => setHoveredButton('trade')}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setPressedButton('trade')}
        onMouseUp={() => setPressedButton(null)}
        onClick={redirectToTrade}
      >
        Trade
      </button>
      <button
        style={buttonStyle(hoveredButton === 'earn', pressedButton === 'earn')}
        onMouseEnter={() => setHoveredButton('earn')}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setPressedButton('earn')}
        onMouseUp={() => setPressedButton(null)}
        onClick={redirectToEarn}
      >
        Earn
      </button>
      <button
        style={buttonStyle(hoveredButton === 'dashboard', pressedButton === 'dashboard')}
        onMouseEnter={() => setHoveredButton('dashboard')}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setPressedButton('dashboard')}
        onMouseUp={() => setPressedButton(null)}
        onClick={redirectToDashboard}
      >
        Dashboard
      </button>
      <button
        style={buttonStyle(hoveredButton === 'ito', pressedButton === 'ito')}
        onMouseEnter={() => setHoveredButton('ito')}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setPressedButton('ito')}
        onMouseUp={() => setPressedButton(null)}
        onClick={redirectToITO}
      >
        ITO
      </button>
      <button
        style={buttonStyle(hoveredButton === 'other', pressedButton === 'other')}
        onMouseEnter={() => setHoveredButton('other')}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setPressedButton('other')}
        onMouseUp={() => setPressedButton(null)}
        onClick={redirectToOther}
      >
        ...
      </button>
    </div>
  );
};

export default MNavbarButtons;
