import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { IconButton } from "@mui/material";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../../context/user.context";
import "./navlinks.stles.scss";
const NavLinks = () => {
  return (
    <ul className="navbar-links">
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/shop"
        >
          Shop
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
