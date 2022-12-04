import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/ex-profile.jpg";
import NavBarLink from "./NavLink";
import "./navright.styles.scss";
const NavRight = () => {
  const isLoggedIn = true;
  return (
    <div className="nav-right">
      <NavBarLink Icon={LocalMallRoundedIcon} title="Cart" />
      <NavBarLink Icon={FavoriteBorderIcon} title="" />
      {isLoggedIn ? (
        <div className="logo">
          <img src={Profile} alt="" />
        </div>
      ) : (
        <Link
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/signin"
        >
          SIGN IN
        </Link>
      )}
    </div>
  );
};

export default NavRight;
