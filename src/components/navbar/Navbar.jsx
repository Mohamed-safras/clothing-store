import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import Profile from "../../assets/ex-profile.jpg";
import "./navbar.styles.scss";
import NavLinks from "./NavLinks";
const Navbar = ({ toggleTopBar }) => {
  const isLoggedIn = true;
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <img src={Logo} alt="shop-logo" />
      </Link>
      <div className="navlinks">
        <NavLinks />
      </div>
      <div className="nav-right">
        <IconButton className="icon-btn">
          <LocalMallRoundedIcon sx={{ fontSize: 25, color: "#a1a0a5" }} />
        </IconButton>
        <IconButton className="icon-btn">
          <FavoriteBorderIcon sx={{ fontSize: 25, color: "#a1a0a5" }} />
        </IconButton>
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
      <IconButton className="menu" onClick={toggleTopBar}>
        <MenuIcon sx={{ fontSize: 40, color: "#a1a0a5" }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
