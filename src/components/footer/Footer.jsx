import React from "react";
import "./footer.css";

import { useTranslation } from "react-i18next";

const Footer = () => {

  const [t] = useTranslation("global");

  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">{t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#experience">{t("footer.experience")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("footer.portfolio")}</a>
        </li>
        <li>
          <a href="#contact">{t("footer.contact")}</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; {t("footer.rights")} </small>
      </div>
    </footer>
  );
};

export default Footer;
