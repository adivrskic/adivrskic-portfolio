import React, { useState } from "react";
import "./contact.scss";
const Contact = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const onFormChange = (e, el) => {
    if (el === "name") {
      setFormName(e.target.value);
    } else if (el === "email") {
      setFormEmail(e.target.value);
    } else if (el === "message") {
      setFormMessage(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div
        className="contact__background"
        style={{ backgroundImage: `url("/images/contact.webp")` }}
      ></div>
      <div className="contact__container">
        <form className="contact__form">
          <div className="contact__form-input-container">
            <label for="name" className="contact__form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formName}
              onChange={(e) => onFormChange(e, "name")}
              className="contact__form-input"
            />
          </div>
          <div className="contact__form-input-container">
            <label for="email" className="contact__form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formEmail}
              onChange={(e) => onFormChange(e, "email")}
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-input-container">
            <label for="message" className="contact__form-label">
              Message
            </label>
            <textarea
              id="message"
              value={formMessage}
              onChange={(e) => onFormChange(e, "message")}
              className="contact__form-textarea"
              rows="8"
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact__form-submit"
            onClick={() => onFormSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
