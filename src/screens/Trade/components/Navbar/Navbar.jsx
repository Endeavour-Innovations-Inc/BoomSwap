import React from "react";
import logoImg from "../../assets/images/logo.png";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
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
        height: '40px',
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

    return (
        <>
            <nav style={navStyle}>
                <div className="logo">
                    <img src={logoImg} alt="" style={logoStyle} />
                </div>
                <div>
                    <ul id="navbar" style={navbarStyle}>
                        <li style={navbarItemStyle}>
                            <a className="navIcons world" href="" style={navIconStyle}><TbWorld/></a>
                        </li>
                        <li style={navbarItemStyle}>
                            <a className="navIcons settings" href="" style={navIconStyle}><AiTwotoneSetting/></a>
                        </li>
                        <li style={navbarItemStyle}>
                            <a className="navText" href="" style={navTextStyle}>connect to wallet</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
