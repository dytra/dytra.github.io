import React from "react";
import { Link } from "gatsby";
import "./Hero.scss";
import painter from "../../images/painter.svg";
const Hero = () => (
  <div id="hero">
    <div id="hero-container">
      <aside id="hero-intro">
        <p>Hi there, I’m dytra</p>
        <p>I build web apps that users love to use</p>
        <p>I'm a Frontend web developer with solid experience in web development and UI design. I like to build web apps by making your UI/UX design to have a life in the real world.</p>
        <div id="hero-callouts">
          <Link to="/contact" className="primary-btn">Get in Touch</Link>
          <Link to="/portofolio" className="secondary-btn btn">See my works</Link>
        </div>
      </aside>
      <aside id="hero-image">
        <img src={painter}></img>
      </aside>

      {/* <p>I'm <strong>Widhi</strong>, Frontend Web Developer at Jagain.com</p>
      <p>I like to describe my self as one of the artist+craftsman in the digital world.</p>
      <p>Wanna know more about me? Jump to <Link to="/about">About</Link> page.</p> */}

    </div>
  </div>
)

export default Hero;