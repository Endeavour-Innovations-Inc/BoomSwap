import React from "react";
import LanguageSelector from "../Home/components/LangSelector"; // Adjust path as needed

const CommonFooter = () => {
  const footerStyle = {
    backgroundColor: "#15151a",
    height: "166px",
    left: 0,
    position: "absolute",
    top: "825px",
    width: "1440px",
  };

  const frameStyle = {
    alignItems: "center",
    display: "inline-flex",
    gap: "11px",
    left: "75px",
    position: "absolute",
    top: "71px",
  };

  return (
    <div style={footerStyle}>
      <div style={frameStyle}>
        <LanguageSelector />
      </div>
      <div className="text-wrapper-13">© 2023 BoomFinance</div>
    </div>
  );
};

export default CommonFooter;
