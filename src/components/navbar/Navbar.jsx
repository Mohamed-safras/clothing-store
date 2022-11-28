import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton } from "@mui/material";
import React from "react";
import { BsBagDash } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "../../styles/navbar/navbar.styles.scss";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <Crown />
        </Link>
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
                <ShoppingBagIcon sx={{ color: "#fff", fontSize: 25 }} />
              </IconButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
