import React, { useContext, useEffect } from "react";
import "./menu.scss";
import { menuItems } from "../../data/menuItems";
import { StateContext } from "../../context/StateProvider";

const Menu = () => {
  const [{ showMenu }, dispatch] = useContext(StateContext);

  const onMenuClick = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  return (
    <section
      id="menu"
      className={`menu ${showMenu ? "menu--open" : "menu--close"}`}
      onClick={() => dispatch({ type: "TOGGLE_MENU" })}
    >
      <div className="menu__items">
        {menuItems.map((item) => (
          <a
            key={item.id}
            className="menu__item"
            href={item.link}
            onClick={(e) => onMenuClick(e, item.link)}
            download={item.isDownload}
          >
            <h2 className="menu__item-header">{item.displayText}</h2>
            <img
              className="menu__item-image"
              src={`/images/${item.bg}`}
              alt={item.bgAlt}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Menu;
