import React from "react";
import "./portfolio.css";
import data from "./portfolio_data"


const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo, icon, icon1, icon2, icon3, icon4, icon5}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p className="project-description">{description}</p>
          <div className="portfolio__item-cta">
            <div className="project-icons">{icon} {icon1} {icon2} {icon3} {icon4} {icon5}</div>
            <br></br>
            <div className="portfolio-btn">
            <a href={github} className="btn-white" target="_blank">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
