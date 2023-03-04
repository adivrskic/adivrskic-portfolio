import React from "react";
import "./container.scss";

const Container = ({ hasInner, children }) => {
  return (
    <div className="container">
      {hasInner ? <div className="container-inner">{children}</div> : children}
    </div>
  );
};

export default Container;
