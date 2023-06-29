/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Ru = ({ className, RU = "/img/ru-1.svg" }) => {
  return <img className={`RU ${className}`} alt="Ru" src={RU} />;
};

Ru.propTypes = {
  RU: PropTypes.string,
};
