import React from 'react';

const MobileTelegramButton = () => {

  const redirectToTelegram = () => {
    window.open('https://t.me/boom_tocen', '_blank');
  };

  const buttonStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '36px', // Reduced size for mobile
    height: '36px', // Reduced size for mobile
    borderRadius: '18px', // Adjusted border radius
    cursor: 'pointer',
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
  };

  const imageStyle = {
    position: 'absolute',
    top: '10px', // Adjusted position for mobile
    left: '8px', // Adjusted position for mobile
    width: '18px', // Reduced size for mobile
    height: '16px', // Reduced size for mobile
    zIndex: 1000,
  };

  return (
    <div style={buttonStyle} onClick={redirectToTelegram}>
      <img style={imageStyle} alt="Telegram Token" src="/img/vector-1.svg" />
    </div>
  );
};

export default MobileTelegramButton;
