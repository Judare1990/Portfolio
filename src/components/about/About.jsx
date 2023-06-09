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
            <img src={ME} alt="" />
          </div>
        </div>
        <p className="about__me-content">
          I am a full-stack web developer who is passionate about programming,
          conflict resolution and teamwork, based on discipline and
          perseverance. I stand out for my adaptability to change. Furthermore,
          i like to meet the goals set and learn from each project in order to
          grow up personally and professionally every day. I always try to find
          the best way to solve issues that we can face up at work. I am willing
          to learn new programming languages.
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
