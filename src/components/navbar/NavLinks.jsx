import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navlinks.stles.scss";
const NavLinks = () => {
  return (
    <ul className="navbar-links">
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/shop"
        >
          Shop
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/cart"
        >
          <IconButton>
            <ShoppingBagIcon color="primary" sx={{ fontSize: 25 }} />
          </IconButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
