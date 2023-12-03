import React from "react";
import "./Card.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineQuestionCircle, AiOutlineDown} from "react-icons/ai"

import Input from "../Input/Input";
import Button from "../Button/Button";
import logoImg from "../images/logo.png"
import croImg from "../images/cro.png"
import Popup from "../Popup/Popup";
import Toggle from "../Toggle/Toggle";
import { useState } from "react";
const Card = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [buttonPopUp2, setButtonPopUp2] = useState(false)
    const [buttonPopUp3, setButtonPopUp3] = useState(false)
    return (
        <>
        <div className="card">
            <div className="cardHeading">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>BoomSwap</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting
                        onClick={() => {setButtonPopUp2(true)}}
                         />
                        <IoRefreshSharp
                        
                         />
                    </div>
                    <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                    <div className="popHeading">
                        <h2 className="popHeadingText">Settings</h2>
                    </div>
                    <div className="popBody">
                        <div className="slipCaption">
                            <span className="settingsTxt">Slippage Tolerance 
                                <span className="question"><AiOutlineQuestionCircle /></span></span>
                        </div>
                        <div className="tolerancePercent">
                            <span>0.1%</span>
                            <span>0.5%</span>
                            <span>1.5%</span>
                            <Input placeholder="0.50" numbersOnly={true} />
                            <span>%</span>
                        </div>
                        <div className="deadline">
                            <div className="deadlineTxt">
                            <span className="settingsTxt">
                                Tx deadline (mins) 
                                
                            </span>
                            <span className="question"><AiOutlineQuestionCircle /></span>
                            </div>
                            <div className="settingsInputDeadline">
                                <Input />
                            </div>
                            
                        </div>
                        <div className="expertMode">
                        <div className="deadlineTxt">
                            <span className="settingsTxt">
                            Expert Mode
                                
                            </span>
                            <span className="question"><AiOutlineQuestionCircle /></span>
                            </div>
                            <div className="toggleCustom">
                            <Toggle id="toggle1" />
                            </div>
                        </div>
                        <div className="expertMode">
                        <div className="deadlineTxt">
                            <span className="settingsTxt">
                            Disable Multihops
                                
                            </span>
                            <span className="question"><AiOutlineQuestionCircle /></span>
                            </div>
                            <div className="toggleCustom">
                            <Toggle id="toggle2" />
                            </div>
                        </div>
                    </div>
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
                                <img src={logoImg} alt="" />
                                <span>0.99393</span>
                            </div>                
                            
                            <div className="swapName">
                                TROLL
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
                <Input
                placeholder="0.0"
                numbersOnly={true}
                 />

                <div className="slipTolerance">
                    <div className="slipText">
                        <span>
                            Slippage Tolerance
                        </span>
                    </div>
                    <div className="slipPercent">
                        <span >
                            0.5%
                        </span>
                    </div>
                </div>
                <Button 
                name="swap"
                onClick={() => {setButtonPopUp3(true)}}
                />
            </div>
        </div>
        </>
    )
}

export default Card