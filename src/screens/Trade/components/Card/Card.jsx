import React from "react";
import "./Card.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineQuestionCircle, AiOutlineDown} from "react-icons/ai"

import Input from "../Input/Input";
import Button from "../Button/Button";
import croImg from "../images/cro.png"
import Popup from "../Popup/Popup";
import Toggle from "../Toggle/Toggle";
import { useState } from "react";

import SlippageTolerance from "./components/SlippageTolerance"; // Adjust the path according to your project structure
import SettingsPopup from "./components/SettingsPopup"; // Adjust the path according to your project structure

const Card = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [buttonPopUp2, setButtonPopUp2] = useState(false)
    const [buttonPopUp3, setButtonPopUp3] = useState(false)
    return (
        <>
        <div className="card">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>BoomSwap</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting
                        onClick={() => {setButtonPopUp2(true)}}
                        />
                        <IoRefreshSharp/>
                    </div>
                    {/* Settings window is defined here */}
                    <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                        <SettingsPopup />
                    </Popup>
                <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <div className="popHeading">
                        <h2 className="popHeadingText">Select a Token</h2>
                    </div>
                    <div className="popBody">
                        <Input 
                            placeholder="Search name ot paste address"
                        />
                        <div className="tokens">
                            <div className="tokenImgName">
                                <div className="tokenImg">
                                    <img src={croImg} alt="" />
                                </div>
                                <div className="tokenName">
                                    <div className="tokenNonFade">
                                        <span>
                                            CRO
                                        </span>
                                    </div>
                                    <div className="tokenFade">
                                        <span>
                                            CRO
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tokenPrice">
                                <span>
                                    0.000009
                                </span>
                            </div>
                        </div>
                    </div>
                </Popup>
                <Popup trigger={buttonPopUp3} setTrigger={setButtonPopUp3}>
                    <div className="popHeading">
                        <h2 className="popHeadingText">Confirm Swap</h2>
                    </div>
                    <div className="popBody">
                        <div className="swap">
                            
                            <div className="priceImg">
                                <img src={croImg} alt="" />
                                <span>0.99393</span>
                            </div>                
                            
                            <div className="swapName">
                                CRO
                            </div>
                        </div>  
                        <div className="arrDown">
                            <AiOutlineArrowDown />
                        </div>     
                        <div className="swap">
                            
                            <div className="priceImg">
                                <img src={croImg} alt="" />
                                <span>0.99393</span>
                            </div>                
                            
                            <div className="swapName">
                                CRO
                            </div>
                        </div> 
                        <Button 
                        name="confirm swap"
                        />               
                    </div>
                </Popup>
                </div>
                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Trade tokens in an instant
                    </div>
                </div>
                <div className="label" onClick={() => {setButtonPopUp(true)}}>
                <label htmlFor="inpuText">Select a currency</label>
                <AiOutlineDown />
            </div>
                <Input 
                placeholder="0.0"
                numbersOnly={true}
                />

                <span className="arrow">
                    <AiOutlineArrowDown />
                </span>

                <div className="label" onClick={() => {setButtonPopUp(true)}}>
                <label htmlFor="inpuText">Select a currency</label>
                <AiOutlineDown />
            </div>
                <Input placeholder="0.0" numbersOnly={true}/>
                <SlippageTolerance />
                <Button name="swap" onClick={() => {setButtonPopUp3(true)}}/>
            </div>
        </>
    )
}

export default Card