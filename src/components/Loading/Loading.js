import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <section id="loading" className="loading">
      <div className="loading__bg"></div>

      <h2 className="loading__header">Adi VrŠkiĆ</h2>
      <p className="loading__subheader">
        Software Engineer<span className="loading__separator"></span>React &
        eCommerce Developer
      </p>
    </section>
  );
};

export default Loading;
