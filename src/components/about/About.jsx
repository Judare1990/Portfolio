import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";

import { useTranslation } from "react-i18next";

const About = () => {

  const [t] = useTranslation("global");

  return (
    <section id="about">
      <h5>{t("about.getTo")}</h5>
      <h2>{t("about.aboutme")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <p className="about__me-content">
          {t("about.intro")}
          <a href="#contact" className="btn btn-primary">
            {t("about.contact")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
