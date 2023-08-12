import React from "react";
import CV from "../../assets/cvDisenado.pdf";

import { useTranslation } from "react-i18next";

const CTA = () => {
  const [t] = useTranslation("global");

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("cv.cv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("about.contact")}
      </a>
    </div>
  );
};

export default CTA;
