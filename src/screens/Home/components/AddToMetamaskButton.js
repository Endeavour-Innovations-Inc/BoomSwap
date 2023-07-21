import React from 'react';

const AddToMetamask = () => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '15px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: 'fit-content',
  };

  const textStyle = {
    color: '#ffffff',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '15px',
    fontWeight: '500',
  };

  const arrowStyle = {
    width: '24px',
    height: '24px',
    fill: 'white',
    marginLeft: '8px',
  };

  const addToMetamask = async () => {
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0xB98964fa34134b9913E54C962EEC9A9578167251', // Token Contract Address
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
      <svg style={arrowStyle} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z" />
        <path d="M6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V8H7C6.44772 8 6 7.55228 6 7Z" />
      </svg>
    </div>
  );
};

export default AddToMetamask;
