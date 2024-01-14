import React, { useState } from "react";
import "./Input.css"

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

    return (
        <>
        <div className="inputs">
            <div className="input">
                <input type="text" id="inpuText" placeholder={props.placeholder} inputMode="decimal"
                autoComplete="off" autoCorrect="off" pattern="^[0-9]*[.,]?[0-9]*$"
                value={val} onChange={handleInputChange} />
            </div>            
        </div>
        </>
    )
}

export default Input;