import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../button-component/button.styles.scss";
const Button = ({ title, event, type }) => {
  return (
    <button
      onClick={() => event()}
      className={`btn ${type === "primary" ? "primary" : "secondary"}`}
    >
      {!type && <FcGoogle className="icon" size={26} />} {title}
    </button>
  );
};

export default Button;
