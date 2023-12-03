import React from "react";

const Toggle = ({ id }) => {
    const toggleStyle = {
        opacity: 0,
        position: 'absolute',
        left: '-9000px',
        top: '-9000px',
    };

    const labelStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    };

    const beforeStyle = {
        content: '""',
        width: '50px',
        height: '25px',
        backgroundColor: 'var(--colorBodyBackground)',
        borderRadius: '16px',
        marginRight: '4px',
        transition: 'background-color 200ms ease-in-out',
    };

    const afterStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        content: '""',
        fontSize: '8px',
        height: '14.4px',
        left: '3.2px',
        width: '22px',
        backgroundColor: 'var(--colorPrimary)',
        color: 'white',
        borderRadius: '50%',
        transition: 'background-color 200ms ease-in-out, transform 200ms ease-in-out',
    };

    return (
        <div>
            <input type="checkbox" id={id} style={toggleStyle} />
            <label htmlFor={id} style={labelStyle}>
                <span style={beforeStyle}></span>
                <span style={afterStyle}></span>
            </label>
        </div>
    );
};

export default Toggle;
