import React, { useState, useRef } from "react";
import axios from "axios";
import "./sections.css";
import { Fade } from "react-awesome-reveal";

import { InView } from "react-intersection-observer";

import Slider from "./slider/Slider";

import Home from "./sections-parts/home/Home";
import About from "./sections-parts/about/About";
import Services from "./sections-parts/services/Services";
import Contact from "./sections-parts/contact/Contact";

const Sections = ({
  menuBtn,
  setInView,
  setInView2,
  setInView3,
  setInView4,
  setInView5,
}) => {
  const ref = useRef();

  return (
    <div
      className={menuBtn ? "sections-container opacity" : "sections-container"}
    >
      <InView as="section" threshold="0.5" onChange={(inView, entry) => setInView(inView)}>
        <Home />
      </InView>
      <InView as="section" threshold="0.5"  onChange={(inView2, entry) => setInView2(inView2)}>
        <About />
      </InView>
      <InView as="section"  threshold="0.5" onChange={(inView3, entry) => setInView3(inView3)}>
        <Services />
      </InView>

      <InView as="section" threshold="0.5" onChange={(inView4, entry) => setInView4(inView4)}>
        <section id="projects">
          <Slider />
        </section>
      </InView>

      <InView as="section" threshold="0.5" onChange={(inView5, entry) => setInView5(inView5)}>
        <Contact />
      </InView>
    </div>
  );
};

export default Sections;
