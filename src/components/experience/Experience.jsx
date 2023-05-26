import React from "react";
import "./experience.css";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontEnd">
          <h3>Frontend Development</h3>
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
            <h3>Backend Development</h3>
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
