import React from "react";
import NavLinks from "../navbar/NavLinks";
import "./sidebar.styles.scss";
const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
      <NavLinks />
    </div>
  );
};

export default SideBar;
