import React from "react";
import "./Button.css"
import { Link } from "react-router-dom";
const Button = (props) => {
    return (
        <div className="button">
            <Link to={props.url}>
                <button disabled={props.isDisabled} className="btn" {...props}>
                    {props.name}
                </button>
            </Link>            
        </div>
    )
}
export default Button