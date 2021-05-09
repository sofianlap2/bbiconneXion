import React,{useState} from "react";
import "./fashion.css";
import Logo from "../../fixed/Logo/Logo";
import img from "../../../images/fashiontv.jpg";
import HamburgerNav from "../../fixed/hamburger/HamburgerNav";
import TopNavbar from "../../navbars/Topnavbar";

const Fashion = ({menuBtn, setMenuBtn}) => {
    
  return (
    <div className="blog-container">
         <TopNavbar menuBtn={menuBtn} setMenuBtn={setMenuBtn}  />
      <div className="section-cover">
        <div className="logo-blog">
          <Logo />
        </div>
        <div className="cover-content">
          <div className="title-desc">
            <h2 className="blog-title">FashionTV</h2>
            <p className="blog-brand">Branding/Event</p>
          </div>
        </div>
      </div>
      <div className="section-wrapper">
          <div>
              <HamburgerNav menuBtn={menuBtn} setMenuBtn={setMenuBtn} />
          </div>
        <div className={menuBtn? "fashion-containeractive" : "fashion-container"}>
          <div className="fashion-p1">
            <div className="fashion-p1-intro">
              <h2 className="fashion-p1-title">
                Introduction{" "}
                <a href="https://en.wikipedia.org/wiki/FashionTV">FashionTV</a>
              </h2>
              <p className="fashion-p1-description">
                Since its inception in 1997,{" "}
                <a href="https://www.fashiontv.com">FashionTV</a>
                has been setting the highest standards for excellence in fashion
                and lifestyle broadcasting. The only TV equivalent to fashion
                print media appealing to everyone interested in fashion, style,
                beauty and trends, fashiontv understands and caters to its
                audience by providing original, unbiased and informative
                programming not available on other networks. A strong image and
                exceptional awareness of FashionTV’s brand projects a unique,
                cosmopolitan and a modern style allowing for influential
                partnerships with many global brands.
              </p>
            </div>
            <div className="fashion-p1-images">
              <div className="fashion-p1-images-flex1">
                <img className="img-img" src={img} alt="" />
                <h5 className="fashion-branding">Branding</h5>
              </div>
              <div className="fashion-p1-images-flex2">
                <img className="img-img" src={img} alt="" />
                <h5 className="fashion-branding align">Branding</h5>
                <p className="fashion-event">Event</p>
              </div>
            </div>
            <div className="fashion-p1-desc">
              <p className="fashion-p1-desc-p">
                Developing <a href="https://www.fashiontv.com/">FashionTV</a>
                by strategically placed it into upper scale class of event and
                partnership in the Asian Market. My understanding of the chinese
                market have provided me with the tact and prowess to deal with
                VIP Chinese clientele. My connections and experience in
                <a href="https://goo.gl/maps/d2oKy1D4trq">France</a>
                give me the ablity to work within parameters to provide a world
                class experience ‘French’ style. Chic, Elegant with a twist of
                finesse.
              </p>
            </div>
          </div>
          <div className="fashion-p2">
            <div className="fashion-p2-container">
              <div className="fashion-img">
                <img className="logo-p3-img" src={img} alt="" />
              </div>
              <div className="fashion-infos">
                <strong>Yan B</strong>
                <p>Blogger</p>
                <p>September 29,2018</p>
              </div>
            </div>
          </div>
          <div className="fashion-p3">
            <div className="fashion-p3-link1">
              <a className="btn-link1"  href="https://www.fashiontv.com/">
                Link
              </a>
            </div>
            <div className="fashion-p3-link2">
              <a className="btn-link2" href="a2live">
                <span className="nexttext">Next</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
