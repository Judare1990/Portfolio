import React from "react";
import "./portfolio.css";
import Pokedex from "../../assets/Pokedex.jpg";
import Ecommerce from "../../assets/Ecommerce.png";
import Rick from "../../assets/Rick.png";
import WeatherApp from "../../assets/WeatherApp.png";
import InfoCards from "../../assets/InfoCards.png";

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
          <h3>POKEAPI</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Judare1990/Entregable5"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://dazzling-fenglisu-939c6b.netlify.app/#/pokedex/2"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={Ecommerce} alt="" />
          <h3>ECOMMERCE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Judare1990/Ecommerce1"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://melodious-pasca-979bce.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={Rick} alt="" />
          <h3>RICK AND MORTY</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Judare1990/Entregable3-Gen22"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://whimsical-kleicha-3ffa18.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={WeatherApp} alt="" />
          <h3>WEATHER APP</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Judare1990/Entregable2-__Gen22"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://startling-lily-158bb3.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={InfoCards} alt="" />
          <h3>INFO CARDS</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Judare1990/Entregable1__gen22"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://storied-snickerdoodle-7d7938.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
