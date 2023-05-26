import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/juan-d-reyes/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Judare1990" target="_blank" rel="noopener noreferrer">
        <FaGithubAlt />
      </a>
    </div>
  );
};

export default HeaderSocials;
