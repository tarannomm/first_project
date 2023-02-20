import React from 'react';
import "../styles/css/Navbar.css"
import logo from "../images/js.png";
const Navbar = () => {
    return (
        <div className='navContainer'>
            <ul className='navList'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>About us</a></li>
            </ul>
            <img src={logo} />
        </div>
    );
};

export default Navbar;