import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import usFlag from "./assets/usFlag.png";
import spainFlag from "./assets/spainFlag.png";

import "./components/light-mode/lightMode.css";

import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global");
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`container ${lightMode ? "light-mode" : ""}`}>
      <div className="element-container">
        <button
          className={`language mode-button ${
            lightMode ? "light-mode-button" : ""
          }`}
          onClick={() => setLightMode(!lightMode)}
        >
          {t("mode.mode")}
        </button>
        <button className="language" onClick={() => i18n.changeLanguage("en")}>
          <img src={usFlag} alt="usFlag" className="flag-button" />
        </button>
        <button className="language" onClick={() => i18n.changeLanguage("spa")}>
          <img src={spainFlag} alt="spainFlag" className="flag-button" />
        </button>
      </div>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
