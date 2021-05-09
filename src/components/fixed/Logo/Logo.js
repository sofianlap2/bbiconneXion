import React from 'react';
import './logo.css'
import logo from '../../../images/bbilogo.PNG';

const Logo = () => {
    return (
        <div className="logoandName">
            <img src={logo} alt="imglogo" className="logoImg"></img>
            <div className="name-flex">
                <span className="logo-span-1">bbi conneXion</span>
                <span className="logo-span-2">digital marketing</span>
            </div>
        </div>
    )
}

export default Logo
