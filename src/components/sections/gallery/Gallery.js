import React , {useState} from 'react'
import "./gallery.css";
import Logo from "../../fixed/Logo/Logo";
import HamburgerNav from "../../fixed/hamburger/HamburgerNav"
import SideNavbar from "../../navbars/Sidebar"
import Copyright from "../../fixed/Copyright/Copyright"
import Socialicons from "../../fixed/Socialicons/Socialicons";
import Slider from "../slider/Slider"
import TopNavbar from '../../navbars/Topnavbar';

const Gallery = ({menuBtn, setMenuBtn}) => {
    
    return (
        <div className={menuBtn? "gallery-containeractive" : "gallery-container"}>
            <TopNavbar menuBtn={menuBtn} setMenuBtn={setMenuBtn}  />
            <Logo />
            <HamburgerNav menuBtn={menuBtn} setMenuBtn={setMenuBtn} />
            
            <Copyright />
            <Socialicons />
            <div className="slider-carousel">
            {
                menuBtn?   "<div></div>" : <Slider />
            }
            
            </div>
        </div>
    )
}

export default Gallery
