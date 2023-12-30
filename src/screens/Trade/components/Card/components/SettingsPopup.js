import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Input from '../../Input/Input'; // Adjust the path as needed
import Toggle from "../../Toggle/Toggle"; // Adjust the path as needed

const SettingsPopup = () => {
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

  // Remaining styles (e.g., popBodyInputStyle, popBodyInputFocusStyle) can be defined here

  return (
    <div>
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
          <span style={toleranceSpanStyle}>0.1%</span>
          <span style={toleranceSpanStyle}>0.5%</span>
          <span style={toleranceSpanStyle}>1.5%</span>
          <Input placeholder="0.50" numbersOnly={true} />
          <span>%</span>
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
            <Input />
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
