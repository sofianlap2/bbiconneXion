import React from 'react';
import "./navbars.css";
import {Link} from "react-router-dom"

const Topnavbar = ({menuBtn}) => {
    return (
        <div className={menuBtn? "topNavbarOpen" : "topNavbar"}>
            <nav>
                <ul>
                <li className="top-bar"><Link className="link" to="/">HOME</Link></li>
                    <li className="top-bar"><Link  className="link" to="/gallery">GALLERY</Link></li>
                    <li className="top-bar"><Link  className="link" to="/fashiontv">BLOG</Link></li>
                    <li className="top-bar"><a  className="link" href="#!">PRIVATE SPACE</a></li>
                    

                    <li className="hide-bar"><a href="#about">About</a></li>
                    <li className="hide-bar"><a href="#service">Services</a></li>
                    <li className="hide-bar"><a href="#projects">Projects</a></li>
                    <li className="hide-bar"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Topnavbar
