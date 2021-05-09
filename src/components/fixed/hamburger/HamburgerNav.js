import React from 'react';
import './Hamburger.css'

const HamburgerNav = ({menuBtn, setMenuBtn}) => {
    
    return (
        <div onClick={()=>setMenuBtn(!menuBtn)} className={menuBtn? 'menu-btnopen' : 'menu-btn'}>
            <div className="menu-btn__burger"></div>
        </div>
    )
}

export default HamburgerNav
