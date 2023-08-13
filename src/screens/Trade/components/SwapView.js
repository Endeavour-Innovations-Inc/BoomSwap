import React from 'react';

const SwapView = () => {

    const overlapStyle = { // responsible for background
        backgroundColor: '#09090a',
        height: '729px',
        left: '-3px',
        position: 'absolute',
        top: '96px',
        width: '1440px'
    };

    const frameStyle = {
        backgroundColor: '#333335',
        position: 'relative', // This ensures children are positioned relative to this element
        height: '309px',
        left: '435px',
        overflow: 'hidden',
        top: '220px',
        width: '617px',
        borderRadius: '10px'  // Rounded corners
    };    

    const boomTokenStyle = {
        color: '#ffffff',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '48px',
        fontWeight: 500,
        left: '50%',   // Adjusted to align to the center of frameStyle
        top: '0',      // Remains the same to align to the top of frameStyle
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute', 
        whiteSpace: 'nowrap',
        transform: 'translateX(-50%)'  // Added to ensure perfect centering
    };    

    const overlapWrapperStyle = {
        height: '134px',
        left: '50%', // Adjusted to move the element's left edge to the center of its container
        transform: 'translateX(-50%)', // Added to pull the element back to the left by half of its width
        width: '564px',
        position: 'relative', // Changed from absolute to relative
        top: '140px' // This might need to be adjusted depending on the specific layout and the height of the element above
    };    

    const overlap2Style = {
        height: '123px',
        left: '1px',
        position: 'relative',
        width: '563px'
    };

    const overlapGroup2Style = {
        height: '122px',
        left: '0',
        position: 'absolute',
        top: '1px',
        width: '563px'
    };

    const rectangleStyle = {
        backgroundColor: '#202529',
        borderRadius: '25px',
        height: '58px',
        left: '0',
        position: 'absolute',
        top: '50px',
        width: '542px'
    };

    const textWrapperStyle = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: 300,
        left: '489px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '42px',
        whiteSpace: 'nowrap',
        width: '74px'
    };

    const textWrapper2Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: 300,
        left: '416px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '104px'
    };

    const textWrapper3Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: 500,
        left: '500px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '20px'
    };

    const textWrapper4Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: 300,
        left: '21px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '174px'
    };

    const chevronDownStyle = {
        height: '20px',
        left: '196px',
        position: 'absolute',
        top: '29px',
        width: '20px'
    };

    const textWrapper5Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: 500,
        left: '480px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '249px',
        whiteSpace: 'nowrap',
        width: '74px'
    };

    const overlapGroupWrapperStyle = {
        height: '150px',
        left: '0',
        overflow: 'hidden',
        position: 'absolute',
        top: '0',
        width: '564px'
    };

    const overlap3Style = {
        height: '122px',
        left: '2px',
        position: 'relative',
        width: '563px'
    };

    const selectACurrencyStyle = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: 300,
        left: '20px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '174px'
    };

    const overlap4Style = {
        height: '122px',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '563px'
    };

    const textWrapper6Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: 300,
        left: '415px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '104px'
    };

    const textWrapper7Style = {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: 500,
        left: '499px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '20px'
    };

    const imgStyle = {
        height: '20px',
        left: '194px',
        position: 'absolute',
        top: '28px',
        width: '20px'
    };

    const frame2Style = {
        height: '55px',
        left: '238px',
        position: 'absolute',
        top: '122px',
        width: '56px'
    };

    const arrowWrapperStyle = {
        backgroundColor: '#24272c',
        borderRadius: '27.5px',
        height: '55px',
        left: '1px',
        position: 'relative',
        width: '55px'
    };

    const arrowStyle = {
        height: '26px',
        left: '16px',
        position: 'absolute',
        top: '15px',
        width: '22px'
    };

    const textWrapper8Style = {
        color: '#3c61c0',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: 500,
        left: '21px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '247px',
        whiteSpace: 'nowrap',
        width: '190px'
    };

    const settingStyle = {
        height: '40px',
        left: '915px',
        position: 'absolute',
        top: '190px',
        width: '40px'
    };
  
    return (
        <div style={overlapStyle}>
          <div style={frameStyle}> {/* I will delete everything below it to style it properly */}
            <div style={boomTokenStyle}>BoomSwap</div>
              
          </div>    
        </div>
    );    
}

export default SwapView;
