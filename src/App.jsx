import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./components/light-mode/lightMode.css";

function App() {
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
          <div className="mode">Mode</div>
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
