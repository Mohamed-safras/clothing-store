import React from "react";

import "../button-component/button.styles.scss";

const Button = ({ title, event, type, Icon }) => {
  return (
    <div
      onClick={event && (() => event())}
      className={`btn ${type === "primary" ? "primary" : "secondary"}`}
    >
      {Icon && <img className="icon" src={Icon} alt="icon" />}
      <p>{title}</p>
    </div>
  );
};

export default Button;
