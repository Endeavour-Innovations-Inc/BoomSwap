import React from "react";
import "./Navbar.css"
import logoImg from "../../assets/images/navImageIcon.png"

// import {AiTwotoneSetting} from 'react-icons'
import {AiTwotoneSetting} from "react-icons/ai"
import {TbWorld} from "react-icons/tb"
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const [hoveredLink, setHoveredLink] = React.useState('');
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, setDropdownOpen]);
    
    return (
        <>
        <nav>
            <div className="logoItems">
                <img src={logoImg} alt="" />
                <div className="navLink" onMouseEnter={(e) => {
                    const rect = e.target.getBoundingClientRect()
                    const mouseX = e.clientX;
                    const mouseY = e.clientY
                    const positionX = mouseX - rect.left
                    const positionY = mouseY - rect.top
                    setPosition({x: positionX, y: positionY})                
                    setDropdownOpen(true); setHoveredLink("Trade")}}>
                    <Link to="">
                        Trade
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Earn")}}>
                    <Link to="">
                        Earn
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Defi")}}>
                    <Link to="">
                        Defi
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Launch")}}>
                    <Link to="">
                        Launch
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Games")}}>
                    <Link to="">
                        Games
                    </Link>
                </div>
                {/* <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Trade")}}>
                    <Link to="">
                        <svg viewBox="0 0 24 24" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd cFuoVQ"><path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
                    </Link>
                </div> */}
            </div>
            <div>
                <ul id="navbar">
                    
                    <li>
                        <a className="navIcons world" href=""><TbWorld/></a>
                    </li>
                    <li>
                        <a className="navIcons settings" href=""><AiTwotoneSetting/></a>
                    </li>
                    <li>
                        <a className="navText" href="">connect to wallet</a>
                    </li>
                </ul>
            </div>
        <Dropdown ref={dropdownRef} open={dropdownOpen}
         setOpen={setDropdownOpen}
         hoveredLink={hoveredLink} position={position}
         />

    
        </nav>
        </>
    )
}

export default Navbar