import React, { useState } from 'react';
import { LiArrowUpRight } from "../../../icons/LiArrowUpRight";
import { LinearArrowsTransferVertical } from "../../../icons/LinearArrowsTransferVertical";

const MTokenPurchaseFrame = () => {
  const [amount, setAmount] = useState('');

  const frameWrapperStyle = {
    alignItems: 'flex-start',
    backgroundColor: '#e6e6e6',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '5px 0px',
    width: '90%', // Updated for mobile
    margin: '0 auto', // Center the content
  };

  const frame8Style = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    width: 'fit-content',
  };

  const group14Style = {
    height: '50px',
    minWidth: '201px',
    position: 'relative',
  };

  const textWrapper11Style = {
    color: '#272624',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '28px',
    fontWeight: '500',
    left: '32px',
    letterSpacing: '0',
    lineHeight: '28px',
    position: 'absolute',
    top: '0',
    whiteSpace: 'nowrap',
  };

  const textWrapper12Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
    left: '0',
    letterSpacing: '0',
    lineHeight: '16px',
    position: 'absolute',
    top: '34px',
    whiteSpace: 'nowrap',
  };

  const frame9Style = {
    alignItems: 'center',
    border: '1px solid #d0d0d0',
    borderRadius: '6px',
    display: 'flex',
    padding: '0px',
    position: 'relative',
    width: '310px', // Updated to be close to the frame width
    height: '50px',
    boxSizing: 'border-box',
    marginBottom: '10px', // Add some margin at the bottom
  };

  const textWrapper14Style = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '24px',
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  };

  const button3Style = {
    alignItems: 'flex-end',
    background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
    borderRadius: '8px',
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    padding: '12px 0px',
    position: 'relative',
    width: '310px', // Updated to be close to the frame width
    cursor: 'pointer',
  };

  const textWrapper3Style = {
    color: '#ffffff',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: 'normal',
    position: 'relative',
    width: 'fit-content',
  };

  const inputStyle = {
    color: '#c6c6c6',
    fontFamily: '"TT Firs Neue-Medium", Helvetica',
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '24px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: '100%', // Set width to 100% of the container
    height: '100%', // Set height to 100% of the container
    borderRadius: '6px', // Rounded corners
    border: 'none', // Remove the border
    padding: '10px', // Adjust padding
    boxSizing: 'border-box',
  };

   const purchaseTokens = async () => {
    try {
      // Add the logic for purchasing tokens here
      console.log('Purchasing tokens...');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={frameWrapperStyle}>
      <div style={frame8Style}>
        <div style={group14Style}>
          <div style={textWrapper11Style}>BoomToken</div>
          <p style={textWrapper12Style}>Purchase tokens in an instant</p>
        </div>
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Amount BNB"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Token Price"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <LinearArrowsTransferVertical className="icon-instance-node" />
        <div style={frame9Style}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Token Quantity For Purchase"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div style={button3Style} onClick={purchaseTokens}>
            <div style={textWrapper3Style}>Purchase Tokens</div>
            <LiArrowUpRight className="icon-instance-node" color="white" />
        </div>
      </div>
    </div>
  );
};

export default MTokenPurchaseFrame;
