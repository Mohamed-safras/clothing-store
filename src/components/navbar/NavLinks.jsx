import { IconButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navlinks.styles.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/shop"
        >
          SHOP
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
