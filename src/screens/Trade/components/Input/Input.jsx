import React, { useState } from "react";

const Input = (props) => {
    const handleInputChange = (e) => {
        // Check if the value matches the regex
        if (props.numbersOnly && !/^\d*\.?\d*$/.test(e.target.value)) {
            return; // If not, do not update
        }

        // Call props.onChange if it is a function
        if (typeof props.onChange === 'function') {
            props.onChange(e);
        }
    };

    // Inline styles
    const inputsStyle = {
        textAlign: 'left',
    };

    const inputStyle = {
        backgroundColor: 'var(--colorBodyBackground)',
        border: 'none',
        fontSize: '1rem',
        color: 'var(--white)',
        padding: '20px 5px',
        width: '100%',
        textAlign: 'right',
        borderRadius: '10px',
    };

    const inputFocusStyle = {
        outline: 'none',
    };

    return (
        <>
            <div style={inputsStyle}>
                <div className="input">
                    <input 
                        type="text" 
                        id="inpuText" 
                        placeholder={props.placeholder} 
                        inputMode="decimal"
                        autoComplete="off" 
                        autoCorrect="off" 
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        value={props.value}  // Use value from props
                        onChange={handleInputChange}
                        style={{...inputStyle, ...(props.focused && inputFocusStyle)}}
                    />
                </div>            
            </div>
        </>
    )
}

export default Input;
