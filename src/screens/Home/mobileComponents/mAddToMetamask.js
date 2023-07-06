import React from 'react';
import { LiArrowUpRight2 } from '../../../icons/LiArrowUpRight2';

const MAddToMetamask = () => {

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center', // Changed from 'flex-end' to 'center'
    justifyContent: 'center',
    gap: '6px',
    padding: '19px 30px',
    borderRadius: '8px',
    width: '330px',
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    position: 'relative',
    cursor: 'pointer',
  };

  const textStyle = {
    color: '#ffffff',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'relative',
    width: 'fit-content',
  };

  const addToMetamask = async () => {
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x77D00901BA98F11d8EB87779C5ad69ee3240CB12', // Token Contract Address
            symbol: 'BOOM', // Token Symbol
            decimals: 18, // Token Decimals
            image: 'https://i.imgur.com/4hLOhhO.png', // Direct link to the token image
          },
        },
      });

      if (wasAdded) {
        console.log('Token was successfully added to MetaMask');
      } else {
        console.log('Token was not added');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={buttonStyle} onClick={addToMetamask}>
      <div style={textStyle}>Add to MetaMask</div>
      <LiArrowUpRight2 style={{fill: 'white'}} /> {/* Ensure that the icon is rendered correctly */}
    </div>
  );
};

export default MAddToMetamask;
