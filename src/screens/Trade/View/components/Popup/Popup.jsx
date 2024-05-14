import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = (props) => {
    const popupStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // High z-index to ensure it is above other elements
    };

    const popupInnerStyle = {
        position: 'relative',
        padding: '32px',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'var(--colorPrimary)',
        borderRadius: '25px',
        zIndex: 1001, // Ensure the inner content is above the overlay
    };

    const closeBtnStyle = {
        position: 'absolute',
        top: '16px',
        right: '16px',
        cursor: 'pointer',
        color: 'var(--colorOrangeBright)',
        zIndex: 1002, // Ensure the close button is above everything
    };

    return (props.trigger) ? (
        <div style={popupStyle}>
            <div style={popupInnerStyle}>
                <span style={closeBtnStyle}>
                    <AiOutlineClose onClick={() => { props.setTrigger(false) }} />
                </span>                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;
