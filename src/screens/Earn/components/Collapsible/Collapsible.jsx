import React, { useState } from "react";
import "./Collapsible.css";

const Collapsible = ({ children, headerContent, absolutePosition = false, bordered = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentStyle = {
        maxHeight: isOpen ? `${children.props.children.length * 200}px` : '0',
        position: absolutePosition ? 'absolute' : 'relative'
    };

    return (
        <div className="collapsible-container">
            <div
                className={`collapsible flex ${bordered ? 'bordered' : ''} ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {headerContent}
                <span className="rightHC">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd iZDSCZ"><path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path></svg>
                                    </span>
            </div>
            <div className={`content ${bordered ? 'bordered' : ''}`} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

export default Collapsible;
