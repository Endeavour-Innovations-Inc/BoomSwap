import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Input from '../../Input/Input'; // Adjust the path as needed
import Toggle from "../../Toggle/Toggle"; // Adjust the path as needed
import '../Card.css'; // Adjust the path as needed

const SettingsPopup = ({ width = 'auto', height = 'auto' }) => {
  // State to store the selected slippage tolerance
  const [selectedTolerance, setSelectedTolerance] = useState(null);

  // Handle slippage tolerance selection
  const handleToleranceSelect = (value) => {
    setSelectedTolerance(value);
  };

  const handleToleranceInputChange = (event) => {
    // Assuming the input value is a string like "0.5%"
    const value = event.target.value.replace('%', ''); // Remove '%' if present
    setSelectedTolerance(value);
  };

  const popHeadingStyle = {
    display: "flex",
    justifyContent: "flex-start",
  };

  const popHeadingTextStyle = {
    fontSize: "20px",
  };

  const slipCaptionStyle = {
    textAlign: "left",
  };

  const settingsTextStyle = {
    fontWeight: 500,
  };

  const questionStyle = {
    color: "var(--colorLightGrey)", // Replace with the actual color value if not defined in CSS
    marginLeft: "10px",
  };

  const tolerancePercentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "30px 0",
  };

  const toleranceSpanStyle = {
    padding: "10px 20px",
    color: "var(--colorOrangeBright)", // Replace with the actual color value if not defined in CSS
    fontWeight: 700,
    backgroundColor: "var(--colorTertiary)", // Replace with the actual color value if not defined in CSS
    borderRadius: "25px",
  };

  const deadlineStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "36px",
    padding: "10px 0",
  };

  const deadlineTxtStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const settingsInputDeadlineStyle = {
    width: "30px",
  };

  const expertModeStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    marginRight: "14px",
  };

  const containerStyle = {
    width: width,  // Use width from props
    height: height, // Use height from props
    overflow: 'auto',
  };  

  // Remaining styles (e.g., popBodyInputStyle, popBodyInputFocusStyle) can be defined here

  return (
    <div style={containerStyle}>
      <div className="popHeading" style={popHeadingStyle}>
        <h2 className="popHeadingText" style={popHeadingTextStyle}>Settings</h2>
      </div>
      <div className="popBody">
        <div className="slipCaption" style={slipCaptionStyle}>
          <span className="settingsTxt" style={settingsTextStyle}>
            Slippage Tolerance 
            <span className="question" style={questionStyle}>
              <AiOutlineQuestionCircle />
            </span>
          </span>
        </div>
        <div className="tolerancePercent" style={tolerancePercentStyle}>
          <button style={toleranceSpanStyle} onClick={() => handleToleranceSelect(0.1)}>0.1%</button>
          <button style={toleranceSpanStyle} onClick={() => handleToleranceSelect(0.5)}>0.5%</button>
          <button style={toleranceSpanStyle} onClick={() => handleToleranceSelect(1.5)}>1.5%</button>
          <Input 
            placeholder="0.50%" 
            numbersOnly={true} 
            value={selectedTolerance} 
            onChange={handleToleranceInputChange}
          />
        </div>
        <div className="deadline" style={deadlineStyle}>
          <div className="deadlineTxt" style={deadlineTxtStyle}>
            <span className="settingsTxt" style={settingsTextStyle}>
              Tx deadline (mins) 
            </span>
            <span className="question" style={questionStyle}>
              <AiOutlineQuestionCircle />
            </span>
          </div>
          <div className="settingsInputDeadline" style={settingsInputDeadlineStyle}>
            <Input placeholder="0" numbersOnly={true}/>
          </div>
        </div>
        <div className="expertMode" style={expertModeStyle}>
          <div className="deadlineTxt" style={deadlineTxtStyle}>
            <span className="settingsTxt" style={settingsTextStyle}>
              Expert Mode
            </span>
            <span className="question" style={questionStyle}>
              <AiOutlineQuestionCircle />
            </span>
          </div>
          <div className="toggleCustom">
            <Toggle id="toggle1" />
          </div>
        </div>
        <div className="expertMode" style={expertModeStyle}>
          <div className="deadlineTxt" style={deadlineTxtStyle}>
            <span className="settingsTxt" style={settingsTextStyle}>
              Disable Multihops
            </span>
            <span className="question" style={questionStyle}>
              <AiOutlineQuestionCircle />
            </span>
          </div>
          <div className="toggleCustom">
            <Toggle id="toggle2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
