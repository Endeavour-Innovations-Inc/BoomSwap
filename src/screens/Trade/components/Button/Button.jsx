import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    const buttonStyle = {
        backgroundColor: 'var(--colorOrangeBright)',
        color: 'var(--white)',
        border: 'none',
        padding: '15px 24px',
        width: '100%',
        borderRadius: '16px',
        fontSize: '16px',
        fontWeight: '800',
        // margin: '30px 0 10px 0' (if needed)
    };

    return (
        <div>
            <Link to={props.url}>
                <button style={buttonStyle} {...props}>
                    {props.name}
                </button>
            </Link>            
        </div>
    );
};

export default Button;
