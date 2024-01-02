import React, { useState } from "react";
import "./ITOcard.css";
import backgroundImage from '../../../../../static/img/ItoTestBackground.png';

const ITOcard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const footerStyle = {
        backgroundColor: 'black',
        color: 'white', // Text color for visibility on the black background
        textAlign: 'center',
        padding: '10px',
        borderRadius: '0 0 10px 10px', // Rounded bottom corners
    };

    const contentStyle = {
        marginTop: '156.67px', // Offset for the header height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isExpanded ? 'space-between' : 'flex-start',
        height: isExpanded ? '313.33px' : '0px', // Remaining height when expanded
        backgroundColor: 'gray', // This will overlay the background image
        transition: 'height 0.3s ease',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden', // Hide overflow
    };

    const cardStyle = {
        width: '428px',
        height: isExpanded ? '470px' : '156.67px',
        backgroundColor: 'gray', // Background color for body and footer
        borderRadius: '10px',
        position: 'relative',
        transition: 'height 0.3s ease',
        overflow: 'hidden',
    };

    const buttonStyle = {
        position: 'absolute',
        right: '10px', // Button on the right side
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px 30px',
        cursor: 'pointer',
        borderRadius: '20%', // Rounded edges
        border: '1px solid black', // Thin border
        width: '30px', // Square shape
        height: '30px', // Square shape
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px', // Adjust font size as needed
    };

    const headerStyle = {
        width: '428px', // Ensure this matches the card's width
        height: '156.67px',
        position: 'absolute',
        top: 0,
        left: 0, // Add left: 0 to ensure it aligns properly
        zIndex: 2,
        cursor: 'pointer', // Make the header look clickable
        // Padding can be adjusted or removed here if it's affecting the layout
    };

    const bodyFooterStyle = {
        display: isExpanded ? 'block' : 'none',
        backgroundColor: 'gray', // This will overlay the background image
        padding: '10px 30px',
    };

    const headerBackgroundStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '10px 10px 0 0', // Rounded top corners
    }

    return (
        <div style={cardStyle} className="ITOcard">
            <div style={headerStyle} onClick={handleToggleExpand}>
                <div style={headerBackgroundStyle}></div>
                {/* Header Content */}
                <div style={buttonStyle}>
                    {isExpanded ? 'v' : '^'}
                </div>
            </div>
            <div style={contentStyle}>
                <div>Body Content</div>
                <div style={footerStyle}>
                    <div onClick={handleToggleExpand}>Close ^</div>
                </div>
            </div>
        </div>
    );
};

export default ITOcard;
