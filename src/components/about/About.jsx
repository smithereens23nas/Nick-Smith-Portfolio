import React from "react";
import "./about.css";
import ME from "../../assets/test.jpg";
import { FaAward } from "react-icons/fa";
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>I started immersing myself in technology when I worked in the cybersecurity industry for 2 years gaining insightful knowledge that gave me a firm understanding of best practices in securing one’s code and infrastructure. Software engineering enables me to build logic that is well suited to meet specific requirements to achieve an expected outcome. I take pride in using my professional skills to support the entrepreneurial culture of start-ups and smaller companies. I’m resilient and disciplined in staying focused on completing my goals until my desired outcome is met, and I love going above and beyond, reaching for the stars to outperform expectations, and putting smiles on faces.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
