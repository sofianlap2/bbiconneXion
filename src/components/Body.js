import React,{useState} from 'react';
import Sections from "./sections/Sections"
import '../App.css';
import Logo from "./fixed/Logo/Logo";
import Copyright from "./fixed/Copyright/Copyright";
import Hamburger from "./fixed/hamburger/HamburgerNav";
import Socialicons from "./fixed/Socialicons/Socialicons";
import Sidebar from "./navbars/Sidebar";
import Topnavbar from "./navbars/Topnavbar"


const Body = ({menuBtn, setMenuBtn}) => {
   
    return (
        <div className="body-container">
            <Sidebar menuBtn={menuBtn}/>
            <Topnavbar menuBtn={menuBtn}/>
            <Logo/>
            <Copyright/>
            <Hamburger menuBtn={menuBtn} setMenuBtn={setMenuBtn}/>
            <Socialicons/>
            <Sections menuBtn={menuBtn}/>
        </div>
    )
}

export default Body
