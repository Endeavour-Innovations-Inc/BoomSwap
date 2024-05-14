import React from "react";
import './Input.css'; // Ensure this path matches your project structure

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

    return (
        <div className="input-container">
            <input 
                type="text" 
                id="inputText" 
                placeholder={props.placeholder} 
                inputMode="decimal"
                autoComplete="off" 
                autoCorrect="off" 
                pattern="^[0-9]*[.,]?[0-9]*$"
                value={props.value}  // Use value from props
                onChange={handleInputChange}
                className="input-field"
            />
            {props.suffix && <div className="input-suffix">{props.suffix}</div>}
        </div>
    );
}

export default Input;
