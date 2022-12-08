import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import "./navbar.styles.scss";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <Crown />
      </Link>

      <div className="nav-links">
        <NavLinks />
      </div>
      <div className="nav-right">
        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <IconButton className="icon-button">
            <FavoriteBorderIcon
              sx={{ fontSize: 25, color: "#a1a0a5", margin: "0 15px" }}
            />
          </IconButton>
        </NavLink>
        <NavLink to="/cart">
          <IconButton className="icon-button">
            <ShoppingCartOutlinedIcon
              className="icon-btn"
              sx={{ fontSize: 25, color: "#a1a0a5", margin: "0 15px" }}
            />
          </IconButton>
        </NavLink>

        {!currentUser ? (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/signin"
          >
            Sign In
          </NavLink>
        ) : (
          <React.Fragment>
            {currentUser.photoURL ? (
              <Avatar
                alt={currentUser.displayName}
                src={currentUser.photoURL}
                sx={{ width: 32, height: 32, margin: "0 15px" }}
              />
            ) : (
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {currentUser.displayName[0]}
              </Avatar>
            )}
          </React.Fragment>
        )}
      </div>

      <IconButton className="menu">
        <MenuIcon color="primary" sx={{ fontSize: 40 }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
