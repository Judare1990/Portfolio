import React, { useState } from "react";
import CVEnglish from "../../assets/cvDisenadoSpanish.pdf";
import CVSpanish from "../../assets/cvDisenado.pdf";

import { useTranslation } from "react-i18next";

const CTA = () => {
  const [t] = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = (lang) => {
    closeModal();
    const cvFileName = lang === "english" ? CVSpanish : CVEnglish;
    window.open(cvFileName, "_blank");
  };

  return (
    <div className="cta">
      {isModalOpen ? (
        <div className="modal">
          <h2>{t("header.chooseLanguage")}</h2>
          <button
            className="cvLanguages"
            onClick={() => handleDownload("english")}
          >
            English
          </button>
          <button
            className="cvLanguages"
            onClick={() => handleDownload("spanish")}
          >
            Español
          </button>
          <button className="cvLanguages" onClick={closeModal}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <button onClick={openModal} className="btn">
            {t("cv.cv")}
          </button>
          <a href="#contact" className="btn btn-primary">
            {t("about.contact")}
          </a>
        </>
      )}
    </div>
  );
};

export default CTA;
