import React from "react";
import Input from '../../Input/Input'; // Adjust the path as needed
import croImg from "../../images/cro.png";
import TokenView from "./TokenView";

export const SelectTokenPopup = () => {
  const popHeadingStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
  };

  const popHeadingTextStyle = {
    fontSize: '20px',
  };

  const popBodyStyle = {
    textAlign: 'left',
  };

  // Adjusting the style for vertical layout with scrollable feature
  const tokensStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '30px 0',
    maxHeight: '400px', // Set a maximum height for the container
    overflowY: 'auto', // Enable vertical scrolling
  };

  return (
    <>
      <div style={popHeadingStyle} className="popHeading">
        <h2 style={popHeadingTextStyle} className="popHeadingText">Select a Token</h2>
      </div>
      <div className="popBody" style={popBodyStyle}>
        <Input 
          placeholder="Search name or paste address"
          style={{ textAlign: 'left' }}
        />
        <div style={tokensStyle} className="tokens">
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000009" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000009" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000009" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000010" />
          <TokenView croImg={croImg} price="0.000009" />
          <TokenView croImg={croImg} price="0.000010" />
          {/* Add more tokens as needed */}
        </div>
      </div>
    </>
  );
};

export default SelectTokenPopup;
