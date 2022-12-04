import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/crown.svg";

import "./navbar.styles.scss";
import NavLinks from "./NavLinks";
import NavRight from "./NavRight";
const Navbar = ({ toggleTopBar }) => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img src={Logo} alt="shop-logo" />
      </Link>

      <NavLinks />

      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? " active" : undefined)}
      >
        shop
      </NavLink>
      <IconButton className="menu" onClick={toggleTopBar}>
        <MenuIcon sx={{ fontSize: 40, color: "#a1a0a5" }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
