import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CommonFooter from "../CommonComp/CommonFooter"; // Adjust the path according to your project structure
import CommonHeader from "../CommonComp/CommonHeader"; // Adjust the path according to your project structure
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Collapsible from "./components/Collapsible/Collapsible";
import imgCollapse from "../../../static/img/img-collapse.png";
import imgCollapse2 from "../../../static/img/image-collapse-2.png";

// A recycleable component, SwapView defines the difference
export const Earn = () => {
  const times = [1, 2, 3, 4]
  return (
    <div className="converter">
      <div className="div">
        <CommonHeader /> {/* Header */}

        <Hero /> {/* Upper Element */}

        <div id="parentCont" className="parentContainer">
            {
                times.map((_, index) => {                    
            return(
                <Collapsible key={index}                
            headerContent={
                <div className="series flex">
                    <div className="imgTokenName flex gp10">
                        <div className="imagesTokens">
                            <div className="smallImageTokens">
                                <img src={imgCollapse} alt="" className="imgToken imgSmall" />
                            </div>
                            <img src={imgCollapse2} alt="" className="imgToken imgBig" />                            
                        </div>                        
                        <h3 className="textHeading3">
                            MMF-CRO
                        </h3>
                    </div>
                    <div className="earned flex column gp10">
                        <span className="earnText">
                            Earned
                        </span>
                        <span className="earnAmmount">
                            0
                        </span>
                    </div>
                    <div className="earnPer flex column gp10">
                        <span className="earnText start">
                            APR
                        </span>
                        <div className="ammountSVG flex gp30">
                            <span className="earnAmmount">
                                86.73%
                            </span>
                            <svg className="svgCollapse" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                        </div>                                                
                    </div>
                    <div className="liquidity flex column gp10">
                        <span className="earnText start">
                            Liquidity
                        </span>
                        <div className="lA flex gp30">
                            <span className="liquidAmt">
                                $4000
                            </span>
                            <svg className="svgCollapse" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                        </div>
                    </div>
                    <div className="liquidity flex column gp10">
                        <span className="earnText start">
                            Multiplier
                        </span>
                        <div className="lA flex gp30">
                            <span className="liquidAmt">
                                40%
                            </span>
                            <svg className="svgCollapse" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
                        </div>
                    </div>
                </div>
            }
            >
                <div className="contentWallet flex column">
                    <div className="walletNone flex">
                        <div className="wallet1">
                            <div className="wallet1LinksCore  flex column gp20">
                                <div className="LinksOnly ">
                                    <div className="LinksOnly1 ">
                                        
                                        <Link to="#">
                                        Get MMF-CRO LP
                                        </Link>
                                        
                                        
                                        <svg  xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cEeQid"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                                        
                                        
                                    </div>
                                    <div className="LinksOnly1">
                                        <Link to="#">
                                        Get MMF-CRO LP
                                        </Link>
                                        <svg  xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cEeQid"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                                    </div>
                                    <div className="LinksOnly1">
                                        <Link to="#">
                                        Get MMF-CRO LP
                                        </Link>
                                        <svg  xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cEeQid"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                                    </div>
                                </div>
                                <div className="core">
                                    <span>
                                        <svg viewBox="0 0 24 24" width="18px" color="secondary" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd iykXYi"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>
                                        core
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="wallets flex gp30">
                            <div className="wallet2 roundBox flex ">
                                <div className="mmf flex column gp20">
                                    <div className="mmfTxt">
                                        <h4 className="textHeading4">MMF Earned</h4>
                                    </div>
                                    <div className="mmfAmt">
                                        <h4 className="textHeading4">0</h4>
                                    </div>
                                </div>
                                <div className="mmfBtn">
                                    <Button isDisabled={true} name="Harvest" />
                                </div>
                            </div>
                            <div className="wallet3 roundBox flex column">
                                <h4 className="textHeading4">START FARMING</h4>
                                <Button isDisabled={false} name="connect wallet"/>
                            </div>
                        </div>
                    </div>
                    <div className="earningsWallet flex">
                        <div className="earningsText flex column gp20">
                            <span className="span1Earn">Stake Mad Meerkats to increase MMF Earnings 🚀
                            </span>
                            <span className="span2Earn span2C">CURRENT BOOST</span>
                            <span className="span2Earn span3C">+0%</span>
                        </div>
                        <div className="boxes flex gp30">
                            <div className="boxOuter flex">
                                <div className="box"></div>
                            </div>
                            <div className="boxOuter flex">
                                <div className="box"></div>
                            </div>
                            <div className="boxOuter flex">
                                <div className="box"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </Collapsible>
            )
                })
            }
        </div>

        <CommonFooter /> {/* Footer */}
      </div>
    </div>
  );
};
