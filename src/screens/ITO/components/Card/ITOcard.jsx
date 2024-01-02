import React, { useState } from "react";
import "./ITOcard.css";
import backgroundImage from '../../../../../static/img/ItoTestBackground.png';

const ITOcard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const cardStyle = {
        width: '428px',
        height: isExpanded ? '470px' : '156.67px', // 470px divided by 3
        padding: '10px 30px',
        backgroundColor: 'gray',
        borderRadius: '10px',
        position: 'relative',
        transition: 'height 0.3s ease', // Smooth transition for height
        backgroundImage: `url(${backgroundImage})`, // Set background image
    };

    const buttonStyle = {
        position: 'absolute',
        right: '10px', // Button on the right side
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '20px', // size of btn
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

    return (
        <div style={cardStyle} className="ITOcard">
            <div style={buttonStyle} onClick={handleToggleExpand}>
                {isExpanded ? 'v' : '^'}
            </div>
        </div>
    );
};

export default ITOcard;
