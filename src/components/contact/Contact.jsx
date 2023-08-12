import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_s36gmae",
      "template_0ushc6c",
      form.current,
      "VmBKEnLdeilUQRB1m"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{t("contact.getintouch")}</h5>
      <h2>{t("contact.contact")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>{t("contact.email")}</h4>
            <h5>judare85@hotmail.com</h5>
            <a href="mailto:judare85@hotmail.com">{t("contact.sendMessage")}</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatssap</h4>
            <h5>+57 3214850866</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+573214850866"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.sendMessage")}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.placeholder")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.yourEmail")}
          />
          <textarea
            name="message"
            placeholder={t("contact.yourMessage")}
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn__primary">
            {t("contact.sendMessage")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
