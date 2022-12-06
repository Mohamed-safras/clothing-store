import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./navbar.styles.scss";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        <Crown />
      </Link>
      <div className="nav-links">
        <NavLinks />
      </div>

      <IconButton className="menu">
        <MenuIcon color="primary" sx={{ fontSize: 40 }} />
      </IconButton>
    </nav>
  );
};

export default Navbar;
