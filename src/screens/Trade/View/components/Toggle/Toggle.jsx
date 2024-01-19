import React from "react";
import './Toggle.css';

const Toggle = ({ id }) => {
    return (
        <div>
            <input type="checkbox" id={id} className="toggle" />
            <label htmlFor={id} className="toggle-label">
                <span className="toggle-before"></span>
                <span className="toggle-after"></span>
            </label>
        </div>
    );
};

export default Toggle;
