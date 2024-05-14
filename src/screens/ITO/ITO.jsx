import React, { useState } from "react";
import "./style.css";
import SlideSwitch from "./components/SlideSwitch";
import CommonFooter from "../CommonComp/CommonFooter";
import CommonHeader from "../CommonComp/CommonHeader";
import ITOcard from "./components/Card/ITOcard";
import Icard from "./components/Icard/Icard";

export const ITO = () => {
  const [activeView, setActiveView] = useState('latest');

  return (
    <div className="converter">
      <div className="div">
        <CommonHeader />
        <h3 className="textHeading3">Coming Soon!</h3>
        {/*
        <div style={{ marginBottom: '20px' }}>
          <SlideSwitch active={activeView} onToggle={setActiveView} />
        </div>
        
        {activeView === 'latest' ? 
          <ITOcard /> : 
          <>
            <Icard />
            <Icard /> 
          </>
        }
        */}{/* Add more Icard components as needed */}
        <CommonFooter />
      </div>
    </div>
  );
};
