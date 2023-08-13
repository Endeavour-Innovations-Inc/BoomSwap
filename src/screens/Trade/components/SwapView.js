import React from 'react';
import SwapElements from './SwapElements';
import { Button } from './Button';

const SwapView = () => {

    const overlapStyle = {
        display: 'flex',           // This turns it into a flex container
        justifyContent: 'center',  // Center children horizontally
        alignItems: 'center',      // Center children vertically
        backgroundColor: '#09090a',
        height: '729px',
        left: '-3px',
        position: 'absolute',
        top: '96px',
        width: '1440px'
    };
    
    const frameStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center',    // Center children horizontally
        backgroundColor: '#333335',
        height: '400px',
        width: '617px',
        borderRadius: '10px'
    };
    
    const boomTokenStyle = {
        color: '#ffffff',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '48px',
        fontWeight: 500,
        marginTop: '0',  // Adjust as needed to position from the top of frameStyle
        letterSpacing: '0',
        lineHeight: '72px',
        whiteSpace: 'nowrap'
    }; 
  
    // This code is responsible for the window for trading
    // Swap Elements 

    return (
        <div style={overlapStyle}>
          <div style={frameStyle}> {/* I will delete everything below it to style it properly */}
            <div style={boomTokenStyle}>BoomSwap</div>
              <SwapElements />
              <Button />
          </div>    
        </div>
    );    
}

export default SwapView;
