import React from "react";
import "./landing.scss";

const Landing = () => {
  return (
    <section id="landing" className="landing">
      <h1 className="landing__header">Adi VrŠkiĆ</h1>
      <p className="landing__subheader">
        Innovating eCommerce with React, Shopify, and Squarespace
      </p>
      <div className="landing__button-container">
        <a href="#work" className="landing__button">
          Browse Projects
        </a>
      </div>
    </section>
  );
};

export default Landing;
