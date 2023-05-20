import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <p className="about__me-content">
          I am a full-stack web developer who loves what I do. I stand out for
          my teamwork and my perseverance; I like to meet the goals set and
          learn from each project in order to grow up personally and
          professionally every day. I always try to find the best way to solve
          issues that we can face up at work. I am willing to learn new
          programming languages.
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
