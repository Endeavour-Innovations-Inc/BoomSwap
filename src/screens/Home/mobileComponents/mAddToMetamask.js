import React from 'react';
import { LiArrowUpRight2 } from '../../../icons/LiArrowUpRight2';

const MAddToMetamask = () => {

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
      if (!window.ethereum) {
        alert('Please install MetaMask to use this feature.');
        return;
      }
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
    <button className="button" onClick={addToMetamask}>
      <div style={textStyle}>Add to MetaMask</div>
      <LiArrowUpRight2 style={{fill: 'white'}} />
    </button>
  );
};

export default MAddToMetamask;
