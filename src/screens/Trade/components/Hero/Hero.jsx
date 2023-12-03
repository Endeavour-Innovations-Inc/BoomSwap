import React from "react";
import Nav2 from "../Nav2/Nav2";
import HeroImg from "../../assets/images/hero-background.png";
import Button from "../Button/Button";

const Hero = () => {
    const heroTextStyle = {
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const heroTextBodyStyle = {
        maxWidth: '580px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
    };

    const heroH1Style = {
        padding: 0,
        margin: 0,
        fontWeight: '700',
        fontSize: '45px',
    };

    const heroPStyle = {
        fontSize: '18px',
    };

    const twinButtonsStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
    };

    const heroB1Style = {
        backgroundColor: 'var(--colorYellow)',
        color: 'var(--colorDark)',
        borderRadius: '0',
        padding: '15px 35px',
        fontWeight: '600',
        cursor: 'pointer',
    };

    const heroB2Style = {
        backgroundColor: 'transparent',
        border: '2px solid var(--colorYellow)',
        color: 'var(--colorYellow)',
        borderRadius: '0',
        padding: '15px 35px',
        fontWeight: '600',
        cursor: 'pointer',
    };

    const heroSvgStyle = {
        width: '114px',
    };

    const blockStyle = {
        display: 'block',
    };

    return (
        <>
            <Nav2 />
            <div style={{
                backgroundImage: `url(${HeroImg})`,
                height: "100vh",
                ...heroTextStyle
            }}>
                <div style={heroTextBodyStyle}>
                    <h1 style={heroH1Style}>
                        <span style={blockStyle}>A tectonic shift in</span>
                        <span style={blockStyle}>lending & borrowing</span>
                    </h1>
                    <p style={heroPStyle}>
                        Tectonic is a cross-chain money market for earning passive yield and accessing instant backed loans
                    </p>
                    <div id="twinButtons" style={twinButtonsStyle}>
                        <div className="heroB1">
                            <Button name="Enter App" url="/calculator" style={heroB1Style} />
                        </div>
                        <div className="heroB2">
                            <Button name="Whitepaper" style={heroB2Style} />
                        </div>
                    </div>
                    <div className="heroSvg" style={heroSvgStyle}>
                        {/* SVG content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
