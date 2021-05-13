import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id="about"  >
        <div className="title-about-bg">
          <h5 className="title-about-bg-h5">ABOUT</h5>
        </div>
        <div className="about-wrapper">
        <Fade className="about-container">
          <h2 className="about-container-h2">Modernize your business</h2>
          <div className="about-p-container">
            <p className="about-container-p">
              In a world where marketing and advertising is now primarily
              digital. However, with print, radio, television, and other
              traditional marketing techniques maintaining some relevance among
              modern strategic marketing campaigns, explaining what makes our
              ‘digital agency’ different than others out there is something we
              think our readers should understand.
            </p>
          </div>
          </Fade>
        </div>
      </section>
    )
}

export default About
