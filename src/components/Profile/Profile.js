import React from "react";
import "./profile.scss";

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div
        className="profile__background"
        style={{ backgroundImage: `url("/images/profile.webp")` }}
      ></div>
      <div className="profile__container">
        <h2 className="profile__header">
          Software Engineer & eCommerce Expert
        </h2>
        <span className="profile__divider"></span>
        <p className="profile__subheader">
          I have several years of front and back end development experience
          building and enhancing both large and small scale eCommerce websites
          and applications. Professional knowledge in multiple different web
          development frameworks and libraries, especially React.
        </p>
      </div>
    </section>
  );
};

export default Profile;
