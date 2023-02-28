import React, { useState } from 'react';
import "../styles/css/Navbar.css"
import logo from "../images/js.png";
const Navbar = () => {
    const[show,setShow]=useState(false);
    return (
        <div className='navContainer'> 
            <img src={logo} alt='logo'/>
            <ul className={show?'navList2':'navList'}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>About us</a></li>
            </ul>
            <div className={show?'hamburgerMenu2':'hamburgerMenu'} onClick={()=>setShow(!show)}>
                <span id='s1'></span>
                <span id='s2'></span>
                <span id='s3'></span>
            </div>
        </div>
    );
};
export default Navbar;