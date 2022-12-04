import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

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
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/signin"
        >
          SIGN IN
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
