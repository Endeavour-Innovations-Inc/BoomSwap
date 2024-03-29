import React from "react";
import Input from '../../Input/Input'; // Adjust the path as needed
import croImg from "../../images/cro.png";
import TokenView from "./TokenView";
import { useAppContext } from '../../../../Controller/AppContext'; // Adjust the import path as needed

export const SelectTokenPopup = ({ isTokenA }) => {
  const { selectedTokenA, setSelectedTokenA, selectedTokenB, setSelectedTokenB } = useAppContext();

  const handleTokenSelect = (tokenData) => {
    console.log("Selecting token:", tokenData);
    if (isTokenA) {
      if (tokenData.name === selectedTokenB?.name) {
        setSelectedTokenB(null); // Set the other token to null if they are the same
      }
      setSelectedTokenA(tokenData);
      console.log("Token A Set:", tokenData);
    } else {
      if (tokenData.name === selectedTokenA?.name) {
        setSelectedTokenA(null); // Set the other token to null if they are the same
      }
      setSelectedTokenB(tokenData);
      console.log("Token B Set:", tokenData);
    }
  };

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

  const tokensStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '30px 0',
    maxHeight: '400px',
    overflowY: 'auto',
  };

  // Sample token data (you should replace this with your actual token data)
  const tokens = [
    { name: 'Token1', image: croImg, price: '0.000010' },
    { name: 'Token2', image: croImg, price: '0.000020' },
    // Add more tokens as needed
  ];

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
        {tokens.map((token, index) => (
          <TokenView 
            key={index}
            name={token.name}
            croImg={token.image}
            price={token.price}
            onClick={() => handleTokenSelect(token)}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default SelectTokenPopup;
