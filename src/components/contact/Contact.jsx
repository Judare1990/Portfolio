import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>judare85@hotmail.com</h5>
            <a href="mailto:judare85@hotmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatssap</h4>
            <h5>+57 3214850866</h5>
            <a href="https://api.whatsapp.com/send?phone=+573214850866">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn__primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
