import React, {useState} from "react";
import "./navbars.css";
import infoCircleOutlined from '@iconify-icons/ant-design/info-circle-outlined';
import {Icon,InlineIcon} from "@iconify/react";
import albumsOutline from '@iconify-icons/ion/albums-outline';
import phoneIcon from '@iconify-icons/carbon/phone';
import cardList from '@iconify-icons/bi/card-list';
import adminHome from "@iconify-icons/dashicons/admin-home";

const Sidebar = ({menuBtn}) => {

  const [navcolorHome,setNavcolorHome] = useState("navcolor")
  const [navcolorAbout,setNavcolorAbout] = useState("")
  const [navcolorServices,setNavcolorServices] = useState("")
  const [navcolorProjects,setNavcolorProjects] = useState("")
  const [navcolorContact,setNavcolorContact] = useState("")

  const changeNavColorHome = () => {
    setNavcolorHome("navcolor")
    setNavcolorAbout("")
    setNavcolorServices("")
    setNavcolorProjects("")
    setNavcolorContact("")
  }
  const changeNavColorAbout = () => {
    setNavcolorHome("")
    setNavcolorAbout("navcolor")
    setNavcolorServices("")
    setNavcolorProjects("")
    setNavcolorContact("")
  }
  const changeNavColorServices = () => {
    setNavcolorHome("")
    setNavcolorAbout("")
    setNavcolorServices("navcolor")
    setNavcolorProjects("")
    setNavcolorContact("")
  }
  const changeNavColorProjects = () => {
    setNavcolorHome("")
    setNavcolorAbout("")
    setNavcolorServices("")
    setNavcolorProjects("navcolor")
    setNavcolorContact("")
  }
  const changeNavColorContact = () => {
    setNavcolorHome("")
    setNavcolorAbout("")
    setNavcolorServices("")
    setNavcolorProjects("")
    setNavcolorContact("navcolor")
  }
  return (
    <header className="sidenavheader">

      <nav className={menuBtn? "navbar opacity" : "navbar"}>
        <ul>
          <li>
            <a onClick={() => changeNavColorHome()} className={navcolorHome} href="#home"><Icon className="icon-border" icon={adminHome} /> Home</a>
          </li>
          <li>
            <a onClick={() => changeNavColorAbout()} className={navcolorAbout} href="#about"><Icon className="icon-border"  icon={infoCircleOutlined} />About</a>
          </li>
          <li>
            <a onClick={() => changeNavColorServices()} className={navcolorServices} href="#services"><Icon className="icon-border"  icon={cardList} />Services</a>
          </li>
          <li>
            <a onClick={() => changeNavColorProjects()} className={navcolorProjects} href="#projects"><Icon className="icon-border"  icon={albumsOutline} />Projects</a>
          </li>
          <li>
            <a onClick={() => changeNavColorContact()} className={navcolorContact} href="#contact"><Icon className="icon-border"  icon={phoneIcon} />Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-bullets">
        <ul>
          <li>
            <a  href="#home" onClick={() => changeNavColorHome()} className={navcolorHome} ><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a  onClick={() => changeNavColorAbout()} className={navcolorAbout}  href="#about"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a onClick={() => changeNavColorServices()} className={navcolorServices}  href="#services"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a onClick={() => changeNavColorProjects()} className={navcolorProjects} href="#projects"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
          <li>
            <a onClick={() => changeNavColorContact()} className={navcolorContact} href="#contact"><i className="far fa-circle fa-xs bg"></i></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
