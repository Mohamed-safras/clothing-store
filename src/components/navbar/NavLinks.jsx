import ShopIcon from "@mui/icons-material/Shop";
import React from "react";
import { NavLink } from "react-router-dom";
import NavBarLink from "./NavLink";
import "./navlinks.styles.scss";
const NavLinks = () => {
  return (
    <div className="navbar-links-container">
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "" : undefined)}
          >
            <NavBarLink Icon={ShopIcon} />
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/shop">
            <NavBarLink Icon={ShopIcon} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
