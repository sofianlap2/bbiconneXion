import React, { useState } from "react";
import Sections from "./sections/Sections";
import "../App.css";
import Logo from "./fixed/Logo/Logo";
import Copyright from "./fixed/Copyright/Copyright";
import Hamburger from "./fixed/hamburger/HamburgerNav";
import Socialicons from "./fixed/Socialicons/Socialicons";
import Sidebar from "./navbars/Sidebar";
import Topnavbar from "./navbars/Topnavbar";

const Body = ({ menuBtn, setMenuBtn }) => {
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);
  const [inView4, setInView4] = useState(false);
  const [inView5, setInView5] = useState(false);

  return (
    <div className="body-container">
      <Sidebar
        inView4={inView4}
        inView5={inView5}
        inView3={inView3}
        inView2={inView2}
        inView={inView}
        menuBtn={menuBtn}
      />
      <Topnavbar menuBtn={menuBtn} />
      <Logo />
      <Copyright />
      <Hamburger menuBtn={menuBtn} setMenuBtn={setMenuBtn} />
      <Socialicons />
      <Sections
        setInView={setInView}
        inView={inView}
        menuBtn={menuBtn}
        inView2={inView2}
        inView3={inView3}
        setInView3={setInView3}
        setInView2={setInView2}
        inView4={inView4}
        setInView4={setInView4}
        inView5={inView5}
        setInView5={setInView5}
      />
    </div>
  );
};

export default Body;
