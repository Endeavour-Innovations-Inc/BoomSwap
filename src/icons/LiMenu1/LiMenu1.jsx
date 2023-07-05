/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LiMenu1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`li-menu-1 ${className}`}
      fill="none"
      height="34"
      viewBox="0 0 34 34"
      width="34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.25 17C4.25 16.2176 4.88426 15.5833 5.66667 15.5833H28.3333C29.1157 15.5833 29.75 16.2176 29.75 17C29.75 17.7824 29.1157 18.4166 28.3333 18.4166H5.66667C4.88426 18.4166 4.25 17.7824 4.25 17Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M4.25 8.49998C4.25 7.71758 4.88426 7.08331 5.66667 7.08331H28.3333C29.1157 7.08331 29.75 7.71758 29.75 8.49998C29.75 9.28238 29.1157 9.91665 28.3333 9.91665H5.66667C4.88426 9.91665 4.25 9.28238 4.25 8.49998Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M4.25 25.5C4.25 24.7176 4.88426 24.0833 5.66667 24.0833H28.3333C29.1157 24.0833 29.75 24.7176 29.75 25.5C29.75 26.2824 29.1157 26.9166 28.3333 26.9166H5.66667C4.88426 26.9166 4.25 26.2824 4.25 25.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

LiMenu1.propTypes = {
  color: PropTypes.string,
};
