import React from "react";
import NavbarButtons from "../Home/components/NavbarButtons"; // Adjust path as needed
import TelegramButton from "../Home/components/TelegramButton"; // Adjust path as needed
import ConnectToMetamask from "../Home/components/MetamaskButton"; // Adjust path as needed

const CommonHeader = () => {
  const frameStyle = {
    alignItems: "center",
    display: "inline-flex",
    gap: "144px",
    left: "503px",
    position: "absolute",
    top: "28px",
  };

  const metamaskWrapperStyle = {
    alignItems: "center",
    backgroundColor: "#271f15",
    borderRadius: "8px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    padding: "12px 16px",
    position: "relative",
    width: "224px",
    zIndex: 1000,
    marginLeft: "-120px", // Adjust as needed
  };

  return (
    <div style={frameStyle}>
      <NavbarButtons />
      <TelegramButton />
      <div style={metamaskWrapperStyle}>
        <ConnectToMetamask />
      </div>
    </div>
  );
};

export default CommonHeader;
