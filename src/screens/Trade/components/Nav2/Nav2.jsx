import React from "react";
import Button from "../Button/Button";

const Nav2 = () => {
    // Inline styles
    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--colorPrimary)',
        padding: '5px 40px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.06)',
        height: '56px',
    };

    const logoStyle = {
        width: '150px',
        height: '150px',
    };

    const navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const navbarItemStyle = {
        listStyle: 'none',
        padding: '0 20px',
        position: 'relative',
    };

    const navbarLinkStyle = {
        textDecoration: 'none',
        fontSize: '1.3rem',
        fontWeight: '600',
        color: 'var(--white)',
    };

    const navIconStyle = {
        color: 'var(--colorLightGrey)',
    };

    const navTextStyle = {
        backgroundColor: 'var(--colorOrangeBright)',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '1rem',
        fontWeight: '800',
    };

    const buttonStyle = {
        backgroundColor: 'var(--colorYellow)',
        color: 'var(--colorDark)',
        borderRadius: '0',
        padding: '10px 20px',
        fontWeight: '600',
        cursor: 'pointer',
    };

    return (
        <>
            <nav style={navStyle}>
                <div className="logo2" style={logoStyle}>
                    {/* SVG content */}
                </div>
                <div>
                    <ul id="navbar2" style={navbarStyle}>
                        <li style={navbarItemStyle}>
                            <Button 
                                name="Enter App"
                                url="/calculator" 
                                style={buttonStyle}
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav2;
