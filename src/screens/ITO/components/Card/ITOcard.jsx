import React, { useState } from "react";
import "./ITOcard.css";

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
    };

    const buttonStyle = {
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '5px 10px',
        cursor: 'pointer',
        // Add more styling as needed
    };

    return (
        <div style={cardStyle} className="ITOcard">
            <div style={buttonStyle} onClick={handleToggleExpand}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
        </div>
    );
};

export default ITOcard;
