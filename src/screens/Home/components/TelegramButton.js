import React from 'react';

const TelegramButton = () => {

  const redirectToTelegram = () => {
    window.open('https://www.google.com', '_blank');
  };

  const buttonStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '48px', // Set the width of the image
    height: '48px', // Set the height of the image
    borderRadius: '24px', // Set the border radius
    cursor: 'pointer', // Change cursor to pointer on hover
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
  };

  const imageStyle = {
    position: 'absolute',
    top: '15px',
    left: '12px',
    width: '21px',
    height: '18px',
    zIndex: 1000,
  };

  return (
    <div style={buttonStyle} onClick={redirectToTelegram}>
      <img style={imageStyle} alt="Telegram Token" src="/img/vector-1.svg" />
    </div>
  );
};

export default TelegramButton;
