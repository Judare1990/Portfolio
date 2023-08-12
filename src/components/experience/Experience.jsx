import React from "react";
import "./experience.css";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t] = useTranslation("global");

  return (
    <section id="experience">
      <h5>{t("experience.skills")}</h5>
      <h2>{t("experience.experience")}</h2>
      <div className="container experience__container">
        <div className="experience__frontEnd">
          <h3>{t("experience.front")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>REDUX</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backEnd">
          <div>
            <h3>{t("experience.back")}</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>NODE JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>POSTGRESQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>GIT HUB</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
