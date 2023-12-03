import React, { useState } from "react";

const Input = (props) => {
    const [val, setVal] = useState("")

    const handleInputChange = (e) => {
        if (props.numbersOnly) {
            // Only allow numbers
            const regex = /^[0-9]*$/;
            if (regex.test(e.target.value)) {
                setVal(e.target.value);
            }
        } else {
            setVal(e.target.value);
        }
    }

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
                        value={val} 
                        onChange={handleInputChange}
                        style={{...inputStyle, ...(props.focused && inputFocusStyle)}}
                    />
                </div>            
            </div>
        </>
    )
}

export default Input;
