import React, {useState} from "react";
import "./navbars.css";
import infoCircleOutlined from '@iconify-icons/ant-design/info-circle-outlined';
import {Icon,InlineIcon} from "@iconify/react";
import albumsOutline from '@iconify-icons/ion/albums-outline';
import phoneIcon from '@iconify-icons/carbon/phone';
import cardList from '@iconify-icons/bi/card-list';
import adminHome from "@iconify-icons/dashicons/admin-home";

const Sidebar = ({menuBtn, inView, inView2, inView3 , inView4 , inView5}) => {

  return (
    <header className="sidenavheader">

      <nav className={menuBtn? "navbar opacity" : "navbar"}>
        <ul>
          <li>
            <a className={inView? "show" : "hide"} href="#home"><Icon className="icon-border" icon={adminHome} /> Home</a>
          </li>
          <li>
            <a className={inView2? "show" : "hide"} href="#about"><Icon className="icon-border"  icon={infoCircleOutlined} />About</a>
          </li>
          <li>
            <a className={inView3? "show" : "hide"}  href="#services"><Icon className="icon-border"  icon={cardList} />Services</a>
          </li>
          <li>
            <a  className={inView4? "show" : "hide"} href="#projects"><Icon className="icon-border"  icon={albumsOutline} />Projects</a>
          </li>
          <li>
            <a className={inView5? "show" : "hide"}  href="#contact"><Icon className="icon-border"  icon={phoneIcon} />Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-bullets">
        <ul>
          <li>
            <a className={inView? "show" : "hide"}  href="#home"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a className={inView2? "show" : "hide"} href="#about"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a className={inView3? "show" : "hide"} href="#services"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a className={inView4? "show" : "hide"} href="#projects"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a className={inView5? "show" : "hide"} href="#contact"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
