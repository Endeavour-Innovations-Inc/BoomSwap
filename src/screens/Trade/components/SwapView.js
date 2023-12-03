import React from 'react';
import SwapElements from './SwapElements';
import { Button } from './Button';
import Card from './Card/Card';

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
        height: 'auto',         // Dynamic height based on content
        minHeight: '300px',     // Optional: minimum height
        maxHeight: '600px',     // Optional: maximum height
        width: 'auto',
        minWidth: '300px',
        maxWidth: '700px',
        borderRadius: '10px',
        padding: '15px'         // Added padding to ensure content doesn't touch the edges
    };    
    
    const boomTokenStyle = {
        color: '#ffffff',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '48px',
        fontWeight: 500,
        marginTop: '0',  // Adjust as needed to position from the top of frameStyle
        letterSpacing: '0',
        lineHeight: '72px',
        whiteSpace: 'nowrap',
    }; 
  
    // This code is responsible for the window for trading
    // Swap Elements 

    return (
        <Card />      
    );    
}

export default SwapView;
