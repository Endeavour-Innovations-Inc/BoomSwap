import React, { useState } from "react";
import "./Card.css"
import tokenPlaceholder from "../../../../../dist/img/test.png"
import Button from "../Button/Button";
import RyoshiTales from "../RyoshiTales/RyoshiTales";

const Card = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
        <div className="card">            
            <div>
            <RyoshiTales
                    text="Boom Swap"
                    toggleCollapse={toggleCollapse}
                />
            </div>
            {!isCollapsed && (
            <div className="cardBody">
                <div>
                    <p className="cardBodyP">
                        The First Mobile Resource Management Game on Cronos by Ebisu’s Bay
                    </p>
                </div>
                
                <div className="imgTokenPlaceholder">
                    <img className="tokenPlaceholderImg"
                     src={tokenPlaceholder} alt="" srcset="" />
                </div>
                <div>
                    <p className="cardBodyP">
                        You did not participate in this sale!
                    </p>
                </div>
                <div>
                    <Button 
                        text="Connect to wallet"
                    />
                </div>
                <div className="cta">
                    <div className="ctaContainer">
                        <div className="ctaText">
                            Additional fee:
                        </div>
                        <div className="ctaNumber">
                            0%
                        </div>
                    </div>
                    <div className="ctaContainer">
                        <div className="ctaText">
                            Total committed:
                        </div>
                        <div className="ctaNumber">
                            ~$85,876 (48.71%)
                        </div>
                    </div>
                    <div className="ctaContainer">
                        <div className="ctaText">
                            Funds to raise:
                        </div>
                        <div className="ctaNumber">
                            $300,000 in MMF/CRO LP
                        </div>
                    </div>
                    <div className="ctaContainer">
                        <div className="ctaText">
                            Price per KOI:
                        </div>
                        <div className="ctaNumber">
                            $0.001
                        </div>
                    </div>
                </div>
                <div className="more">
                    <div className="moreContainer">
                        <a href="">Learn more about Ryoshi’s Tales (KOI)
                        <span>
                            <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cEeQid"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                            </span></a>
                    </div>
                    <div className="moreContainer">
                        <a href="">Learn more about Ryoshi’s Tales (KOI)
                        <span>
                            <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cEeQid"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                            </span></a>
                    </div>
                </div>
            </div>
            )}
            <div className="cardClose">
                Close 

                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd knwbmo"><path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path></svg>
            </div>
        </div>
        </>
    )
}

export default Card