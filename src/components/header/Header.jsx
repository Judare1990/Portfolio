import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocials";


import { useTranslation } from "react-i18next";

const Header = () => {
  const [t] = useTranslation("global");

  return (
    <header>
      
      <div className="container header__container">
        <h5>{t("header.greeting")}</h5>
        <h1>{t("header.myName")}</h1>
        <h5 className="text-light">{t("header.Position")}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {t("header.Scroll")}
        </a>
      </div>
    </header>
  );
};

export default Header;
