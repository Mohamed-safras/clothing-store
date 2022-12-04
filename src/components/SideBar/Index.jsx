import React from "react";
import NavLinks from "../navbar/NavLinks";
import NavRight from "../navbar/NavRight";
import "./sidebar.styles.scss";
const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
      {/*<NavLinks />
  <NavRight />*/}
    </div>
  );
};

export default SideBar;
