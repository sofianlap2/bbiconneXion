import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logo1 from "../../../../images/webdes.png";
import logo2 from "../../../../images/wheel.png";
import logo3 from "../../../../images/analytics.png";
import logo4 from "../../../../images/concept.png";
import logo5 from "../../../../images/light.png";
import logo6 from "../../../../images/marketing.png";

const Services = () => {
    return (
        <section id="services"   >
        
      <div className="service-container">
        <Fade>
        <div className="title-service-bg">
          <h5 className="title-service-bg-h5">SERVICES</h5>
        </div>
          <div className="service-title">
            <p>
              We’ve got everything you need to launch and grow your business
            </p>
          </div>
          <div className="services-table">
            <div className="services-part1">
              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo1} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Web design</h4>
                  <p className="service-content-p">
                    We make sites that don't just look fantastic, but work
                    effortlessly and deliver business results. Web design trends
                    are ever-changing, evolving and adapting to the latest user
                    behaviors. Each year, marketers learn a little bit more
                    about how to design remarkable, highly functional websites
                    that service different types of businesses and
                    organizations.
                  </p>
                </div>
              </div>

              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo2} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Coding</h4>
                  <p className="service-content-p">
                    Discover a coding resource that meets your goals, operates
                    smoothly within your system, and satisfies your need for
                    dependable service.
                  </p>
                </div>
              </div>

              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo3} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Analytics</h4>
                  <p className="service-content-p">
                    By putting the science of numbers, data and analytical
                    discovery to work, we can find out if what customers think
                    or like. Customers are more empowered and connected than
                    ever. And becoming more so. The deeper your understanding of
                    customers' buying habits and lifestyle preferences, the more
                    accurate your predictions of future buying behaviors will
                    be. That’s the power of analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="services-part2">
              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo4} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Concept</h4>
                  <p className="service-content-p">
                    Just like your personal identity makes you uniquely you,
                    your brand identity is the special sauce of your business
                    that sets you apart from every other. We approach to
                    creativity helps brands thrive in this disruptive
                    environment.
                  </p>
                </div>
              </div>
              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo5} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Developement</h4>
                  <p className="service-content-p">
                    When a user visits your website or an online business
                    application, they are likely looking for additional
                    information about your brand, and/or products and services.
                    But what happens after they leave? If you let your users go
                    without a plan to acknowledge their visit and show
                    appreciation for their interest, they may forget about your
                    business entirely, and never return again.
                  </p>
                </div>
              </div>
              <div className="service-card-container">
                <div className="service-logo">
                  <img src={logo6} alt="logo" className="service-img"></img>
                </div>
                <div className="service-content">
                  <h4 className="service-content-h4">Marketing</h4>
                  <p className="service-content-p">
                    In today’s dynamic world, brands, like people, need to be
                    and act cool. Our job is to help you discover your core
                    reason for being and then nurture it with integrit it. High
                    quality content sits at the heart of our other digital
                    marketing services – SEO, PPC and marketing automation. Give
                    your visitors something useful and they will give bac.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
        <div id="prices">
        <div className="price-container">
          <Fade>
          <h2 className="price-container-title">Pricing</h2>
          <div className="cards-container">

          <div className="price-card">
              <div className="price-title1-cont">
              <h4 className="price-title price-title1-color">Lite</h4>
              </div>
              <div className="price-dollar price-dollar1">399.99$</div>
              <div className="price-features">
                <ul className="price-features-ul price-features-color1">
                  <li><i className="icon fa fa-star"></i>Full Website</li>
                  <li><i className="icon fa fa-check"></i>6 Months Future Updates</li>
                  <li><i className="fas fa-times"></i>Customer Support</li>
                  <li><i className="fas fa-times"></i>Cool Option</li>
                  <li><i className="fas fa-times"></i>Documentation</li>
                </ul>
              </div>
              <div className="price-footer price-footer-bg1">
                <a className="purchase-btn purchase-btn-bg1" href="#services">Purchase</a>
              </div>
            </div>


            <div className="price-card price-card2-color">
            <div className="price-title2-cont">
              <h4 className="price-title price-title2-color">Standard</h4>
              </div>
              <div className="price-dollar price-dollar2">699.99$</div>
              <div className="price-features">
                <ul className="price-features-ul price-features-color2">
                  <li><i className="icon fa fa-star"></i>Full Website</li>
                  <li><i className="icon fa fa-star"></i>1 year Future Updates</li>
                  <li><i className="icon fa fa-check"></i>Customer Support</li>
                  <li><i className="icon fa fa-check"></i>Cool Option</li>
                  <li><i className="icon fa fa-check"></i>Documentation</li>
                </ul>
              </div>
              <div className="price-footer price-footer-bg2">
                <a className="purchase-btn purchase-btn-bg2" href="#!">Purchase</a>
              </div>
            </div>


            <div className="price-card">
            <div className="price-title-cont">
              <h4 className="price-title price-title3-color">Ultimate</h4>
              </div>
              <div className="price-dollar price-dollar3">2499.99$</div>
              <div className="price-features">
                <ul className="price-features-ul price-features-color3">
                  <li><i className="icon fa fa-star"></i>Full Website</li>
                  <li><i className="icon fa fa-star"></i>Lifetime Future Updates</li>
                  <li><i className="icon fa fa-star"></i>Customer Support</li>
                  <li><i className="icon fa fa-star"></i>Cool Option</li>
                  <li><i className="icon fa fa-check"></i>Documentation</li>
                </ul>
              </div>
              <div className="price-footer price-footer-bg3">
                <a className="purchase-btn purchase-btn-bg3" href="#!">Suscribe</a>
              </div>
            </div>
            
          </div>
          </Fade>
        </div>
      </div>
      
      </section>
    )
}

export default Services
