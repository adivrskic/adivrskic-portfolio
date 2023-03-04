import React, { useContext } from "react";
import "./header.scss";
import {
  IoFingerPrintSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoDocumentTextSharp,
} from "react-icons/io5";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { StateContext } from "../../context/StateProvider";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [{}, dispatch] = useContext(StateContext);

  return (
    <header
      className={`header ${scrollDirection === "down" ? "header--hidden" : ""}`}
    >
      <div
        className="header__menu"
        onClick={() => dispatch({ type: "TOGGLE_MENU" })}
      >
        <IoFingerPrintSharp className="header__icon header__icon--menu" />
      </div>
      <div className="header__external">
        <a href="https://github.com/adivrskic">
          <IoLogoGithub className="header__icon" />
        </a>
        <a href="https://www.linkedin.com/in/adi-vrskic-48758213b/">
          <IoLogoLinkedin className="header__icon" />
        </a>
        <a href="/assets/AdiVrskicResume.pdf" download>
          <IoDocumentTextSharp className="header__icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
