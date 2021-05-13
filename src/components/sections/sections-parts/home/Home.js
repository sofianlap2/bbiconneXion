import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <section id="home" >
     
        <div className="title-bg">
          <h5 className="title-bg-h5">HELLO</h5>
        </div>
        <div className="home-container">
        
        
        <Fade>
          <h2 className="home-container-h2">
            <a href="#!">W</a>elcome to bbi conne<a href="#!">X</a>ion
          </h2>
          
          <h4 className="home-container-h4">
            We are a creative group of people <br />
            who design influential <br />
            brands and digital experiences.
          </h4>
          <div className="btn-home">
            <a href="#about" className="btn-getStarted">
              Get Started
            </a>
          </div>
          
          </Fade>
        </div>
        
      </section>
    )
}

export default Home
