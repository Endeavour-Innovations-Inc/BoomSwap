import React from 'react';
import './RyoshiTales.css';

const RyoshiTales = ({ text, toggleCollapse }) => {
    const words = text.split(" ");

    return (
        <div className="ryoshi-tales-wrapper">
            <div className="featured">Finished</div>
            <div className="ryoshi-tales">
                <p>{words[0]}</p>
                {words.length > 1 && <p>{words.slice(1).join(" ")}</p>}        
            </div>
            <button className="arrow-button" onClick={toggleCollapse}>
                {/* SVG for the arrow goes here */}
                <svg viewBox="0 0 24 24" width="24" height="24">
                    {/* Replace with your specific arrow SVG */}
                    <path d="M12 7.998l-6 6 1.5 1.5L12 11l4.5 4.5 1.5-1.5z" />
                </svg>
            </button>
        </div>
    );
};

export default RyoshiTales;
