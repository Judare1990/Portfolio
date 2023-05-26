import React from "react";
import "./portfolio.css";
import Pokedex from "../../assets/Pokedex.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Pokedex} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="" className="btn" target="_blank">
            GITHUB
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
