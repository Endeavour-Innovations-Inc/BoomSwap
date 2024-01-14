import React from "react";
import "./Lcard.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineQuestionCircle, AiOutlineDown} from "react-icons/ai"

import Popup from "../Popup/Popup";
import { useState } from "react";
import SettingsPopup from "../Card/components/SettingsPopup"; // Adjust the path according to your project structure

const Lcard = () => {
    const [buttonPopUp2, setButtonPopUp2] = useState(false)

    return (
        <>
        <div className="lcard">
            <div className="cardHeadingPrimary">
                        <div className="Primary1">
                            <h2>Your Liquidity</h2>
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
                        </div>
                        <div className="cardHeadingSecondary">
                            <div className="secondaryText">
                                Remove Liquidity to receive tokens back
                            </div>
                        </div>
        </div>
        </>
    )
}

export default Lcard