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
    <div className={lightMode ? "light-mode" : ""}>
      <>
        <label className="light-button">
          <input
            type="checkbox"
            checked={lightMode}
            onChange={(handleChange) => setLightMode(!lightMode)}
          />
          <div className="mode">{t("mode.mode")}</div>

          <button
            className="language"
            onClick={() => i18n.changeLanguage("en")}
          >
            <img src={usFlag} alt="usFlag" />
          </button>
          <button
            className="language"
            onClick={() => i18n.changeLanguage("spa")}
          >
            <img src={spainFlag} alt="spainFlag" />
          </button>
        </label>

        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
